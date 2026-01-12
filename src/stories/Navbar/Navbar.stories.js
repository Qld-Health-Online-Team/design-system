import { renderNavbar, navbarArgs } from "./Navbar";
import { figmaLinks } from "../../../.storybook/globals";

export default {
    title: "Components/Navbar",
    render: renderNavbar,
    args: { ...navbarArgs },

    argTypes: {
        mainNavStyle: {
            control: "radio",
            options: ["", "qld__main-nav--dark"],
        },
        sitePreHeaderTheme: {
            control: "radio",
            options: ["", "qld__header__pre-header--dark"],
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
