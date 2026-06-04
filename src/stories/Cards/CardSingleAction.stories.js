import Template from "../../components/card_single_action/html/component.hbs";
import { storyParams } from "../../../.storybook/globals";
import ToowoombaImage from "./Toowoomba-web.jpeg";

const mockSite = {
    metadata: { coreSiteIcons: { value: "/QLD-icons.svg" } },
};

function makeChild(id, name, description = "", icon = "fal fa-heart", url = "#", footerContent = "") {
    return {
        assetid: String(id),
        type_code: "page_standard",
        name,
        thumbnail: "https://placehold.co/782x440",
        metadata: {
            shortDescription: { value: description },
            cardIcon: { value: icon },
            redirect_url: { value: url },
            cardDisplayFooter: { value: footerContent ? "true" : "false" },
            cardFooterContent: { value: footerContent },
        },
    };
}

const sampleChildren = [
    makeChild(1, "Card one", "Brief description of this card and what it links to."),
    makeChild(2, "Card two", "Brief description of this card and what it links to.", "fal fa-stethoscope"),
    makeChild(3, "Card three", "Brief description of this card and what it links to.", "fal fa-hospital"),
];

function buildData(args) {
    return {
        component: {
            data: {
                assetid: "123",
                metadata: {
                    body_background: { value: args.bodyBackground },
                    body_background_type: { value: "qld__card--wrapper-bg-colour" },
                    body_background_image: { value: "" },
                    body_background_pattern: { value: "" },
                    col_width: { value: args.colWidth },
                    card_type: { value: args.cardType },
                    background: { value: args.cardBackground },
                    card_heading_level: { value: "h3" },
                    icon_align: { value: args.iconAlign },
                    show_arrow: { value: args.showArrow ? "true" : "false" },
                    intro_heading: { value: args.introHeading },
                    intro_heading_level: { value: "h2" },
                    intro_body: { value: "" },
                    intro_width: { value: "col-md-6" },
                    all_link: { value: args.showViewAll ? "999" : "" },
                    all_link_name: { value: "View all" },
                    id_field: { value: "" },
                },
            },
            children: args.children,
            childrenThumbnails: args.children.map(() => ({ asset_thumbnail_alt: "" })),
        },
        site: mockSite,
    };
}

function render(args) {
    const container = document.createElement("div");
    container.innerHTML = Template(buildData(args));
    container.querySelectorAll(".qld__responsive-media-img--bg").forEach((img, i) => {
        if (img.style.backgroundImage) {
            img.style.backgroundImage = `url(${ToowoombaImage})`;
        }
    });
    return container;
}

const meta = {
    title: "3. Components/Cards/Card Single Action",
    render,
    argTypes: {
        cardType: {
            description: "Display style for each card.",
            control: { type: "radio" },
            options: ["text", "icon", "image"],
        },
        colWidth: {
            description: "Column width per card.",
            control: { type: "select" },
            options: ["col-xs-12", "col-md-6 col-lg-6", "col-md-6 col-lg-4", "col-md-6 col-lg-3"],
            labels: {
                "col-xs-12": "One column",
                "col-md-6 col-lg-6": "Two columns",
                "col-md-6 col-lg-4": "Three columns",
                "col-md-6 col-lg-3": "Four columns",
            },
        },
        showArrow: { description: "Show directional arrow on each card.", control: { type: "boolean" } },
        cardBackground: {
            description: "Card background colour.",
            control: { type: "select" },
            options: ["", "qld__card--light", "qld__card--alt", "qld__card--dark", "qld__card--dark-alt"],
        },
        bodyBackground: {
            description: "Section background colour.",
            control: { type: "select" },
            options: ["", "qld__body--light", "qld__body--alt", "qld__body--dark", "qld__body--dark-alt"],
        },
        iconAlign: {
            description: "Alignment of the icon (when card type is icon).",
            control: { type: "radio" },
            options: ["", "left"],
            labels: { "": "Top", left: "Left" },
        },
        introHeading: { description: "Optional section heading above the cards.", control: { type: "text" } },
        showViewAll: { description: "Show a 'View all' link below the cards.", control: { type: "boolean" } },
    },
    args: {
        cardType: "text",
        colWidth: "col-md-6 col-lg-4",
        showArrow: true,
        cardBackground: "",
        bodyBackground: "qld__body--light",
        iconAlign: "",
        introHeading: "",
        showViewAll: false,
        children: sampleChildren,
    },
    parameters: storyParams("card"),
};

export default meta;

export const Default = {};

export const WithIcons = {
    args: { cardType: "icon" },
};

export const WithImages = {
    args: { cardType: "image" },
};

export const WithoutArrow = {
    args: { showArrow: false },
};

export const TwoColumns = {
    args: { colWidth: "col-md-6 col-lg-6" },
};

export const WithSectionHeading = {
    args: { introHeading: "Related services", showViewAll: true },
};

export const DarkBackground = {
    args: { bodyBackground: "qld__body--dark", cardBackground: "qld__card--dark" },
};

export const WithFooter = {
    args: {
        children: [
            makeChild(1, "Card one", "Brief description.", "fal fa-heart", "#", "<p>Footer content</p>"),
            makeChild(2, "Card two", "Brief description.", "fal fa-stethoscope", "#", "<p>Footer content</p>"),
            makeChild(3, "Card three", "Brief description.", "fal fa-hospital", "#", "<p>Footer content</p>"),
        ],
    },
};

export const IconsLeft = {
    args: { cardType: "icon", iconAlign: "left" },
};
