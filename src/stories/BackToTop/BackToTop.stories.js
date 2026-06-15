import { storyParams } from "../../../.storybook/globals";

export default {
  title: "3. Components/Back to Top",
  render: ({ text }) => `
          <div class="qld__widgets__back_to_top">
              <a href="#content" class="qld__direction-link qld__direction-link--up" aria-label="Back to top">
                  ${text}
              </a>
          </div>
      `,
  args: {
    text: "Back to top",
  },
  parameters: storyParams("backToTop"),
};

export const Default = {};
