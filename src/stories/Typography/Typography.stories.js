import { getTypography } from "./typography.js";
import { themes, themeColours } from "../../../.storybook/globals";

// Typography token reference and Chromatic snapshot target.
//
// Mirrors Colours.stories.js: a responsive grid of cards inside collapsible
// accordions, rendered as plain, deterministic HTML. Each card shows a live
// preview rendered with the actual token plus the value(s) and the SCSS token
// name. Data comes from getTypography(), so the list stays in sync with
// variables.scss.
//
// Style values mirror Storybook's light docs theme. Font names use single quotes
// so they nest safely inside double-quoted style="…" attributes.

const TEXT = "#2e3438";
const MUTED = "rgba(46, 52, 56, 0.7)";
const BORDER = "rgba(38, 85, 115, 0.15)";
const SANS =
  "'Nunito Sans', -apple-system, BlinkMacSystemFont, 'Segoe UI', Helvetica, Arial, sans-serif";
const MONO = "ui-monospace, Menlo, Monaco, Consolas, 'Courier New', monospace";

const DS_URL = "https://www.designsystem.qld.gov.au/styles/typography";
const FIGMA_URL =
  "https://www.figma.com/design/qKsxl3ogIlBp7dafgxXuCA/QGDS-UI-kit";
const LINK = "#005eb8";

