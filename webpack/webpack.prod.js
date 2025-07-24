const merge = require("webpack-merge");
const common = require("./webpack.common.js");
const path = require("path");
const { CleanWebpackPlugin } = require("clean-webpack-plugin");
const MiniCssExtractPlugin = require("mini-css-extract-plugin");
const PrecompilePlugin = require("./PrecompilePlugin");
const JsonMergePlugin = require("./JsonMergePlugin");
const TerserPlugin = require("terser-webpack-plugin");

module.exports = (env) => {
    return merge(common, {
        mode: "production",
        devtool: "source-map",
        module: {
            rules: [
                {
                    test: /\.scss$/,
                    use: [
                        MiniCssExtractPlugin.loader,
                        "css-loader",
                        "postcss-loader",
                        "sass-loader",
                        "import-glob-loader",
                    ],
                },
                {
                    // Handlebars
                    test: /\.hbs$/,
                    use: [
                        {
                            loader: "handlebars-loader",
                            options: {
                                helperDirs: path.resolve(
                                    __dirname,
                                    "../src/helpers/Handlebars"
                                ),
                            },
                        },
                    ],
                    enforce: "post",
                },
            ],
        },
        plugins: [
            new MiniCssExtractPlugin({
                filename: "[name].css",
                chunkFilename: "[name].css",
            }),
            new CleanWebpackPlugin(),
            new PrecompilePlugin({
                input: "./src/components/**/**/*.hbs",
                manifest: "./src/components/**/js/manifest.json",
                output: "./dist/components/",
                helpersInput: "./src/helpers/Handlebars/*.js",
                helpersOutput: "./src/helpers/Handlebars/*.js",
            }),
        ],
        optimization: {
            minimize: true,
            minimizer: [
                new TerserPlugin({
                    extractComments: false,
                }),
            ],
        },
    });
};
