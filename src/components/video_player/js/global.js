/**
 * @module VideoPlayer
 */

import { TOGGLE_EVENT } from "../../../behaviours/collapsible.js";

/**
 * The transcript accordion's click handling is owned by the accordion
 * component (initAccordion wires every `.qld__accordion`). The video player
 * only adds a side effect: it observes the bubbling collapsible toggle event
 * on each player wrapper and keeps the transcript button label in sync with
 * the open state.
 */
export default function initVideoPlayer(root = document) {
  const controller = new AbortController();
  const { signal } = controller;

  root.querySelectorAll(".qld__video__player--wrapper").forEach((wrapper) => {
    wrapper.addEventListener(TOGGLE_EVENT, syncTranscriptLabel, { signal });
  });

  // Clean-up: remove every listener added above in one call (used by the Storybook decorator)
  return () => controller.abort();
}

/**
 * Update the transcript button label to match the new open state.
 *
 * @param {CustomEvent} event - The collapsible toggle event; its target is the
 *                              `.qld__accordion__title` trigger
 */
function syncTranscriptLabel(event) {
  // Target the text span explicitly. The label is wrapped alongside the
  // transcript icon, so writing textContent to an ancestor span would destroy
  // that icon. The fallback covers legacy markup where the button's first
  // span is the text itself.
  const label =
    event.target.querySelector(".qld__video__player__transcript-text") ??
    event.target.querySelector("span");

  if (label) {
    label.textContent = event.detail.open
      ? "Hide transcript"
      : "Show transcript";
  }
}
