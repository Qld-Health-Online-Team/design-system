import Template from "../../components/basic_search/html/component.hbs";
import { iconSpritePath } from "../../../.storybook/globals";
import manifest from "../../components/basic_search/js/manifest.json";
import initBasicSearch from "../../components/basic_search/js/global.js";
import { initComponents } from "../../../.storybook/decorators";

// Realistic search payload (results, summary, spell suggestion, pagination)
// shipped with the component manifest — reused so the stories stay in sync with
// the canonical fixture rather than duplicating a large mock.
const { resultsPage } = manifest.component;

// Breadcrumb trail. Matches the asset shape the banner markup expects
// (itemAt -2 for the mobile/tablet "back" link, the full list for desktop).
const mockLineage = [
  {
    asset_url: "#",
    asset_short_name: "Home",
    asset_type_code: "page",
    asset_is_site_asset: "1",
  },
  {
    asset_url: "#",
    asset_short_name: "Services",
    asset_type_code: "page",
    asset_is_site_asset: "0",
  },
  {
    asset_url: "#",
    asset_short_name: "Search",
    asset_type_code: "page",
    asset_is_site_asset: "0",
  },
];

const mockSite = (bannerColour) => ({
  metadata: {
    coreSiteIcons: { value: iconSpritePath },
    extendedSiteIcons: { value: iconSpritePath },
    siteSearchUrl: { value: "#" },
    sfHomeUrl: { value: "#" },
    sfFacilitiesUrl: { value: "#" },
    defaultBannerColour: { value: bannerColour },
    defaultBannerType: { value: "colour" },
    defaultBannerTexture: { value: "" },
  },
});

// The empty-state branch renders when nothing matched: zero summary counts and
// an empty results list, keeping the spell suggestion for the "did you mean" hint.
const noResults = {
  ...resultsPage,
  results: [],
  resultsSummary: {
    ...resultsPage.resultsSummary,
    totalMatching: 0,
    currStart: 0,
    currEnd: 0,
  },
};

function render(args) {
  const page = args.hasResults ? resultsPage : noResults;

  return `<main>${Template({
    component: { data: { assetid: "123" } },
    current: {
      data: {
        metadata: {
          displayBreadcrumbs: {
            value: args.showBreadcrumbs ? "true" : "false",
          },
        },
      },
      lineage: args.showBreadcrumbs ? mockLineage : [],
    },
    metadata: { abstract: { value: args.abstract } },
    site: mockSite(args.bannerColour),
    resultsPage: { ...page, question: { ...page.question, query: args.query } },
  })}</main>`;
}

export default {
  title: "4. Templates/Basic Search",
  render,
  decorators: [initComponents([initBasicSearch])],
  argTypes: {
    query: {
      control: "text",
      description:
        "The search term, echoed in the banner field and results heading.",
    },
    abstract: {
      control: "text",
      description:
        "Optional intro text shown beneath the banner heading. Leave empty to omit.",
    },
    bannerColour: {
      control: {
        type: "select",
        labels: {
          "": "White (default)",
          light: "Light",
          alternate: "Alternate",
          dark: "Dark",
          "dark-alternate": "Dark Alternate",
        },
      },
      options: ["", "light", "alternate", "dark", "dark-alternate"],
      description: "Background colour theme of the search banner.",
    },
    showBreadcrumbs: {
      control: "boolean",
      description: "Display breadcrumb navigation in the banner.",
    },
    hasResults: {
      control: "boolean",
      description:
        "Toggle between the results list and the empty 'no results' state.",
    },
  },
  args: {
    query: "how does breast screening work",
    abstract: "",
    bannerColour: "",
    showBreadcrumbs: true,
    hasResults: true,
  },
  // No QLD Design System / Figma resource links published for this template yet,
  // so the shared storyParams() Resources block is intentionally omitted.
  parameters: {
    layout: "fullscreen",
    docs: { toc: true, codePanel: true },
  },
};

export const Default = {};

export const WithoutBreadcrumbs = {
  args: { showBreadcrumbs: false },
};

export const LightBanner = {
  args: { bannerColour: "light" },
};

export const AlternateBanner = {
  args: { bannerColour: "alternate" },
};

export const DarkBanner = {
  args: { bannerColour: "dark" },
};

export const DarkAlternateBanner = {
  args: { bannerColour: "dark-alternate" },
};

export const NoResults = {
  args: { hasResults: false },
};
