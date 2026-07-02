// Shared building blocks for the page-template demo stories.
//
// These templates don't introduce any new markup of their own — they stitch
// together the existing component stories so the demos stay in sync with the
// components they showcase. Each helper calls the relevant story's own `render`
// (exported as `meta.render`) with that story's default args, letting callers
// override only what a page needs. This is the same approach Header.js uses to
// embed the mega nav.

import { renderHeader, headerArgs } from "../Header/Header.js";
import FooterMeta from "../Footer/Footer.stories.js";
import PrefooterMeta from "../Prefooter/Prefooter.stories.js";
import BannerBasicMeta from "../Banner/bannerBasic.stories.js";
import BannerAdvancedMeta from "../Banner/bannerAdvanced.stories.js";
import SideNavMeta from "../Navigation/InternalNavigation/InternalNavigation.stories.js";
import InPageNavMeta from "../Navigation/InPageNavigation/InPageNavigation.stories.js";
import { dummyText, iconSpritePath } from "../../../.storybook/globals";

/** An inline SVG icon referencing the shared sprite (as `iconSwitch` produces). */
export const icon = (name, extraClass = "") =>
  `<svg class="qld__icon ${extraClass}" aria-hidden="true" xmlns="http://www.w3.org/2000/svg"><use href="${iconSpritePath}#${name}"></use></svg>`;

/** Header chrome (pre-header, logo, search) plus the horizontal mega nav. */
export const renderSiteHeader = (site) => renderHeader({ ...headerArgs, site });

/** Footer. `site` carries the shared `coreSiteIcons` metadata the SVGs need. */
export const renderSiteFooter = (site) =>
  FooterMeta.render({ ...FooterMeta.args, site });

/** Pre-footer ("Last updated" + "Back to top"). */
export const renderPrefooter = (site, overrides = {}) =>
  PrefooterMeta.render({ ...PrefooterMeta.args, site, ...overrides });

/**
 * Page banner. The basic banner story renders into a detached container (so it
 * can swap in the bundled texture image), so unwrap it to a markup string.
 */
export const renderBanner = (overrides = {}) => {
  const result = BannerBasicMeta.render({
    ...BannerBasicMeta.args,
    ...overrides,
  });
  return typeof result === "string" ? result : result.innerHTML;
};

/**
 * Advanced banner (hero image + a link-list, icon-tile or button CTA). Like the
 * basic banner it renders into a detached container so it can swap in a bundled
 * hero image, so unwrap it to a markup string.
 */
export const renderAdvancedBanner = (overrides = {}) => {
  const result = BannerAdvancedMeta.render({
    ...BannerAdvancedMeta.args,
    ...overrides,
  });
  return typeof result === "string" ? result : result.innerHTML;
};

/** Side (internal) navigation for the current section. */
export const renderSideNav = (overrides = {}) =>
  SideNavMeta.render({ ...SideNavMeta.args, ...overrides });

/** "On this page" in-page navigation. It scans `#content` for headings at run time. */
export const renderInPageNav = (overrides = {}) =>
  InPageNavMeta.render({ ...InPageNavMeta.args, ...overrides });

/**
 * A block of representative page copy: a handful of `h2` sections (each with a
 * short `h3` sub-section) so the in-page nav has real anchors to list.
 */
export const contentBody = () => {
  const section = (heading, sub) => `
    <h2>${heading}</h2>
    <p>${dummyText}</p>
    <p>${dummyText}</p>
    <h3>${sub}</h3>
    <p>${dummyText}</p>
  `;

  return [
    section("Overview", "Who this is for"),
    section("Eligibility", "What you need"),
    section("How to apply", "Step by step"),
    section("After you apply", "What happens next"),
  ].join("");
};
