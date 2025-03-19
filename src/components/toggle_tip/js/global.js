(function () {
    "use strict";

    let toggleTip = {};
    // Variable to store the last clicked toggle tip
    let lastClickedToggleTipTrigger = null;
    // Variable to store whether the last clicked toggle tip is open
    let lastClickedToggleTipIsOpen = false;
    const toggleTipTriggerQueryClass = ".qld__toggle-tip-trigger";
    const toggleTipContentQueryClass = ".qld__toggle-tip-content";
    const toggleTipCaratQueryClass = ".qld__toggle-tip-content-carat";
    const toggleTipVisibleClass = "qld__toggle-tip-visible";
    const toggleTipHiddenClass = "qld__toggle-tip-hidden";
    const toggleTipActiveClass = "qld__toggle-tip-trigger-active";
    const marginFromSide = 8;

    toggleTip.init = function () {
        // Find all toggle tip trigger elements
        const toggleTipTriggers = document.querySelectorAll("button.qld__toggle-tip-trigger");

        if (!toggleTipTriggers.length) return;

        toggleTipTriggers.forEach(function (toggleTipTrigger) {
            const toggleTip = toggleTipTrigger.parentElement;
            const toggleTipContent = toggleTip.querySelector(toggleTipContentQueryClass);
            const carat = toggleTip.querySelector(toggleTipCaratQueryClass);
            const linkElement = toggleTipContent.querySelector("a");

            toggleTipTrigger.addEventListener("click", function (e) {
                lastClickedToggleTipTrigger = toggleTipTrigger;

                // Check and toggle the classes
                if (toggleTipContent.classList.contains(toggleTipHiddenClass)) {
                    openToggleTip(toggleTipTrigger, toggleTipContent, carat);
                } else if (toggleTipContent.classList.contains(toggleTipVisibleClass)) {
                    closeToggleTip(toggleTipTrigger, toggleTipContent, carat);
                }

                // Prevent the click event on window from bubbling up
                e.stopPropagation();
            });

            toggleTipContent.addEventListener("keydown", function (event) {
                if (event.key === "Tab") {
                    // Check if the user is trying to tab out of the content
                    if (linkElement && document.activeElement === linkElement) {
                        closeToggleTip(toggleTipTrigger, toggleTipContent, carat);
                        event.preventDefault();
                        // Move focus back to the toggle tip element
                        toggleTipTrigger.focus();
                    }
                }
            });
        });

        // Close toggle tip if the toggle content is open and the user hits the "Escape" key
        document.addEventListener("keydown", function (event) {
            if (event.key === "Escape" && lastClickedToggleTipTrigger) {
                const toggleTip = lastClickedToggleTipTrigger.parentElement;
                const toggleTipContent = toggleTip.querySelector(toggleTipContentQueryClass);
                const carat = toggleTip.querySelector(toggleTipCaratQueryClass);

                if (toggleTipContent.classList.contains(toggleTipVisibleClass)) {
                    closeToggleTip(lastClickedToggleTipTrigger, toggleTipContent, carat);
                    lastClickedToggleTipTrigger.focus();
                }
            }
        });

        // Close toggle tip if the toggle content is open and the user clicks OFF the content
        document.addEventListener("click", function (event) {
            if (lastClickedToggleTipTrigger && lastClickedToggleTipIsOpen) {
                const toggleTip = lastClickedToggleTipTrigger.parentElement;
                const toggleTipContent = toggleTip.querySelector(toggleTipContentQueryClass);

                if (!toggleTipContent.contains(event.target)) {
                    closeAllToggleTips();
                }
            }
        });
    };

    // Function to open the toggle tip
    function openToggleTip(trigger, content, carat) {
        // Ensure that in multiple instances, all other toggle tips are closed
        closeAllToggleTips();

        content.classList.remove(toggleTipHiddenClass);
        content.classList.add(toggleTipVisibleClass);
        carat.classList.remove(toggleTipHiddenClass);
        carat.classList.add(toggleTipVisibleClass);
        lastClickedToggleTipIsOpen = true;
        trigger.setAttribute("aria-expanded", "true");
        trigger.classList.add(toggleTipActiveClass);
        trigger.parentElement.setAttribute("aria-live", "polite");

        positionContentBox(trigger.parentElement, content);
    }

    // Function to close the toggle tip
    function closeToggleTip(trigger, content, carat) {
        content.classList.remove(toggleTipVisibleClass);
        content.classList.add(toggleTipHiddenClass);
        carat.classList.remove(toggleTipVisibleClass);
        carat.classList.add(toggleTipHiddenClass);
        lastClickedToggleTipIsOpen = false;
        trigger.setAttribute("aria-expanded", "false");
        trigger.classList.remove(toggleTipActiveClass);
        trigger.parentElement.removeAttribute("aria-live");
    }

    // Function to close all toggle tips found on the page
    function closeAllToggleTips() {
        const toggleTips = document.querySelectorAll(".qld__toggle-tip");

        if (!toggleTips.length) return;

        toggleTips.forEach(function (toggleTip) {
            const trigger = toggleTip.querySelector(toggleTipTriggerQueryClass);
            const content = toggleTip.querySelector(toggleTipContentQueryClass);
            const carat = toggleTip.querySelector(toggleTipCaratQueryClass);

            closeToggleTip(trigger, content, carat);
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
        const caratWidth = carat.offsetWidth;
        const marginFromToggleTip = 8 + caratWidth / 2;
        const direction = getAlignmentDirection(content);

        positionCarat(toggleTipDimensions, carat, direction);

        if (direction === "top") {
            content.style.left = `${toggleTipDimensions.width / 2 - content.offsetWidth / 2}px`;
            content.style.top = `${-content.offsetHeight - marginFromToggleTip}px`;

            if (doesToggleTipOverlap(content)) {
                checkAlternativesForTopPosition(toggleTipDimensions, content, carat, marginFromToggleTip);
            }
        } else if (direction === "bottom") {
            content.style.left = `${toggleTipDimensions.width / 2 - content.offsetWidth / 2}px`;
            content.style.top = `${toggleTipDimensions.height + marginFromToggleTip}px`;

            if (doesToggleTipOverlap(content)) {
                checkAlternativesForBottomPosition(toggleTipDimensions, content, carat, marginFromToggleTip);
            }
        } else if (direction === "left") {
            content.style.left = `${-content.offsetWidth - marginFromToggleTip}px`;
            content.style.top = `${toggleTipDimensions.height / 2 - content.offsetHeight / 2}px`;

            if (doesToggleTipOverlapSides(content)) {
                content.style.left = `${toggleTipDimensions.width + marginFromToggleTip}px`;
                positionCarat(toggleTipDimensions, carat, "right");
            }
        } else if (direction === "right") {
            content.style.left = `${toggleTipDimensions.width + marginFromToggleTip}px`;
            content.style.top = `${toggleTipDimensions.height / 2 - content.offsetHeight / 2}px`;

            if (doesToggleTipOverlapSides(content)) {
                content.style.left = `${-content.offsetWidth - marginFromToggleTip}px`;
                positionCarat(toggleTipDimensions, carat, "left");
            }
        }
    }

    // Check if the content box is overlapping the ALL sides of the screen
    function doesToggleTipOverlap(content) {
        const contentDimensions = content.getBoundingClientRect();
        return !(
            contentDimensions.top >= marginFromSide &&
            contentDimensions.left >= 0 &&
            contentDimensions.bottom + marginFromSide <= document.documentElement.clientHeight &&
            contentDimensions.right <= document.documentElement.clientWidth
        );
    }

    // Check if the content box is overlapping the left and right sides only
    function doesToggleTipOverlapSides(content) {
        const contentDimensions = content.getBoundingClientRect();
        return !(contentDimensions.left >= 0 && contentDimensions.right <= document.documentElement.clientWidth);
    }

    // If the toggle tip is positioned top, we want to try sliding or inverting the content box
    function checkAlternativesForTopPosition(toggleTipDimensions, content, carat, marginFromToggleTip) {
        const contentDimensions = content.getBoundingClientRect();
        const screenCenter = document.documentElement.clientWidth / 2;
        const closerToLeft = contentDimensions.left + contentDimensions.width / 2 < screenCenter;
        const rightGap = document.documentElement.clientWidth - toggleTipDimensions.right;

        // Compare the element's position to the center
        if (closerToLeft) {
            const leftScreenPosition = marginFromSide - toggleTipDimensions.left;
            content.style.left = `${leftScreenPosition}px`;
        } else {
            const rightScreenPosition = toggleTipDimensions.width - contentDimensions.width + rightGap - marginFromSide;
            content.style.left = `${rightScreenPosition}px`;
        }

        // If sliding the element horizontally doesn't work, we want to try the bottom now
        if (doesToggleTipOverlap(content)) {
            content.style.top = `${toggleTipDimensions.height + marginFromToggleTip}px`;
            positionCarat(toggleTipDimensions, carat, "bottom");

            // If the space between the sides and the toggle tip is too great, try the content below  || right side needs margin....??
            if ((closerToLeft && toggleTipDimensions.right > contentDimensions.width + marginFromSide) || (!closerToLeft && rightGap + toggleTipDimensions.width + marginFromSide > contentDimensions.width)) {
                content.style.left = `${toggleTipDimensions.width / 2 - contentDimensions.width / 2}px`;
            }
        }
    }

    // If the toggle tip is positioned bottom, we want to try sliding or inverting the content box
    function checkAlternativesForBottomPosition(toggleTipDimensions, content, carat, marginFromToggleTip) {
        const contentDimensions = content.getBoundingClientRect();
        const screenCenter = document.documentElement.clientWidth / 2;
        const closerToLeft = contentDimensions.left + contentDimensions.width / 2 < screenCenter;
        const rightGap = document.documentElement.clientWidth - toggleTipDimensions.right;

        // Compare the element's position to the center
        if (closerToLeft) {
            const leftScreenPosition = marginFromSide - toggleTipDimensions.left;
            content.style.left = `${leftScreenPosition}px`;
        } else {
            const rightScreenPosition = toggleTipDimensions.width - contentDimensions.width + rightGap - marginFromSide;
            content.style.left = `${rightScreenPosition}px`;
        }

        // If sliding the element horizontally doesn't work, we want to try the bottom now
        if (doesToggleTipOverlap(content)) {
            content.style.top = `${-content.offsetHeight - marginFromToggleTip}px`;
            positionCarat(toggleTipDimensions, carat, "top");

            // If the space between the sides and the toggle tip is too great, try the content below  || right side needs margin....??
            if ((closerToLeft && toggleTipDimensions.right > contentDimensions.width + marginFromSide) || (!closerToLeft && rightGap + toggleTipDimensions.width + marginFromSide > contentDimensions.width)) {
                content.style.left = `${toggleTipDimensions.width / 2 - contentDimensions.width / 2}px`;
            }
        }
    }

    // Function to position the carat based off the direction provided
    function positionCarat(toggleTipDimensions, carat, direction) {
        const caratWidth = carat.offsetWidth;
        const caratHeight = carat.offsetHeight;
        let caratTopPosition = 0;
        let caratLeftPosition = 0;

        if (direction === "top") {
            caratLeftPosition = toggleTipDimensions.width / 2 - caratWidth / 2;
            caratTopPosition = -(caratWidth / 2 + marginFromSide);
            carat.style.transform = "rotate(180deg)";
        } else if (direction === "bottom") {
            caratLeftPosition = toggleTipDimensions.width / 2 - caratWidth / 2;
            caratTopPosition = toggleTipDimensions.height - caratWidth / 2 + marginFromSide;
            carat.style.transform = "rotate(0deg)";
        } else if (direction === "left") {
            caratLeftPosition = -caratWidth / 2 - marginFromSide;
            caratTopPosition = toggleTipDimensions.height / 2 - caratHeight / 2;
            carat.style.transform = "rotate(90deg)";
        } else if (direction === "right") {
            caratLeftPosition = toggleTipDimensions.width - caratWidth / 2 + marginFromSide;
            caratTopPosition = toggleTipDimensions.height / 2 - caratHeight / 2;
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
