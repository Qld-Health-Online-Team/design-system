import Handlebars from "handlebars";
import Template from "../../components/page_alert/html/component.hbs?raw";
import { figmaLinks } from "../../../.storybook/globals";

const renderInPageAlert = ({ assetid, id_field, type, heading_level, heading, body, ...args }) =>
    Handlebars.compile(Template)({
        component: {
            data: {
                assetid: assetid,
                metadata: {
                    id_field: { value: id_field },
                    type: { value: type },
                    heading_level: { value: heading_level },
                    heading: { value: heading },
                    body: { value: body },
                },
            },
        },
        ...args,
    });

const inPageAlertArgs = {
    assetid: "12345",
    id_field: "123",
    type: "info",
    heading_level: "h2",
    heading: "In-page alert title",
    body: "Woohoo! This is the body of my in-page alert",
};

export default {
    title: "Components/In-page Alert",
    render: renderInPageAlert,
    argTypes: {
        assetid: { control: "text" },
        id_field: { control: "text" },
        type: {
            control: "select",
            options: ["info", "success", "error", "warning"],
            description: "The type of the alert. For example informational, error",
            table: {
                defaultValue: { summary: "info" },
            },
        },
        heading_level: {
            control: "select",
            options: ["h1", "h2", "h3", "h4", "h5", "h6"],
            description: "The heading level of the alert, for example H1, H6. The sole purpose of this variable is to change the semantic HTML tag used, not the visual appearance",
            table: {
                defaultValue: { summary: "h2" },
            },
        },
        heading: { control: "text", description: "The heading of the alert" },
        body: { control: "text", description: "The body text of the alert" },
    },
    args: { ...inPageAlertArgs },
    parameters: {
        design: {
            type: "figma",
            url: figmaLinks.inPageAlert.design,
        },
    },
};

export const Default = {
    args: {
        ...inPageAlertArgs,
    },
};

export const Info = {
    args: {
        ...inPageAlertArgs,
        type: "info",
    },
    tags: ["!dev"],
};

export const Success = {
    args: {
        ...inPageAlertArgs,
        type: "success",
    },
    tags: ["!dev"],
};

export const Warning = {
    args: {
        ...inPageAlertArgs,
        type: "warning",
    },
    tags: ["!dev"],
};

export const Error = {
    args: {
        ...inPageAlertArgs,
        type: "error",
    },
    tags: ["!dev"],
};
