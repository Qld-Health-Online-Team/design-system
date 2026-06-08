import Template from "../../components/banner_basic/html/component.hbs";
import { storyParams } from "../../../.storybook/globals";
import bannerTexture from "../../assets/img/banner-bg.png";

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

function render(args) {
    const container = document.createElement("div");
    container.innerHTML = Template({
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
    });

    // The template hardcodes a './?a=' texture URL (from site metadata) that won't
    // resolve in Storybook, so swap in the bundled texture image directly on the
    // banner element. Inline style overrides the template's #banner-{id} rule.
    if (args.backgroundType === "texture") {
        const banner = container.querySelector(".qld__banner");
        if (banner) {
            banner.style.backgroundImage = `url(${bannerTexture})`;
        }
    }

    return container;
}

const meta = {
    title: "3. Components/Banner/Basic",
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
        headingPrimary: "Basic Banner",
        abstract: "Banner basic abstract text",
        backgroundColour: "dark",
        backgroundType: "texture",
        showBreadcrumbs: true,
    },
    parameters: storyParams("banner"),
};

export default meta;

export const Default = {};
