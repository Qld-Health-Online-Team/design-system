import { Header, headerArgs } from "./Header";
import { themes, figmaLinks } from "../../../.storybook/globals";

/**
 * Storybook default export
 */
export default {
    title: "Layout/Header",
    render: (args) => Header(args), // use the wrapper from Header.js
    argTypes: {
        defaultBannerContainedBanner: {
            control: { type: "radio" },
            options: ["no", "qld__banner_contained"],
            description: "Layout for displaying the contained banner if used.",
        },
        imageContainedLayoutBackground: {
            control: "text",
            description: "Background image URL for contained banner (if used).",
        },
        containedBannerImageTexturePosition: {
            control: { type: "radio" },
            options: ["top left", "top center", "top right"],
            description: "Position of the contained banner background image.",
        },
        containedBannerImageTextureSize: {
            control: { type: "radio" },
            options: ["auto", "cover"],
            description: "Size of the contained banner background image.",
        },
        containedBannerImageTextureRepeat: {
            control: { type: "radio" },
            options: ["no-repeat", "repeat"],
            description:
                "Repeat behavior of the contained banner background image.",
        },
        sitePreHeaderTheme: {
            control: { type: "radio" },
            options: [
                "qld__header__pre-header--dark",
                "qld__header__pre-header--dark-alt",
            ],
            description: "Pre header colour theme.",
        },
        sitePreHeaderURL: {
            control: "text",
            description: "URL for the pre header link.",
        },
        sitePreHeaderText: {
            control: "text",
            description: "Text for the pre header link.",
        },
        sitePreHeaderLogo: {
            control: "text",
            description: "URL for the pre header logo image.",
        },
        mainNavCtaOne: {
            control: "text",
            description: "Text for first CTA in main nav.",
        },
        mainNavCtaOneIcon: {
            control: "select",
            options: ["log-in", "location", "arrow-up", "arrow-down"],
            description: "Icon for first CTA in main nav.",
        },
        mainNavCtaOneText: {
            control: "text",
            description: "URL for first CTA in main nav.",
        },
        mainNavCtaTwo: {
            control: "text",
            description: "Text for second CTA in main nav.",
        },
        mainNavCtaTwoIcon: {
            control: "select",
            options: ["log-in", "location", "arrow-up", "arrow-down"],
            description: "Icon for second CTA in main nav.",
        },
        mainNavCtaTwoText: {
            control: "text",
            description: "URL for second CTA in main nav.",
        },
        siteShowLogo: {
            control: { type: "radio" },
            options: ["yes", "no"],
            description: "Toggle to show/hide main logo.",
        },
        siteTitle: { control: "text", description: "Text for the site title." },
        siteSubline: {
            control: "text",
            description: "Text for the site subline.",
        },
        siteSearchUrl: {
            control: "text",
            description: "URL for the site search results page.",
        },
        siteHeaderMainTheme: {
            control: { type: "radio" },
            options: ["qld__header__main--dark", "qld__header__main--dark-alt"],
            description: "Main header colour theme.",
        },
    },
    args: { ...headerArgs },
    parameters: {
        design: {
            type: "figma",
            url: figmaLinks.header.design,
        },
    },
};

/**
 * Default story
 */
export const Default = {
    args: { ...headerArgs },
};

/**
 * Theme variants (like LinkColumns)
 */
export const white = {
    args: { ...headerArgs },
    render: (args) =>
        `<div class="${themes.white}" style="padding: 2rem;">${Header(
            args
        )}</div>`,
};

export const light = {
    args: { ...headerArgs },
    render: (args) =>
        `<div class="${themes.light}" style="padding: 2rem;">${Header(
            args
        )}</div>`,
};

export const dark = {
    args: { ...headerArgs },
    render: (args) =>
        `<div class="${themes.dark}" style="padding: 2rem;">${Header(
            args
        )}</div>`,
};

export const darkAlt = {
    args: { ...headerArgs },
    render: (args) =>
        `<div class="${themes["dark alt"]}" style="padding: 2rem;">${Header(
            args
        )}</div>`,
};
