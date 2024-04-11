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

// Borrowed from alexlafroscia/vite-plugin-handlebars.git | originally from https://gist.github.com/lovasoa/8691344
async function* walk(dir){
    for await (const d of await fs.promises.opendir(dir)) {

        const fullFileName = join(dir, d.name);
        const manifestFile = 'manifest.json';

        if (d.isDirectory()) {
           yield* walk(fullFileName);
            // console.log('isDirectory ' + d);
        } else if (d.isFile() && d.name === manifestFile) {
            yield fullFileName;
            // console.log('is file ' + JSON.stringify(d));
        }
    }
};

async function componentData(directoryPath) {
    console.log('componentData start---');
    // const manifestFile = 'manifest.json';
    var virtualFile = {};
    const regexPattern = /src\/components\/(.*?)\/js/;
    // const normalizePath = function (filePath) {
    //     return filePath.replace(/\\/g, '/');
    // };
    // console.log('virtualFile ' + virtualFile);

    try {

        for await (const fileName of walk(directoryPath)) {

            var normalizedFilePath = normalizePath(fileName);
            var parsedPath = path.parse(normalizedFilePath);
            var componentManifestDir = parsedPath.dir;

            console.log('virtualFile ' + virtualFile);

            var componentManifestName = componentManifestDir.replace(regexPattern, '$1');
            var componentManifestContent = await fs.readFileSync(normalizedFilePath, 'utf-8');

            var componentData = '"' + componentManifestName + '":' + componentManifestContent + ',';


            console.log('componentData ' + componentData);
            // componentData.key = componentManifestName;
            // componentData.value = JSON.parse(componentManifestContent);
            // virtualFile += componentData;


            // virtualFile.push(componentData);

            // Object.assign(virtualFile, componentData);


            // }
        }
            console.log('componentData ' + virtualFile);

            console.log('virtualFile ---' + JSON.stringify(virtualFile));


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
                handlebars({
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

