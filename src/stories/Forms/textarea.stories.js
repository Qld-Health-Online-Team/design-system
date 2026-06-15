import { storyParams } from "../../../.storybook/globals";

function renderTextarea({
  label,
  hint,
  placeholder,
  required,
  optional,
  state,
  filled,
  disabled,
  rows,
}) {
  const stateClass =
    state === "valid"
      ? " qld__text-input--valid"
      : state === "error"
        ? " qld__text-input--error"
        : "";
  const wrapperAttrs = filled ? ' class="qld__form-style-filled"' : "";

  const labelHtml =
    `<label for="textarea" class="qld__label">` +
    (required ? `<abbr title="required">*</abbr> ` : "") +
    label +
    (optional ? ` <span class="qld__label--optional">(Optional)</span>` : "") +
    `</label>`;

  const hintHtml = hint
    ? `\n    <span class="qld__hint-text" id="textarea-hint">${hint}</span>`
    : "";
  const feedbackHtml =
    state === "valid"
      ? `\n    <span class="qld__input--success">Looks good</span>`
      : state === "error"
        ? `\n    <span class="qld__input--error">This field is required</span>`
        : "";

  return (
    `<div${wrapperAttrs}>\n` +
    `    ${labelHtml}` +
    hintHtml +
    feedbackHtml +
    `\n    <textarea\n` +
    `        id="textarea"\n` +
    `        name="textarea"\n` +
    `        rows="${rows}"\n` +
    `        class="qld__text-input qld__text-input--block${stateClass}"\n` +
    (required ? `        aria-required="true"\n` : "") +
    (hint ? `        aria-describedby="textarea-hint"\n` : "") +
    (placeholder ? `        placeholder="${placeholder}"\n` : "") +
    (disabled ? `        disabled\n` : "") +
    `    ></textarea>\n` +
    `</div>`
  );
}

const meta = {
  title: "3. Components/Forms/Textarea",
  render: renderTextarea,
  argTypes: {
    label: {
      description: "Label text for the textarea.",
      control: { type: "text" },
    },
    hint: {
      description: "Hint text displayed below the label.",
      control: { type: "text" },
    },
    placeholder: {
      description: "Placeholder text inside the textarea.",
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
      description: "Validation state of the textarea.",
      control: { type: "radio" },
      options: ["", "valid", "error"],
    },
    filled: {
      description: "Use the filled style variant.",
      control: { type: "boolean" },
    },
    disabled: {
      description: "Disables the textarea.",
      control: { type: "boolean" },
    },
    rows: {
      description: "Number of visible text rows.",
      control: { type: "number" },
    },
  },
  args: {
    label: "Tell us your story",
    hint: "Maximum 300 characters",
    placeholder: "Placeholder text",
    required: false,
    optional: false,
    state: "",
    filled: false,
    disabled: false,
    rows: 5,
  },
  parameters: {
    ...storyParams("textInput"),
    layout: "padded",
  },
};

export default meta;

export const Default = {};

export const Required = {
  args: {
    required: true,
    placeholder: "",
  },
};

export const Optional = {
  args: {
    optional: true,
    placeholder: "",
  },
};

export const Success = {
  args: {
    state: "valid",
    placeholder: "",
  },
};

export const SuccessFilled = {
  args: {
    state: "valid",
    filled: true,
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
