/**
 * @module utils/storage
 *
 * Thin wrappers over `localStorage`. Non-string values are JSON-encoded on the
 * way in; reads return the raw stored string, so the caller decides how to
 * parse it.
 */

/**
 * Write a value to local storage, stringifying it if it is not already a string.
 *
 * @param {string} key
 * @param {*}      value
 */
export const setLocalStorage = (key, value) => {
  localStorage.setItem(
    key,
    typeof value === "string" ? value : JSON.stringify(value),
  );
};

/**
 * Read a value from local storage.
 *
 * @param  {string} key
 * @return {string | null}
 */
export const getLocalStorage = (key) => localStorage.getItem(key);

/**
 * Remove an item from local storage.
 *
 * @param {string} key
 */
export const removeLocalStorage = (key) => {
  localStorage.removeItem(key);
};
