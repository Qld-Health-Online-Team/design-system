import { renderHeader, headerArgs } from "./Header.js";
import { figmaLinks } from "../../../.storybook/globals";

export default {
    title: "Layout/Header",
    render: renderHeader,
    args: { ...headerArgs },
    argTypes: {
        defaultBannerContainedBanner: {
            control: { type: "radio" },
            options: ["No", "Yes - light", "Yes - Dark"],
            mapping: {
                No: "No",
                "Yes - light": "qld__banner_contained",
                "Yes - Dark":
                    "qld__banner_contained qld__banner_contained--dark",
            },
            description: "Layout for displaying the contained banner if used.",
        },
        siteHeaderMainTheme: {
            control: { type: "radio" },
            options: ["Light", "Dark", "Dark Alternative"],
            mapping: {
                Light: "",
                Dark: "qld__header__main--dark",
                "Dark Alternative": "qld__header__main--dark-alt",
            },
            description: "Main header colour theme.",
        },
        sitePreHeaderTheme: {
            control: { type: "radio" },
            options: ["Light", "Dark", "Dark Alternative"],
            mapping: {
                Light: "",
                Dark: "qld__header__pre-header--dark",
                "Dark Alternative": "qld__header__pre-header--dark-alt",
            },
            description: "Pre header colour theme.",
        },
        siteShowLogo: {
            control: "radio",
            options: ["yes", "no"],
            description: "Show the Queensland Government logo",
        },
        containedBannerImageTexturePosition: {
            control: { type: "select" },
            options: ["Top Left", "Top Center", "Top Right"],
            mapping: {
                "Top Left": "top left",
                "Top Center": "top center",
                "Top Right": "top right",
            },
            description: "Position of the texture image within the banner.",
        },
        containedBannerImageTextureSize: {
            control: { type: "select" },
            options: ["Auto", "Cover"],
            mapping: {
                Auto: "auto",
                Cover: "cover",
            },
            description: "Size of the texture image within the banner.",
        },
        containedBannerImageTextureRepeat: {
            control: { type: "select" },
            options: ["No Repeat", "Repeat"],
            mapping: {
                "No Repeat": "no-repeat",
                Repeat: "repeat",
            },
            description: "Repeat style of the texture image within the banner.",
        },
    },
    parameters: {
        layout: "fullscreen",
        design: {
            type: "figma",
            url: figmaLinks.header.design,
        },
    },
};

// Default story
export const Default = { args: { ...headerArgs } };

// Variants
export const LightHeader = (args) =>
    renderHeader({ ...args, siteHeaderMainTheme: "" });
LightHeader.args = { ...headerArgs };

export const DarkHeader = (args) =>
    renderHeader({ ...args, siteHeaderMainTheme: "qld__header__main--dark" });
DarkHeader.args = { ...headerArgs };

export const DarkAltHeader = (args) =>
    renderHeader({
        ...args,
        siteHeaderMainTheme: "qld__header__main--dark-alt",
    });
DarkAltHeader.args = { ...headerArgs };
