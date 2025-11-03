/**
 * @module header
 */

// Search toggle button
const searchToggle = document.querySelector(".qld__main-nav__toggle-search");
const searchForm = document.querySelector(".qld__header__search .qld__search-form");
const targetId = searchToggle.getAttribute("aria-controls");
const target = document.getElementById(targetId);
const focustrapTop = target.querySelector(".qld__main-nav__focus-trap-top");
const focustrapBottom = target.querySelector(".qld__main-nav__focus-trap-bottom");
// const isExpanded = searchToggle.getAttribute("aria-expanded");
const searchToggleText = searchToggle.querySelector(".qld__main-nav__toggle-text");
// Hold state of the header (open vs close)
let isHeaderOpen = false;
// Global events object
let headerSearchEvents = {};

export default function initHeader(document = document) {
    // Add action so the search works only if JS is enabled
    if (searchForm) {
        searchForm.querySelector(".qld__btn--search").setAttribute("type", "submit");
        searchForm.querySelectorAll(".qld__btn--search, .qld__text-input").forEach((el) => {
            el.removeAttribute("disabled");
        });
        checkHoneypot();
    }

    // Add event listener to search toggle button
    if (searchToggle) {
        searchToggle.addEventListener("click", toggleHeaderSearch);
    }

    // We want to ensure the search input is visible on desktop at all times
    window.addEventListener("resize", () => {
        if (window.innerWidth >= 992 && !isHeaderOpen) {
            openHeader();
        } else if (window.innerWidth < 992 && isHeaderOpen) {
            closeHeader();
        }
    });
}

/**
 * Check if honeypot field is empty
 *
 * @memberof module:header
 * @instance
 * @private
 */
function checkHoneypot() {
    const honeypot = searchForm.querySelector(".qld__text-input--validation");
    honeypot.value = "";

    searchForm.addEventListener("submit", function (event) {
        // Prevent form submission if the honeypot field is filled
        if (honeypot.value !== "") {
            event.preventDefault(); // Stop the form submission
        } else {
            honeypot.removeAttribute("name");
        }
    });
}

/**
 * Toggle the header search on mobile/tablet
 *
 * @memberof module:header
 * @instance
 * @private
 */
function toggleHeaderSearch() {
    // Open menu
    if (!isHeaderOpen) {
        openHeader();
        // Close menu
    } else {
        closeHeader();
    }
}

function openHeader() {
    isHeaderOpen = true;
    searchToggle.setAttribute("aria-expanded", true);
    searchToggle.classList.remove("qld__main-nav__toggle-search--open");
    searchToggle.classList.add("qld__main-nav__toggle-search--close");
    searchToggleText.textContent = "Close";
    target.style.display = "block";

    // Wait for display: block, and then add class to open smoothly
    setTimeout(function () {
        target.classList.add("qld__main-nav__search--open");
        target.querySelector(".qld__text-input").focus();

        // Close header search on click outside
        headerSearchEvents.background = addEvent(document, "click", function () {
            if (!target.contains(event.target)) {
                toggleHeaderSearch();
            }
        });
    }, 0);

    // Focus trap enabled
    focustrapTop.setAttribute("tabindex", 0);
    focustrapBottom.setAttribute("tabindex", 0);

    // Add focus listeners
    headerSearchEvents.focusTop = addEvent(focustrapTop, "focus", function () {
        target.querySelector("button").focus();
    });

    headerSearchEvents.focusBottom = addEvent(focustrapBottom, "focus", function () {
        target.querySelector("input").focus();
    });

    // Close header search if burger menu opened
    const menuToggle = document.querySelector('button[aria-controls="main-nav"]');
    if (menuToggle) {
        headerSearchEvents.menu = addEvent(menuToggle, "click", function () {
            toggleHeaderSearch();
        });
    }

    // Add key listener
    headerSearchEvents.escKey = addEvent(document, "keydown", function (event) {
        // Check the menu is open and visible and the escape key is pressed
        if (event.key === "Escape") {
            toggleHeaderSearch();
        }
    });
}

function closeHeader() {
    isHeaderOpen = false;
    searchToggle.setAttribute("aria-expanded", false);
    searchToggle.classList.remove("qld__main-nav__toggle-search--close");
    searchToggle.classList.add("qld__main-nav__toggle-search--open");
    searchToggleText.textContent = "Search";
    searchToggle.focus();
    target.classList.remove("qld__main-nav__search--open");
    target.style.display = "none";

    // Remove the focus trap
    focustrapTop.removeAttribute("tabindex");
    focustrapBottom.removeAttribute("tabindex");

    // Remove the event listeners
    removeEvent(headerSearchEvents.focusTop);
    removeEvent(headerSearchEvents.focusBottom);
    removeEvent(headerSearchEvents.background);
    removeEvent(headerSearchEvents.menu);
    removeEvent(headerSearchEvents.escKey);
    // Clear events object
    headerSearchEvents = {};
}

/**
 * Object representing an event listener
 *
 * @typedef {Object} event
 * @property {Node} element             Element the event is attached to
 * @property {function} handler         Event handler function
 * @property {document#event} event     DOM event to listen for
 */

/**
 * Add event listener
 *
 * @memberof module:header
 * @instance
 * @private
 *
 * @param {Node} element            DOM element to add event to
 * @param {document#event} event    The event to listen for
 * @param {function} rawHandler     The raw handler function
 * @return {event}
 */
function addEvent(element, event, rawHandler) {
    // Using local functions instead of anonymous for event handler
    function listenHandler(event) {
        const handler = rawHandler.apply(this, arguments);
        if (handler === false) {
            event.stopPropagation();
            event.preventDefault();
        }
        return handler;
    }

    element.addEventListener(event, listenHandler, false);
    return {
        element: element,
        handler: listenHandler,
        event: event,
    };
}

/**
 * Remove event listener
 *
 * @memberof module:header
 * @instance
 * @private
 *
 * @param {event} token     The event to remove
 */
function removeEvent(token) {
    token.element.removeEventListener(token.event, token.handler);
}
