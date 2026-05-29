import Template from "../../components/loading_spinner/html/component.hbs";
import { figmaLinks } from "../../../.storybook/globals";

const renderLoadingSpinner = ({backgroundColour, layout, label, ...args}) =>
    Template({
        component: {
            data: {
                metadata: {
                    background_colour: {value: backgroundColour},
                    layout: {value: layout},
                    label: {value: label},
                },
            },
        },
        ...args,
    });

export default {
    title: "3. Components/Loading Spinner",
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
        label: {description: "The label underneath the spinner.", control: "text"},
    },
    args: {
        backgroundColour: "",
        layout: "",
        label: "Loading...",
    },
    parameters: {
        design: {
            type: "figma",
            url: figmaLinks.loadingSpinner.design,
        },
    },
};

export const Default = {};

export const landscape = {
    args: {layout: "landscape"}
};

export const iconOnly = {
    args: {layout: "icon_only"}
};

export const dark = {
    args: {backgroundColour: "dark"}
};
