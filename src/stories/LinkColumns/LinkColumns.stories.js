import { LinkColumns } from "./LinkColumns";
import { themes, figmaLinks } from "../../../.storybook/globals";

const LinkColumnsArgs = {
    ariaLabel: "related links",
    columns: 1,
    data: [
        {
            text: "Link 1",
            href: "https://www.google.com",
        },
        {
            text: "Link 2",
            href: "https://www.google.com",
        },
        {
            text: "Link 3",
            href: "https://www.google.com",
        },
        {
            text: "Link 4",
            href: "https://www.google.com",
        },
        {
            text: "Link 5",
            href: "https://www.google.com",
        },
        {
            text: "Link 6",
            href: "https://www.google.com",
        },
        {
            text: "Link 7",
            href: "https://www.google.com",
        },
    ],
    hasViewAll: true,
    viewAllHref: "https://www.google.com",
};

export default {
    title: "Components/Link Columns",
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
    args: { ...LinkColumnsArgs },
    parameters: {
        design: {
            type: "figma",
            url: figmaLinks.linkColumns.design,
        },
    },
};

export const Default = {
    args: {
        ...LinkColumnsArgs,
    },
};

export const defaultVariant = (linkColumnsArgs) => LinkColumns({ ...linkColumnsArgs });
defaultVariant.tags = ["!dev"];
export const columns1Variant = (linkColumnsArgs) => LinkColumns({ ...linkColumnsArgs, columns: 1 });
columns1Variant.tags = ["!dev"];
export const columns2Variant = (linkColumnsArgs) => LinkColumns({ ...linkColumnsArgs, columns: 2 });
columns2Variant.tags = ["!dev"];
export const columns3Variant = (linkColumnsArgs) => LinkColumns({ ...linkColumnsArgs, columns: 3 });
columns3Variant.tags = ["!dev"];
export const noViewAllVariant = (linkColumnsArgs) => LinkColumns({ ...linkColumnsArgs, columns: 3, hasViewAll: false });
noViewAllVariant.tags = ["!dev"];

export const allVariants = (args, theme) => {
    return `
        <div class="${theme}" style="padding: 2rem;">
            <h3>Link columns (1)</h3>
            ${columns1Variant(args)}
            <h3>Link columns (2)</h3>
            ${columns2Variant(args)}
            <h3>Link columns (3)</h3>
            ${columns3Variant(args)}
            <h3>Link columns without view all</h3>
            ${noViewAllVariant(args)}
        </div>
    `;
};
allVariants.tags = ["!dev"];

export const white = {
    args: LinkColumnsArgs,
    render: (args) => {
        return allVariants(args, themes["white"]);
    },
};

export const light = {
    args: LinkColumnsArgs,
    render: (args) => {
        return allVariants(args, themes["light"]);
    },
};

export const lightAlt = {
    args: LinkColumnsArgs,
    render: (args) => {
        return allVariants(args, themes["light alt"]);
    },
};

export const dark = {
    args: LinkColumnsArgs,
    render: (args) => {
        return allVariants(args, themes["dark"]);
    },
};

export const darkAlt = {
    args: LinkColumnsArgs,
    render: (args) => {
        return allVariants(args, themes["dark alt"]);
    },
};
