import Template from "../../components/banner_basic/html/component.hbs";
import { storyParams } from "../../../.storybook/globals";

const mockLineage = [
    { asset_url: "#", asset_short_name: "Home", asset_type_code: "page", asset_is_site_asset: "1" },
    { asset_url: "#", asset_short_name: "Section", asset_type_code: "page", asset_is_site_asset: "0" },
    { asset_url: "#", asset_short_name: "Current page", asset_type_code: "page", asset_is_site_asset: "0" },
];

const mockSite = {
    metadata: {
        coreSiteIcons: { value: "/QLD-icons.svg" },
        defaultBannerTexture: { value: "" },
        defaultBannerTextureDark: { value: "" },
    },
};

function buildData(args) {
    return {
        component: {
            data: {
                assetid: "123",
                metadata: {
                    id_field: { value: "" },
                    heading_primary: { value: args.headingPrimary },
                    abstract: { value: args.abstract },
                    breadcrumbs_display: { value: args.showBreadcrumbs ? "yes" : "" },
                    background_colour: { value: args.backgroundColour },
                    background_type: { value: args.backgroundType },
                    background_image_sm: { value: args.backgroundType === "image" ? "/mysource_files/banner-background--mobile.png" : "" },
                    background_image_lg: { value: args.backgroundType === "image" ? "/mysource_files/banner-background--desktop.png" : "" },
                    background_image_alignment: { value: "center" },
                },
            },
        },
        current: {
            lineage: args.showBreadcrumbs ? mockLineage : [],
        },
        site: mockSite,
    };
}

function render(args) {
    return Template(buildData(args));
}

const meta = {
    title: "3. Components/Banner Basic",
    render,
    argTypes: {
        headingPrimary: {
            description: "The page title displayed in the banner.",
            control: { type: "text" },
        },
        abstract: {
            description: "Short descriptive text displayed below the heading.",
            control: { type: "text" },
        },
        backgroundColour: {
            description: "Background colour theme of the banner.",
            control: {
                type: "select",
                labels: {
                    "": "White (default)",
                    light: "Light",
                    alternate: "Alternate",
                    dark: "Dark",
                    "dark-alternate": "Dark Alternate",
                },
            },
            options: ["", "light", "alternate", "dark", "dark-alternate"],
        },
        backgroundType: {
            description: "How the background is filled.",
            control: { type: "radio" },
            options: ["colour", "texture", "image"],
        },
        showBreadcrumbs: {
            description: "Display breadcrumb navigation in the banner.",
            control: { type: "boolean" },
        },
    },
    args: {
        headingPrimary: "Page title",
        abstract: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
        backgroundColour: "",
        backgroundType: "colour",
        showBreadcrumbs: false,
    },
    parameters: storyParams("banner"),
};

export default meta;

export const Default = {};

export const WithBreadcrumbs = {
    args: { showBreadcrumbs: true },
};

export const LightTheme = {
    args: { backgroundColour: "light" },
};

export const DarkTheme = {
    args: { backgroundColour: "dark" },
};
