import "./core-assets/handlebar-helpers.js";
import "./core-assets/main.js";
import { INITIAL_VIEWPORTS } from "@storybook/addon-viewport";
import { viewports, themes, themeColours } from "./globals.js";

/** @type { import('@storybook/html').Preview } */
const preview = {
    parameters: {
        options: {
            storySort: {
                order: ["Layout", "Components"],
            },
        },
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
            default: "White",
            values: [
                {
                    name: "White",
                    value: themeColours["white"],
                },
                {
                    name: "Light",
                    value: themeColours["light"],
                },
                {
                    name: "Light Alternate",
                    value: themeColours["light alt"],
                },
                {
                    name: "Dark",
                    value: themeColours["dark"],
                },
                {
                    name: "Dark Alternate",
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
            // Get the theme key from the background, to use within the decorator
            const themeKey = Object.keys(themeColours).find((key) => themeColours[key] === context.globals.backgrounds?.value);
            const wrapper = document.createElement("div");
            wrapper.className = themes[themeKey] || themes["white"];
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
