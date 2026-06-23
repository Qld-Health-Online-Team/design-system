import { userEvent, waitFor } from "storybook/test";
import isChromatic from "chromatic/isChromatic";
import { storyParams } from "../../../.storybook/globals";
import { initComponents } from "../../../.storybook/decorators";
import initToggleTip from "../../components/toggle_tip/js/global";

async function openToggleTip(canvasElement) {
  // These stories open the tip purely so Chromatic captures the open state in
  // its visual snapshot. The open/close behaviour itself is covered by the
  // Accessibility interaction tests, so outside Chromatic this is a no-op rather
  // than a redundant interaction test.
  if (!isChromatic()) return;
  const trigger = canvasElement.querySelector(".qld__toggle-tip-trigger");
  await userEvent.click(trigger);
  await waitFor(() => {
    if (
      !canvasElement
        .querySelector(".qld__toggle-tip-content")
        .classList.contains("qld__toggle-tip-visible")
    ) {
      throw new Error("toggle tip did not open");
    }
  });
}

let storyCounter = 0;

function buildToggleTip({
  triggerType,
  triggerText,
  icon,
  heading,
  content,
  link,
  linkText,
  alignment,
}) {
  const id = `toggle-tip-story-${++storyCounter}`;

  let triggerHtml;
  if (triggerType === "icon") {
    triggerHtml =
      `<span class="qld__toggle-tip-trigger qld__toggle-tip-trigger-icon" ` +
      `data-target="${id}" role="button" aria-expanded="false" ` +
      `aria-label="${triggerText}" aria-controls="${id}" aria-haspopup="dialog" tabindex="0">` +
      `<svg class="qld__icon qld__icon--md" aria-hidden="true" xmlns="http://www.w3.org/2000/svg">` +
      `<use href="/QLD-icons.svg#${icon}"></use></svg></span>`;
  } else {
    triggerHtml =
      `<span class="qld__toggle-tip-trigger qld__toggle-tip-trigger-definition" ` +
      `data-target="${id}" role="button" aria-expanded="false" ` +
      `aria-controls="${id}-content" aria-haspopup="dialog" tabindex="0">${triggerText}</span>`;
  }

  const headingHtml = heading
    ? `<div class="qld__toggle-tip-content-heading">${heading}</div>`
    : "";
  const linkHtml = link
    ? `<div class="qld__toggle-tip-content-link"><a href="${link}">${linkText}</a></div>`
    : "";

  const contentHtml =
    `<div class="qld__toggle-tip" id="${id}">` +
    `<div class="qld__toggle-tip-content qld__toggle-tip-hidden qld__toggle-tip-aligned-${alignment}" role="status">` +
    headingHtml +
    content +
    linkHtml +
    `</div>` +
    `<div class="qld__toggle-tip-content-carat qld__toggle-tip-hidden"></div>` +
    `</div>`;

  return triggerHtml + contentHtml;
}

function render(args) {
  return buildToggleTip(args);
}

function renderInParagraph(args) {
  return `<p>Here is some text where ${buildToggleTip(args)} appears inline within a sentence.</p>`;
}

export default {
  title: "3. Components/Toggle Tip",
  render,
  argTypes: {
    triggerType: {
      description: "The style of the trigger element.",
      control: { type: "radio" },
      options: ["definition", "icon"],
      labels: {
        definition: "Definition (underlined text)",
        icon: "Icon",
      },
    },
    triggerText: {
      description:
        "The visible trigger label. For the definition variant this is the underlined word; for the icon variant it becomes the accessible `aria-label`.",
      control: { type: "text" },
    },
    icon: {
      description:
        "Icon ID from the QLD icon set. Only used when trigger type is Icon.",
      control: { type: "text" },
    },
    heading: {
      description:
        "Optional bold heading displayed at the top of the toggle tip content.",
      control: { type: "text" },
    },
    content: {
      description: "Body text displayed inside the toggle tip.",
      control: { type: "text" },
    },
    link: {
      description:
        "Optional URL for the action link inside the content. Leave empty to omit the link.",
      control: { type: "text" },
    },
    linkText: {
      description: "Label for the action link.",
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
    triggerText: "toggle tip",
    icon: "help",
    heading: "Toggle tip heading",
    content:
      "This is the content of the toggle tip providing additional context.",
    link: "#",
    linkText: "Learn more",
    alignment: "top",
  },
  parameters: { layout: "centered", ...storyParams("toggleTip") },
  decorators: [
    initComponents([initToggleTip]),
    (Story) => {
      return `<div style="padding: 5rem 3rem;">${Story()}</div>`;
    },
  ],
};

export const Default = {
  play: async ({ canvasElement }) => {
    await openToggleTip(canvasElement);
  },
};

export const IconTrigger = {
  args: {
    triggerType: "icon",
    triggerText: "Show help",
    icon: "help",
  },
  play: async ({ canvasElement }) => {
    await openToggleTip(canvasElement);
  },
};

export const InParagraph = {
  render: renderInParagraph,
  args: {
    triggerType: "definition",
    triggerText: "COVID-19",
    heading: "COVID-19",
    content:
      "Coronavirus disease 2019 (COVID-19) is a contagious disease caused by the virus SARS-CoV-2.",
    link: "#",
    linkText: "Read more",
  },
  play: async ({ canvasElement }) => {
    await openToggleTip(canvasElement);
  },
};

export const AlignedBottom = {
  args: { alignment: "bottom" },
  play: async ({ canvasElement }) => {
    await openToggleTip(canvasElement);
  },
};

export const AlignedLeft = {
  args: { alignment: "left" },
  globals: { backgrounds: { value: "dark" } },
  play: async ({ canvasElement }) => {
    await openToggleTip(canvasElement);
  },
};

export const AlignedRight = {
  args: { alignment: "right" },
  play: async ({ canvasElement }) => {
    await openToggleTip(canvasElement);
  },
};
