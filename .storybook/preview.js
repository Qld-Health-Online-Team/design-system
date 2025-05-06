import "./assets/handlebar-helpers.js";
import { INITIAL_VIEWPORTS } from "@storybook/addon-viewport";
import { withThemeByClassName } from "@storybook/addon-themes";
import { viewports, themes } from "./globals.js";

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
    },
    args: {
        site: { metadata: { coreSiteIcons: { value: "/QLD-icons.svg" } } },
    },
    argTypes: {
        // Remove the site metadata from the controls
        site: { table: { disable: true } },
    },
    decorators: [
        // The classes qld__light and qld__dark for example, are not currently supported but will be in the future.
        withThemeByClassName({
            themes: themes,
            defaultTheme: "white",
        }),
    ],
};

export default preview;
