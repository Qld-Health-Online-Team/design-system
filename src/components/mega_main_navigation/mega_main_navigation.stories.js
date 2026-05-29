import Template from "./html/component.hbs";
import { initMegaMenu } from "./js/global.js";
import { within, userEvent, expect, waitFor } from "storybook/test";

function render(args) {
    const {
        site,
        children,
        currentAssetid,
        showMegaMenu,
        showHomeIcon,
        showPageDescLevelOne,
        showPageDescLevelTwo,
        showViewAll,
        preHeaderTheme,
        navStyle,
        ctaOneText,
        ctaOneIcon,
        ctaTwoText,
        ctaTwoIcon,
    } = args;

    return Template({
        site: {
            ...site,
            data: { assetid: "1" },
            metadata: {
                ...site?.metadata,
                mainNavStyle: { value: navStyle },
                mainNavDesktopHide: { value: "no" },
                sitePreHeaderTheme: { value: preHeaderTheme },
                mainNavHomeIconShow: { value: showHomeIcon },
                mainNavMegaMenuShow: { value: showMegaMenu ? "true" : "false" },
                mainNavPageDescLevelOne: { value: showPageDescLevelOne ? "true" : "false" },
                mainNavPageDescLevelTwo: { value: showPageDescLevelTwo ? "true" : "false" },
                mainNavViewAllShow: { value: showViewAll ? "true" : "false" },
                mainNavCtaOne: { value: ctaOneText ? "100" : "" },
                mainNavCtaOneText: { value: ctaOneText },
                mainNavCtaOneIcon: { value: ctaOneIcon },
                mainNavCtaTwo: { value: ctaTwoText ? "101" : "" },
                mainNavCtaTwoText: { value: ctaTwoText },
                mainNavCtaTwoIcon: { value: ctaTwoIcon },
            },
            children,
        },
        current: {
            home: false,
            data: { assetid: currentAssetid },
            top: { asset_assetid: currentAssetid },
        },
    });
}

const sampleChildren = [
    {
        asset_assetid: "10",
        asset_short_name: "Services",
        asset_metadata_shortDescription: "Find a service near you.",
        children: [
            {
                asset_metadata_showInMegaNav: "true",
                asset_assetid: "10",
                asset_name: "Services",
                asset_metadata_shortDescription: "Browse our service categories.",
                asset_short_name: "Services",
                asset_url: "#",
            },
            { asset_assetid: "11", asset_short_name: "Hospitals", asset_url: "#", asset_metadata_shortDescription: "Public hospital locations." },
            { asset_assetid: "12", asset_short_name: "Community health", asset_url: "#", asset_metadata_shortDescription: "Local clinics and outreach." },
            { asset_assetid: "13", asset_short_name: "Mental health", asset_url: "#", asset_metadata_shortDescription: "Support and crisis services." },
            { asset_assetid: "14", asset_short_name: "Aged care", asset_url: "#", asset_metadata_shortDescription: "Care for older Queenslanders." },
            { asset_assetid: "15", asset_short_name: "Dental services", asset_url: "#" },
            { asset_assetid: "16", asset_short_name: "Emergency departments", asset_url: "#" },
        ],
    },
    {
        asset_assetid: "20",
        asset_short_name: "Conditions & treatments",
        asset_metadata_shortDescription: "Information about health conditions.",
        children: [
            {
                asset_metadata_showInMegaNav: "true",
                asset_assetid: "20",
                asset_name: "Conditions & treatments",
                asset_metadata_shortDescription: "A-Z of health conditions.",
                asset_short_name: "Conditions & treatments",
                asset_url: "#",
            },
            { asset_assetid: "21", asset_short_name: "Heart health", asset_url: "#" },
            { asset_assetid: "22", asset_short_name: "Diabetes", asset_url: "#" },
            { asset_assetid: "23", asset_short_name: "Cancer", asset_url: "#" },
            { asset_assetid: "24", asset_short_name: "Immunisation", asset_url: "#" },
        ],
    },
    {
        asset_assetid: "30",
        asset_short_name: "Health alerts",
        children: [
            { asset_metadata_showInMegaNav: "false", asset_assetid: "30", asset_short_name: "Health alerts", asset_url: "#" },
        ],
    },
    {
        asset_assetid: "40",
        asset_short_name: "About us",
        children: [
            { asset_metadata_showInMegaNav: "false", asset_assetid: "40", asset_short_name: "About us", asset_url: "#" },
        ],
    },
];

