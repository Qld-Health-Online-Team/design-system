import { CTALink } from "./CTALink";
import { themes, figmaLinks } from "../../../.storybook/globals";

const ctaLinkArgs = {
    id: "cta-link-1",
    text: "CTA Link",
    href: "https://www.google.com.au",
    target: "_blank",
    isViewAll: false,
    isDisabled: false,
};

export default {
    title: "Components/CTA Link",
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

export const Default = {
    args: {
        ...ctaLinkArgs,
    },
};

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

export const allVariants = (args, theme) => {
    return `
        <div class="${theme}" style="padding: 2rem;">
            <h3>Default</h3>
            ${defaultVariant(args)}
            <h3>View all</h3>
            ${viewAllVariant(args)}
            <h3>Disabled</h3>
            ${disabledVariant(args)}
        </div>
    `;
};
allVariants.tags = ["!dev"];

export const white = {
    args: ctaLinkArgs,
    render: (args) => {
        return allVariants(args, themes["white"]);
    },
};

export const light = {
    args: ctaLinkArgs,
    render: (args) => {
        return allVariants(args, themes["light"]);
    },
};

export const lightAlt = {
    args: ctaLinkArgs,
    render: (args) => {
        return allVariants(args, themes["light alt"]);
    },
};

export const dark = {
    args: ctaLinkArgs,
    render: (args) => {
        return allVariants(args, themes["dark"]);
    },
};

export const darkAlt = {
    args: ctaLinkArgs,
    render: (args) => {
        return allVariants(args, themes["dark alt"]);
    },
};
