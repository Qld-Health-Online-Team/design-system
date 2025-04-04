(function () {
    "use strict";

    let toolTip = {};
    // Variable to store the last clicked tool tip trigger
    let lastTriggeredToolTipTrigger = null;
    const componentName = "qld__tool-tip";
    const toolTipTriggerQueryClass = ".qld__tool-tip-trigger";
    const marginFromTrigger = 4;
    const contentLeaveDelay = 200; // Delay before hiding the content on mouse leave

    toolTip.init = function () {
        // Find all tool tip trigger elements
        const toolTipTriggers = document.querySelectorAll(toolTipTriggerQueryClass);

        if (!toolTipTriggers.length) return;

        toolTipTriggers.forEach(function (toolTipTrigger) {
            let closeTimeout = null;
            let toolTipIsOpen = false;
            const toolTipId = toolTipTrigger.getAttribute("data-target");

            if (!toolTipId) return;

            const toolTip = document.getElementById(toolTipId);
            const content = toolTip.querySelector(`.${componentName}-content`);

            // Function to open the tool tip
            function openToolTip() {
                lastTriggeredToolTipTrigger = toolTipTrigger;
                QLD.toggleToolTips.openToggleToolTip(componentName, toolTip, toolTipTrigger, marginFromTrigger);
                toolTipIsOpen = true;
            }

            // Function to open the tool tip
            function closeToolTip() {
                QLD.toggleToolTips.closeToggleToolTip(componentName, toolTip, toolTipTrigger);
                toolTipIsOpen = false;
            }

            toolTipTrigger.addEventListener("pointerdown", function (e) {
                // Check and toggle the classes
                if (toolTipIsOpen) {
                    closeToolTip();
                } else {
                    openToolTip();
                }
                // Prevent window from bubbling up
                e.stopPropagation();
            });

            toolTipTrigger.addEventListener("mouseenter", function (e) {
                closeAllToolTips(componentName);
                openToolTip();

                e.stopPropagation();
            });

            toolTipTrigger.addEventListener("focus", function () {
                openToolTip();
            });

            toolTipTrigger.addEventListener("mouseleave", function () {
                // Set a delay before closing the triggered element
                closeTimeout = setTimeout(() => {
                    closeToolTip();
                }, contentLeaveDelay);
            });

            toolTipTrigger.addEventListener("blur", function () {
                closeAllToolTips(componentName);
            });

            toolTipTrigger.addEventListener("keydown", function (e) {
                if (e.keyCode === 32 || e.key === "Enter") {
                    e.preventDefault();

                    if (toolTipIsOpen) {
                        closeToolTip();
                    } else {
                        openToolTip();
                    }

                    // Prevent the click event on window from bubbling up
                    e.stopPropagation();
                }
            });

            content.addEventListener("mouseenter", function () {
                // Clear the close timeout if the mouse enters the triggered element in time
                if (closeTimeout) {
                    clearTimeout(closeTimeout);
                    closeTimeout = null;
                }

                QLD.toggleToolTips.openToggleToolTip(componentName, toolTip, toolTipTrigger, marginFromTrigger);
            });
            content.addEventListener("mouseleave", function () {
                closeToolTip();
            });
        });

        // Close tool tip if the tool content is open and the user hits the "Escape" key
        document.addEventListener("keydown", function (e) {
            if (e.key === "Escape" && lastTriggeredToolTipTrigger) {
                closeAllToolTips(componentName);
            }
        });
    };

    // Function to close all tool tips found on the page
    function closeAllToolTips() {
        const toolTipTriggers = document.querySelectorAll(toolTipTriggerQueryClass);

        if (!toolTipTriggers.length) return;

        QLD.toggleToolTips.closeAllToggleToolTips(componentName, toolTipTriggers);
    }

    QLD.toolTip = toolTip;
})();

window.addEventListener("DOMContentLoaded", function () {
    QLD.toolTip.init();
});
