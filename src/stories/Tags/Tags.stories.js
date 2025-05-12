import { Tags } from "./Tags";
import { figmaLinks } from "../../../.storybook/globals";
import { variantsThemeMapper } from "../../../.storybook/helper-functions";

const tagsArgs = {
    type: "default",
    leadingText: "Tags:",
    text: "Policies",
    tagSize: "default",
    action: "javascript:alert(`tag clicked!`)",
};

export default {
    title: "Components/Tags",
    render: (args) => Tags(args),
    argTypes: {
        type: {
            control: "select",
            options: ["default", "action", "info", "filter"],
            description: "The type of tags that will be displayed",
            table: {
                defaultValue: { summary: "default" },
            },
        },
        leadingText: { control: "text", description: "The text displayed leading the tags" },
        text: { control: "text", description: "The text to be displayed within the tag" },
        tagSize: {
            control: "select",
            options: ["default", "large"],
            description: "The size of the tags",
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

export const DefaultVariant = (tagsArgs) => Tags({ ...tagsArgs, type: "default" });
DefaultVariant.tags = ["!dev"];
export const DefaultVariantLarge = (tagsArgs) => Tags({ ...tagsArgs, type: "default", tagSize: "large" });
DefaultVariantLarge.tags = ["!dev"];

export const ActionVariant = (tagsArgs) => Tags({ ...tagsArgs, type: "action" });
ActionVariant.tags = ["!dev"];
export const ActionVariantLarge = (tagsArgs) => Tags({ ...tagsArgs, type: "action", tagSize: "large" });
ActionVariantLarge.tags = ["!dev"];

export const InfoVariant = (tagsArgs) => Tags({ ...tagsArgs, type: "info" });
InfoVariant.tags = ["!dev"];
export const InfoVariantLarge = (tagsArgs) => Tags({ ...tagsArgs, type: "info", tagSize: "large" });
InfoVariantLarge.tags = ["!dev"];

export const FilterVariant = (tagsArgs) => Tags({ ...tagsArgs, type: "filter" });
FilterVariant.tags = ["!dev"];

export const DefaultVariants = (tagsArgs) => variantsThemeMapper("Default regular tags", DefaultVariant(tagsArgs)) + variantsThemeMapper("Default large tags", DefaultVariantLarge(tagsArgs));

export const ActionVariants = (tagsArgs) => variantsThemeMapper("Action regular tags", ActionVariant(tagsArgs)) + variantsThemeMapper("Action large tags", ActionVariantLarge(tagsArgs));

export const InfoVariants = (tagsArgs) => variantsThemeMapper("Info regular tags", InfoVariant(tagsArgs)) + variantsThemeMapper("Info large tags", InfoVariantLarge(tagsArgs));

export const FilterVariants = (tagsArgs) => variantsThemeMapper("Filter", FilterVariant(tagsArgs));
