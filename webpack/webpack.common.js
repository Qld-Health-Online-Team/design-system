const HtmlWebPackPlugin = require("html-webpack-plugin");
const ESLintPlugin = require('eslint-webpack-plugin');
const path = require('path');
const fs = require('fs');
const glob = require('glob');
const CopyWebpackPlugin = require('copy-webpack-plugin');
const MiniCssExtractPlugin = require("mini-css-extract-plugin");

// Our function that generates our html plugins
function generateHtmlPlugins(templateDir) {
    // Read files in /html directory
    const templateFiles = fs
        .readdirSync(path.resolve(__dirname, templateDir))
        .filter(function(file) { //ignore folder
            return file.indexOf('.html') > -1
        });

    return templateFiles.map(item => {
        // Split names and extension
        const parts = item.split('.')
        const name = parts[0]
        const extension = parts[1]

        // Create new HTMLWebpackPlugin with options
        return new HtmlWebPackPlugin({
            'filename': `${name}.html`,
            'template': path.resolve(__dirname, `${templateDir}/${name}.${extension}`)
        });
    });
}
const htmlPlugins = generateHtmlPlugins('../src/html');

// File arrays
let js_files = glob.sync('./src/**/**/global.js') // Module JS

function reloadHtml() {
    const cache = {};
    const plugin = {
        name: 'CustomHtmlReloadPlugin',
        apply: (compiler) => {
            compiler.hooks.compilation.tap(plugin.name, (compilation) => {
                HtmlWebpackPlugin.getHooks(compilation).afterEmit.tap(plugin.name, (data) => {
                    const orig = cache[data.outputName];
                    const html = data.html.source();
                    // plugin seems to emit on any unrelated change?
                    if (orig && orig !== html) {
                        devServer.sockWrite(devServer.sockets, 'content-changed');
                    }
                    cache[data.outputName] = html;
                });
            });
        }
    };
    return plugin;
}

const copyWebPack = new CopyWebpackPlugin({
    patterns: [
        {
            from: path.resolve(__dirname, '../src/externals'),
            to: 'externals',
            globOptions: {
                ignore: ['__What is this folder for']
            }
        },
        {
            from: path.resolve(__dirname, '../src/assets'),
            to: 'mysource_files',
            globOptions: {
                ignore: ['__What is this folder for']
            }
        }
    ],
});

module.exports = {
    entry: {
        main: ['./src/index.js'].concat(js_files)
    },
    output: {
        path: path.resolve(__dirname, '../dist'), // Output folder
        filename: 'js/[name].js', // JS output path
    },
    resolve: {
        alias: {
            NodeModules: path.resolve(__dirname, '../node_modules/'),
            src: path.resolve(__dirname, '../src/')
        }
    },
    module: {
        rules: [{ // HTML
                test: /\.html$/,
                use: [{
                    loader: "html-loader",
                    options: {
                        minimize: false,
                        sources:false,
                        interpolate: true, // allow HTML snippets with commonJs require tags
                    }
                }]
            },
            { // Images
                test: /\.(png|svg|jpg|gif|ico)$/,
                type: 'asset/resource',
                generator: {
                    filename: 'mysource_files/[name][ext]'
                }
            },
            { // Font files
                test: /\.(woff(2)?|ttf|eot|otf)(\?v=\d+\.\d+\.\d+)?$/,
                type: 'asset/resource',
                generator: {
                    filename: 'mysource_files/[name][ext]'
                }
            } ,
            // For TinyMCE
            {
                test: /skin\.css$/i,
                use: [MiniCssExtractPlugin.loader, 'css-loader'],
            },
            {
                test: /content\.css$/i,
                use: ['css-loader'],
            },
            {
                test: /tinymce_classes\.css$/i,
                use: ['css-loader'],
            },
            // For Select2
            {
                test: /select2\.css$/i,
                use:[
                    'style-loader',
                    'css-loader'
                ],
            }
        ]
    },
    plugins: htmlPlugins.concat(reloadHtml).concat(copyWebPack).concat(new ESLintPlugin),
    optimization: {
        minimize: false,
        runtimeChunk: 'single'
    }
};