import { storyParams } from "../../../.storybook/globals";

function renderNumberInput({ label, hint, fieldWidth }) {
  const hintHtml = hint
    ? `\n    <span class="qld__hint-text" id="number-input-hint">${hint}</span>`
    : "";

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

const meta = {
  title: "3. Components/Forms/Number Input",
  render: renderNumberInput,
  argTypes: {
    label: {
      description: "Label text for the input.",
      control: { type: "text" },
    },
    hint: {
      description: "Hint text displayed below the label.",
      control: { type: "text" },
    },
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
  args: {
    label: "What is your tax file number (TFN)?",
    hint: "Tax file numbers are 9 digits",
    fieldWidth: "qld__field-width--md",
  },
  parameters: {
    ...storyParams("textInput"),
    layout: "padded",
  },
};

export default meta;

export const Default = {};
