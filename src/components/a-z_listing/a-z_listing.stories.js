import Template from "./html/component.hbs";

function render({letterHeading, children}) {
    return Template({
        component: {
            data: {
                metadata: {
                    letter_heading: {value: letterHeading},
                },
            },
            children,
        },
    });
}

const meta = {
    title: "3. Components/A-Z Listing",
    render,
    argTypes: {
        letterHeading: {
            name: "heading_level",
            control: {
                type: "radio",
                labels: {h2: "H2", h3: "H3", h4: "H4", h5: "H5", span: "span"},
            },
            options: ["h2", "h3", "h4", "h5", "span"],
            table: {defaultValue: {summary: "h2"}},
        },
    },
    args: {
        letterHeading: "h2",
        children: [
            {assetid: "1", name: "Accordion"},
            {assetid: "2", name: "Alerts (in-page)"},
            {assetid: "3", name: "Breadcrumbs"},
            {assetid: "4", name: "Button"},
            {assetid: "5", name: "Callout"},
            {assetid: "6", name: "Card"},
            {assetid: "7", name: "Footer"},
            {assetid: "8", name: "Header"},
            {assetid: "9", name: "In-page navigation"},
            {assetid: "10", name: "Pagination"},
            {assetid: "11", name: "Tabs"},
            {assetid: "12", name: "Tags"},
            {assetid: "13", name: "Video player"},
        ],
    },
};
export default meta;

export const Default = {};

export const Empty = {
    args: {children: []}
}
