import { iconSpritePath, storyParams } from "../../../.storybook/globals";

// The search field extracted from the Basic Search banner
// (src/components/basic_search/html/component.hbs), rendered standalone so the
// input + button can be developed and reviewed in isolation. The hidden `name`
// field is kept as-is — it's a honeypot the form uses for spam protection.
const esc = (value) => String(value).replace(/"/g, "&quot;");

function renderSearchInput({ value, placeholder, label, disabled }) {
  const disabledAttr = disabled ? " disabled" : "";
  const placeholderAttr = placeholder
    ? ` placeholder="${esc(placeholder)}"`
    : "";

  return `
<div class="qld__search-form--wrapper">
  <form
    id="search-form-global-basic"
    class="qld__search-form"
    role="search"
    aria-label="${esc(label)}"
    action="#"
  >
    <div class="qld__search-form__inner">
      <svg
        class="qld__icon qld__icon--sm qld__search-form__inner-icon"
        xmlns="http://www.w3.org/2000/svg"
        aria-hidden="true"
      >
        <use href="${iconSpritePath}#search"></use>
      </svg>
      <input
        id="search-input-global-basic-query"
        class="qld__text-input data-hj-allow"
        type="search"
        name="query"
        aria-expanded="false"
        autocomplete="off"${placeholderAttr}
        value="${esc(value)}"${disabledAttr}
      />
      <input
        id="name"
        class="qld__text-input--validation"
        type="text"
        name="name"
        autocomplete="off"
        tabindex="-1"
      />
      <div class="qld__search-form__btn">
        <button
          class="qld__btn qld__btn--search"
          type="button"
          aria-label="Search"${disabledAttr}
        >
          <span class="qld__btn__icon">
            <svg
              class="qld__icon"
              xmlns="http://www.w3.org/2000/svg"
              aria-hidden="true"
            >
              <use href="${iconSpritePath}#search"></use>
            </svg>
          </span>
          <span class="qld__btn__text">Search</span>
        </button>
      </div>
    </div>
  </form>
</div>`;
}

// ── Meta ────────────────────────────────────────────────────────────────────

const meta = {
  title: "3. Components/Search Input",
  render: renderSearchInput,
  argTypes: {
    value: {
      description: "Current value of the search field.",
      control: { type: "text" },
    },
    placeholder: {
      description: "Placeholder text shown when the field is empty.",
      control: { type: "text" },
    },
    label: {
      description: "Accessible label for the search form (aria-label).",
      control: { type: "text" },
    },
    disabled: {
      description:
        "Disables the input and button. This is the state the field ships in — the component's JS enables it once loaded.",
      control: { type: "boolean" },
    },
  },
  args: {
    value: "",
    placeholder: "",
    label: "sitewide",
    disabled: false,
  },
  // No QLD Design System / Figma resource links published for this field yet, so
  // the shared storyParams() Resources block is intentionally omitted.
  parameters: {
    layout: "padded",
    ...storyParams("searchInput"),
  },
};

export default meta;

// ── Stories ─────────────────────────────────────────────────────────────────

export const Default = {};

export const WithValue = {
  args: { value: "how does breast screening work" },
};

export const WithPlaceholder = {
  args: { placeholder: "Search this site" },
};

export const Disabled = {
  args: { disabled: true, value: "how does breast screening work" },
};

// Below the `lg` breakpoint (992px) the button collapses to an icon-only
// control: `qld__btn__text` becomes screen-reader-only and `qld__btn__icon`
// shows. Pinned to the 400px "small" viewport so this state always renders
// regardless of the preview width.
export const SmallDevice = {
  args: { value: "breast screening" },
  globals: {
    viewport: { value: "small", isRotated: false },
  },
};

// Theme variants. The body theme class (applied by the global decorator) plus
// the matching canvas background are both driven by the `backgrounds` global, so
// each story pins it to a theme. The default white theme is covered by `Default`.
const themedValue = "how does breast screening work";

export const LightTheme = {
  args: { value: themedValue },
  globals: { backgrounds: { value: "light" } },
};

export const LightAlternateTheme = {
  args: { value: themedValue },
  globals: { backgrounds: { value: "light alt" } },
};

export const DarkTheme = {
  args: { value: themedValue },
  globals: { backgrounds: { value: "dark" } },
};

export const DarkAlternateTheme = {
  args: { value: themedValue },
  globals: { backgrounds: { value: "dark alt" } },
};
