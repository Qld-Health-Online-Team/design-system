/**
 * @module utils/url
 */

/**
 * Read a query-string parameter from the current URL.
 *
 * @param  {string} name
 * @return {string} The decoded value, or "" if the parameter is not present
 */
export const getParameterByName = (name) =>
  new URLSearchParams(window.location.search).get(name) ?? "";
