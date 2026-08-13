import {
  printParams,
  storyParams,
  iconSpritePath,
} from "../../../.storybook/globals";

function rowDecorator(Story) {
  return (
    '<div style="display: flex; gap: 5px">\n' + `${Story()}` + "    </div>"
  );
}

const getBtnClasses = (variant) =>
  [
    "qld__btn",
    variant === "secondary" && "qld__btn--secondary",
    variant === "tertiary" && "qld__btn--tertiary",
  ]
    .filter(Boolean)
    .join(" ");

function render({ variant }) {
  return `<button type="button" class="${getBtnClasses(variant)}">Default</button>`;
}

function renderButtonList({ variant }) {
  const btnClasses = getBtnClasses(variant);
  return (
    `<a href="#" class="${btnClasses}" hover="">Link</a>\n\n` +
    `<button type="button" class="${btnClasses}">Default</button>\n\n` +
    `<button type="button" class="${btnClasses} qld__btn--icon-lead">\n` +
    '    <svg class="qld__icon qld__icon--sm" aria-hidden="true" xmlns="http://www.w3.org/2000/svg"><use' +
    ` href="${iconSpritePath}#announcement"></use></svg>\n` +
    "    Leading icon\n" +
    "</button>\n\n" +
    `<button type="button" class="${btnClasses} qld__btn--icon-trail">\n` +
    "   Trailing icon\n" +
    '   <svg class="qld__icon qld__icon--sm" aria-hidden="true" xmlns="http://www.w3.org/2000/svg"><use' +
    ` href="${iconSpritePath}#announcement"></use></svg>\n` +
    "</button>\n\n" +
    `<button type="button" class="${btnClasses}" disabled="">Disabled</button>`
  );
}

export default {
  title: "3. Components/Button",
  render,
  parameters: {
    ...storyParams("button"),
    layout: "centered",
  },
  argTypes: {
    variant: {
      control: {
        type: "radio",
      },
      options: ["primary", "secondary", "tertiary"],
      default: "primary",
    },
  },
  args: {
    variant: "primary",
  },
};

export const Default = {};

export const Primary = {
  decorators: [rowDecorator],
  render: renderButtonList,
};

export const Secondary = {
  decorators: [rowDecorator],
  render: renderButtonList,
  args: { variant: "secondary" },
};

export const Tertiary = {
  decorators: [rowDecorator],
  render: renderButtonList,
  args: { variant: "tertiary" },
};
/**
 * Print rendering of the full button row. The row deliberately mixes the two
 * things wearing `.qld__btn`: the leading `<a>`, which names a destination and
 * survives, and four `<button>`s, which only do something when clicked and are
 * dropped. Only the link should remain in the snapshot.
 */
export const Print = {
  decorators: [rowDecorator],
  render: renderButtonList,
  parameters: printParams(
    "that interactive <button>s are dropped while a button-styled link prints, and the link's print border",
  ),
};

/**
 * Floating buttons are fixed-position screen overlays that paged output would
 * repeat on every page; quick exit is additionally a safety control whose
 * printed URL would defeat its purpose. Anchor or not, they are dropped.
 */
export const PrintFloating = {
  render: () =>
    `<div class="qld__widgets">
      <a class="qld__btn qld__btn--floating qld__btn--quick-exit" href="https://www.qld.gov.au/" aria-label="Quick exit">
        <span>Quick exit</span>
      </a>
    </div>`,
  parameters: printParams(
    "that floating buttons such as quick exit are dropped entirely",
  ),
};
