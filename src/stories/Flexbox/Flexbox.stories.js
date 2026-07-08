// Flexbox utility-class reference and Chromatic snapshot target.
//
// Same approach as Colours.stories.js / Typography.stories.js: a set of
// collapsible <details> accordions rendered as plain, deterministic HTML. Each
// card is a *live* demo — the qld__ flex classes are the real ones compiled into
// Storybook (via src/components/_global/css/flex/flexbox-utility-classes.scss),
// so what you see is exactly what the class does — paired with the class name in
// mono and a short description.
//
// Story chrome (cards, grid, accordions) uses inline styles that mirror
// Storybook's light docs theme; the demo containers/items use the real utility
// classes plus a little inline styling for visibility (gap, background).

const TEXT = "#2e3438";
const MUTED = "rgba(46, 52, 56, 0.7)";
const BORDER = "rgba(38, 85, 115, 0.15)";
const SANS =
  "'Nunito Sans', -apple-system, BlinkMacSystemFont, 'Segoe UI', Helvetica, Arial, sans-serif";
const MONO = "ui-monospace, Menlo, Monaco, Consolas, 'Courier New', monospace";
const ITEM_BG = "#0a5a8f";
const LINK = "#005eb8";

const DS_URL = "https://www.designsystem.qld.gov.au/styles/flex-box-utilities";
const SOURCE = "src/components/_global/css/flex/flexbox-utility-classes.scss";

// One flex item (the coloured boxes inside a demo container). `cls` puts a real
// utility class on the item itself (used by the grow/shrink/align-self demos);
// `style` adds inline chrome such as extra height for align-items demos.
const item = (label, { cls = "", style = "" } = {}) =>
  `<div class="${cls}" style="background:${ITEM_BG};color:#fff;padding:10px 14px;border-radius:4px;font-size:13px;font-weight:600;white-space:nowrap;${style}">${label}</div>`;

// A live demo container: `cls` is the real class string applied to it (e.g.
// "qld__display-flex qld__justify-content-center"); the dashed border and grey
// fill are chrome so the container's bounds and free space are visible.
const container = (cls, inner, style = "") =>
  `<div class="${cls}" style="gap:8px;border:1px dashed ${BORDER};background:#f6f8fa;padding:12px;border-radius:6px;${style}">${inner}</div>`;

// One card: the live demo above, the class name (mono) and a description below.
const card = (codeLabel, desc, demoHtml) => `
  <div style="border:1px solid ${BORDER};border-radius:6px;overflow:hidden;background:#fff;display:flex;flex-direction:column;">
    <div style="padding:14px;border-bottom:1px solid ${BORDER};">${demoHtml}</div>
    <div style="padding:10px 12px;">
      <div style="font-family:${MONO};font-size:12px;color:${TEXT};font-weight:600;word-break:break-word;">${codeLabel}</div>
      ${desc ? `<div style="font-size:12px;color:${MUTED};margin-top:4px;line-height:1.4;">${desc}</div>` : ""}
    </div>
  </div>`;

// A responsive grid of cards that wraps to fill the available width.
const grid = (cards) => `
  <div style="display:grid;grid-template-columns:repeat(auto-fill,minmax(300px,1fr));gap:16px;">
    ${cards.join("")}
  </div>`;

// Each group is a native <details> accordion, open by default so every group is
// expanded for Chromatic and a developer can collapse the ones they don't need.
const section = (text, count, cards) => `
  <details open style="margin-top:24px;">
    <summary style="cursor:pointer;font-size:20px;font-weight:700;color:${TEXT};padding:12px 0 8px;border-bottom:1px solid ${BORDER};">${text} <span style="font-weight:400;color:${MUTED};font-size:14px;">(${count})</span></summary>
    <div style="padding-top:16px;">${grid(cards)}</div>
  </details>`;

const threeItems = item("1") + item("2") + item("3");

// display
const displayCards = [
  {
    cls: "qld__display-flex",
    desc: "Block-level flex container (fills its own line).",
  },
  {
    cls: "qld__display-inline-flex",
    desc: "Inline-level flex container (sits inline with surrounding text).",
  },
].map((d) => card(`.${d.cls}`, d.desc, container(d.cls, threeItems)));

// flex-direction (each demo is display-flex + the direction class)
const directionCards = [
  ["qld__flex-row", "Main axis left → right (the default)."],
  ["qld__flex-column", "Main axis top → bottom; items stack."],
  ["qld__flex-row-reverse", "Main axis right → left."],
  ["qld__flex-column-reverse", "Main axis bottom → top."],
].map(([cls, desc]) =>
  card(`.${cls}`, desc, container(`qld__display-flex ${cls}`, threeItems)),
);

