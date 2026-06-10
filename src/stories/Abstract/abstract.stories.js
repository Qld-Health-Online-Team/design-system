import Template from "../../components/abstract/html/component.hbs";
import { dummyText, storyParams } from "../../../.storybook/globals";
import { expect } from "storybook/test";

function render({ id, content }) {
  return Template({
    component: {
      data: {
        assetid: "123",
        metadata: {
          id_field: { value: id },
          content: { value: content },
        },
      },
    },
  });
}

const parameters = storyParams("abstract");

const meta = {
  title: "3. Components/Abstract",
  render,
  argTypes: {
    id: {
      name: "id_field",
      description:
        "Optional anchor ID applied to the wrapping section. Falls back to abstract-{assetid} when empty.",
      control: { type: "text" },
    },
    content: {
      description: "Rich-text (WYSIWYG) content displayed inside the abstract.",
      control: { type: "text" },
    },
  },
  args: {
    id: "abstract-000",
    content: dummyText,
  },
  parameters: {
    ...parameters,
    docs: {
      ...parameters.docs,
      description: {
        component:
          "The Abstract component displays a short summary or introductory passage of rich-text content, " +
          "giving users a quick overview of a page before they read the full content.\n" +
          "\n" +
          "The content is authored as WYSIWYG markup and sits inside a styled `qld__body` section. The" +
          " wrapping section can be given an anchor `id` so it can be linked to directly; when none is " +
          "supplied it falls back to `abstract-{assetid}`.",
      },
    },
  },
};
export default meta;

export const Default = {};

export const Empty = {
  args: {
    id: undefined,
    content: undefined,
  },
  play: async ({ canvasElement }) => {
    const section = canvasElement.querySelector(".qld__abstract--wrapper");
    await expect(section).toHaveAttribute("id", "abstract-123");
  },
};
