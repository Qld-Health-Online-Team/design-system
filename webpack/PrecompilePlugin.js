const glob = require("glob");
const Handlebars = require("handlebars");
const fs = require("fs");
const { logger } = require("handlebars");
const generateImportXml = require("./generateImportXml");

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
 * Outputs dist/components/<name>/{manifest.json,import.xml,presentation.js}
 * (done hook) — per-component contract files; see emitComponent.
 * dist/js/helpers.js, the helpers those templates call, is its own compiler
 * (see webpack.helpers.js).
 *
 * Options:
 * - input: glob for component .hbs templates.
 * - manifest: manifest.json path pattern ("**" = component name).
 * - output: directory the per-component folders are written to.
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

    compiler.hooks.done.tap("PrecompilePlugin", () => {
      hbsTemplates.forEach((templatePath) =>
        emitComponent(templatePath, this.options.manifest, outputPath),
      );
    });
  }
}

module.exports = PrecompilePlugin;
