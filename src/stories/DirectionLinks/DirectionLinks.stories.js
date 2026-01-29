import { DirectionLinks } from "./DirectionLinks";
import { themes, figmaLinks } from "../../../.storybook/globals";
import { themeWrapper } from "../../../.storybook/helper-functions";

const directionLinksArgs = {
    text: "my link",
    direction: "right",
    href: "https://www.google.com",
};

export default {
    title: "Components/Direction Links",
    render: (args) => DirectionLinks(args),
    argTypes: {
        text: { control: "text", description: "The text displayed as the link" },
        direction: {
            control: {
                type: "radio",
                labels: {
                    left: "left",
                    right: "right",
                    up: "up",
                    down: "down",
                },
            },
            options: ["left", "right", "up", "down"],
            description: "The direction of the link icon",
            table: {
                defaultValue: { summary: "right" },
            },
        },
        text: { control: "text", description: "The link the user will be taken to on click" },
    },
    args: { ...directionLinksArgs },
    parameters: {
        design: {
            type: "figma",
            url: figmaLinks.directionLinks.design,
        },
    },
};

export const Default = {};

export const defaultVariant = () => DirectionLinks({ ...directionLinksArgs, direction: "right" });
defaultVariant.tags = ["!dev"];
export const leftVariant = () => DirectionLinks({ ...directionLinksArgs, direction: "left" });
leftVariant.tags = ["!dev"];
export const upVariant = () => DirectionLinks({ ...directionLinksArgs, direction: "up" });
upVariant.tags = ["!dev"];
export const downVariant = () => DirectionLinks({ ...directionLinksArgs, direction: "down" });
downVariant.tags = ["!dev"];

export const allVariants = () => {
    return `
        <h3>Direction link left</h3>
        ${leftVariant()}
        <h3>Direction link right</h3>
        ${defaultVariant()}
        <h3>Direction link up</h3>
        ${upVariant()}
        <h3>Direction link down</h3>
        ${downVariant()}
    `;
};
allVariants.tags = ["!dev"];

export const white = {
    render: () => {
        return themeWrapper(themes["white"], allVariants());
    },
};

export const light = {
    render: () => {
        return themeWrapper(themes["light"], allVariants());
    },
};

export const lightAlt = {
    render: () => {
        return themeWrapper(themes["light alt"], allVariants());
    },
};

export const dark = {
    render: () => {
        return themeWrapper(themes["dark"], allVariants());
    },
};

export const darkAlt = {
    render: () => {
        return themeWrapper(themes["dark alt"], allVariants());
    },
};
