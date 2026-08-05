/**
 * @module utils/aria
 *
 * Small readers/writers for ARIA state, so components express intent
 * ("is this expanded?") rather than repeating attribute string comparisons.
 */

/**
 * Whether an element's `aria-expanded` attribute is currently "true".
 *
 * @param  {HTMLElement} element
 * @return {boolean}
 */
export const isExpanded = (element) =>
  element.getAttribute("aria-expanded") === "true";

/**
 * Set an element's `aria-expanded` attribute from a boolean.
 *
 * @param {HTMLElement} element
 * @param {boolean}     expanded
 */
export const setExpanded = (element, expanded) =>
  element.setAttribute("aria-expanded", expanded ? "true" : "false");
