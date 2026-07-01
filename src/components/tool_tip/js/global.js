/**
 * @module toolTip
 *
 * Tool tip interaction policy: a trigger (underlined definition text, an icon,
 * or an icon button) that reveals a small popup on hover or focus and hides it
 * on mouse-leave or blur. The popover lifecycle and positioning live in the
 * shared popover controller.
 */

import { createPopoverController } from "../../_global/js/popover/controller.js";

// Delay before hiding on mouse-leave, so the pointer can travel from the trigger
// to the content without the tip closing underneath it.
const CONTENT_LEAVE_DELAY = 200;

const popover = createPopoverController({
  componentName: "qld__tool-tip",
  marginFromTrigger: 4,
});

/**
 * Initialise every tool tip within `root`.
 *
 * @param {Document|Element} root - Defaults to `document`; the Storybook
 *   decorator passes the story's canvas element.
 * @returns {function} Cleanup function that removes every listener added here.
 */
export default function initToolTip(root = document) {
  return popover.init(
    root,
    ({ root: scope, signal, tips, closeAll, getLastOpened }) => {
      tips.forEach((tip) => wireTrigger(tip, closeAll, signal));

      // Close the open tip on Escape.
      const doc = scope.ownerDocument || document;
      doc.addEventListener(
        "keydown",
        (e) => {
          if (e.key === "Escape" && getLastOpened()) closeAll();
        },
        { signal },
      );
    },
  );
}

/**
 * Wire hover and focus interaction for a single tool tip.
 */
function wireTrigger(tip, closeAll, signal) {
  const { trigger, content, open, close } = tip;
  let closeTimeout = null;

  trigger.addEventListener(
    "mouseenter",
    (e) => {
      closeAll();
      open();
      e.stopPropagation();
    },
    { signal },
  );

  trigger.addEventListener("focus", () => open(), { signal });

  trigger.addEventListener(
    "mouseleave",
    () => {
      closeTimeout = setTimeout(close, CONTENT_LEAVE_DELAY);
    },
    { signal },
  );

  trigger.addEventListener("blur", () => closeAll(), { signal });

  // Hovering the content keeps the tip open (cancel the pending close).
  content.addEventListener(
    "mouseenter",
    () => {
      if (closeTimeout) {
        clearTimeout(closeTimeout);
        closeTimeout = null;
      }
      open();
    },
    { signal },
  );

  content.addEventListener("mouseleave", () => close(), { signal });
}
