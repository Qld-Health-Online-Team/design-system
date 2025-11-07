import { BackToTop } from "./BackToTop";
import { figmaLinks } from "../../../.storybook/globals";

const backtotopArgs = {
    text: "Back to top",
};

export default {
    title: "Components/BackToTop",
    render: (args) => BackToTop(args), // calls the function
    argTypes: {
        text: { control: "text", description: "Back to top" },
    },
    args: {
        ...backtotopArgs,
    },
    parameters: {
        design: {
            type: "figma",
            url: figmaLinks.backToTop.design,
        },
    },
};

// Named story
export const Default = {
    args: { ...backtotopArgs },
};
