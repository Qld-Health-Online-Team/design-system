import Template from "../../components/card_multi_action/html/component.hbs";
import {
  storyParams,
  iconSpritePath,
  printParams,
} from "../../../.storybook/globals";
import ToowoombaImage from "./Toowoomba-web.jpeg";
import { expect } from "storybook/test";
import { withPrintMedia } from "../../../.storybook/helper-functions";
import { initComponents } from "../../../.storybook/decorators";
import initCtaLinks from "../../components/_global/js/cta_links/global";
import initCards from "../../components/card_no_action/js/global";

const mockSite = {
  metadata: { coreSiteIcons: { value: iconSpritePath } },
};

// `url` is the card title's destination. It defaults to an in-page anchor, which
// is what most stories want — but note that print only appends a link's URL for
// schemes a reader can act on, so a card needs a real absolute URL before any of
// the print rules around the appended href do anything at all.
function makeChild(
  id,
  name,
  description = "",
  icon = "eda",
  ctas = [],
  url = "#",
) {
  return {
    assetid: String(id),
    type_code: "page_standard",
    name,
    thumbnail: "https://placehold.co/782x440",
    metadata: {
      shortDescription: { value: description },
      cardIcon: { value: icon },
      redirect_url: { value: url },
      cardDisplayFooter: { value: ctas.length ? "true" : "false" },
      cardCta1Url: { value: ctas[0]?.url ?? "" },
      cardCta1Text: { value: ctas[0]?.text ?? "" },
      cardCta1Icon: { value: ctas[0]?.icon ?? "" },
      cardCta2Url: { value: ctas[1]?.url ?? "" },
      cardCta2Text: { value: ctas[1]?.text ?? "" },
      cardCta2Icon: { value: ctas[1]?.icon ?? "" },
      cardCta3Url: { value: ctas[2]?.url ?? "" },
      cardCta3Text: { value: ctas[2]?.text ?? "" },
      cardCta3Icon: { value: ctas[2]?.icon ?? "" },
    },
  };
}

const twoCtas = [
  { url: "1", text: "Call us", icon: "phone_enabled" },
  { url: "2", text: "Email us", icon: "mail" },
];
const twoCtasFa = [
  { url: "1", text: "Call us", icon: "fal fa-phone" },
  { url: "2", text: "Email us", icon: "fal fa-envelope" },
];

const threeCtas = [
  { url: "1", text: "Call us", icon: "phone_enabled" },
  { url: "2", text: "Email us", icon: "mail" },
  {
    url: "3",
    text: "Book online",
    icon: "calendar_today",
  },
];
const threeCtasFa = [
  { url: "1", text: "Call us", icon: "fal fa-phone" },
  { url: "2", text: "Email us", icon: "fal fa-envelope" },
  { url: "3", text: "Book online", icon: "fal fa-calendar" },
];

const sampleChildren = [
  makeChild(
    1,
    "Card one",
    "Brief description of this card and what it links to.",
    "monitoring",
    twoCtas,
  ),
  makeChild(
    2,
    "Card two",
    "Brief description of this card and what it links to.",
    "pediatrics",
    twoCtas,
  ),
  makeChild(
    3,
    "Card three",
    "Brief description of this card and what it links to.",
    "eda",
    twoCtas,
  ),
];
const sampleChildrenFa = [
  makeChild(
    1,
    "Card one",
    "Brief description of this card and what it links to.",
    "fal fa-heart",
    twoCtasFa,
  ),
  makeChild(
    2,
    "Card two",
    "Brief description of this card and what it links to.",
    "fal fa-stethoscope",
    twoCtasFa,
  ),
  makeChild(
    3,
    "Card three",
    "Brief description of this card and what it links to.",
    "fal fa-hospital",
    twoCtasFa,
  ),
];

