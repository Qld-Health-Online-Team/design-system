const path = require("path");

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
    ],
  },
  optimization: {
    minimize: false,
    runtimeChunk: "single",
  },
};
