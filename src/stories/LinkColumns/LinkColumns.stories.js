import { LinkColumns } from "./LinkColumns";
import { themes, dummyLink, storyParams } from "../../../.storybook/globals";
import { themeWrapper } from "../../../.storybook/helper-functions";
import { initComponents } from "../../../.storybook/decorators";
import initCtaLinks from "../../components/_global/js/cta_links/global";

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
    render: LinkColumns,
    decorators: [initComponents([initCtaLinks])],
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
        viewAllHref: {
            control: "text",
            description: "The link the 'View all' button will navigate to",
            if: { arg: "hasViewAll", eq: true },
        },
    },
    args: { ...linkColumnsArgs },
    parameters: storyParams("linkColumns"),
};

const renderVariant = (variant) => LinkColumns({ ...linkColumnsArgs, ...variant.args });

export const Default = {};

export const defaultVariant = {
    tags: ["!dev"],
};

export const columns1Variant = {
    args: { columns: 1 },
    tags: ["!dev"],
};

export const columns2Variant = {
    args: { columns: 2 },
    tags: ["!dev"],
};
export const columns3Variant = {
    args: { columns: 3 },
    tags: ["!dev"],
};
export const noViewAllVariant = {
    args: { columns: 3, hasViewAll: false },
    tags: ["!dev"],
};

export const allVariants = () => {
    return `
        <h3>Link columns (1)</h3>
        ${renderVariant(columns1Variant)}
        <h3>Link columns (2)</h3>
        ${renderVariant(columns2Variant)}
        <h3>Link columns (3)</h3>
        ${renderVariant(columns3Variant)}
        <h3>Link columns without view all</h3>
        ${renderVariant(noViewAllVariant)}
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
