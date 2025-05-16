import { Tags } from "./Tags";
import { figmaLinks } from "../../../.storybook/globals";
import { themes } from "../../../.storybook/globals";

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

export const Default = {
    args: {
        ...tagsArgs,
    },
};

export const defaultVariant = (tagsArgs) => Tags({ ...tagsArgs, type: "default" });
defaultVariant.tags = ["!dev"];
export const defaultVariantLarge = (tagsArgs) => Tags({ ...tagsArgs, type: "default", isLargeTag: true });
defaultVariantLarge.tags = ["!dev"];

export const actionVariant = (tagsArgs) => Tags({ ...tagsArgs, type: "action" });
actionVariant.tags = ["!dev"];
export const actionVariantLarge = (tagsArgs) => Tags({ ...tagsArgs, type: "action", isLargeTag: true });
actionVariantLarge.tags = ["!dev"];

export const infoVariant = (tagsArgs) => Tags({ ...tagsArgs, type: "info" });
infoVariant.tags = ["!dev"];
export const infoVariantLarge = (tagsArgs) => Tags({ ...tagsArgs, type: "info", isLargeTag: true });
infoVariantLarge.tags = ["!dev"];

export const filterVariant = (tagsArgs) => Tags({ ...tagsArgs, type: "filter" });
filterVariant.tags = ["!dev"];

export const allVariants = (args, theme) => {
    return `
        <div class="${theme}" style="padding: 2rem;">
            <h3>Default tags</h3>
            ${defaultVariant(args)}
            ${defaultVariantLarge(args)}
            <h3>Action tags</h3>
            ${actionVariant(args)}
            ${actionVariantLarge(args)}
            <h3>Info tags</h3>
            ${infoVariant(args)}
            ${infoVariantLarge(args)}
            <h3>Filter tags</h3>
            ${filterVariant(args)}
        </div>
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
    args: tagsArgs,
    argTypes: allVariantsArgTypes,
    render: (args) => {
        return allVariants(args, themes["white"]);
    },
};

export const light = {
    args: tagsArgs,
    argTypes: allVariantsArgTypes,
    render: (args) => {
        return allVariants(args, themes["light"]);
    },
};

export const lightAlt = {
    args: tagsArgs,
    argTypes: allVariantsArgTypes,
    render: (args) => {
        return allVariants(args, themes["light alt"]);
    },
};

export const dark = {
    args: tagsArgs,
    argTypes: allVariantsArgTypes,
    render: (args) => {
        return allVariants(args, themes["dark"]);
    },
};

export const darkAlt = {
    args: tagsArgs,
    argTypes: allVariantsArgTypes,
    render: (args) => {
        return allVariants(args, themes["dark alt"]);
    },
};
