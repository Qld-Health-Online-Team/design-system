/** This was made for the sole purpose of webpackin' QH common files (based on QH version) */
const path = require('path');

/** Webpack plugins */
const MiniCssExtractPlugin = require("mini-css-extract-plugin");
const { CleanWebpackPlugin } = require('clean-webpack-plugin');
const CssMinimizerPlugin = require('css-minimizer-webpack-plugin');

module.exports = {
    mode: 'development',
    entry: [
        './.migrate/styles/global.scss',
        './.migrate/main.js'
    ],
    output: {
        path: path.resolve(__dirname, '../dist/'),
        filename: 'js/bundle.js',
    },
    module: {
        rules: [
            {
                test: /\.scss$/,
                use: [
                    MiniCssExtractPlugin.loader,
                    "css-loader",
                    "postcss-loader",
                    "sass-loader",
                    "import-glob-loader"
                ]
            },
            {
                test: /\.hbs$/,
                use: [
                    {
                        'loader': 'handlebars-loader',
                        'options': {
                            helperDirs: path.resolve(__dirname, "../src/helpers/Handlebars")
                        },
                    }
                ],
                enforce: "post",
            }
        ],
    },
    plugins: [
        new MiniCssExtractPlugin({
            filename: 'css/main.min.css', 
        }),
        new CleanWebpackPlugin(),
    ],
    optimization: {
        minimize: true,
        minimizer: [
            new CssMinimizerPlugin(),
        ],
    },
};
