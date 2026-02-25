import Handlebars from "handlebars";
import Template from "../../components/pagination/html/component.hbs?raw";
import { figmaLinks, themes, dummyLink } from "../../../.storybook/globals";
import { themeWrapper } from "../../../.storybook/helper-functions.js";

const renderPagination = ({ data, ...args }) =>
    Handlebars.compile(Template)({
        pagination: data,
        ...args,
    });

const paginationData = [
    {
        linkType: "prev",
    },
    {
        label: 1,
        isCurrent: false,
        linkType: "num",
        url: dummyLink,
    },
    {
        label: 2,
        isCurrent: false,
        linkType: "num",
        url: dummyLink,
    },
    {
        label: 3,
        isCurrent: true,
        linkType: "num",
        url: dummyLink,
    },
    {
        label: 4,
        isCurrent: false,
        linkType: "num",
        url: dummyLink,
    },
    {
        label: 5,
        isCurrent: false,
        linkType: "num",
        url: dummyLink,
    },
    {
        label: 8,
        linkType: "last",
        url: dummyLink,
    },
    {
        linkType: "next",
        url: dummyLink,
    },
];

const paginationDataShort = [
    {
        linkType: "prev",
    },
    {
        label: 1,
        isCurrent: false,
        linkType: "num",
        url: dummyLink,
    },
    {
        label: 2,
        isCurrent: true,
        linkType: "num",
        url: dummyLink,
    },
    {
        label: 3,
        isCurrent: false,
        linkType: "num",
        url: dummyLink,
    },
    {
        linkType: "next",
        url: dummyLink,
    },
];

const paginationDataLong = [
    {
        linkType: "prev",
    },
    {
        label: 1,
        isCurrent: false,
        linkType: "first",
        url: dummyLink,
    },
    {
        label: 6,
        isCurrent: false,
        linkType: "num",
        url: dummyLink,
    },
    {
        label: 7,
        isCurrent: true,
        linkType: "num",
        url: dummyLink,
    },
    {
        label: 8,
        isCurrent: false,
        linkType: "num",
        url: dummyLink,
    },
    {
        label: 15,
        isCurrent: false,
        linkType: "last",
        url: dummyLink,
    },
    {
        linkType: "next",
        url: dummyLink,
    },
];

const paginationDataPreviousOnly = [
    {
        linkType: "prev",
    },
    {
        label: 1,
        isCurrent: false,
        linkType: "num",
        url: dummyLink,
    },
    {
        label: 2,
        isCurrent: false,
        linkType: "num",
        url: dummyLink,
    },
    {
        label: 3,
        isCurrent: true,
        linkType: "num",
        url: dummyLink,
    },
    {
        label: 4,
        isCurrent: false,
        linkType: "num",
        url: dummyLink,
    },
    {
        label: 5,
        isCurrent: false,
        linkType: "num",
        url: dummyLink,
    },
];

const paginationDataNextOnly = [
    {
        label: 1,
        isCurrent: false,
        linkType: "num",
        url: dummyLink,
    },
    {
        label: 2,
        isCurrent: false,
        linkType: "num",
        url: dummyLink,
    },
    {
        label: 3,
        isCurrent: true,
        linkType: "num",
        url: dummyLink,
    },
    {
        label: 4,
        isCurrent: false,
        linkType: "num",
        url: dummyLink,
    },
    {
        label: 5,
        isCurrent: false,
        linkType: "num",
        url: dummyLink,
    },
    {
        linkType: "next",
        url: dummyLink,
    },
];

export default {
    title: "3. Components/Pagination",
    render: renderPagination,
    args: { data: paginationData },
    parameters: {
        design: {
            type: "figma",
            url: figmaLinks.pagination.design,
        },
    },
};

export const Default = {};

export const light = {
    render: (args) => {
        return themeWrapper(themes["light"], renderPagination(args));
    },
};

export const lightAlt = {
    render: (args) => {
        return themeWrapper(themes["light alt"], renderPagination(args));
    },
};

export const dark = {
    render: (args) => {
        return themeWrapper(themes["dark"], renderPagination(args));
    },
};

export const darkAlt = {
    render: (args) => {
        return themeWrapper(themes["dark alt"], renderPagination(args));
    },
};

export const short = {
    args: { data: paginationDataShort },
};

export const long = {
    args: { data: paginationDataLong },
};

export const previousOnly = {
    args: { data: paginationDataPreviousOnly },
};

export const nextOnly = {
    args: { data: paginationDataNextOnly },
};
