import Handlebars from "handlebars";
import Template from "../../components/pagination/html/component.hbs?raw";
import { figmaLinks, themes } from "../../../.storybook/globals";

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
        url: "https://www.google.com/",
    },
    {
        label: 2,
        isCurrent: false,
        linkType: "num",
        url: "https://www.google.com/",
    },
    {
        label: 3,
        isCurrent: true,
        linkType: "num",
        url: "https://www.google.com/",
    },
    {
        label: 4,
        isCurrent: false,
        linkType: "num",
        url: "https://www.google.com/",
    },
    {
        label: 5,
        isCurrent: false,
        linkType: "num",
        url: "https://www.google.com/",
    },
    {
        label: 8,
        linkType: "last",
        url: "https://www.google.com/",
    },
    {
        linkType: "next",
        url: "https://www.google.com/",
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
        url: "https://www.google.com/",
    },
    {
        label: 2,
        isCurrent: true,
        linkType: "num",
        url: "https://www.google.com/",
    },
    {
        label: 3,
        isCurrent: false,
        linkType: "num",
        url: "https://www.google.com/",
    },
    {
        linkType: "next",
        url: "https://www.google.com/",
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
        url: "https://www.google.com/",
    },
    {
        label: 6,
        isCurrent: false,
        linkType: "num",
        url: "https://www.google.com/",
    },
    {
        label: 7,
        isCurrent: true,
        linkType: "num",
        url: "https://www.google.com/",
    },
    {
        label: 8,
        isCurrent: false,
        linkType: "num",
        url: "https://www.google.com/",
    },
    {
        label: 15,
        isCurrent: false,
        linkType: "last",
        url: "https://www.google.com/",
    },
    {
        linkType: "next",
        url: "https://www.google.com/",
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
        url: "https://www.google.com/",
    },
    {
        label: 2,
        isCurrent: false,
        linkType: "num",
        url: "https://www.google.com/",
    },
    {
        label: 3,
        isCurrent: true,
        linkType: "num",
        url: "https://www.google.com/",
    },
    {
        label: 4,
        isCurrent: false,
        linkType: "num",
        url: "https://www.google.com/",
    },
    {
        label: 5,
        isCurrent: false,
        linkType: "num",
        url: "https://www.google.com/",
    },
];

const paginationDataNextOnly = [
    {
        label: 1,
        isCurrent: false,
        linkType: "num",
        url: "https://www.google.com/",
    },
    {
        label: 2,
        isCurrent: false,
        linkType: "num",
        url: "https://www.google.com/",
    },
    {
        label: 3,
        isCurrent: true,
        linkType: "num",
        url: "https://www.google.com/",
    },
    {
        label: 4,
        isCurrent: false,
        linkType: "num",
        url: "https://www.google.com/",
    },
    {
        label: 5,
        isCurrent: false,
        linkType: "num",
        url: "https://www.google.com/",
    },
    {
        linkType: "next",
        url: "https://www.google.com/",
    },
];

export default {
    title: "Components/Pagination",
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
        return `<div class="${themes["light"]}">
            ${renderPagination(args)}
        </div>`;
    },
};

export const lightAlt = {
    render: (args) => {
        return `<div class="${themes["light alt"]}">
            ${renderPagination(args)}
        </div>`;
    },
};

export const dark = {
    render: (args) => {
        return `<div class="${themes["dark"]}">
            ${renderPagination(args)}
        </div>`;
    },
};

export const darkAlt = {
    render: (args) => {
        return `<div class="${themes["dark alt"]}">
            ${renderPagination(args)}
        </div>`;
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
