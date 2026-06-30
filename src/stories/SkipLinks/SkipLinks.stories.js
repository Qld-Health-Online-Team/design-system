import { storyParams } from "../../../.storybook/globals";

function render(args) {
  return `<nav class="qld__skip-link" aria-label="skip links" tabindex="-1">
    <a class="qld__skip-link__link" href="#${args.contentTarget}">Skip to main content</a>
    <a class="qld__skip-link__link qld__skip-link__link-desktop" href="#${args.navTarget}">
      Skip to ${args.navTargetText}
    </a>
    <a class="qld__skip-link__link qld__skip-link__link-mobile" href="#${args.mobileNavTarget}">
      Skip to ${args.mobileNavTargetText}
    </a>
  </nav>`;
}

const meta = {
  title: "3. Components/Skip Links",
  render,
  argTypes: {
    contentTarget: {
      description:
        "ID of the main content element the first skip link points to.",
      control: { type: "text" },
    },
    navTarget: {
      description:
        "ID of the desktop navigation element the second skip link points to.",
      control: { type: "text" },
    },
    navTargetText: {
      description: "Label for the desktop navigation skip link.",
      control: { type: "text" },
    },
    mobileNavTarget: {
      description:
        "ID of the mobile navigation element the third skip link points to.",
      control: { type: "text" },
    },
    mobileNavTargetText: {
      description: "Label for the mobile navigation skip link.",
      control: { type: "text" },
    },
  },
  args: {
    contentTarget: "content",
    navTarget: "nav",
    navTargetText: "main navigation",
    mobileNavTarget: "mobile-nav",
    mobileNavTargetText: "mobile navigation",
  },
  decorators: [
    // Mimicking the functionality of skip links only in storybook. This is necessary because skiplinks do not exist alone, only on the header component.
    (Story, context) => {
      const { contentTarget, navTarget, mobileNavTarget } = context.args;
      const wrapper = document.createElement("div");
      wrapper.className = "qld__header";
      wrapper.innerHTML = Story();

      // Add suplement text to guide the user into the component, as it's hidden at first.
      const hint = document.createElement("p");
      hint.textContent =
        "Click on this text, then hit tab to bring up the skip links. Use Enter to skip to the listed item.";
      wrapper.insertBefore(hint, wrapper.firstChild);

      // Adding space after the story
      const spacer = document.createElement("div");
      spacer.style.height = "75vh";
      const spacer2 = document.createElement("div");
      spacer2.style.height = "100vh";

      const makeTarget = (id, label) => {
        const el = document.createElement("div");
        el.id = id;
        el.style.cssText =
          "margin-top: 32px; padding: 16px; border: 2px dashed #ccc;";
        el.textContent = `#${id} — ${label}`;
        return el;
      };

      // Inserting spacers/children to the story to display the skip links functionality.
      wrapper.insertBefore(spacer, wrapper.children[1]);
      wrapper.appendChild(makeTarget(contentTarget, "Main content target"));
      wrapper.appendChild(makeTarget(navTarget, "Desktop navigation target"));
      wrapper.appendChild(
        makeTarget(mobileNavTarget, "Mobile navigation target"),
      );
      wrapper.appendChild(spacer2);

      // Adding click events to keep the user on the page. This is not necessary in prod, just SB as the iframes work react differently.
      const nav = wrapper.querySelector(".qld__skip-link");
      nav.addEventListener("click", (e) => {
        const anchor = e.target.closest("a[href^='#']");
        if (!anchor) return;
        e.preventDefault();
        const target = wrapper.querySelector(anchor.getAttribute("href"));
        if (target) target.scrollIntoView({ behavior: "smooth" });
      });

      return wrapper;
    },
  ],
  parameters: { ...storyParams("skipLinks"), skipDecorator: true },
};

export default meta;

export const Default = {};
