/**
 * Mega main navigation keyboard and interaction behaviour.
 *
 * Each nav item with a submenu supports:
 *  - Click toggle button: open/close submenu
 *  - ESC (anywhere in document): close submenu, prevent sidebar from also closing
 *  - Click outside: close submenu
 *  - Arrow Up/Down: move focus between submenu items
 *  - Focusout (toggle button or submenu): close submenu unless focus stays within
 */

import {accordion} from "../../accordion/js/global.js";

/** Selector matching all interactive elements that can receive focus. */
const FOCUSABLE_SELECTOR = 'a[href], button:not([disabled]), input:not([disabled]), select:not([disabled]), textarea:not([disabled]), [tabindex]:not([tabindex="-1"])';

export function initMegaMenu() {
    const navItemEls = document.querySelectorAll(".qld__main-nav__item");

    const navItems = Array.from(navItemEls).map((item) => {
        const navItemTitle = item.querySelector(".qld__main-nav__item-title");
        if (!navItemTitle) return null;
        const toggleBtnEl = navItemTitle.querySelector("button");
        return {
            linkEl: navItemTitle.querySelector("a"),
            toggleBtnEl,
            subMenuEl: item.querySelector(".qld__main-nav__menu-sub"),
            clickingInsideSubMenu: false,
            handlers: {},
        };
    }).filter(Boolean);

    // Single shared mouseup listener to reset the clickingInsideSubMenu flag
    // across all items. Registered once rather than once per item.
    document.addEventListener("mouseup", () => {
        navItems.forEach((item) => {
            item.clickingInsideSubMenu = false;
        });
    });

    navItems.forEach((item) => {
        const {toggleBtnEl, subMenuEl} = item;
        item.handlers.click = handleToggleBtnClick(item, navItems);
        toggleBtnEl?.addEventListener("click", item.handlers.click);

        subMenuEl?.addEventListener("mousedown", () => {
            item.clickingInsideSubMenu = true;
        });
    });
}

function handleToggleBtnClick(item, navItems) {
    return () => {
        const {toggleBtnEl} = item;
        if (isSubMenuOpen(toggleBtnEl)) {
            closeSubMenu(item);
        } else {
            closeAllSubMenus(navItems, item);
            openSubMenu(item);
        }
    };
}

/**
 * Opens the submenu and registers all associated event listeners.
 * Listeners are stored on item.handlers so they can be removed on close.
 */
function openSubMenu(item) {
    const {linkEl, toggleBtnEl, subMenuEl} = item;
    accordion.Open(toggleBtnEl);
    syncNavItemLinkClass(linkEl, true);

    item.handlers.documentEscape = handleDocumentEscape(item);
    item.handlers.outsideClick = handleOutsideClick(item);
    item.handlers.focusOut = handleFocusOut(item);
    item.handlers.subMenuKeyDown = handleSubMenuKeyDown(item);

    // Capture phase ensures this fires before the sidebar's bubble-phase keydown
    // listener, so ESC closes the submenu first without also closing the sidebar.
    document.addEventListener("keydown", item.handlers.documentEscape, true);
    document.addEventListener("click", item.handlers.outsideClick);
    subMenuEl?.addEventListener("focusout", item.handlers.focusOut);
    subMenuEl?.addEventListener("keydown", item.handlers.subMenuKeyDown);
    toggleBtnEl?.addEventListener("focusout", item.handlers.focusOut);
}

/**
 * Closes the submenu and removes all associated event listeners registered in openSubMenu.
 */
function closeSubMenu(item) {
    const {linkEl, toggleBtnEl, subMenuEl} = item;
    accordion.Close(toggleBtnEl);
    syncNavItemLinkClass(linkEl, false);

    document.removeEventListener("keydown", item.handlers.documentEscape, true);
    document.removeEventListener("click", item.handlers.outsideClick);
    subMenuEl?.removeEventListener("focusout", item.handlers.focusOut);
    subMenuEl?.removeEventListener("keydown", item.handlers.subMenuKeyDown);
    toggleBtnEl?.removeEventListener("focusout", item.handlers.focusOut);
}

function handleDocumentEscape(item) {
    return (e) => {
        if (e.key !== "Escape") return;
        // Prevent the sidebar's keydown listener from also firing on this keypress.
        e.stopImmediatePropagation();
        closeSubMenu(item);
        item.toggleBtnEl?.focus();
    };
}

function handleOutsideClick(item) {
    return (e) => {
        const {toggleBtnEl, subMenuEl} = item;
        if (toggleBtnEl?.contains(e.target)) return;
        if (subMenuEl?.contains(e.target)) return;
        closeSubMenu(item);
    };
}

function handleSubMenuKeyDown(item) {
    return (e) => {
        if (e.key !== "ArrowDown" && e.key !== "ArrowUp") return;
        e.preventDefault();

        const focusableItems = Array.from(item.subMenuEl.querySelectorAll(FOCUSABLE_SELECTOR));
        const currentIndex = focusableItems.indexOf(e.target);

        if (e.key === "ArrowDown") {
            focusableItems[currentIndex + 1]?.focus();
        } else {
            focusableItems[currentIndex - 1]?.focus();
        }
    };
}

function handleFocusOut(item) {
    return (e) => {
        // Keep menu open if the window lost focus (e.g. user switched app).
        if (!document.hasFocus()) return;
        // Keep menu open if the user is clicking within the submenu — relatedTarget
        // is null when clicking non-focusable whitespace, so we track mousedown instead.
        if (item.clickingInsideSubMenu) return;

        const {toggleBtnEl, subMenuEl} = item;
        const focusMovingTo = e.relatedTarget;
        if (subMenuEl?.contains(focusMovingTo)) return;
        if (toggleBtnEl?.contains(focusMovingTo)) return;
        closeSubMenu(item);
    };
}

function isSubMenuOpen(toggleBtnEl) {
    return toggleBtnEl.getAttribute("aria-expanded") === "true";
}

function syncNavItemLinkClass(linkEl, isOpen) {
    linkEl?.classList.toggle("qld__main-nav__item-link--open", isOpen);
}

function closeAllSubMenus(navItems, currentItem) {
    navItems.forEach((item) => {
        if (item === currentItem) return;
        if (!item.toggleBtnEl) return;
        if (isSubMenuOpen(item.toggleBtnEl)) closeSubMenu(item);
    });
}