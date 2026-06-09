import Template from "../../components/a-z_listing/html/component.hbs";
import { storyParams } from "../../../.storybook/globals";

function render({ letterHeading, children }) {
    return Template({
        component: {
            data: {
                metadata: {
                    letter_heading: { value: letterHeading },
                },
            },
            children,
        },
    });
}

const parameters = storyParams("aZListing");

const meta = {
    title: "3. Components/A-Z Listing",
    render,
    argTypes: {
        letterHeading: {
            name: "heading_level",
            control: {
                type: "radio",
                labels: { h2: "H2", h3: "H3", h4: "H4", h5: "H5", span: "span" },
            },
            options: ["h2", "h3", "h4", "h5", "span"],
            table: { defaultValue: { summary: "h2" } },
        },
    },
    args: {
        letterHeading: "h2",
        children: [
            { assetid: "1", name: "Accordion" },
            { assetid: "2", name: "Alerts (in-page)" },
            { assetid: "3", name: "Breadcrumbs" },
            { assetid: "4", name: "Button" },
            { assetid: "5", name: "Callout" },
            { assetid: "6", name: "Card" },
            { assetid: "7", name: "Footer" },
            { assetid: "8", name: "Header" },
            { assetid: "9", name: "In-page navigation" },
            { assetid: "10", name: "Pagination" },
            { assetid: "11", name: "Tabs" },
            { assetid: "12", name: "Tags" },
            { assetid: "13", name: "Video player" },
        ],
    },
    parameters: {
        ...parameters,
        docs: {
            ...parameters.docs,
            description: {
                component:
                    "The A-Z listing component groups a set of links alphabetically by their first letter, " +
                    "displaying each group under a letter heading so users can scan and find content quickly.\n" +
                    "\n" +
                    "It is typically used for index or directory pages where a long list of items benefits from being " +
                    "broken into alphabetical sections.",
            },
        },
    },
};
export default meta;

export const Default = {};

export const Empty = {
    args: { children: [] },
};
