import Template from "../../components/accordion/html/component.hbs";
import { dummyText, storyParams } from "../../../.storybook/globals";
import { expect, userEvent, within } from "storybook/test";
import { initComponents } from "../../../.storybook/decorators";
import { initAccordion } from "../../components/accordion/js/global";

function buildMetadata({ heading, intro, theme, toggleAll, titleLevel, accordionNum, title1, content1, title2, content2, title3, content3 }) {
    return {
        theme: { value: theme },
        title_level: { value: titleLevel },
        toggle_all: { value: toggleAll ? "yes" : "" },
        heading: { value: heading },
        intro: { value: intro },
        accordion_num: { value: String(accordionNum) },
        title_1: { value: title1, fieldid: "title_1" },
        content_1: { value: content1, fieldid: "content_1" },
        title_2: { value: title2, fieldid: "title_2" },
        content_2: { value: content2, fieldid: "content_2" },
        title_3: { value: title3, fieldid: "title_3" },
        content_3: { value: content3, fieldid: "content_3" },
    };
}

function render(args) {
    return Template({
        component: {
            data: {
                assetid: "123",
                metadata: buildMetadata(args),
            },
        },
    });
}

const defaultArgs = {
    heading: "",
    intro: "",
    theme: "",
    toggleAll: false,
    titleLevel: "h3",
    accordionNum: 3,
    title1: "Accordion item one",
    content1: `<p>${dummyText}</p>`,
    title2: "Accordion item two",
    content2: `<p>${dummyText}</p>`,
    title3: "Accordion item three",
    content3: `<p>${dummyText}</p>`,
};

const meta = {
    title: "3. Components/Accordion",
    render,
    decorators: [initComponents([initAccordion])],
    parameters: storyParams("accordion"),
    argTypes: {
        heading: {
            description: "Optional group heading displayed above the accordions.",
            control: { type: "text" },
        },
        intro: {
            description: "Optional intro text displayed below the heading.",
            control: { type: "text" },
        },
        theme: {
            description: "Visual theme applied to the accordion group.",
            control: {
                type: "select",
                labels: {
                    "": "White",
                    "qld__accordion-group--light": "Light",
                    "qld__accordion-group--alt": "Alternate",
                    "qld__accordion-group--dark": "Dark",
                    "qld__accordion-group--dark-alt": "Alternate Dark",
                },
            },
            options: ["", "qld__accordion-group--light", "qld__accordion-group--alt", "qld__accordion-group--dark", "qld__accordion-group--dark-alt"],
        },
        toggleAll: {
            description: "Show an Open all / Close all toggle button above the accordion items.",
            control: { type: "boolean" },
        },
        titleLevel: {
            description: "Heading level used for each accordion title button.",
            control: { type: "radio" },
            options: ["h2", "h3", "h4"],
        },
        accordionNum: {
            description: "Number of accordion items to display (1–3).",
            control: { type: "number", min: 1, max: 3 },
        },
        title1: { description: "Title for accordion item 1.", control: { type: "text" } },
        content1: { description: "HTML content for accordion item 1.", control: { type: "text" } },
        title2: { description: "Title for accordion item 2.", control: { type: "text" } },
        content2: { description: "HTML content for accordion item 2.", control: { type: "text" } },
        title3: { description: "Title for accordion item 3.", control: { type: "text" } },
        content3: { description: "HTML content for accordion item 3.", control: { type: "text" } },
    },
    args: defaultArgs,
};

export default meta;

export const Default = {};

export const WithToggleAll = {
    args: { toggleAll: true },
    play: async ({ canvasElement }) => {
        const canvas = within(canvasElement);
        const buttons = canvas.getAllByRole("button");
        await userEvent.click(buttons[0]);
    },
};

export const DarkAlt = {
    args: { theme: "qld__accordion-group--dark-alt" },
    play: async ({ canvasElement }) => {
        const canvas = within(canvasElement);
        const buttons = canvas.getAllByRole("button");
        await userEvent.click(buttons[0]);
    },
};

export const OpenState = {
    play: async ({ canvasElement }) => {
        const canvas = within(canvasElement);
        const buttons = canvas.getAllByRole("button");
        await userEvent.click(buttons[0]);
    },
};

export const ToggleAllSync = {
    args: { toggleAll: true },
    play: async ({ canvasElement }) => {
        const toggleAllBtn = canvasElement.querySelector(".qld__accordion__toggle-btn");
        const titles = canvasElement.querySelectorAll(".qld__accordion__title");

        await expect(toggleAllBtn).toHaveTextContent("Open all");

        // Opening every accordion individually should flip the button to "Close all".
        for (const title of titles) {
            await userEvent.click(title);
        }
        await expect(toggleAllBtn).toHaveTextContent("Close all");
        await expect(toggleAllBtn).toHaveAttribute("aria-expanded", "true");

        // Closing any one accordion should revert the button to "Open all".
        await userEvent.click(titles[0]);
        await expect(toggleAllBtn).toHaveTextContent("Open all");
        await expect(toggleAllBtn).toHaveAttribute("aria-expanded", "false");
    },
};
