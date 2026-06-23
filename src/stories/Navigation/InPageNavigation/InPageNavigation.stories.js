import Template from "../../../components/in_page_navigation/html/component.hbs";
import { dummyText, storyParams } from "../../../../.storybook/globals";
import { initComponents } from "../../../../.storybook/decorators";
import initInPageNavigation from "../../../components/in_page_navigation/js/global";
import initTab from "../../../components/tab/js/global";
import { expect, waitFor } from "storybook/test";

const renderInPageNavigation = ({ heading, headingType, ...args }) =>
  Template({
    component: {
      data: {
        metadata: {
          heading: { value: heading },
          headingType: { value: headingType },
        },
      },
    },
    ...args,
  });

export default {
  title: "3. Components/Navigation/In-page Navigation",
  render: renderInPageNavigation,
  argTypes: {
    heading: {
      description: "The title of the in-page navigation.",
      control: { type: "text" },
    },
    headingType: {
      description:
        "The type of the heading the in-page navigation will scan for.",
      control: {
        type: "radio",
        labels: {
          h2: "H2",
          h3: "H3",
          h4: "H4",
          h5: "H5",
          h6: "H6",
        },
      },
      options: ["h2", "h3", "h4", "h5", "h6"],
      table: {
        defaultValue: { summary: "h2" },
      },
    },
    // Internal flag: stories that supply their own page layout (e.g. the tab
    // example) opt out of the shared dummy-heading scaffolding below.
    skipDummyHeadings: { table: { disable: true } },
  },
  args: {
    heading: "On this page",
    headingType: "h2",
  },
  parameters: storyParams("inPageNavigation"),
  decorators: [
    initComponents([initInPageNavigation]),
    (Story, context) => {
      // Stories that provide their own surrounding content render bare inside
      // #content without the default dummy headings.
      if (context.args.skipDummyHeadings) {
        return `<section><div class="container-fluid"><div id="content">${Story()}</div></div></section>`;
      }
      // Default IDs for headings. Simulates the publisher not adding custom ID's to the page headings which is a
      // common scenario
      if (!context.args.ids) {
        context.args.ids = [
          "",
          "",
          "",
          "",
          "",
          "",
          "",
          "",
          "",
          "",
          "",
          "",
          "",
          "",
          "",
        ];
      }
      let dummyHeadings = ``;

      dummyHeadings += `<br><div><h2 id="${context.args.ids[0]}">H2 Overview</h2><p>${dummyText}</div><br>`;
      dummyHeadings += `<br><div><h3 id="${context.args.ids[1]}">H3 Overview</h3><p>${dummyText}</div><br>`;
      dummyHeadings += `<br><div><h4 id="${context.args.ids[2]}">H4 Overview</h4><p>${dummyText}</div><br>`;
      dummyHeadings += `<br><div><h5 id="${context.args.ids[3]}">H5 Overview</h5><p>${dummyText}</div><br>`;
      dummyHeadings += `<br><div><h6 id="${context.args.ids[4]}">H6 Overview</h6><p>${dummyText}</div><br>`;
      dummyHeadings += `<br><div><h2 id="${context.args.ids[5]}">H2 Example</h2><p>${dummyText}</div><br>`;
      dummyHeadings += `<br><div><h3 id="${context.args.ids[6]}">H3 Example</h3><p>${dummyText}</div><br>`;
      dummyHeadings += `<br><div><h4 id="${context.args.ids[7]}">H4 Example</h4><p>${dummyText}</div><br>`;
      dummyHeadings += `<br><div><h5 id="${context.args.ids[8]}">H5 Example</h5><p>${dummyText}</div><br>`;
      dummyHeadings += `<br><div><h6 id="${context.args.ids[9]}">H6 Example</h6><p>${dummyText}</div><br>`;
      dummyHeadings += `<br><div><h2 id="${context.args.ids[10]}">H2 Usage guidelines</h2><p>${dummyText}</div><br>`;
      dummyHeadings += `<br><div><h3 id="${context.args.ids[11]}">H3 Usage guidelines</h3><p>${dummyText}</div><br>`;
      dummyHeadings += `<br><div><h4 id="${context.args.ids[12]}">H4 Usage guidelines</h4><p>${dummyText}</div><br>`;
      dummyHeadings += `<br><div><h5 id="${context.args.ids[13]}">H5 Usage guidelines</h5><p>${dummyText}</div><br>`;
      dummyHeadings += `<br><div><h6 id="${context.args.ids[14]}">H6 Usage guidelines</h6><p>${dummyText}</div><br>`;
      return `<section><div class="container-fluid"><div id="content">${Story()}${dummyHeadings}</div></div></section>`;
    },
  ],
};

