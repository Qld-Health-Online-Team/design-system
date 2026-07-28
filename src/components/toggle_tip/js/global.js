/**
 * @module toggleTip
 *
 * Toggle tip interaction policy: a trigger (underlined definition text or an
 * icon button) that toggles a small popup open/closed on click, with keyboard
 * support and close-on-outside-click. The popover lifecycle and positioning
 * live in the shared popover controller.
 */

import { createPopoverController } from "../../_global/js/popover/controller.js";

const popover = createPopoverController({
  componentName: "qld__toggle-tip",
  marginFromTrigger: 8,
});

/**
 * Initialise every toggle tip within `root`.
 *
 * @param {Document|Element} root - Defaults to `document`; the Storybook
 *   decorator passes the story's canvas element.
 * @returns {function} Cleanup function that removes every listener added here.
 */
export default function initToggleTip(root = document) {
  return popover.init(
    root,
    ({ root: scope, signal, tips, closeAll, getLastOpened }) => {
      tips.forEach((tip) => wireTrigger(tip, closeAll, getLastOpened, signal));
      wireDocument(scope, closeAll, getLastOpened, signal);
    },
  );
}

/**
 * Wire click + keyboard interaction for a single toggle tip.
 */
function wireTrigger(tip, closeAll, getLastOpened, signal) {
  const { trigger, content, open, close, isOpen } = tip;
  const linkElement = content.querySelector("a");

  trigger.addEventListener(
    "click",
    (e) => {
      // Close any open tip first, then toggle this one. Clicking the trigger of
      // the tip that was already open leaves it closed.
      const previous = getLastOpened();
      closeAll();
      if (isOpen() || tip === previous) {
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
 * Wire the document-level behaviour: Escape closes the open tip (returning focus
 * to its trigger), and a click outside the open content closes it.
 */
function wireDocument(root, closeAll, getLastOpened, signal) {
  const doc = root.ownerDocument || document;

  doc.addEventListener(
    "keydown",
    (e) => {
      if (e.key !== "Escape") return;
      const last = getLastOpened();
      if (!last?.isOpen()) return;
      const { trigger } = last;
      closeAll();
      trigger.focus();
    },
    { signal },
  );

  doc.addEventListener(
    "click",
    (e) => {
      const last = getLastOpened();
      if (last && !last.content.contains(e.target)) {
        closeAll();
      }
    },
    { signal },
  );
}
