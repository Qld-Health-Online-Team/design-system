import Template from "../../components/breadcrumbs/html/component.hbs";
import { storyParams, themes } from "../../../.storybook/globals";
import { themeWrapper } from "../../../.storybook/helper-functions.js";

function render({ displayBreadcrumbs, lineage, ...args }) {
    return Template({
        current: {
            data: {
                metadata: {
                    displayBreadcrumbs: { value: displayBreadcrumbs },
                },
            },
            lineage: lineage,
        },
        ...args,
    });
}

const breadcrumbsArgs = {
    displayBreadcrumbs: "true",
    lineage: [
        { asset_type_code: "page", asset_short_name: "Home", asset_is_site_asset: "2" },
        { asset_type_code: "page", asset_short_name: "Design system", asset_is_site_asset: "2" },
        { asset_type_code: "page", asset_short_name: "Library", asset_is_site_asset: "2" },
        { asset_type_code: "page", asset_short_name: "Components", asset_is_site_asset: "2" },
        { asset_type_code: "page", asset_short_name: "Breadcrumbs", asset_is_site_asset: "2" },
    ],
};

const breadcrumbsArgsLong = {
    displayBreadcrumbs: "true",
    lineage: [
        { asset_type_code: "page", asset_short_name: "Home", asset_is_site_asset: "2" },
        { asset_type_code: "page", asset_short_name: "Design system", asset_is_site_asset: "2" },
        { asset_type_code: "page", asset_short_name: "Library", asset_is_site_asset: "2" },
        { asset_type_code: "page", asset_short_name: "Components", asset_is_site_asset: "2" },
        { asset_type_code: "page", asset_short_name: "Breadcrumbs", asset_is_site_asset: "2" },
        { asset_type_code: "page", asset_short_name: "Page", asset_is_site_asset: "2" },
        { asset_type_code: "page", asset_short_name: "Page", asset_is_site_asset: "2" },
        { asset_type_code: "page", asset_short_name: "Page", asset_is_site_asset: "2" },
        { asset_type_code: "page", asset_short_name: "Page", asset_is_site_asset: "2" },
        { asset_type_code: "page", asset_short_name: "Page", asset_is_site_asset: "2" },
        { asset_type_code: "page", asset_short_name: "Page", asset_is_site_asset: "2" },
        { asset_type_code: "page", asset_short_name: "Page", asset_is_site_asset: "2" },
    ],
};

export default {
    title: "3. Components/Breadcrumbs",
    render: render,
    argTypes: {
        displayBreadcrumbs: {
            description: "Whether the component should be displayed.",
            control: {
                type: "radio",
                labels: {
                    true: "True",
                    false: "False",
                },
            },
            options: ["true", "false"],
            default: "true",
        },
    },
    args: { ...breadcrumbsArgs },
    parameters: storyParams("breadcrumbs"),
};

export const Default = {};

export const overflow = {
    args: breadcrumbsArgsLong,
    render: (args) => {
        return `<section class="qld__body qld__body--breadcrumb"><div class="container-fluid">` + render(args) + `</div></section>`;
    },
};

export const light = {
    render: (args) => {
        return themeWrapper(themes["light"], `${render(args)}`);
    },
};

export const lightOverflow = {
    args: breadcrumbsArgsLong,
    render: (args) => {
        return `<section class="qld__body qld__body--breadcrumb"><div class="container-fluid">` + themeWrapper(themes["light"], `${render(args)}`) + `</div></section>`;
    },
};

export const lightAlt = {
    render: (args) => {
        return themeWrapper(themes["light alt"], `${render(args)}`);
    },
};

export const lightAltOverflow = {
    args: breadcrumbsArgsLong,
    render: (args) => {
        return `<section class="qld__body qld__body--breadcrumb"><div class="container-fluid">` + themeWrapper(themes["light alt"], `${render(args)}`) + `</div></section>`;
    },
};

export const dark = {
    render: (args) => {
        return themeWrapper(themes["dark"], `${render(args)}`);
    },
};

export const darkOverflow = {
    args: breadcrumbsArgsLong,
    render: (args) => {
        return `<section class="qld__body qld__body--breadcrumb"><div class="container-fluid">` + themeWrapper(themes["dark"], `${render(args)}`) + `</div></section>`;
    },
};

export const darkAlt = {
    render: (args) => {
        return themeWrapper(themes["dark alt"], `${render(args)}`);
    },
};

export const darkAltOverflow = {
    args: breadcrumbsArgsLong,
    render: (args) => {
        return `<section class="qld__body qld__body--breadcrumb"><div class="container-fluid">` + themeWrapper(themes["dark alt"], `${render(args)}`) + `</div></section>`;
    },
};
