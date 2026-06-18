import Template from "../../components/tab/html/component.hbs";
import { dummyText, storyParams } from "../../../.storybook/globals";
import { expect, userEvent, waitFor, within } from "storybook/test";
import { initComponents } from "../../../.storybook/decorators";
import initTab from "../../components/tab/js/global";

const defaultTabs = [
  {
    title: "Overview",
    icon: "home",
    content: `<h3>Overview</h3><p>${dummyText}</p>`,
  },
  {
    title: "Schedule",
    icon: "calendar",
    content: `
    <h3>Schedule</h3>
    <p>
        Opening hours are 9:00am to 5:00pm, Monday to Friday. Public holidays may affect availability.
    </p>
    <ul>
      <li>Monday – Friday: 9:00am – 5:00pm</li>
      <li>Saturday: 9:00am – 12:00pm</li>
      <li>Sunday: Closed</li>
    </ul>`,
  },
  {
    title: "Locations",
    icon: "location",
    content: `
    <h3>Locations</h3>
    <p>
      Find us at our Brisbane, Gold Coast and Townsville offices. Each location offers in-person and telehealth appointments.
    </p>`,
  },
];

function buildMetadata({
  theme,
  display,
  introHeading,
  introHeadingLevel,
  introBody,
  introWidth,
  tabs,
}) {
  const metadata = {
    theme: { value: theme },
    display: { value: display },
    intro_width: { value: introWidth },
    intro_heading: { value: introHeading },
    intro_heading_level: { value: introHeadingLevel },
    intro_body: { value: introBody },
    type: { value: "wysiwyg" },
    tab_num: { value: String(tabs.length) },
    id_field: { value: "" },
  };

  tabs.forEach(({ title, icon, content }, i) => {
    const n = i + 1;
    metadata[`title_${n}`] = { value: title, fieldid: `title_${n}` };
    metadata[`icon_${n}`] = { value: icon, fieldid: `icon_${n}` };
    metadata[`content_${n}`] = { value: content, fieldid: `content_${n}` };
  });

  return metadata;
}

// Build the tab component inside a #content wrapper. The design system's
// section padding is scoped to `main`/`#content`/`form`, and the full-width
// "section tab" variant pulls its tab bar up with a large negative margin that
// only lands on-screen when the section sits in that padded flow — without
// #content the tabs are pulled off the top of the canvas and disappear.
function buildContent(args) {
  const content = document.createElement("div");
  content.id = "content";
  content.innerHTML = Template({
    component: {
      data: {
        assetid: "123",
        metadata: buildMetadata(args),
      },
    },
    site: args.site,
  });
  return content;
}

function render(args) {
  return buildContent(args);
}

const meta = {
  title: "3. Components/Tabs",
  render,
  decorators: [initComponents([initTab])],
  parameters: storyParams("tabs"),
  argTypes: {
    theme: {
      description: "Visual theme applied to the tab section.",
      control: {
        type: "select",
        labels: {
          "": "White",
          light: "Light",
          alt: "Alternate",
          dark: "Dark",
          "dark-alt": "Alternate Dark",
        },
      },
      options: ["", "light", "alt", "dark", "dark-alt"],
    },
    display: {
      description:
        "Fixed-width keeps the tabs within the content column; full-width lets the section span the viewport.",
      control: {
        type: "radio",
        labels: { fixed: "Fixed width", full: "Full width" },
      },
      options: ["fixed", "full"],
    },
    introHeading: {
      description:
        "Optional heading shown above the tabs. Leave empty to omit.",
      control: { type: "text" },
    },
    introHeadingLevel: {
      description: "Heading level used for the intro heading.",
      control: { type: "radio" },
      options: ["h2", "h3", "h4", "h5"],
    },
    introBody: {
      description: "Optional intro text shown below the heading.",
      control: { type: "text" },
    },
    introWidth: {
      description: "Width of the intro block.",
      control: {
        type: "radio",
        labels: { "col-md-6": "Half width", "col-md-12": "Full width" },
      },
      options: ["col-md-6", "col-md-12"],
    },
    tabs: {
      description:
        "The set of tabs to render. Each entry has a `title`, an `icon` (core sprite id, optional) and HTML `content`.",
      control: { type: "object" },
    },
  },
  args: {
    theme: "",
    display: "fixed",
    introHeading: "Intro heading",
    introHeadingLevel: "h2",
    introBody: dummyText,
    introWidth: "col-md-6",
    tabs: defaultTabs,
  },
};

export default meta;

export const Default = {
  play: async ({ canvasElement }) => {
    const canvas = within(canvasElement);
    const tabButtons = canvas.getAllByRole("tab");

    // Activating the second tab reveals its panel and deselects the first.
    await userEvent.click(tabButtons[1]);
    await expect(tabButtons[1]).toHaveAttribute("aria-selected", "true");
    await expect(tabButtons[0]).toHaveAttribute("aria-selected", "false");

    const panel = canvasElement.querySelector(
      `.qld__tab-content[data-tab="${tabButtons[1].getAttribute("data-tab")}"]`,
    );
    await expect(panel).toHaveClass("active");
    await expect(panel).toHaveAttribute("aria-hidden", "false");

    // Arrow keys move focus along the tablist (manual activation pattern).
    tabButtons[0].focus();
    await userEvent.keyboard("{ArrowRight}");
    await expect(tabButtons[1]).toHaveFocus();
  },
};

