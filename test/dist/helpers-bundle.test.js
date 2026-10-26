import { describe, expect, test } from "vitest";

import handlebars from "handlebars/dist/handlebars.min.js?raw";
import helpers from "../../dist/js/helpers.js?raw";

// Loads the shipped helpers.js as a classic script after a global Handlebars,
// as Matrix site heads and CT edit layouts load it. Storybook registers the
// same file, but as an ES module with Handlebars imported into it, so a
// helpers.js that only works that way still passes every story.

function loadScript(source) {
  const script = document.createElement("script");
  script.textContent = source;
  document.head.appendChild(script);
  script.remove();
}

// Helper name = file name.
const helperNames = Object.keys(
  import.meta.glob("../../src/helpers/Handlebars/*.js"),
)
  .filter((file) => !/\.(test|spec)\.js$/.test(file))
  .map((file) => file.split("/").pop().slice(0, -".js".length))
  .sort();

describe("dist/js/helpers.js", () => {
  loadScript(handlebars);
  const builtIn = new Set(Object.keys(window.Handlebars.helpers));
  loadScript(helpers);

  test("registers one helper per module in src/helpers/Handlebars", () => {
    const added = Object.keys(window.Handlebars.helpers)
      .filter((name) => !builtIn.has(name))
      .sort();

    expect(added).toEqual(helperNames);
  });

  test("renders with ES module, CommonJS and global-Handlebars helpers", () => {
    const template = window.Handlebars.compile(
      `{{applyTheme "qld__body" "light-alt"}}|{{arrayLength list}}|` +
        `{{#eachWhen items "type" "a"}}{{@index}}{{name}}{{/eachWhen}}`,
    );

    expect(
      template({
        list: { a: 1, b: 2 },
        items: [
          { type: "a", name: "x" },
          { type: "b", name: "y" },
          { type: "a", name: "z" },
        ],
      }),
    ).toBe("qld__body--alt|2|0x1z");
  });
});
