import { Tags } from "./Tags";
import { themes, figmaLinks } from "../../../.storybook/globals";
import { themeWrapper } from "../../../.storybook/helper-functions.js";

const tagsArgs = {
    type: "default",
    leadingText: "Tags:",
    text: "Policies",
    isLargeTag: false,
    action: "javascript:alert(`tag clicked!`)",
};

export default {
    title: "Components/Tags",
    render: (args) => Tags(args),
    argTypes: {
        type: {
            control: {
                type: "radio",
                labels: {
                    default: "Default",
                    action: "Action",
                    info: "Info",
                    filter: "Filter",
                },
            },
            options: ["default", "action", "info", "filter"],
            description: "The type of tags that will be displayed",
            table: {
                defaultValue: { summary: "default" },
            },
        },
        leadingText: { name: "leading_text", control: "text", description: "The text displayed leading the tags" },
        text: { control: "text", description: "The text to be displayed within the tag" },
        isLargeTag: {
            name: "is_large_tag",
            control: "boolean",
            description: "The size of the tags, either default or large",
            table: {
                defaultValue: { summary: "default" },
            },
            if: { arg: "type", neq: "filter" },
        },
        action: {
            control: "text",
            description: "The action that will be performed on an action tag click",
            if: { arg: "type", eq: "action" },
        },
    },
    args: { ...tagsArgs },
    parameters: {
        design: {
            type: "figma",
            url: figmaLinks.tags.design,
        },
    },
};

export const Default = {};

export const defaultVariant = () => Tags({ ...tagsArgs, type: "default" });
defaultVariant.tags = ["!dev"];
export const defaultVariantLarge = () => Tags({ ...tagsArgs, type: "default", isLargeTag: true });
defaultVariantLarge.tags = ["!dev"];

export const actionVariant = () => Tags({ ...tagsArgs, type: "action" });
actionVariant.tags = ["!dev"];
export const actionVariantLarge = () => Tags({ ...tagsArgs, type: "action", isLargeTag: true });
actionVariantLarge.tags = ["!dev"];

export const infoVariant = () => Tags({ ...tagsArgs, type: "info" });
infoVariant.tags = ["!dev"];
export const infoVariantLarge = () => Tags({ ...tagsArgs, type: "info", isLargeTag: true });
infoVariantLarge.tags = ["!dev"];

export const filterVariant = () => Tags({ ...tagsArgs, type: "filter" });
filterVariant.tags = ["!dev"];

export const allVariants = () => {
    return `
        <h3>Default tags</h3>
        ${defaultVariant()}
        ${defaultVariantLarge()}
        <h3>Action tags</h3>
        ${actionVariant()}
        ${actionVariantLarge()}
        <h3>Info tags</h3>
        ${infoVariant()}
        ${infoVariantLarge()}
        <h3>Filter tags</h3>
        ${filterVariant()}
    `;
};
const allVariantsArgTypes = {
    type: {
        table: {
            disable: true,
        },
    },
    isLargeTag: {
        table: {
            disable: true,
        },
    },
};
allVariants.tags = ["!dev"];

export const white = {
    argTypes: allVariantsArgTypes,
    render: () => {
        return themeWrapper(themes["white"], allVariants());
    },
};

export const light = {
    argTypes: allVariantsArgTypes,
    render: () => {
        return themeWrapper(themes["light"], allVariants());
    },
};

export const lightAlt = {
    argTypes: allVariantsArgTypes,
    render: () => {
        return themeWrapper(themes["light alt"], allVariants());
    },
};

export const dark = {
    argTypes: allVariantsArgTypes,
    render: () => {
        return themeWrapper(themes["dark"], allVariants());
    },
};

export const darkAlt = {
    argTypes: allVariantsArgTypes,
    render: () => {
        return themeWrapper(themes["dark alt"], allVariants());
    },
};
