import { loadMaterialIconSheet } from "../../../helpers/global-helpers.js";

/**
 * @module bannerAdvanced
 */

export default function initBannerAdvanced(document = document) {
  const shouldCallMaterialIconLoader = document.querySelectorAll(
    ".material-symbols-rounded",
  );

  if (shouldCallMaterialIconLoader.length > 0) {
    loadMaterialIconSheet();
  }
}