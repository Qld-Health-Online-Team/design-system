(function () {
    "use strict";

    let toggleTip = {};
    // Variable to store the last clicked toggle tip
    let lastTriggeredToggleTip = null;
    const componentName = "qld__toggle-tip";
    const toggleTipTriggerQueryClass = "." + componentName + "-trigger";
    const toggleTipContentQueryClass = "." + componentName + "-content";
    const toggleTipVisibleClass = componentName + "-visible";
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

            // Function to check if the toggle tip is open
            function isToggleTipOpen() {
                return content.classList.contains(toggleTipVisibleClass);
            }

            // Function to open the toggle tip
            function openToggleTip() {
                lastTriggeredToggleTip = toggleTip;
                QLD.toggleToolTips.openToggleToolTip(componentName, toggleTip, toggleTipTrigger, marginFromTrigger);
            }

            // Function to open the toggle tip
            function closeToggleTip() {
                QLD.toggleToolTips.closeToggleToolTip(componentName, toggleTip, toggleTipTrigger);
            }

            toggleTipTrigger.addEventListener("click", function (e) {
                const previousToggleTip = lastTriggeredToggleTip;
                closeAllToggleTips();

                // Check and toggle the classes
                if (isToggleTipOpen() || toggleTip === previousToggleTip) {
                    closeToggleTip();
                } else {
                    openToggleTip();
                }

                // Prevent the click event on window from bubbling up
                e.stopPropagation();
            });

            toggleTipTrigger.addEventListener("keydown", function (e) {
                // Check if the user is trying to tab in or out of the content
                if (e.key === "Tab" && isToggleTipOpen()) {
                    e.preventDefault();

                    if (linkElement) {
                        linkElement.focus();
                    } else {
                        closeToggleTip(toggleTip, toggleTipTrigger);
                    }

                    // Prevent the click event on window from bubbling up
                    e.stopPropagation();
                }

                if (e.keyCode === 32 || e.key === "Enter") {
                    e.preventDefault();

                    // Check and toggle the classes
                    if (isToggleTipOpen()) {
                        closeToggleTip();
                    } else {
                        openToggleTip();
                    }

                    // Prevent the click event on window from bubbling up
                    e.stopPropagation();
                }
            });

            if (linkElement) {
                linkElement.addEventListener("keydown", function (e) {
                    if (e.key === "Tab" || e.key === "Escape") {
                        e.preventDefault();

                        // Close toggle tip and move focus back to the toggle tip element
                        closeToggleTip();
                        toggleTipTrigger.focus();
                    }
                });
            }
        });

        // Close toggle tip if the toggle content is open and the user hits the "Escape" key
        document.addEventListener("keydown", function (e) {
            if (e.key === "Escape" && lastTriggeredToggleTip) {
                const content = lastTriggeredToggleTip.querySelector(toggleTipContentQueryClass);

                if (content.classList.contains(toggleTipVisibleClass)) {
                    closeAllToggleTips();
                    lastTriggeredToggleTip.focus();
                }
            }
        });

        // Close toggle tip if the toggle content is open and the user clicks OFF the content
        document.addEventListener("click", function (e) {
            if (lastTriggeredToggleTip) {
                const content = lastTriggeredToggleTip.querySelector(toggleTipContentQueryClass);

                if (!content.contains(e.target)) {
                    closeAllToggleTips();
                }
            }
        });
    };

    // Function to close all toggle tips found on the page
    function closeAllToggleTips() {
        const toggleTipTriggers = document.querySelectorAll(toggleTipTriggerQueryClass);

        if (!toggleTipTriggers.length) return;

        lastTriggeredToggleTip = null;
        QLD.toggleToolTips.closeAllToggleToolTips(componentName, toggleTipTriggers);
    }

    QLD.toggleTip = toggleTip;
})();

window.addEventListener("DOMContentLoaded", function () {
    QLD.toggleTip.init();
});
