// The contained (curved) banner is a page-level *layout*, not a standalone
// component. It is switched on by adding the `qld__banner_contained` class to
// the page body, which then restyles the header, main navigation and banner
// together — constraining their width, adding curved edges + drop shadows and
// filling the negative space with a background colour. The effect only applies
// above 1600px, so these stories force a wide viewport.
//
// Unlike most component stories, the contained styles live in their own webpack
// entry (src/styles/banner_contained/globals.scss → dist/banner_contained.css)
// and are NOT part of the Storybook bundle, so we import them explicitly here.
import "../../styles/banner_contained/globals.scss";

import { renderHeader, headerArgs } from "../Header/Header.js";
import BannerAdvancedMeta from "./bannerAdvanced.stories";
import { storyParams } from "../../../.storybook/globals";
import { initComponents } from "../../../.storybook/decorators";
import initBannerAdvanced from "../../components/banner_advanced/js/global";
import initCtaLinks from "../../components/_global/js/cta_links/global";
import { initMegaMenu } from "../../components/mega_main_navigation/js/global";

// The curved styling activates at 1600px, so demonstrate at an extra-large width.
const containedViewport = {
  name: "Contained banner (1680px)",
  styles: { width: "1680px", height: "1200px" },
};

function render(args) {
  // The whole page carries the `qld__banner_contained` body class — that is the
  // hook every selector in banner_contained/globals.scss keys off.
  const page = document.createElement("div");
  page.className = "qld__banner_contained qld__body qld__grid js";

  // Header + main navigation. renderHeader also emits the
  // `.qld__header__contained-banner` backdrop when the contained class is set.
  page.innerHTML = renderHeader({
    ...args,
    defaultBannerContainedBanner: "qld__banner_contained",
  });

  // The banner itself, reusing the Advanced banner (heading block, abstract,
  // CTA buttons and hero image — matching the contained banner design).
  const bannerEl = BannerAdvancedMeta.render(args);

  const main = document.createElement("main");
  main.className = "content";
  main.appendChild(bannerEl);

  // A little page content so the constrained/curved layout has context below
  // the banner.
  const content = document.createElement("div");
  content.id = "content";
  content.innerHTML = `
    <section class="qld__body qld__body--breadcrumb">
      <div class="container-fluid">
        <h2>Section Heading</h2>
        <p>${
          "The contained banner style is applied globally across a whole site " +
          "and is not intended to be used on stand-alone pages. It only appears " +
          "on screen sizes above 1600px."
        }</p>
      </div>
    </section>
  `;
  main.appendChild(content);
  page.appendChild(main);

  return page;
}

const meta = {
  title: "3. Components/Banner/Contained",
  render,
  decorators: [
    initComponents([initMegaMenu, initCtaLinks, initBannerAdvanced]),
  ],
  // Reuse the Header and Advanced banner controls so the composed page is fully
  // configurable, then narrow the notable ones below.
  argTypes: {
    ...BannerAdvancedMeta.argTypes,
  },
  args: {
    ...headerArgs,
    ...BannerAdvancedMeta.args,
    // Match the screenshot: hero image aligned to the page edge, breadcrumbs on.
    headingPrimary: "Heading 1 Heading 1",
    headingSecondary: "Subheading heading 1",
    showHeadingBackground: true,
    backgroundColour: "",
    showBreadcrumbs: true,
    heroImageAlignment: "page",
    heroImageTreatment: "crop",
  },
  parameters: {
    layout: "fullscreen",
    viewport: {
      defaultViewport: "containedBanner",
      options: { containedBanner: containedViewport },
    },
    ...storyParams(
      "banner",
      "The **contained banner** is a page-level layout enabled by adding the " +
        "`qld__banner_contained` class to the `<body>` element. It constrains " +
        "the header, navigation and banner to a maximum width and applies curved " +
        "edges and drop shadows. It only takes effect on viewports above 1600px.",
    ),
  },
};

export default meta;

export const Default = {};

// A plain colour background instead of a hero image.
export const WithoutHeroImage = {
  args: {
    heroImage: "",
    backgroundColour: "dark",
  },
};
