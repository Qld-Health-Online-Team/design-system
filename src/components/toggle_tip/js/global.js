/**
 * @module toggleTip
 *
 * Interactive behaviour for the toggle tip component: a trigger (underlined
 * definition text or an icon button) that opens a small popup of content.
 *
 * Opening/closing and positioning is delegated to the shared
 * `window.QLD.toggleToolTips` helper (also used by the tool tip). It's imported
 * for its side effect so the dependency is present wherever the toggle tip is
 * initialised — including Storybook, which doesn't load the global bundle.
 */

import "../../_global/js/toggle_and_tool_tip/global.js";

const componentName = "qld__toggle-tip";
const triggerSelector = `.${componentName}-trigger`;
const contentSelector = `.${componentName}-content`;
const visibleClass = `${componentName}-visible`;
const MARGIN_FROM_TRIGGER = 8;

// The most recently opened toggle tip, so the document-level Escape / click-off
// handlers know which one to close. Module-scoped, as in the original.
let lastTriggeredToggleTip = null;

/**
 * Initialise every toggle tip found within `root`.
 *
 * @param {Document|Element} root - Scope for the DOM queries. Defaults to
 *   `document`; the Storybook decorator passes the story's canvas element so
 *   sibling stories on a docs page don't interfere with each other.
 * @returns {function} Cleanup function that removes every listener added here.
 */
export default function initToggleTip(root = document) {
  const controller = new AbortController();
  const { signal } = controller;

  const triggers = root.querySelectorAll(triggerSelector);
  if (!triggers.length) return () => controller.abort();

  triggers.forEach((trigger) => wireTrigger(trigger, root, signal));

  const doc = root.ownerDocument || document;

  // Close the open tip on Escape and return focus to its trigger.
  doc.addEventListener(
    "keydown",
    (e) => {
      if (e.key !== "Escape" || !lastTriggeredToggleTip) return;
      const content = lastTriggeredToggleTip.querySelector(contentSelector);
      if (!content?.classList.contains(visibleClass)) return;
      const triggerId = lastTriggeredToggleTip.id;
      closeAllToggleTips(root);
      root
        .querySelector(`${triggerSelector}[data-target="${triggerId}"]`)
        ?.focus();
    },
    { signal },
  );

  // Close the open tip when clicking outside its content.
  doc.addEventListener(
    "click",
    (e) => {
      if (!lastTriggeredToggleTip) return;
      const content = lastTriggeredToggleTip.querySelector(contentSelector);
      if (content && !content.contains(e.target)) {
        closeAllToggleTips(root);
      }
    },
    { signal },
  );

  return () => controller.abort();
}

/**
 * Wire the click / keyboard behaviour for a single toggle tip trigger.
 *
 * @param {HTMLElement} trigger - The `.qld__toggle-tip-trigger` element
 * @param {Document|Element} root - Scope used to resolve the trigger's target
 * @param {AbortSignal} signal - Signal used to remove the listeners on cleanup
 */
function wireTrigger(trigger, root, signal) {
  const toggleTipId = trigger.getAttribute("data-target");
  if (!toggleTipId) return;

  const toggleTip = root.querySelector(`[id="${toggleTipId}"]`);
  const content = toggleTip?.querySelector(contentSelector);
  if (!content) return;
  const linkElement = content.querySelector("a");

  const isOpen = () => content.classList.contains(visibleClass);

  const open = () => {
    lastTriggeredToggleTip = toggleTip;
    window.QLD.toggleToolTips.openToggleToolTip(
      componentName,
      toggleTip,
      trigger,
      MARGIN_FROM_TRIGGER,
    );
  };

  const close = () =>
    window.QLD.toggleToolTips.closeToggleToolTip(
      componentName,
      toggleTip,
      trigger,
    );

  trigger.addEventListener(
    "click",
    (e) => {
      // Close any open tip first, then toggle this one. Clicking the trigger of
      // the tip that was already open leaves it closed.
      const previous = lastTriggeredToggleTip;
      closeAllToggleTips(root);
      if (isOpen() || toggleTip === previous) {
        close();
      } else {
        open();
      }
      e.stopPropagation();
    },
    { signal },
  );

  trigger.addEventListener(
    "keydown",
    (e) => {
      // Tab while open moves focus into the link (or closes if there isn't one).
      if (e.key === "Tab" && isOpen()) {
        e.preventDefault();
        if (linkElement) {
          linkElement.focus();
        } else {
          close();
        }
      }

      // Space / Enter toggle the tip.
      if (e.keyCode === 32 || e.key === "Enter") {
        e.preventDefault();
        if (isOpen()) {
          close();
        } else {
          open();
        }
        e.stopPropagation();
      }
    },
    { signal },
  );

  // From the content link, Tab or Escape closes and returns focus to the trigger.
  if (linkElement) {
    linkElement.addEventListener(
      "keydown",
      (e) => {
        if (e.key === "Tab" || e.key === "Escape") {
          e.preventDefault();
          close();
          trigger.focus();
        }
      },
      { signal },
    );
  }
}

/**
 * Close every toggle tip within `root`.
 *
 * @param {Document|Element} root
 */
function closeAllToggleTips(root = document) {
  const triggers = root.querySelectorAll(triggerSelector);
  if (!triggers.length) return;
  lastTriggeredToggleTip = null;
  window.QLD.toggleToolTips.closeAllToggleToolTips(componentName, triggers);
}

// Expose on window.QLD and keep the legacy auto-init so existing (non-Storybook)
// builds that rely on QLD.toggleTip.init() keep working. New code should import
// initToggleTip directly.
window.QLD = window.QLD || {};
window.QLD.toggleTip = { init: () => initToggleTip(document), initToggleTip };
