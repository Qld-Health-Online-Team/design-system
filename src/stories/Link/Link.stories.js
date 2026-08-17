import {
  storyParams,
  printParams,
  iconSpritePath,
  dummyLink,
  themes,
} from "../../../.storybook/globals";

function render(args) {
  return `
    <a ${args.id ? `id="${args.id}"` : ""}
    class="qld__link"
    href="${args.url}"
    ${args.target ? `target="${args.target}"` : ""}
    aria-label="${args.label}"
  >
    ${
      args.iconName
        ? `<svg
      class="qld__link-icon qld__icon qld__icon--md"
      xmlns="http://www.w3.org/2000/svg"
      aria-hidden="true"
    >
      <use href="${iconSpritePath}#${args.iconName}"></use>
    </svg>`
        : ""
    }${args.label}
  </a>`;
}

const iconOptions = [
  "",
  "audio",
  "document",
  "document-error",
  "document-pdf",
  "document-spreadsheet",
  "document-word",
  "image",
  "links",
  "video",
];

const meta = {
  title: "3. Components/Link",
  render,
  argTypes: {
    id: {
      description: "Optional ID for the component.",
      control: { type: "text" },
    },
    label: {
      description: "Visible link text, also used for aria-label.",
      control: { type: "text" },
    },
    url: {
      description: "URL for the component.",
      control: { type: "text" },
    },
    target: {
      description: "Target attribute. Defaults to open in a new tab.",
      control: {
        type: "select",
        labels: {
          "": "Same tab (default)",
          _blank: "New tab (_blank)",
        },
      },
      options: ["", "_blank"],
    },
    iconName: {
      description: "Icon to be displayed.",
      control: { type: "select" },
      options: iconOptions,
    },
  },
  args: {
    id: "",
    label: "Link label",
    url: dummyLink,
    target: "_blank",
    iconName: "document",
  },
  parameters: storyParams("link"),
};

export default meta;

export const Default = {};

export const SameTab = {
  args: { target: "", label: "Opens link in the same tab" },
};

export const WithId = {
  args: { id: "link-id-123" },
};

export const IconGroup = {
  render: (args) => {
    const items = iconOptions
      .filter((icon) => icon !== "")
      .map(
        (icon) =>
          `<li class="qld__link-list-item">${render({ ...args, iconName: icon, label: `${icon} title [2.5 MB]` })}</li>`,
      )
      .join("");

    return `<ul class="qld__link-list">${items}</ul>`;
  },
};

export const NoIcon = {
  args: {
    iconName: "",
  },
};

export const Light = {
  parameters: { skipDecorator: true },
  render: (args) => `<div class="${themes["light"]}">${render(args)}</div>`,
};

export const LightAlt = {
  parameters: { skipDecorator: true },
  render: (args) => `<div class="${themes["light alt"]}">${render(args)}</div>`,
};

export const Dark = {
  parameters: { skipDecorator: true },
  render: (args) => `<div class="${themes["dark"]}">${render(args)}</div>`,
};

export const DarkAlt = {
  parameters: { skipDecorator: true },
  render: (args) => `<div class="${themes["dark alt"]}">${render(args)}</div>`,
};

/**
 * Print rendering of the four kinds of href a page can carry. The appended
 * destination is opted in by scheme, so only the absolute, `mailto:` and `tel:`
 * links should show a URL in brackets after their text. Matrix renders every
 * in-site link relative (`./?a=123`), and a relative path is no more use on paper
 * than an in-page anchor.
 *
 * The underline colour is the other thing this guards: it is a separate property
 * from `color`, so it survives the print colour reset unless neutralised.
 */
export const Print = {
  render: (args) => {
    const items = [
      { url: dummyLink, label: "Absolute link — prints its URL" },
      { url: "./?a=123", label: "Relative Matrix link — no URL" },
      { url: "#section-two", label: "In-page anchor — no URL" },
      {
        url: "mailto:enquiries@health.qld.gov.au",
        label: "Email — prints its URL",
      },
    ]
      .map(
        ({ url, label }) =>
          `<li class="qld__link-list-item">${render({ ...args, url, label, iconName: "" })}</li>`,
      )
      .join("");

    return `<ul class="qld__link-list">${items}</ul>`;
  },
  parameters: printParams(
    "that only absolute, mailto and tel links append their href, and that link underlines print neutral rather than blue",
  ),
};
