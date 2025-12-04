/** @type { import('@storybook/html-vite').StorybookConfig } */

const config = {
    stories: ["../src/**/*.mdx", "../src/**/*.stories.@(js|jsx|mjs|ts|tsx)"],
    addons: ["@storybook/addon-a11y", "@storybook/addon-themes", "@storybook/addon-designs", "@storybook/addon-docs"],
    framework: {
        name: "@storybook/html-vite",
        options: {},
    },
    staticDirs: ["../dist/mysource_files/img", "./core-assets", "./assets"],
};
export default config;
