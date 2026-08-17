/**
 * Replace every match of a pattern within a string.
 *
 * `search` is compiled as a regular expression, not matched literally, so
 * callers can pass patterns: `{{replace title '\|.*' ''}}` strips a pipe and
 * everything after it. A backslash in the Handlebars string literal reaches
 * the RegExp constructor intact, so `'\.'` matches a literal dot.
 *
 * Non-string input yields an empty string. Handlebars passes an `options`
 * object as the final argument, so a caller who omits `replacement` gets that
 * object stringified — pass all three arguments.
 *
 * @param str {string} - the string to search
 * @param search {string} - regular expression source, matched globally
 * @param replacement {string} - substitution for each match; `$&` and `$1`
 *   carry their usual String.prototype.replace meaning
 * @returns {string} - the substituted string, or "" for non-string input
 */
export default function (str, search, replacement) {
  if (typeof str !== "string") return "";

  return str.replace(new RegExp(search, "g"), replacement);
}
