import { initComponents } from "../../../.storybook/decorators";
import { initMegaMenu } from "../../components/mega_main_navigation/js/global";
import initCtaLinks from "../../components/_global/js/cta_links/global";
import initCards from "../../components/card_no_action/js/global";
import initBannerAdvanced from "../../components/banner_advanced/js/global";
import CardSingleActionMeta from "../Cards/CardSingleAction.stories.js";
import ToowoombaImage from "../Cards/Toowoomba-web.jpeg";
import {
  renderSiteHeader,
  renderSiteFooter,
  renderPrefooter,
  renderAdvancedBanner,
  icon,
} from "./templateHelpers.js";

// "Our facilities": a feature card (image on the right) beside a link list of
// related facilities. The card mirrors the card_feature component's markup so it
// sits cleanly in a grid column, with contact links in its footer.
const facilitiesSection = () => {
  const contact = (iconName, text, href) =>
    `<li><a class="qld__card__footer-link" href="${href}">${icon(iconName, "qld__card__footer-link-icon")}<span>${text}</span></a></li>`;

  const facilityLink = (text) => `<li><a href="#">${text}</a></li>`;

  return `
    <section class="qld__body">
      <div class="container-fluid">
        <h2>Our facilities</h2>
        <div class="row">
          <div class="col-xs-12 col-lg-8">
            <div class="qld__card qld__card__multi-action qld__card--image qld__card__multi-action--feature qld__card__multi-action--image-right">
              <div class="qld__card__image-wrapper">
                <div
                  class="qld__responsive-media-img--bg"
                  style="background-image: url('${ToowoombaImage}');"
                  role="img"
                  aria-label="Toowoomba Hospital"
                ></div>
              </div>
              <div class="qld__card__inner">
                <div class="qld__card__content">
                  <div class="qld__card__content-inner">
                    <h3 class="qld__card__title">
                      <a class="qld__card--clickable__link" href="#">Toowoomba Hospital</a>
                    </h3>
                    <p class="qld__card__description">Address: Pechey St, Toowoomba QLD 4350</p>
                  </div>
                </div>
                <div class="qld__card__footer">
                  <hr class="qld__horizontal-rule" aria-hidden="true" />
                  <div class="qld__card__footer-inner">
                    <ul class="qld__link-list">
                      ${contact("phone", "Phone 07 4616 6000", "tel:0746166000")}
                      ${contact("alert-warning", "For emergencies call 000", "tel:000")}
                      ${contact("phone", "For non-urgent health advice call 13 HEALTH (13 43 25 84)", "tel:134325")}
                    </ul>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div class="col-xs-12 col-lg-4">
            <h3>Hospitals and health centres</h3>
            <ul aria-label="Hospitals and health centres" class="qld__link-columns">
              ${facilityLink("Baillie Henderson Hospital")}
              ${facilityLink("Warwick Hospital")}
              ${facilityLink("Kingaroy Hospital")}
              ${facilityLink("Dalby Hospital")}
              <li class="qld__link-columns__all-link">
                <a href="#" class="qld__cta-link qld__cta-link--view-all">All hospitals and facilities</a>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </section>
  `;
};

// "Our services": a grid of icon cards. Reuses the Card (single action) story so
// the grid stays in sync with the component; only the section content differs.
const serviceCard = (id, name, iconName) => ({
  assetid: String(id),
  type_code: "page_standard",
  name,
  metadata: {
    shortDescription: { value: "" },
    cardIcon: { value: iconName },
    redirect_url: { value: "#" },
    cardDisplayFooter: { value: "false" },
    cardFooterContent: { value: "" },
  },
});

const servicesSection = () => {
  const result = CardSingleActionMeta.render({
    ...CardSingleActionMeta.args,
    cardType: "icon",
    iconAlign: "",
    colWidth: "col-md-6 col-lg-4",
    showArrow: false,
    showViewAll: true,
    introHeading: "Our services",
    bodyBackground: "qld__body--light",
    // Card icons render through `iconSwitch` as Material Symbols ligatures
    // (the font is loaded in .storybook/preview-head.html), so these are
    // Material Symbols Rounded names.
    children: [
      serviceCard(1, "Community health", "groups"),
      serviceCard(2, "Sexual health", "favorite"),
      serviceCard(3, "Dental", "dentistry"),
      serviceCard(4, "Maternity", "pregnant_woman"),
      serviceCard(5, "Mental health", "psychology"),
      serviceCard(6, "Emergency", "emergency"),
    ],
  });
  return typeof result === "string" ? result : result.innerHTML;
};

/**
 * A full landing page: header + mega main nav, an advanced hero banner (with a
 * link list and image), an "Our facilities" section (feature card + link list)
 * and an "Our services" grid of cards, then the pre-footer and footer.
 */
function renderLandingPage(args) {
  const { site } = args;

  return `
    ${renderSiteHeader(site)}
    <main class="main landing" role="main">
      ${renderAdvancedBanner({
        headingPrimary: "Darling Downs Health",
        showHeadingBackground: true,
        abstract:
          "Hospitals, health services and support for the Darling Downs and South West communities.",
        backgroundColour: "dark",
        backgroundType: "colour",
        showBreadcrumbs: true,
        heroImage: "https://placehold.co/782x520",
        heroImageAlt: "Toowoomba Hospital",
        heroImageTreatment: "crop",
        heroImageAlignment: "grid",
        ctaType: "link-list",
      })}
      ${facilitiesSection()}
      ${servicesSection()}
      ${renderPrefooter(site, { pageType: "landing" })}
    </main>
    ${renderSiteFooter(site)}
  `;
}

export default {
  title: "4. Templates/Landing page",
  render: renderLandingPage,
  parameters: {
    layout: "fullscreen",
    docs: {
      description: {
        component:
          "A representative landing page assembled from the design system's " +
          "layout and component stories: header with the horizontal mega " +
          "navigation, an advanced hero banner with a link list, an 'Our " +
          "facilities' section pairing a feature card with a link list, an " +
          "'Our services' grid of cards, then the pre-footer and footer.",
      },
    },
  },
  decorators: [
    initComponents([initMegaMenu, initCtaLinks, initCards, initBannerAdvanced]),
  ],
  argTypes: {
    site: { table: { disable: true } },
  },
};

export const Default = {};
