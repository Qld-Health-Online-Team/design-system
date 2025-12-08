// This file is temporarily added to Storybook to allow testing of the accordion component in isolation, while the main global.js file is being refactored into modules.

/**
 * @module accordion
 */

export default function initAccordion(document = document, element) {
    let accordion = {};

    if (element == "overflow") {
        const overflowMenuButtons = document.querySelectorAll(".qld__overflow_menu__btn");
        overflowMenuButtons.forEach(function (button) {
            button.addEventListener("click", function () {
                accordion.Toggle(button);
            });
        });
    } else {
        const accordionButtons = document.querySelectorAll(".qld__accordion__title");
        accordionButtons.forEach(function (button) {
            button.addEventListener("click", function () {
                accordion.Toggle(button);
            });
        });

        const accordionAllButtton = document.querySelectorAll(".qld__accordion__toggle-btn");
        accordionAllButtton.forEach(function (button) {
            button.addEventListener("click", function () {
                accordion.ToggleAll(button);
            });
        });
    }

    function setAriaRoles(element, state) {
        if (state === "closing") {
            element.setAttribute("aria-expanded", false);
        } else {
            element.setAttribute("aria-expanded", true);
        }
    }

    function toggleClasses(element, state, openingClass, closingClass) {
        if (state === "opening" || state === "open") {
            var oldClass = openingClass || "qld__accordion--closed";
            var newClass = closingClass || "qld__accordion--open";
        } else {
            var oldClass = closingClass || "qld__accordion--open";
            var newClass = openingClass || "qld__accordion--closed";
        }

        removeClass(element, oldClass);
        addClass(element, newClass);
    }

    function removeClass(element, className) {
        if (element.classList) {
            element.classList.remove(className);
        } else {
            element.className = element.className.replace(new RegExp("(^|\\b)" + className.split(" ").join("|") + "(\\b|$)", "gi"), " ");
        }
    }

    function addClass(element, className) {
        if (element.classList) {
            element.classList.add(className);
        } else {
            element.className = element.className + " " + className;
        }
    }

    accordion.Toggle = function (elements, speed, callbacks) {
        // stop event propagation
        try {
            window.event.cancelBubble = true;
            event.stopPropagation();
        } catch (error) {
            console.error(error);
        }

        // making sure we can iterate over just one DOM element
        if (elements.length === undefined) {
            elements = [elements];
        }

        // check this once
        if (typeof callbacks != "object") {
            callbacks = {};
        }

        for (var i = 0; i < elements.length; i++) {
            var element = elements[i];
            var targetId = element.getAttribute("aria-controls");
            var target = document.getElementById(targetId);

            if (target == null) {
                throw new Error(
                    "accordion.Toggle cannot find the target to be toggled from inside aria-controls.\n" +
                        "Make sure the first argument you give accordion.Toggle is the DOM element (a button or a link) that has an aria-controls attribute that points " +
                        "to a div that you want to toggle.",
                );
            }

            target.style.display = "block";

            QLD.animate.Toggle({
                element: target,
                property: "height",
                speed: speed || 250,
                prefunction: function (target, state) {
                    if (state === "opening") {
                        target.style.display = "block";

                        // run when opening
                        if (typeof callbacks.onOpen === "function") {
                            callbacks.onOpen();
                        }
                    } else {
                        // run when closing
                        if (typeof callbacks.onClose === "function") {
                            callbacks.onClose();
                        }
                    }

                    setAriaRoles(element, target, state);
                    toggleClasses(element, state);
                },
                postfunction: function (target, state) {
                    if (state === "closed") {
                        // run after closing
                        target.style.display = "";
                        target.style.height = "";

                        // GTM event
                        if (typeof window.dataLayer !== "undefined") {
                            window.dataLayer.push({
                                event: "accordion closed",
                                category: "accordion",
                                action: "close",
                                label: targetId,
                            });
                        }

                        if (typeof callbacks.afterClose === "function") {
                            callbacks.afterClose();
                        }
                    } else {
                        // run after opening
                        target.style.display = "";
                        target.style.height = "";

                        // GTM event
                        if (typeof window.dataLayer !== "undefined") {
                            window.dataLayer.push({
                                event: "accordion open",
                                category: "accordion",
                                action: "open",
                                label: targetId,
                            });
                        }

                        if (typeof callbacks.afterOpen === "function") {
                            callbacks.afterOpen();
                        }

                        if (target.classList.contains("qld__overflow_menu")) {
                            var overFlowLinks = [];
                            overFlowLinks = target.querySelectorAll("a.qld__overflow_menu_list-item-link");

                            if (overFlowLinks[0]) {
                                setTimeout(function () {
                                    overFlowLinks[0].focus();
                                }, 10);
                            }
                        }
                    }

                    toggleClasses(target, state);
                },
                callback: function (target, state) {
                    const controller = new AbortController();

                    function toggleNavOnDocumentClick(event) {
                        if (!event.target.closest(".qld__main-nav__menu-sub.qld__accordion__body.qld__accordion--open")) {
                            controller.abort();
                            if (elements[0].classList.contains("qld__accordion--open")) {
                                accordion.Toggle(elements, speed, callbacks);
                            }
                        }
                    }

                    if (state === "open" || state === "opening") {
                        //if it is a mega nav add an event listener to close it when document is clicked
                        if (this.element.classList.contains("qld__main-nav__menu-sub") || this.element.classList.contains("qld__overflow_menu")) {
                            document.addEventListener("click", toggleNavOnDocumentClick, { signal: controller.signal });
                        }
                    } else {
                        if (this.element.classList.contains("qld__main-nav__menu-sub") || this.element.classList.contains("qld__overflow_menu")) {
                            document.removeEventListener("click", toggleNavOnDocumentClick, { signal: controller.signal });
                            controller.abort();
                        }
                    }
                },
            });
        }

        return false;
    };

    accordion.ToggleAll = function (elements, speed, callbacks) {
        // stop event propagation
        try {
            window.event.cancelBubble = true;
            event.stopPropagation();
        } catch (error) {
            console.error(error);
        }

        var toogleAllButton = elements;
        // find the accordion wrapper
        var wrapper = toogleAllButton.closest(".qld__accordion-group");
        // get all the accordion buttons
        var accordionButtons = wrapper.querySelectorAll(".qld__accordion__title");

        // check this once
        if (typeof callbacks != "object") {
            callbacks = {};
        }

        // Check if opened or closed
        if (toogleAllButton.classList.contains("qld__accordion__toggle-btn--closed")) {
            toogleAllButton.classList.remove("qld__accordion__toggle-btn--closed");
            toogleAllButton.setAttribute("aria-expanded", "true");
            toogleAllButton.classList.add("qld__accordion__toggle-btn--open");
            toogleAllButton.textContent = "Close all";
            accordion.Open(accordionButtons);
        } else if (toogleAllButton.classList.contains("qld__accordion__toggle-btn--open")) {
            toogleAllButton.classList.remove("qld__accordion__toggle-btn--open");
            toogleAllButton.setAttribute("aria-expanded", "false");
            toogleAllButton.classList.add("qld__accordion__toggle-btn--closed");
            toogleAllButton.textContent = "Open all";
            accordion.Close(accordionButtons);
        }

        return false;
    };

    accordion.Open = function (elements, speed) {
        // stop event propagation
        try {
            window.event.cancelBubble = true;
            event.stopPropagation();
        } catch (error) {
            console.error(error);
        }

        if (elements.length === undefined) {
            elements = [elements];
        }

        for (var i = 0; i < elements.length; i++) {
            var element = elements[i];
            var targetId = element.getAttribute("aria-controls");
            var target = document.getElementById(targetId);

            // let’s find out if this accordion is still closed
            var height = 0;
            if (typeof getComputedStyle !== "undefined") {
                height = window.getComputedStyle(target).height;
            } else {
                height = target.currentStyle.height;
            }

            if (parseInt(height) === 0) {
                target.style.height = "0px";
            }

            target.style.display = "";
            toggleClasses(target, "opening");
            toggleClasses(element, "opening");
            setAriaRoles(element, target, "opening");

            if (typeof window.dataLayer !== "undefined") {
                window.dataLayer.push({
                    event: "accordion open",
                    category: "accordion",
                    action: "close",
                    label: targetId,
                });
            }

            QLD.animate.Run({
                element: target,
                property: "height",
                endSize: "auto",
                speed: speed || 250,
                callback: function () {
                    toggleClasses(element, "opening");
                },
            });
        }
    };

    accordion.Close = function (elements, speed) {
        // stop event propagation
        try {
            window.event.cancelBubble = true;
            event.stopPropagation();
        } catch (error) {
            console.error(error);
        }

        if (elements.length === undefined) {
            elements = [elements];
        }

        for (var i = 0; i < elements.length; i++) {
            var element = elements[i];
            var targetId = element.getAttribute("aria-controls");
            var target = document.getElementById(targetId);

            toggleClasses(element, "closing");
            setAriaRoles(element, target, "closing");

            if (typeof window.dataLayer !== "undefined") {
                window.dataLayer.push({
                    event: "accordion close",
                    category: "accordion",
                    action: "close",
                    label: targetId,
                });
            }

            QLD.animate.Run({
                element: target,
                property: "height",
                endSize: 0,
                speed: speed || 250,
                callback: function () {
                    target.style.display = "";
                    toggleClasses(target, "close");
                },
            });
        }
    };
}
