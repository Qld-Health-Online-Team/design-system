import Template from "../../components/in_page_navigation/html/component.hbs";
import { figmaLinks, dummyText } from "../../../.storybook/globals";

const renderInPageNavigation = ({heading, headingType, ...args}) =>
    Template({
        component: {
            data: {
                metadata: {
                    heading: {value: heading},
                    headingType: {value: headingType},
                },
            },
        },
        ...args,
    });

export default {
    title: "3. Components/In-page Navigation",
    render: renderInPageNavigation,
    argTypes: {
        heading: {
            description: "The title of the in-page navigation.",
            control: {type: "text"},
        },
        headingType: {
            description: "The type of the heading the in-page navigation will scan for.",
            control: {
                type: "radio",
                labels: {
                    h2: "H2",
                    h3: "H3",
                    h4: "H4",
                    h5: "H5",
                    h6: "H6",
                },
            },
            options: ["h2", "h3", "h4", "h5", "h6"],
            table: {
                defaultValue: {summary: "h2"},
            },
        },
    },
    args: {
        heading: "On this page",
        headingType: "h2",
    },
    parameters: {
        design: {
            type: "figma",
            url: figmaLinks.inPageNavigation.design,
        },
    },
    decorators: [
        (Story, context) => {
            // Default IDs for headings. Simulates the publisher not adding custom ID's to the page headings which is a
            // common scenario
            if (!context.args.ids) {
                context.args.ids = ["", "", "", "", "", "", "", "", "", "", "", "", "", "", ""];
            }
            let dummyHeadings = ``;

            dummyHeadings += `<br><div><h2 id="${context.args.ids[0]}">H2 Overview</h2><p>${dummyText}</div><br>`;
            dummyHeadings += `<br><div><h3 id="${context.args.ids[1]}">H3 Overview</h3><p>${dummyText}</div><br>`;
            dummyHeadings += `<br><div><h4 id="${context.args.ids[2]}">H4 Overview</h4><p>${dummyText}</div><br>`;
            dummyHeadings += `<br><div><h5 id="${context.args.ids[3]}">H5 Overview</h5><p>${dummyText}</div><br>`;
            dummyHeadings += `<br><div><h6 id="${context.args.ids[4]}">H6 Overview</h6><p>${dummyText}</div><br>`;
            dummyHeadings += `<br><div><h2 id="${context.args.ids[5]}">H2 Example</h2><p>${dummyText}</div><br>`;
            dummyHeadings += `<br><div><h3 id="${context.args.ids[6]}">H3 Example</h3><p>${dummyText}</div><br>`;
            dummyHeadings += `<br><div><h4 id="${context.args.ids[7]}">H4 Example</h4><p>${dummyText}</div><br>`;
            dummyHeadings += `<br><div><h5 id="${context.args.ids[8]}">H5 Example</h5><p>${dummyText}</div><br>`;
            dummyHeadings += `<br><div><h6 id="${context.args.ids[9]}">H6 Example</h6><p>${dummyText}</div><br>`;
            dummyHeadings += `<br><div><h2 id="${context.args.ids[10]}">H2 Usage guidelines</h2><p>${dummyText}</div><br>`;
            dummyHeadings += `<br><div><h3 id="${context.args.ids[11]}">H3 Usage guidelines</h3><p>${dummyText}</div><br>`;
            dummyHeadings += `<br><div><h4 id="${context.args.ids[12]}">H4 Usage guidelines</h4><p>${dummyText}</div><br>`;
            dummyHeadings += `<br><div><h5 id="${context.args.ids[13]}">H5 Usage guidelines</h5><p>${dummyText}</div><br>`;
            dummyHeadings += `<br><div><h6 id="${context.args.ids[14]}">H6 Usage guidelines</h6><p>${dummyText}</div><br>`;
            return `<section><div class="container-fluid"><div id="content">${Story()}${dummyHeadings}</div></div></section>`;
        },
    ],
};

export const Default = {};
export const headingLevel3 = {args: {headingType: "h3"}};
export const headingLevel4 = {args: {headingType: "h4"}};
export const headingLevel5 = {args: {headingType: "h5"}};
export const headingLevel6 = {args: {headingType: "h6"}};
export const customIdentifiers = {
    args: {ids: ["id-1", "id-2", "id-3", "id-4", "id-5", "id-6", "id-7", "id-8", "id-9", "id-10", "id-11", "id-12", "id-13", "id-14", "id-15"]},
};
export const duplicateIdentifiers = {
    args: {
        ids: ["same-id", "same-id", "same-id", "same-id", "same-id", "same-id", "same-id", "same-id", "same-id", "same-id", "same-id", "same-id", "same-id", "same-id", "same-id"],
    },
};
