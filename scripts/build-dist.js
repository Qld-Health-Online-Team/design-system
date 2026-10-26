const glob = require("glob");
const Handlebars = require("handlebars");
const fs = require("fs");
const path = require("path");
const { logger } = require("handlebars");
const { minify } = require("terser");
const sass = require("sass");
const postcss = require("postcss");
const autoprefixer = require("autoprefixer");
const generateImportXml = require("./import-xml");

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
 * `ecma: 2015` keeps the published bytes stable: terser then emits shorthand
 * properties such as `{current}`, as the committed files already do.
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
 * Compile the banner_contained stylesheet to dist/banner_contained.css, with
 * the same Sass, autoprefixer and browserslist as main.css.
 *
 * It is a separate stylesheet because Matrix loads it only on pages that use
 * the contained banner; it has no JS, so it can't ride the main.js build.
 *
 * @param {string} entry - SCSS entry file.
 * @param {string} outputPath - Output CSS file; its .map is written beside it.
 */
async function buildBannerContainedCss(entry, outputPath) {
  const compiled = sass.compile(entry, {
    style: "compressed",
    sourceMap: true,
  });
  const prefixed = await postcss([autoprefixer()]).process(compiled.css, {
    from: entry,
    to: outputPath,
    map: { prev: compiled.sourceMap, inline: false, annotation: true },
  });

  fs.writeFileSync(outputPath, prefixed.css);
  fs.writeFileSync(`${outputPath}.map`, prefixed.map.toString());
}

/**
 * Write the placeholder scripts that earlier builds produced, so Matrix site
 * heads that still load them get an empty file instead of a 404.
 *
 * @param {string} outputDir - Directory the stubs are written to.
 */
function writeLegacyStubs(outputDir) {
  const note = (name, reason) =>
    `/* ${name} is intentionally empty. ${reason} Kept so existing Matrix site heads that load it keep working. */\n`;

  fs.writeFileSync(
    `${outputDir}/runtime.js`,
    note("runtime.js", "main.js is now self-contained and needs no runtime."),
  );
  fs.writeFileSync(
    `${outputDir}/banner_contained.js`,
    note("banner_contained.js", "banner_contained is a stylesheet only."),
  );
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
 * - dist/components/<name>/{manifest.json,import.xml,presentation.js} —
 *   per-component contract files; see emitComponent.
 * - dist/externals and dist/mysource_files — copies of src/externals and
 *   src/assets.
 *
 * dist/js/helpers.js, the helpers those templates call, has a Vite build of
 * its own (see vite.config.helpers.mjs).
 *
 * Options:
 * - input: glob for component .hbs templates.
 * - manifest: manifest.json path pattern ("**" = component name).
 * - output: directory the per-component folders are written to.
 */
async function buildDist(options) {
  const outputPath = options.output.endsWith("/")
    ? options.output.slice(0, -1)
    : options.output;

  glob
    .sync(options.input)
    .forEach((templatePath) =>
      emitComponent(templatePath, options.manifest, outputPath),
    );

  writeLegacyStubs("./dist/js");
  await buildBannerContainedCss(
    "./src/styles/banner_contained/globals.scss",
    "./dist/banner_contained.css",
  );

  await minifyDir("./src/externals", "./dist/externals");
  copyDir("./src/assets", "./dist/mysource_files");
}

const defaultOptions = {
  input: "./src/components/**/**/*.hbs",
  manifest: "./src/components/**/js/manifest.json",
  output: "./dist/components/",
};

if (require.main === module) {
  buildDist(defaultOptions).catch((error) => {
    console.error(error);
    process.exit(1);
  });
}

module.exports = {
  emitComponent,
  minifyDir,
  buildBannerContainedCss,
  writeLegacyStubs,
  buildDist,
};
