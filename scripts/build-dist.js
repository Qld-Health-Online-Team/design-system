const glob = require("glob");
const Handlebars = require("handlebars");
const fs = require("fs");
const path = require("path");
const { logger } = require("handlebars");
const { minify } = require("terser");
const generateImportXml = require("./import-xml");

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
 * Copy a directory into dist/, skipping the placeholder note folders.
 *
 * @param {string} from - Source directory.
 * @param {string} to - Destination directory.
 */
function copyDir(from, to) {
  fs.cpSync(from, to, {
    recursive: true,
    filter: (source) => path.basename(source) !== "__What is this folder for",
  });
}

/**
 * Write a minified copy of each script in src/externals into dist/externals.
 *
 * `ecma: 2015` matches what the webpack build's Terser pass used, which keeps
 * the output byte-identical (for instance, it emits `{current}` shorthand).
 *
 * @param {string} from - Source directory of scripts.
 * @param {string} to - Destination directory.
 */
async function minifyDir(from, to) {
  fs.mkdirSync(to, { recursive: true });
  for (const name of fs.readdirSync(from)) {
    if (name === "__What is this folder for") continue;
    const { code } = await minify(fs.readFileSync(`${from}/${name}`, "utf8"), {
      ecma: 2015,
    });
    fs.writeFileSync(`${to}/${name}`, code);
  }
}

/**
 * Publish the Squiz Matrix contract into dist/.
 *
 * Matrix consumes dist/ directly through a Git File Bridge (develop branch →
 * developer site, master → live sites), so everything written here is read
 * by Matrix at runtime — with the exception of import.xml, which is a manual
 * one-time provisioning aid.
 *
 * Outputs:
 * - dist/js/helpers.js — all Handlebars helpers, loaded by the Matrix site
 *   head and CT edit layouts.
 * - dist/components/<name>/{manifest.json,import.xml,presentation.js} —
 *   per-component contract files; see emitComponent.
 * - dist/externals and dist/mysource_files — copies of src/externals and
 *   src/assets.
 *
 * Options:
 * - input: glob for component .hbs templates.
 * - manifest: manifest.json path pattern ("**" = component name).
 * - output: directory the per-component folders are written to.
 * - helpersInput: glob for Handlebars helper modules.
 */
async function buildDist(options) {
  const outputPath = options.output.endsWith("/")
    ? options.output.slice(0, -1)
    : options.output;

  fs.mkdirSync("./dist/js", { recursive: true });
  fs.writeFileSync(
    "./dist/js/helpers.js",
    buildHelpersBundle(loadHelpers(options.helpersInput)),
  );
  console.log("helpers.js written");

  glob
    .sync(options.input)
    .forEach((templatePath) =>
      emitComponent(templatePath, options.manifest, outputPath),
    );

  await minifyDir("./src/externals", "./dist/externals");
  copyDir("./src/assets", "./dist/mysource_files");
}

const defaultOptions = {
  input: "./src/components/**/**/*.hbs",
  manifest: "./src/components/**/js/manifest.json",
  output: "./dist/components/",
  helpersInput: "./src/helpers/Handlebars/*.js",
};

if (require.main === module) {
  buildDist(defaultOptions).catch((error) => {
    console.error(error);
    process.exit(1);
  });
}

module.exports = {
  loadHelpers,
  buildHelpersBundle,
  emitComponent,
  minifyDir,
  buildDist,
};
