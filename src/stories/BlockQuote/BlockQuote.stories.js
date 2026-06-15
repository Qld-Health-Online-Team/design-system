import { expect } from "storybook/test";
import { themes, storyParams } from "../../../.storybook/globals";
import { themeWrapper } from "../../../.storybook/helper-functions.js";

function renderBlockQuote({ quote, source, cite }) {
  const citeAttr = cite ? ` cite="${cite}"` : "";
  const figcaption = source
    ? `<figcaption class="qld__quote-source">${source}</figcaption>`
    : "";

  return `<figure class="qld__block-quote">
  <blockquote${citeAttr}>${quote}</blockquote>
  ${figcaption}
</figure>`;
}

export default {
  title: "3. Components/Blockquote",
  render: renderBlockQuote,
  argTypes: {
    quote: {
      control: "text",
      description: "The quotation text displayed within the blockquote",
    },
    source: {
      control: "text",
      description:
        "The source/author of the quote, shown as the figure caption. Leave empty to omit",
    },
    cite: {
      control: "text",
      description:
        "The URL of the source of the quote, set as the blockquote's cite attribute",
    },
  },
  args: {
    quote:
      "The goal of the Web is to serve humanity. We build it now so that those who come to it later will be able to create things we cannot ourselves imagine.",
    source: "Sir Tim Berners-Lee",
    cite: "https://example.com/source-of-the-quote",
  },
  parameters: storyParams("blockquote"),
};

export const Default = {
  play: async ({ canvasElement, args }) => {
    const blockquote = canvasElement.querySelector("blockquote");
    // The citation source URL should be exposed on the blockquote's cite attribute.
    await expect(blockquote).toHaveAttribute("cite", args.cite);
  },
};

// The blockquote has no style modifiers — its appearance is purely theme-driven,
// so a single story shows it across every colour theme for comparison.
export const ColourExamples = {
  name: "Colour examples",
  argTypes: {
    quote: { table: { disable: true } },
    source: { table: { disable: true } },
    cite: { table: { disable: true } },
  },
  render: (args) => {
    const example = (heading, theme) =>
      themeWrapper(
        themes[theme],
        `<h3>${heading}</h3>${renderBlockQuote(args)}`,
      );

    return [
      example("Default colour example", "white"),
      example("Light colour example", "light"),
      example("Alt colour example", "light alt"),
      example("Dark colour example", "dark"),
      example("Dark-alt colour example", "dark alt"),
    ].join("");
  },
};
