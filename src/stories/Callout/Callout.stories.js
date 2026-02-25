import Handlebars from "handlebars";
import Template from "../../components/callout/html/component.hbs?raw";
import { figmaLinks, themes } from "../../../.storybook/globals";

const renderCallout = ({ assetId, idField, bodyBackground, type, background, heading, headingVisible, body, calendarIntro, calendarDate, calendarName, ...args }) =>
    Handlebars.compile(Template)({
        component: {
            assetid: assetId,
            data: {
                metadata: {
                    id_field: { value: idField },
                    body_background: { value: bodyBackground },
                    type: { value: type },
                    background: { value: background },
                    heading: { value: heading },
                    heading_visible: { value: headingVisible },
                    body: { value: body },
                    calendar_intro: { value: calendarIntro },
                    calendar_date: { value: calendarDate },
                    calendar_name: { value: calendarName },
                },
            },
        },
        ...args,
    });

const calloutArgs = {
    assetId: "Callout-123",
    idField: "Callout-123",
    bodyBackground: "",
    type: "",
    background: "",
    heading: "Title of the callout",
    headingVisible: "",
    body: "Description of the callout. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Leo, ac ipsum consequat, enim consequat viverra ut eu feugiat. Sed vitae scelerisque aliquet mauris malesuada.",
    calendarIntro: "The next public holiday is:",
    calendarDate: "Sunday 1 January 2026",
    calendarName: "New Year's Day",
};

export default {
    title: "3. Components/Callout",
    render: renderCallout,
    argTypes: {
        assetId: { description: "The ID of the asset.", control: "text" },
        idField: { description: "The ID of the field.", control: "text" },
        bodyBackground: {
            description: "The background colour of the callout body.",
            control: {
                type: "radio",
                labels: {
                    "": "White",
                    "qld__body--light": "Light",
                    "qld__body--alt": "Alternate",
                    "qld__body--dark": "Dark",
                    "qld__body--dark-alt": "Dark Alternate",
                },
            },
            options: ["", "qld__body--light", "qld__body--alt", "qld__body--dark", "qld__body--dark-alt"],
        },
        type: {
            description: "The background colour of the callout body.",
            control: {
                type: "radio",
                labels: {
                    "": "Callout",
                    "qld__callout--calendar-event": "Calendar",
                },
            },
            options: ["", "qld__callout--calendar-event"],
        },
        background: {
            description: "The theme of the callout body.",
            control: {
                type: "radio",
                labels: {
                    "": "White",
                    "qld__callout--light": "Light",
                    "qld__callout--alt": "Alternate",
                    "qld__callout--dark": "Dark",
                    "qld__callout--dark-alt": "Dark Alternate",
                },
            },
            options: ["", "qld__callout--light", "qld__callout--alt", "qld__callout--dark", "qld__callout--dark-alt"],
        },
        heading: { description: "The heading of the callout.", control: "text" },
        headingVisible: {
            description: "Whether the heading is visible.",
            control: {
                type: "radio",
                labels: {
                    "": "Yes",
                    "qld__callout__heading--sronly": "No",
                },
            },
            options: ["", "qld__callout__heading--sronly"],
        },
        body: { description: "The body of the callout.", control: "text" },
        calendarIntro: { description: "The calendar introduction of the callout.", control: "text" },
        calendarDate: { description: "The calendar date of the callout.", control: "text" },
        calendarName: { description: "The calendar name of the callout.", control: "text" },
    },
    args: calloutArgs,
    parameters: {
        design: {
            type: "figma",
            url: figmaLinks.callout.design,
        },
    },
};

export const Default = {};

export const allVariants = (theme, background) => {
    return `
        <div class="${theme}" style="padding: 2rem;">
            <h3>Callout</h3>
            ${renderCallout({ ...calloutArgs, bodyBackground: background })}
            <h3>Calendar Event</h3>
            ${renderCallout({ ...calloutArgs, type: "qld__callout--calendar-event", bodyBackground: background })}
        </div>
    `;
};
allVariants.tags = ["!dev"];

export const noTitle = {
    render: () => {
        return renderCallout({ ...calloutArgs, headingVisible: "qld__callout__heading--sronly" });
    },
};

export const noBody = {
    render: () => {
        return renderCallout({ ...calloutArgs, body: "" });
    },
};

export const calendar = {
    render: () => {
        return renderCallout({ ...calloutArgs, type: "qld__callout--calendar-event" });
    },
};

export const white = {
    render: () => {
        return allVariants("");
    },
};

export const light = {
    render: () => {
        return allVariants(themes["light"], "qld__body--light");
    },
};

export const alternative = {
    render: () => {
        return allVariants(themes["light alt"], "qld__body--alt");
    },
};

export const dark = {
    render: () => {
        return allVariants(themes["dark"], "qld__body--dark");
    },
};

export const darkAlt = {
    render: () => {
        return allVariants(themes["dark alt"], "qld__body--dark-alt");
    },
};
