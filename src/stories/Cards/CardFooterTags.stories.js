import { storyParams } from "../../../.storybook/globals";

// No card template renders a tag list in its footer — the combination is
// authored in Matrix — but `_global/css/tags` and `card_feature/css` both style
// `.qld__card__footer .qld__tag`, so the markup is built by hand here to put
// that styling under test.
const CARD_THEMES = [
  { label: "White", modifier: "" },
  { label: "Light", modifier: "qld__card--light" },
  { label: "Alternate", modifier: "qld__card--alt" },
  { label: "Dark", modifier: "qld__card--dark" },
  { label: "Dark alternate", modifier: "qld__card--dark-alt" },
];

const tagList = () => `
  <ul class="qld__tag-list">
    <li><a class="qld__tag qld__tag--link" href="#">Policies</a></li>
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
