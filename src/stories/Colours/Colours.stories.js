import { getColourGroups } from "./colours.js";

// Colour palette reference and Chromatic snapshot target.
//
// The swatches are rendered as plain, deterministic HTML — a responsive grid of
// cards, each showing the colour, its role label, hex value and CSS variable /
// token. Data comes from getColourGroups(), so the list stays in sync with
// variables.scss.
//
// Style values mirror Storybook's light docs theme. Semantic tags (<h2>, <code>)
// are deliberately avoided so the qld__body wrapper applied by the preview
// decorator can't restyle the swatches.

const TEXT = "#2e3438";
const MUTED = "rgba(46, 52, 56, 0.7)";
const BORDER = "rgba(38, 85, 115, 0.15)";
// Font names use single quotes so they nest safely inside double-quoted
// style="…" attributes (double quotes would terminate the attribute early).
const SANS =
  "'Nunito Sans', -apple-system, BlinkMacSystemFont, 'Segoe UI', Helvetica, Arial, sans-serif";
const MONO = "ui-monospace, Menlo, Monaco, Consolas, 'Courier New', monospace";
// Checkerboard so semi-transparent swatches read as transparent (as ColorItem).
const CHECKER =
  "repeating-linear-gradient(-45deg, #ccc, #ccc 1px, #fff 1px, #fff 16px)";

// External references. Surfaced as links in the story (so they're in the
// snapshot) and the Figma one is also wired to the addon-designs panel below.
const DS_URL = "https://www.designsystem.qld.gov.au/styles/colour";
const FIGMA_URL =
  "https://www.figma.com/design/qKsxl3ogIlBp7dafgxXuCA/QGDS-UI-kit?node-id=45445-46542&t=Zvg3SZLHpPvFixj7-0";
const LINK = "#005eb8";

// One <ColorItem>: description column (title + token) beside a single swatch
// One swatch card: a colour band (checkerboard behind it so transparent values
// read as transparent) above the role label, hex value and CSS variable / token.
const card = ({ label, token, value }) => `
  <div style="border:1px solid ${BORDER};border-radius:6px;overflow:hidden;background:#fff;display:flex;flex-direction:column;">
    <div style="height:64px;background-image:${CHECKER};border-bottom:1px solid ${BORDER};">
      <div title="${value}" style="height:100%;background:${value};"></div>
    </div>
    <div style="padding:8px 10px;display:flex;flex-direction:column;gap:3px;">
      <div style="font-weight:700;font-size:13px;line-height:1.3;color:${TEXT};word-break:break-word;">${label}</div>
      <div style="font-family:${MONO};font-size:11px;color:${TEXT};">${value}</div>
      <div style="font-family:${MONO};font-size:11px;line-height:1.3;color:${MUTED};word-break:break-all;">${token}</div>
    </div>
  </div>`;

// A responsive grid of cards that wraps to fill the available width.
const palette = (items) => `
  <div style="display:grid;grid-template-columns:repeat(auto-fill,minmax(300px,1fr));gap:16px;">
    ${items.map(card).join("")}
  </div>`;

// Each group is a native <details> accordion so a developer can collapse the
// ones they don't care about. `open` is set on every group so all are expanded
// by default (and so Chromatic snapshots the whole palette).
const section = (text, items) => `
  <details open style="margin-top:24px;">
    <summary style="cursor:pointer;font-size:20px;font-weight:700;color:${TEXT};padding:12px 0 8px;border-bottom:1px solid ${BORDER};">${text} <span style="font-weight:400;color:${MUTED};font-size:14px;">(${items.length})</span></summary>
    <div style="padding-top:16px;">${palette(items)}</div>
  </details>`;

const renderPalette = () => {
  const g = getColourGroups();
  return `
    <div style="font-family:${SANS};color:${TEXT};padding:1rem;">
      <h1 style="font-size:28px;font-weight:700;margin:0 0 8px;">Colours</h1>
      <p style="color:${MUTED};margin:0 0 8px;max-width:72ch;">
        Every colour in the design system, enumerated from the SCSS so it stays in
        sync with the colour variables. The light and dark palettes are themeable
        (${g.light.length + g.dark.length} variables); neutral and status are fixed.
      </p>
      <p style="margin:0 0 8px;font-size:14px;color:${MUTED};">
        Resources:
        <a href="${DS_URL}" target="_blank" rel="noopener noreferrer" style="color:${LINK};">QLD Design System ↗</a>
        ·
        <a href="${FIGMA_URL}" target="_blank" rel="noopener noreferrer" style="color:${LINK};">Figma UI Kit ↗</a>
      </p>
      ${section("Light palette", g.light)}
      ${section("Dark palette", g.dark)}
      ${section("Neutral", g.neutral)}
      ${section("Status — reserved colours", g.status)}
      ${section("Other", g.other)}
      ${section("Code syntax highlighting", g.code)}
    </div>`;
};

export default {
  title: "1. Core Styles/Colours",
  // This story is the colour reference, so opt out of the auto-generated docs
  // page (autodocs is enabled globally in preview.js).
  tags: ["!autodocs"],
  // Show the Figma frame in the addon-designs "Design" panel.
  parameters: { design: { type: "figma", url: FIGMA_URL } },
  render: () => renderPalette(),
};

export const Palette = {};
