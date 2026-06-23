/**
 * Helper that is used to switch between FA and material icons. It checks the
 * icon name for the "fa-" prefix to determine which type of icon to render.
 * If the prefix is present, it renders a Font Awesome icon using an <i> element.
 * If not, use the correct <span> element. Created for the card component,
 * will need to revisit if used for other components.
 *
 * @param icon {string} - the icon name
 * @param [extraClasses] {string} - any extra classes to add to the icon
 * @returns {string} - the icon HTML
 */
export default function (icon, extraClasses) {
  if (!icon) return "";

  // Check if a string is passed. Normally Handlebars gives an option when one isn't.
  if (typeof extraClasses !== "string") {
    extraClasses = "";
  }
  extraClasses = extraClasses.trim();

  if (icon.includes("fa-")) {
    return `<i class="${icon} ${extraClasses}"></i>`;
  }

  return `<span class="material-symbols-rounded ${extraClasses}" aria-hidden="true">${icon}</span>`;
}
