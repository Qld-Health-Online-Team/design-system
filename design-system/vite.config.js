// // vite.config.js
// import { defineConfig } from 'vite'
// import handlebars from 'vite-plugin-handlebars';

// export default defineConfig({
//   assetsInclude: ['**/*.hbs'],
//   plugins: [
//     handlebars()
//   ],
// });

// vite.config.js
// import Handlebars from 'handlebars/runtime'; // Import Handlebars runtime

// export default {
//   optimizeDeps: {
//     include: ['handlebars/runtime'],
//   },
//   configureServer: {
//     async configureServer({ app }) {
//       // Serve the Handlebars runtime
//       app.use('/handlebars', (req, res) => {
//         res.type('js').send(Handlebars.precompile(''));
//       });
//     },
//   },
// };


// vite.config.js
// vite.config.js
import { defineConfig } from 'vite';
import handlebars from 'vite-plugin-handlebars';
import { resolve } from 'path';
// import  {siteData, pagesData}  from './data/test';

export default defineConfig({
  root: 'src',
  build: {
    outDir: '../dist',
    rollupOptions: {
      input: {
        main: resolve(__dirname,  'index.html')
      },
    },
  },
  plugins: [
    handlebars({
      partialDirectory: resolve(__dirname, siteData.root, 'src/components'),
      context(pagePath) {
        return pagesData[pagePath];
      },
    }),
  ],
});