const SAMPLE = "The quick brown fox jumps over the lazy dog";
// Font stacks contain double quotes ("Noto Sans"); swap to single quotes before
// putting them in a double-quoted style attribute, or they terminate it early.
const attr = (fontStack) => fontStack.replace(/"/g, "'");

// One card: a preview band above the role label and one mono detail line per
// entry in `lines`.
const card = (preview, label, lines) => `
  <div style="border:1px solid ${BORDER};border-radius:6px;overflow:hidden;background:#fff;display:flex;flex-direction:column;">
    <div style="padding:16px;border-bottom:1px solid ${BORDER};min-height:64px;display:flex;align-items:center;overflow:hidden;">${preview}</div>
    <div style="padding:8px 10px;display:flex;flex-direction:column;gap:3px;">
      <div style="font-weight:700;font-size:13px;line-height:1.3;color:${TEXT};">${label}</div>
      ${lines
        .map(
          (l) =>
            `<div style="font-family:${MONO};font-size:11px;line-height:1.4;color:${l.muted ? MUTED : TEXT};word-break:break-word;">${l.text}</div>`,
        )
        .join("")}
    </div>
  </div>`;

// A responsive grid of cards that wraps to fill the available width.
const grid = (cards) => `
  <div style="display:grid;grid-template-columns:repeat(auto-fill,minmax(280px,1fr));gap:16px;">
    ${cards.join("")}
  </div>`;

// Each group is a native <details> accordion, open by default so all groups are
// expanded for Chromatic and a developer can collapse the ones they don't need.
const section = (text, count, cards) => `
  <details open style="margin-top:24px;">
    <summary style="cursor:pointer;font-size:20px;font-weight:700;color:${TEXT};padding:12px 0 8px;border-bottom:1px solid ${BORDER};">${text} <span style="font-weight:400;color:${MUTED};font-size:14px;">(${count})</span></summary>
    <div style="padding-top:16px;">${grid(cards)}</div>
  </details>`;

const familyCard = (f) =>
  card(
    `<span style="font-family:${attr(f.value)};font-size:24px;color:${TEXT};">${SAMPLE}</span>`,
    f.label,
    [
      { text: f.value, muted: true },
      { text: f.token, muted: true },
    ],
  );

const sizeCard = (s) =>
  card(
    `<span style="font-size:${s.desktop};line-height:1.1;color:${TEXT};white-space:nowrap;">Ag</span>`,
    s.key,
    [
      { text: `Desktop ${s.desktop} · Mobile ${s.mobile}` },
      { text: `$QLD-font-size-{desktop,mobile}-${s.key}`, muted: true },
    ],
  );

const weightCard = (w) =>
  card(
    `<span style="font-weight:${w.value};font-size:24px;color:${TEXT};">${SAMPLE}</span>`,
    `${w.key} (${w.value})`,
    [{ text: w.token, muted: true }],
  );

const lineHeightCard = (lh) =>
  card(
    `<p style="margin:0;line-height:${lh.value};font-size:14px;color:${TEXT};">${SAMPLE}, and then some more text so the spacing between the lines is visible.</p>`,
    `${lh.key} (${lh.value})`,
    [{ text: `$QLD-lineheight-map → ${lh.key}`, muted: true }],
  );

const renderTypography = () => {
  const t = getTypography();
  return `
    <div style="font-family:${SANS};color:${TEXT};padding:1rem;">
      <h1 style="font-size:28px;font-weight:700;margin:0 0 8px;">Typography</h1>
      <p style="color:${MUTED};margin:0 0 8px;max-width:72ch;">
        The typography tokens in the design system, read from the SCSS so they
        stay in sync with the variables. Each card previews the token applied to
        sample text alongside its value and SCSS variable name.
      </p>
      <p style="margin:0 0 8px;font-size:14px;color:${MUTED};">
        Resources:
        <a href="${DS_URL}" target="_blank" rel="noopener noreferrer" style="color:${LINK};">QLD Design System ↗</a>
        ·
        <a href="${FIGMA_URL}" target="_blank" rel="noopener noreferrer" style="color:${LINK};">Figma UI Kit ↗</a>
      </p>
      ${section("Typeface", t.families.length, t.families.map(familyCard))}
      ${section("Type scale — font size", t.sizes.length, t.sizes.map(sizeCard))}
      ${section("Font weight", t.weights.length, t.weights.map(weightCard))}
      ${section("Line height", t.lineHeights.length, t.lineHeights.map(lineHeightCard))}
    </div>`;
};

// A representative type sample (heading, body, link + bold, small print) using
// real DS elements so the theme classes apply their text colours.
const legibilitySample = `
  <h2 style="margin:0 0 0.5rem;">Heading</h2>
  <p style="margin:0 0 0.5rem;">${SAMPLE} — body copy at the default size and line height.</p>
  <p style="margin:0 0 0.5rem;"><a href="#">An inline link</a> with <strong>bold emphasis</strong>.</p>
  <p style="margin:0;"><small>Small print — ${SAMPLE}.</small></p>`;

// The legibility sample rendered in a single theme: the theme class supplies the
// text colours and the wrapper carries that theme's background (themeWrapper /
// the Backgrounds toolbar set background separately, which we can't rely on for
// a self-contained snapshot). One of these backs each per-theme story below.
const renderTheme = (name) => `
  <div class="${themes[name]}" style="font-family:${SANS};background:${themeColours[name] || "#ffffff"};padding:2rem;">
    ${legibilitySample}
    <p style="margin:1.5rem 0 0;"><small>Theme: ${name} — background ${themeColours[name] || "#ffffff"}</small></p>
  </div>`;

export default {
  title: "1. Core Styles/Typography",
  // This story is the typography reference, so opt out of the auto-generated docs
  // page (autodocs is enabled globally in preview.js).
  tags: ["!autodocs"],
  // Show the Figma frame in the addon-designs "Design" panel.
  parameters: { design: { type: "figma", url: FIGMA_URL } },
  render: () => renderTypography(),
};

export const Typography = {};

// Text-colour legibility, one story per theme background. Each renders the same
// sample so contrast can be reviewed/snapshotted per theme.
export const White = { render: () => renderTheme("white") };
export const Light = { render: () => renderTheme("light") };
export const LightAlt = { render: () => renderTheme("light alt") };
export const Dark = { render: () => renderTheme("dark") };
export const DarkAlt = { render: () => renderTheme("dark alt") };
