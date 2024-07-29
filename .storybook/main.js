
/** @type { import('@storybook/html-webpack5').StorybookConfig } */

// path
const path = require('path');

const config = {
  staticDirs: [
    '../src/assets/', 
    '../dist/'
  ],
  stories: [
    "../src/**/*.mdx",
    "../src/**/*.stories.@(js|jsx|mjs|ts|tsx)",
  ],
  addons: [
    "@storybook/preset-scss",
    "@storybook/addon-links",
    "@storybook/addon-essentials",
    "@storybook/addon-interactions",
  ],
  framework: {
    name: "@storybook/html-webpack5",
    options: {
      builder: {
        useSWC: true,
      },
    },
  },
  docs: {
    autodocs: "tag",
  },
  webpackFinal: async (config, { configType }) => {
    // Add custom webpack configuration here
    config.module.rules.push({
      test: /\.custom\.js$/, // Example custom rule
      use: ['babel-loader'], // Example custom loader
    });
    // Add Handlebars loader rule
    config.module.rules.push({
      test: /\.hbs$/,
      loader: 'handlebars-loader',
      options: {
        helperDirs: path.resolve(__dirname, '../.migrate/helpers/Handlebars'), 
        knownHelpers: ['ifCond', 'ifAny', 'renderSpecialChar', 'itemAt'], 
        knownHelpersOnly: false, 
      },
    });
    // SCSS rule
    config.module.rules.push({
      test: /\.scss$/,
      use: ['style-loader', 'postcss-loader', 'css-loader', 'sass-loader', 'import-glob-loader'],
      include: path.resolve(__dirname, '../.migrate/styles'),
    });

    // Return the customized webpack config
    return config;
  },
};
export default config;
