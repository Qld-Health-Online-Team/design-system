import { describe, it, expect } from "vitest";

import applyModifier from "./applyModifier.js";

describe("applyModifier", () => {
  it.each([
    ["qld__details", "sm", "qld__details--sm"],
    ["qld__details", "xl", "qld__details--xl"],
    ["qld__card", "dark", "qld__card--dark"],
  ])("joins %s and %s into a modifier class", (block, modifier, expected) => {
    expect(applyModifier(block, modifier)).toBe(expected);
  });

  // A hyphenated token stays intact — the class is block--token, not a
  // second BEM modifier level.
  it("keeps a hyphenated token whole", () => {
    expect(applyModifier("qld__body", "dark-alt")).toBe("qld__body--dark-alt");
  });

  describe("yields no class rather than a broken one", () => {
    it.each([
      ["an empty modifier", "qld__details", ""],
      ["a missing modifier", "qld__details", undefined],
      ["a null modifier", "qld__details", null],
      ["an empty block", "", "sm"],
      ["a missing block", undefined, "sm"],
      // Guards against interpolating a non-string into the class attribute
      ["a numeric modifier", "qld__details", 3],
      ["an object modifier", "qld__details", {}],
    ])("returns an empty string for %s", (_label, block, modifier) => {
      expect(applyModifier(block, modifier)).toBe("");
    });
  });
});
