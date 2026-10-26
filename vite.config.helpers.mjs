// Builds dist/js/helpers.js: the Handlebars helpers that Matrix loads
// alongside Handlebars itself to render the precompiled components. Matrix
// loads it from the git bridge in the site <head> (runat="server" for the live
// render, plus a client-side <script>) and in the component CT edit layout,
// and both assume a global Handlebars is already on the page. A build of its
// own because an IIFE bundle has one entry, and main.js and helpers.js are
// loaded separately.
//
// Runs after vite.config.dist.mjs, whose emptyOutDir would otherwise remove
// the file.
import { defineConfig } from "vite";

import { target } from "./vite.config.dist.mjs";

export default defineConfig({
  publicDir: false,
  build: {
    outDir: "dist",
    emptyOutDir: false,
    sourcemap: true,
    target,
    rollupOptions: {
      input: "src/helpers/register.js",
      // Handlebars is taken from the page, not bundled.
      external: ["handlebars"],
      output: {
        format: "iife",
        entryFileNames: "js/helpers.js",
        globals: { handlebars: "Handlebars" },
      },
    },
  },
});
