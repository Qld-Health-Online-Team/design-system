// Data layer for the Colours story.
//
// Every colour is enumerated straight from the SCSS source (imported with ?raw,
// the same idiom Iconography uses for the icon sprite). Nothing is hand-listed,
// so the page shows *all* colour tokens and stays in sync automatically: add,
// rename, remove or recolour a token in variables.scss and it flows through here
// with no edits.
//
// Why parse the SCSS rather than read the live --QLD-color-* custom properties?
//   * The :root custom properties are generated FROM these same $ tokens (see
//     the :root block in variables.scss), so the values are identical — parsing
//     the source keeps us in step with the CSS variables.
//   * It is deterministic, which matters for the Chromatic snapshot, and it also
//     covers the neutral/status colours, which are NOT published as custom
//     properties and so can't be read off :root.

import variablesScss from "../../styles/imports/variables.scss?raw";
import bodyScss from "../../components/_global/css/body/component.scss?raw";

/**
 * Parse `$QLD-color-…: value;` declarations into a `name -> value` map. A
 * trailing `!default` is stripped and single-level `#{$ref}` interpolations
 * (e.g. an underline colour that points at a link colour) are resolved.
 */
function parseScssColours(src) {
  const map = {};
  const re = /\$(QLD-color-[\w-]+)\s*:\s*([^;\n]+?)\s*(?:!default)?\s*;/g;
  let match;
  while ((match = re.exec(src)) !== null) {
    map[match[1]] = match[2].trim();
  }
  for (const [name, value] of Object.entries(map)) {
    const ref = value.match(/^#\{\$([\w-]+)\}$/);
    if (ref && map[ref[1]]) map[name] = map[ref[1]];
  }
  return map;
}

/**
 * Names of the `--QLD-color-…` custom properties declared in :root, so each
 * token can advertise its CSS variable when one exists.
 */
function parseCssVarNames(src) {
  const names = new Set();
  const re = /(--QLD-color-[\w-]+)\s*:/g;
  let match;
  while ((match = re.exec(src)) !== null) names.add(match[1]);
  return names;
}

/** Extract the brace-balanced `{ … }` block that follows a marker. */
function extractBlock(src, marker) {
  const start = src.indexOf(marker);
  if (start === -1) return "";
  let depth = 0;
  for (let i = src.indexOf("{", start); i < src.length; i++) {
    if (src[i] === "{") depth++;
    else if (src[i] === "}" && --depth === 0) return src.slice(start, i + 1);
  }
  return src.slice(start);
}

/**
 * Syntax-highlighting colours, read from the `.token` rules in the code
 * component SCSS (these are hardcoded there, not exposed as variables).
 */
function parseCodeColours(src) {
  const block = extractBlock(src, ".token {");
  const out = {};
  const re = /&\.([\w-]+)\s*\{[^}]*?color:\s*(#[0-9a-fA-F]{3,8})/g;
  let match;
  while ((match = re.exec(block)) !== null) out[match[1]] = match[2];
  return out;
}

const colours = parseScssColours(variablesScss);
const cssVarNames = parseCssVarNames(variablesScss);
const codeColours = parseCodeColours(bodyScss);

const GROUP_PREFIXES = ["light__", "dark__", "neutral--", "status__"];

/** Build a display entry ({ label, token, value }) for a parsed token. */
function entry(name) {
  const cssVar = `--${name}`;
  const grouped = GROUP_PREFIXES.find((p) => name.startsWith(`QLD-color-${p}`));
  return {
    // Drop the group prefix from the label so it reads as the colour's role,
    // e.g. "action--primary" rather than the full token name.
    label: grouped
      ? name.slice(`QLD-color-${grouped}`.length)
      : name.replace(/^QLD-color-/, ""),
    token: cssVarNames.has(cssVar) ? `var(${cssVar})` : `$${name}`,
    value: colours[name],
  };
}

const names = Object.keys(colours);
const byPrefix = (prefix) =>
  names
    .filter((n) => n.startsWith(prefix))
    .sort()
    .map(entry);

/**
 * Every colour in the system, grouped for display. Light/dark are the themeable
 * palettes; neutral and status are fixed; "other" catches anything that doesn't
 * fit a known prefix (plus the reserved Queensland maroon, which is documented
 * but isn't a token); code lists the syntax-highlighting colours.
 */
export function getColourGroups() {
  return {
    light: byPrefix("QLD-color-light__"),
    dark: byPrefix("QLD-color-dark__"),
    neutral: byPrefix("QLD-color-neutral--"),
    status: byPrefix("QLD-color-status__"),
    other: names
      .filter(
        (n) => !GROUP_PREFIXES.some((p) => n.startsWith(`QLD-color-${p}`)),
      )
      .sort()
      .map(entry)
      .concat({
        label: "maroon (Queensland state colour)",
        token: "reserved — not a default token",
        value: "#973420",
      }),
    code: Object.entries(codeColours)
      .sort(([a], [b]) => a.localeCompare(b))
      .map(([cls, value]) => ({
        label: cls,
        token: `code .token.${cls}`,
        value,
      })),
  };
}
