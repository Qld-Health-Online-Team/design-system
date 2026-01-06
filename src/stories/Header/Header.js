import Handlebars from "handlebars";
import Template from "../../components/header/html/component.hbs?raw";

/**
 * Default args for the header
 */
export const headerArgs = {
    defaultBannerContainedBanner: "no",
    imageContainedLayoutBackground:
        "https://www.qld.gov.au/__data/assets/image/0022/69524/background-queensland-800x600.jpg",
    containedBannerImageTexturePosition: "top left",
    containedBannerImageTextureSize: "auto",
    containedBannerImageTextureRepeat: "no-repeat",
    sitePreHeaderTheme: "qld__header__pre-header--dark",
    sitePreHeaderURL: "https://www.qld.gov.au",
    sitePreHeaderText: "Queensland Government",
    sitePreHeaderLogo:
        "https://qhonline.com.au/__data/assets/file/0020/71516/header-logo-qgov-light.svg",
    mainNavCtaOne: "https://qhonline.com.au",
    mainNavCtaOneIcon: "log-in",
    mainNavCtaOneText: "Log in",
    mainNavCtaTwo: "https://qhonline.com.au",
    mainNavCtaTwoIcon: "location",
    mainNavCtaTwoText: "Contact",
    coreSiteIcons: "https://www.qld.gov.au/donate",
    siteSearchAsset: "/assets/icons/search.svg",
    siteHeaderMainTheme: "qld__header__main--dark",
    siteLogoUrl:
        "https://www.qld.gov.au/__data/assets/image/0011/69522/qld-govt-logo.svg",
    siteShowLogo: "yes",
    siteLogoSecondary:
        "https://www.qld.gov.au/__data/assets/image/0024/69526/qld-govt-logo-white.svg",
    siteLogoSecondaryMobile:
        "https://www.qld.gov.au/__data/assets/image/0024/69526/qld-govt-logo-white.svg",
    siteTitle: "Site Title",
    siteSubline: "Site Subline",
    siteSearchUrl: "https://www.qld.gov.au/search",
};

/**
 * Render function for the header component
 */
export const renderHeader = (args) => {
    const bannerStyle =
        args.defaultBannerContainedBanner === "qld__banner_contained"
            ? `style="
          ${
              args.imageContainedLayoutBackground
                  ? `background-image:url(${args.imageContainedLayoutBackground});`
                  : ""
          }
          background-position:${args.containedBannerImageTexturePosition};
          background-size:${args.containedBannerImageTextureSize};
          background-repeat:${args.containedBannerImageTextureRepeat};
        "`
            : "";

    return `
      ${
          args.defaultBannerContainedBanner === "qld__banner_contained"
              ? `<div class="qld__header__contained-banner" ${bannerStyle}></div>`
              : ""
      }
      <header class="qld__header" role="banner">
        <!-- Skip links -->
        <nav class="qld__skip-link" aria-label="skip links" tabindex="-1">
          <a class="qld__skip-link__link" href="#content">Skip to main content</a>
          <a class="qld__skip-link__link" href="#main-nav">Skip to main navigation</a>
        </nav>

        <!-- Pre header -->
        <div class="qld__header__pre-header ${args.sitePreHeaderTheme}">
          <div class="container-fluid">
            <a href="${args.sitePreHeaderURL}">
              <span class="qld__header__pre-header-url">${
                  args.sitePreHeaderText
              }</span>
              ${
                  args.sitePreHeaderLogo
                      ? `<img class="qld__header__pre-header-brand-image" alt="Queensland Government" src="${args.sitePreHeaderLogo}" />`
                      : `<span class="qld__header__pre-header-url--mobile">${args.sitePreHeaderText}</span>`
              }
            </a>

            <!-- CTA buttons -->
            <div class="qld__header__cta-wrapper">
              ${
                  args.mainNavCtaOne
                      ? `<a class="qld__header__cta-link" href="${
                            args.mainNavCtaOne
                        }">
                          ${
                              args.mainNavCtaOneIcon
                                  ? `<span class="qld__header__cta-link-icon"><svg class="qld__icon"><use href="QLD-icons.svg#${args.mainNavCtaOneIcon}"></use></svg></span>`
                                  : ""
                          }
                          <span class="qld__header__cta-link-text">${
                              args.mainNavCtaOneText
                          }</span>
                        </a>`
                      : ""
              }

              ${
                  args.mainNavCtaTwo
                      ? `<a class="qld__header__cta-link" href="${
                            args.mainNavCtaTwo
                        }">
                          ${
                              args.mainNavCtaTwoIcon
                                  ? `<span class="qld__header__cta-link-icon"><svg class="qld__icon"><use href="QLD-icons.svg#${args.mainNavCtaTwoIcon}"></use></svg></span>`
                                  : ""
                          }
                          <span class="qld__header__cta-link-text">${
                              args.mainNavCtaTwoText
                          }</span>
                        </a>`
                      : ""
              }
            </div>
          </div>
        </div>

        <!-- Main header -->
        <div class="qld__header__main ${args.siteHeaderMainTheme}">
          <div class="container-fluid">
            <div class="qld__header__brand">
              ${
                  args.siteShowLogo === "yes"
                      ? `<div class="qld__header__brand-image">
                            <img src="${args.siteLogoUrl}" alt="Site Logo" />
                        </div>`
                      : ""
              }
              <div class="qld__header__site-name">
                <span class="qld__header__heading">${args.siteTitle}</span>
                ${
                    args.siteSubline
                        ? `<span class="qld__header__subline">${args.siteSubline}</span>`
                        : ""
                }
              </div>
            </div>

            <!-- Optional search -->
            ${
                args.siteSearchAsset
                    ? `<div class="qld__header__search" id="qld-header-search">
                          <form role="search" aria-label="sitewide" action="${args.siteSearchUrl}">
                              <input type="search" name="query" placeholder="Search this website" disabled />
                              <button type="button" disabled>
                                  <img src="${args.siteSearchAsset}" alt="Search" />
                              </button>
                          </form>
                      </div>`
                    : ""
            }
          </div>
        </div>
      </header>
    `;
};

/**
 * Optional wrapper export, like LinkColumns
 */
export const Header = (args) => renderHeader(args);
