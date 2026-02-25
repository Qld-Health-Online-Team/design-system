/** @type { import('@storybook/html-vite').StorybookConfig } */
import sassGlobImports from "vite-plugin-sass-glob-import";

const config = {
    stories: ["../src/**/*.mdx", "../src/**/*.stories.@(js|jsx|mjs|ts|tsx)"],
    addons: ["@storybook/addon-a11y", "@storybook/addon-themes", "@storybook/addon-designs", "@storybook/addon-docs"],
    framework: {
        name: "@storybook/html-vite",
        options: {},
    },
    async viteFinal(config) {
        config.plugins.push(sassGlobImports());
        return config;
    },
    staticDirs: ["../dist/mysource_files/img", "./core-assets", "./assets"],
};
export default config;
