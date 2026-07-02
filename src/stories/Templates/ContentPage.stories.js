import { initComponents } from "../../../.storybook/decorators";
import { initMegaMenu } from "../../components/mega_main_navigation/js/global";
import initCtaLinks from "../../components/_global/js/cta_links/global";
import { initAccordion } from "../../components/accordion/js/global";
import initInternalNavigation from "../../components/internal_navigation/js/global";
import initInPageNavigation from "../../components/in_page_navigation/js/global";
import {
  renderSiteHeader,
  renderSiteFooter,
  renderPrefooter,
  renderBanner,
  renderSideNav,
  renderInPageNav,
  contentBody,
} from "./templateHelpers.js";

/**
 * A full content page: header + mega main nav, a banner with breadcrumbs, a
 * side navigation beside the main content, an in-page ("On this page")
 * navigation, body copy, a pre-footer and the footer.
 */
function renderContentPage(args) {
  const { site } = args;

  return `
    ${renderSiteHeader(site)}
    <main class="main" role="main">
      ${renderBanner({
        headingPrimary: "Applying for a health card",
        abstract:
          "Everything you need to know about eligibility, the application process and what happens next.",
        backgroundColour: "dark",
        backgroundType: "texture",
        showBreadcrumbs: true,
      })}
      <div class="qld__body">
        <div class="container-fluid">
          <div class="row">
            <div class="col-xs-12 col-md-4 col-lg-3">
              ${renderSideNav()}
            </div>
            <div class="col-xs-12 col-md-8 col-lg-9" id="content">
              ${renderInPageNav()}
              ${contentBody()}
            </div>
          </div>
        </div>
      </div>
      ${renderPrefooter(site, { pageType: "content" })}
    </main>
    ${renderSiteFooter(site)}
  `;
}

export default {
  title: "4. Templates/Content page",
  render: renderContentPage,
  parameters: {
    layout: "fullscreen",
    docs: {
      description: {
        component:
          "A representative content page assembled from the design system's " +
          "layout and component stories: header with the horizontal mega " +
          "navigation, a banner carrying breadcrumbs, a side navigation, the " +
          "main content column with an in-page navigation and body copy, then " +
          "the pre-footer and footer.",
      },
    },
  },
  // All the interactive chrome a content page needs: the mega menu and its CTA
  // links, the side nav (an accordion below its breakpoint), and the in-page
  // navigation that builds its list from the headings inside `#content`.
  decorators: [
    initComponents([
      initMegaMenu,
      initCtaLinks,
      initAccordion,
      initInternalNavigation,
      initInPageNavigation,
    ]),
  ],
  // The page supplies its own full-width layout, so opt out of controls that
  // don't apply to a whole-page composition.
  argTypes: {
    site: { table: { disable: true } },
  },
};

export const Default = {};
