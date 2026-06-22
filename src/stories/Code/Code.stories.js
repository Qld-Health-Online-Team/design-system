import Template from "../../components/code/html/component.hbs";
import { storyParams } from "../../../.storybook/globals";

// A representative multi-line HTML snippet. It is shown verbatim in the code
// body and, when a preview is enabled, rendered as live markup in the preview
// pane — so it doubles as both the source and the example.
const multilineSnippet = `
<div class="qld__callout">
  <h2 class="qld__callout__heading">Title of the callout</h2>
  <p>Description of the callout. Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
</div>`;

// A longer snippet so the "Show more" toggle has enough content to collapse.
const longSnippet = `
<ul class="qld__link-list">
  <li><a href="#">First related link</a></li>
  <li><a href="#">Second related link</a></li>
  <li><a href="#">Third related link</a></li>
  <li><a href="#">Fourth related link</a></li>
  <li><a href="#">Fifth related link</a></li>
  <li><a href="#">Sixth related link</a></li>
</ul>`;

function render(args) {
  return Template({
    component: {
      data: {
        // The template builds unique radio ids from `component.data.assetid`
        // (relative to the metadata context), so it lives one level deeper.
        assetid: "code-123",
        metadata: {
          code: { value: args.value },
          code_snippet_type: { value: args.snippetType },
          show_code: { value: args.showCode ? "true" : "false" },
          show_more_button: { value: args.showMoreButton ? "true" : "false" },
          show_preview: { value: args.showPreview ? "true" : "false" },
          show_theme_colors: { value: args.showThemeColors ? "true" : "false" },
          github_link: { value: args.githubLink },
          figma_link: { value: args.figmaLink },
          action_link_title: { value: args.actionLinkTitle },
          action_link_address: { value: args.actionLinkAddress },
        },
      },
    },
    site: {
      metadata: {
        // Preserve the globally injected coreSiteIcons path (set in preview.js)
        // while pinning the nav layout so the singleline wrapper stays off.
        ...args.site?.metadata,
        mainNavVerticalNav: { value: "false" },
      },
    },
  });
}

const meta = {
  title: "3. Components/Code",
  render,
  parameters: storyParams("code"),
  argTypes: {
    value: {
      description:
        "The code snippet to display (and to render in the preview).",
      control: { type: "text" },
    },
    snippetType: {
      description:
        "Single line renders an inline, copyable snippet; multi-line renders a full code block.",
      options: ["singleline", "multiline"],
      control: { type: "radio" },
    },
    showCode: {
      description: "Whether to show the code snippet.",
      control: { type: "boolean" },
    },
    showMoreButton: {
      description:
        "Whether to show the 'Show more' toggle that collapses long code.",
      control: { type: "boolean" },
      if: { arg: "snippetType", eq: "multiline" },
    },
    showPreview: {
      description:
        "Whether to render a live preview of the snippet above the code.",
      control: { type: "boolean" },
      if: { arg: "snippetType", eq: "multiline" },
    },
    showThemeColors: {
      description:
        "Whether to show the theme colour palette switcher on the preview.",
      control: { type: "boolean" },
      if: { arg: "showPreview", truthy: true },
    },
    githubLink: {
      description: "Link to the GitHub repository, shown in the code header.",
      control: { type: "text" },
      if: { arg: "snippetType", eq: "multiline" },
    },
    figmaLink: {
      description: "Link to the Figma file, shown in the code header.",
      control: { type: "text" },
      if: { arg: "snippetType", eq: "multiline" },
    },
    actionLinkTitle: {
      description: "Label for an arbitrary action link in the code header.",
      control: { type: "text" },
      if: { arg: "snippetType", eq: "multiline" },
    },
    actionLinkAddress: {
      description: "URL for the arbitrary action link in the code header.",
      control: { type: "text" },
      if: { arg: "snippetType", eq: "multiline" },
    },
  },
  args: {
    value: `<a class="qld__btn" href="#">Button</a>`,
    snippetType: "singleline",
    showCode: true,
    showMoreButton: false,
    showPreview: false,
    showThemeColors: false,
    githubLink: "",
    figmaLink: "",
    actionLinkTitle: "",
    actionLinkAddress: "",
  },
};

export default meta;

// Inline, single-line snippet with a copy button.
export const Default = {};

// Multi-line code block with a copy button (no preview, no header links).
export const MultiLine = {
  args: {
    snippetType: "multiline",
    value: multilineSnippet,
  },
};

// Live preview of the snippet above the code, with the theme palette switcher.
export const WithPreview = {
  args: {
    snippetType: "multiline",
    value: multilineSnippet,
    showPreview: true,
    showThemeColors: true,
  },
};

// Preview enabled, but without the theme colour palette switcher.
export const PreviewWithoutThemeColours = {
  args: {
    snippetType: "multiline",
    value: multilineSnippet,
    showPreview: true,
    showThemeColors: false,
  },
};

// Long snippet collapsed behind a "Show more" toggle.
export const WithShowMoreButton = {
  args: {
    snippetType: "multiline",
    value: longSnippet,
    showMoreButton: true,
  },
};

// Code block with GitHub, Figma and a custom action link in the header.
export const WithResourceLinks = {
  args: {
    snippetType: "multiline",
    value: multilineSnippet,
    githubLink: "https://github.com/qld-govt/qld-design-system",
    figmaLink:
      "https://www.figma.com/design/qKsxl3ogIlBp7dafgxXuCA/QGDS-UI-kit",
    actionLinkTitle: "View component",
    actionLinkAddress: "https://www.designsystem.qld.gov.au",
  },
};

// Header with resource links only — the code body itself is hidden.
export const LinksOnly = {
  args: {
    snippetType: "multiline",
    showCode: false,
    githubLink: "https://github.com/qld-govt/qld-design-system",
    figmaLink:
      "https://www.figma.com/design/qKsxl3ogIlBp7dafgxXuCA/QGDS-UI-kit",
    actionLinkTitle: "View component",
    actionLinkAddress: "https://www.designsystem.qld.gov.au",
  },
};