// Absolute destinations, which is the only kind print appends to the link text.
// The third is a real Matrix asset URL: long, and its filename is one unbroken
// token. That matters — a URL with hyphens has break opportunities the browser
// takes on its own, so it would wrap with or without the card's print rules and
// prove nothing. This one overflows the card by ~550px without them.
const sampleChildrenAbsolute = [
  makeChild(
    1,
    "Short link",
    "Brief description of this card and what it links to.",
    "monitoring",
    twoCtas,
    "https://www.qld.gov.au/health",
  ),
  makeChild(
    2,
    "Email link",
    "Brief description of this card and what it links to.",
    "pediatrics",
    twoCtas,
    "mailto:enquiries@health.qld.gov.au",
  ),
  makeChild(
    3,
    "Long link",
    "Brief description of this card and what it links to.",
    "eda",
    twoCtas,
    "https://www.health.qld.gov.au/__data/assets/pdf_file/0026/1156463/outpatientreferralguidelines.pdf",
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
          background: { value: args.cardBackground },
          card_heading_level: { value: "h3" },
          cardIcon: { value: args.cardIcon },
          icon_align: { value: args.iconAlign },
          show_arrow: { value: args.showArrow ? "true" : "false" },
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
        // Empty means decorative: the getThumbnailAlt helper emits nothing, so
        // the image div carries no role/aria-label. Print keys off exactly this.
        asset_thumbnail_alt: args.thumbnailAlt ?? "",
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
  title: "3. Components/Cards/Card Multi Action",
  render,
  decorators: [initComponents([initCtaLinks, initCards])],
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
    showArrow: {
      description: "Show directional arrow on each card.",
      control: { type: "boolean" },
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
    thumbnailAlt: {
      description:
        "Alt text for each card thumbnail (image card type). Empty means the image is decorative, which drops it from print.",
      control: { type: "text" },
    },
  },
  args: {
    cardType: "text",
    thumbnailAlt: "",
    colWidth: "col-md-6 col-lg-4",
    showArrow: true,
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
  args: { colWidth: "col-md-6 col-lg-6" },
};

export const WithSectionHeading = {
  args: { introHeading: "Related services", showViewAll: true },
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

export const ThreeFooterLinks = {
  args: {
    children: [
      makeChild(1, "Card one", "Brief description.", "monitoring", threeCtas),
      makeChild(2, "Card two", "Brief description.", "pediatrics", threeCtas),
      makeChild(3, "Card three", "Brief description.", "eda", threeCtas),
    ],
  },
};

export const ThreeFooterLinksFa = {
  args: {
    children: [
      makeChild(
        1,
        "Card one",
        "Brief description.",
        "fal fa-heart",
        threeCtasFa,
      ),
      makeChild(
        2,
        "Card two",
        "Brief description.",
        "fal fa-stethoscope",
        threeCtasFa,
      ),
      makeChild(
        3,
        "Card three",
        "Brief description.",
        "fal fa-hospital",
        threeCtasFa,
      ),
    ],
  },
};

/**
 * Print rendering of cards whose titles link somewhere absolute — the only case
 * where print appends the destination after the link text, and so the only case
 * that exercises any of the card's print rules.
 *
 * Three things have to hold at once, and each was separately broken:
 *
 * 1. The appended URL flows inline after the title. Clickable cards stretch the
 *    title link's `::after` across the whole card as a hit area, and print reuses
 *    that same pseudo-element for the URL — so without a reset it renders as an
 *    overlay rather than as text.
 * 2. The card stops clipping. `.qld__card` sets `overflow: hidden` so the image
 *    can bleed to the rounded corners, which swallowed the appended URL whole.
 * 3. The URL wraps. It has no spaces to break at, so without a break rule it
 *    pushes past the card's edge. That one is handled on screen already by
 *    `.qld__card__content { word-break: break-word }` — asserted here because
 *    print is where losing it would do visible damage, and nothing else says
 *    that rule is load-bearing for print.
 */
export const Print = {
  args: { children: sampleChildrenAbsolute },
  parameters: printParams(
    "the appended href flowing inline after the card title, unclipped and wrapped rather than overflowing the card",
  ),
  play: async ({ canvasElement }) => {
    const card = canvasElement.querySelector(".qld__card");
    const link = canvasElement.querySelector(".qld__card--clickable__link");
    await expect(card).toBeTruthy();
    await expect(link).toBeTruthy();

    // The long URL is the one worth measuring — a short one fits either way and
    // would pass even with the wrapping rule removed.
    const longCard = [...canvasElement.querySelectorAll(".qld__card")].find(
      (el) => el.textContent.includes("Long link"),
    );
    await expect(longCard).toBeTruthy();
    const longLink = longCard.querySelector(".qld__card--clickable__link");

    withPrintMedia(() => {
      const appended = getComputedStyle(link, "::after");

      // 1. Inline text, not the stretched hit-area overlay.
      expect(appended.content).toContain("https://www.qld.gov.au/health");
      expect(appended.position).toBe("static");

      // 2. Nothing clipped away by the card.
      expect(getComputedStyle(card).overflow).toBe("visible");

      // 3. Wrapped, not overflowing. The link is inline, so its line boxes are
      //    what show this — not scrollWidth. The title block has `overflow:
      //    visible` and is not a scroll container, so overflowing inline content
      //    never registers there and a scrollWidth check passes while broken.
      const rightmostLine = Math.max(
        ...[...longLink.getClientRects()].map((rect) => rect.right),
      );
      expect(rightmostLine).toBeLessThanOrEqual(
        longCard.getBoundingClientRect().right,
      );
    });
  },
};

/**
 * Print rendering of image cards whose thumbnails have no alt text. A card
 * thumbnail is a CSS background on a div, so its alt text arrives as
 * `role="img"` + `aria-label`; the helper emits neither when the asset has no alt
 * text. No alt text means decorative, and a decorative thumbnail is not worth the
 * toner — the cards should print as text only.
 */
export const PrintDecorativeImages = {
  args: { cardType: "image", thumbnailAlt: "" },
  parameters: printParams(
    "that card thumbnails without alt text are dropped from print",
  ),
  // The print rule selects on `:not([role="img"])`, so it is only correct while
  // the helper leaves the attribute off for an asset with no alt text. If that
  // ever changes, meaningful images start disappearing from print silently —
  // assert the hook rather than trusting it.
  play: async ({ canvasElement }) => {
    const images = canvasElement.querySelectorAll(
      ".qld__responsive-media-img--bg",
    );
    await expect(images.length).toBeGreaterThan(0);
    images.forEach((image) => {
      expect(image).not.toHaveAttribute("role");
    });
  },
};

/**
 * The other half of the pair: the same image cards with alt text on every
 * thumbnail. Alt text means the image is carrying meaning, so it has to survive
 * both the decorative-image rule and the browser's default of dropping
 * background images.
 */
export const PrintImagesWithAltText = {
  args: {
    cardType: "image",
    thumbnailAlt: "Aerial view of Toowoomba at dusk",
  },
  parameters: printParams("that card thumbnails with alt text still print"),
  play: async ({ canvasElement }) => {
    const images = canvasElement.querySelectorAll(
      ".qld__responsive-media-img--bg",
    );
    await expect(images.length).toBeGreaterThan(0);
    images.forEach((image) => {
      expect(image).toHaveAttribute("role", "img");
      expect(image).toHaveAttribute(
        "aria-label",
        "Aerial view of Toowoomba at dusk",
      );
    });
  },
};
