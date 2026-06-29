import {
  describe,
  it,
  expect,
  beforeAll,
  afterAll,
  beforeEach,
  vi,
} from "vitest";

import { validateInternalSvgPath, buildIconPath } from "./global-helpers.js";

const ORIGIN = "https://www.health.qld.gov.au";
const HREF = `${ORIGIN}/some/page`;

describe("validateInternalSvgPath", () => {
  // The unit project runs in Node, so there is no `window`. The helper resolves
  // paths against window.location, so stub a minimal location for these tests.
  beforeAll(() => {
    globalThis.window = { location: { href: HREF, origin: ORIGIN } };
  });

  afterAll(() => {
    delete globalThis.window;
  });

  beforeEach(() => {
    // Silence (and reset) the helper's console.error diagnostics between tests.
    vi.spyOn(console, "error").mockImplementation(() => {});
  });

  describe("valid paths", () => {
    it("normalises a Squiz Matrix asset URL to an absolute href", () => {
      expect(validateInternalSvgPath("?a=12345:icons/QLD-icons.svg")).toBe(
        `${ORIGIN}/some/page?a=12345:icons/QLD-icons.svg`,
      );
    });

    it("resolves a plain relative .svg path against the current document", () => {
      expect(validateInternalSvgPath("QLD-icons.svg")).toBe(
        `${ORIGIN}/some/QLD-icons.svg`,
      );
    });

    it("accepts an absolute same-origin .svg path", () => {
      expect(validateInternalSvgPath(`${ORIGIN}/assets/icons.svg`)).toBe(
        `${ORIGIN}/assets/icons.svg`,
      );
    });

    it("trims surrounding whitespace before resolving", () => {
      expect(validateInternalSvgPath("  QLD-icons.svg  ")).toBe(
        `${ORIGIN}/some/QLD-icons.svg`,
      );
    });
  });

  describe("invalid paths return null", () => {
    it.each([
      ["a non-string (number)", 42],
      ["a non-string (null)", null],
      ["a non-string (undefined)", undefined],
    ])("rejects %s", (_label, path) => {
      expect(validateInternalSvgPath(path)).toBeNull();
    });

    it.each([
      ["javascript: scheme", "javascript:alert(1)"],
      ["data: scheme", "data:image/svg+xml,<svg></svg>"],
      ["vbscript: scheme", "vbscript:msgbox(1)"],
    ])("rejects a disallowed %s", (_label, path) => {
      expect(validateInternalSvgPath(path)).toBeNull();
    });

    it("rejects a cross-origin path", () => {
      expect(
        validateInternalSvgPath("https://evil.example.com/icons.svg"),
      ).toBeNull();
    });

    it("rejects an unparseable URL", () => {
      // An absolute URL with no host throws in the URL parser → caught → null.
      expect(validateInternalSvgPath("https://")).toBeNull();
    });

    it("rejects an asset URL whose 'a' parameter is malformed", () => {
      expect(validateInternalSvgPath("?a=not-an-asset-path")).toBeNull();
    });

    it("rejects a plain path without a .svg extension", () => {
      expect(validateInternalSvgPath("QLD-icons.png")).toBeNull();
    });

    it("rejects a plain path containing disallowed characters", () => {
      expect(validateInternalSvgPath("icons/<script>.svg")).toBeNull();
    });
  });
});

describe("buildIconPath", () => {
  it("appends the icon as a fragment when an icon is given", () => {
    expect(buildIconPath("QLD-icons.svg", "tick")).toBe("QLD-icons.svg#tick");
  });

  it("returns the path unchanged when no icon is given", () => {
    expect(buildIconPath("QLD-icons.svg")).toBe("QLD-icons.svg");
  });

  it.each([
    ["an empty string", ""],
    ["undefined", undefined],
    ["null", null],
  ])("returns the path unchanged for a falsy icon (%s)", (_label, icon) => {
    expect(buildIconPath("QLD-icons.svg", icon)).toBe("QLD-icons.svg");
  });

  it("preserves a normalised absolute href from validateInternalSvgPath", () => {
    expect(
      buildIconPath(`${ORIGIN}/some/page?a=12345:icons.svg`, "more-horizontal"),
    ).toBe(`${ORIGIN}/some/page?a=12345:icons.svg#more-horizontal`);
  });
});
