import Handlebars from 'handlebars';

/**
 * Vite plugin that transforms Squiz Matrix Handlebars component templates (.hbs)
 * into pre-compiled JavaScript modules for use in Storybook.
 *
 * Without this plugin, Vite cannot handle .hbs files. Stories would need to import
 * templates as raw strings (?raw) and call Handlebars.compile() at runtime in the
 * browser on every render. This plugin moves compilation to build time instead.
 *
 * How it works:
 *   1. Vite intercepts any import ending in .hbs
 *   2. Handlebars.precompile() converts the template source into a serialisable
 *      template spec (a plain JS object) at build time in Node
 *   3. The plugin emits a JS module that calls Handlebars.template(spec) to wrap
 *      the spec in a callable function — no parsing or compilation in the browser
 *
 * The emitted module imports the full 'handlebars' package (not 'handlebars/runtime')
 * so that custom helpers registered in .storybook/core-assets/handlebar-helpers.js
 * are available on the same Handlebars instance at runtime.
 *
 * Usage in a story:
 *   import Template from './html/component.hbs';
 *   Template({ component: { data: { metadata: { ... } } } }); // → HTML string
 *
 * Note: Files imported with the ?raw suffix bypass this plugin entirely — Vite's
 * built-in raw loader handles those and returns the template source as a string.
 *
 * @returns {import('vite').Plugin}
 */
export default function squizHbsPlugin() {
    return {
        name: 'vite-plugin-squiz-hbs',

        transform(src, id) {
            if (!id.endsWith('.hbs')) return;

            const templateSpec = Handlebars.precompile(src);

            const code = `
                import Handlebars from 'handlebars';
                const template = Handlebars.template(${templateSpec});
                export default template;
            `;

            return {
                code,
                map: null,
            };
        },
    };
}
