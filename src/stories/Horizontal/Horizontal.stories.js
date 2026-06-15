import { themes, storyParams } from "../../../.storybook/globals";
import { themeWrapper } from "../../../.storybook/helper-functions.js";

function renderHorizontalRule({ size, decorative }) {
  const sizeClass = {
    default: "",
    md: "qld__horizontal-rule--md",
    lg: "qld__horizontal-rule--lg",
  };

  const classes = ["qld__horizontal-rule", sizeClass[size] ?? ""]
    .filter(Boolean)
    .join(" ");

  return `<hr class="${classes}"${decorative ? ' aria-hidden="true"' : ""}>`;
}

export default {
  title: "3. Components/Horizontal rule",
  render: renderHorizontalRule,
  argTypes: {
    size: {
      control: {
        type: "radio",
        labels: {
          default: "Default",
          md: "Medium",
          lg: "Large",
        },
      },
      options: ["default", "md", "lg"],
      description:
        "The spacing/size of the horizontal rule, controlling its thickness and surrounding margin",
      table: {
        defaultValue: { summary: "default" },
      },
    },
    decorative: {
      name: "decorative",
      control: "boolean",
      description:
        'Marks the rule as decorative with aria-hidden="true" so it is ignored by assistive technology. Use when the rule is purely visual rather than a meaningful thematic break',
      table: {
        defaultValue: { summary: "true" },
      },
    },
  },
  args: {
    size: "default",
    decorative: true,
  },
  parameters: storyParams("horizontalRule"),
};

export const Default = {};

const allVariantsArgTypes = {
  size: {
    table: {
      disable: true,
    },
  },
  decorative: {
    table: {
      disable: true,
    },
  },
};

// Reproduces the QLD Design System "horizontal rule" colour examples page:
// for each theme, a card (with a rule in its footer) on the left, and the three
// rule sizes labelled on the right.
const colourExampleCard = (cardModifier) => `
        <div class="qld__card ${cardModifier}">
          <div class="qld__card__inner">
            <div class="qld__card__content">
              <div class="qld__card__content-inner">
                <h3 class="qld__card__title"><a href="javascript:void(0)">Card title</a></h3>
                <p class="qld__card__description">Card body text</p>
                <div class="qld__card__footer">
                  <hr class="qld__horizontal-rule" aria-hidden="true">
                  <div class="qld__card__footer-inner">Footer</div>
                </div>
              </div>
            </div>
          </div>
        </div>`;

const labelledRule = (label, size, decorative = true) => `
        <!-- ${label} -->
        <div style="display:flex; align-items:center; gap:1rem;">
          <span style="flex:0 0 5rem;"><strong>${label}</strong></span>
          <div style="flex:1;">${renderHorizontalRule({ size, decorative })}</div>
        </div>`;

const exampleRules = (decorative) => `
            ${labelledRule("Large", "lg", decorative)}
            ${labelledRule("Medium", "md", decorative)}
            ${labelledRule("Small", "default", decorative)}`;

const colourExampleRow = (heading, cardModifier) => `
        <h3>${heading}</h3>
        <div style="display:flex; flex-wrap:wrap; gap:2rem; align-items:flex-start;">
          <!-- Card -->
          <div style="flex:0 0 18rem;">${colourExampleCard(cardModifier)}</div>
          <!-- Rule sizes -->
          <div style="flex:1; min-width:18rem;">${exampleRules(true)}</div>
        </div>`;

// Decorative rules are hidden from assistive tech (aria-hidden) and are used as
// purely visual dividers, e.g. inside a card footer.
export const Decorative = {
  argTypes: allVariantsArgTypes,
  render: () => {
    const intro = `
        <h2 class="qld__h3">Decorative horizontal rules</h2>
        <p class="qld__body">Decorative horizontal rules use the default border colour determined by the colour of its container.</p>`;
    return (
      intro +
      [
        themeWrapper(
          themes["white"],
          colourExampleRow("Default colour example", ""),
        ),
        themeWrapper(
          themes["light"],
          colourExampleRow("Light colour example", "qld__card--light"),
        ),
        themeWrapper(
          themes["light alt"],
          colourExampleRow("Alt colour example", "qld__card--alt"),
        ),
        themeWrapper(
          themes["dark"],
          colourExampleRow("Dark colour example", "qld__card--dark"),
        ),
        themeWrapper(
          themes["dark alt"],
          colourExampleRow("Dark-alt colour example", "qld__card--dark-alt"),
        ),
      ].join("")
    );
  },
};

// Thematic rules are exposed to assistive tech (no aria-hidden) as a meaningful
// thematic break between content. They use the light-alt / dark-alt border
// styles to meet the 3:1 contrast requirement for graphical elements.
const thematicText = `<p class="qld__body">&lt;p&gt;Lorem ipsum dolor sit amet consectetur.&lt;/p&gt;</p>`;

const thematicBreak = `
        ${thematicText}
        ${renderHorizontalRule({ size: "default", decorative: false })}
        ${thematicText}`;

const thematicRow = (heading) => `
        <h3>${heading}</h3>
        <div style="display:flex; flex-wrap:wrap; gap:2rem; align-items:flex-start;">
          <!-- Thematic break -->
          <div style="flex:0 0 18rem;">${thematicBreak}</div>
          <!-- Rule sizes -->
          <div style="flex:1; min-width:18rem;">${exampleRules(false)}</div>
        </div>`;

export const Thematic = {
  argTypes: allVariantsArgTypes,
  render: () => {
    const intro = `
        <h2 class="qld__h3">Thematic horizontal rules</h2>
        <p class="qld__body">If a horizontal rule is placed on the page as a thematic break it will use light-alternative and dark-alternative border styles to ensure the semantic element meets a contrast requirement of 3:1 needed for graphical elements.</p>`;
    return (
      intro +
      [
        themeWrapper(themes["white"], thematicRow("Default colour example")),
        themeWrapper(themes["light"], thematicRow("Light colour example")),
        themeWrapper(themes["light alt"], thematicRow("Alt colour example")),
        themeWrapper(themes["dark"], thematicRow("Dark colour example")),
        themeWrapper(
          themes["dark alt"],
          thematicRow("Dark-alt Colour example"),
        ),
      ].join("")
    );
  },
};
