import { DirectionLinks } from "./DirectionLinks";
import { themes, figmaLinks } from "../../../.storybook/globals";

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

export const Default = {
    args: {
        ...directionLinksArgs,
    },
};

export const defaultVariant = (directionLinksArgs) => DirectionLinks({ ...directionLinksArgs, direction: "right" });
defaultVariant.tags = ["!dev"];
export const leftVariant = (directionLinksArgs) => DirectionLinks({ ...directionLinksArgs, direction: "left" });
leftVariant.tags = ["!dev"];
export const upVariant = (directionLinksArgs) => DirectionLinks({ ...directionLinksArgs, direction: "up" });
upVariant.tags = ["!dev"];
export const downVariant = (directionLinksArgs) => DirectionLinks({ ...directionLinksArgs, direction: "down" });
downVariant.tags = ["!dev"];

export const allVariants = (args, theme) => {
    return `
        <div class="${theme}" style="padding: 2rem;">
            <h3>Direction link left</h3>
            ${leftVariant(args)}
            <h3>Direction link right</h3>
            ${defaultVariant(args)}
            <h3>Direction link up</h3>
            ${upVariant(args)}
            <h3>Direction link down</h3>
            ${downVariant(args)}
        </div>
    `;
};
allVariants.tags = ["!dev"];

export const white = {
    args: directionLinksArgs,
    render: (args) => {
        return allVariants(args, themes["white"]);
    },
};

export const light = {
    args: directionLinksArgs,
    render: (args) => {
        return allVariants(args, themes["light"]);
    },
};

export const lightAlt = {
    args: directionLinksArgs,
    render: (args) => {
        return allVariants(args, themes["light alt"]);
    },
};

export const dark = {
    args: directionLinksArgs,
    render: (args) => {
        return allVariants(args, themes["dark"]);
    },
};

export const darkAlt = {
    args: directionLinksArgs,
    render: (args) => {
        return allVariants(args, themes["dark alt"]);
    },
};
