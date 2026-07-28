/**
 * @module popover/controller
 *
 * Lifecycle layer shared by the toggle tip and tool tip. A popover is a content
 * box (with a carat) anchored to a trigger via a shared `data-target` id.
 *
 * `createPopoverController` owns the parts both components repeat — discovering
 * triggers, resolving their content, showing/hiding (delegating placement to
 * the positioning module), tracking the currently open popover, and listener
 * clean-up. Each component supplies only its interaction policy (which user
 * events open and close the popover) via the `setup` callback.
 */

import { CONTENT_SELECTOR, positionContentBox } from "./position.js";

/**
 * Reveal a popover's content + carat, set ARIA, and position it.
 *
 * @param {string} componentName - Class prefix, e.g. "qld__tool-tip"
 * @param {HTMLElement} popover - The popover container element
 * @param {HTMLElement} trigger - The trigger element
 * @param {number} marginFromTrigger - Gap between trigger and content
 */
function show(componentName, popover, trigger, marginFromTrigger) {
  const content = popover.querySelector(CONTENT_SELECTOR);
  const carat = content.nextElementSibling;

  content.classList.remove(`${componentName}-hidden`);
  content.classList.add(`${componentName}-visible`);
  if (trigger.getAttribute("aria-expanded")) {
    trigger.setAttribute("aria-expanded", "true");
  }
  popover.setAttribute("aria-live", "polite");
  carat.classList.remove(`${componentName}-hidden`);
  carat.classList.add(`${componentName}-visible`);
  trigger.classList.add(`${componentName}-trigger-active`);
  positionContentBox(trigger, popover, marginFromTrigger);
}

/**
 * Hide a popover's content + carat and reset ARIA.
 *
 * @param {string} componentName - Class prefix, e.g. "qld__tool-tip"
 * @param {HTMLElement} popover - The popover container element
 * @param {HTMLElement} trigger - The trigger element
 */
function hide(componentName, popover, trigger) {
  const content = popover.querySelector(CONTENT_SELECTOR);
  const carat = content.nextElementSibling;

  content.classList.remove(`${componentName}-visible`);
  content.classList.add(`${componentName}-hidden`);
  if (trigger.getAttribute("aria-expanded")) {
    trigger.setAttribute("aria-expanded", "false");
  }
  popover.removeAttribute("aria-live");
  carat.classList.remove(`${componentName}-visible`);
  carat.classList.add(`${componentName}-hidden`);
  trigger.classList.remove(`${componentName}-trigger-active`);
}

/**
 * Create a controller for one family of popovers (all sharing a class prefix).
 *
 * @param {object} config
 * @param {string} config.componentName - Class prefix, e.g. "qld__toggle-tip"
 * @param {number} config.marginFromTrigger - Gap between trigger and content
 * @returns {{ init: function(Document|Element, function): function }}
 */
export function createPopoverController({ componentName, marginFromTrigger }) {
  const triggerSelector = `.${componentName}-trigger`;
  const contentSelector = `.${componentName}-content`;
  const visibleClass = `${componentName}-visible`;

  // The popover whose `open()` ran most recently, so document-level handlers
  // (Escape, click-off) know which one to act on. Scoped per controller.
  let lastOpened = null;

  /**
   * Resolve a trigger to its popover + a small open/close API, or null if the
   * trigger has no resolvable target.
   *
   * @param {HTMLElement} trigger
   * @param {Document|Element} root
   */
  function resolve(trigger, root) {
    const id = trigger.getAttribute("data-target");
    if (!id) return null;

    const popover = root.querySelector(`[id="${id}"]`);
    const content = popover?.querySelector(contentSelector);
    if (!content) return null;

    const api = {
      trigger,
      popover,
      content,
      isOpen: () => content.classList.contains(visibleClass),
      open() {
        lastOpened = api;
        show(componentName, popover, trigger, marginFromTrigger);
      },
      close() {
        hide(componentName, popover, trigger);
      },
    };
    return api;
  }

  /**
   * Close every popover in `root`.
   *
   * @param {Document|Element} root
   */
  function closeAll(root) {
    const triggers = root.querySelectorAll(triggerSelector);
    if (!triggers.length) return;
    lastOpened = null;
    triggers.forEach((trigger) => resolve(trigger, root)?.close());
  }

  /**
   * Discover the popovers in `root` and hand them to a component's `setup`.
   *
   * @param {Document|Element} root - Scope for the DOM queries
   * @param {function} setup - Receives `{ root, signal, tips, closeAll,
   *   getLastOpened }` and wires the component's events using `signal` for
   *   cleanup.
   * @returns {function} Cleanup that removes every listener added via `signal`.
   */
  function init(root = document, setup) {
    const controller = new AbortController();
    const { signal } = controller;

    const tips = [...root.querySelectorAll(triggerSelector)]
      .map((trigger) => resolve(trigger, root))
      .filter(Boolean);

    if (tips.length) {
      setup({
        root,
        signal,
        tips,
        closeAll: () => closeAll(root),
        getLastOpened: () => lastOpened,
      });
    }

    return () => controller.abort();
  }

  return { init };
}

// Back-compat surface: the old shared helper was exposed as
// window.QLD.toggleToolTips. Exported here and registered in
// ../legacyGlobal.js for any external (non-bundled) callers.
export const toggleToolTips = {
  openToggleToolTip: show,
  closeToggleToolTip: hide,
  closeAllToggleToolTips(componentName, triggers) {
    for (const trigger of triggers) {
      const id = trigger.getAttribute("data-target");
      if (!id) return;
      hide(componentName, document.getElementById(id), trigger);
    }
  },
};
