import Template from "../../components/card_no_action/html/component.hbs";
import { storyParams, iconSpritePath } from "../../../.storybook/globals";
import ToowoombaImage from "./Toowoomba-web.jpeg";
import { initComponents } from "../../../.storybook/decorators";
import initCards from "../../components/card_no_action/js/global";

const mockSite = {
  metadata: { coreSiteIcons: { value: iconSpritePath } },
};

function makeChild(
  id,
  name,
  description = "",
  icon = "",
  iconFa = "fal fa-heart",
  footerContent = "",
) {
  return {
    assetid: String(id),
    type_code: "page_standard",
    name,
    thumbnail: "https://placehold.co/782x440",
    metadata: {
      shortDescription: { value: description },
      card_icon: { value: icon },
      cardIcon: { value: iconFa },
      cardDisplayFooter: { value: footerContent ? "true" : "false" },
      cardFooterContent: { value: footerContent },
    },
  };
}

const sampleChildren = [
  makeChild(
    1,
    "Card one",
    "Brief description of this card and what it links to.",
    "upload",
  ),
  makeChild(
    2,
    "Card two",
    "Brief description of this card and what it links to.",
    "bolt",
    "fal fa-stethoscope",
  ),
  makeChild(
    3,
    "Card three",
    "Brief description of this card and what it links to.",
    "download",
    "fal fa-download",
  ),
];
const sampleChildrenFa = [
  makeChild(
    1,
    "Card one",
    "Brief description of this card and what it links to.",
    "",
  ),
  makeChild(
    2,
    "Card two",
    "Brief description of this card and what it links to.",
    "",
    "fal fa-stethoscope",
  ),
  makeChild(
    3,
    "Card three",
    "Brief description of this card and what it links to.",
    "",
    "fal fa-hospital",
  ),
];
const sampleChildrenFour = [
  makeChild(
    1,
    "Card one",
    "Brief description of this card and what it links to.",
    "",
    "",
  ),
  makeChild(
    2,
    "Card two",
    "Brief description of this card and what it links to.",
    "",
    "",
  ),
  makeChild(
    3,
    "Card three",
    "Brief description of this card and what it links to.",
    "",
    "",
  ),
  makeChild(
    4,
    "Card four",
    "Brief description of this card and what it links to.",
    "",
    "",
  ),
];

function buildData(args) {
  return {
    component: {
      data: {
        assetid: "123",
        metadata: {
          body_background: { value: args.bodyBackground },
          body_background_type: { value: "qld__card--wrapper-bg-colour" },
          body_background_image: { value: "" },
          body_background_pattern: { value: "" },
          col_width: { value: args.colWidth },
          card_type: { value: args.cardType },
          card_background: { value: args.cardBackground },
          card_heading_level: { value: "h3" },
          icon_align: { value: args.iconAlign },
          intro_heading: { value: args.introHeading },
          intro_heading_level: { value: "h2" },
          intro_body: { value: "" },
          intro_width: { value: "col-md-6" },
          all_link: { value: args.showViewAll ? "999" : "" },
          all_link_name: { value: "View all" },
          id_field: { value: "" },
        },
      },
      children: args.children,
      childrenThumbnails: args.children.map(() => ({
        asset_thumbnail_alt: "",
      })),
    },
    site: mockSite,
  };
}

function render(args) {
  const container = document.createElement("div");
  // Render inside #content so the design system's section padding applies
  // to the body background (it only targets `#content .qld__body` / `form`).
  container.id = "content";
  container.innerHTML = Template(buildData(args));
  // Image slots only render for image-type cards, so always swap in the bundled
  // image — this avoids a missing image if the source URL fails to load.
  container
    .querySelectorAll(".qld__responsive-media-img--bg")
    .forEach((img) => {
      img.style.backgroundImage = `url(${ToowoombaImage})`;
    });
  return container;
}

