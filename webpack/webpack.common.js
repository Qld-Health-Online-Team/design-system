const path = require("path");
const CopyWebpackPlugin = require("copy-webpack-plugin");
const MiniCssExtractPlugin = require("mini-css-extract-plugin");

const copyWebPack = new CopyWebpackPlugin({
  patterns: [
    {
      from: path.resolve(__dirname, "../src/externals"),
      to: "externals",
      globOptions: {
        ignore: ["__What is this folder for"],
      },
    },
    {
      from: path.resolve(__dirname, "../src/assets"),
      to: "mysource_files",
      globOptions: {
        ignore: ["__What is this folder for"],
      },
    },
  ],
});

module.exports = {
  entry: {
    main: "./src/index.js",
    banner_contained: ["./src/styles/banner_contained/globals.scss"],
  },
  output: {
    path: path.resolve(__dirname, "../dist"), // Output folder
    filename: "js/[name].js", // JS output path
    clean: true, // 💥 This tells Webpack 5 to clean the output dir
  },
  resolve: {
    alias: {
      NodeModules: path.resolve(__dirname, "../node_modules/"),
      src: path.resolve(__dirname, "../src/"),
    },
  },
  module: {
    rules: [
      {
        // Images
        test: /\.(png|svg|jpg|gif|ico)$/,
        type: "asset/resource",
        generator: {
          filename: "mysource_files/[name][ext]",
        },
      },
      {
        // Font files
        test: /\.(woff(2)?|ttf|eot|otf)(\?v=\d+\.\d+\.\d+)?$/,
        type: "asset/resource",
        generator: {
          filename: "mysource_files/[name][ext]",
        },
      },
      // For TinyMCE
      {
        test: /skin\.css$/i,
        use: [MiniCssExtractPlugin.loader, "css-loader"],
      },
      {
        test: /content\.css$/i,
        use: ["css-loader"],
      },
      {
        test: /tinymce_classes\.css$/i,
        use: ["css-loader"],
      },
      // For Select2
      {
        test: /select2\.css$/i,
        use: ["style-loader", "css-loader"],
      },
    ],
  },
  plugins: [copyWebPack],
  optimization: {
    minimize: false,
    runtimeChunk: "single",
  },
};
