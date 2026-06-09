import Template from "../../components/page_alert/html/component.hbs";
import { storyParams } from "../../../.storybook/globals";

const renderInPageAlert = ({ id, type, headingLevel, heading, body, ...args }) =>
    Template({
        component: {
            data: {
                metadata: {
                    id_field: { value: id },
                    type: { value: type },
                    heading_level: { value: headingLevel },
                    heading: { value: heading },
                    body: { value: body },
                },
            },
        },
        ...args,
    });

export default {
    title: "3. Components/In-page Alert",
    render: renderInPageAlert,
    argTypes: {
        id: { control: "text" },
        type: {
            control: {
                type: "radio",
                labels: {
                    info: "Info",
                    success: "Success",
                    warning: "Warning",
                    error: "Error",
                },
            },
            options: ["info", "success", "error", "warning"],
        },
        headingLevel: {
            name: "heading_level",
            control: {
                type: "radio",
                labels: {
                    h1: "H1",
                    h2: "H2",
                    h3: "H3",
                    h4: "H4",
                    h5: "H5",
                    h6: "H6",
                },
            },
            options: ["h1", "h2", "h3", "h4", "h5", "h6"],
            description: "The heading level of the alert, for example H1, H6. The sole purpose of this variable is to change the semantic HTML tag used, not the visual appearance",
            table: {
                defaultValue: { summary: "h2" },
            },
        },
        heading: { control: "text", description: "The heading of the alert" },
        body: { control: "text", description: "The body text of the alert" },
    },
    args: {
        id: "123",
        type: "info",
        headingLevel: "h2",
        heading: "In-page alert title",
        body: "Woohoo! This is the body of my in-page alert",
    },
    parameters: storyParams("inPageAlert"),
};

export const Default = {};

export const infoVariant = {
    args: { type: "info" },
    tags: ["!dev"],
};

export const successVariant = {
    args: { type: "success" },
    tags: ["!dev"],
};

export const warningVariant = {
    args: { type: "warning" },
    tags: ["!dev"],
};

export const errorVariant = {
    args: { type: "error" },
    tags: ["!dev"],
};
