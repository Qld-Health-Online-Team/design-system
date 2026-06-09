import { CTALink } from "./CTALink";
import { themes, dummyLink, storyParams } from "../../../.storybook/globals";
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
    parameters: storyParams("ctaLink"),
};

export const Default = {};

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
        <ul aria-label="Related links" class="qld__link-columns qld__link-columns--2-col">
            <li>${CTALink({
                ...ctaLinkArgs,
                text: "Contact us",
            })}</li>
            <li>${CTALink({
                ...ctaLinkArgs,
                text: "About us",
            })}</li>
            <li>${CTALink({
                ...ctaLinkArgs,
                text: "Products",
            })}</li>
            <li>${CTALink({
                ...ctaLinkArgs,
                text: "FAQ",
            })}</li>
            <li>${CTALink({
                ...ctaLinkArgs,
                text: "Terms and conditions",
            })}</li>
            <li>${CTALink({
                ...ctaLinkArgs,
                text: "Privacy policy",
            })}</li>
            <li>${CTALink({
                ...ctaLinkArgs,
                text: "Blog",
            })}</li>
            <li>${CTALink({
                ...ctaLinkArgs,
                text: "Careers",
            })}</li>
            <li>${CTALink({
                ...ctaLinkArgs,
                text: "Press",
            })}</li>
            <li>${CTALink({
                ...ctaLinkArgs,
                text: "Resources",
            })}</li>
            <li>${CTALink({
                ...ctaLinkArgs,
                text: "Partners",
            })}</li>
            <li>${CTALink({
                ...ctaLinkArgs,
                text: "Events",
            })}</li>
            <li>${CTALink({
                ...ctaLinkArgs,
                text: "Community",
            })}</li>
            <li>${CTALink({
                ...ctaLinkArgs,
                text: "Sitemap",
            })}</li>
            <li class="qld__link-columns__all-link">${CTALink({
                ...ctaLinkArgs,
                text: "View all",
                isViewAll: true,
            })}
            </li>
        </ul>
    `;
};
linkedListExample.parameters = {
    controls: { disable: true },
    actions: { disable: true },
};

export const longCtaLinkExample = (ctaLinkArgs) => {
    return `
        <div style="width: 300px;">
            ${CTALink({
                ...ctaLinkArgs,
                text: "Super super long link super long link super long link super long link",
            })}
        </div>
    `;
};

const allVariants = (args) => {
    return `
        <h3>Default</h3>
        ${CTALink(args)}
        <h3>View all</h3>
        ${viewAllVariant(args)}
        <h3>Disabled</h3>
        ${disabledVariant(args)}
    `;
};

export const white = {
    render: (args) => {
        return themeWrapper(themes["white"], allVariants(args));
    },
};

export const light = {
    render: (args) => {
        return themeWrapper(themes["light"], allVariants(args));
    },
};

export const lightAlt = {
    render: (args) => {
        return themeWrapper(themes["light alt"], allVariants(args));
    },
};

export const dark = {
    render: (args) => {
        return themeWrapper(themes["dark"], allVariants(args));
    },
};

export const darkAlt = {
    render: (args) => {
        return themeWrapper(themes["dark alt"], allVariants(args));
    },
};
