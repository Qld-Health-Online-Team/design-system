import { RadioButtons } from "./RadioButtons";
import { themes, figmaLinks } from "../../../.storybook/globals";

const radioButtonsArgs = {
    id: "rb1",
    legend: "My legend",
    isRequired: false,
    inError: false,
    errorMessage: "Uh oh",
    inSuccess: false,
    successMessage: "Success!",
    inputs: [
        { id: "rb11", label: "cat", checked: true, disabled: false, inError: false, inSuccess: false },
        { id: "rb12", label: "dog", checked: false, disabled: false, inError: false, inSuccess: false },
        { id: "rb13", label: "horse", checked: true, disabled: false, inError: false, inSuccess: false },
        { id: "rb14", label: "ram", checked: false, disabled: false, inError: false, inSuccess: false },
        { id: "rb15", label: "goat", checked: true, disabled: false, inError: false, inSuccess: false },
    ],
    isSmall: false,
};

export default {
    title: "Components/Radio Buttons",
    render: (args) => RadioButtons(args),
    argTypes: {
        id: { control: "text", description: "The id for this component" },
        legend: { control: "text", description: "The legend of the radio button group" },
        isRequired: { control: "boolean", description: "If the component requires a response" },
        inError: { control: "boolean", description: "If the entire component is in an error state", if: { arg: "inSuccess", eq: false } },
        errorMessage: { control: "text", description: "The error message to be displayed if component is in error" },
        inSuccess: { control: "boolean", description: "If the entire component is in a success state", if: { arg: "inError", eq: false } },
        successMessage: { control: "text", description: "The success message to be displayed if component is in success" },
        inputs: {
            control: "array",
            description: "The inputs of the group",
        },
        isSmall: { control: "boolean", description: "If the radio buttons should use it's smaller variant" },
    },
    args: { ...radioButtonsArgs },
    parameters: {
        design: {
            type: "figma",
            url: figmaLinks.radioButtons.design,
        },
    },
};

export const Default = {
    args: {
        ...radioButtonsArgs,
    },
};

export const defaultVariant = (radioButtonsArgs) => RadioButtons({ ...radioButtonsArgs });
defaultVariant.tags = ["!dev"];

export const disabledVariant = (radioButtonsArgs) =>
    RadioButtons({
        ...radioButtonsArgs,
        id: "rb2",
        inputs: [
            { id: "rb21", label: "cat", checked: true, disabled: true },
            { id: "rb22", label: "dog", checked: false, disabled: true },
            { id: "rb23", label: "horse", checked: true, disabled: true },
            { id: "rb24", label: "ram", checked: false, disabled: true },
            { id: "rb25", label: "goat", checked: true, disabled: true },
        ],
    });
disabledVariant.tags = ["!dev"];

export const errorVariant = (radioButtonsArgs) =>
    RadioButtons({
        ...radioButtonsArgs,
        id: "rb3",
        inError: true,
        errorMessage: "Uh oh",
        inSuccess: false,
        successMessage: "Success!",
        inputs: [
            { id: "rb31", label: "cat", checked: true, inError: true, inSuccess: false },
            { id: "rb32", label: "dog", checked: false, inError: true, inSuccess: false },
            { id: "rb33", label: "horse", checked: true, inError: true, inSuccess: false },
            { id: "rb34", label: "ram", checked: false, inError: true, inSuccess: false },
            { id: "rb35", label: "goat", checked: true, inError: true, inSuccess: false },
        ],
    });
errorVariant.tags = ["!dev"];

export const successVariant = (radioButtonsArgs) =>
    RadioButtons({
        ...radioButtonsArgs,
        id: "rb4",
        inError: false,
        errorMessage: "Uh oh",
        inSuccess: true,
        successMessage: "Success!",
        inputs: [
            { id: "rb41", label: "cat", checked: true, inError: false, inSuccess: true },
            { id: "rb42", label: "dog", checked: false, inError: false, inSuccess: true },
            { id: "rb43", label: "horse", checked: true, inError: false, inSuccess: true },
            { id: "rb44", label: "ram", checked: false, inError: false, inSuccess: true },
            { id: "rb45", label: "goat", checked: true, inError: false, inSuccess: true },
        ],
    });
successVariant.tags = ["!dev"];

export const requiredVariant = (radioButtonsArgs) =>
    RadioButtons({
        ...radioButtonsArgs,
        id: "rb5",
        isRequired: true,
        inputs: [
            { id: "rb51", label: "cat", checked: true },
            { id: "rb52", label: "dog", checked: false },
            { id: "rb53", label: "horse", checked: true },
            { id: "rb54", label: "ram", checked: false },
            { id: "rb55", label: "goat", checked: true },
        ],
    });
requiredVariant.tags = ["!dev"];

export const smallVariant = (radioButtonsArgs) =>
    RadioButtons({
        ...radioButtonsArgs,
        id: "rb6",
        inputs: [
            { id: "rb61", label: "cat", checked: true },
            { id: "rb62", label: "dog", checked: false },
            { id: "rb63", label: "horse", checked: true },
            { id: "rb64", label: "ram", checked: false },
            { id: "rb65", label: "goat", checked: true },
        ],
        isSmall: true,
    });
smallVariant.tags = ["!dev"];

export const allVariants = (args, theme) => {
    return `
        <div class="${theme}" style="padding: 2rem;">
            <h3>Default radio buttons</h3>
            ${defaultVariant(args)}
            <h3>Disabled radio buttons</h3>
            ${disabledVariant(args)}
            <h3>Error radio buttons</h3>
            ${errorVariant(args)}
            <h3>Success radio buttons</h3>
            ${successVariant(args)}
            <h3>Required radio buttons</h3>
            ${requiredVariant(args)}
            <h3>Small radio buttons</h3>
            ${smallVariant(args)}
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
    args: radioButtonsArgs,
    argTypes: allVariantsArgTypes,
    render: (args) => {
        return allVariants(args, themes["white"]);
    },
};

export const light = {
    args: radioButtonsArgs,
    argTypes: allVariantsArgTypes,
    render: (args) => {
        return allVariants(args, themes["light"]);
    },
};

export const lightAlt = {
    args: radioButtonsArgs,
    argTypes: allVariantsArgTypes,
    render: (args) => {
        return allVariants(args, themes["light alt"]);
    },
};

export const dark = {
    args: radioButtonsArgs,
    argTypes: allVariantsArgTypes,
    render: (args) => {
        return allVariants(args, themes["dark"]);
    },
};

export const darkAlt = {
    args: radioButtonsArgs,
    argTypes: allVariantsArgTypes,
    render: (args) => {
        return allVariants(args, themes["dark alt"]);
    },
};
