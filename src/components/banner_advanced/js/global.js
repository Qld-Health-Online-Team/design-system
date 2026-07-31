import * as icons from "../../../utils/icons.js";

/**
 * @module bannerAdvanced
 */

export default function initBannerAdvanced(document = document) {
  const shouldCallMaterialIconLoader = document.querySelectorAll(
    ".material-symbols-rounded",
  );

  if (shouldCallMaterialIconLoader.length > 0) {
    icons.loadMaterialIconSheet();
  }
}
