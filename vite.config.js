import { defineConfig } from 'vite'
import {join, resolve, parse} from 'path';
import path from 'path';
import fs from 'graceful-fs';
import { normalizePath } from 'vite';
import mkcert from'vite-plugin-mkcert'
import handlebars from 'vite-plugin-handlebars';
import sassGlobImports from 'vite-plugin-sass-glob-import';
import site from './global/data/site.json';
import current from './global/data/current.json';
import globalHelpers from './global/handlebars/global-helpers.js'; 
// import componentc from './src/components/accordion/js/manifest.json';
// import componentData from './src/global/handlebars/componentData.js';

// const componentA = {componentc};


const directoryPath = './src/components';

async function* walk(dir) {
    for await (const d of await fs.promises.opendir(dir)) {

        const fullFileName = join(dir, d.name);
        
        if (d.isDirectory()) {
           yield* walk(fullFileName);

        } else
        if (d.isFile()) {
            yield fullFileName;
        }
    }
};

async function componentData(directoryPath) {
    console.log('componentData start---');
    const manifestFile = 'manifest.json';
    var virtualFile = new Object();
    const regexPattern = /src\/components\/(.*?)\/js/;
    const normalizePath = function (filePath) {
        return filePath.replace(/\\/g, '/');
    };

    try {

        for await (const fileName of walk(directoryPath)) {

            var normalizedFilePath = normalizePath(fileName);
            var parsedPath = path.parse(normalizedFilePath);
            var componentManifestDir = parsedPath.dir;
            var componentData = new Object();

            if (parsedPath.base === manifestFile) { 

                var componentManifestName = componentManifestDir.replace(regexPattern, '$1');
                var componentManifestContent = await fs.readFileSync(normalizedFilePath, 'utf-8');

                JSON.stringify('fileContents ' + componentManifestName);

                componentData.key = componentManifestName;
                componentData.value = JSON.parse(componentManifestContent);

                Object.assign({}, virtualFile, componentData);

                
            };
        };

        console.log('componentData virtualFile---' + JSON.stringify(virtualFile));


        // JSON.stringify('fileContents ' + fileContents);
        console.log('componentData END---');
        

    } catch (e) {
        // This error indicates the partial directory doesn't exist; ignore it
        if (e.code !== 'ENOENT') {
            throw e;
        }
    }
};

var componentManifestData = await componentData(directoryPath);
const globalData = {site, current, componentManifestData};







// Example usage:


function handlebarsOverride(options) {
    const plugin = handlebars(options);
    console.log('----start handlebars plugin----');
    // if (options.helpers) {
    //     Object.keys(options.helpers).forEach(helper => {
    //         Handlebars.registerHelper(helper, options.helpers[helper])
    //     })
    // }
    
    // console.log('partialDirectory-------------'+ JSON.stringify(options.partialDirectory));
    // Currently handleHotUpdate skips further processing, which bypasses
    // postcss and in turn tailwind doesn't pick up file changes
    // delete plugin.handleHotUpdate;
    console.log('----end handlebars plugin----');
    return plugin;
}

export default defineConfig(async({ command, mode, isSsrBuild, isPreview }) => {

    if (command === 'serve') {
        //Development preview config
        return {
            root: '.',
            devSourcemap: false,
            resolve: {
                alias: {
                '@components': resolve(__dirname, 'src/components')
                },
            },
            plugins: [
                mkcert(),
                handlebarsOverride({
                    compileOptions: {
                        // Example config option: avoid auto-indenting partials
                        preventIndent: false,
                    },
                    runtimeOptions: {
                        // Example config option: define custom private @variables
                        
                    },
                    reloadOnPartialChange: true,
                    partialDirectory: resolve(__dirname, 'src/components'),
                    context: {
                        global: globalData
                    },
                    helpers: globalHelpers
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
        }

    } else if (command === 'build') {
        //Production build config
        return {

        }
    } else if (command === 'preview') {
        //Production preview config
        return {

        }
    }
});

