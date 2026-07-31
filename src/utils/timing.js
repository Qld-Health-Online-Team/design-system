/**
 * @module utils/timing
 */

/**
 * Returns a function that, as long as it continues to be invoked, will not be
 * triggered. The wrapped function is called after it stops being called for
 * `wait` milliseconds. If `immediate` is passed, it fires on the leading edge
 * instead of the trailing one.
 *
 * Used to limit how often work runs while an event fires repeatedly (e.g. a
 * window resize).
 *
 * https://davidwalsh.name/javascript-debounce-function
 *
 * @param  {function} func      - The function to debounce
 * @param  {number}   wait      - Milliseconds of quiet time before `func` runs
 * @param  {boolean}  immediate - Fire on the leading edge rather than the trailing
 * @return {function}
 */
export const debounce = (func, wait, immediate = false) => {
  let timeout;

  // A `function` (not an arrow) so `this` is inherited from the call site:
  // legacy callers rely on the debounced function keeping its receiver.
  return function (...args) {
    const callNow = immediate && !timeout;

    clearTimeout(timeout);
    timeout = setTimeout(() => {
      timeout = null;
      if (!immediate) func.apply(this, args);
    }, wait);

    if (callNow) func.apply(this, args);
  };
};
