import { SelectBox } from "./SelectBox";
import { themes, figmaLinks } from "../../../.storybook/globals";

const selectBoxArgs = {
    id: "select1",
    isFilled: false,
    isRequired: false,
    isDisabled: false,
    label: "My select box",
    hintText: "My secret hint",
    state: "default",
    succcessMessage: "You're all good!",
    errorMessage: "Error, try again",
    defaultOption: { value: "", label: "You must select something" },
    options: [
        { value: "dog", label: "Dog" },
        { value: "cat", label: "Cat" },
        { value: "hamster", label: "Hamster" },
        { value: "parrot", label: "Parrot" },
        { value: "duck", label: "Duck" },
    ],
};

export default {
    title: "Components/SelectBox",
    render: (args) => SelectBox(args),
    argTypes: {
        id: { control: "text", description: "The id for this component" },
        isFilled: {
            name: "is_filled",
            control: "boolean",
            description: "Whether the input field has a full border",
            table: {
                defaultValue: { summary: "false" },
            },
        },
        isDisabled: {
            name: "is_disabled",
            control: "boolean",
            description: "Whether the select field has been disabled",
            table: {
                defaultValue: { summary: "false" },
            },
        },
        label: { control: "text", description: "The top-most label for this component" },
        hintText: { control: "text", description: "The text underneath label for supporting text" },
        state: {
            control: {
                type: "radio",
                labels: {
                    default: "Default",
                    success: "Success",
                    error: "Error",
                },
            },
            options: ["default", "success", "error"],
            description: "The type of SelectBox that will be displayed",
            table: {
                defaultValue: { summary: "default" },
            },
        },
        succcessMessage: { control: "text", description: "The message that will be displayed if the select is valid", if: { arg: "state", eq: "success" } },
        errorMessage: { control: "text", description: "The message that will be displayed if the select is in error", if: { arg: "state", eq: "error" } },
        defaultOption: {
            control: "object",
            description: "The default option for this select",
            table: {
                defaultValue: {
                    summary: `{ value: "", label: "--Select an option--" }`,
                },
            },
        },
        options: {
            control: "array",
            description: "The options select",
        },
    },
    args: { ...selectBoxArgs },
    parameters: {
        design: {
            type: "figma",
            url: figmaLinks.selectBox.design,
        },
    },
};

export const Default = {
    args: {
        ...selectBoxArgs,
    },
};

export const defaultVariant = (selectBoxArgs) => SelectBox({ ...selectBoxArgs, id: "select2" });
defaultVariant.tags = ["!dev"];

export const successVariant = (selectBoxArgs) => SelectBox({ ...selectBoxArgs, id: "select3", state: "success", succcessMessage: "AMAZING!" });
successVariant.tags = ["!dev"];

export const errorVariant = (selectBoxArgs) => SelectBox({ ...selectBoxArgs, id: "select4", state: "error", errorMessage: "Oh no." });
errorVariant.tags = ["!dev"];

export const filledVariant = (selectBoxArgs) => SelectBox({ ...selectBoxArgs, id: "select5", isFilled: true });
filledVariant.tags = ["!dev"];

export const requiredVariant = (selectBoxArgs) => SelectBox({ ...selectBoxArgs, id: "select6", isRequired: true });
requiredVariant.tags = ["!dev"];

export const disabledVariant = (selectBoxArgs) => SelectBox({ ...selectBoxArgs, id: "select7", isDisabled: true });
disabledVariant.tags = ["!dev"];

export const allVariants = (args, theme) => {
    return `
        <div class="${theme}" style="padding: 2rem;">
            <h3>Default select box</h3>
            ${defaultVariant(args)}
            <h3>Success select box</h3>
            ${successVariant(args)}
            <h3>Error select box</h3>
            ${errorVariant(args)}
            <h3>Filled select box</h3>
            ${filledVariant(args)}
            <h3>Required select box</h3>
            ${requiredVariant(args)}
            <h3>Disabled select box</h3>
            ${disabledVariant(args)}
        </div>
    `;
};
const allVariantsArgTypes = {
    type: {
        table: {
            disable: true,
        },
    },
    isLargeTag: {
        table: {
            disable: true,
        },
    },
};
allVariants.tags = ["!dev"];

export const white = {
    args: selectBoxArgs,
    argTypes: allVariantsArgTypes,
    render: (args) => {
        return allVariants(args, themes["white"]);
    },
};

export const light = {
    args: selectBoxArgs,
    argTypes: allVariantsArgTypes,
    render: (args) => {
        return allVariants(args, themes["light"]);
    },
};

export const lightAlt = {
    args: selectBoxArgs,
    argTypes: allVariantsArgTypes,
    render: (args) => {
        return allVariants(args, themes["light alt"]);
    },
};

export const dark = {
    args: selectBoxArgs,
    argTypes: allVariantsArgTypes,
    render: (args) => {
        return allVariants(args, themes["dark"]);
    },
};

export const darkAlt = {
    args: selectBoxArgs,
    argTypes: allVariantsArgTypes,
    render: (args) => {
        return allVariants(args, themes["dark alt"]);
    },
};
