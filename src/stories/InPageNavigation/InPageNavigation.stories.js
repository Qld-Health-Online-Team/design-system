import Handlebars from "handlebars";
import Template from "../../components/in_page_navigation/html/component.hbs?raw";
import { figmaLinks, themes, dummyText } from "../../../.storybook/globals";
import { themeWrapper } from "../../../.storybook/helper-functions";

const renderInPageNavigation = ({ heading, headingType, ...args }) =>
    Handlebars.compile(Template)({
        component: {
            data: {
                metadata: {
                    heading: { value: heading },
                    headingType: { value: headingType },
                },
            },
        },
        ...args,
    });

const inPageNavigationArgs = {
    heading: "On this page",
    headingType: "h2",
};

export default {
    title: "3. Components/In-page Navigation",
    render: renderInPageNavigation,
    argTypes: {
        heading: {
            description: "The title of the in-page navigation.",
            control: { type: "text" },
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
                defaultValue: { summary: "h2" },
            },
        },
    },
    args: inPageNavigationArgs,
    parameters: {
        design: {
            type: "figma",
            url: figmaLinks.inPageNavigation.design,
        },
    },
    decorators: [
        (Story, context) => {
            // Default IDs for headings. Simulates the publisher not adding custom ID's to the page headings which is a common scenario
            if (!context.args.ids) {
                context.args.ids = ["", "", "", "", "", "", "", "", "", "", "", "", "", "", ""];
            }
            let dummyHeadings = ``;

            // Add a note to storybook users that colour themes don't yet work
            if (context.args.inPageNavWarning) {
                dummyHeadings += `<p style="font-weight: bold; font-size: 28px;">Note: In-page navigation has not been calibrated for theme usage as it is self contained in it's own 'qld__body' class. To be addressed in component service.</p>`;
            }

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
export const headingLevel3 = { args: { headingType: "h3" } };
export const headingLevel4 = { args: { headingType: "h4" } };
export const headingLevel5 = { args: { headingType: "h5" } };
export const headingLevel6 = { args: { headingType: "h6" } };
export const customIdentifiers = {
    args: { ids: ["class-1", "class-2", "class-3", "class-4", "class-5", "class-6", "class-7", "class-8", "class-9", "class-10", "class-11", "class-12", "class-13", "class-14", "class-15"] },
};
export const duplicateIdentifiers = {
    args: {
        ids: ["same-class", "same-class", "same-class", "same-class", "same-class", "same-class", "same-class", "same-class", "same-class", "same-class", "same-class", "same-class", "same-class", "same-class", "same-class"],
    },
};
export const white = {
    render: (args) => {
        return themeWrapper(themes["white"], renderInPageNavigation({ ...args }));
    },
};
export const light = {
    render: (args) => {
        return themeWrapper(themes["light"], renderInPageNavigation({ ...args, inPageNavWarning: true }));
    },
};
export const lightAlt = {
    render: (args) => {
        return themeWrapper(themes["light alt"], renderInPageNavigation({ ...args, inPageNavWarning: true }));
    },
};
export const dark = {
    render: (args) => {
        return themeWrapper(themes["dark"], renderInPageNavigation({ ...args, inPageNavWarning: true }));
    },
};
export const darkAlt = {
    render: (args) => {
        return themeWrapper(themes["dark alt"], renderInPageNavigation({ ...args, inPageNavWarning: true }));
    },
};
