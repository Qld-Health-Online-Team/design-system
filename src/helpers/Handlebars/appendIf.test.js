import { describe, it, expect } from "vitest";

import appendIf from "./appendIf.js";

// Handlebars invokes block/inline helpers with an `options` object as the final
// argument; named hash arguments (e.g. `{{appendIf x y prepend="true"}}`) arrive
// on `options.hash`. These helpers build that shape directly.
const opts = (hash = {}) => ({ hash });

describe("appendIf", () => {
  describe("default (append) mode", () => {
    it("appends tail after a truthy head", () => {
      expect(appendIf("name", "-suffix", opts())).toBe("name-suffix");
    });

    it("returns an empty string when head is falsy", () => {
      expect(appendIf("", "-suffix", opts())).toBe("");
    });

    it('treats a prepend hash other than the string "true" as append', () => {
      expect(appendIf("name", "-suffix", opts({ prepend: "false" }))).toBe(
        "name-suffix",
      );
    });

    it('does not prepend for a boolean true (only the string "true")', () => {
      expect(appendIf("name", "pre-", opts({ prepend: true }))).toBe(
        "namepre-",
      );
    });
  });

  describe("prepend mode", () => {
    it('prepends tail before a truthy head when prepend is "true"', () => {
      expect(appendIf("name", "pre-", opts({ prepend: "true" }))).toBe(
        "pre-name",
      );
    });

    it("returns an empty string when head is falsy, even in prepend mode", () => {
      expect(appendIf("", "pre-", opts({ prepend: "true" }))).toBe("");
    });
  });

  describe("falsy heads short-circuit to empty string", () => {
    it.each([
      ["empty string", ""],
      ["null", null],
      ["undefined", undefined],
      ["zero", 0],
    ])("returns empty string for a %s head", (_label, head) => {
      expect(appendIf(head, "-suffix", opts())).toBe("");
    });
  });
});
