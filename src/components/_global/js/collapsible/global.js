/**
 * @module collapsible
 *
 * Framework-agnostic primitive for a height-animated collapsible region bound to
 * a trigger element. Given a trigger (a button/link carrying `aria-controls` and
 * `aria-expanded`) it animates the target region open/closed, toggles the shared
 * state classes, keeps `aria-expanded` in sync and fires optional callbacks.
 *
 * This is the shared engine behind the accordion, the breadcrumbs overflow menu
 * and the mega main navigation. It intentionally knows nothing about any of
 * those components — interaction concerns (outside-click, focus management, ESC,
 * arrow keys, etc.) belong to the consuming component, not here.
 */

import "../animate/global";
import { isExpanded, setExpanded } from "../../../../helpers/global-helpers.js";

/**
 * Shared state-class contract. These class names are also referenced by the CSS
 * of every consumer (accordion, overflow_menu, mega_main_navigation), so they
 * are kept stable rather than renamed.
 */
const OPEN_CLASS = "qld__accordion--open";
const CLOSED_CLASS = "qld__accordion--closed";
const DEFAULT_SPEED = 250;

/**
 * Normalise a single element, NodeList or array of triggers into an array.
 *
 * @param  {HTMLElement | NodeList | HTMLElement[]} elements
 * @return {HTMLElement[]}
 */
const toItems = (elements) => (elements.length === undefined ? [elements] : Array.from(elements));

/**
 * Swap the open/closed state classes on a DOM node.
 *
 * @param  {HTMLElement} element - The DOM element we want to toggle classes on
 * @param  {string}      state   - The current state of the animation on the element
 */
const toggleClasses = (element, state) => {
    const opening = state === "opening" || state === "open";
    element.classList.toggle(OPEN_CLASS, opening);
    element.classList.toggle(CLOSED_CLASS, !opening);
};

/**
 * Resolve the collapsible region a trigger controls via its `aria-controls` id.
 *
 * @param  {HTMLElement}            element - The trigger element
 * @param  {Document | HTMLElement} root    - The root to search within
 * @return {HTMLElement | null}
 */
const getTarget = (element, root = document) => root.querySelector(`[id="${element.getAttribute("aria-controls")}"]`);

/**
 * Push a GTM dataLayer event, if a dataLayer is present.
 *
 * @param  {string} event  - The dataLayer event name
 * @param  {string} action - The action label
 * @param  {string} label  - The id of the affected region
 */
const pushDataLayer = (event, action, label) => {
    window.dataLayer?.push({ event, category: "accordion", action, label });
};

/**
 * Open one or more collapsible regions.
 *
 * @memberof module:collapsible
 *
 * @param  {HTMLElement | NodeList} elements  - The trigger node/s whose target/s to open
 * @param  {number}                 speed     - The speed in ms for the animation
 * @param  {Document | HTMLElement} root      - The root element to search for the target
 * @param  {object}                 callbacks - Optional callbacks: { onOpen, afterOpen }
 */
export function open(elements, speed, root = document, callbacks = {}) {
    toItems(elements).forEach((element) => {
        const target = getTarget(element, root);

        // If the region is collapsed, pin its height to 0 so it can animate open.
        if (parseInt(getComputedStyle(target).height, 10) === 0) {
            target.style.height = "0px";
        }

        target.style.display = "";
        toggleClasses(target, "opening");
        toggleClasses(element, "opening");
        setExpanded(element, true);

        callbacks.onOpen?.();
        pushDataLayer("accordion open", "open", element.getAttribute("aria-controls"));

        window.QLD.animate.Run({
            element: target,
            property: "height",
            endSize: "auto",
            speed: speed || DEFAULT_SPEED,
            callback: () => {
                callbacks.afterOpen?.();
            },
        });
    });
}

/**
 * Close one or more collapsible regions.
 *
 * @memberof module:collapsible
 *
 * @param  {HTMLElement | NodeList} elements  - The trigger node/s whose target/s to close
 * @param  {number}                 speed     - The speed in ms for the animation
 * @param  {Document | HTMLElement} root      - The root element to search for the target
 * @param  {object}                 callbacks - Optional callbacks: { onClose, afterClose }
 */
export function close(elements, speed, root = document, callbacks = {}) {
    toItems(elements).forEach((element) => {
        const target = getTarget(element, root);

        toggleClasses(element, "closing");
        setExpanded(element, false);

        callbacks.onClose?.();
        pushDataLayer("accordion close", "close", element.getAttribute("aria-controls"));

        window.QLD.animate.Run({
            element: target,
            property: "height",
            endSize: 0,
            speed: speed || DEFAULT_SPEED,
            callback: () => {
                target.style.display = "";
                toggleClasses(target, "close");
                callbacks.afterClose?.();
            },
        });
    });
}

/**
 * Toggle one or more collapsible regions based on each trigger's current
 * `aria-expanded` state.
 *
 * @memberof module:collapsible
 *
 * @param  {HTMLElement | NodeList} elements  - The trigger node/s to toggle
 * @param  {number}                 speed     - The speed in ms for the animation
 * @param  {Document | HTMLElement} root      - The root element to search for the target
 * @param  {object}                 callbacks - Optional callbacks: { onOpen, afterOpen, onClose, afterClose }
 */
export function toggle(elements, speed, root = document, callbacks) {
    toItems(elements).forEach((element) => {
        const target = getTarget(element, root);

        if (target == null) {
            throw new Error(
                "collapsible.toggle cannot find the target to be toggled from inside aria-controls.\n" +
                    "Make sure the first argument you give collapsible.toggle is the DOM element (a button or a link) that has an aria-controls attribute that points " +
                    "to a div that you want to toggle.",
            );
        }

        if (isExpanded(element)) {
            close(element, speed, root, callbacks);
        } else {
            open(element, speed, root, callbacks);
        }
    });
}
