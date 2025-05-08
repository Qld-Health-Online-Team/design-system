import { FilterTags } from "./FilterTags";
import { themes, figmaLinks } from "../../../.storybook/globals";

const filterTagsArgs = {
    filterByText: "Filtered by:",
    text: "Policies",
};

export default {
    title: "Components/Filter Tags",
    render: (args) => FilterTags(args),
    argTypes: {
        filterByText: { control: "text", description: "The text displayed leading the filter tags" },
        text: { control: "text", description: "The text to be displayed within the tag" },
    },
    args: { ...filterTagsArgs },
    parameters: {
        design: {
            type: "figma",
            url: figmaLinks.filterTags.design,
        },
    },
};

export const Default = {
    args: {
        ...filterTagsArgs,
    },
};

export const Light = {
    args: {
        ...filterTagsArgs,
    },
    decorators: [
        (Story) => {
            return `
                <div class="${themes["light"]}">
                    ${Story()}
                </div>
            `;
        },
    ],
};

export const LightAlt = {
    args: {
        ...filterTagsArgs,
    },
    decorators: [
        (Story) => {
            return `
                <div class="${themes["light alt"]}">
                    ${Story()}
                </div>
            `;
        },
    ],
};
export const Dark = {
    args: {
        ...filterTagsArgs,
    },
    decorators: [
        (Story) => {
            return `
                <div class="${themes["dark"]}">
                    ${Story()}
                </div>
            `;
        },
    ],
};
export const DarkAlt = {
    args: {
        ...filterTagsArgs,
    },
    decorators: [
        (Story) => {
            return `
                <div class="${themes["dark alt"]}">
                    ${Story()}
                </div>
            `;
        },
    ],
};
