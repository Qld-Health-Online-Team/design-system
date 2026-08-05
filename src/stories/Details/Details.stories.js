import Template from "../../components/details/html/component.hbs";
import {
  iconSpritePath,
  printParams,
  storyParams,
  themes,
} from "../../../.storybook/globals";
import { expect, userEvent, waitFor, within } from "storybook/test";

const renderDetails = ({
  assetId,
  idField,
  bodyBackground,
  size,
  summary,
  content,
  open,
  ...args
}) =>
  Template({
    component: {
      assetid: assetId,
      data: {
        metadata: {
          id_field: { value: idField },
          body_background: { value: bodyBackground },
          size: { value: size },
          summary: { value: summary },
          content: { value: content },
          open: { value: open ? "yes" : "no" },
        },
      },
    },
    site: { metadata: { coreSiteIcons: { value: iconSpritePath } } },
    ...args,
  });

// The summary text's rendered lines, one client rect per line. Measuring the
// text node rather than the element excludes the chevron, which is the whole
// point of the alignment and wrapping assertions below.
const summaryTextLines = (textElement) => {
  const textNode = [...textElement.childNodes].find(
    (node) => node.nodeType === Node.TEXT_NODE && node.textContent.trim(),
  );
  const range = document.createRange();
  range.selectNodeContents(textNode);
  return [...range.getClientRects()].filter((rect) => rect.width > 0);
};

const firstLineOf = (textElement) => summaryTextLines(textElement)[0];

const meta = {
  title: "3. Components/Details",
  render: renderDetails,
  argTypes: {
    assetId: { description: "The ID of the asset.", control: "text" },
    idField: { description: "The ID of the field.", control: "text" },
    bodyBackground: {
      description: "The background colour of the surrounding body.",
      control: {
        type: "radio",
        labels: {
          "": "White",
          "qld__body--light": "Light",
          "qld__body--alt": "Alternate",
          "qld__body--dark": "Dark",
          "qld__body--dark-alt": "Dark Alternate",
        },
      },
      options: [
        "",
        "qld__body--light",
        "qld__body--alt",
        "qld__body--dark",
        "qld__body--dark-alt",
      ],
    },
    size: {
      description: "The size of the disclosure.",
      control: {
        type: "radio",
        labels: {
          "": "Default",
          "qld__details--sm": "Small",
          "qld__details--md": "Medium",
          "qld__details--lg": "Large",
          "qld__details--xl": "Extra large",
        },
      },
      options: [
        "",
        "qld__details--sm",
        "qld__details--md",
        "qld__details--lg",
        "qld__details--xl",
      ],
    },
    summary: {
      description: "The always-visible summary text.",
      control: "text",
    },
    content: {
      description: "The content revealed when the disclosure is open.",
      control: "text",
    },
    open: {
      description: "Whether the disclosure is open on load.",
      control: "boolean",
    },
  },
  args: {
    assetId: "details-123",
    idField: "",
    bodyBackground: "",
    size: "qld__details--lg",
    summary: "Summary",
    content:
      "<p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce dictum efficitur egestas. Aenean sed pretium mauris.</p>",
    open: false,
  },
  parameters: storyParams("details"),
};

export default meta;

export const Default = {};

// The chevron scales with the summary text and the content indent is derived
// from the same font size, so the content stays aligned with the summary text
// at every size. The play test pins that invariant.
export const Sizes = {
  render: () =>
    [
      "",
      "qld__details--sm",
      "qld__details--md",
      "qld__details--lg",
      "qld__details--xl",
    ]
      .map((size) =>
        renderDetails({
          ...meta.args,
          size,
          open: true,
          summary: size || "Default",
        }),
      )
      .join(""),
  play: async ({ canvasElement }) => {
    const items = canvasElement.querySelectorAll(".qld__details");

    await expect(items).toHaveLength(5);

    for (const details of items) {
      const text = details.querySelector(".qld__details__summary-text");
      const content = details.querySelector(".qld__details__content");

      // The content's own indent, not wherever its children happen to start
      const contentLeft =
        content.getBoundingClientRect().left +
        parseFloat(getComputedStyle(content).paddingLeft);

      await expect(Math.abs(contentLeft - firstLineOf(text).left)).toBeLessThan(
        1,
      );
    }
  },
};

