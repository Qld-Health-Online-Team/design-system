import Template from "../../components/breadcrumbs/html/component.hbs";
import { storyParams, themes } from "../../../.storybook/globals";
import { themeWrapper } from "../../../.storybook/helper-functions.js";
import { initComponents } from "../../../.storybook/decorators";
import initBreadcrumb from "../../components/breadcrumbs/js/global";
import { userEvent, expect, waitFor } from "storybook/test";

function render({ displayBreadcrumbs, lineage, ...args }) {
  return Template({
    current: {
      data: {
        metadata: {
          displayBreadcrumbs: { value: displayBreadcrumbs },
        },
      },
      lineage: lineage,
    },
    ...args,
  });
}

function generateMockLineage(length) {
  const mockLineage = [];
  for (let i = 0; i < length; i++) {
    mockLineage.push({
      asset_type_code: "page",
      asset_short_name: `Page ${i + 1}`,
      asset_is_site_asset: "2",
    });
  }
  return mockLineage;
}

// Wrap the breadcrumbs in the page-body markup the overflow behaviour needs
// (getTheElements only measures breadcrumbs inside `.qld__body--breadcrumb`),
// optionally applying a theme. All Overflow stories share this; only the theme
// differs between them.
const overflowRender = (theme) => (args) => {
  const breadcrumbs = theme
    ? themeWrapper(themes[theme], render(args))
    : render(args);
  return `<section class="qld__body qld__body--breadcrumb"><div class="container-fluid">${breadcrumbs}</div></section>`;
};

const meta = {
  title: "3. Components/Breadcrumbs",
  render,
  decorators: [initComponents([initBreadcrumb])],
  argTypes: {
    displayBreadcrumbs: {
      description: "Whether the component should be displayed.",
      control: {
        type: "radio",
        labels: {
          true: "True",
          false: "False",
        },
      },
      options: ["true", "false"],
      default: "true",
    },
  },
  args: {
    displayBreadcrumbs: "true",
    lineage: generateMockLineage(5),
  },
  parameters: storyParams("breadcrumbs"),
};
export default meta;

export const Default = {};

export const Overflow = {
  args: { lineage: generateMockLineage(12) },
  render: overflowRender(),
  parameters: {
    ...meta.parameters,
    docs: {
      ...meta.parameters.docs,
      story: {
        ...meta.parameters.docs.story,
        height: "550px",
      },
    },
  },
  play: async ({ canvasElement }) => {
    // The overflow toggle is injected by initBreadcrumb after the list is
    // laid out, so wait for it. It carries no accessible name (its only
    // child is an aria-hidden icon), hence the class selector over getByRole.
    const toggle = await waitFor(() => {
      const btn = canvasElement.querySelector(".qld__overflow_menu__btn");
      if (!btn) throw new Error("overflow toggle not yet rendered");
      return btn;
    });

    await expect(toggle).toHaveAttribute("aria-expanded", "false");

    await userEvent.click(toggle);
    await expect(toggle).toHaveAttribute("aria-expanded", "true");

    // The shared collapsible primitive reveals the menu panel on open.
    const panel = canvasElement.querySelector(
      `[id="${toggle.getAttribute("aria-controls")}"]`,
    );
    await waitFor(() => expect(panel).toHaveClass("qld__accordion--open"));
  },
};

export const Light = {
  render: (args) => {
    return themeWrapper(themes["light"], render(args));
  },
};

export const LightOverflow = {
  ...Overflow,
  render: overflowRender("light"),
};

export const LightAlt = {
  render: (args) => {
    return themeWrapper(themes["light alt"], `${render(args)}`);
  },
};

export const LightAltOverflow = {
  ...Overflow,
  render: overflowRender("light alt"),
};

export const Dark = {
  render: (args) => {
    return themeWrapper(themes["dark"], `${render(args)}`);
  },
};

export const DarkOverflow = {
  ...Overflow,
  render: overflowRender("dark"),
};

export const DarkAlt = {
  render: (args) => {
    return themeWrapper(themes["dark alt"], `${render(args)}`);
  },
};

export const DarkAltOverflow = {
  ...Overflow,
  render: overflowRender("dark alt"),
};
