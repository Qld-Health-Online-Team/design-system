import { storyParams } from "../../../.storybook/globals";
import { expect, within } from "storybook/test";

// No card template renders a tag list in its footer — the combination is
// authored in Matrix — but `_global/css/tags` and the card components both
// style `.qld__card__footer .qld__tag`, so the markup is built by hand here to
// put that styling under test.
const CARD_THEMES = [
  { label: "White", modifier: "" },
  { label: "Light", modifier: "qld__card--light" },
  { label: "Alternate", modifier: "qld__card--alt" },
  { label: "Dark", modifier: "qld__card--dark" },
  { label: "Dark alternate", modifier: "qld__card--dark-alt" },
];

// Both link-tag forms. `qld__tag--link` carries one more class than the bare
// anchor, which is enough to change which rule wins the cascade, so a theming
// bug can reach one and not the other.
const tagList = () => `
  <ul class="qld__tag-list">
    <li><a class="qld__tag" href="#">Policies</a></li>
    <li><a class="qld__tag qld__tag--link" href="#">Guidelines</a></li>
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

const DARK_CARDS = ["qld__card--dark", "qld__card--dark-alt"];

function footerTags(canvasElement, modifier) {
  const card = canvasElement.querySelector(`.${modifier}`);
  return {
    bare: card.querySelector(
      ".qld__card__footer .qld__tag:not(.qld__tag--link)",
    ),
    link: card.querySelector(".qld__card__footer .qld__tag--link"),
  };
}

/**
 * A card carries its own theme, so a tag in a dark card's footer takes the dark
 * link colour rather than the page's.
 *
 * Both the tags component and the card components style
 * `.qld__card__footer .qld__tag`, at specificities close enough to tie. A
 * theme-agnostic `.qld__card` rule declared later in the cascade then beats the
 * `.qld__card--dark` one and repaints the tag in light-theme colours.
 *
 * Only the resting colour is asserted. The same defect reaches `:hover`, but
 * `userEvent.hover` drives synthetic events, which never put the browser into
 * the `:hover` state — `getComputedStyle` would report the resting colour and
 * the assertion could not fail.
 */
export const DarkCardTagsUseDarkTheme = {
  tags: ["!autodocs"],
  parameters: { chromatic: { disableSnapshot: true } },
  play: async ({ canvasElement }) => {
    const darkLink = resolveToken(canvasElement, "--QLD-color-dark__link");

    for (const modifier of DARK_CARDS) {
      const tags = footerTags(canvasElement, modifier);

      for (const [form, tag] of Object.entries(tags)) {
        await expect(
          getComputedStyle(tag).color,
          `${modifier} ${form} tag at rest`,
        ).toBe(darkLink);
      }
    }

    // The light card is the control: same markup, light-theme colours.
    const lightLink = resolveToken(canvasElement, "--QLD-color-light__link");
    const light = footerTags(canvasElement, "qld__card--light");
    for (const [form, tag] of Object.entries(light)) {
      await expect(
        getComputedStyle(tag).color,
        `light card ${form} tag at rest`,
      ).toBe(lightLink);
    }

    // Guards the selectors the assertions depend on.
    const canvas = within(canvasElement);
    await expect(canvas.getAllByText("Policies")).toHaveLength(
      CARD_THEMES.length,
    );
  },
};
