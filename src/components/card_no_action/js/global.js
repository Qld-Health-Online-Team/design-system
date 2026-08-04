import * as icons from "../../../utils/icons.js";

/**
 * @module cards
 */

export default function initCards(document = document) {
  const shouldCallMaterialIconLoader = document.querySelectorAll(
    ".material-symbols-rounded",
  );

  if (shouldCallMaterialIconLoader.length > 0) {
    icons.loadMaterialIconSheet();
  }
}
