import { describe, it, expect } from "vitest";
import Handlebars from "handlebars";

import iconSwitch from "./iconSwitch.js";

describe("iconSwitch", () => {
  describe("falsy icon short-circuits to empty string", () => {
    it.each([
      ["undefined (no argument)", undefined],
      ["empty string", ""],
      ["null", null],
      ["zero", 0],
    ])("returns empty string for a %s icon", (_label, icon) => {
      expect(iconSwitch(icon)).toBe("");
    });
  });

  describe('Font Awesome icons (name contains "fa-")', () => {
    it("renders an <i> with the icon and extra classes", () => {
      expect(iconSwitch("fa-star", "extra-class")).toBe(
        '<i class="fa-star extra-class"></i>',
      );
    });

    it("trims surrounding whitespace from extra classes", () => {
      expect(iconSwitch("fa-star", "  extra-class  ")).toBe(
        '<i class="fa-star extra-class"></i>',
      );
    });

    it("leaves a trailing space in the class list when no extra classes are given", () => {
      expect(iconSwitch("fa-star")).toBe('<i class="fa-star "></i>');
    });

    it('supports a Font Awesome style prefix in the name (e.g. "fal fa-name")', () => {
      // Font Awesome names often carry a style/weight class (fal/fas/far/fab)
      // alongside the icon class, all passed as a single space-separated string.
      expect(iconSwitch("fal fa-name", "extra-class")).toBe(
        '<i class="fal fa-name extra-class"></i>',
      );
    });
  });

  describe('Material icons (name without "fa-")', () => {
    it("renders a material-symbols-rounded <span> with extra classes", () => {
      expect(iconSwitch("home", "large")).toBe(
        '<span class="material-symbols-rounded large" aria-hidden="true">home</span>',
      );
    });

    it("trims surrounding whitespace from extra classes", () => {
      expect(iconSwitch("home", "  large  ")).toBe(
        '<span class="material-symbols-rounded large" aria-hidden="true">home</span>',
      );
    });

    it("leaves a trailing space in the class list when no extra classes are given", () => {
      expect(iconSwitch("home")).toBe(
        '<span class="material-symbols-rounded " aria-hidden="true">home</span>',
      );
    });
  });

  describe("non-string extraClasses (Handlebars options object)", () => {
    it("ignores a non-string extraClasses argument", () => {
      // When the template omits the argument, Handlebars passes its options
      // object as the final argument; the helper must treat that as no classes.
      expect(iconSwitch("home", { hash: {} })).toBe(
        '<span class="material-symbols-rounded " aria-hidden="true">home</span>',
      );
    });

    it("ignores a non-string extraClasses argument for Font Awesome icons too", () => {
      expect(iconSwitch("fa-star", { hash: {} })).toBe(
        '<i class="fa-star "></i>',
      );
    });
  });
});

describe("iconSwitch (rendered via Handlebars)", () => {
  // An isolated instance so registering the helper can't leak into other tests.
  const hbs = Handlebars.create();
  hbs.registerHelper("iconSwitch", iconSwitch);

  // Triple-stash: iconSwitch returns a raw HTML string (not a SafeString), so
  // it must be rendered unescaped — exactly how the card templates call it.
  const render = (template, context = {}) => hbs.compile(template)(context);

  it("passes Handlebars' real options object into the omitted extraClasses slot", () => {
    expect(render("{{{iconSwitch icon}}}", { icon: "home" })).toBe(
      '<span class="material-symbols-rounded " aria-hidden="true">home</span>',
    );
  });

  it("passes a provided extra class through to a material icon", () => {
    expect(render('{{{iconSwitch icon "large"}}}', { icon: "home" })).toBe(
      '<span class="material-symbols-rounded large" aria-hidden="true">home</span>',
    );
  });

  it("renders a Font Awesome icon with an extra class", () => {
    expect(
      render('{{{iconSwitch icon "qld__card__footer-link-icon"}}}', {
        icon: "fa-star",
      }),
    ).toBe('<i class="fa-star qld__card__footer-link-icon"></i>');
  });

  it("escapes the markup when rendered with double-stash (must use triple-stash)", () => {
    // Documents the contract: because the helper returns a plain string (not a
    // SafeString), a double-stash call HTML-escapes the output — which is why
    // every call site uses {{{ }}}.
    const out = render("{{iconSwitch icon}}", { icon: "home" });
    expect(out).toContain("&lt;span");
    expect(out).not.toContain("<span");
  });
});
