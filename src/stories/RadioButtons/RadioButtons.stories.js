import { RadioButtons } from "./RadioButtons";
import { themes, figmaLinks } from "../../../.storybook/globals";

const radioButtonsArgs = {
    id: "rb1",
    legend: "Radio buttons legend",
    hintText: "",
    isRequired: false,
    inError: false,
    errorMessage: "Error message",
    inSuccess: false,
    successMessage: "Success message",
    inputs: [
        { id: "rb11", label: "Option 1", checked: true, disabled: false, inError: false, inSuccess: false },
        { id: "rb12", label: "Option 2", checked: false, disabled: false, inError: false, inSuccess: false },
        { id: "rb13", label: "Option 3", checked: true, disabled: false, inError: false, inSuccess: false },
        { id: "rb14", label: "Option 4", checked: false, disabled: false, inError: false, inSuccess: false },
        { id: "rb15", label: "Option 5", checked: true, disabled: false, inError: false, inSuccess: false },
    ],
    isSmall: false,
};

export default {
    title: "Components/Radio Buttons",
    render: (args) => RadioButtons(args),
    argTypes: {
        id: { control: "text", description: "The id for this component" },
        legend: { control: "text", description: "The legend of the radio button group" },
        hintText: { control: "text", description: "The hint text of the radio button group" },
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
            { id: "rb21", label: "Option 1", checked: true, disabled: true },
            { id: "rb22", label: "Option 2", checked: false, disabled: true },
            { id: "rb23", label: "Option 3", checked: true, disabled: true },
            { id: "rb24", label: "Option 4", checked: false, disabled: true },
            { id: "rb25", label: "Option 5", checked: true, disabled: true },
        ],
    });
disabledVariant.tags = ["!dev"];

export const errorVariant = (radioButtonsArgs) =>
    RadioButtons({
        ...radioButtonsArgs,
        id: "rb3",
        inError: true,
        errorMessage: "Error message",
        inSuccess: false,
        successMessage: "Success message",
        inputs: [
            { id: "rb31", label: "Option 1", checked: true, inError: true, inSuccess: false },
            { id: "rb32", label: "Option 2", checked: false, inError: true, inSuccess: false },
            { id: "rb33", label: "Option 3", checked: true, inError: true, inSuccess: false },
            { id: "rb34", label: "Option 4", checked: false, inError: true, inSuccess: false },
            { id: "rb35", label: "Option 5", checked: true, inError: true, inSuccess: false },
        ],
    });
errorVariant.tags = ["!dev"];

export const successVariant = (radioButtonsArgs) =>
    RadioButtons({
        ...radioButtonsArgs,
        id: "rb4",
        inError: false,
        errorMessage: "Error message",
        inSuccess: true,
        successMessage: "Success message",
        inputs: [
            { id: "rb41", label: "Option 1", checked: true, inError: false, inSuccess: true },
            { id: "rb42", label: "Option 2", checked: false, inError: false, inSuccess: true },
            { id: "rb43", label: "Option 3", checked: true, inError: false, inSuccess: true },
            { id: "rb44", label: "Option 4", checked: false, inError: false, inSuccess: true },
            { id: "rb45", label: "Option 5", checked: true, inError: false, inSuccess: true },
        ],
    });
successVariant.tags = ["!dev"];

export const requiredVariant = (radioButtonsArgs) =>
    RadioButtons({
        ...radioButtonsArgs,
        id: "rb5",
        isRequired: true,
        inputs: [
            { id: "rb51", label: "Option 1", checked: true },
            { id: "rb52", label: "Option 2", checked: false },
            { id: "rb53", label: "Option 3", checked: true },
            { id: "rb54", label: "Option 4", checked: false },
            { id: "rb55", label: "Option 5", checked: true },
        ],
    });
requiredVariant.tags = ["!dev"];

export const smallVariant = (radioButtonsArgs) =>
    RadioButtons({
        ...radioButtonsArgs,
        id: "rb6",
        inputs: [
            { id: "rb61", label: "Option 1", checked: true },
            { id: "rb62", label: "Option 2", checked: false },
            { id: "rb63", label: "Option 3", checked: true },
            { id: "rb64", label: "Option 4", checked: false },
            { id: "rb65", label: "Option 5", checked: true },
        ],
        isSmall: true,
    });
smallVariant.tags = ["!dev"];

export const hintTextVariant = (radioButtonsArgs) =>
    RadioButtons({
        ...radioButtonsArgs,
        id: "rb7",
        hintText: "Select one option",
        inputs: [
            { id: "rb71", label: "Option 1", checked: true },
            { id: "rb72", label: "Option 2", checked: false },
            { id: "rb73", label: "Option 3", checked: true },
            { id: "rb74", label: "Option 4", checked: false },
            { id: "rb75", label: "Option 5", checked: true },
        ],
    });
hintTextVariant.tags = ["!dev"];

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
            <h3>Hint text radio buttons</h3>
            ${hintTextVariant(args)}
        </div>
    `;
};
allVariants.tags = ["!dev"];

export const white = {
    args: radioButtonsArgs,
    render: (args) => {
        return allVariants(args, themes["white"]);
    },
};

export const light = {
    args: radioButtonsArgs,
    render: (args) => {
        return allVariants(args, themes["light"]);
    },
};

export const lightAlt = {
    args: radioButtonsArgs,
    render: (args) => {
        return allVariants(args, themes["light alt"]);
    },
};

export const dark = {
    args: radioButtonsArgs,
    render: (args) => {
        return allVariants(args, themes["dark"]);
    },
};

export const darkAlt = {
    args: radioButtonsArgs,
    render: (args) => {
        return allVariants(args, themes["dark alt"]);
    },
};
