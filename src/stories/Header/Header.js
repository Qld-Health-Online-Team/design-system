import Handlebars from "handlebars";
import Template from "../../components/header/html/component.hbs?raw";
import { cleanStorybookUrls } from "../../../.storybook/helper-functions";

// Render function for Storybook / pages
export const renderHeader = (args) => {
    const html = Handlebars.compile(Template)({
        site: {
            metadata: {
                defaultBannerContainedBanner: {
                    value: args.defaultBannerContainedBanner,
                },
                imageContainedLayoutBackground: {
                    value: args.imageContainedLayoutBackground,
                },
                imageContainedLayoutTexture: {
                    value: args.imageContainedLayoutTexture,
                },
                containedBannerImageTexturePosition: {
                    value: args.containedBannerImageTexturePosition,
                },
                containedBannerImageTextureSize: {
                    value: args.containedBannerImageTextureSize,
                },
                containedBannerImageTextureRepeat: {
                    value: args.containedBannerImageTextureRepeat,
                },
                sitePreHeaderURL: { value: args.sitePreHeaderURL },
                sitePreHeaderTheme: { value: args.sitePreHeaderTheme },
                sitePreHeaderText: { value: args.sitePreHeaderText },
                siteHeaderDefaultLogo: { value: args.siteHeaderDefaultLogo },
                sitePreHeaderLogo: { value: args.sitePreHeaderLogo },
                siteLogoUrl: { value: args.siteLogoUrl },
                siteLogo: { value: args.siteLogo },

                siteShowLogo: { value: args.siteShowLogo },
                siteLogoSecondary: { value: args.siteLogoSecondary },
                siteLogoSecondaryMobile: {
                    value: args.siteLogoSecondaryMobile,
                },
                siteTitle: { value: args.siteTitle },
                siteSubline: { value: args.siteSubline },
                siteSearchAsset: { value: args.siteSearchAsset },
                siteSearchUrl: { value: args.siteSearchUrl },
                mainNavCtaOne: { value: args.mainNavCtaOne },
                mainNavCtaOneText: { value: args.mainNavCtaOneText },
                mainNavCtaOneIcon: { value: args.mainNavCtaOneIcon },
                mainNavCtaTwo: { value: args.mainNavCtaTwo },
                mainNavCtaTwoText: { value: args.mainNavCtaTwoText },
                mainNavCtaTwoIcon: { value: args.mainNavCtaTwoIcon },
                siteHeaderMainTheme: { value: args.siteHeaderMainTheme },
                coreSiteIcons: { value: args.coreSiteIcons },
            },
            data: { assetid: "123" }, // fallback asset ID
        },
    });
    // return cleanStorybookUrls(html);

    return cleanStorybookUrls(html).replace(/\sdisabled="true"/g, "");
};

// Default args you can reuse anywhere
export const headerArgs = {
    defaultBannerContainedBanner: "qld__banner_contained",
    imageContainedLayoutBackground: "",
    imageContainedLayoutTexture: "",
    containedBannerImageTexturePosition: "",
    containedBannerImageTextureSize: "auto",
    containedBannerImageTextureRepeat: "",
    sitePreHeaderURL: "https://www.qld.gov.au",
    sitePreHeaderTheme: "qld__pre-header--light",
    sitePreHeaderText: "Queensland Government",
    siteHeaderDefaultLogo: "/qgov-coa.svg",
    sitePreHeaderLogo:
        "https://www.childrens.health.qld.gov.au/__data/assets/file/0020/163334/CoA-Black-Mobile.svg",
    siteLogoUrl: "hhttps://www.qld.gov.au/",
    siteLogo: "",
    siteShowLogo: "yes",
    siteLogoSecondary: "",
    siteLogoSecondaryMobile: "",
    siteTitle: "Site Title",
    siteSubline: "Subline text",
    siteSearchAsset: true,
    siteSearchUrl: "/search",
    mainNavCtaOne: "https://www.designsystem.qld.gov.au/",
    mainNavCtaOneText: "Log in",
    mainNavCtaOneIcon: "log-in",
    mainNavCtaTwo: "https://www.designsystem.qld.gov.au/",
    mainNavCtaTwoText: "Contact",
    mainNavCtaTwoIcon: "location",
    siteHeaderMainTheme: "",
    coreSiteIcons: "/QLD-icons.svg",
};