/**
 * The Mega Main Navigation is the primary site-wide nav bar. Each top-level
 * item can expand into a multi-column mega-menu panel exposing its child
 * pages, short descriptions, and an optional "View all" link.
 *
 * Use it on sites with a deep information architecture. For flat IAs, prefer
 * the Main Navigation component.
 */
const meta = {
    title: "3. Components/Mega Main Navigation",
    render,
    argTypes: {
        showMegaMenu: { name: "Mega menu enabled", control: "boolean" },
        showHomeIcon: { name: "Show home icon", control: "boolean" },
        showPageDescLevelOne: { name: "Descriptions: level 1", control: "boolean" },
        showPageDescLevelTwo: { name: "Descriptions: level 2", control: "boolean" },
        showViewAll: { name: 'Show "View all" link', control: "boolean" },
        navStyle: {
            name: "Nav style",
            control: { type: "radio" },
            options: ["", "qld__main-nav--dark"],
        },
        preHeaderTheme: {
            name: "Pre-header theme",
            control: { type: "radio" },
            options: ["", "qld__header__pre-header--dark", "qld__header__pre-header--dark-alt"],
        },
        currentAssetid: { name: "Active item assetid", control: "text" },
        ctaOneText: { name: "CTA 1 text", control: "text" },
        ctaOneIcon: { name: "CTA 1 icon", control: "text" },
        ctaTwoText: { name: "CTA 2 text", control: "text" },
        ctaTwoIcon: { name: "CTA 2 icon", control: "text" },
        children: { table: { disable: true } },
    },
    args: {
        showMegaMenu: true,
        showHomeIcon: true,
        showPageDescLevelOne: true,
        showPageDescLevelTwo: false,
        showViewAll: true,
        navStyle: "",
        preHeaderTheme: "",
        currentAssetid: "10",
        ctaOneText: "Contact",
        ctaOneIcon: "phone",
        ctaTwoText: "Search",
        ctaTwoIcon: "search",
        children: sampleChildren,
    },
};
export default meta;

/**
 * The default light-theme nav with the mega menu enabled, home icon, two CTAs,
 * and a single level of inline descriptions inside the open panel.
 */
export const Default = {};

/**
 * Dark nav style paired with the dark pre-header theme. Use when the rest of
 * the site's header chrome is on the dark variant.
 */
export const DarkTheme = {
    args: {
        navStyle: "qld__main-nav--dark",
        preHeaderTheme: "qld__header__pre-header--dark",
    },
};

/**
 * Mega-menu behaviour disabled — the bar renders as a flat top-level list
 * with no chevron buttons and no expandable panels. Functionally equivalent
 * to the Main Navigation component.
 */
export const PlainNoMegaMenu = {
    args: {
        showMegaMenu: false,
        showViewAll: false,
    },
};

/**
 * Both CTA text fields cleared, so the right-aligned action buttons are
 * suppressed entirely.
 */
export const WithoutCtaButtons = {
    args: {
        ctaOneText: "",
        ctaTwoText: "",
    },
};

/**
 * Descriptions enabled for both the panel heading (level 1) and individual
 * link items (level 2). Useful when child pages have meaningful short
 * descriptions that aid scanning.
 */
export const DescriptionsOnBothLevels = {
    args: {
        showPageDescLevelOne: true,
        showPageDescLevelTwo: true,
    },
};

/**
 * No children and no CTAs configured — verifies the bar renders cleanly
 * with only the close button and focus traps.
 */
export const Empty = {
    args: { children: [], ctaOneText: "", ctaTwoText: "" },
};

// ─── Accessibility interaction tests ─────────────────────────────────────────

/**
 * Clicking a toggle button opens its panel (aria-expanded → true) and a
 * second click closes it again (aria-expanded → false).
 */
export const KeyboardToggleOpenClose = {
    name: "A11y: toggle open/close reflects aria-expanded",
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
    name: "A11y: ESC closes panel and returns focus to toggle",
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
    name: "A11y: ArrowDown/Up navigate links within open panel",
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
    name: "A11y: opening second panel closes the first",
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
    name: "A11y: clicking outside closes open panel",
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
