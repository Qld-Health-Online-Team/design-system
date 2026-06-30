import Template from "../../components/banner/html/component.hbs";
import { storyParams } from "../../../.storybook/globals";

const mockLineage = [
  {
    asset_url: "#",
    asset_short_name: "Home",
    asset_type_code: "page",
    asset_is_site_asset: "1",
  },
  {
    asset_url: "#",
    asset_short_name: "Section",
    asset_type_code: "page",
    asset_is_site_asset: "0",
  },
  {
    asset_url: "#",
    asset_short_name: "Current page",
    asset_type_code: "page",
    asset_is_site_asset: "0",
  },
];

function render(args) {
  const { pageTitle, bannerColour, showBreadcrumbs } = args;
  return Template({
    site: {
      metadata: {
        ...args.site.metadata,
        defaultBannerColour: { value: bannerColour },
      },
    },
    current: {
      data: {
        name: pageTitle,
        metadata: {
          displayBreadcrumbs: { value: showBreadcrumbs ? "true" : "false" },
        },
      },
      lineage: showBreadcrumbs ? mockLineage : [],
    },
    metadata: {
      breadcrumbs_display: { value: showBreadcrumbs ? "yes" : "" },
      background_colour: { value: bannerColour },
    },
  });
}

const meta = {
  title: "3. Components/Banner",
  render,
  argTypes: {
    pageTitle: {
      description: "The page title displayed in the banner.",
      control: { type: "text" },
    },
    bannerColour: {
      description: "Background colour theme of the banner.",
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
    },
    showBreadcrumbs: {
      description: "Display breadcrumb navigation in the banner.",
      control: { type: "boolean" },
    },
  },
  args: {
    pageTitle: "Default Banner",
    bannerColour: "alternate",
    showBreadcrumbs: true,
  },
  parameters: storyParams("banner"),
};

export default meta;

export const Default = {};

export const WithoutBreadcrumbs = {
  args: { showBreadcrumbs: false },
};