// justify-content — spacing along the main axis
const justifyCards = [
  ["qld__justify-content-start", "Pack items to the start."],
  ["qld__justify-content-end", "Pack items to the end."],
  ["qld__justify-content-center", "Centre items on the main axis."],
  ["qld__justify-content-between", "First/last flush; equal space between."],
  ["qld__justify-content-around", "Equal space around each item."],
  ["qld__justify-content-evenly", "Equal space between and at the ends."],
].map(([cls, desc]) =>
  card(`.${cls}`, desc, container(`qld__display-flex ${cls}`, threeItems)),
);

// align-items — cross-axis alignment of items. Vary item heights + a tall
// container so the alignment is visible.
const alignItemsDemo = (cls) =>
  container(
    `qld__display-flex ${cls}`,
    item("1", { style: "padding:6px 14px;" }) +
      item("2", { style: "padding:24px 14px;" }) +
      item("3", { style: "padding:14px 14px;" }),
    "min-height:110px;",
  );
const alignItemsCards = [
  ["qld__align-items-start", "Align items to the cross-start edge."],
  ["qld__align-items-end", "Align items to the cross-end edge."],
  ["qld__align-items-center", "Centre items on the cross axis."],
  ["qld__align-items-baseline", "Align item text baselines."],
  ["qld__align-items-stretch", "Stretch items to fill the cross axis."],
].map(([cls, desc]) =>
  card(
    `.${cls}`,
    desc,
    cls === "qld__align-items-stretch"
      ? // stretch only shows when items have no fixed height
        container(
          `qld__display-flex ${cls}`,
          item("1") + item("2") + item("3"),
          "min-height:110px;",
        )
      : alignItemsDemo(cls),
  ),
);

// flex-wrap — many items in a width-constrained container
const wrapDemo = (cls) =>
  container(
    `qld__display-flex ${cls}`,
    [1, 2, 3, 4, 5, 6, 7, 8].map((n) => item(String(n))).join(""),
    "max-width:260px;",
  );
const wrapCards = [
  ["qld__flex-wrap", "Items wrap onto multiple lines as needed."],
  ["qld__flex-nowrap", "Items stay on one line (may overflow/shrink)."],
  ["qld__flex-wrap-reverse", "Items wrap onto multiple lines, reversed."],
].map(([cls, desc]) => card(`.${cls}`, desc, wrapDemo(cls)));

// align-content — spacing of wrapped lines on the cross axis. Needs wrap + a
// tall container + enough items to form multiple lines.
const alignContentDemo = (cls) =>
  container(
    `qld__display-flex qld__flex-wrap ${cls}`,
    [1, 2, 3, 4, 5, 6, 7, 8, 9, 10].map((n) => item(String(n))).join(""),
    "min-height:170px;max-width:260px;",
  );
const alignContentCards = [
  ["qld__align-content-start", "Pack lines to the cross-start."],
  ["qld__align-content-end", "Pack lines to the cross-end."],
  ["qld__align-content-center", "Centre the lines."],
  ["qld__align-content-between", "First/last lines flush; space between."],
  ["qld__align-content-around", "Equal space around each line."],
  ["qld__align-content-stretch", "Stretch lines to fill the cross axis."],
].map(([cls, desc]) => card(`.${cls}`, desc, alignContentDemo(cls)));

// flex grow / shrink / fill — classes applied to the items
const growShrinkCards = [
  card(
    ".qld__flex-fill",
    "Item grows and shrinks to take the available space (flex: 1 1 auto).",
    container(
      "qld__display-flex",
      item("auto") +
        item("qld__flex-fill", { cls: "qld__flex-fill" }) +
        item("auto"),
    ),
  ),
  card(
    ".qld__flex-grow-1",
    "Item grows to absorb free space; siblings stay at their content size.",
    container(
      "qld__display-flex",
      item("grow-1", { cls: "qld__flex-grow-1" }) + item("2") + item("3"),
    ),
  ),
  card(
    ".qld__flex-grow-0",
    "Item does not grow (the default) — stays at its content size.",
    container(
      "qld__display-flex",
      item("grow-0", { cls: "qld__flex-grow-0" }) +
        item("grow-1", { cls: "qld__flex-grow-1" }),
    ),
  ),
  card(
    ".qld__flex-shrink-0",
    "Item refuses to shrink below its content size when space is tight.",
    container(
      "qld__display-flex",
      item("shrink-0 — a long, unshrinkable label", {
        cls: "qld__flex-shrink-0",
      }) + item("shrink-1", { cls: "qld__flex-shrink-1" }),
      "max-width:260px;",
    ),
  ),
];

// align-self — override the container's align-items for a single item. Container
// is align-items-start; the highlighted item overrides it.
const alignSelfDemo = (cls) =>
  container(
    "qld__display-flex qld__align-items-start",
    item("1") + item(cls.replace("qld__align-self-", ""), { cls }) + item("3"),
    "min-height:110px;",
  );
const alignSelfCards = [
  ["qld__align-self-start", "This item aligns to the cross-start."],
  ["qld__align-self-end", "This item aligns to the cross-end."],
  ["qld__align-self-center", "This item centres on the cross axis."],
  ["qld__align-self-stretch", "This item stretches to fill the cross axis."],
].map(([cls, desc]) => card(`.${cls}`, desc, alignSelfDemo(cls)));

