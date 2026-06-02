import { Checkboxes } from "./Checkboxes/Checkboxes";
import { RadioButtons } from "./RadioButtons/RadioButtons";
import { SelectBox } from "./SelectBox/SelectBox";
import { storyParams } from "../../../.storybook/globals";

function renderTextInput({ id, label, hint, required, optional, state, filled, value = "" }) {
    const stateClass = state === "valid" ? " qld__text-input--valid" : state === "error" ? " qld__text-input--error" : "";
    const wrapperClass = filled ? ' class="qld__form-style-filled"' : "";
    const feedbackHtml = state === "valid" ? `<span class="qld__input--success">Looks good</span>` : state === "error" ? `<span class="qld__input--error">This field is required</span>` : "";

    return (
        `<div${wrapperClass}>` +
        `<label for="${id}" class="qld__label">` +
        (required ? `<abbr title="required">*</abbr> ` : "") +
        label +
        (optional ? ` <span class="qld__label--optional">(Optional)</span>` : "") +
        `</label>` +
        (hint ? `<span class="qld__hint-text" id="${id}-hint">${hint}</span>` : "") +
        feedbackHtml +
        `<input type="text" id="${id}" class="qld__text-input qld__text-input--block${stateClass}"` +
        (required ? ` aria-required="true"` : "") +
        (hint ? ` aria-describedby="${id}-hint"` : "") +
        (value ? ` value="${value}"` : "") +
        `></div>`
    );
}

function renderForm({ filled, showErrors }) {
    const style = filled ? ' class="qld__body qld__form qld__form-style-filled"' : ' class="qld__body qld__form"';

    const firstNameState = showErrors ? "error" : "";
    const lastNameState = "";
    const selectState = showErrors ? "error" : "default";

    return (
        `<form${style} novalidate>` +
        `<div class="container-fluid">` +
        `<h2>Personal details</h2>` +
        `<div class="row">` +
        `<div class="col-xs-12 col-md-6">` +
        renderTextInput({ id: "first-name", label: "First name", required: true, state: firstNameState }) +
        `</div>` +
        `<div class="col-xs-12 col-md-6">` +
        renderTextInput({ id: "last-name", label: "Last name", required: true, state: lastNameState }) +
        `</div>` +
        `</div>` +
        renderTextInput({
            id: "email",
            label: "Email address",
            hint: "We'll only use this to send you a confirmation",
            required: true,
            state: "",
        }) +
        renderTextInput({ id: "phone", label: "Phone number", optional: true }) +
        `<hr>` +
        `<h2>Your enquiry</h2>` +
        RadioButtons({
            id: "enquiry-type",
            legend: "What is your enquiry about?",
            isRequired: true,
            inError: showErrors,
            errorMessage: "Please select an option",
            inSuccess: false,
            successMessage: "",
            hintText: "",
            isSmall: false,
            inputs: [
                {
                    id: "enquiry-type-1",
                    label: "General enquiry",
                    checked: false,
                    disabled: false,
                    inError: showErrors,
                    inSuccess: false,
                },
                {
                    id: "enquiry-type-2",
                    label: "Appointment",
                    checked: false,
                    disabled: false,
                    inError: showErrors,
                    inSuccess: false,
                },
                {
                    id: "enquiry-type-3",
                    label: "Feedback",
                    checked: false,
                    disabled: false,
                    inError: showErrors,
                    inSuccess: false,
                },
            ],
        }) +
        SelectBox({
            id: "preferred-contact",
            label: "Preferred contact method",
            hintText: "How would you like us to get back to you?",
            isRequired: false,
            isDisabled: false,
            isMultiple: false,
            isFilled: filled,
            state: selectState,
            errorMessage: "Please select an option",
            succcessMessage: "",
            defaultOption: { value: "", label: "Please select" },
            options: [
                { value: "email", label: "Email" },
                { value: "phone", label: "Phone" },
                { value: "post", label: "Post" },
            ],
        }) +
        Checkboxes({
            id: "consent",
            legend: "I agree to the following",
            isRequired: true,
            inError: showErrors,
            errorMessage: "You must agree before submitting",
            inSuccess: false,
            successMessage: "",
            hintText: "",
            isSmall: false,
            inputs: [
                {
                    id: "consent-1",
                    label: "I consent to my information being used to process this enquiry",
                    checked: false,
                    disabled: false,
                    inError: showErrors,
                    inSuccess: false,
                },
                {
                    id: "consent-2",
                    label: "I have read and agree to the privacy policy",
                    checked: false,
                    disabled: false,
                    inError: showErrors,
                    inSuccess: false,
                },
            ],
        }) +
        `<div>` +
        `<button type="submit" class="qld__btn qld__btn--primary">Submit</button>` +
        `<button type="button" class="qld__btn qld__btn--secondary">Cancel</button>` +
        `</div>` +
        `</div>` +
        `</form>`
    );
}

const meta = {
    title: "3. Components/Forms",
    render: renderForm,
    argTypes: {
        filled: {
            description: "Apply the filled input style across all form fields.",
            control: { type: "boolean" },
        },
        showErrors: {
            description: "Show validation error states across required fields.",
            control: { type: "boolean" },
        },
    },
    args: {
        filled: false,
        showErrors: false,
    },
    parameters: {
        ...storyParams("forms"),
        layout: "padded",
    },
};

export default meta;

export const Default = {};

export const FilledStyle = {
    args: { filled: true },
};

export const WithValidationErrors = {
    args: { showErrors: true },
};

export const FilledWithErrors = {
    args: { filled: true, showErrors: true },
};
