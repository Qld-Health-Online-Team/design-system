import Handlebars from "handlebars";
import Template from "../../components/promo_panel/html/component.hbs?raw";
import { figmaLinks } from "../../../.storybook/globals";

const renderPromoPanel = ({ id, type, title, abstract, body, promoImage, bodyBackground, imageAlignment, promoPanelIcon, linkType, ctaLinkTitle, ctaLink, primaryLinkTitle, primaryLink, secondaryLinkTitle, secondaryLink, ...args }) => {
    const html = Handlebars.compile(Template)({
        component: {
            data: {
                metadata: {
                    id_field: { value: id },
                    type: { value: type },
                    title: { value: title },
                    abstract: { value: abstract },
                    body: { value: body },
                    promo_image: { value: promoImage },
                    body_background: { value: bodyBackground },
                    image_alignment: { value: imageAlignment },
                    promo_panel_icon: { value: promoPanelIcon },
                    link_type: { value: linkType },
                    cta_link_title: { value: ctaLinkTitle },
                    cta_link: { value: ctaLink },
                    primary_link_title: { value: primaryLinkTitle },
                    primary_link: { value: primaryLink },
                    secondary_link_title: { value: secondaryLinkTitle },
                    secondary_link: { value: secondaryLink },
                },
            },
        },
        ...args,
    });

    // Custom code that is NOT part of the component template. Only used so that promo image can be displayed.
    const container = document.createElement("div");
    container.innerHTML = html;

    const imgElement = type === "qld__body--full-image" ? container.querySelector(".qld__promo-panel__container") : container.querySelector(".qld__promo-panel__image");
    if (imgElement && imgElement.style.backgroundImage) {
        imgElement.style.backgroundImage = `url(${promoImage})`;
    }

    return container;
};

const promoPanelArgs = {
    id: "promo-panel-1",
    type: "",
    title: "Promotional Panel Title",
    abstract: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam.",
    body: "Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur",
    promoImage: "https://www.cq.health.qld.gov.au/__data/assets/image/0025/139534/Woorabinda.jpg",
    bodyBackground: "qld__body--light",
    imageAlignment: "qld__promo-panel--image-left",
    promoPanelIcon: "zoom",
    linkType: "cta",
    ctaLinkTitle: "Call to Action Link",
    ctaLink: "#",
    primaryLinkTitle: "Primary Link",
    primaryLink: "#",
    secondaryLinkTitle: "Secondary Link",
    secondaryLink: "#",
};

export default {
    title: "Components/Promo Panel",
    render: renderPromoPanel,
    argTypes: {
        id: { description: "The unique identifier of the component.", control: "text" },
        type: {
            description: "The style of the component.",
            control: {
                type: "radio",
                labels: {
                    "": "Large image",
                    "qld__body--large-text": "Large text",
                    "qld__body--contained": "Contained",
                    "qld__body--full-image": "Full image",
                },
            },
            options: ["", "qld__body--large-text", "qld__body--contained", "qld__body--full-image"],
            default: "",
        },
        title: { description: "The title of the component", control: "text" },
        abstract: { description: "The abstract of the component.", control: "text" },
        body: { description: "The body text.", control: "text" },
        promoImage: { description: "The image on this component.", control: "text" },
        bodyBackground: {
            description: "The colour theme of the component.",
            control: {
                type: "radio",
                labels: {
                    "": "White",
                    "qld__body--light": "Light",
                    "qld__body--alt": "Alternate",
                    "qld__body--dark": "Dark",
                    "qld__body--dark-alt": "Dark Alternate",
                },
            },
            options: ["", "qld__body--light", "qld__body--alt", "qld__body--dark", "qld__body--dark-alt"],
            default: "",
        },
        imageAlignment: {
            description: "The alignment of the image relative to the text.",
            control: {
                type: "radio",
                labels: {
                    "qld__promo-panel--image-left": "Left",
                    "qld__promo-panel--image-right": "Right",
                },
            },
            options: ["qld__promo-panel--image-left", "qld__promo-panel--image-right"],
            default: "qld__promo-panel--image-left",
        },
        promoPanelIcon: { description: "The icon displayed", control: "text" },
        linkType: {
            description: "Whether the link should be of type CTA or Button.",
            control: {
                type: "radio",
                labels: {
                    cta: "CTA",
                    button: "Button",
                },
            },
            options: ["cta", "button"],
            default: "cta",
        },
        ctaLinkTitle: { description: "CTA link title.", control: "text" },
        ctaLink: { description: "CTA link link.", control: "text" },
        primaryLinkTitle: { description: "Primary button title.", control: "text" },
        primaryLink: { description: "Primary button link.", control: "text" },
        secondaryLinkTitle: { description: "Secondary button title.", control: "text" },
        secondaryLink: { description: "Secondary button link.", control: "text" },
    },
    args: { ...promoPanelArgs },
    parameters: {
        design: {
            type: "figma",
            url: figmaLinks.promoPanel.design,
        },
    },
};

export const Default = {};

export const defaultVariant = () => renderPromoPanel({ ...promoPanelArgs, bodyBackground: "" });
defaultVariant.tags = ["!dev"];

export const largeText = {
    args: {
        ...promoPanelArgs,
        type: "qld__body--large-text",
    },
    render: (args) => {
        return renderPromoPanel(args);
    },
};

export const contained = {
    args: {
        ...promoPanelArgs,
        type: "qld__body--contained",
    },
    render: (args) => {
        return renderPromoPanel(args);
    },
};

export const fullImage = {
    args: {
        ...promoPanelArgs,
        type: "qld__body--full-image",
    },
    render: (args) => {
        return renderPromoPanel(args);
    },
};

export const white = {
    args: {
        ...promoPanelArgs,
        bodyBackground: "",
    },
    render: (args) => {
        return renderPromoPanel(args);
    },
};

export const light = {
    args: {
        ...promoPanelArgs,
        bodyBackground: "qld__body--light",
    },
    render: (args) => {
        return renderPromoPanel(args);
    },
};

export const lightAlt = {
    args: {
        ...promoPanelArgs,
        bodyBackground: "qld__body--alt",
    },
    render: (args) => {
        return renderPromoPanel(args);
    },
};

export const dark = {
    args: {
        ...promoPanelArgs,
        bodyBackground: "qld__body--dark",
    },
    render: (args) => {
        return renderPromoPanel(args);
    },
};

export const darkAlt = {
    args: {
        ...promoPanelArgs,
        bodyBackground: "qld__body--dark-alt",
    },
    render: (args) => {
        return renderPromoPanel(args);
    },
};
