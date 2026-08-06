/**
 * Resolve a background theme token to the BEM modifier class for a block.
 *
 *   {{ applyTheme 'qld__body' metadata.body_background.value }}
 *
 * Authors pick a theme token (`light-alt`); the markup gets the class
 * (`qld__body--alt`). The two differ because the class names drop the "light"
 * the design tokens carry — `.qld__body--alt` is painted with
 * `--QLD-color-light__background--alt` — so the token vocabulary here is
 * symmetric (light/light-alt/dark/dark-alt) where the class vocabulary is not.
 *
 * `white` is the unmodified block, so it resolves to no class at all. That
 * keeps "no background" a real word in the manifest rather than an empty
 * option value.
 *
 * An unknown token also resolves to no class, degrading to the white theme.
 * Matrix renders this server-side, where a throw would take out the whole
 * page render, and a missing helper is already silent there.
 *
 * @param {string} block - Block class the modifier hangs off, e.g. "qld__body".
 * @param {string} theme - Theme token from the component's manifest.
 * @returns {string} The modifier class, or "" for white/unknown/missing.
 */
export default function (block, theme) {
  // dist/js/helpers.js is built by serialising this function with
  // Function.toString(), so the map has to live inside the body — module
  // scope does not survive into the bundle.
  const modifiers = {
    white: "",
    light: "light",
    "light-alt": "alt",
    dark: "dark",
    "dark-alt": "dark-alt",
  };

  const modifier = Object.prototype.hasOwnProperty.call(modifiers, theme)
    ? modifiers[theme]
    : "";

  return block && modifier ? `${block}--${modifier}` : "";
}
