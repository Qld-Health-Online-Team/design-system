import { SelectBox } from "./SelectBox";
import { themes, figmaLinks } from "../../../.storybook/globals";

const selectBoxArgs = {
    id: "select1",
    extraClass: "",
    isFilled: false,
    isRequired: false,
    isDisabled: false,
    isMultiple: false,
    label: "Select label",
    hintText: "Hint text",
    state: "default",
    succcessMessage: "Success message",
    errorMessage: "Error message",
    defaultOption: { value: "", label: "Please select" },
    options: [
        { value: "option 1", label: "Option 1" },
        { value: "option 2", label: "Option 2" },
        { value: "option 3", label: "Option 3" },
        { value: "option 4", label: "Option 4" },
        { value: "option 5", label: "Option 5" },
    ],
};

export default {
    title: "Components/SelectBox",
    render: (args) => SelectBox(args),
    argTypes: {
        id: { control: "text", description: "The id for this component" },
        extraClass: { control: "text", description: "Extra classes that will be applied to the < select > element" },
        isFilled: {
            name: "is_filled",
            control: "boolean",
            description: "Whether the input field has a full border",
            table: {
                defaultValue: { summary: "false" },
            },
        },
        isRequired: {
            name: "is_required",
            control: "boolean",
            description: "Whether the input field requires a value to be entered",
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
        isMultiple: {
            name: "is_multiple",
            control: "boolean",
            description: "Whether the select field allows multiple selections",
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

export const successVariant = (selectBoxArgs) => SelectBox({ ...selectBoxArgs, id: "select3", state: "success", succcessMessage: "Success message" });
successVariant.tags = ["!dev"];

export const errorVariant = (selectBoxArgs) => SelectBox({ ...selectBoxArgs, id: "select4", state: "error", errorMessage: "Error message" });
errorVariant.tags = ["!dev"];

export const filledVariant = (selectBoxArgs) => SelectBox({ ...selectBoxArgs, id: "select5", isFilled: true });
filledVariant.tags = ["!dev"];

export const requiredVariant = (selectBoxArgs) => SelectBox({ ...selectBoxArgs, id: "select6", isRequired: true });
requiredVariant.tags = ["!dev"];

export const disabledVariant = (selectBoxArgs) => SelectBox({ ...selectBoxArgs, id: "select7", isDisabled: true });
disabledVariant.tags = ["!dev"];

export const multipleVariant = (selectBoxArgs) => SelectBox({ ...selectBoxArgs, id: "select23", isMultiple: true });
multipleVariant.tags = ["!dev"];

export const size2charVariant = (selectBoxArgs) => SelectBox({ ...selectBoxArgs, id: "select8", extraClass: "qld__field-width--2char" });
size2charVariant.tags = ["!dev"];

export const size3charVariant = (selectBoxArgs) => SelectBox({ ...selectBoxArgs, id: "select9", extraClass: "qld__field-width--3char" });
size3charVariant.tags = ["!dev"];

export const size4charVariant = (selectBoxArgs) => SelectBox({ ...selectBoxArgs, id: "select10", extraClass: "qld__field-width--4char" });
size4charVariant.tags = ["!dev"];

export const size5charVariant = (selectBoxArgs) => SelectBox({ ...selectBoxArgs, id: "select11", extraClass: "qld__field-width--5char" });
size5charVariant.tags = ["!dev"];

export const size10charVariant = (selectBoxArgs) => SelectBox({ ...selectBoxArgs, id: "select12", extraClass: "qld__field-width--10char" });
size10charVariant.tags = ["!dev"];

export const size20charVariant = (selectBoxArgs) => SelectBox({ ...selectBoxArgs, id: "select13", extraClass: "qld__field-width--20char" });
size20charVariant.tags = ["!dev"];

export const sizeXSVariant = (selectBoxArgs) => SelectBox({ ...selectBoxArgs, id: "select14", extraClass: "qld__field-width--xs" });
sizeXSVariant.tags = ["!dev"];

export const sizeSMVariant = (selectBoxArgs) => SelectBox({ ...selectBoxArgs, id: "select15", extraClass: "qld__field-width--sm" });
sizeSMVariant.tags = ["!dev"];

export const sizeMDVariant = (selectBoxArgs) => SelectBox({ ...selectBoxArgs, id: "select16", extraClass: "qld__field-width--md" });
sizeMDVariant.tags = ["!dev"];

export const sizeLGVariant = (selectBoxArgs) => SelectBox({ ...selectBoxArgs, id: "select17", extraClass: "qld__field-width--lg" });
sizeLGVariant.tags = ["!dev"];

export const sizeXLVariant = (selectBoxArgs) => SelectBox({ ...selectBoxArgs, id: "select18", extraClass: "qld__field-width--xl" });
sizeXLVariant.tags = ["!dev"];

export const sizeFullVariant = (selectBoxArgs) => SelectBox({ ...selectBoxArgs, id: "select19", extraClass: "qld__field-width--full" });
sizeFullVariant.tags = ["!dev"];

export const size3QuartersVariant = (selectBoxArgs) => SelectBox({ ...selectBoxArgs, id: "select20", extraClass: "qld__field-width--3-quarters" });
size3QuartersVariant.tags = ["!dev"];

export const sizeHalfVariant = (selectBoxArgs) => SelectBox({ ...selectBoxArgs, id: "select21", extraClass: "qld__field-width--half" });
sizeHalfVariant.tags = ["!dev"];

export const size1QuarterVariant = (selectBoxArgs) => SelectBox({ ...selectBoxArgs, id: "select22", extraClass: "qld__field-width--1-quarter" });
size1QuarterVariant.tags = ["!dev"];

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
            <h3>Multiple select box</h3>
            ${multipleVariant(args)}
            <h3>Width variants</h3>
            <h4>2 char</h4>
            ${size2charVariant(args)}
            <h4>3 char</h4>
            ${size3charVariant(args)}
            <h4>4 char</h4>
            ${size4charVariant(args)}
            <h4>5 char</h4>
            ${size5charVariant(args)}
            <h4>10 char</h4>
            ${size10charVariant(args)}
            <h4>20 char</h4>
            ${size20charVariant(args)}
            <h4>XS</h4>
            ${sizeXSVariant(args)}
            <h4>SM</h4>
            ${sizeSMVariant(args)}
            <h4>MD</h4>
            ${sizeMDVariant(args)}
            <h4>LG</h4>
            ${sizeLGVariant(args)}
            <h4>XL</h4>
            ${sizeXLVariant(args)}
            <h4>Full</h4>
            ${sizeFullVariant(args)}
            <h4>3 Quarters</h4>
            ${size3QuartersVariant(args)}
            <h4>Half</h4>
            ${sizeHalfVariant(args)}
            <h4>1 Quarter</h4>
            ${size1QuarterVariant(args)}
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
