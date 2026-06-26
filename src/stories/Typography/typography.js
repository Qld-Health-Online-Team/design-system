// Data layer for the Typography story.
//
// Same approach as colours.js: every value is read straight from the SCSS source
// (imported with ?raw), so the story lists the real typography tokens and stays
// in sync automatically — change a token in variables.scss and it flows through
// here with no edits.

import variablesScss from "../../styles/imports/variables.scss?raw";

/**
 * Read a single `$<name>: value;` declaration. Captures multi-line values (the
 * font stacks span several lines), strips a trailing `!default`, and collapses
 * internal whitespace to single spaces for display.
 */
function readVar(name) {
  const match = variablesScss.match(
    new RegExp(`\\$${name}\\s*:\\s*([\\s\\S]*?);`),
  );
  if (!match) return null;
  return match[1]
    .replace(/\s*!default$/, "")
    .trim()
    .replace(/\s+/g, " ");
}

/** Parse the `$QLD-lineheight-map: ( key: value, … );` Sass map, in order. */
function parseLineHeights() {
  const block = variablesScss.match(
    /\$QLD-lineheight-map\s*:\s*\(([\s\S]*?)\)\s*;/,
  );
  if (!block) return [];
  return block[1]
    .split("\n")
    .map((line) => line.trim().match(/^([\w-]+)\s*:\s*(.+?),?$/))
    .filter(Boolean)
    .map((m) => ({ key: m[1], value: m[2].trim() }));
}

// Smallest → largest, matching the type scale.
const SIZE_ORDER = ["xs", "sm", "md", "lg", "xl", "xxl", "xxxl"];

/**
 * Every typography token, grouped for display: the typefaces, the type scale
 * (desktop + mobile sizes), the font weights and the line-height scale.
 */
export function getTypography() {
  return {
    families: [
      {
        label: "Body / default",
        token: "$QLD-font",
        value: readVar("QLD-font"),
      },
      {
        label: "Display",
        token: "$QLD-font-display",
        value: readVar("QLD-font-display"),
      },
      {
        label: "Site name",
        token: "$QLD-font-sitename",
        value: readVar("QLD-font-sitename"),
      },
      {
        label: "Monospace",
        token: "$QLD-font-monospace",
        value: readVar("QLD-font-monospace"),
      },
    ],
    sizes: SIZE_ORDER.map((key) => ({
      key,
      desktop: readVar(`QLD-font-size-desktop-${key}`),
      mobile: readVar(`QLD-font-size-mobile-${key}`),
    })),
    weights: [
      {
        key: "regular",
        token: "$QLD-font-weight-regular",
        value: readVar("QLD-font-weight-regular"),
      },
      {
        key: "semibold",
        token: "$QLD-font-weight-semibold",
        value: readVar("QLD-font-weight-semibold"),
      },
      {
        key: "bold",
        token: "$QLD-font-weight-bold",
        value: readVar("QLD-font-weight-bold"),
      },
    ],
    lineHeights: parseLineHeights(),
  };
}
