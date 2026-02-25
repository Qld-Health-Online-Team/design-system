import { LinkColumns } from "./LinkColumns";
import { themes, figmaLinks, dummyLink } from "../../../.storybook/globals";
import { themeWrapper } from "../../../.storybook/helper-functions";

const linkColumnsArgs = {
    ariaLabel: "related links",
    columns: 1,
    data: [
        {
            text: "Link 1",
            href: dummyLink,
        },
        {
            text: "Link 2",
            href: dummyLink,
        },
        {
            text: "Link 3",
            href: dummyLink,
        },
        {
            text: "Link 4",
            href: dummyLink,
        },
        {
            text: "Link 5",
            href: dummyLink,
        },
        {
            text: "Link 6",
            href: dummyLink,
        },
        {
            text: "Link 7",
            href: dummyLink,
        },
    ],
    hasViewAll: true,
    viewAllHref: dummyLink,
};

export default {
    title: "3. Components/Link Columns",
    render: (args) => LinkColumns(args),
    argTypes: {
        ariaLabel: { control: "text", description: "The aria " },
        columns: {
            control: {
                type: "radio",
                labels: {
                    1: 1,
                    2: 2,
                    3: 3,
                },
            },
            options: [1, 2, 3],
            description: "The number of columns formatted in the link columns",
            table: {
                defaultValue: { summary: 1 },
            },
        },
        data: { control: "array", description: "The link the user will be taken to on click" },
        hasViewAll: { control: "boolean", description: "Whether to show the 'View all' link" },
        viewAllHref: { control: "text", description: "The link the 'View all' button will navigate to", if: { arg: "hasViewAll", eq: true } },
    },
    args: { ...linkColumnsArgs },
    parameters: {
        design: {
            type: "figma",
            url: figmaLinks.linkColumns.design,
        },
    },
};

export const Default = {};

export const defaultVariant = () => LinkColumns({ ...linkColumnsArgs });
defaultVariant.tags = ["!dev"];
export const columns1Variant = () => LinkColumns({ ...linkColumnsArgs, columns: 1 });
columns1Variant.tags = ["!dev"];
export const columns2Variant = () => LinkColumns({ ...linkColumnsArgs, columns: 2 });
columns2Variant.tags = ["!dev"];
export const columns3Variant = () => LinkColumns({ ...linkColumnsArgs, columns: 3 });
columns3Variant.tags = ["!dev"];
export const noViewAllVariant = () => LinkColumns({ ...linkColumnsArgs, columns: 3, hasViewAll: false });
noViewAllVariant.tags = ["!dev"];

export const allVariants = () => {
    return `
        <h3>Link columns (1)</h3>
        ${columns1Variant()}
        <h3>Link columns (2)</h3>
        ${columns2Variant()}
        <h3>Link columns (3)</h3>
        ${columns3Variant()}
        <h3>Link columns without view all</h3>
        ${noViewAllVariant()}
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
