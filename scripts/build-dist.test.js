import fs from "node:fs";
import os from "node:os";
import path from "node:path";
import { createRequire } from "node:module";

import { describe, expect, test } from "vitest";

const require = createRequire(import.meta.url);
const {
  buildHelpersBundle,
  emitComponent,
  minifyDir,
} = require("./build-dist.js");

function tempDir() {
  return fs.mkdtempSync(path.join(os.tmpdir(), "build-dist-"));
}

describe("buildHelpersBundle", () => {
  test("registers each helper under its name, inlining its source", () => {
    const bundle = buildHelpersBundle([
      {
        name: "shout",
        fn: function (text) {
          return text + "!";
        },
      },
    ]);

    expect(bundle.startsWith("Handlebars.registerHelper('shout', ")).toBe(true);
    expect(bundle.endsWith("); \n")).toBe(true);
  });
});

describe("emitComponent", () => {
  test("writes manifest.json, import.xml and presentation.js for a component", () => {
    const output = tempDir();

    emitComponent(
      "./src/components/accordion/html/component.hbs",
      "./src/components/**/js/manifest.json",
      output,
    );

    const files = fs.readdirSync(`${output}/accordion`).sort();
    expect(files).toEqual(["import.xml", "manifest.json", "presentation.js"]);
    expect(fs.readFileSync(`${output}/accordion/manifest.json`, "utf8")).toBe(
      fs.readFileSync("./src/components/accordion/js/manifest.json", "utf8"),
    );
  });
});

describe("minifyDir", () => {
  test("writes minified copies and skips the placeholder note folder", async () => {
    const from = tempDir();
    const to = path.join(tempDir(), "externals");
    fs.writeFileSync(
      `${from}/a.js`,
      "function  add( a, b ) {\n  return a + b;\n}\n",
    );
    fs.mkdirSync(`${from}/__What is this folder for`);

    await minifyDir(from, to);

    expect(fs.readdirSync(to)).toEqual(["a.js"]);
    expect(fs.readFileSync(`${to}/a.js`, "utf8")).toMatch(
      /^function add\(\w,\w\)\{return \w\+\w\}$/,
    );
  });
});
