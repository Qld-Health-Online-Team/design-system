import Template from "../../../components/left_hand_navigation/html/component.hbs";
import { storyParams } from "../../../../.storybook/globals";
import { expect, userEvent } from "storybook/test";
import { initComponents } from "../../../../.storybook/decorators";
import initLeftHandNav from "../../../components/left_hand_navigation/js/global";
import isChromatic from "chromatic/isChromatic";

// The section's root ("Home") link sits above the page list. Its asset id is
// compared against the current page to decide whether Home renders active.
const HOME = { id: "1", name: "Home" };

// Mock Matrix page tree. The left-hand nav renders top-level sections, each of
// which can expand into an accordion of child pages. A section's accordion is
// only rendered when mainNavMegaMenuShow is "true" and the section has children
// flagged with `showInMegaNav`.
const sectionPages = [
  {
    id: "10",
    name: "Services",
    children: [
      { id: "11", name: "Hospitals" },
      { id: "12", name: "Community health" },
      { id: "13", name: "Mental health" },
    ],
  },
  {
    id: "20",
    name: "Conditions & treatments",
    children: [
      { id: "21", name: "Heart health" },
      { id: "22", name: "Diabetes" },
    ],
  },
  { id: "30", name: "Health alerts" },
  {
    id: "40",
    name: "About us",
    children: [{ id: "41", name: "Our team" }],
  },
];

function toMatrixNodes(pages) {
  return pages.map(({ id, name, children }) => ({
    asset_assetid: id,
    asset_short_name: name,
    asset_url: `#page-${id}`,
    // Childless sections still need an array so the `arrayWith` helper, which
    // reads `children.length`, doesn't throw.
    children: (children ?? []).map((child) => ({
      asset_assetid: child.id,
      asset_short_name: child.name,
      asset_url: `#page-${child.id}`,
      asset_metadata_showInMegaNav: "true",
    })),
  }));
}

/** Path of pages from a top-level section down to the given page, or null. */
function findPath(pages, id, trail = []) {
  for (const page of pages) {
    const path = [...trail, page];
    if (page.id === id) return path;
    if (page.children) {
      const found = findPath(page.children, id, path);
      if (found) return found;
    }
  }
  return null;
}

function flattenPages(pages, depth = 0) {
  return pages.flatMap((page) => [
    { id: page.id, label: `${"— ".repeat(depth)}${page.name}` },
    ...(page.children ? flattenPages(page.children, depth + 1) : []),
  ]);
}

const pageOptions = [HOME, ...flattenPages(sectionPages)];

function render({ navStyle, showHomeIcon, currentPageId, ...args }) {
  // Lineage marks a section's link as "open" so initLeftHandNav expands the
  // ancestor branch of the current page.
  const lineage = findPath(sectionPages, currentPageId) ?? [];
  return Template({
    site: {
      ...args.site,
      data: { assetid: HOME.id },
      metadata: {
        ...args.site?.metadata,
        mainNavStyle: { value: navStyle },
        mainNavHomeIconShow: { value: showHomeIcon },
        mainNavMegaMenuShow: { value: "true" },
      },
      children: toMatrixNodes(sectionPages),
    },
    current: {
      data: { assetid: currentPageId },
      lineage: lineage.map((page) => ({ asset_assetid: page.id })),
    },
  });
}

export default {
  title: "3. Components/Global Navigation/Vertical",
  render,
  decorators: [initComponents([initLeftHandNav])],
  parameters: storyParams("leftHandNavigation"),
  argTypes: {
    currentPageId: {
      control: {
        type: "select",
        labels: Object.fromEntries(
          pageOptions.map(({ id, label }) => [id, label]),
        ),
      },
      options: pageOptions.map(({ id }) => id),
      description:
        "Asset id of the current page. Marks that item active and expands its parent section.",
    },
    showHomeIcon: {
      control: "boolean",
      description: "Show the home icon beside the top 'Home' link.",
    },
    navStyle: {
      name: "Nav style",
      control: { type: "radio" },
      options: ["", "qld__main-nav--dark"],
    },
  },
  args: {
    currentPageId: "11",
    showHomeIcon: true,
    navStyle: "",
  },
};

/**
 * A child page is current, so its parent section ("Services") is expanded and
 * the active item is highlighted.
 */
export const Default = {};

/**
 * A top-level section page is current. The section is marked active; its child
 * accordion stays collapsed until a child page is the current page.
 */
export const SectionLandingPage = {
  args: { currentPageId: "10" },
};

/**
 * The section root ("Home") is the current page.
 */
export const HomePage = {
  args: { currentPageId: "1" },
};

/**
 * Home link without its leading icon.
 */
export const NoHomeIcon = {
  args: { showHomeIcon: false },
};

/**
 * Dark navigation style.
 */
export const DarkTheme = {
  args: { navStyle: "qld__main-nav--dark" },
};

/**
 * Exercises a collapsed section's accordion toggle. With a page in "Services"
 * current, the "Conditions & treatments" section starts collapsed; clicking its
 * toggle expands it, and clicking again collapses it.
 */
export const SectionToggle = {
  args: { currentPageId: "11" },
  play: async ({ canvasElement }) => {
    // initLeftHandNav runs from a decorator deferred with setTimeout, so wait
    // one tick to be sure the toggle listeners are attached.
    await new Promise((resolve) => setTimeout(resolve, 0));

    const toggle = canvasElement.querySelector(
      '[aria-controls="internal-nav-20"]',
    );
    const body = canvasElement.querySelector("#internal-nav-20");

    // The toggle only updates classes (not aria-expanded), so assert on those.
    await expect(toggle).toHaveClass("qld__accordion--closed");
    await expect(body).toHaveClass("qld__accordion--closed");

    await userEvent.click(toggle);
    await expect(toggle).toHaveClass("qld__accordion--open");
    await expect(body).toHaveClass("qld__accordion--open");

    await userEvent.click(toggle);
    await expect(toggle).toHaveClass("qld__accordion--closed");

    // Leave the section expanded so Chromatic snapshots the open state.
    if (isChromatic()) {
      await userEvent.click(toggle);
      await expect(toggle).toHaveClass("qld__accordion--open");
    }
  },
};
