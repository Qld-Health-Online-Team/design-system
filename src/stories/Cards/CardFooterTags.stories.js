import { storyParams } from "../../../.storybook/globals";
import { expect, within } from "storybook/test";

// No card template renders a tag list in its footer — the combination is
// authored in Matrix — but `_global/css/tags` and the card components both
// style `.qld__card__footer .qld__tag`, so the markup is built by hand here to
// put that styling under test.
const CARD_THEMES = [
  { label: "White", modifier: "", family: "light" },
  { label: "Light", modifier: "qld__card--light", family: "light" },
  { label: "Alternate", modifier: "qld__card--alt", family: "light" },
  { label: "Dark", modifier: "qld__card--dark", family: "dark" },
  { label: "Dark alternate", modifier: "qld__card--dark-alt", family: "dark" },
];

// Both link-tag forms plus the plain one. `qld__tag--link` carries one more
// class than the bare anchor, which is enough to change which rule wins the
// cascade, so a theming bug can reach one form and not another.
const tagList = () => `
  <ul class="qld__tag-list">
    <li><a class="qld__tag" href="#">Policies</a></li>
    <li><a class="qld__tag qld__tag--link" href="#">Guidelines</a></li>
    <li class="qld__tag">Reports</li>
  </ul>
`;

const card = ({ label, modifier }) => `
  <div class="col-xs-12 col-md-12">
    <div class="qld__card qld__card__multi-action ${modifier}">
      <div class="qld__card__inner">
        <div class="qld__card__content">
          <div class="qld__card__content-inner">
            <h3 class="qld__card__title">
              <a class="qld__card--clickable__link" href="#">${label} card</a>
            </h3>
            <p class="qld__card__description">
              The footer tags below should take their colour from the card's own
              theme, not the page's.
            </p>
          </div>
        </div>
        <div class="qld__card__footer">
          <hr class="qld__horizontal-rule" aria-hidden="true" />
          <div class="qld__card__footer-inner">
            ${tagList()}
          </div>
        </div>
      </div>
    </div>
  </div>
`;

const render = () => {
  const container = document.createElement("div");
  // #content so the design system's section padding applies, matching the card
  // stories.
  container.id = "content";
  container.innerHTML = `
    <div class="qld__body">
      <div class="row">
        <div class="qld__card-list qld__card-list--matchheight">
          ${CARD_THEMES.map(card).join("")}
        </div>
      </div>
    </div>
  `;
  return container;
};

export default {
  title: "3. Components/Cards/Card Footer Tags",
  render,
  parameters: storyParams("card"),
};

export const AllCardThemes = {};

/**
 * Resolve a design token to the `rgb()` string `getComputedStyle` reports, so
 * the assertions compare a token to a token rather than to a literal colour.
 */
function resolveToken(context, token) {
  const probe = document.createElement("span");
  probe.style.color = `var(${token})`;
  context.appendChild(probe);
  const value = getComputedStyle(probe).color;
  probe.remove();
  return value;
}

/**
 * The three tag forms in one card. A card with no modifier is the default
 * theme, so an empty modifier selects on the card class alone.
 */
function footerTags(canvasElement, modifier) {
  const card = canvasElement.querySelector(
    modifier ? `.${modifier}` : ".qld__card:not([class*='qld__card--'])",
  );
  const footer = ".qld__card__footer";
  return {
    // Anchor with no variant class, which the element-selector rules reach.
    bare: card.querySelector(`${footer} a.qld__tag:not(.qld__tag--link)`),
    // One more class, which is enough to win a different rule.
    link: card.querySelector(`${footer} a.qld__tag--link`),
    // Not focusable; the base block styles it.
    plain: card.querySelector(`${footer} li.qld__tag`),
  };
}

/**
 * A card carries its own theme, so its footer tags take that theme's colours —
 * not the page's, and not another card theme's.
 *
 * Two defects of the same shape have lived here. Both the tags component and
 * the card components style `.qld__card__footer .qld__tag` at specificities
 * close enough to tie, so a theme-agnostic `.qld__card` rule declared later in
 * the cascade quietly beats the `.qld__card--dark` one; and within the tags
 * component the light and alt groups were once written against the same
 * `.qld__card` selector, collapsing onto each other. Each assertion below
 * covers one of those, across every theme and tag form.
 *
 * `:hover` is deliberately absent. `userEvent.hover` drives synthetic events,
 * which never put the browser into the `:hover` state — `getComputedStyle`
 * would report the resting value and the assertion could not fail. Asserting it
 * needs a pseudo-state addon, which is not installed.
 */
export const FooterTagsFollowTheCardTheme = {
  tags: ["!autodocs"],
  parameters: { chromatic: { disableSnapshot: true } },
  play: async ({ canvasElement }) => {
    const token = (name) => resolveToken(canvasElement, name);

    // Link colour: the tag reads as a link, in the card's own theme.
    for (const { label, modifier, family } of CARD_THEMES) {
      const expected = token(`--QLD-color-${family}__link`);
      const { bare, link } = footerTags(canvasElement, modifier);

      for (const [form, tag] of Object.entries({ bare, link })) {
        await expect(
          getComputedStyle(tag).color,
          `${label}: ${form} tag colour`,
        ).toBe(expected);
      }
    }

    // Border: each theme has its own, and light is not alt.
    const borders = {
      "qld__card--light": "--QLD-color-light__border",
      "qld__card--alt": "--QLD-color-light__border--alt",
      "qld__card--dark": "--QLD-color-dark__border--alt",
      "qld__card--dark-alt": "--QLD-color-dark__border",
    };
    for (const [modifier, name] of Object.entries(borders)) {
      const { plain } = footerTags(canvasElement, modifier);
      await expect(
        getComputedStyle(plain).borderTopColor,
        `${modifier}: plain tag border`,
      ).toBe(token(name));
    }
    const borderOf = (modifier) =>
      getComputedStyle(footerTags(canvasElement, modifier).plain)
        .borderTopColor;
    await expect(borderOf("qld__card--light")).not.toBe(
      borderOf("qld__card--alt"),
    );

    // Focus ring: `QLD-focus` takes the theme as an argument rather than
    // reading it from context, so a card theme that forgets to pass "dark"
    // leaves a light focus ring on a dark background. Only one element can hold
    // focus at a time, so these run in sequence rather than as a rendered grid.
    for (const { label, modifier, family } of CARD_THEMES) {
      const expected = token(`--QLD-color-${family}__focus`);
      const { bare, link } = footerTags(canvasElement, modifier);

      for (const [form, tag] of Object.entries({ bare, link })) {
        tag.focus();
        await expect(
          document.activeElement,
          `${label}: ${form} tag focusable`,
        ).toBe(tag);
        await expect(
          getComputedStyle(tag).outlineColor,
          `${label}: ${form} tag focus ring`,
        ).toBe(expected);
        tag.blur();
      }
    }

    // Guards the selectors every assertion above depends on.
    const canvas = within(canvasElement);
    await expect(canvas.getAllByText("Policies")).toHaveLength(
      CARD_THEMES.length,
    );
  },
};
