(function () {
    "use strict";

    let toggleTip = {};
    // Variable to store the last clicked toggle tip
    let lastClickedToggleTipTrigger = null;
    // Variable to store whether the last clicked toggle tip is open
    let lastClickedToggleTipIsOpen = false;
    const toggleTipVisibleClass = "qld__toggle-tip-visible";
    const toggleTipHiddenClass = "qld__toggle-tip-hidden";
    const toggleTipActiveClass = "qld__toggle-tip-trigger-active";
    const toggleTipDefaultPosition = "top";

    toggleTip.init = function () {
        // Find all toggle tip trigger elements
        const toggleTipTriggers = document.querySelectorAll("button.qld__toggle-tip-trigger");

        if (!toggleTipTriggers.length) return;

        toggleTipTriggers.forEach(function (toggleTipTrigger) {
            // Get the next sibling element with class "toggle-tip-content"
            const toggleTipContent = toggleTipTrigger.nextElementSibling;
            lastClickedToggleTipTrigger = toggleTipTrigger;
            const linkElement = toggleTipContent.querySelector("a");

            toggleTipTrigger.addEventListener("click", function (e) {
                // Check and toggle the classes
                if (toggleTipContent.classList.contains(toggleTipHiddenClass)) {
                    openToggleTip(toggleTipTrigger, toggleTipContent);
                } else if (toggleTipContent.classList.contains(toggleTipVisibleClass)) {
                    closeToggleTip(toggleTipTrigger, toggleTipContent);
                }

                // Prevent the click event on window from bubbling up
                e.stopPropagation();
            });

            toggleTipContent.addEventListener("keydown", function (event) {
                if (event.key === "Tab") {
                    // Check if the user is trying to tab out of the content
                    if (linkElement && document.activeElement === linkElement) {
                        closeToggleTip(toggleTipTrigger, toggleTipContent);
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
                const toggleTipContent = lastClickedToggleTipTrigger.nextElementSibling;

                if (toggleTipContent.classList.contains(toggleTipVisibleClass)) {
                    closeToggleTip(lastClickedToggleTipTrigger, toggleTipContent);
                    lastClickedToggleTipTrigger.focus();
                }
            }
        });

        // Close toggle tip if the toggle content is open and the user clicks OFF the content
        document.addEventListener("click", function (event) {
            if (lastClickedToggleTipTrigger && lastClickedToggleTipIsOpen) {
                const toggleTipContent = lastClickedToggleTipTrigger.nextElementSibling;

                if (!toggleTipContent.contains(event.target)) {
                    closeToggleTip(lastClickedToggleTipTrigger, toggleTipContent);
                }
            }
        });
    };

    // Function to open the toggle tip
    function openToggleTip(trigger, content) {
        content.classList.remove(toggleTipHiddenClass);
        content.classList.add(toggleTipVisibleClass);
        lastClickedToggleTipIsOpen = true;
        trigger.setAttribute("aria-expanded", "true");
        trigger.classList.add(toggleTipActiveClass);
        trigger.parentElement.setAttribute("aria-live", "assertive");

        positionContentBox(trigger.parentElement, content, toggleTipDefaultPosition);
    }

    // Function to close the toggle tip
    function closeToggleTip(trigger, content) {
        content.classList.remove(toggleTipVisibleClass);
        content.classList.add(toggleTipHiddenClass);
        lastClickedToggleTipIsOpen = false;
        trigger.setAttribute("aria-expanded", "false");
        trigger.classList.remove(toggleTipActiveClass);
        trigger.parentElement.removeAttribute("aria-live");
    }

    function positionContentBox(toggleTip, content, direction, recursive = true) {
        const toggleTipDimensions = toggleTip.getBoundingClientRect();
        const contentWidth = content.offsetWidth;
        const contentHeight = content.offsetHeight;
        const carat = content.querySelector(".qld__toggle-tip-content-carat");
        const caratWidth = carat.offsetWidth;
        const caratHeight = carat.offsetHeight;
        const marginFromToggleTip = 8 + caratWidth / 2;
        let contentLeftPosition = 0;
        let contentTopPosition = 0;
        let caratLeftPosition = 0;
        let caratTopPosition = 0;

        if (direction === toggleTipDefaultPosition) {
            // MOVING CONTENT BOX
            contentLeftPosition = toggleTipDimensions.width / 2 - contentWidth / 2;
            contentTopPosition = -contentHeight - marginFromToggleTip;

            // MOVING CARAT
            caratLeftPosition = contentWidth / 2 - caratWidth / 2;
            caratTopPosition = contentHeight;
            carat.style.transform = "rotate(180deg)";
        } else if (direction === "bottom") {
            // MOVING CONTENT BOX
            contentLeftPosition = toggleTipDimensions.width / 2 - contentWidth / 2;
            contentTopPosition = toggleTipDimensions.height + marginFromToggleTip;

            // MOVING CARAT
            caratLeftPosition = contentWidth / 2 - caratWidth / 2;
            caratTopPosition = -caratWidth;
            carat.style.transform = "rotate(0deg)";
        } else if (direction === "left") {
            // MOVING CONTENT BOX
            contentLeftPosition = -contentWidth - marginFromToggleTip;
            contentTopPosition = toggleTipDimensions.height / 2 - contentHeight / 2;

            // MOVING CARAT
            caratLeftPosition = contentWidth;
            caratTopPosition = contentHeight / 2 - caratHeight / 2;
            carat.style.transform = "rotate(90deg)";
        } else if (direction === "right") {
            // MOVING CONTENT BOX
            contentLeftPosition = toggleTipDimensions.width + marginFromToggleTip;
            contentTopPosition = toggleTipDimensions.height / 2 - contentHeight / 2;

            // MOVING CARAT
            caratLeftPosition = -caratWidth;
            caratTopPosition = contentHeight / 2 - caratHeight / 2;
            carat.style.transform = "rotate(270deg)";
        }

        // Set positioning style of the content box
        content.style.left = `${contentLeftPosition}px`;
        content.style.top = `${contentTopPosition}px`;

        // Set positioning style of the content box
        carat.style.left = `${caratLeftPosition}px`;
        carat.style.top = `${caratTopPosition}px`;

        if (doesToggleTipOverlap(content) && recursive) {
            switch (direction) {
                case toggleTipDefaultPosition:
                    direction = "bottom";
                    break;
                case "bottom":
                    direction = "left";
                    break;
                case "left":
                    direction = "right";
                    break;
                case "right":
                    direction = "";
                    break;
            }

            if (!direction) {
                positionContentBox(toggleTip, content, toggleTipDefaultPosition, false);
            } else {
                positionContentBox(toggleTip, content, direction);
            }
        }
    }

    function doesToggleTipOverlap(content) {
        const contentDimensions = content.getBoundingClientRect();

        // Check if the element is completely within the viewport's visible area
        return !(contentDimensions.top >= 0 && contentDimensions.left >= 0 && contentDimensions.bottom <= document.documentElement.clientHeight && contentDimensions.right <= document.documentElement.clientWidth);
    }

    QLD.toggleTip = toggleTip;
})();

window.addEventListener("DOMContentLoaded", function () {
    QLD.toggleTip.init();
});
