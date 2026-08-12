/**
 * Build a BEM modifier class from a block and a modifier token.
 *
 *   {{ applyModifier 'qld__details' metadata.size.value }}
 *
 * Lets a manifest offer plain tokens (`sm`, `lg`) instead of full class
 * names, so Matrix stores an authoring vocabulary rather than CSS.
 *
 * For a theme token use applyTheme instead — theme tokens do not map
 * one-to-one onto class names, and this helper only concatenates.
 *
 * A missing or empty token yields no class, leaving the block's base styles
 * to stand as the fallback. Matrix renders this server-side, where a throw
 * would take out the whole page render.
 *
 * @param {string} block - Block class the modifier hangs off, e.g. "qld__details".
 * @param {string} modifier - Modifier token from the component's manifest.
 * @returns {string} The modifier class, or "" when either part is missing.
 */
export default function (block, modifier) {
  return block && modifier && typeof modifier === "string"
    ? `${block}--${modifier}`
    : "";
}
