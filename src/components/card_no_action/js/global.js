import { loadMaterialIconSheet } from "../../../helpers/global-helpers.js";

/**
 * @module cards
 */

export default function initCards(document = document) {
  const shouldCallMaterialIconLoader = document.querySelectorAll(
    ".material-symbols-outlined",
  );

  if (shouldCallMaterialIconLoader.length > 0) {
    loadMaterialIconSheet();
  }
}
