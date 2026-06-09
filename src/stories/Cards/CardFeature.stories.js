import Template from "../../components/card_feature/html/component.hbs";
import { storyParams } from "../../../.storybook/globals";
import ToowoombaIMage from "./Toowoomba-web.jpeg";

const mockSite = {
    metadata: { coreSiteIcons: { value: "/QLD-icons.svg" } },
};

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
                    col_width: { value: "col-xs-12" },
                    intro_heading: { value: args.introHeading },
                    intro_body: { value: args.introBody },
                    intro_width: { value: "col-md-6" },
                    all_link: { value: "" },
                    all_link_name: { value: "" },
                    show_icon_image: { value: args.cardType },
                    card_icon: { value: args.cardIcon },
                    card_image_right: { value: args.imageAlignment },
                    show_arrow: { value: args.showArrow ? "true" : "false" },
                    background: { value: args.cardBackground },
                    card_title: { value: args.cardTitle },
                    card_title_url: { value: args.cardTitleUrl },
                    body_text: { value: args.bodyText },
                    show_card_footer: { value: args.showFooter ? "true" : "false" },
                    card_cta1_url: { value: args.showFooter ? "1" : "" },
                    card_cta1_text: { value: args.showFooter ? "Call us" : "" },
                    card_cta1_icon: { value: "fal fa-phone" },
                    card_cta2_url: { value: args.showFooter ? "2" : "" },
                    card_cta2_text: { value: args.showFooter ? "Email us" : "" },
                    card_cta2_icon: { value: "fal fa-envelope" },
                    card_cta3_url: { value: "" },
                    card_cta3_text: { value: "" },
                    card_cta3_icon: { value: "" },
                },
            },
            image_alt: args.cardType === "image" ? "Card image" : "",
        },
        site: mockSite,
    };
}

function render(args) {
    const container = document.createElement("div");
    // Render inside #content so the design system's section padding applies
    // to the body background (it only targets `#content .qld__body` / `form`).
    container.id = "content";
    container.innerHTML = Template(buildData(args));
    // The image slot only renders for image-type cards, so always swap in the
    // bundled image — this avoids a missing image if the source URL fails to load.
    const img = container.querySelector(".qld__responsive-media-img--bg");
    if (img) {
        img.style.backgroundImage = `url(${ToowoombaIMage})`;
    }
    return container;
}

const meta = {
    title: "3. Components/Cards/Card Feature",
    render,
    argTypes: {
        cardTitle: { description: "Card heading text.", control: { type: "text" } },
        cardTitleUrl: { description: "URL the heading links to.", control: { type: "text" } },
        bodyText: { description: "Supporting description text.", control: { type: "text" } },
        cardType: {
            description: "Whether the card shows an icon, image, or neither.",
            control: { type: "radio" },
            options: ["none", "icon", "image"],
        },
        cardIcon: { description: "Icon class (when card type is icon).", control: { type: "text" } },
        imageAlignment: {
            description: "Aligns the feature image left or right of the content.",
            control: { type: "radio" },
            options: ["", "left", "right"],
        },
        showArrow: { description: "Show directional arrow on the card.", control: { type: "boolean" } },
        showFooter: { description: "Show footer with CTA links.", control: { type: "boolean" } },
        cardBackground: {
            description: "Card background colour.",
            control: {
                type: "select",
                labels: {
                    "": "White",
                    "qld__card--light": "Light",
                    "qld__card--alt": "Alternate",
                    "qld__card--dark": "Dark",
                    "qld__card--dark-alt": "Dark Alternate",
                },
            },
            options: ["", "qld__card--light", "qld__card--alt", "qld__card--dark", "qld__card--dark-alt"],
        },
        bodyBackground: {
            description: "Background colour of the section behind the card.",
            control: {
                type: "select",
                labels: {
                    "": "White",
                    "qld__body--light": "Light",
                    "qld__body--alt": "Alternate",
                    "qld__body--dark": "Dark",
                    "qld__body--dark-alt": "Dark Alternate",
                },
            },
            options: ["", "qld__body--light", "qld__body--alt", "qld__body--dark", "qld__body--dark-alt"],
        },
        introHeading: { description: "Optional section heading above the card.", control: { type: "text" } },
        introBody: { description: "Optional section intro body text.", control: { type: "text" } },
    },
    args: {
        cardTitle: "Card title",
        cardTitleUrl: "#",
        bodyText: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
        cardType: "none",
        cardIcon: "fal fa-heart",
        imageAlignment: "",
        showArrow: true,
        showFooter: false,
        cardBackground: "",
        bodyBackground: "",
        introHeading: "",
        introBody: "",
    },
    parameters: storyParams("card"),
};

export default meta;

export const Default = {};

export const StackedIcon = {
    args: { cardType: "icon", cardIcon: "fal fa-heart", showArrow: false },
};

export const WithImage = {
    args: { cardType: "image" },
};

export const FeatureImageLeft = {
    args: { cardType: "image", imageAlignment: "left" },
};

export const FeatureImageRight = {
    args: { cardType: "image", imageAlignment: "right" },
};

export const WithFooter = {
    args: { showFooter: true },
};

export const AlternateBackground = {
    args: { bodyBackground: "qld__body--alt", cardBackground: "qld__card--alt" },
};

export const DarkBackground = {
    args: { bodyBackground: "qld__body--dark", cardBackground: "qld__card--dark" },
};
