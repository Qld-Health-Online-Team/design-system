import "./assets/index.js"; // Storybook assets import
import { INITIAL_VIEWPORTS } from "storybook/viewport";
import { viewports, themes, themeColours } from "./globals.js";

/** @type { import('@storybook/html-vite').Preview } */
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
            options: {
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
            options: {
                white: {
                    name: "White",
                    value: themeColours["white"],
                },
                light: {
                    name: "Light",
                    value: themeColours["light"],
                },
                light_alternate: {
                    name: "Light Alternate",
                    value: themeColours["light alt"],
                },
                dark: {
                    name: "Dark",
                    value: themeColours["dark"],
                },
                dark_alternate: {
                    name: "Dark Alternate",
                    value: themeColours["dark alt"],
                },
            },
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
            // Skip wrapper for Navbar story
            if (context.kind === "Components/Navbar") {
                return storyFn();
            }
            // Get the theme key from the background, to use within the decorator
            const themeKey = Object.keys(themeColours).find(
                (key) =>
                    themeColours[key] === context.globals.backgrounds?.value
            );
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
