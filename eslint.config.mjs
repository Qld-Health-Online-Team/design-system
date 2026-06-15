import js from "@eslint/js";
import globals from "globals";
import json from "@eslint/json";
import markdown from "@eslint/markdown";
import css from "@eslint/css";
import { defineConfig, globalIgnores } from "eslint/config";
import eslintConfigPrettier from "eslint-config-prettier/flat";
import storybook from "eslint-plugin-storybook";

export default defineConfig([
  globalIgnores(["!.storybook"], "Include Storybook Directory"),
  globalIgnores(["storybook-static", "*.min.js", "src/externals", "dist"]),
  {
    files: ["src/**/*.js", ".storybook/**/*.js"],
    plugins: { js },
    extends: ["js/recommended"],
    languageOptions: {
      sourceType: "module",
      globals: globals.browser,
      parserOptions: {
        allowImportExportEverywhere: true,
      },
    },
    rules: {
      "no-const-assign": "warn",
      "no-this-before-super": "warn",
      "no-undef": "warn",
      "no-unreachable": "warn",
      "no-unused-vars": "warn",
      "constructor-super": "warn",
      "valid-typeof": "warn",
    },
  },
  {
    files: [
      "webpack/**/*.js",
      "scripts/**/*.js",
      "*.config.js",
      "postcss.config.js",
    ],
    plugins: { js },
    extends: ["js/recommended"],
    languageOptions: {
      sourceType: "commonjs",
      globals: globals.node,
      parserOptions: {
        allowImportExportEverywhere: true,
      },
    },
    rules: {
      "no-const-assign": "warn",
      "no-this-before-super": "warn",
      "no-undef": "warn",
      "no-unreachable": "warn",
      "no-unused-vars": "warn",
      "constructor-super": "warn",
      "valid-typeof": "warn",
    },
  },
  {
    // Storybook config files (main.js, prepare-storybook.js, etc.) run in Node.
    files: [".storybook/**/*.js"],
    languageOptions: { globals: globals.node },
  },
  {
    files: ["**/*.json"],
    plugins: { json },
    language: "json/json",
    extends: ["json/recommended"],
  },
  {
    files: ["**/*.md"],
    plugins: { markdown },
    language: "markdown/gfm",
    extends: ["markdown/recommended"],
  },
  {
    files: ["**/*.css"],
    plugins: { css },
    language: "css/css",
    extends: ["css/recommended"],
  },
  eslintConfigPrettier,
  ...storybook.configs["flat/recommended"],
]);
