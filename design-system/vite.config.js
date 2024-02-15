

import { defineConfig } from 'vite'
import { resolve } from 'path';
import path from 'path';
import fs from 'fs-extra';
import handlebars from 'vite-plugin-handlebars';
import sassGlobImports from 'vite-plugin-sass-glob-import';
import site from './data/site.json';
import current from './data/current.json';
// import { ifCond } from './src/global/handlebars/helpers/ifCond.js';
// const customHelpers = ifCond;
// console.log("customHelpers  "+ customHelpers ); 

const globalData = {site, current};
const siteData = {site};
const pageData = {current};


async function loadHelpersFromDirectory(directory) {
    try {
        var files = await fs.readdir(directory);
        console.log("directory  "+ directory );
        var helperPath = directory + '/';

        for (let file of files) {
            var helperName = helperPath + path.basename(file);
            console.log("helperName  "+ helperName );
            var test = './src/global/handlebars/helpers/ifCond.js';
            var module = await import(test);
            console.log("module  "+ module );
        }
        // design-system/src/global/handlebars/helpers/ifCond.js
        console.log("module  "+ module );
        return module;

    } catch (error) {
        console.error('Error importing modules:', error);
    }

    
    // var helpers = [];
    // var helperPath = directory + '/';
    // var files = await fs.readdir(directory);

    

    // for (let file of files) {

    //     if (file.endsWith('.js')) {

    //         var helperName = path.basename(file, '.js');

    //         var helperImport = 'import' + ' { ' + helperName + ' } ' + 'from ' + '"' + helperPath + file + '"';
            
    //         console.log("helperImport  "+ helperImport ); 

    //         helpers.push(helperImport);

            // fs.readFile(resolve(__dirname, file), 'utf8', (err, data) => {
            //     if (err) {
            //         console.error('Error reading file:', err);
            //         return;
            //     }
            //     console.log('File contents:', data); 
            // })
            // var module = await import(path.join(directory, file));
            // console.log("module " + module); 
            // helpers[helperName] = module.default || module;
    //     }
    // }

    // console.log("helpers  "+ helpers ); 
    // return helperImport;
}

// function handlebarsOverride(options) {
//     const plugin = handlebars(options);

//     // if (options.helpers) {
//     //     Object.keys(options.helpers).forEach(helper => {
//     //         Handlebars.registerHelper(helper, options.helpers[helper])
//     //     })
//     // }
    
//     console.log('handlebars-------------'+ JSON.stringify(plugin.handleHotUpdate));
//     // Currently handleHotUpdate skips further processing, which bypasses
//     // postcss and in turn tailwind doesn't pick up file changes
//     // delete plugin.handleHotUpdate;
//     return plugin;
// }


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
        handlebars({
            partialDirectory: resolve(__dirname, 'src/components'),
            context: {
                global: globalData
            },
            helpers: await loadHelpersFromDirectory('./src/global/handlebars/helpers'),
        }),
        sassGlobImports()
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