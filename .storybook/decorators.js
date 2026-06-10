/**
 * Decorator factory that runs component init functions after each story renders.
 *
 * The DOM isn't ready when a Storybook decorator runs synchronously, so init
 * is deferred via setTimeout. Each init function receives the story's
 * canvasElement as its root, scoping any DOM queries to that story's container.
 * This makes the decorator safe in docs mode where multiple stories share the
 * same page.
 *
 * Init functions may optionally return a clean-up function. If they do, it will
 * be called before the next render — covering both story navigation and arg
 * changes — to remove any event listeners or other side effects.
 *
 * @param {Array<function(Document|Element): (function|void)>} initFunctions
 * @returns {function} Storybook decorator
 *
 * @example
 * // In a story file:
 * export default {
 *     decorators: [initComponents([initMegaMenu, initToggleTip])],
 * };
 */
export function initComponents(initFunctions = []) {
  let cleanups = [];
  return (storyFn, context) => {
    cleanups.forEach((fn) => fn?.());
    cleanups = [];
    const story = storyFn();
    setTimeout(() => {
      cleanups = initFunctions
        .map((initFunction) => initFunction(context.canvasElement))
        .filter(Boolean);
    }, 0);
    return story;
  };
}
