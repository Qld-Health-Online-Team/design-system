// Entry for dist/js/helpers.js (see webpack/webpack.helpers.js). Bundling the
// helpers, rather than serialising each one with fn.toString(), is what lets a
// helper import a module or close over one: the module scope ships with it.
//
// Helper name = file name, as in Storybook.

/* global require -- webpack's require.context, resolved at build time */

import Handlebars from "handlebars";

const helpers = require.context(
  "./Handlebars",
  false,
  /^\.\/(?!.*\.(?:test|spec)\.js$)[^/]+\.js$/,
);

helpers
  .keys()
  // webpack lists each module under its absolute request as well as the
  // ./-relative key; take one of the two.
  .filter((key) => key.startsWith("./"))
  .forEach((key) => {
    const mod = helpers(key);
    const name = key.slice(2, -".js".length);

    Handlebars.registerHelper(name, mod && mod.__esModule ? mod.default : mod);
  });
