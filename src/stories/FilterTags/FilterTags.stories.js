import { FilterTags } from "./FilterTags";

const filterTagsArgs = {
    filterByText: "Filtered by:",
    text: "Policies",
};

export default {
    title: "HTML components/Filter Tags",
    render: (args) => FilterTags(args),
    argTypes: {
        filterByText: { control: "text", description: "The text displayed leading the filter tags" },
        text: { control: "text", description: "The text to be displayed within the tag" },
    },
    args: { ...filterTagsArgs },
};

export const Default = {
    args: {
        ...filterTagsArgs,
    },
};
