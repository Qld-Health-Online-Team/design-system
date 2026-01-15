import { renderNavbar, navbarArgs } from "./Navbar";
import { figmaLinks } from "../../../.storybook/globals";

export default {
    title: "Components/Navbar",
    render: renderNavbar,
    args: { ...navbarArgs },

    argTypes: {
        mainNavStyle: {
            control: "radio",
            options: ["Light", "Dark"],
            mapping: {
                Light: "",
                Dark: "qld__main-nav--dark",
            },
        },

        mainNavMegaMenuShow: {
            control: "radio",
            options: ["true", "false"],
        },
        mainNavPageDescLevelTwo: {
            control: "boolean",
        },
        mainNavHomeIconShow: {
            control: "boolean",
        },
        mainNavDesktopHide: {
            control: "boolean",
        },

        // Hide these controls
        mainNavCtaOneIcon: { table: { disable: true } },
        mainNavCtaOneText: { table: { disable: true } },
        mainNavCtaOne: { table: { disable: true } },
        mainNavCtaTwo: { table: { disable: true } },
        mainNavCtaTwoText: { table: { disable: true } },
        mainNavCtaTwoIcon: { table: { disable: true } },
        coreSiteIcons: { table: { disable: true } },
        sitePreHeaderTheme: { table: { disable: true } },
    },

    parameters: {
        layout: "fullscreen",
        themes: null,
        design: {
            type: "figma",
            url: figmaLinks.navbar?.design,
        },
    },
};

export const Default = {
    args: { ...navbarArgs },
    render: (args) => {
        // Plain wrapper with nothing else
        return `<div class="qld__grid">${renderNavbar(args)}</div>`;
    },
    decorators: [
        (Story) => {
            // Simply return the story HTML without the global theme wrapper
            return Story();
        },
    ],
};

// Variants
export const LightNavbar = {
    args: { ...navbarArgs, mainNavStyle: "" },
    render: (args) => `<div class="qld__grid">${renderNavbar(args)}</div>`,
    name: "Light",
};

export const DarkNavbar = {
    args: { ...navbarArgs, mainNavStyle: "qld__main-nav--dark" },
    render: (args) => `<div class="qld__grid">${renderNavbar(args)}</div>`,
    name: "Dark",
};