// A long summary wraps on a narrow screen. The chevron sits on the first line
// rather than centring on the whole block, and the wrapped lines stay clear of
// it instead of running back underneath.
export const WrappingSummary = {
  globals: { viewport: { value: "small", isRotated: false } },
  // The viewport global only sizes the Storybook canvas. Chromatic captures at
  // its own widths, so it needs telling separately — without this the snapshot
  // is a wide, unwrapped summary and protects nothing.
  parameters: { chromatic: { viewports: [400] } },
  args: {
    open: true,
    summary:
      "What do I need to bring with me to my first appointment at the clinic?",
  },
  play: async ({ canvasElement }) => {
    const details = canvasElement.querySelector(".qld__details");
    const icon = canvasElement.querySelector(".qld__details__icon");
    const text = canvasElement.querySelector(".qld__details__summary-text");

    // Guarantee the summary wraps regardless of the headless runner's viewport
    // width (the small viewport wraps it on its own in the rendered story).
    details.style.maxWidth = "320px";

    const lines = summaryTextLines(text);
    const iconRect = icon.getBoundingClientRect();

    await expect(lines.length).toBeGreaterThan(1);

    // The chevron stays on the first line rather than drifting down the block
    await expect(iconRect.bottom).toBeLessThanOrEqual(lines[1].top);

    // Every line, not just the first, starts clear of the chevron
    for (const line of lines) {
      await expect(line.left).toBeGreaterThanOrEqual(iconRect.right);
    }

    details.style.maxWidth = "";
  },
};

// `<details>` needs no JS — this asserts the browser's own toggle behaviour
// still works with the marker removed and the chevron drawn in CSS. It ends
// closed, so its snapshot would only duplicate Default.
export const Toggle = {
  parameters: { chromatic: { disableSnapshot: true } },
  play: async ({ canvasElement }) => {
    const canvas = within(canvasElement);
    const details = canvasElement.querySelector(".qld__details");
    const summary = canvas.getByText("Summary");

    await expect(details).not.toHaveAttribute("open");

    await userEvent.click(summary);
    await expect(details).toHaveAttribute("open");

    await userEvent.click(summary);
    await expect(details).not.toHaveAttribute("open");
  },
};

// The chevron is the only indicator of open state, so its rotation is worth
// pinning — it would break silently. Waits out the 0.2s transition.
export const ChevronRotates = {
  parameters: { chromatic: { disableSnapshot: true } },
  play: async ({ canvasElement }) => {
    const canvas = within(canvasElement);
    const icon = canvasElement.querySelector(".qld__details__icon");
    const summary = canvas.getByText("Summary");

    await expect(getComputedStyle(icon).transform).toBe("none");

    await userEvent.click(summary);
    await waitFor(async () =>
      expect(getComputedStyle(icon).transform).toBe(
        "matrix(0, 1, -1, 0, 0, 0)",
      ),
    );
  },
};

/**
 * How the component prints: the content revealed even though the disclosure is
 * closed, no chevron, and black text in place of the themed colours.
 *
 * Closed on purpose — paper can't be expanded, so anything left collapsed is
 * lost to the reader, and a chevron beside revealed content would still be
 * pointing "closed".
 */
export const PrintStyles = {
  args: { open: false },
  parameters: printParams(
    "that a closed disclosure still prints its content, without the chevron",
  ),
};

// The focused row needs its own instance — only one element in the document can
// hold focus, so it can't be one of the three above.
const FOCUSED_ID = "focused-example";

const allVariants = (theme, background) => `
  <div class="${theme}" style="padding: 2rem;">
    <h3>Closed</h3>
    ${renderDetails({ ...meta.args, bodyBackground: background })}
    <h3>Open</h3>
    ${renderDetails({ ...meta.args, bodyBackground: background, open: true })}
    <h3>Default size</h3>
    ${renderDetails({ ...meta.args, bodyBackground: background, size: "" })}
    <h3>Focused</h3>
    ${renderDetails({ ...meta.args, bodyBackground: background, idField: FOCUSED_ID })}
  </div>
`;

/**
 * Leaves the last row focused so the theme sheets double as focus-state
 * snapshots — Chromatic captures whatever the play function leaves behind, and
 * focus, unlike `:hover`, is real DOM state that survives into the screenshot.
 *
 * The assertions only confirm a ring is drawn on the right element; whether it
 * is the *correct colour for the theme* is what the snapshot itself covers.
 */
const focusLastExample = async ({ canvasElement }) => {
  const summary = canvasElement.querySelector(
    `#${FOCUSED_ID} .qld__details__summary`,
  );

  // preventScroll keeps the captured scroll position deterministic
  summary.focus({ preventScroll: true });
  await expect(summary).toHaveFocus();

  // The ring belongs to the text element, and to only the focused row
  const ringed = [
    ...canvasElement.querySelectorAll(".qld__details__summary-text"),
  ].filter((element) => getComputedStyle(element).outlineStyle === "solid");

  await expect(ringed).toHaveLength(1);
  await expect(summary).toContainElement(ringed[0]);
};

export const White = {
  render: () => allVariants(themes["white"], ""),
  play: focusLastExample,
};

export const Light = {
  render: () => allVariants(themes["light"], "qld__body--light"),
  play: focusLastExample,
};

export const Alternative = {
  render: () => allVariants(themes["light alt"], "qld__body--alt"),
  play: focusLastExample,
};

export const Dark = {
  render: () => allVariants(themes["dark"], "qld__body--dark"),
  play: focusLastExample,
};

export const DarkAlt = {
  render: () => allVariants(themes["dark alt"], "qld__body--dark-alt"),
  play: focusLastExample,
};
