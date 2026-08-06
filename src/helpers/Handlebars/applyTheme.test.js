import { describe, it, expect } from "vitest";

import applyTheme from "./applyTheme.js";

describe("applyTheme", () => {
  describe("theme tokens resolve to modifier classes", () => {
    it.each([
      ["light", "qld__body--light"],
      ["dark", "qld__body--dark"],
      ["dark-alt", "qld__body--dark-alt"],
    ])("maps %s to its like-named modifier", (theme, expected) => {
      expect(applyTheme("qld__body", theme)).toBe(expected);
    });

    // The one token whose name does not match its class: the class vocabulary
    // drops the "light" that the design token keeps.
    it("maps light-alt to the --alt class, not --light-alt", () => {
      expect(applyTheme("qld__body", "light-alt")).toBe("qld__body--alt");
    });

    it("resolves white to no class, since white is the unmodified block", () => {
      expect(applyTheme("qld__body", "white")).toBe("");
    });
  });

  describe("works for any block, not just qld__body", () => {
    it.each(["qld__card", "qld__banner", "qld__footer"])(
      "builds the modifier for %s",
      (block) => {
        expect(applyTheme(block, "dark")).toBe(`${block}--dark`);
      },
    );
  });

  describe("degrades to the white theme rather than throwing", () => {
    it.each([
      ["an unknown token", "chartreuse"],
      ["an empty token", ""],
      ["undefined", undefined],
      ["null", null],
      // Guards the object-literal lookup: without a hasOwnProperty check these
      // reach Object.prototype and stringify a function into the class list.
      ["an inherited property name", "constructor"],
      ["toString", "toString"],
    ])("returns an empty string for %s", (_label, theme) => {
      expect(applyTheme("qld__body", theme)).toBe("");
    });

    it("returns an empty string when the block is missing", () => {
      expect(applyTheme("", "dark")).toBe("");
      expect(applyTheme(undefined, "dark")).toBe("");
    });
  });
});
