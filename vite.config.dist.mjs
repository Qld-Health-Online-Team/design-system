// Builds dist/js/main.js and dist/main.css for Squiz Matrix. dist/js/helpers.js
// is built by vite.config.helpers.mjs and the rest of dist/ (components,
// externals, banner_contained.css) is written by scripts/build-dist.js, both of
// which run after this. Storybook uses its own config; this file is
// deliberately not vite.config.js, which Storybook would load.
import autoprefixer from "autoprefixer";
import { defineConfig } from "vite";
import sassGlobImports from "vite-plugin-sass-glob-import";

// Matches .browserslistrc, so the syntax Vite emits doesn't move.
export const target = [
  "chrome102",
  "edge102",
  "firefox102",
  "safari16",
  "ios16",
];

export default defineConfig({
  publicDir: false,
  plugins: [sassGlobImports()],
  // Keep @license comments (prismjs) in the minified bundle.
  esbuild: { legalComments: "inline" },
  css: {
    // Vite only looks for a PostCSS config at the project root, so it would
    // not find src/styles/postcss.config.js.
    postcss: { plugins: [autoprefixer()] },
    // Sass compresses the output. Vite's own CSS minifier (esbuild) would drop
    // legacy hacks such as `*zoom: 1`.
    preprocessorOptions: { scss: { style: "compressed" } },
  },
  build: {
    outDir: "dist",
    emptyOutDir: true,
    sourcemap: true,
    cssCodeSplit: false,
    cssMinify: false,
    target,
    rollupOptions: {
      input: "src/index.js",
      output: {
        // Matrix heads load a single classic <script>, so no module wrapper.
        format: "iife",
        entryFileNames: "js/main.js",
        assetFileNames: (asset) =>
          asset.names.some((name) => name.endsWith(".css"))
            ? "main.css"
            : "assets/[name][extname]",
      },
    },
  },
});
