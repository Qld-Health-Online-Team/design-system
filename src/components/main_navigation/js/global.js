/**
 * The mobile nav module
 *
 * @module mobileNav
 */
import { setExpanded } from "../../../helpers/global-helpers.js";
import * as animate from "../../_global/js/animate/global.js";
import utils from "../../_global/js/global.js";

var mobileNav = {};
var mobileNavEvents = {};
var mobileNavAnimating = false;

/**
 * IE8 compatible function for replacing classes on a DOM node
 *
 * @memberof module:mobileNav
 * @instance
 * @private
 *
 * @param  {object} element      - The DOM element we want to toggle classes on
 * @param  {object} state        - The current state of the animation on the element
 * @param  {string} openingClass - The firstClass you want to toggle on the DOM node
 * @param  {string} closingClass - The secondClass you want to toggle on the DOM node
 */
function toggleClasses(element, state, openingClass, closingClass) {
  var oldClass;
  var newClass;
  if (state === "opening" || state === "open") {
    oldClass = openingClass || "qld__main-nav__content--closed";
    newClass = closingClass || "qld__main-nav__content--open";
  } else {
    oldClass = closingClass || "qld__main-nav__content--open";
    newClass = openingClass || "qld__main-nav__content--closed";
  }

  removeClass(element, oldClass);
  addClass(element, newClass);
}

/**
 * IE8 compatible function for removing a class
 *
 * @memberof module:mobileNav
 * @instance
 * @private
 *
 * @param  {object} element   - The DOM element we want to manipulate
 * @param  {object} className - The name of the class to be removed
 */
function removeClass(element, className) {
  if (element.classList) {
    element.classList.remove(className);
  } else {
    element.className = element.className.replace(
      new RegExp("(^|\\b)" + className.split(" ").join("|") + "(\\b|$)", "gi"),
      " ",
    );
  }
}

/**
 * IE8 compatible function for adding a class
 *
 * @memberof module:mobileNav
 * @instance
 * @private
 *
 * @param  {object} element   - The DOM element we want to manipulate
 * @param  {object} className - The name of the class to be added
 */
function addClass(element, className) {
  if (element.classList) {
    element.classList.add(className);
  } else {
    element.className = element.className + " " + className;
  }
}

/**
 * IE8 compatible function for adding an event
 * https://stackoverflow.com/questions/10149963/adding-event-listener-cross-browser
 *
 * @memberof module:mobileNav
 * @instance
 * @private
 *
 * @param  {object} element    - The DOM element to add the listener
 * @param  {object} event      - The event data
 * @param  {object} rawHandler - The function to run when triggered
 *
 * @returns {object}           -  The token for removal of listener
 */
function addEvent(element, event, rawHandler) {
  // Using local functions instead of anonymous for event handler
  function listenHandler(event) {
    var handler = rawHandler.apply(this, arguments);
    if (handler === false) {
      event.stopPropagation();
      event.preventDefault();
    }
    return handler;
  }

  // Make sure attachHandler is also going to work
  function attachHandler() {
    var handler = rawHandler.call(element, window.event);
    if (handler === false) {
      window.event.returnValue = false;
      window.event.cancelBubble = true;
    }
    return handler;
  }

  // Return the token and add the correct listener
  if (element.addEventListener) {
    element.addEventListener(event, listenHandler, false);
    return {
      element: element,
      handler: listenHandler,
      event: event,
    };
  } else {
    element.attachEvent("on" + event, attachHandler);
    return {
      element: element,
      handler: attachHandler,
      event: event,
    };
  }
}

/**
 * IE8 compatible function for removing an event
 *
 * @memberof module:mobileNav
 * @instance
 * @private
 *
 * @param  {object} token - The token from the add listener function
 */
function removeEvent(token) {
  if (token.element.removeEventListener) {
    token.element.removeEventListener(token.event, token.handler);
  } else {
    token.element.detachEvent("on" + token.event, token.handler);
  }
}

/**
 * IE8 compatible function for getting elements style
 *
 * @memberof module:mobileNav
 * @instance
 * @private
 *
 * @param  {object} element  - element to check style
 * @param  {object} property - property to return value
 */
function getStyle(element, property) {
  return (
    typeof getComputedStyle !== "undefined"
      ? getComputedStyle(element, null)
      : element.currentStyle
  )[property]; // avoid getPropertyValue altogether
}

/**
 * Toggle a mobileNav element
 *
 * @memberof module:mobileNav
 *
 * @param  {string}  element   - The toggle for the main nav
 * @param  {integer} speed     - The speed in ms for the animation
 * @param  {object}  callbacks - An object of four optional callbacks: { onOpen, afterOpen, onClose, afterClose }
 *
 */
