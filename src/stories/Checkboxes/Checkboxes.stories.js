import { Checkboxes } from "./Checkboxes";
import { themes, figmaLinks } from "../../../.storybook/globals";
import { themeWrapper } from "../../../.storybook/helper-functions";

const checkboxesArgs = {
    id: "cb1",
    legend: "Checkbox legend",
    hintText: "",
    isRequired: false,
    inError: false,
    errorMessage: "Error message",
    inSuccess: false,
    successMessage: "Success message",
    inputs: [
        { id: "cb11", label: "Option 1", checked: true, disabled: false, inError: false, inSuccess: false },
        { id: "cb12", label: "Option 2", checked: false, disabled: false, inError: false, inSuccess: false },
        { id: "cb13", label: "Option 3", checked: true, disabled: false, inError: false, inSuccess: false },
        { id: "cb14", label: "Option 4", checked: false, disabled: false, inError: false, inSuccess: false },
        { id: "cb15", label: "Option 5", checked: true, disabled: false, inError: false, inSuccess: false },
    ],
    isSmall: false,
};

export default {
    title: "3. Components/Checkboxes",
    render: (args) => Checkboxes(args),
    argTypes: {
        id: { control: "text", description: "The id for this component" },
        legend: { control: "text", description: "The legend of the checkbox group" },
        hintText: { control: "text", description: "The hint text of the checkbox group" },
        isRequired: { control: "boolean", description: "If the component requires a response" },
        inError: { control: "boolean", description: "If the entire component is in an error state", if: { arg: "inSuccess", eq: false } },
        errorMessage: { control: "text", description: "The error message to be displayed if component is in error" },
        inSuccess: { control: "boolean", description: "If the entire component is in a success state", if: { arg: "inError", eq: false } },
        successMessage: { control: "text", description: "The success message to be displayed if component is in success" },
        inputs: {
            control: "array",
            description: "The inputs of the group",
        },
        isSmall: { control: "boolean", description: "If the check box should use it's smaller variant" },
    },
    args: { ...checkboxesArgs },
    parameters: {
        design: {
            type: "figma",
            url: figmaLinks.checkboxes.design,
        },
    },
};

export const Default = {};

export const defaultVariant = () => Checkboxes({ ...checkboxesArgs });
defaultVariant.tags = ["!dev"];

export const disabledVariant = () =>
    Checkboxes({
        ...checkboxesArgs,
        id: "cb2",
        inputs: [
            { id: "cb21", label: "Option 1", checked: true, disabled: true },
            { id: "cb22", label: "Option 2", checked: false, disabled: true },
            { id: "cb23", label: "Option 3", checked: true, disabled: true },
            { id: "cb24", label: "Option 4", checked: false, disabled: true },
            { id: "cb25", label: "Option 5", checked: true, disabled: true },
        ],
    });
disabledVariant.tags = ["!dev"];

export const errorVariant = () =>
    Checkboxes({
        ...checkboxesArgs,
        id: "cb3",
        inError: true,
        errorMessage: "Error message",
        inSuccess: false,
        successMessage: "Success message",
        inputs: [
            { id: "cb31", label: "Option 1", checked: true, inError: true, inSuccess: false },
            { id: "cb32", label: "Option 2", checked: false, inError: true, inSuccess: false },
            { id: "cb33", label: "Option 3", checked: true, inError: true, inSuccess: false },
            { id: "cb34", label: "Option 4", checked: false, inError: true, inSuccess: false },
            { id: "cb35", label: "Option 5", checked: true, inError: true, inSuccess: false },
        ],
    });
errorVariant.tags = ["!dev"];

export const successVariant = () =>
    Checkboxes({
        ...checkboxesArgs,
        id: "cb4",
        inError: false,
        errorMessage: "Error message",
        inSuccess: true,
        successMessage: "Success message",
        inputs: [
            { id: "cb41", label: "Option 1", checked: true, inError: false, inSuccess: true },
            { id: "cb42", label: "Option 2", checked: false, inError: false, inSuccess: true },
            { id: "cb43", label: "Option 3", checked: true, inError: false, inSuccess: true },
            { id: "cb44", label: "Option 4", checked: false, inError: false, inSuccess: true },
            { id: "cb45", label: "Option 5", checked: true, inError: false, inSuccess: true },
        ],
    });
successVariant.tags = ["!dev"];

export const requiredVariant = () =>
    Checkboxes({
        ...checkboxesArgs,
        id: "cb5",
        isRequired: true,
        inputs: [
            { id: "cb51", label: "Option 1", checked: true },
            { id: "cb52", label: "Option 2", checked: false },
            { id: "cb53", label: "Option 3", checked: true },
            { id: "cb54", label: "Option 4", checked: false },
            { id: "cb55", label: "Option 5", checked: true },
        ],
    });
requiredVariant.tags = ["!dev"];

export const smallVariant = () =>
    Checkboxes({
        ...checkboxesArgs,
        id: "cb6",
        inputs: [
            { id: "cb61", label: "Option 1", checked: true },
            { id: "cb62", label: "Option 2", checked: false },
            { id: "cb63", label: "Option 3", checked: true },
            { id: "cb64", label: "Option 4", checked: false },
            { id: "cb65", label: "Option 5", checked: true },
        ],
        isSmall: true,
    });
smallVariant.tags = ["!dev"];

export const hintTextVariant = () =>
    Checkboxes({
        ...checkboxesArgs,
        hintText: "Select all that apply",
        id: "cb7",
        inputs: [
            { id: "cb71", label: "Option 1", checked: true },
            { id: "cb72", label: "Option 2", checked: false },
            { id: "cb73", label: "Option 3", checked: true },
            { id: "cb74", label: "Option 4", checked: false },
            { id: "cb75", label: "Option 5", checked: true },
        ],
    });
hintTextVariant.tags = ["!dev"];

export const allVariants = () => {
    return `
        <h3>Default checkboxes</h3>
        ${defaultVariant()}
        <h3>Disabled checkboxes</h3>
        ${disabledVariant()}
        <h3>Error checkboxes</h3>
        ${errorVariant()}
        <h3>Success checkboxes</h3>
        ${successVariant()}
        <h3>Required checkboxes</h3>
        ${requiredVariant()}
        <h3>Small checkboxes</h3>
        ${smallVariant()}
        <h3>Hint text checkboxes</h3>
        ${hintTextVariant()}
    `;
};
allVariants.tags = ["!dev"];

export const white = {
    render: () => {
        return themeWrapper(themes["white"], allVariants());
    },
};

export const light = {
    render: () => {
        return themeWrapper(themes["light"], allVariants());
    },
};

export const lightAlt = {
    render: () => {
        return themeWrapper(themes["light alt"], allVariants());
    },
};

export const dark = {
    render: () => {
        return themeWrapper(themes["dark"], allVariants());
    },
};

export const darkAlt = {
    render: () => {
        return themeWrapper(themes["dark alt"], allVariants());
    },
};