const meta = {
  title: "3. Components/Cards/Card No Action",
  render,
  decorators: [initComponents([initCards])],
  argTypes: {
    cardType: {
      description: "Display style for each card.",
      control: { type: "radio" },
      options: ["text", "icon", "image"],
    },
    colWidth: {
      description: "Column width per card.",
      control: {
        type: "select",
        labels: {
          "col-xs-12": "One column",
          "col-md-6 col-lg-6": "Two columns",
          "col-md-6 col-lg-4": "Three columns",
          "col-md-6 col-lg-3": "Four columns",
        },
      },
      options: [
        "col-xs-12",
        "col-md-6 col-lg-6",
        "col-md-6 col-lg-4",
        "col-md-6 col-lg-3",
      ],
    },
    cardBackground: {
      description: "Card background colour.",
      control: {
        type: "select",
        labels: {
          "": "White",
          "qld__card--light": "Light",
          "qld__card--alt": "Alternate",
          "qld__card--dark": "Dark",
          "qld__card--dark-alt": "Dark Alternate",
        },
      },
      options: [
        "",
        "qld__card--light",
        "qld__card--alt",
        "qld__card--dark",
        "qld__card--dark-alt",
      ],
    },
    bodyBackground: {
      description: "Background colour of the section behind the cards.",
      control: {
        type: "select",
        labels: {
          "": "White",
          "qld__body--light": "Light",
          "qld__body--alt": "Alternate",
          "qld__body--dark": "Dark",
          "qld__body--dark-alt": "Dark Alternate",
        },
      },
      options: [
        "",
        "qld__body--light",
        "qld__body--alt",
        "qld__body--dark",
        "qld__body--dark-alt",
      ],
    },
    iconAlign: {
      description: "Alignment of the icon (when card type is icon).",
      control: {
        type: "radio",
        labels: { "": "Stacked", left: "Leading" },
      },
      options: ["", "left"],
    },
    introHeading: {
      description: "Optional section heading above the cards.",
      control: { type: "text" },
    },
    showViewAll: {
      description: "Show a 'View all' link below the cards.",
      control: { type: "boolean" },
    },
  },
  args: {
    cardType: "text",
    colWidth: "col-md-6 col-lg-4",
    cardBackground: "",
    bodyBackground: "",
    iconAlign: "",
    introHeading: "",
    showViewAll: false,
    children: sampleChildren,
  },
  parameters: storyParams("card"),
};

export default meta;

export const Default = {};

export const StackedIcon = {
  args: { cardType: "icon", iconAlign: "" },
};
export const StackedIconFa = {
  args: { cardType: "icon", iconAlign: "", children: sampleChildrenFa },
};

export const LeadingIcon = {
  args: { cardType: "icon", iconAlign: "left" },
};
export const LeadingIconFa = {
  args: { cardType: "icon", iconAlign: "left", children: sampleChildrenFa },
};

export const WithImages = {
  args: { cardType: "image" },
};

export const TwoColumns = {
  args: { colWidth: "col-md-6 col-lg-6", children: sampleChildrenFour },
};

export const FourColumns = {
  args: {
    colWidth: "col-md-6 col-lg-3",
    children: sampleChildrenFour,
  },
};

export const WithSectionHeading = {
  args: { introHeading: "Related services" },
};

export const AlternateBackground = {
  args: { bodyBackground: "qld__body--alt", cardBackground: "qld__card--alt" },
};

export const DarkBackground = {
  args: {
    bodyBackground: "qld__body--dark",
    cardBackground: "qld__card--dark",
  },
};

export const WithFooter = {
  args: {
    children: [
      makeChild(
        1,
        "Card one",
        "Brief description.",
        "",
        "",
        "<p>Footer content</p>",
      ),
      makeChild(
        2,
        "Card two",
        "Brief description.",
        "",
        "",
        "<p>Footer content</p>",
      ),
      makeChild(
        3,
        "Card three",
        "Brief description.",
        "",
        "",
        "<p>Footer content</p>",
      ),
    ],
  },
};