mobileNav.Toggle = function (element, speed, callbacks) {
  // Stop the main nav from being toggled if it is already being toggled
  if (mobileNavAnimating) {
    return;
  }

  mobileNavAnimating = true;

  // stop event propagation
  try {
    window.event.cancelBubble = true;
    event.stopPropagation();
  } catch {
    // no-op: window.event / event may be unavailable in this context
  }

  // check this once
  if (typeof callbacks != "object") {
    callbacks = {};
  }

  // Elements we modify
  var targetId = element.getAttribute("aria-controls");
  var target = document.getElementById(targetId);
  var menu = target.querySelector(".qld__main-nav__menu");
  var overlay = target.querySelector(".qld__main-nav__overlay");
  var closeButton = target.querySelector(".qld__main-nav__toggle--close");
  var openButton = document.querySelector(".qld__main-nav__toggle--open");
  var focustrapTop = menu.querySelector(".qld__main-nav__focus-trap-top");
  var focustrapBottom = menu.querySelector(".qld__main-nav__focus-trap-bottom");
  var menuHeading = document.querySelector(".qld__main-nav__menu-heading");
  var focusContent = menu.querySelectorAll("a, .qld__main-nav__toggle");
  var closed = target.className.indexOf("qld__main-nav__content--open") === -1;
  var header = document.querySelector(".qld__header");
  var body = document.querySelector(".main");
  var footer = document.querySelector(".qld__footer");

  var menuWidth = menu.offsetWidth;
  var state = closed ? "opening" : "";

  overlay.style.display = "block";

  (function (target, speed) {
    animate.Toggle({
      element: menu,
      property: "right",
      openSize: 0,
      closeSize: -1 * menuWidth,
      speed: speed || 250,
      prefunction: function () {
        // Set these values immediately for transitions
        if (state === "opening") {
          menu.style.display = "block";
          overlay.style.right = 0;
          overlay.style.opacity = 0.5;

          // run when opening
          if (typeof callbacks.onOpen === "function") {
            callbacks.onOpen();
          }
        } else {
          overlay.style.opacity = "0";

          // run when closing
          if (typeof callbacks.onClose === "function") {
            callbacks.onClose();
          }
        }
      },
      postfunction: function () {
        if (state === "opening") {
          // Move the focus to the close button
          if (menuHeading) {
            menuHeading.focus();
          }
          if (openButton) setExpanded(openButton, true);
          if (closeButton) setExpanded(closeButton, true);

          if (focustrapTop) focustrapTop.setAttribute("tabindex", 0);
          if (focustrapBottom) focustrapBottom.setAttribute("tabindex", 0);

          if (body) body.setAttribute("aria-hidden", true);
          if (footer) footer.setAttribute("aria-hidden", true);
          // openButton.setAttribute("aria-expanded", true);
          // closeButton.setAttribute("aria-expanded", true);

          // // Focus trap enabled
          // focustrapTop.setAttribute("tabindex", 0);
          // focustrapBottom.setAttribute("tabindex", 0);

          // // header.setAttribute('aria-hidden', true);
          // body.setAttribute("aria-hidden", true);
          // footer.setAttribute("aria-hidden", true);

          // Add event listeners
          mobileNavEvents.focusTop = addEvent(
            focustrapTop,
            "focus",
            function () {
              focusContent[focusContent.length - 1].focus();
            },
          );

          mobileNavEvents.focusBottom = addEvent(
            focustrapBottom,
            "focus",
            function () {
              focusContent[0].focus();
            },
          );

          // Add key listener
          mobileNavEvents.escKey = addEvent(document, "keydown", function () {
            var event = event || window.event;
            var overlayOpen = getStyle(overlay, "display");

            // Check the menu is open and visible and the escape key is pressed
            if (event.keyCode === 27 && overlayOpen === "block") {
              mobileNav.Toggle(element, speed, callbacks);
            }
          });

          if (typeof callbacks.afterOpen === "function") {
            callbacks.afterOpen();
          }

          // Adjust the size of the cta wrapper in mobile view
          const mobileMenuWidth = document.querySelector(
            ".qld__main-nav__menu-inner",
          ).offsetWidth;
          let ctaWrapper = document.querySelector(
            ".qld__main-nav__cta-wrapper",
          );
          if (mobileMenuWidth && ctaWrapper) {
            ctaWrapper.style.width = mobileMenuWidth + "px";
          }
        } else {
          // Move the focus back to the menu button
          if (closeButton) closeButton.focus();
          if (openButton) setExpanded(openButton, false);
          if (closeButton) setExpanded(closeButton, false);

          if (focustrapTop) focustrapTop.removeAttribute("tabindex");
          if (focustrapBottom) focustrapBottom.removeAttribute("tabindex");

          if (header) header.removeAttribute("aria-hidden");
          if (body) body.removeAttribute("aria-hidden");
          if (footer) footer.removeAttribute("aria-hidden");

          // Remove the event listeners
          removeEvent(mobileNavEvents.focusTop);
          removeEvent(mobileNavEvents.focusBottom);

          // Remove the event listener for the keypress
          removeEvent(mobileNavEvents.escKey);

          if (typeof callbacks.afterClose === "function") {
            callbacks.afterClose();
          }
        }

        // Toggle classes
        toggleClasses(target, state);
        toggleClasses(
          document.body,
          state,
          "qld__main-nav__scroll--unlocked",
          "qld__main-nav__scroll--locked",
        );

        // Reset inline styles
        menu.style.display = "";
        menu.style.right = "";
        overlay.style.display = "";
        overlay.style.right = "";
        overlay.style.opacity = "";

        mobileNavAnimating = false;
      },
    });
  })(target, speed);
};

/**
 * Initialise the mobile nav: wire the open/close toggles and fix up the SVG
 * icon paths for the nav/header CTAs.
 *
 * @param {Document|Element} root - Scope for the toggle query. Defaults to `document`.
 */
export default function initMainNav(root = document) {
  // Add toggle event to open mobile nav
  var navToggles = root.querySelectorAll('*[aria-controls="main-nav"]');
  navToggles.forEach(function (button) {
    button.addEventListener("click", function () {
      mobileNav.Toggle(button);
    });
  });

  // Finds all the menu related icons in main nav, mega nav, and header.
  utils.updateSvgIconPath(
    ".qld__main-nav__cta-wrapper .qld__main-nav__item-link svg.qld__icon > use, .qld__header__cta-wrapper .qld__header__cta-link svg.qld__icon > use",
  );
}

export { mobileNav };
