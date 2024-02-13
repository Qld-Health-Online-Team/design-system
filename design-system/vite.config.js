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



import { defineConfig } from 'vite'
import { resolve } from 'path';
import handlebars from 'vite-plugin-handlebars';
import site from './data/site.json';
import current from './data/current.json';


const globalData = {site, current};
const siteData = {site};
const pageData = {current};

function handlebarsOverride(options) {
    const plugin = handlebars(options);
    
    console.log('handlebars-------------'+ JSON.stringify(options.helpers));
    // Currently handleHotUpdate skips further processing, which bypasses
    // postcss and in turn tailwind doesn't pick up file changes
    // delete plugin.handleHotUpdate;
    return plugin;
}

export default defineConfig({
    root: ".",
    assetsInclude: ['**/*.hbs,**/*.html,**/*.scss'],
    build: {
        outDir: 'dist',
        rollupOptions: {
            input: {
                main: resolve(__dirname, 'index.html')
            },
        },
    },
    plugins: [
        handlebarsOverride({
            partialDirectory: resolve(__dirname, 'src/components'),
            context: {
                global: globalData
            },
            helpers: {
                ifCond: function(v1, operator, v2, options) {
                    switch (operator) {
                        case '==':
                            return (v1 == v2) ? options.fn(this) : options.inverse(this);
                        case '===':
                            return (v1 === v2) ? options.fn(this) : options.inverse(this);
                        case '!=':
                            return (v1 != v2) ? options.fn(this) : options.inverse(this);
                        case '!==':
                            return (v1 !== v2) ? options.fn(this) : options.inverse(this);
                        case '<':
                            return (v1 < v2) ? options.fn(this) : options.inverse(this);
                        case '<=':
                            return (v1 <= v2) ? options.fn(this) : options.inverse(this);
                        case '>':
                            return (v1 > v2) ? options.fn(this) : options.inverse(this);
                        case '>=':
                            return (v1 >= v2) ? options.fn(this) : options.inverse(this);
                        case '&&':
                            return (v1 && v2) ? options.fn(this) : options.inverse(this);
                        case '||':
                            return (v1 || v2) ? options.fn(this) : options.inverse(this);
                        case 'contains':
                            if(typeof v1 == 'string' && typeof v2 == 'string') {
                                return (v1.toLowerCase().indexOf(v2.toLowerCase()) >= 0) ? options.fn(this) : options.inverse(this);
                            }
                            else return options.inverse(this);
                        default:
                            return options.inverse(this);
                    }
                },
                arrayWith: function(array,key,value,options) {
                    var childArray = []
                    for(var x = 0; x<array.length;x++) {
                        if(array[x][key] == value) {
                          childArray.push(array[x]);
                            
                        }
                    }
                    if(childArray.length > 0){
                      return options.fn(childArray)
                    }
                }
            },
        }),
    ],
    server: {
        watch: {
            usePolling: true,
        },
        host: true,
        strictPort: true,
        port: 5173,
    }
});