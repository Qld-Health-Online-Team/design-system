import { expect, within } from "storybook/test";
import DetailsSummaryMeta from "./DetailsSummary.stories.js";

const meta = {
  ...DetailsSummaryMeta,
  title: "3. Components/Details Summary/Accessibility",
  tags: ["!autodocs"],
  parameters: {
    ...DetailsSummaryMeta.parameters,
    chromatic: { disableSnapshot: true },
  },
};

export default meta;

/**
 * The summary keeps its place in the tab order and takes focus. The component
 * removes the marker, strips the focus outline and restructures the summary as
 * a flex container, any of which could make it unreachable without changing
 * how it looks.
 *
 * Enter and Space are deliberately not exercised here. Toggling `<details>` is
 * a browser default action, and default actions only run for trusted events —
 * the synthetic ones `userEvent` dispatches never trigger them. (Keyboard tests
 * elsewhere in this repo pass because those components have their own keydown
 * handlers, which synthetic events do reach.) Asserting it would prove nothing
 * about the component, so it is left to manual testing.
 */
export const KeyboardFocusable = {
  name: "The summary is focusable and stays in the tab order",
  play: async ({ canvasElement }) => {
    const summary = canvasElement.querySelector(".qld__details__summary");

    // Not userEvent.tab(): testing-library's focusable-element list has no
    // entry for <summary>, so tabbing skips it here even though browsers focus
    // it. A tabindex override is what would actually pull it out of the order.
    await expect(summary).not.toHaveAttribute("tabindex");

    summary.focus();
    await expect(summary).toHaveFocus();
  },
};

/**
 * Focus is taken by the `<summary>`, but the visible ring is drawn on the text
 * element inside it. Both halves of that arrangement are asserted, since a
 * regression in either one leaves a control with no visible focus state.
 */
export const FocusRingIsVisible = {
  name: "Focus draws a visible ring on the summary text",
  play: async ({ canvasElement }) => {
    const summary = canvasElement.querySelector(".qld__details__summary");
    const text = canvasElement.querySelector(".qld__details__summary-text");

    summary.focus();

    await expect(getComputedStyle(summary).outlineStyle).toBe("none");

    const ring = getComputedStyle(text);
    await expect(ring.outlineStyle).toBe("solid");
    await expect(parseFloat(ring.outlineWidth)).toBeGreaterThanOrEqual(2);
  },
};

/**
 * WCAG 2.5.5 Target Size (AAA) asks for 44px. The summary row carries a
 * min-height to meet it even though the text alone is shorter.
 */
export const TargetSizeIsLargeEnough = {
  name: "The summary meets the 44px target size",
  play: async ({ canvasElement }) => {
    const summary = canvasElement.querySelector(".qld__details__summary");

    await expect(summary.getBoundingClientRect().height).toBeGreaterThanOrEqual(
      44,
    );
  },
};

/**
 * The chevron is decorative — the open/closed state is conveyed by the native
 * summary semantics — so it must stay out of the accessibility tree, and the
 * accessible name must be the summary text alone.
 */
export const ChevronIsNotAnnounced = {
  name: "The chevron is hidden from assistive technology",
  play: async ({ canvasElement }) => {
    const canvas = within(canvasElement);
    const icon = canvasElement.querySelector(".qld__details__icon");
    const summary = canvasElement.querySelector(".qld__details__summary");

    await expect(icon).toHaveAttribute("aria-hidden", "true");
    await expect(canvas.getByText("Summary")).toBeInTheDocument();
    await expect(summary.textContent.trim()).toBe("Summary");
  },
};
