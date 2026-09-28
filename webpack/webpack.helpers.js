const path = require("path");
const TerserPlugin = require("terser-webpack-plugin");

// Builds dist/js/helpers.js: the Handlebars helpers that Matrix loads
// alongside Handlebars itself to render the precompiled components. Matrix
// loads it from the git bridge in the site <head> (runat="server" for the live
// render, plus a client-side <script>) and in the component CT edit layout,
// and both assume a global Handlebars is already on the page. A compiler of
// its own rather than a second entry on the main config, because
// it wants none of what that config gives main.js — no runtime.js split
// (Matrix loads helpers.js on its own), no copied assets, and Handlebars taken
// from the page rather than bundled.
//
// `dependencies` runs it after the main compiler, whose output.clean would
// otherwise remove the file.
module.exports = {
  name: "helpers",
  dependencies: ["main"],
  mode: "production",
  devtool: "source-map",
  entry: "./src/helpers/register.js",
  output: {
    path: path.resolve(__dirname, "../dist"),
    filename: "js/helpers.js",
  },
  externals: {
    handlebars: "Handlebars",
  },
  optimization: {
    minimize: true,
    minimizer: [
      new TerserPlugin({
        extractComments: false,
      }),
    ],
  },
};
