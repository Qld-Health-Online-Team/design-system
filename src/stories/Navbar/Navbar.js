import Handlebars from "handlebars";
import Template from "../../components/mega_main_navigation/html/component.hbs?raw";
import { cleanStorybookUrls } from "../../../.storybook/helper-functions";

/**
 * Default Storybook args
 */
export const navbarArgs = {
    mainNavStyle: "",
    sitePreHeaderTheme: "",
    mainNavDesktopHide: "no",
    mainNavMegaMenuShow: "true",
    mainNavPageDescLevelTwo: "false",
    mainNavHomeIconShow: true,

    mainNavCtaOne: "https://www.designsystem.qld.gov.au/",
    mainNavCtaOneText: "Log in",
    mainNavCtaOneIcon: "log-in",

    mainNavCtaTwo: "https://www.designsystem.qld.gov.au/",
    mainNavCtaTwoText: "Contact",
    mainNavCtaTwoIcon: "location",

    coreSiteIcons: "/QLD-icons.svg",

    // Add this to show the "View all" link
    mainNavViewAllShow: "true",
};

/**
 * Dummy navigation data (Storybook only)
 */
const navItems = [
    {
        asset_assetid: "100",
        asset_name: "Simple Page",
        asset_short_name: "Simple Page",
        asset_url: "#",
        children: [],
    },
    {
        asset_assetid: "300",
        asset_name: "Mega Menu",
        asset_short_name: "Mega Menu",
        asset_url: "#",
        asset_metadata_shortDescription: "What we offer",
        children: [
            {
                asset_assetid: "301",
                asset_short_name: "Consulting",
                asset_url: "#",
                asset_metadata_showInMegaNav: "true",
                asset_metadata_shortDescription: "Expert advice",
            },
            {
                asset_assetid: "302",
                asset_short_name: "Development",
                asset_url: "#",
                asset_metadata_showInMegaNav: "true",
                asset_metadata_shortDescription: "Build solutions",
            },
        ],
    },
];

/**
 * Mock current page context
 */
const current = {
    home: false,
    data: {
        assetid: "100",
    },
    top: {
        asset_assetid: "100",
    },
};

/**
 * Render helper
 */
export const renderNavbar = (args) => {
    const template = Handlebars.compile(Template);

    const html = template({
        site: {
            metadata: {
                mainNavStyle: { value: args.mainNavStyle },
                sitePreHeaderTheme: { value: args.sitePreHeaderTheme },
                mainNavDesktopHide: { value: args.mainNavDesktopHide },
                mainNavMegaMenuShow: { value: args.mainNavMegaMenuShow },
                mainNavPageDescLevelTwo: {
                    value: args.mainNavPageDescLevelTwo,
                },
                mainNavHomeIconShow: { value: args.mainNavHomeIconShow },

                mainNavCtaOne: { value: args.mainNavCtaOne },
                mainNavCtaOneText: { value: args.mainNavCtaOneText },
                mainNavCtaOneIcon: { value: args.mainNavCtaOneIcon },

                mainNavCtaTwo: { value: args.mainNavCtaTwo },
                mainNavCtaTwoText: { value: args.mainNavCtaTwoText },
                mainNavCtaTwoIcon: { value: args.mainNavCtaTwoIcon },

                coreSiteIcons: { value: args.coreSiteIcons },

                mainNavViewAllShow: { value: args.mainNavViewAllShow },
            },

            // Required for nav rendering
            data: {
                assetid: "100",
            },

            children: navItems,
        },

        current,
    });

    return cleanStorybookUrls(html);
};
