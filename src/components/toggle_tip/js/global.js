(function () {
    "use strict";

    let toggleTip = {};
    // Variable to store the last clicked toggle tip
    let lastTriggeredToggleTip = null;
    let lastTriggeredToggleTipTrigger = null;
    // Variable to store whether the last clicked toggle tip is open
    let lastClickedToggleTipIsOpen = false;
    const toggleTipTriggerQueryClass = ".qld__toggle-tip-trigger";
    const toggleTipContentQueryClass = ".qld__toggle-tip-content";
    const toggleTipCaratQueryClass = ".qld__toggle-tip-content-carat";
    const toggleTipVisibleClass = "qld__toggle-tip-visible";
    const toggleTipHiddenClass = "qld__toggle-tip-hidden";
    const toggleTipActiveClass = "qld__toggle-tip-trigger-active";
    const marginFromSide = 16;
    const marginFromTrigger = 8;

    toggleTip.init = function () {
        // Find all toggle tip trigger elements
        const toggleTipTriggers = document.querySelectorAll(toggleTipTriggerQueryClass);

        if (!toggleTipTriggers.length) return;

        toggleTipTriggers.forEach(function (toggleTipTrigger) {
            const toggleTipId = toggleTipTrigger.getAttribute("data-target");

            if (!toggleTipId) return;

            const toggleTip = document.getElementById(toggleTipId);
            const content = toggleTip.querySelector(toggleTipContentQueryClass);
            const linkElement = content.querySelector("a");

            toggleTipTrigger.addEventListener("click", function (e) {
                lastTriggeredToggleTip = toggleTip;
                lastTriggeredToggleTipTrigger = toggleTipTrigger;

                // Check and toggle the classes
                if (content.classList.contains(toggleTipHiddenClass)) {
                    openToggleTip(toggleTip, toggleTipTrigger);
                } else if (content.classList.contains(toggleTipVisibleClass)) {
                    closeToggleTip(toggleTip, toggleTipTrigger);
                }

                // Prevent the click event on window from bubbling up
                e.stopPropagation();
            });

            toggleTipTrigger.addEventListener("keydown", function (e) {
                // Check if the user is trying to tab in or out of the content
                if (e.key === "Tab" && lastClickedToggleTipIsOpen) {
                    e.preventDefault();

                    if (linkElement) {
                        linkElement.focus();
                    } else {
                        closeToggleTip(toggleTip, toggleTipTrigger);
                    }
                }

                if (e.keyCode === 32 || e.key === "Enter") {
                    e.preventDefault();

                    lastTriggeredToggleTip = toggleTip;
                    lastTriggeredToggleTipTrigger = toggleTipTrigger;

                    // Check and toggle the classes
                    if (content.classList.contains(toggleTipHiddenClass)) {
                        openToggleTip(toggleTip, toggleTipTrigger);
                    } else if (content.classList.contains(toggleTipVisibleClass)) {
                        closeToggleTip(toggleTip, toggleTipTrigger);
                    }

                    // Prevent the click event on window from bubbling up
                    e.stopPropagation();
                }
            });

            if (linkElement) {
                linkElement.addEventListener("keydown", function (e) {
                    if (e.key === "Tab") {
                        e.preventDefault();

                        // Close toggle tip and move focus back to the toggle tip element
                        closeToggleTip(toggleTip, toggleTipTrigger);
                        toggleTipTrigger.focus();
                    }

                    if (e.key === "Escape") {
                        closeToggleTip(toggleTip, toggleTipTrigger);
                        toggleTipTrigger.focus();
                    }
                });
            }
        });

        // Close toggle tip if the toggle content is open and the user hits the "Escape" key
        document.addEventListener("keydown", function (e) {
            if (e.key === "Escape" && lastTriggeredToggleTip) {
                const content = lastTriggeredToggleTip.querySelector(toggleTipContentQueryClass);
                const trigger = lastTriggeredToggleTip.querySelector(toggleTipTriggerQueryClass);

                if (content.classList.contains(toggleTipVisibleClass)) {
                    closeToggleTip(lastTriggeredToggleTip, trigger);
                    lastTriggeredToggleTip.focus();
                }
            }
        });

        // Close toggle tip if the toggle content is open and the user clicks OFF the content
        document.addEventListener("click", function (e) {
            if (lastTriggeredToggleTip && lastClickedToggleTipIsOpen) {
                const toggleTipContent = lastTriggeredToggleTip.querySelector(toggleTipContentQueryClass);
                if (!toggleTipContent.contains(e.target)) {
                    closeAllToggleTips();
                }
            }
        });
    };

    // Function to open the toggle tip
    function openToggleTip(toggleTip, trigger) {
        const content = toggleTip.querySelector(toggleTipContentQueryClass);
        const carat = toggleTip.querySelector(toggleTipCaratQueryClass);

        // Ensure that in multiple instances, all other toggle tips are closed
        closeAllToggleTips();

        content.classList.remove(toggleTipHiddenClass);
        content.classList.add(toggleTipVisibleClass);
        trigger.setAttribute("aria-expanded", "true");
        toggleTip.setAttribute("aria-live", "polite");
        carat.classList.remove(toggleTipHiddenClass);
        carat.classList.add(toggleTipVisibleClass);
        lastClickedToggleTipIsOpen = true;
        trigger.classList.add(toggleTipActiveClass);

        positionContentBox(toggleTip, content);
    }

    // Function to close the toggle tip
    function closeToggleTip(toggleTip, trigger) {
        const content = toggleTip.querySelector(toggleTipContentQueryClass);
        const carat = toggleTip.querySelector(toggleTipCaratQueryClass);

        content.classList.remove(toggleTipVisibleClass);
        content.classList.add(toggleTipHiddenClass);
        trigger.setAttribute("aria-expanded", "false");
        toggleTip.removeAttribute("aria-live");
        carat.classList.remove(toggleTipVisibleClass);
        carat.classList.add(toggleTipHiddenClass);
        lastClickedToggleTipIsOpen = false;
        trigger.classList.remove(toggleTipActiveClass);
    }

    // Function to close all toggle tips found on the page
    function closeAllToggleTips() {
        const toggleTipTriggers = document.querySelectorAll("span.qld__toggle-tip-trigger");

        if (!toggleTipTriggers.length) return;

        toggleTipTriggers.forEach(function (toggleTipTrigger) {
            const toggleTipId = toggleTipTrigger.getAttribute("data-target");

            if (!toggleTipId) return;

            const toggleTip = document.getElementById(toggleTipId);
            closeToggleTip(toggleTip, toggleTipTrigger);
        });
    }

    // Function to get the direction from the metadata provided via class
    function getAlignmentDirection(content) {
        const classPrefix = "qld__toggle-tip-aligned-";
        const direction = Array.from(content.classList)
            .find((className) => className.startsWith(classPrefix))
            .replace(classPrefix, "");

        return direction;
    }

    // Function to position the content box dynamically based off the trigger
    function positionContentBox(toggleTip, content) {
        const toggleTipDimensions = toggleTip.getBoundingClientRect();
        const carat = toggleTip.querySelector(toggleTipCaratQueryClass);
        const triggerDimensions = lastTriggeredToggleTipTrigger.getBoundingClientRect();
        const triggerFromTop = triggerDimensions.top + window.scrollY;
        const contentFromTop = toggleTipDimensions.top + window.scrollY;
        const contentFromTriggerY = triggerFromTop - contentFromTop;
        const triggerFromLeft = triggerDimensions.left + window.scrollX;
        const contentFromLeft = toggleTipDimensions.left + window.scrollX;
        const contentFromTriggerX = triggerFromLeft - contentFromLeft;
        const contentMarginFromTrigger = 8 + carat.offsetWidth / 2;
        const direction = getAlignmentDirection(content);

        positionCarat(toggleTipDimensions, carat, direction);

        if (direction === "top") {
            content.style.left = `${contentFromTriggerX - content.offsetWidth / 2 + triggerDimensions.width / 2}px`;
            content.style.top = `${contentFromTriggerY - content.offsetHeight - contentMarginFromTrigger}px`;

            if (doesToggleTipOverlap(content)) {
                checkAlternativesForTopPosition(toggleTipDimensions, content, carat, contentMarginFromTrigger);
            }
        } else if (direction === "bottom") {
            content.style.left = `${contentFromTriggerX - content.offsetWidth / 2 + triggerDimensions.width / 2}px`;
            content.style.top = `${contentFromTriggerY + triggerDimensions.height + contentMarginFromTrigger}px`;

            if (doesToggleTipOverlap(content)) {
                checkAlternativesForBottomPosition(toggleTipDimensions, content, carat, contentMarginFromTrigger);
            }
        } else if (direction === "left") {
            content.style.left = `${contentFromTriggerX - content.offsetWidth - contentMarginFromTrigger}px`;
            content.style.top = `${contentFromTriggerY - content.offsetHeight / 2 + triggerDimensions.height / 2}px`;

            if (doesToggleTipOverlap(content)) {
                checkAlternativesForLeftPosition(toggleTipDimensions, content, carat, contentMarginFromTrigger);
            }
        } else if (direction === "right") {
            content.style.left = `${contentFromTriggerX + triggerDimensions.width + contentMarginFromTrigger}px`;
            content.style.top = `${contentFromTriggerY - content.offsetHeight / 2 + triggerDimensions.height / 2}px`;

            if (doesToggleTipOverlap(content)) {
                checkAlternativesForRightPosition(toggleTipDimensions, content, carat, contentMarginFromTrigger);
            }
        }
    }

    // Check if the content box is overlapping the ALL sides of the screen
    function doesToggleTipOverlap(content) {
        const contentDimensions = content.getBoundingClientRect();

        return !(
            contentDimensions.top >= marginFromSide &&
            contentDimensions.left >= marginFromSide &&
            contentDimensions.bottom + marginFromSide <= document.documentElement.clientHeight &&
            contentDimensions.right + marginFromSide <= document.documentElement.clientWidth
        );
    }

    // Check if the content box is overlapping the ALL sides of the screen
    function doesToggleTipOverlapTopBot(content) {
        const contentDimensions = content.getBoundingClientRect();

        return !(contentDimensions.top >= marginFromSide && contentDimensions.bottom + marginFromSide <= document.documentElement.clientHeight);
    }

    // Check if the content box is overlapping on the left or right sides
    function doesToggleTipOverlapSides(content) {
        const contentDimensions = content.getBoundingClientRect();

        return !(contentDimensions.left >= marginFromSide && contentDimensions.right + marginFromSide <= document.documentElement.clientWidth);
    }

    // If the toggle tip is positioned top, we want to try sliding or inverting the content box
    function checkAlternativesForTopPosition(toggleTipDimensions, content, carat, contentMarginFromTrigger) {
        const triggerDimensions = lastTriggeredToggleTipTrigger.getBoundingClientRect();
        const contentDimensions = content.getBoundingClientRect();
        const triggerFromTop = triggerDimensions.top + window.scrollY;
        const contentFromTop = toggleTipDimensions.top + window.scrollY;
        const contentFromTriggerY = triggerFromTop - contentFromTop;
        const triggerFromLeft = triggerDimensions.left + window.scrollX;
        const contentFromLeft = toggleTipDimensions.left + window.scrollX;
        const contentFromTriggerX = triggerFromLeft - contentFromLeft;
        const screenCenter = document.documentElement.clientWidth / 2;
        const closerToLeft = contentDimensions.left + contentDimensions.width / 2 < screenCenter;

        if (doesToggleTipOverlapTopBot(content)) {
            content.style.top = `${contentFromTriggerY + triggerDimensions.height + contentMarginFromTrigger}px`;
            positionCarat(toggleTipDimensions, carat, "bottom");
        }

        if (doesToggleTipOverlapSides(content)) {
            // Compare the element's position to the center
            if (closerToLeft) {
                content.style.left = `${marginFromSide - toggleTipDimensions.left}px`;
            } else {
                content.style.left = `${contentFromTriggerX - triggerDimensions.left + document.documentElement.clientWidth - contentDimensions.width - marginFromSide}px`;
            }
        }
    }

    // If the toggle tip is positioned bottom, we want to try sliding or inverting the content box
    function checkAlternativesForBottomPosition(toggleTipDimensions, content, carat, contentMarginFromTrigger) {
        const triggerDimensions = lastTriggeredToggleTipTrigger.getBoundingClientRect();
        const contentDimensions = content.getBoundingClientRect();
        const triggerFromTop = triggerDimensions.top + window.scrollY;
        const contentFromTop = toggleTipDimensions.top + window.scrollY;
        const contentFromTriggerY = triggerFromTop - contentFromTop;
        const triggerFromLeft = triggerDimensions.left + window.scrollX;
        const contentFromLeft = toggleTipDimensions.left + window.scrollX;
        const contentFromTriggerX = triggerFromLeft - contentFromLeft;
        const screenCenter = document.documentElement.clientWidth / 2;
        const closerToLeft = contentDimensions.left + contentDimensions.width / 2 < screenCenter;

        if (doesToggleTipOverlapTopBot(content)) {
            content.style.top = `${contentFromTriggerY - content.offsetHeight - contentMarginFromTrigger}px`;
            positionCarat(toggleTipDimensions, carat, "top");
        }

        if (doesToggleTipOverlapSides(content)) {
            // Compare the element's position to the center
            if (closerToLeft) {
                content.style.left = `${marginFromSide - toggleTipDimensions.left}px`;
            } else {
                content.style.left = `${contentFromTriggerX - triggerDimensions.left + document.documentElement.clientWidth - contentDimensions.width - marginFromSide}px`;
            }
        }
    }

    // If the toggle tip is positioned left, we want to try sliding or inverting the content box
    function checkAlternativesForLeftPosition(toggleTipDimensions, content, carat, contentMarginFromTrigger) {
        const triggerDimensions = lastTriggeredToggleTipTrigger.getBoundingClientRect();
        const contentDimensions = content.getBoundingClientRect();
        const triggerFromTop = triggerDimensions.top + window.scrollY;
        const contentFromTop = toggleTipDimensions.top + window.scrollY;
        const contentFromTriggerY = triggerFromTop - contentFromTop;
        const triggerFromLeft = triggerDimensions.left + window.scrollX;
        const contentFromLeft = toggleTipDimensions.left + window.scrollX;
        const contentFromTriggerX = triggerFromLeft - contentFromLeft;
        const screenCenter = document.documentElement.clientHeight / 2;
        const closerToTop = contentDimensions.top + contentDimensions.height / 2 < screenCenter;

        if (doesToggleTipOverlapSides(content)) {
            content.style.left = `${contentFromTriggerX + triggerDimensions.width + contentMarginFromTrigger}px`;
            positionCarat(toggleTipDimensions, carat, "right");
        }

        if (doesToggleTipOverlapTopBot(content)) {
            // Compare the element's position to the center
            if (closerToTop) {
                content.style.top = `${marginFromSide - toggleTipDimensions.top}px`;
            } else {
                content.style.top = `${contentFromTriggerY - triggerDimensions.top + document.documentElement.clientHeight - contentDimensions.height - marginFromSide}px`;
            }
        }

        // For the specific case on mobile where the toggle tip cannot fit on BOTH sides
        if (doesToggleTipOverlapSides(content)) {
            content.style.left = `${contentFromTriggerX - content.offsetWidth / 2 + triggerDimensions.width / 2}px`;
            content.style.top = `${contentFromTriggerY - content.offsetHeight - contentMarginFromTrigger}px`;
            positionCarat(toggleTipDimensions, carat, "top");
        }
    }

    // If the toggle tip is positioned right, we want to try sliding or inverting the content box
    function checkAlternativesForRightPosition(toggleTipDimensions, content, carat, contentMarginFromTrigger) {
        const triggerDimensions = lastTriggeredToggleTipTrigger.getBoundingClientRect();
        const contentDimensions = content.getBoundingClientRect();
        const triggerFromTop = triggerDimensions.top + window.scrollY;
        const contentFromTop = toggleTipDimensions.top + window.scrollY;
        const contentFromTriggerY = triggerFromTop - contentFromTop;
        const triggerFromLeft = triggerDimensions.left + window.scrollX;
        const contentFromLeft = toggleTipDimensions.left + window.scrollX;
        const contentFromTriggerX = triggerFromLeft - contentFromLeft;
        const screenCenter = document.documentElement.clientHeight / 2;
        const closerToTop = contentDimensions.top + contentDimensions.height / 2 < screenCenter;

        if (doesToggleTipOverlapSides(content)) {
            content.style.left = `${contentFromTriggerX - content.offsetWidth - contentMarginFromTrigger}px`;
            positionCarat(toggleTipDimensions, carat, "left");
        }

        if (doesToggleTipOverlapTopBot(content)) {
            // Compare the element's position to the center
            if (closerToTop) {
                content.style.top = `${marginFromSide - toggleTipDimensions.top}px`;
            } else {
                content.style.top = `${contentFromTriggerY - triggerDimensions.top + document.documentElement.clientHeight - contentDimensions.height - marginFromSide}px`;
            }
        }

        // For the specific case on mobile where the toggle tip cannot fit on BOTH sides
        if (doesToggleTipOverlapSides(content)) {
            content.style.left = `${contentFromTriggerX - content.offsetWidth / 2 + triggerDimensions.width / 2}px`;
            content.style.top = `${contentFromTriggerY - content.offsetHeight - contentMarginFromTrigger}px`;
            positionCarat(toggleTipDimensions, carat, "top");
        }
    }

    // Function to position the carat based off the direction provided
    function positionCarat(toggleTipDimensions, carat, direction) {
        const triggerDimensions = lastTriggeredToggleTipTrigger.getBoundingClientRect();
        const caratWidth = carat.offsetWidth / 2;
        const caratHeight = carat.offsetHeight / 2;
        const triggerFromTop = triggerDimensions.top + window.scrollY;
        const caratFromTop = toggleTipDimensions.top + window.scrollY;
        const caratFromTriggerY = triggerFromTop - caratFromTop;
        const triggerFromLeft = triggerDimensions.left + window.scrollX;
        const caratFromLeft = toggleTipDimensions.left + window.scrollX;
        const caratFromTriggerX = triggerFromLeft - caratFromLeft;
        let caratTopPosition = 0;
        let caratLeftPosition = 0;

        if (direction === "top") {
            caratLeftPosition = caratFromTriggerX + triggerDimensions.width / 2 - caratWidth;
            caratTopPosition = caratFromTriggerY - caratHeight - marginFromTrigger;
            carat.style.transform = "rotate(180deg)";
        } else if (direction === "bottom") {
            caratLeftPosition = caratFromTriggerX + triggerDimensions.width / 2 - caratWidth;
            caratTopPosition = caratFromTriggerY - caratHeight + triggerDimensions.height + marginFromTrigger;
            carat.style.transform = "rotate(0deg)";
        } else if (direction === "left") {
            caratLeftPosition = caratFromTriggerX - caratWidth - marginFromTrigger;
            caratTopPosition = caratFromTriggerY + triggerDimensions.height / 2 - caratHeight;
            carat.style.transform = "rotate(90deg)";
        } else if (direction === "right") {
            caratLeftPosition = caratFromTriggerX + triggerDimensions.width - caratWidth + marginFromTrigger;
            caratTopPosition = caratFromTriggerY + triggerDimensions.height / 2 - caratHeight;
            carat.style.transform = "rotate(270deg)";
        }

        // Set positioning style of the content box
        carat.style.left = `${caratLeftPosition}px`;
        carat.style.top = `${caratTopPosition}px`;
    }

    QLD.toggleTip = toggleTip;
})();

window.addEventListener("DOMContentLoaded", function () {
    QLD.toggleTip.init();
});
