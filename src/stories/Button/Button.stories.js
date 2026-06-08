import { storyParams } from "../../../.storybook/globals";

function rowDecorator(Story) {
    return '<div style="display: flex; gap: 5px">\n' + `${Story()}` + "    </div>";
}

const getBtnClasses = (variant) => ["qld__btn", variant === "secondary" && "qld__btn--secondary", variant === "tertiary" && "qld__btn--tertiary"].filter(Boolean).join(" ");

function render({ variant }) {
    return `<button type="button" class="${getBtnClasses(variant)}">Default</button>`;
}

function renderButtonList({ variant }) {
    const btnClasses = getBtnClasses(variant);
    return (
        `<a href="#" class="${btnClasses}" hover="">Link</a>\n\n` +
        `<button type="button" class="${btnClasses}">Default</button>\n\n` +
        `<button type="button" class="${btnClasses} qld__btn--icon-lead">\n` +
        '    <svg class="qld__icon qld__icon--sm" aria-hidden="true" xmlns="http://www.w3.org/2000/svg"><use' +
        ' href="/QLD-icons.svg#announcement"></use></svg>\n' +
        "    Leading icon\n" +
        "</button>\n\n" +
        `<button type="button" class="${btnClasses} qld__btn--icon-trail">\n` +
        "   Trailing icon\n" +
        '   <svg class="qld__icon qld__icon--sm" aria-hidden="true" xmlns="http://www.w3.org/2000/svg"><use' +
        ' href="/QLD-icons.svg#announcement"></use></svg>\n' +
        "</button>\n\n" +
        `<button type="button" class="${btnClasses}" disabled="">Disabled</button>`
    );
}

export default {
    title: "3. Components/Button",
    render,
    parameters: {
        ...storyParams("button"),
        layout: "centered",
    },
    argTypes: {
        variant: {
            control: {
                type: "radio",
            },
            options: ["primary", "secondary", "tertiary"],
            default: "primary",
        },
    },
    args: {
        variant: "primary",
    },
};

export const Default = {};

export const Primary = {
    decorators: [rowDecorator],
    render: renderButtonList,
};

export const Secondary = {
    decorators: [rowDecorator],
    render: renderButtonList,
    args: { variant: "secondary" },
};

export const Tertiary = {
    decorators: [rowDecorator],
    render: renderButtonList,
    args: { variant: "tertiary" },
};