// "Section tabs" is the full-width display: the tab set breaks out of the
// content column to span the whole section (qld__body--full-width
// qld__tab-section), and its tab bar is pulled up with a negative margin so it
// overlaps the bottom of a banner placed above it. The design system pairs it
// with a `.qld__banner--light` immediately before #content — that adjacency
// also recolours the section's box-shadow to the light banner background
// (tab/css/component.scss), so the tabs blend into the banner's bottom edge.
const sectionBanner = `
  <div class="qld__banner qld__banner--light" style="background-color: var(--QLD-color-light__background);">
    <div class="container-fluid">
      <div class="qld__banner__content">
        <h1>Patient services</h1>
        <p>Browse appointments, locations and resources using the tabs below.</p>
      </div>
    </div>
  </div>`;

export const SectionTabs = {
  args: { display: "full", introHeading: "", introBody: "" },
  render: (args) => {
    const wrapper = document.createElement("div");
    // Banner first, then #content as its next sibling so the
    // `.qld__banner--light + #content > section` rule matches.
    wrapper.innerHTML = sectionBanner;
    wrapper.appendChild(buildContent(args));
    return wrapper;
  },
  play: async ({ canvasElement }) => {
    // The component renders a <section>; the Storybook theme wrapper is a <div>,
    // so target the section element to avoid matching the wrapper's qld__body.
    const section = canvasElement.querySelector("section.qld__body");
    await expect(section).toHaveClass("qld__body--full-width");
    await expect(section).toHaveClass("qld__tab-section");

    await expect(
      canvasElement.querySelector(".qld__tab-container"),
    ).toHaveClass("qld__tab-container__fixed");

    // The banner sits immediately before #content so the tab bar overlaps it.
    const banner = canvasElement.querySelector(".qld__banner--light");
    await expect(banner).not.toBeNull();
    await expect(banner.nextElementSibling).toBe(
      canvasElement.querySelector("#content"),
    );
  },
};

export const WithoutIntro = {
  args: { introHeading: "", introBody: "" },
};

export const WithoutIcons = {
  args: {
    tabs: defaultTabs.map(({ title, content }) => ({
      title,
      icon: "",
      content,
    })),
  },
};

export const Light = {
  args: { theme: "light" },
};

export const Alternate = {
  args: { theme: "alt" },
};

export const Dark = {
  args: { theme: "dark" },
};

export const DarkAlt = {
  args: { theme: "dark-alt" },
};

// Many tabs overflow the fixed-width container, revealing the scroll arrows.
const overflowTab = (title, icon) => ({
  title,
  icon,
  content: `<h3>${title}</h3><p>${dummyText}</p>`,
});

export const Overflow = {
  // Pin the story to a small screen so the tab list overflows and the scroll
  // arrows are visible on load (they're hidden until the tabs exceed the width).
  globals: { viewport: { value: "small", isRotated: false } },
  args: {
    introHeading: "",
    introBody: "",
    tabs: [
      overflowTab("Appointments", "calendar"),
      overflowTab("Locations", "location"),
      overflowTab("Documents", "document"),
      overflowTab("Messages", "speech"),
      overflowTab("Favourites", "favourite"),
      overflowTab("Downloads", "download"),
      overflowTab("Settings", "settings"),
      overflowTab("Print", "print"),
    ],
  },
  play: async ({ canvasElement }) => {
    const container = canvasElement.querySelector(".qld__tab-container");
    const tabList = container.querySelector(".qld__tabs");
    const leftBtn = container.querySelector(".tab-overflow-nav-button-left");
    const rightBtn = container.querySelector(".tab-overflow-nav-button-right");

    // Scroll instantly so assertions don't race the CSS smooth-scroll animation.
    tabList.style.scrollBehavior = "auto";

    // Guarantee overflow regardless of the headless runner's viewport width,
    // then fire a resize so the (debounced) handler re-evaluates and reveals
    // the right arrow. Only the right arrow shows at the start of the list.
    container.style.maxWidth = "320px";
    window.dispatchEvent(new Event("resize"));
    await waitFor(() => expect(rightBtn).toBeVisible());
    await expect(leftBtn).not.toBeVisible();

    // Scrolling right advances the list and reveals the left arrow.
    await userEvent.click(rightBtn);
    await waitFor(() => expect(tabList.scrollLeft).toBeGreaterThan(0));
    await expect(leftBtn).toBeVisible();

    // Scrolling left returns to the start and hides the left arrow again.
    await userEvent.click(leftBtn);
    await waitFor(() => expect(tabList.scrollLeft).toBe(0));
    await expect(leftBtn).not.toBeVisible();

    // Restore the width so the rendered story isn't left pinned at the narrow
    // width the test imposed (the small viewport still overflows on its own).
    container.style.maxWidth = "";
  },
};
