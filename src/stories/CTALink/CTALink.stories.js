import { CTALink } from "./CTALink";
import { themes, figmaLinks, dummyLink } from "../../../.storybook/globals";
import { themeWrapper } from "../../../.storybook/helper-functions";

const ctaLinkArgs = {
    id: "cta-link-1",
    text: "CTA Link",
    href: dummyLink,
    target: "_blank",
    isViewAll: false,
    isDisabled: false,
};

export default {
    title: "3. Components/Call to action (CTA)",
    render: (args) => CTALink(args),
    argTypes: {
        id: { control: "text", description: "The unique identifier of the component" },
        text: { control: "text", description: "The text of the component" },
        href: {
            control: "text",
            description: "The target URL of the component",
        },
        target: {
            control: {
                type: "radio",
                labels: {
                    _blank: "_blank",
                    _self: "_self",
                    _parent: "_parent",
                    _top: "_top",
                },
            },
            options: ["_blank", "_self", "_parent", "_top"],
            description: "Where the linked document wiill open",
            table: {
                defaultValue: { summary: "_blank" },
            },
        },
        isViewAll: {
            control: "boolean",
            description: "If the component should be indicating a show all icon",
        },
        isDisabled: {
            control: "boolean",
            description: "If the component is in a disabled state",
        },
    },
    args: { ...ctaLinkArgs },
    parameters: {
        design: {
            type: "figma",
            url: figmaLinks.ctaLink.design,
        },
    },
};

export const Default = {};

export const defaultVariant = (ctaLinkArgs) => CTALink({ ...ctaLinkArgs });
defaultVariant.tags = ["!dev"];

export const viewAllVariant = (ctaLinkArgs) =>
    CTALink({
        ...ctaLinkArgs,
        isViewAll: true,
    });
viewAllVariant.tags = ["!dev"];

export const disabledVariant = (ctaLinkArgs) =>
    CTALink({
        ...ctaLinkArgs,
        isDisabled: true,
    });
disabledVariant.tags = ["!dev"];

export const linkedListExample = (ctaLinkArgs) => {
    return `
        <ul class="qld__link-list qld__margin-t-li--lg">
            <li>${CTALink({
                ...ctaLinkArgs,
                text: "Sign up",
                href: "javascript:void(0);",
                target: "",
            })}</li>
            <li>${CTALink({
                ...ctaLinkArgs,
                text: "View all",
                href: "javascript:void(0);",
                target: "",
                isViewAll: true,
            })}</li>
        </ul>
    `;
};
linkedListExample.parameters = {
    controls: { disable: true },
    actions: { disable: true },
};

const allVariants = () => {
    return `
        <h3>Default</h3>
        ${defaultVariant(ctaLinkArgs)}
        <h3>View all</h3>
        ${viewAllVariant(ctaLinkArgs)}
        <h3>Disabled</h3>
        ${disabledVariant(ctaLinkArgs)}
    `;
};

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
