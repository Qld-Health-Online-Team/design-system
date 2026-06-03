import { within, userEvent, expect, waitFor } from "storybook/test";
import MegaMainNavMeta from "./mega_main_navigation.stories.js";

// Reuses the render, args, and argTypes from the visual stories file so
// the two files share a single sidebar entry. The meta-level chromatic
// parameter disables visual snapshots for every story in this file — the
// `play` assertions still run as Chromatic interaction tests.
const meta = {
    ...MegaMainNavMeta,
    title: "3. Components/Mega Main Navigation/Accessibility",
    tags: ["!autodocs"],
    parameters: {
        ...MegaMainNavMeta.parameters,
        chromatic: { disableSnapshot: true },
    },
};
export default meta;

/**
 * Clicking a toggle button opens its panel (aria-expanded → true) and a
 * second click closes it again (aria-expanded → false).
 */
export const KeyboardToggleOpenClose = {
    name: "Toggle open/close reflects aria-expanded",
    play: async ({ canvasElement }) => {
        const canvas = within(canvasElement);
        const toggle = canvas.getByRole("button", { name: /toggle navigation, services/i });

        await expect(toggle).toHaveAttribute("aria-expanded", "false");

        await userEvent.click(toggle);
        await expect(toggle).toHaveAttribute("aria-expanded", "true");

        await userEvent.click(toggle);
        await expect(toggle).toHaveAttribute("aria-expanded", "false");
    },
};

/**
 * Pressing ESC while a panel is open closes it and returns keyboard focus
 * to the toggle button that opened it.
 */
export const EscapeClosesAndRestoresFocus = {
    name: "ESC closes panel and returns focus to toggle",
    play: async ({ canvasElement }) => {
        const canvas = within(canvasElement);
        const toggle = canvas.getByRole("button", { name: /toggle navigation, services/i });

        await userEvent.click(toggle);
        await expect(toggle).toHaveAttribute("aria-expanded", "true");

        await userEvent.keyboard("{Escape}");

        await expect(toggle).toHaveAttribute("aria-expanded", "false");
        await expect(toggle).toHaveFocus();
    },
};

/**
 * Once a panel is open, ArrowDown/ArrowUp move focus sequentially through
 * the focusable links inside the panel.
 *
 * Uses the "Conditions & treatments" panel because its list item (assetid 20)
 * is not the current page (assetid 10), so it renders as an <a> link rather
 * than a <span>. This gives us at least two focusable items to step through.
 * The test queries with the same selector the keydown handler uses internally.
 */
export const ArrowKeyNavigation = {
    name: "ArrowDown/Up navigate links within open panel",
    play: async ({ canvasElement }) => {
        const canvas = within(canvasElement);
        const toggle = canvas.getByRole("button", { name: /toggle navigation, conditions/i });

        await userEvent.click(toggle);
        await expect(toggle).toHaveAttribute("aria-expanded", "true");

        // Wait until the submenu is visible (display cleared by accordion.Open).
        const subMenu = canvasElement.querySelector("#mega-nav-20");
        await waitFor(() => {
            if (subMenu.style.display === "none") throw new Error("submenu still hidden");
        });

        // Mirror the selector used by handleSubMenuKeyDown so focus movement matches.
        const FOCUSABLE = 'a[href], button:not([disabled]), input:not([disabled]), select:not([disabled]), textarea:not([disabled]), [tabindex]:not([tabindex="-1"])';
        const focusableItems = Array.from(subMenu.querySelectorAll(FOCUSABLE));

        await expect(focusableItems.length).toBeGreaterThanOrEqual(2);

        focusableItems[0].focus();
        await expect(focusableItems[0]).toHaveFocus();

        await userEvent.keyboard("{ArrowDown}");
        await expect(focusableItems[1]).toHaveFocus();

        await userEvent.keyboard("{ArrowUp}");
        await expect(focusableItems[0]).toHaveFocus();
    },
};

/**
 * Only one panel can be open at a time. Opening a second panel must
 * close the previously open one.
 */
export const MutualExclusion = {
    name: "Opening second panel closes the first",
    play: async ({ canvasElement }) => {
        const canvas = within(canvasElement);
        const servicesToggle = canvas.getByRole("button", { name: /toggle navigation, services/i });
        const conditionsToggle = canvas.getByRole("button", { name: /toggle navigation, conditions/i });

        await userEvent.click(servicesToggle);
        await expect(servicesToggle).toHaveAttribute("aria-expanded", "true");
        await expect(conditionsToggle).toHaveAttribute("aria-expanded", "false");

        await userEvent.click(conditionsToggle);
        await expect(conditionsToggle).toHaveAttribute("aria-expanded", "true");
        await expect(servicesToggle).toHaveAttribute("aria-expanded", "false");
    },
};

/**
 * Clicking anywhere outside the open panel (and its toggle button) dismisses it.
 */
export const ClickOutsideCloses = {
    name: "Clicking outside closes open panel",
    play: async ({ canvasElement }) => {
        const canvas = within(canvasElement);
        const toggle = canvas.getByRole("button", { name: /toggle navigation, services/i });

        await userEvent.click(toggle);
        await expect(toggle).toHaveAttribute("aria-expanded", "true");

        // Click the document body — outside the nav entirely.
        await userEvent.click(document.body);

        await waitFor(() => expect(toggle).toHaveAttribute("aria-expanded", "false"));
    },
};
