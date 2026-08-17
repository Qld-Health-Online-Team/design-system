/**
 * @module utils/string
 */

/**
 * Strip everything that is not a lowercase letter or digit, producing a value
 * safe to use as part of a DOM id.
 *
 * @param  {string} string
 * @return {string}
 */
export const normaliseIdentifier = (string) =>
  string.replace(/[^a-z0-9]+/g, "");
