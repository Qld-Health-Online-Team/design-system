/** @type { import('@storybook/html-webpack5').StorybookConfig } */
const config = {
    stories: ["../src/**/*.mdx", "../src/**/*.stories.@(js|jsx|mjs|ts|tsx)"],
    addons: ["@storybook/addon-webpack5-compiler-swc", "@storybook/addon-essentials", "@storybook/addon-interactions", "@storybook/addon-a11y", "@storybook/addon-viewport", "@storybook/addon-themes"],
    framework: {
        name: "@storybook/html-webpack5",
        options: {},
    },
    staticDirs: ["../dist/mysource_files/img", "./assets"],
};
export default config;
