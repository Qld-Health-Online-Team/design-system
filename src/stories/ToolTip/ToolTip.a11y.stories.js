import { within, userEvent, expect, waitFor } from "storybook/test";
import ToolTipMeta from "./ToolTip.stories.js";

const meta = {
  ...ToolTipMeta,
  title: "3. Components/Tool Tip/Accessibility",
  tags: ["!autodocs"],
  parameters: {
    ...ToolTipMeta.parameters,
    chromatic: { disableSnapshot: true },
  },
};
export default meta;

/**
 * Hovering the trigger reveals the tool tip content.
 */
export const HoverOpensToolTip = {
  name: "Hovering the trigger opens the tool tip",
  play: async ({ canvasElement }) => {
    const trigger = canvasElement.querySelector(".qld__tool-tip-trigger");
    const content = canvasElement.querySelector(".qld__tool-tip-content");

    await expect(content).toHaveClass("qld__tool-tip-hidden");

    await userEvent.hover(trigger);

    await waitFor(() => expect(content).toHaveClass("qld__tool-tip-visible"));
  },
};

/**
 * Moving the pointer off the trigger closes the tool tip (after a short grace
 * period that lets the pointer travel to the content).
 */
export const UnhoverClosesToolTip = {
  name: "Leaving the trigger closes the tool tip",
  play: async ({ canvasElement }) => {
    const trigger = canvasElement.querySelector(".qld__tool-tip-trigger");
    const content = canvasElement.querySelector(".qld__tool-tip-content");

    await userEvent.hover(trigger);
    await waitFor(() => expect(content).toHaveClass("qld__tool-tip-visible"));

    await userEvent.unhover(trigger);
    await waitFor(() => expect(content).toHaveClass("qld__tool-tip-hidden"));
  },
};

/**
 * Keyboard users can reveal the tool tip by focusing the trigger.
 */
export const FocusOpensToolTip = {
  name: "Focusing the trigger opens the tool tip",
  play: async ({ canvasElement }) => {
    const canvas = within(canvasElement);
    const trigger = canvas.getByRole("button");
    const content = canvasElement.querySelector(".qld__tool-tip-content");

    // Tab to the trigger (the only focusable element) so a real focus event
    // fires — a programmatic .focus() doesn't dispatch focus in the headless
    // runner when the page isn't the OS-focused window.
    await userEvent.tab();
    await waitFor(() => expect(trigger).toHaveFocus());

    await waitFor(() => expect(content).toHaveClass("qld__tool-tip-visible"));
  },
};

/**
 * Pressing Escape while the tool tip is open closes it.
 */
export const EscapeClosesToolTip = {
  name: "Escape closes the tool tip",
  play: async ({ canvasElement }) => {
    const trigger = canvasElement.querySelector(".qld__tool-tip-trigger");
    const content = canvasElement.querySelector(".qld__tool-tip-content");

    await userEvent.hover(trigger);
    await waitFor(() => expect(content).toHaveClass("qld__tool-tip-visible"));

    await userEvent.keyboard("{Escape}");
    await waitFor(() => expect(content).toHaveClass("qld__tool-tip-hidden"));
  },
};