export const Default = {};
export const headingLevel3 = { args: { headingType: "h3" } };
export const headingLevel4 = { args: { headingType: "h4" } };
export const headingLevel5 = { args: { headingType: "h5" } };
export const headingLevel6 = { args: { headingType: "h6" } };
export const customIdentifiers = {
  args: {
    ids: [
      "id-1",
      "id-2",
      "id-3",
      "id-4",
      "id-5",
      "id-6",
      "id-7",
      "id-8",
      "id-9",
      "id-10",
      "id-11",
      "id-12",
      "id-13",
      "id-14",
      "id-15",
    ],
  },
};
export const duplicateIdentifiers = {
  args: {
    ids: [
      "same-id",
      "same-id",
      "same-id",
      "same-id",
      "same-id",
      "same-id",
      "same-id",
      "same-id",
      "same-id",
      "same-id",
      "same-id",
      "same-id",
      "same-id",
      "same-id",
      "same-id",
    ],
  },
};

// An in-page nav placed inside a tab panel scopes its heading search to that
// panel, so it only lists anchors that are reachable within the same tab —
// headings in the sibling panel (Reference) must not appear in the list.
const tabWithInPageNav = () => {
  const nav = Template({
    component: {
      data: {
        metadata: {
          heading: { value: "On this page" },
          headingType: { value: "h2" },
        },
      },
    },
  });

  return `
    <div class="qld__tab-container qld__tab-container__fixed" id="tab-demo">
      <div class="qld__tabs" role="tablist">
        <button role="tab" class="qld__tab-button active" data-tab="tab1-demo" aria-selected="true" aria-controls="tab1-demo-content" tabindex="0" id="tab1-demo-button"><span>Getting started</span></button>
        <button role="tab" class="qld__tab-button" data-tab="tab2-demo" aria-selected="false" aria-controls="tab2-demo-content" tabindex="-1" id="tab2-demo-button"><span>Reference</span></button>
      </div>
      <div data-tab="tab1-demo" class="qld__tab-content active" role="tabpanel" aria-labelledby="tab1-demo-button" id="tab1-demo-content" tabindex="0" aria-hidden="false">
        ${nav}
        <h2>Installation</h2><p>${dummyText}</p>
        <h2>Configuration</h2><p>${dummyText}</p>
      </div>
      <div data-tab="tab2-demo" class="qld__tab-content" role="tabpanel" aria-labelledby="tab2-demo-button" id="tab2-demo-content" tabindex="0">
        <h2>API options</h2><p>${dummyText}</p>
        <h2>Events</h2><p>${dummyText}</p>
      </div>
    </div>`;
};

export const WithinTabPanel = {
  args: { skipDummyHeadings: true },
  render: tabWithInPageNav,
  decorators: [initComponents([initTab])],
  play: async ({ canvasElement }) => {
    const panel = canvasElement.querySelector("#tab1-demo-content");
    const listedNow = () =>
      [...panel.querySelectorAll(".qld__link-list a")].map((a) =>
        a.textContent.trim(),
      );

    // initInPageNavigation populates the list from a setTimeout(0) init that
    // runs after render, so wait for it before asserting. Only this panel's
    // headings are listed (the nav's own "On this page" heading carries
    // qld__inpage-nav-links__heading and is excluded).
    await waitFor(() =>
      expect(listedNow()).toEqual(["Installation", "Configuration"]),
    );

    // The sibling panel's headings are out of scope and must not appear.
    const listed = listedNow();
    await expect(listed).not.toContain("API options");
    await expect(listed).not.toContain("Events");
  },
};
