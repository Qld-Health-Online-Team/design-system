const glob = require("glob");
const Handlebars = require("handlebars");
const fs = require("fs");
const { logger } = require("handlebars");
const generateImportXml = require("./generateImportXml");

/**
 * Collect the Handlebars helper modules that make up the design system's
 * helper set.
 *
 * Colocated unit tests are excluded — only real helper modules should be
 * serialised into dist/js/helpers.js. The helpersInput glob (`*.js`)
 * otherwise also matches sibling `*.test.js` / `*.spec.js` files, and
 * requiring those would run test code (e.g. `describe`) during the build.
 *
 * @param {string} helpersInput - Glob for helper modules (e.g. "./src/helpers/Handlebars/*.js").
 * @returns {{name: string, fn: Function}[]} One entry per helper, named after its file.
 */
function loadHelpers(helpersInput) {
  return glob
    .sync(helpersInput)
    .filter((helperPath) => !/\.(test|spec)\.js$/.test(helperPath))
    .map((helperPath) => {
      // Helper name comes from the file name (5th path segment of the
      // ./src/helpers/Handlebars/<name>.js glob result).
      const name = helperPath.split("/")[4].split(".")[0];

      const imported = require(helperPath.replace("./src", "../src"));

      // Support both `module.exports = fn` (CommonJS) and `export default fn`
      // (ES module) helpers. Node's require() of an ES module returns the
      // module namespace ({ __esModule, default: fn }) rather than the function
      // itself, so unwrap .default when present.
      const fn = imported && imported.__esModule ? imported.default : imported;

      return { name, fn };
    });
}

/**
 * Serialise the helpers into the dist/js/helpers.js bundle.
 *
 * The bundle is a flat list of `Handlebars.registerHelper(name, fn)` calls
 * (each helper's source inlined via Function.toString). Squiz Matrix loads
 * this file from the git bridge in two places, both of which assume a global
 * `Handlebars` is already loaded: the site <head> (runat="server" for the
 * live render, plus a client-side <script>) and the component CT edit layout
 * (for the admin edit-screen preview).
 *
 * @param {{name: string, fn: Function}[]} helpers
 * @returns {string} The helpers.js file contents.
 */
function buildHelpersBundle(helpers) {
  return helpers
    .map(
      ({ name, fn }) =>
        `Handlebars.registerHelper('${name}', ${fn.toString()}); \n`,
    )
    .join("");
}

/**
 * Emit one component's Squiz Matrix contract files into
 * `<outputPath>/<componentName>/`:
 *
 * - manifest.json — copied verbatim from src. Read live by the CT edit
 *   layout (via the component's repositorySource path) for `display_if`
 *   conditional field visibility.
 * - import.xml — Matrix bulk-import file for one-time manual provisioning
 *   of the component's CCT + metadata schema (see generateImportXml.js).
 *   Only produced when the manifest is non-empty.
 * - presentation.js — the .hbs template precompiled with
 *   Handlebars.precompile. Executed by Matrix both server-side (live render
 *   in the site head) and client-side (edit-screen preview).
 *
 * @param {string} templatePath - Path to the component's .hbs template (./src/components/<name>/...).
 * @param {string} manifestGlob - Manifest path pattern with "**" standing in for the component name.
 * @param {string} outputPath - Component output root (e.g. "./dist/components").
 */
function emitComponent(templatePath, manifestGlob, outputPath) {
  const templateSource = fs.readFileSync(templatePath, "utf8");

  // Component name is the folder under ./src/components/.
  const componentName = templatePath.split("/")[3];
  const componentDir = `${outputPath}/${componentName}`;

  logger.log(componentName);

  fs.mkdirSync(componentDir, { recursive: true });

  const manifestData = fs.readFileSync(
    manifestGlob.replace("**", componentName),
    "utf8",
  );

  fs.writeFileSync(`${componentDir}/manifest.json`, manifestData);

  if (manifestData.length) {
    fs.writeFileSync(
      `${componentDir}/import.xml`,
      generateImportXml(componentName, JSON.parse(manifestData)),
    );
  }

  fs.writeFileSync(
    `${componentDir}/presentation.js`,
    Handlebars.precompile(templateSource),
  );
}

/**
 * Webpack plugin that publishes the Squiz Matrix contract into dist/.
 *
 * Matrix consumes dist/ directly through a Git File Bridge (develop branch →
 * developer site, master → live sites), so everything written here is read
 * by Matrix at runtime — with the exception of import.xml, which is a manual
 * one-time provisioning aid.
 *
 * Outputs:
 * - dist/js/helpers.js (afterEmit hook) — all Handlebars helpers, loaded by
 *   the Matrix site head and CT edit layouts.
 * - dist/components/<name>/{manifest.json,import.xml,presentation.js}
 *   (done hook) — per-component contract files; see emitComponent.
 *
 * Options:
 * - input: glob for component .hbs templates.
 * - manifest: manifest.json path pattern ("**" = component name).
 * - output: directory the per-component folders are written to.
 * - helpersInput: glob for Handlebars helper modules.
 */
class PrecompilePlugin {
  constructor(options = {}) {
    this.options = options;
  }

  apply(compiler) {
    const outputPath = this.options.output.endsWith("/")
      ? this.options.output.slice(0, -1)
      : this.options.output;
    const hbsTemplates = glob.sync(this.options.input);
    const helpersBundle = buildHelpersBundle(
      loadHelpers(this.options.helpersInput),
    );

    compiler.hooks.afterEmit.tap("PrecompilePlugin", () => {
      fs.mkdirSync("./dist/js", { recursive: true });
      fs.writeFileSync("./dist/js/helpers.js", helpersBundle);
      console.log("helpers.js written after emit");
    });

    compiler.hooks.done.tap("PrecompilePlugin", () => {
      hbsTemplates.forEach((templatePath) =>
        emitComponent(templatePath, this.options.manifest, outputPath),
      );
    });
  }
}

module.exports = PrecompilePlugin;