// order — the two examples from the brief, rendered live.
const orderCards = [
  card(
    ".qld__order-1 … .qld__order-5",
    "Numeric order (0–5) reorders items regardless of source order.",
    container(
      "qld__display-flex",
      item("item 1", { cls: "qld__order-3" }) +
        item("item 2", { cls: "qld__order-2" }) +
        item("item 3", { cls: "qld__order-1" }) +
        item("item 4", { cls: "qld__order-5" }) +
        item("item 5", { cls: "qld__order-4" }),
    ),
  ),
  card(
    ".qld__order-first / .qld__order-last",
    "order-first (order: -1) and order-last (order: 6) jump an item to the ends.",
    container(
      "qld__display-flex",
      item("item 1", { cls: "qld__order-last" }) +
        item("item 2") +
        item("item 3", { cls: "qld__order-first" }),
    ),
  ),
];

// Responsive-variant note. Every utility has breakpoint variants that apply from
// the named breakpoint up; widths mirror the QLD-media breakpoints in globals.js.
const responsiveNote = `
  <div style="margin-top:28px;padding:16px;border:1px solid ${BORDER};border-radius:6px;background:#f6f8fa;">
    <div style="font-weight:700;font-size:15px;color:${TEXT};margin-bottom:6px;">Responsive variants</div>
    <p style="font-size:13px;color:${MUTED};margin:0 0 8px;line-height:1.5;">
      Every class above has <code>-sm</code>, <code>-md</code>,
      <code>-lg</code> and <code>-xl</code> variants that take effect from
      that breakpoint up — e.g. <code>.qld__flex-md-column</code>,
      <code>.qld__justify-content-lg-between</code>,
      <code>.qld__order-sm-first</code>.
    </p>
    <p style="font-size:13px;color:${MUTED};margin:0;line-height:1.5;">
      Breakpoints — <strong>sm</strong> 400px · <strong>md</strong> 699px · <strong>lg</strong> 992px · <strong>xl</strong> 1312px.
    </p>
  </div>`;

// Page shell shared by both stories: a title, intro blurb, the section
// accordions, then the responsive-variant note and source line.
const page = (title, blurb, sections) => `
  <div style="font-family:${SANS};color:${TEXT};padding:1rem;">
    <h1 style="font-size:28px;font-weight:700;margin:0 0 8px;">${title}</h1>
    <p style="color:${MUTED};margin:0 0 8px;max-width:72ch;line-height:1.5;">${blurb}</p>
    <p style="margin:0 0 8px;font-size:13px;color:${MUTED};">
      <strong>Resources:</strong>
      <a href="${DS_URL}" target="_blank" rel="noopener noreferrer" style="color:${LINK};">QLD Design System ↗</a>
    </p>
    <p style="margin:0 0 8px;font-size:13px;color:${MUTED};">
      Source: <code>${SOURCE}</code>
    </p>
    ${sections}
    ${responsiveNote}
  </div>`;

// Parent utilities go on the flex container itself.
const renderParent = () =>
  page(
    "Flexbox utilities — flex container (parent)",
    `Classes that go on the flex <strong>container</strong>. Start with
      <code>.qld__display-flex</code> to make an element a flex parent, then
      control the flow of its children with direction, wrap, and the justify/align utilities.
      Every demo below is live — it uses the real <code>qld__</code> classes
      compiled into the design system.`,
    `${section("Display", displayCards.length, displayCards)}
    ${section("Flex direction", directionCards.length, directionCards)}
    ${section("Justify content — main axis", justifyCards.length, justifyCards)}
    ${section("Align items — cross axis", alignItemsCards.length, alignItemsCards)}
    ${section("Flex wrap", wrapCards.length, wrapCards)}
    ${section("Align content — wrapped lines", alignContentCards.length, alignContentCards)}`,
  );

// Child utilities go on the individual flex items.
const renderChildren = () =>
  page(
    "Flexbox utilities — flex items (children)",
    `Classes that go on the individual flex <strong>items</strong> inside a
      <code>.qld__display-flex</code> parent. Reorder items, control how they grow
      and shrink to share space, and override the parent's cross-axis alignment for a single item.
      Every demo below is live — it uses the real <code>qld__</code> classes
      compiled into the design system.`,
    `${section("Order", orderCards.length, orderCards)}
    ${section("Grow, shrink & fill", growShrinkCards.length, growShrinkCards)}
    ${section("Align self", alignSelfCards.length, alignSelfCards)}`,
  );

export default {
  title: "1. Core Styles/Flexbox utilities",
  // This is a utility reference page, so opt out of the auto-generated docs page
  // (autodocs is enabled globally in preview.js), matching Colours.stories.js.
  tags: ["!autodocs"],
};

// Split by where the class is applied: container-level utilities vs item-level.
export const FlexContainerParent = { render: () => renderParent() };
export const FlexItemsChildren = { render: () => renderChildren() };
