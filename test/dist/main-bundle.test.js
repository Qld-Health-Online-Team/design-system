import { describe, expect, test } from "vitest";

import runtime from "../../dist/js/runtime.js?raw";
import main from "../../dist/js/main.js?raw";

// Loads the shipped bundles as classic scripts, in the order Matrix site heads
// load them (runtime first), so a bundler change that breaks dist/js/main.js
// fails here even when every story, which imports from src/, still passes.

function loadScript(source) {
  const script = document.createElement("script");
  script.textContent = source;
  document.head.appendChild(script);
  script.remove();
}

function shapeOf(namespace) {
  const shape = {};
  for (const key of Object.keys(namespace).sort()) {
    const value = namespace[key];
    shape[key] =
      value !== null && typeof value === "object"
        ? Object.fromEntries(
            Object.keys(value)
              .sort()
              .map((child) => [child, typeof value[child]]),
          )
        : typeof value;
  }
  return shape;
}

describe("dist/js/main.js", () => {
  const html = document.documentElement;
  const before = new Set(Object.keys(window));
  html.classList.add("no-js");

  loadScript(runtime);
  loadScript(main);

  test("swaps the no-js class for js", () => {
    expect(html.classList.contains("js")).toBe(true);
    expect(html.classList.contains("no-js")).toBe(false);
  });

  test("exposes the public window surface", () => {
    const added = Object.keys(window)
      .filter((key) => !before.has(key))
      // The bundler's own chunk registry is not part of the public surface.
      .filter((key) => !key.startsWith("webpackChunk"))
      .sort();

    expect(added).toMatchSnapshot();
  });

  test("exposes the window.QLD namespace", () => {
    expect(shapeOf(window.QLD)).toMatchSnapshot();
  });
});
