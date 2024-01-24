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
import { resolve } from 'path';
import handlebars from 'vite-plugin-handlebars';

export default {
    assetsInclude: ['**/*.hbs'],
    plugins: handlebars({
      partialDirectory: resolve(__dirname, 'partials'),
    }),
};
