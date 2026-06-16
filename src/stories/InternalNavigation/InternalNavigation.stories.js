import Template from "../../components/internal_navigation/html/component.hbs";
import { storyParams } from "../../../.storybook/globals";
import { expect, userEvent } from "storybook/test";
import { initComponents } from "../../../.storybook/decorators";
import initInternalNavigation from "../../components/internal_navigation/js/global";
import { initAccordion } from "../../components/accordion/js/global";
import isChromatic from "chromatic/isChromatic";

// Mock Matrix page tree for the section. The template supports up to three
// levels; a branch only renders when its parent is in the current page's lineage.
const sectionPages = [
  { id: "101", name: "Find a hospital" },
  { id: "102", name: "Emergency departments" },
  {
    id: "103",
    name: "Patient services",
    children: [
      { id: "104", name: "Outpatients" },
      {
        id: "105",
        name: "Interpreter services",
        children: [
          { id: "106", name: "Request an interpreter" },
          { id: "107", name: "Translated resources" },
        ],
      },
    ],
  },
  { id: "108", name: "Visiting hours" },
];

function toMatrixNodes(pages) {
  return pages.map(({ id, name, children }) => ({
    asset_assetid: id,
    asset_short_name: name,
    asset_url: `#page-${id}`,
    ...(children && { children: toMatrixNodes(children) }),
  }));
}

/** Path of pages from the section root down to the given page, or null. */
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

const pageOptions = flattenPages(sectionPages);

function render({ sectionName, currentPageId, ...args }) {
  const lineage = findPath(sectionPages, currentPageId) ?? [];
  return Template({
    current: {
      top: { asset_name: sectionName, asset_url: "#section-home" },
      children: toMatrixNodes(sectionPages),
      data: { assetid: currentPageId },
      lineage: lineage.map((page) => ({ asset_assetid: page.id })),
    },
    ...args,
  });
}

export default {
  title: "3. Components/Internal Navigation",
  render,
  // The mobile "In {section}" toggle is a `.qld__accordion` wired by
  // initAccordion, so both inits run (as they do via the component loader).
  decorators: [initComponents([initAccordion, initInternalNavigation])],
  parameters: storyParams("internalNavigation"),
  argTypes: {
    sectionName: {
      control: "text",
      description:
        "Name of the section's top-level page, shown as the navigation title and in the mobile toggle label.",
    },
    currentPageId: {
      control: {
        type: "select",
        labels: Object.fromEntries(
          pageOptions.map(({ id, label }) => [id, label]),
        ),
      },
      options: pageOptions.map(({ id }) => id),
      description:
        "Asset id of the current page. Marks that item active and expands its ancestor branches.",
    },
  },
  args: {
    sectionName: "Hospitals and health services",
    currentPageId: "104",
  },
};

export const Default = {};

export const TopLevelPage = {
  args: { currentPageId: "101" },
};

export const ThirdLevelPage = {
  args: { currentPageId: "106" },
  play: async ({ canvasElement }) => {
    // The init runs from a decorator deferred with setTimeout, so wait one
    // tick to be sure the third-level icons have been inserted.
    await new Promise((resolve) => setTimeout(resolve, 0));

    const active = canvasElement.querySelector("li.active");
    await expect(active).toHaveAttribute("aria-current", "page");

    // initInternalNavigation prepends a tick icon to every third-level item.
    const icons = canvasElement.querySelectorAll("ul ul ul svg.qld__icon");
    await expect(icons).toHaveLength(2);
  },
};

/**
 * Below the side-nav breakpoint the navigation collapses behind an
 * "In {section}" accordion toggle. This story renders at a small viewport so
 * the toggle is visible, then exercises it.
 */
export const MobileToggle = {
  globals: {
    viewport: { value: "small", isRotated: false },
  },
  play: async ({ canvasElement }) => {
    // The init runs from a decorator deferred with setTimeout, so wait one
    // tick to be sure the toggle listener is attached.
    await new Promise((resolve) => setTimeout(resolve, 0));

    const toggle = canvasElement.querySelector(".qld__side-nav__toggle");
    await expect(toggle).toHaveAttribute("aria-expanded", "false");

    await userEvent.click(toggle);
    await expect(toggle).toHaveAttribute("aria-expanded", "true");

    await userEvent.click(toggle);
    await expect(toggle).toHaveAttribute("aria-expanded", "false");

    // Leave the navigation expanded so Chromatic snapshots the open state.
    if (isChromatic()) {
      await userEvent.click(toggle);
      await expect(toggle).toHaveAttribute("aria-expanded", "true");
    }
  },
};
