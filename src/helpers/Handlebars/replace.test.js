import { describe, it, expect } from "vitest";

import replace from "./replace.js";

describe("replace", () => {
  describe("substitution", () => {
    it("replaces a plain substring", () => {
      expect(replace("one two", "two", "three")).toBe("one three");
    });

    it("replaces every occurrence, not just the first", () => {
      expect(replace("a-a-a", "a", "b")).toBe("b-b-b");
    });

    it("returns the string unchanged when the pattern does not match", () => {
      expect(replace("untouched", "absent", "x")).toBe("untouched");
    });

    it("removes matches when the replacement is empty", () => {
      expect(replace("keep|drop", "\\|.*", "")).toBe("keep");
    });
  });

  describe("regex semantics", () => {
    // Callers depend on this: file_upload passes '\.' and basic_search passes
    // '\|.*'. Matching literally instead would silently change both.
    it("treats the search argument as a pattern, not a literal", () => {
      expect(replace("a.b.c", ".", "-")).toBe("-----");
    });

    it("honours an escaped metacharacter as a literal", () => {
      expect(replace("pdf.doc.txt", "\\.", " ")).toBe("pdf doc txt");
    });

    it("strips a pipe and everything after it", () => {
      expect(replace("Report|internal|v2", "\\|.*", "")).toBe("Report");
    });

    it("gives $& its String.replace meaning in the replacement", () => {
      expect(replace("cat", "cat", "[$&]")).toBe("[cat]");
    });
  });

  describe("non-string input", () => {
    it.each([
      ["null", null],
      ["undefined", undefined],
      ["a number", 42],
      ["an object", {}],
      ["an array", []],
    ])("returns an empty string for %s", (_label, str) => {
      expect(replace(str, "a", "b")).toBe("");
    });

    it("returns an empty string rather than passing through an empty input", () => {
      expect(replace("", "a", "b")).toBe("");
    });
  });
});
