import { userEvent, waitFor } from "storybook/test";
import isChromatic from "chromatic/isChromatic";
import { storyParams } from "../../../.storybook/globals";
import { initComponents } from "../../../.storybook/decorators";
import initToolTip from "../../components/tool_tip/js/global";

async function openToolTip(canvasElement) {
  // These stories open the tip purely so Chromatic captures the open state in
  // its visual snapshot. The hover/focus behaviour itself is covered by the
  // Accessibility interaction tests, so outside Chromatic this is a no-op rather
  // than a redundant interaction test.
  if (!isChromatic()) return;
  const trigger = canvasElement.querySelector(".qld__tool-tip-trigger");
  await userEvent.hover(trigger);
  await waitFor(() => {
    if (
      !canvasElement
        .querySelector(".qld__tool-tip-content")
        .classList.contains("qld__tool-tip-visible")
    ) {
      throw new Error("tool tip did not open");
    }
  });
}

let storyCounter = 0;

function buildToolTip({ triggerType, triggerText, icon, content, alignment }) {
  const id = `tool-tip-story-${++storyCounter}`;

  let triggerHtml;
  if (triggerType === "definition") {
    triggerHtml =
      `<span class="qld__tool-tip-trigger qld__tool-tip-trigger-definition" ` +
      `data-target="${id}" role="button" aria-controls="${id}" tabindex="0">${triggerText}</span>`;
  } else {
    // Icon and icon-button variants share the same markup; only the modifier
    // class differs (it drives the styling).
    triggerHtml =
      `<span class="qld__tool-tip-trigger qld__tool-tip-trigger-${triggerType}" ` +
      `data-target="${id}" role="button" aria-label="${triggerText}" aria-controls="${id}" tabindex="0">` +
      `<svg class="qld__icon qld__icon--md" aria-hidden="true" xmlns="http://www.w3.org/2000/svg">` +
      `<use href="QLD-icons.svg#${icon}"></use></svg></span>`;
  }

  const contentHtml =
    `<div class="qld__tool-tip" id="${id}">` +
    `<div class="qld__tool-tip-content qld__tool-tip-hidden qld__tool-tip-aligned-${alignment}" role="status">` +
    content +
    `</div>` +
    `<div class="qld__tool-tip-content-carat qld__tool-tip-hidden"></div>` +
    `</div>`;

  return triggerHtml + contentHtml;
}

function render(args) {
  return buildToolTip(args);
}

function renderInParagraph(args) {
  return `<p>Here is some text where ${buildToolTip(args)} appears inline within a sentence.</p>`;
}

export default {
  title: "3. Components/Tool Tip",
  render,
  argTypes: {
    triggerType: {
      description: "The style of the trigger element.",
      control: { type: "radio" },
      options: ["definition", "icon", "button"],
      labels: {
        definition: "Definition (underlined text)",
        icon: "Icon",
        button: "Icon button",
      },
    },
    triggerText: {
      description:
        "The visible trigger label. For the definition variant this is the underlined word; for the icon/button variants it becomes the accessible `aria-label`.",
      control: { type: "text" },
    },
    icon: {
      description:
        "Icon ID from the QLD icon set. Only used for the Icon and Icon button variants.",
      control: { type: "text" },
    },
    content: {
      description: "Body text displayed inside the tool tip.",
      control: { type: "text" },
    },
    alignment: {
      description:
        "Preferred opening direction of the content popup relative to the trigger. The component adjusts automatically if the preferred direction would overflow the viewport.",
      control: { type: "radio" },
      options: ["top", "bottom", "left", "right"],
      labels: {
        top: "Top (default)",
        bottom: "Bottom",
        left: "Left",
        right: "Right",
      },
      table: {
        defaultValue: { summary: "top" },
      },
    },
  },
  args: {
    triggerType: "definition",
    triggerText: "tool tip",
    icon: "help",
    content:
      "This is the content of the tool tip providing additional context.",
    alignment: "top",
  },
  parameters: { layout: "centered", ...storyParams("toolTip") },
  decorators: [
    initComponents([initToolTip]),
    (Story) => {
      return `<div style="padding: 5rem 3rem;">${Story()}</div>`;
    },
  ],
};

export const Default = {
  play: async ({ canvasElement }) => {
    await openToolTip(canvasElement);
  },
};

export const IconTrigger = {
  args: {
    triggerType: "icon",
    triggerText: "Show help",
    icon: "help",
  },
  play: async ({ canvasElement }) => {
    await openToolTip(canvasElement);
  },
};

export const ButtonTrigger = {
  args: {
    triggerType: "button",
    triggerText: "Copy to clipboard",
    icon: "copy",
  },
  play: async ({ canvasElement }) => {
    await openToolTip(canvasElement);
  },
};

export const InParagraph = {
  render: renderInParagraph,
  args: {
    triggerType: "definition",
    triggerText: "COVID-19",
    content:
      "Coronavirus disease 2019 (COVID-19) is a contagious disease caused by the virus SARS-CoV-2.",
  },
  play: async ({ canvasElement }) => {
    await openToolTip(canvasElement);
  },
};

export const AlignedBottom = {
  args: { alignment: "bottom" },
  play: async ({ canvasElement }) => {
    await openToolTip(canvasElement);
  },
};

export const AlignedLeft = {
  args: { alignment: "left" },
  globals: { backgrounds: { value: "dark" } },
  play: async ({ canvasElement }) => {
    await openToolTip(canvasElement);
  },
};

export const AlignedRight = {
  args: { alignment: "right" },
  play: async ({ canvasElement }) => {
    await openToolTip(canvasElement);
  },
};
