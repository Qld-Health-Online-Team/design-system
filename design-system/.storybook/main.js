/** @type { import('@storybook/html-vite').StorybookConfig } */
import path from 'path';

const config = {
  stories: [
    "../stories/**/*.mdx",
    "../stories/**/*.stories.@(js|jsx|mjs|ts|tsx|hbs)",
  ],
  addons: [
    "@storybook/addon-links",
    "@storybook/addon-essentials",
    "@storybook/addon-interactions",
    "@storybook/addon-mdx-gfm"
  ],
  core: {
    builder: '@storybook/builder-vite', // 👈 The builder enabled here.
  },
  framework: {
    name: "@storybook/html-vite",
    options: {
      builder: {
        viteConfigPath: path.resolve(__dirname, '../design-system/vite.config.js'),
      },
    },
  },
  docs: {
    autodocs: "tag",
  },
  viteFinal: (config) => {
    // Extend Vite configuration here
    config.resolve.alias['@'] = path.resolve(__dirname, '../design-system');
    // Add any other Vite configuration tweaks

    return config;
  },
};
export default config;
