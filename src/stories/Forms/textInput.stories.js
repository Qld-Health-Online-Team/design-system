import { storyParams } from "../../../.storybook/globals";

function renderTextInput({ label, hint, placeholder, required, optional, state, filled, disabled }) {
    const inputStateClass = state === "valid" ? " qld__text-input--valid" : state === "error" ? " qld__text-input--error" : "";
    const wrapperAttrs = filled ? ' class="qld__form-style-filled"' : "";

    const labelHtml = `<label for="text-input" class="qld__label">` + (required ? `<abbr title="required">*</abbr> ` : "") + label + (optional ? ` <span class="qld__label--optional">(Optional)</span>` : "") + `</label>`;

    const hintHtml = hint ? `\n    <span class="qld__hint-text" id="text-input-hint">${hint}</span>` : "";
    const feedbackHtml = state === "valid" ? `\n    <span class="qld__input--success">Looks good</span>` : state === "error" ? `\n    <span class="qld__input--error">This field is required</span>` : "";

    return (
        `<div${wrapperAttrs}>\n` +
        `    ${labelHtml}` +
        hintHtml +
        feedbackHtml +
        `\n    <input\n` +
        `        type="text"\n` +
        `        id="text-input"\n` +
        `        class="qld__text-input qld__text-input--block${inputStateClass}"\n` +
        (required ? `        aria-required="true"\n` : "") +
        (hint ? `        aria-describedby="text-input-hint"\n` : "") +
        (placeholder ? `        placeholder="${placeholder}"\n` : "") +
        (disabled ? `        disabled\n` : "") +
        `    >\n` +
        `</div>`
    );
}

function renderTextarea({ label, hint, placeholder, required, rows }) {
    const labelHtml = `<label for="textarea" class="qld__label">` + (required ? `<abbr title="required">*</abbr> ` : "") + label + `</label>`;

    const hintHtml = hint ? `\n    <span class="qld__hint-text" id="textarea-hint">${hint}</span>` : "";

    return (
        `<div>\n` +
        `    ${labelHtml}` +
        hintHtml +
        `\n    <textarea\n` +
        `        id="textarea"\n` +
        `        name="textarea"\n` +
        `        rows="${rows}"\n` +
        (required ? `        aria-required="true"\n` : "") +
        (hint ? `        aria-describedby="textarea-hint"\n` : "") +
        (placeholder ? `        placeholder="${placeholder}"\n` : "") +
        `    ></textarea>\n` +
        `</div>`
    );
}

function renderNumberInput({ label, hint, fieldWidth }) {
    const hintHtml = hint ? `\n    <span class="qld__hint-text" id="number-input-hint">${hint}</span>` : "";

    return (
        `<div>\n` +
        `    <label for="number-input" class="qld__label">${label}</label>` +
        hintHtml +
        `\n    <input\n` +
        `        type="text"\n` +
        `        id="number-input"\n` +
        `        inputmode="numeric"\n` +
        `        class="${fieldWidth} qld__text-input qld__text-input--block qld__text-input--number"\n` +
        (hint ? `        aria-describedby="number-input-hint"\n` : "") +
        `    >\n` +
        `</div>`
    );
}

// ── Meta ────────────────────────────────────────────────────────────────────

const meta = {
    title: "3. Components/Forms/Text Input",
    render: renderTextInput,
    argTypes: {
        label: {
            description: "Label text for the input.",
            control: { type: "text" },
        },
        hint: {
            description: "Hint text displayed below the label.",
            control: { type: "text" },
        },
        placeholder: {
            description: "Placeholder text inside the input.",
            control: { type: "text" },
        },
        required: {
            description: "Marks the field as required with an asterisk indicator.",
            control: { type: "boolean" },
        },
        optional: {
            description: "Appends an (Optional) label to the field.",
            control: { type: "boolean" },
        },
        state: {
            description: "Validation state of the input.",
            control: { type: "radio" },
            options: ["", "valid", "error"],
        },
        filled: {
            description: "Use the filled style variant.",
            control: { type: "boolean" },
        },
        disabled: {
            description: "Disables the input.",
            control: { type: "boolean" },
        },
    },
    args: {
        label: "Text field label",
        hint: "",
        placeholder: "Placeholder text",
        required: false,
        optional: false,
        state: "",
        filled: false,
        disabled: false,
    },
    parameters: {
        ...storyParams("textInput"),
        layout: "padded",
    },
};

export default meta;

// ── Stories ─────────────────────────────────────────────────────────────────

export const Default = {};

export const Required = {
    args: {
        required: true,
        hint: "Hint text",
        placeholder: "",
    },
};

export const Optional = {
    args: {
        optional: true,
        hint: "Hint text",
        placeholder: "",
    },
};

export const Success = {
    args: {
        state: "valid",
        hint: "Hint text",
        placeholder: "",
    },
};

export const SuccessFilled = {
    args: {
        state: "valid",
        filled: true,
        hint: "Hint text",
        placeholder: "",
    },
};

export const Error = {
    args: {
        state: "error",
        required: true,
        placeholder: "",
    },
};

export const ErrorFilled = {
    args: {
        state: "error",
        filled: true,
        required: true,
        placeholder: "",
    },
};

export const Disabled = {
    args: {
        disabled: true,
        placeholder: "",
    },
};

export const Textarea = {
    render: renderTextarea,
    args: {
        label: "Tell us your story",
        hint: "Maximum 300 characters",
        placeholder: "Placeholder text",
        required: false,
        rows: 5,
    },
    argTypes: {
        label: { control: { type: "text" } },
        hint: { control: { type: "text" } },
        placeholder: { control: { type: "text" } },
        required: { control: { type: "boolean" } },
        rows: { control: { type: "number" } },
    },
};

export const NumberInput = {
    render: renderNumberInput,
    args: {
        label: "What is your tax file number (TFN)?",
        hint: "Tax file numbers are 9 digits",
        fieldWidth: "qld__field-width--md",
    },
    argTypes: {
        label: { control: { type: "text" } },
        hint: { control: { type: "text" } },
        fieldWidth: {
            description: "Width modifier class applied to the input.",
            control: { type: "select" },
            options: [
                "qld__field-width--2char",
                "qld__field-width--3char",
                "qld__field-width--4char",
                "qld__field-width--5char",
                "qld__field-width--10char",
                "qld__field-width--20char",
                "qld__field-width--xs",
                "qld__field-width--sm",
                "qld__field-width--md",
                "qld__field-width--lg",
                "qld__field-width--xl",
                "qld__field-width--full",
                "qld__field-width--3-quarters",
                "qld__field-width--half",
                "qld__field-width--1-quarter",
            ],
        },
    },
};
