import "./assets/index.js"; // Storybook JS import
import "./assets/index.scss"; // Storybook styles import
import { INITIAL_VIEWPORTS } from "storybook/viewport";
import { viewports, themes, themeColours } from "./globals.js";
import { getSvgPath } from "./helper-functions.js";

const iconsIds = fetch(getSvgPath())
    .then((res) => res.text())
    .then((svgText) => {
        // Parse the text as XML
        const parser = new DOMParser();
        const svgDoc = parser.parseFromString(svgText, "image/svg+xml");

        // Select all <symbol> elements
        const symbols = svgDoc.querySelectorAll("symbol");

        // Map their IDs
        return Array.from(symbols).map((sym) => sym.id);
    });

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
        options: {
            storySort: {
                // Force SB to load Introduction page first
                order: ["Introduction"],
            },
        },
    },
    args: {
        // Ensure GitHub hosted page uses correct icon path
        site: { metadata: { coreSiteIcons: { value: getSvgPath() } } },
        iconIDs: await iconsIds,
    },
    argTypes: {
        // Remove the site metadata from the controls
        site: { table: { disable: true } },
        iconIDs: { table: { disable: true } },
    },
    decorators: [
        (storyFn, context) => {
            // Skip wrapper for Navbar story
            if (context.kind === "Components/Navbar") {
                return storyFn();
            }
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
