import Handlebars from "handlebars";
import Template from "../../components/loading_spinner/html/component.hbs?raw";
import { figmaLinks } from "../../../.storybook/globals";

const renderLoadingSpinner = ({ backgroundColour, layout, label, ...args }) =>
    Handlebars.compile(Template)({
        component: {
            data: {
                metadata: {
                    background_colour: { value: backgroundColour },
                    layout: { value: layout },
                    label: { value: label },
                },
            },
        },
        ...args,
    });

const loadingSpinnerArgs = {
    backgroundColour: "",
    layout: "",
    label: "Loading...",
};

export default {
    title: "Components/Loading Spinner",
    render: renderLoadingSpinner,
    argTypes: {
        backgroundColour: {
            description: "The background colour of the loading spinner.",
            control: {
                type: "radio",
                labels: {
                    "": "Light",
                    dark: "Dark",
                },
            },
            options: ["", "dark"],
        },
        layout: {
            description: "The layout of the spinner and its label.",
            control: {
                type: "radio",
                labels: {
                    "": "Stacked",
                    landscape: "Landscape",
                    icon_only: "Icon only",
                },
            },
            options: ["", "landscape", "icon_only"],
        },
        label: { description: "The label underneath the spinner.", control: "text" },
    },
    args: loadingSpinnerArgs,
    parameters: {
        design: {
            type: "figma",
            url: figmaLinks.loadingSpinner.design,
        },
    },
};

export const Default = {};

export const landscape = {
    render: () => {
        return renderLoadingSpinner({ ...loadingSpinnerArgs, layout: "landscape" });
    },
};

export const iconOnly = {
    render: () => {
        return renderLoadingSpinner({ ...loadingSpinnerArgs, layout: "icon_only" });
    },
};

export const dark = {
    render: () => {
        return renderLoadingSpinner({ ...loadingSpinnerArgs, backgroundColour: "dark" });
    },
};
