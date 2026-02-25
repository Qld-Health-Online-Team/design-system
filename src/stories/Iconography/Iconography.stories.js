import { figmaLinks, themes } from "../../../.storybook/globals";
import { Iconography } from "./Iconography";
import { themeWrapper } from "../../../.storybook/helper-functions.js";

const iconographyArgs = {
    size: "lg",
    iconID: "chevron-left",
};

const iconographySizes = ["sm", "md", "lg", "xl", "xxl"];

export default {
    title: "1. Core Styles/Iconography",
    render: (args) => Iconography(args.size, args.site, args.iconID),
    argTypes: {
        size: {
            description: "The size of the icons.",
            control: {
                type: "radio",
                labels: {
                    sm: "Small",
                    md: "Medium",
                    lg: "Large",
                    xl: "Extra Large",
                    xxl: "Extra Extra Large",
                },
            },
            options: iconographySizes,
        },
        iconID: {
            control: "text",
            description: "The ID of the icon to display.",
        },
    },
    args: iconographyArgs,
    parameters: {
        design: {
            type: "figma",
            url: figmaLinks.iconography.design,
        },
    },
};

export const Default = {};

export const allIcons = (args) => {
    let iconString = `<div tabindex="0" class="iconography-container">`;

    // Loop through each icon ID
    if (args.iconIDs.length > 0) {
        args.iconIDs.forEach((iconID) => {
            iconString += `<div class="iconography-item">`;
            iconString += Iconography(iconographySizes[2], args.site, iconID);
            iconString += `<span class="iconography-item-name">${iconID}</span></div>`;
        });
    }

    return iconString + "</div>";
};
allIcons.tags = ["!dev"];

export const sizes = {
    render: (args) => {
        let iconString = `<div style="display: flex; flex-wrap: wrap; gap: 2rem;">`;
        iconographySizes.forEach((size) => {
            let pxSize = "";
            switch (size) {
                case "sm":
                    pxSize = "16px";
                    break;
                case "md":
                    pxSize = "24px";
                    break;
                case "lg":
                    pxSize = "32px";
                    break;
                case "xl":
                    pxSize = "48px";
                    break;
                case "xxl":
                    pxSize = "64px";
                    break;
            }
            iconString += `<div style="display: flex; flex-direction: column; align-items: center;">${Iconography(size, args.site, args.iconID)}<div style="margin-bottom: .25rem;">${size}: ${pxSize}</div></div>`;
        });
        return iconString + "</div>";
    },
};

export const white = {
    render: (args) => {
        return themeWrapper(themes["white"], allIcons(args));
    },
};

export const light = {
    render: (args) => {
        return themeWrapper(themes["light"], allIcons(args));
    },
};

export const lightAlt = {
    render: (args) => {
        return themeWrapper(themes["light alt"], allIcons(args));
    },
};

export const dark = {
    render: (args) => {
        return themeWrapper(themes["dark"], allIcons(args));
    },
};

export const darkAlt = {
    render: (args) => {
        return themeWrapper(themes["dark alt"], allIcons(args));
    },
};
