import { Checkboxes } from "./Checkboxes";
import { themes, figmaLinks } from "../../../.storybook/globals";

const checkboxesArgs = {
    id: "cb1",
    legend: "My legend",
    isRequired: false,
    inError: false,
    errorMessage: "Uh oh",
    inSuccess: false,
    successMessage: "Success!",
    inputs: [
        { id: "cb11", label: "cat", checked: true, disabled: false, inError: false, inSuccess: false },
        { id: "cb12", label: "dog", checked: false, disabled: false, inError: false, inSuccess: false },
        { id: "cb13", label: "horse", checked: true, disabled: false, inError: false, inSuccess: false },
        { id: "cb14", label: "ram", checked: false, disabled: false, inError: false, inSuccess: false },
        { id: "cb15", label: "goat", checked: true, disabled: false, inError: false, inSuccess: false },
    ],
    isSmall: false,
};

export default {
    title: "Components/Checkboxes",
    render: (args) => Checkboxes(args),
    argTypes: {
        id: { control: "text", description: "The id for this component" },
        legend: { control: "text", description: "The legend of the checkbox group" },
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

export const Default = {
    args: {
        ...checkboxesArgs,
    },
};

export const defaultVariant = (checkboxesArgs) => Checkboxes({ ...checkboxesArgs });
defaultVariant.tags = ["!dev"];

export const disabledVariant = (checkboxesArgs) =>
    Checkboxes({
        ...checkboxesArgs,
        id: "cb2",
        inputs: [
            { id: "cb21", label: "cat", checked: true, disabled: true },
            { id: "cb22", label: "dog", checked: false, disabled: true },
            { id: "cb23", label: "horse", checked: true, disabled: true },
            { id: "cb24", label: "ram", checked: false, disabled: true },
            { id: "cb25", label: "goat", checked: true, disabled: true },
        ],
    });
disabledVariant.tags = ["!dev"];

export const errorVariant = (checkboxesArgs) =>
    Checkboxes({
        ...checkboxesArgs,
        id: "cb3",
        inError: true,
        errorMessage: "Uh oh",
        inSuccess: false,
        successMessage: "Success!",
        inputs: [
            { id: "cb31", label: "cat", checked: true, inError: true, inSuccess: false },
            { id: "cb32", label: "dog", checked: false, inError: true, inSuccess: false },
            { id: "cb33", label: "horse", checked: true, inError: true, inSuccess: false },
            { id: "cb34", label: "ram", checked: false, inError: true, inSuccess: false },
            { id: "cb35", label: "goat", checked: true, inError: true, inSuccess: false },
        ],
    });
errorVariant.tags = ["!dev"];

export const successVariant = (checkboxesArgs) =>
    Checkboxes({
        ...checkboxesArgs,
        id: "cb4",
        inError: false,
        errorMessage: "Uh oh",
        inSuccess: true,
        successMessage: "Success!",
        inputs: [
            { id: "cb41", label: "cat", checked: true, inError: false, inSuccess: true },
            { id: "cb42", label: "dog", checked: false, inError: false, inSuccess: true },
            { id: "cb43", label: "horse", checked: true, inError: false, inSuccess: true },
            { id: "cb44", label: "ram", checked: false, inError: false, inSuccess: true },
            { id: "cb45", label: "goat", checked: true, inError: false, inSuccess: true },
        ],
    });
successVariant.tags = ["!dev"];

export const requiredVariant = (checkboxesArgs) =>
    Checkboxes({
        ...checkboxesArgs,
        id: "cb5",
        isRequired: true,
        inputs: [
            { id: "cb51", label: "cat", checked: true },
            { id: "cb52", label: "dog", checked: false },
            { id: "cb53", label: "horse", checked: true },
            { id: "cb54", label: "ram", checked: false },
            { id: "cb55", label: "goat", checked: true },
        ],
    });
requiredVariant.tags = ["!dev"];

export const smallVariant = (checkboxesArgs) =>
    Checkboxes({
        ...checkboxesArgs,
        id: "cb6",
        isRequired: true,
        inputs: [
            { id: "cb61", label: "cat", checked: true },
            { id: "cb62", label: "dog", checked: false },
            { id: "cb63", label: "horse", checked: true },
            { id: "cb64", label: "ram", checked: false },
            { id: "cb65", label: "goat", checked: true },
        ],
        isSmall: true,
    });
smallVariant.tags = ["!dev"];

export const allVariants = (args, theme) => {
    return `
        <div class="${theme}" style="padding: 2rem;">
            <h3>Default checkboxes</h3>
            ${defaultVariant(args)}
            <h3>Disabled checkboxes</h3>
            ${disabledVariant(args)}
            <h3>Error checkboxes</h3>
            ${errorVariant(args)}
            <h3>Success checkboxes</h3>
            ${successVariant(args)}
            <h3>Required checkboxes</h3>
            ${requiredVariant(args)}
            <h3>Small checkboxes</h3>
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
    args: checkboxesArgs,
    argTypes: allVariantsArgTypes,
    render: (args) => {
        return allVariants(args, themes["white"]);
    },
};

export const light = {
    args: checkboxesArgs,
    argTypes: allVariantsArgTypes,
    render: (args) => {
        return allVariants(args, themes["light"]);
    },
};

export const lightAlt = {
    args: checkboxesArgs,
    argTypes: allVariantsArgTypes,
    render: (args) => {
        return allVariants(args, themes["light alt"]);
    },
};

export const dark = {
    args: checkboxesArgs,
    argTypes: allVariantsArgTypes,
    render: (args) => {
        return allVariants(args, themes["dark"]);
    },
};

export const darkAlt = {
    args: checkboxesArgs,
    argTypes: allVariantsArgTypes,
    render: (args) => {
        return allVariants(args, themes["dark alt"]);
    },
};
