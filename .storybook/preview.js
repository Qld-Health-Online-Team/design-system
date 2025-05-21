import "./core-assets/handlebar-helpers.js";
import "./core-assets/main.js";
import { INITIAL_VIEWPORTS } from "@storybook/addon-viewport";
import { viewports, themes, themeColours } from "./globals.js";

/** @type { import('@storybook/html').Preview } */
const preview = {
    tags: ["autodocs"],
    parameters: {
        controls: {
            matchers: {
                color: /(background|color)$/i,
                date: /Date$/i,
            },
        },
        a11y: {
            config: {
                rules: [
                    {
                        id: "color-contrast",
                        enabled: true,
                    },
                ],
            },
        },
        viewport: {
            viewports: {
                ...viewports,
                ...INITIAL_VIEWPORTS,
            },
        },
        docs: {
            source: {
                excludeDecorators: true,
            },
        },
        backgrounds: {
            default: "white",
            values: [
                {
                    name: "white",
                    value: themeColours["white"],
                },
                {
                    name: "light",
                    value: themeColours["light"],
                },
                {
                    name: "light alt",
                    value: themeColours["light alt"],
                },
                {
                    name: "dark",
                    value: themeColours["dark"],
                },
                {
                    name: "dark alt",
                    value: themeColours["dark alt"],
                },
            ],
        },
    },
    args: {
        site: { metadata: { coreSiteIcons: { value: "/QLD-icons.svg" } } },
    },
    argTypes: {
        // Remove the site metadata from the controls
        site: { table: { disable: true } },
    },
    decorators: [
        (storyFn, context) => {
            const theme = context.globals.theme || "white";
            const themeClass = themes[theme] || "qld__body";

            const wrapper = document.createElement("div");
            wrapper.className = themeClass;

            const story = storyFn();
            if (typeof story === "string") {
                wrapper.innerHTML = story;
            } else if (story instanceof HTMLElement) {
                wrapper.appendChild(story);
            }

            return wrapper;
        },
    ],
};

export default preview;
