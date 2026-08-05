/**
 * @module utils/cookies
 */

/**
 * Set a browser cookie on the site root path.
 *
 * @param {string} name
 * @param {string} value
 */
export const setCookie = (name, value) => {
  document.cookie = `${name}=${encodeURIComponent(value)}; path=/;`;
};

/**
 * Read a browser cookie by name.
 *
 * @param  {string} name
 * @return {string | null} The decoded value, or null if the cookie is not set
 */
export const getCookie = (name) => {
  const match = document.cookie
    .split("; ")
    .find((cookie) => cookie.startsWith(`${name}=`));

  if (match === undefined) return null;

  // `decodeURIComponent` is the correct inverse of the `encodeURIComponent`
  // used by `setCookie` (the previous implementation used `unescape`, which
  // mangles multi-byte characters).
  return decodeURIComponent(match.slice(name.length + 1));
};
