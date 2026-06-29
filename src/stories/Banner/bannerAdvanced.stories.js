import Template from "../../components/banner_advanced/html/component.hbs";
import { storyParams, iconSpritePath } from "../../../.storybook/globals";
import initBannerAdvanced from "../../components/banner_advanced/js/global";
import { initComponents } from "../../../.storybook/decorators";
import ToowoombaImage from "../Cards/Toowoomba-web.jpeg";

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

const mockSite = {
  metadata: {
    coreSiteIcons: { value: iconSpritePath },
    defaultBannerTexture: { value: "" },
    defaultBannerTextureDark: { value: "" },
  },
};

const mockChildren = [
  {
    assetid: "1",
    name: "Brand",
    metadata: {
      redirect_url: { value: "#" },
      cardIcon: { value: "cancel" },
    },
  },
  {
    assetid: "2",
    name: "Content",
    metadata: {
      redirect_url: { value: "#" },
      cardIcon: { value: "eda" },
    },
  },
  {
    assetid: "3",
    name: "Components",
    metadata: {
      redirect_url: { value: "#" },
      cardIcon: { value: "ent" },
    },
  },
  {
    assetid: "4",
    name: "Contact us",
    metadata: {
      redirect_url: { value: "#" },
      cardIcon: { value: "phone_enabled" },
    },
  },
];

function buildData(args) {
  return {
    component: {
      data: {
        assetid: "123",
        background_image_alt: args.heroImageAlt,
        metadata: {
          id_field: { value: "" },
          heading_primary: { value: args.headingPrimary },
          heading_secondary: { value: args.headingSecondary },
          heading_background_display: {
            value: args.showHeadingBackground ? "yes" : "",
          },
          abstract: { value: args.abstract },
          breadcrumbs_display: { value: args.showBreadcrumbs ? "yes" : "" },
          background_colour: { value: args.backgroundColour },
          background_type: { value: args.backgroundType },
          background_image_sm: {
            value:
              args.backgroundType === "image"
                ? "/mysource_files/banner-background--mobile.png"
                : "",
          },
          background_image_lg: {
            value:
              args.backgroundType === "image"
                ? "/mysource_files/banner-background--desktop.png"
                : "",
          },
          background_image_alignment: { value: "center" },
          background_min_height: { value: "" },
          hero_image: { value: args.heroImage },
          hero_image_responsive_treatment: { value: args.heroImageTreatment },
          hero_image_padding: { value: "yes" },
          hero_image_alignment: { value: args.heroImageAlignment },
          cta_type: { value: args.ctaType },
          cta_button_primary_text: { value: args.ctaPrimaryText },
          cta_button_primary_link: { value: "#" },
          cta_button_secondary_text: { value: args.ctaSecondaryText },
          cta_button_secondary_link: { value: "#" },
          cta_link_list_card_background: { value: "" },
          cta_icon_tile_background: { value: args.ctaIconTileBackground },
          cta_icon_tiles_label: { value: args.ctaIconTilesLabel },
          root_node: { value: args.ctaType !== "buttons" ? "123" : "" },
        },
      },
      children: mockChildren,
    },
    current: {
      lineage: args.showBreadcrumbs ? mockLineage : [],
    },
    site: mockSite,
  };
}

function render(args) {
  const container = document.createElement("div");
  container.innerHTML = Template(buildData(args));

  // The template hardcodes a './?a=' hero image URL that won't resolve in
  // Storybook, so swap in the bundled image directly on the hero element.
  // (The '--background' image is the mobile background for image-type banners.)
  if (args.heroImage) {
    const hero = container.querySelector(
      ".qld__banner__image:not(.qld__banner__image--background)",
    );
    if (hero) {
      hero.style.backgroundImage = `url(${ToowoombaImage})`;
    }
  }

  return container;
}

const meta = {
  title: "3. Components/Banner/Advanced",
  render,
  decorators: [initComponents([initBannerAdvanced])],
  argTypes: {
    headingPrimary: {
      description: "Primary heading text.",
      control: { type: "text" },
    },
    headingSecondary: {
      description:
        "Secondary heading displayed alongside the primary when block background is enabled.",
      control: { type: "text" },
    },
    showHeadingBackground: {
      description: "Wraps the heading in a block background.",
      control: { type: "boolean" },
    },
    abstract: {
      description: "Short descriptive text displayed below the heading.",
      control: { type: "text" },
    },
    backgroundColour: {
      description: "Background colour theme.",
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
    backgroundType: {
      description: "How the background is filled.",
      control: { type: "radio" },
      options: ["colour", "texture", "image"],
    },
    showBreadcrumbs: {
      description: "Display breadcrumb navigation.",
      control: { type: "boolean" },
    },
    heroImage: {
      description: "URL of the hero image displayed alongside the content.",
      control: { type: "text" },
    },
    heroImageAlt: {
      description: "Alt text for the hero image.",
      control: { type: "text" },
    },
    heroImageTreatment: {
      description: "How the hero image responds at smaller breakpoints.",
      control: { type: "radio" },
      options: ["crop", "scale"],
    },
    heroImageAlignment: {
      description:
        "Aligns the hero image to the content grid or the full page edge.",
      control: { type: "radio" },
      options: ["grid", "page"],
    },
    ctaType: {
      description: "The type of call-to-action displayed below the abstract.",
      control: { type: "radio" },
      options: ["buttons", "link-list", "icon-tiles"],
    },
    ctaPrimaryText: {
      description: "Primary button label (buttons CTA only).",
      control: { type: "text" },
    },
    ctaSecondaryText: {
      description: "Secondary button label (buttons CTA only).",
      control: { type: "text" },
    },
    ctaIconTilesLabel: {
      description:
        "Accessible label for the icon tile nav (icon-tiles CTA only).",
      control: { type: "text" },
    },
    ctaIconTileBackground: {
      description: "Background colour of the icon tiles (icon-tiles CTA only).",
      control: {
        type: "select",
        labels: {
          "": "White",
          alternate: "Alternate",
          dark: "Dark",
          "dark-alternate": "Dark Alternate",
        },
      },
      options: ["", "alternate", "dark", "dark-alternate"],
    },
  },
  args: {
    headingPrimary: "Banner Advanced",
    showHeadingBackground: true,
    abstract:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
    backgroundColour: "dark",
    backgroundType: "colour",
    showBreadcrumbs: false,
    heroImage: "https://placehold.co/782x520",
    heroImageAlt: "",
    heroImageTreatment: "crop",
    heroImageAlignment: "grid",
    ctaType: "buttons",
    ctaPrimaryText: "Primary action",
    ctaSecondaryText: "Secondary action",
    ctaIconTilesLabel: "Quick links",
    ctaIconTileBackground: "dark-alternate",
  },
  parameters: storyParams("banner"),
};

export default meta;

export const Default = {
  args: {
    showBreadcrumbs: true,
  },
};

export const WithHeroImage = {
  args: {
    heroImage: "https://placehold.co/782x520",
    heroImageTreatment: "crop",
    heroImageAlignment: "grid",
  },
};

export const WithHeroImageToPage = {
  args: {
    heroImage: "https://placehold.co/782x520",
    heroImageTreatment: "crop",
    heroImageAlignment: "page",
  },
};

export const WithLinkList = {
  args: {
    ctaType: "link-list",
    heroImage: "",
  },
};

export const WithIconTiles = {
  args: {
    ctaType: "icon-tiles",
    ctaIconTilesLabel: "Services",
    heroImage: "",
  },
};
