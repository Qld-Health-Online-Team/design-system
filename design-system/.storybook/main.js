// /** @type { import('@storybook/html-vite').StorybookConfig } */
// import path from 'path';
// import { mergeConfig } from 'vite';

// const config = {
//   stories: [
//     "../stories/**/*.mdx",
//     "../stories/**/*.stories.js",
//     "../stories/**/*.stories.hbs",
//   ],
//   addons: [
//     "@storybook/addon-links",
//     "@storybook/addon-essentials",
//     "@storybook/addon-interactions",
//     "@storybook/addon-mdx-gfm"
//   ],
//   core: {
//     builder: '@storybook/builder-vite', // 👈 The builder enabled here.
//   },
//   framework: {
//     name: "@storybook/html-vite",
//     options: {
//       builder: {
//         viteConfigPath: '../design-system/vite.config.js',
//       },
//     },
//   },
//   docs: {
//     autodocs: "tag",
//   },
//   viteFinal: (config) => {
//     // Extend Vite configuration here
//     config.resolve.alias['@'] = path.resolve(__dirname, '../design-system');
//     // Add any other Vite configuration tweaks

//     return config;
//   },
// };
// export default config;

// // import { mergeConfig } from 'vite';

// // export default {
// //   stories: ['../src/**/*.mdx', '../stories/**/*.stories.@(js|jsx|mjs|ts|tsx)'],
// //   addons: ['@storybook/addon-links', '@storybook/addon-essentials'],
// //   core: {
// //     builder: '@storybook/builder-vite',
// //   },
// //   async viteFinal(config) {
// //     // Merge custom configuration into the default config
// //     return mergeConfig(config, {
// //       // Add dependencies to pre-optimization
// //       optimizeDeps: {
// //         include: ['storybook-dark-mode'],
// //       },
// //     });
// //   },
// // };