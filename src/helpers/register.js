// Entry for dist/js/helpers.js (see vite.config.helpers.mjs). Bundling the
// helpers, rather than serialising each one with fn.toString(), is what lets a
// helper import a module or close over one: the module scope ships with it.
//
// Helper name = file name, as in Storybook.

import Handlebars from "handlebars";

const helpers = import.meta.glob(
  ["./Handlebars/*.js", "!./Handlebars/*.{test,spec}.js"],
  { eager: true, import: "default" },
);

for (const [file, helper] of Object.entries(helpers)) {
  const name = file.slice("./Handlebars/".length, -".js".length);

  Handlebars.registerHelper(name, helper);
}
