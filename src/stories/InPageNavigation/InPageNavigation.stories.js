import Handlebars from "handlebars";
import Template from "../../components/in_page_navigation/html/component.hbs?raw";
import { figmaLinks, themes } from "../../../.storybook/globals";
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
            description: "The heading level of the alert, for example H1, H6. The sole purpose of this variable is to change the semantic HTML tag used, not the visual appearance",
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
};

export const Default = {
    render: (args) => {
        return inPageNavWithHeadings({ ...args });
    },
};

export const inPageNavWithHeadings = (args) => {
    // Default IDs for headings. Simulates the publisher not adding custom ID's to the page headings which is a common scenario
    if (!args.ids) {
        args.ids = ["", "", "", "", "", "", "", "", "", "", "", "", "", "", ""];
    }
    let inPageNavComponent = renderInPageNavigation(args);
    let headingsString = `<br><section><div class="container-fluid"><div id="content">`;

    // Add a note to storybook users that colour themes don't yet work
    if (args.inPageNavWarning) {
        headingsString += `<p style="font-weight: bold; font-size: 28px;">Note: In-page navigation has not been calibrated for theme usage as it is self contained in it's own 'qld__body' class. To be addressed in component service.</p>`;
    }

    headingsString += `<br><div><h2 id="${args.ids[0]}">H2 Overview</h2><p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.</div><br>`;
    headingsString += `<br><div><h3 id="${args.ids[1]}">H3 Overview</h3><p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.</div><br>`;
    headingsString += `<br><div><h4 id="${args.ids[2]}">H4 Overview</h4><p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.</div><br>`;
    headingsString += `<br><div><h5 id="${args.ids[3]}">H5 Overview</h5><p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.</div><br>`;
    headingsString += `<br><div><h6 id="${args.ids[4]}">H6 Overview</h6><p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.</div><br>`;
    headingsString += `<br><div><h2 id="${args.ids[5]}">H2 Example</h2><p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.</div><br>`;
    headingsString += `<br><div><h3 id="${args.ids[6]}">H3 Example</h3><p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.</div><br>`;
    headingsString += `<br><div><h4 id="${args.ids[7]}">H4 Example</h4><p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.</div><br>`;
    headingsString += `<br><div><h5 id="${args.ids[8]}">H5 Example</h5><p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.</div><br>`;
    headingsString += `<br><div><h6 id="${args.ids[9]}">H6 Example</h6><p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.</div><br>`;
    headingsString += `<br><div><h2 id="${args.ids[10]}">H2 Usage guidelines</h2><p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.</div><br>`;
    headingsString += `<br><div><h3 id="${args.ids[11]}">H3 Usage guidelines</h3><p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.</div><br>`;
    headingsString += `<br><div><h4 id="${args.ids[12]}">H4 Usage guidelines</h4><p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.</div><br>`;
    headingsString += `<br><div><h5 id="${args.ids[13]}">H5 Usage guidelines</h5><p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.</div><br>`;
    headingsString += `<br><div><h6 id="${args.ids[14]}">H6 Usage guidelines</h6><p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.</div><br>`;
    headingsString += "</div></div></section>";
    return inPageNavComponent + headingsString;
};
inPageNavWithHeadings.tags = ["!dev"];

export const headingLevel3 = {
    render: (args) => {
        return inPageNavWithHeadings({ ...args, headingType: "h3" });
    },
};

export const headingLevel4 = {
    render: (args) => {
        return inPageNavWithHeadings({ ...args, headingType: "h4" });
    },
};

export const headingLevel5 = {
    render: (args) => {
        return inPageNavWithHeadings({ ...args, headingType: "h5" });
    },
};

export const headingLevel6 = {
    render: (args) => {
        return inPageNavWithHeadings({ ...args, headingType: "h6" });
    },
};

export const customIdentifiers = {
    render: (args) => {
        return inPageNavWithHeadings({ ...args, ids: ["class-1", "class-2", "class-3", "class-4", "class-5", "class-6", "class-7", "class-8", "class-9", "class-10", "class-11", "class-12", "class-13", "class-14", "class-15"] });
    },
};

export const duplicateIdentifiers = {
    render: (args) => {
        return inPageNavWithHeadings({
            ...args,
            ids: ["same-class", "same-class", "same-class", "same-class", "same-class", "same-class", "same-class", "same-class", "same-class", "same-class", "same-class", "same-class", "same-class", "same-class", "same-class"],
        });
    },
};

export const white = {
    render: (args) => {
        return themeWrapper(themes["white"], inPageNavWithHeadings({ ...args }));
    },
};

export const light = {
    render: (args) => {
        return themeWrapper(themes["light"], inPageNavWithHeadings({ ...args, inPageNavWarning: true }));
    },
};

export const lightAlt = {
    render: (args) => {
        return themeWrapper(themes["light alt"], inPageNavWithHeadings({ ...args, inPageNavWarning: true }));
    },
};

export const dark = {
    render: (args) => {
        return themeWrapper(themes["dark"], inPageNavWithHeadings({ ...args, inPageNavWarning: true }));
    },
};

export const darkAlt = {
    render: (args) => {
        return themeWrapper(themes["dark alt"], inPageNavWithHeadings({ ...args, inPageNavWarning: true }));
    },
};
