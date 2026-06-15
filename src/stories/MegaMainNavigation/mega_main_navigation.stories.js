import Template from "../../components/mega_main_navigation/html/component.hbs";
import { initMegaMenu } from "../../components/mega_main_navigation/js/global.js";
import { within, userEvent, expect } from "storybook/test";
import { storyParams } from "../../../.storybook/globals";
import { initComponents } from "../../../.storybook/decorators";
import initCtaLinks from "../../components/_global/js/cta_links/global";

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
        mainNavPageDescLevelOne: {
          value: showPageDescLevelOne ? "true" : "false",
        },
        mainNavPageDescLevelTwo: {
          value: showPageDescLevelTwo ? "true" : "false",
        },
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
    asset_name: "Services",
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
      {
        asset_metadata_showInMegaNav: "true",
        asset_assetid: "11",
        asset_short_name: "Hospitals",
        asset_url: "#",
        asset_metadata_shortDescription: "Public hospital locations.",
      },
      {
        asset_metadata_showInMegaNav: "true",
        asset_assetid: "12",
        asset_short_name: "Community health",
        asset_url: "#",
        asset_metadata_shortDescription: "Local clinics and outreach.",
      },
      {
        asset_metadata_showInMegaNav: "true",
        asset_assetid: "13",
        asset_short_name: "Mental health",
        asset_url: "#",
        asset_metadata_shortDescription: "Support and crisis services.",
      },
      {
        asset_metadata_showInMegaNav: "true",
        asset_assetid: "14",
        asset_short_name: "Aged care",
        asset_url: "#",
        asset_metadata_shortDescription: "Care for older Queenslanders.",
      },
      {
        asset_assetid: "15",
        asset_short_name: "Dental services",
        asset_url: "#",
      },
      {
        asset_assetid: "16",
        asset_short_name: "Emergency departments",
        asset_url: "#",
      },
    ],
  },
  {
    asset_assetid: "20",
    asset_name: "Conditions & treatments",
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
      {
        asset_metadata_showInMegaNav: "true",
        asset_assetid: "21",
        asset_short_name: "Heart health",
        asset_url: "#",
      },
      {
        asset_metadata_showInMegaNav: "true",
        asset_assetid: "22",
        asset_short_name: "Diabetes",
        asset_url: "#",
      },
      {
        asset_metadata_showInMegaNav: "true",
        asset_assetid: "23",
        asset_short_name: "Cancer",
        asset_url: "#",
      },
      {
        asset_metadata_showInMegaNav: "true",
        asset_assetid: "24",
        asset_short_name: "Immunisation",
        asset_url: "#",
      },
    ],
  },
  {
    asset_assetid: "30",
    asset_short_name: "Health alerts",
    children: [
      {
        asset_metadata_showInMegaNav: "false",
        asset_assetid: "30",
        asset_short_name: "Health alerts",
        asset_url: "#",
      },
    ],
  },
  {
    asset_assetid: "40",
    asset_short_name: "About us",
    children: [
      {
        asset_metadata_showInMegaNav: "false",
        asset_assetid: "40",
        asset_short_name: "About us",
        asset_url: "#",
      },
    ],
  },
];

/**
 * Build a minimal top-level nav item (with a small mega-menu panel) so a story
 * can stack up enough items to force the nav bar to wrap onto a second row.
 */
function makeNavItem(assetid, name) {
  return {
    asset_assetid: assetid,
    asset_name: name,
    asset_short_name: name,
    asset_metadata_shortDescription: `About ${name.toLowerCase()}.`,
    children: [
      {
        asset_metadata_showInMegaNav: "true",
        asset_assetid: assetid,
        asset_name: name,
        asset_short_name: name,
        asset_metadata_shortDescription: `Browse ${name.toLowerCase()}.`,
        asset_url: "#",
      },
      {
        asset_metadata_showInMegaNav: "true",
        asset_assetid: `${assetid}1`,
        asset_short_name: `${name} A-Z`,
        asset_url: "#",
      },
    ],
  };
}

const wrappingChildren = [
  "Services",
  "Conditions & treatments",
  "Hospitals & locations",
  "Patients & visitors",
  "Healthy living",
  "Research & education",
  "News & events",
  "Mental health & wellbeing",
].map((name, i) => makeNavItem(`${50 + i}`, name));

const storyDocs = storyParams("navbar");

const meta = {
  title: "3. Components/Mega Main Navigation",
  render,
  decorators: [initComponents([initMegaMenu, initCtaLinks])],
  parameters: {
    ...storyDocs,
    docs: {
      ...storyDocs.docs,
      story: {
        ...storyDocs.docs.story,
        // The open mega-menu panel is position:absolute (see
        // mega_main_navigation/css/component.scss:154) so it doesn't expand its
        // parent. Give the docs Canvas room for an opened panel.
        height: "620px",
      },
    },
  },
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
      options: [
        "",
        "qld__header__pre-header--dark",
        "qld__header__pre-header--dark-alt",
      ],
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
 * Bug repro (do not delete): enough top-level items that the nav bar wraps
 * onto a second row. The viewport is pinned to "xlarge" (1312px — the desktop
 * nav breakpoint) so the wrap happens regardless of the browser window size.
 *
 * Repro steps:
 * 1. Open this story in the canvas.
 * 2. Set browser zoom to 95% (the bug does not reproduce at 100%).
 * 3. Hover the last item on the FIRST row.
 *
 * Expected: the second-row items stay on the far left.
 * Actual: the second-row items jump to sit directly underneath the hovered
 * item.
 *
 * Suspected cause: the desktop hover style adds a border-bottom and cancels
 * it with a negative margin-bottom (main_navigation/css/component.scss ~225).
 * At fractional zoom the two round differently, the hovered float gets
 * fractionally taller, and the wrapped floats can no longer slide left past
 * it (CSS float placement rules).
 */
export const WrappedSecondRowHoverBug = {
  globals: {
    viewport: { value: "xlarge", isRotated: false },
  },
  args: {
    children: wrappingChildren,
    currentAssetid: "50",
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
  play: async ({ canvasElement }) => {
    const canvas = within(canvasElement);
    const toggle = canvas.getByRole("button", {
      name: /toggle navigation, services/i,
    });

    await expect(toggle).toHaveAttribute("aria-expanded", "false");

    await userEvent.click(toggle);
    await expect(toggle).toHaveAttribute("aria-expanded", "true");
  },
};
