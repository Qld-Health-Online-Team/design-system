import { themes, dummyLink, storyParams } from "../../../.storybook/globals";
import { themeWrapper } from "../../../.storybook/helper-functions";
import { initComponents } from "../../../.storybook/decorators";
import initCtaLinks from "../../components/_global/js/cta_links/global";

const meta = {
    title: "3. Components/Call to action (CTA)",
    render: ({ id, text, href, target, isViewAll, isDisabled }) => {
        return `
            <a 
            id="${id}" 
            href="${href}" 
            target="${target}" 
            class="qld__cta-link ${isViewAll ? "qld__cta-link--view-all" : ""}" 
            ${isDisabled ? "disabled" : ""}>
                ${text}
            </a>
        `;
    },
    decorators: [initComponents([initCtaLinks])],
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
    args: {
        id: "cta-link-1",
        text: "CTA Link",
        href: dummyLink,
        target: "_blank",
        isViewAll: false,
        isDisabled: false,
    },
    parameters: storyParams("ctaLink"),
};
export default meta;

export const Default = {};

export const ViewAllVariant = {
    args: { isViewAll: true },
};

export const DisabledVariant = {
    args: { isDisabled: true },
};

export const LinkedListExample = {
    render: (args) => `
    <ul aria-label="Related links" class="qld__link-columns qld__link-columns--2-col">
        <li>${meta.render({ ...args, text: "Contact us" })}</li>
        <li>${meta.render({ ...args, text: "About us" })}</li>
        <li>${meta.render({ ...args, text: "Products" })}</li>
        <li>${meta.render({ ...args, text: "FAQ" })}</li>
        <li>${meta.render({ ...args, text: "Terms and conditions" })}</li>
        <li>${meta.render({ ...args, text: "Privacy policy" })}</li>
        <li>${meta.render({ ...args, text: "Blog" })}</li>
        <li>${meta.render({ ...args, text: "Careers" })}</li>
        <li>${meta.render({ ...args, text: "Press" })}</li>
        <li>${meta.render({ ...args, text: "Resources" })}</li>
        <li>${meta.render({ ...args, text: "Partners" })}</li>
        <li>${meta.render({ ...args, text: "Events" })}</li>
        <li>${meta.render({ ...args, text: "Community" })}</li>
        <li>${meta.render({ ...args, text: "Sitemap" })}</li>
        <li class="qld__link-columns__all-link">${meta.render({ ...args, text: "View all", isViewAll: true })}</li>
    </ul>
    `,
};

export const LongCtaLinkExample = {
    render: (args) => `<div style="width: 300px;">${meta.render(args)}</div>`,
    args: { text: "Super super long link super long link super long link super long link" },
};

export const AllVariants = {
    render: (args) => `
        <h3>Default</h3>
        ${meta.render(args)}
        <h3>View all</h3>
        ${meta.render({ ...args, ...ViewAllVariant.args })}
        <h3>Disabled</h3>
        ${meta.render({ ...args, ...DisabledVariant.args })}
    `,
};

export const White = {
    render: (args) => {
        return themeWrapper(themes["white"], AllVariants.render(args));
    },
};

export const Light = {
    render: (args) => {
        return themeWrapper(themes["light"], AllVariants.render(args));
    },
};

export const LightAlt = {
    render: (args) => {
        return themeWrapper(themes["light alt"], AllVariants.render(args));
    },
};

export const Dark = {
    render: (args) => {
        return themeWrapper(themes["dark"], AllVariants.render(args));
    },
};

export const DarkAlt = {
    render: (args) => {
        return themeWrapper(themes["dark alt"], AllVariants.render(args));
    },
};
