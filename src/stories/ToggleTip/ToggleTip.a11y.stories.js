import { within, userEvent, expect, waitFor } from "storybook/test";
import ToggleTipMeta from "./ToggleTip.stories.js";

const meta = {
  ...ToggleTipMeta,
  title: "3. Components/Toggle Tip/Accessibility",
  tags: ["!autodocs"],
  parameters: {
    ...ToggleTipMeta.parameters,
    chromatic: { disableSnapshot: true },
  },
};
export default meta;

/**
 * Clicking the trigger opens the toggle tip: aria-expanded becomes "true" and
 * the content panel gains the visible class.
 */
export const ClickOpensToggleTip = {
  name: "Click trigger opens toggle tip",
  play: async ({ canvasElement }) => {
    const canvas = within(canvasElement);
    const trigger = canvas.getByRole("button", { name: /toggle tip/i });
    const content = canvasElement.querySelector(".qld__toggle-tip-content");

    await expect(trigger).toHaveAttribute("aria-expanded", "false");
    await expect(content).toHaveClass("qld__toggle-tip-hidden");

    await userEvent.click(trigger);

    await waitFor(() =>
      expect(trigger).toHaveAttribute("aria-expanded", "true"),
    );
    await expect(content).toHaveClass("qld__toggle-tip-visible");
  },
};

/**
 * Clicking the trigger a second time closes the toggle tip.
 */
export const ClickTogglesClose = {
  name: "Second click closes toggle tip",
  play: async ({ canvasElement }) => {
    const canvas = within(canvasElement);
    const trigger = canvas.getByRole("button", { name: /toggle tip/i });
    const content = canvasElement.querySelector(".qld__toggle-tip-content");

    await userEvent.click(trigger);
    await waitFor(() =>
      expect(trigger).toHaveAttribute("aria-expanded", "true"),
    );

    await userEvent.click(trigger);
    await waitFor(() =>
      expect(trigger).toHaveAttribute("aria-expanded", "false"),
    );
    await expect(content).toHaveClass("qld__toggle-tip-hidden");
  },
};

/**
 * Pressing Escape while the toggle tip is open closes it and returns focus
 * to the trigger.
 */
export const EscapeClosesAndRestoresFocus = {
  name: "Escape closes toggle tip and returns focus to trigger",
  play: async ({ canvasElement }) => {
    const canvas = within(canvasElement);
    const trigger = canvas.getByRole("button", { name: /toggle tip/i });

    await userEvent.click(trigger);
    await waitFor(() =>
      expect(trigger).toHaveAttribute("aria-expanded", "true"),
    );

    await userEvent.keyboard("{Escape}");

    await waitFor(() =>
      expect(trigger).toHaveAttribute("aria-expanded", "false"),
    );
    await expect(trigger).toHaveFocus();
  },
};

/**
 * Clicking anywhere outside the toggle tip content closes it.
 */
export const ClickOutsideCloses = {
  name: "Clicking outside closes toggle tip",
  play: async ({ canvasElement }) => {
    const canvas = within(canvasElement);
    const trigger = canvas.getByRole("button", { name: /toggle tip/i });

    await userEvent.click(trigger);
    await waitFor(() =>
      expect(trigger).toHaveAttribute("aria-expanded", "true"),
    );

    await userEvent.click(document.body);

    await waitFor(() =>
      expect(trigger).toHaveAttribute("aria-expanded", "false"),
    );
  },
};

/**
 * The icon trigger variant opens and closes the same way as the definition
 * variant.
 */
export const IconTriggerOpensToggleTip = {
  name: "Icon trigger opens toggle tip",
  args: {
    triggerType: "icon",
    triggerText: "Show help",
    icon: "help",
  },
  play: async ({ canvasElement }) => {
    const canvas = within(canvasElement);
    const trigger = canvas.getByRole("button", { name: /show help/i });
    const content = canvasElement.querySelector(".qld__toggle-tip-content");

    await userEvent.click(trigger);

    await waitFor(() =>
      expect(trigger).toHaveAttribute("aria-expanded", "true"),
    );
    await expect(content).toHaveClass("qld__toggle-tip-visible");
  },
};
