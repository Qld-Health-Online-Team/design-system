/**
 * @module utils/dom
 *
 * Generic DOM helpers with no component knowledge.
 */

/**
 * Swap the `no-js` class on <html> for `js`, so CSS can style the
 * JavaScript-enabled experience. Call as early as possible on page load to
 * avoid a flash of the no-JS styles.
 */
export const enableJsClass = () => {
  const html = document.documentElement;
  html.classList.remove("no-js");
  html.classList.add("js");
};

/**
 * Normalise a single element, NodeList, or array of elements into an array, so
 * callers can accept any of the three without branching.
 *
 * @param  {HTMLElement | NodeList | HTMLElement[]} elements
 * @return {HTMLElement[]}
 */
export const toElementArray = (elements) =>
  elements.length === undefined ? [elements] : Array.from(elements);
