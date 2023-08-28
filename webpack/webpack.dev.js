const merge = require('webpack-merge');
const common = require('./webpack.common.js');
const path = require('path');

module.exports = merge(common, {
    mode: 'development',
    devtool: 'eval-cheap-source-map',
    devServer: {
        static: {
            directory: path.join(__dirname, '../dist'),
        },
        client: {
            overlay: false,
        },
        hot: true,
        host: '0.0.0.0',
        port: 8080,
    },
    module: {
        rules: [
            {
                test: /\.scss$/,
                use: [
                    "style-loader",
                    "css-loader",
                    "postcss-loader",
                    "sass-loader",
                    "import-glob-loader"
                ]
            },
            { // Handlebars
                test: /\.hbs$/,
                use:[
                    {
                        'loader':'handlebars-loader',
                        'options':{
                            helperDirs: path.resolve(__dirname, "../src/helpers/Handlebars")
                        },
                    },
                    {
                        'loader':'string-replace-loader',
                        'options':{
                            'search':/\.\/\?a=/g,
                            'replace':''
                        }
                    }      
                ],
                enforce:"post"
            }
        ]
    }
});
