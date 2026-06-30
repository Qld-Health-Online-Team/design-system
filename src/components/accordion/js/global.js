/**
 * @module accordion
 */

import * as collapsible from "../../_global/js/collapsible.js";
import { isExpanded, setExpanded } from "../../../helpers/global-helpers.js";

export function initAccordion(root = document) {
  const controller = new AbortController();
  const { signal } = controller;

  // Every `.qld__accordion` is a self-contained collapsible unit; wire each
  // one individually. This covers grouped accordions, standalone/legacy
  // markup, and other components built on the accordion contract (e.g. the
  // internal navigation side-nav and the video player transcript).
  root
    .querySelectorAll(".qld__accordion")
    .forEach((accordionEl) => wireAccordionToggle(accordionEl, signal));

  // A `.qld__accordion-group` is purely orchestration on top: it only adds
  // the optional "Open all / Close all" button.
  root
    .querySelectorAll(".qld__accordion-group")
    .forEach((groupEl) => initAccordionGroup(groupEl, signal));

  // Cleanup: remove every listener added above in one call (used by the Storybook decorator)
  return () => controller.abort();
}

/**
 * Attach the click listener that toggles a single accordion open/closed.
 *
 * Target lookups are scoped to the accordion element itself (the body always
 * lives inside it), so duplicate ids in sibling accordions (e.g. multiple
 * Storybook stories on a docs page) don't collide.
 *
 * @param {HTMLElement} accordionEl - The `.qld__accordion` element
 * @param {AbortSignal} signal      - Signal used to remove the listener on cleanup
 */
function wireAccordionToggle(accordionEl, signal) {
  // Loose selector: legacy markup doesn't guarantee the title is a <button>
  const titleEl = accordionEl.querySelector(".qld__accordion__title");
  if (!titleEl) return;

  titleEl.addEventListener(
    "click",
    () => Toggle(titleEl, undefined, accordionEl),
    { signal },
  );
}

/**
 * Wire up a group's "Open all / Close all" button and keep it in sync with
 * the accordions inside the group. Individual accordions are wired by
 * initAccordion regardless of group membership; the group only observes their
 * state changes via the bubbling collapsible toggle event.
 *
 * @param {HTMLElement} groupEl - The `.qld__accordion-group` element
 * @param {AbortSignal} signal  - Signal used to remove the listeners on cleanup
 */
function initAccordionGroup(groupEl, signal) {
  const toggleAllBtn = groupEl.querySelector(".qld__accordion__toggle-btn");
  if (!toggleAllBtn) return;

  wireToggleAll(toggleAllBtn, signal);

  groupEl.addEventListener(
    collapsible.TOGGLE_EVENT,
    () => syncToggleAllButton(groupEl),
    { signal },
  );
}

/**
 * Set the "Open all / Close all" button's class, label and `aria-expanded` to
 * reflect whether the group is fully open.
 *
 * @param {HTMLElement} toggleAllBtn - The `.qld__accordion__toggle-btn` element
 * @param {boolean}     isOpen       - Whether the group is fully open
 */
function setToggleAllState(toggleAllBtn, isOpen) {
  toggleAllBtn.classList.toggle("qld__accordion__toggle-btn--open", isOpen);
  toggleAllBtn.classList.toggle("qld__accordion__toggle-btn--closed", !isOpen);
  setExpanded(toggleAllBtn, isOpen);
  toggleAllBtn.textContent = isOpen ? "Close all" : "Open all";
}

/**
 * Keep a group's "Open all / Close all" button in sync with its accordions:
 * the button shows "Close all" only when every accordion is open.
 *
 * @param {HTMLElement} groupEl - The `.qld__accordion-group` element
 */
function syncToggleAllButton(groupEl) {
  const toggleAllBtn = groupEl.querySelector(".qld__accordion__toggle-btn");
  if (!toggleAllBtn) return;

  const titles = groupEl.querySelectorAll(".qld__accordion__title");
  const allOpen = titles.length > 0 && [...titles].every(isExpanded);

  setToggleAllState(toggleAllBtn, allOpen);
}

/**
 * Attach the click listener for a group's "Open all / Close all" button.
 *
 * @param {HTMLElement} toggleAllBtn - The `.qld__accordion__toggle-btn` element
 * @param {AbortSignal} signal       - Signal used to remove the listeners on cleanup
 */
function wireToggleAll(toggleAllBtn, signal) {
  toggleAllBtn.addEventListener("click", () => ToggleAll(toggleAllBtn), {
    signal,
  });
}

/**
 * Toggle an accordion element.
 *
 * @memberof module:accordion
 *
 * @param  {HTMLElement | NodeList} elements  - The DOM node/s to toggle
 * @param  {number}                 speed     - The speed in ms for the animation
 * @param  {Document | HTMLElement} root      - The root element to search for the target
 * @param  {object}                 callbacks - Optional callbacks: { onOpen, afterOpen, onClose, afterClose }
 */
export function Toggle(elements, speed, root = document, callbacks) {
  collapsible.toggle(elements, speed, root, callbacks);
}

/**
 * Toggle all accordion elements in a group.
 *
 * @memberof module:accordion
 *
 * @param  {HTMLElement} toggleAllBtn  - The "Open all / Close all" button
 * @param  {number}      speed     - The speed in ms for the animation
 * @param  {object}      callbacks - Optional callbacks: { onOpen, afterOpen, onClose, afterClose }
 */
export function ToggleAll(toggleAllBtn, speed, callbacks = {}) {
  // find the accordion wrapper — also used to scope the target lookups so
  // duplicate ids in sibling groups (e.g. multiple Storybook stories) don't collide
  const wrapper = toggleAllBtn.closest(".qld__accordion-group");
  // get all the accordion buttons
  const accordionButtons = wrapper.querySelectorAll(".qld__accordion__title");

  // Check if opened or closed
  if (toggleAllBtn.classList.contains("qld__accordion__toggle-btn--closed")) {
    collapsible.open(accordionButtons, speed, wrapper, callbacks);
    setToggleAllState(toggleAllBtn, true);
  } else if (
    toggleAllBtn.classList.contains("qld__accordion__toggle-btn--open")
  ) {
    collapsible.close(accordionButtons, speed, wrapper, callbacks);
    setToggleAllState(toggleAllBtn, false);
  }
}

/**
 * Open a group of accordion elements.
 *
 * @memberof module:accordion
 *
 * @param  {HTMLElement | NodeList} elements - The DOM node/s to open
 * @param  {number}                 speed    - The speed in ms for the animation
 * @param  {Document | HTMLElement} root     - The root element to search for the target element
 * @param  {object}                 callbacks - Optional callbacks: { onOpen, afterOpen }
 */
export function Open(elements, speed, root = document, callbacks) {
  collapsible.open(elements, speed, root, callbacks);
}

/**
 * Close a group of accordion elements.
 *
 * @memberof module:accordion
 *
 * @param  {HTMLElement | NodeList} elements - The DOM node/s to close
 * @param  {number}                 speed    - The speed in ms for the animation
 * @param  {Document | HTMLElement} root     - The root element to search for the target element
 * @param  {object}                 callbacks - Optional callbacks: { onClose, afterClose }
 */
export function Close(elements, speed, root = document, callbacks) {
  collapsible.close(elements, speed, root, callbacks);
}

// Make accordion public for backwards compatibility (window.QLD.accordion.*)
const accordion = { Toggle, ToggleAll, Open, Close, initAccordion };
window.QLD = window.QLD || {};
window.QLD.accordion = accordion;

// Note: accordion groups are initialised via initAccordion() from component-loader.js.

export { accordion };
