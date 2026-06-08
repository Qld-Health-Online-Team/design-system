/**
 * @module overflow_menu
 *
 * Behaviour for the overflow menu (used by the breadcrumbs component): a button
 * that discloses a small menu of links. The open/close animation is handled by
 * the shared `collapsible` primitive; this module owns the menu-specific
 * interaction — focusing the first link on open and closing when the user clicks
 * outside the menu.
 */

import * as collapsible from "../../_global/js/collapsible/global.js";
import { isExpanded } from "../../../helpers/global-helpers.js";

/**
 * Wire up every overflow menu toggle button found under `root`.
 *
 * Safe to call repeatedly (e.g. on resize): buttons that are already wired are
 * skipped, so newly created buttons get listeners without duplicating them on
 * existing ones.
 *
 * @param {Document | HTMLElement} root - The root element to search within
 */
export function initOverflowMenu(root = document) {
    root.querySelectorAll(".qld__overflow_menu__btn").forEach((button) => {
        if (button.dataset.qldOverflowWired === "true") return;
        button.dataset.qldOverflowWired = "true";
        button.addEventListener("click", () => toggleOverflowMenu(button));
    });
}

/**
 * Toggle a single overflow menu, layering the menu interaction on top of the
 * shared collapsible open/close.
 *
 * @param {HTMLElement} button - The overflow menu toggle button
 */
function toggleOverflowMenu(button) {
    const panel = document.getElementById(button.getAttribute("aria-controls"));
    if (!panel) return;

    if (isExpanded(button)) {
        collapsible.close(button);
        teardownOutsideClick(panel);
    } else {
        collapsible.open(button, undefined, document, {
            afterOpen: () => {
                panel.querySelector("a.qld__overflow_menu_list-item-link")?.focus();
            },
        });
        setupOutsideClick(button, panel);
    }
}

/**
 * Close the menu when the user clicks anywhere outside the button or panel.
 * The controller is stashed on the panel so it can be aborted on close.
 *
 * @param {HTMLElement} button - The overflow menu toggle button
 * @param {HTMLElement} panel  - The overflow menu panel
 */
function setupOutsideClick(button, panel) {
    const controller = new AbortController();
    panel.__qldOutsideClickController = controller;

    document.addEventListener(
        "click",
        (event) => {
            if (button.contains(event.target) || panel.contains(event.target)) return;
            controller.abort();
            panel.__qldOutsideClickController = null;
            if (isExpanded(button)) {
                collapsible.close(button);
            }
        },
        { signal: controller.signal },
    );
}

/**
 * Remove the outside-click listener attached by setupOutsideClick, if any.
 *
 * @param {HTMLElement} panel - The overflow menu panel
 */
function teardownOutsideClick(panel) {
    if (panel.__qldOutsideClickController) {
        panel.__qldOutsideClickController.abort();
        panel.__qldOutsideClickController = null;
    }
}
