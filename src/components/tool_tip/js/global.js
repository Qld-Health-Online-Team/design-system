(function () {
    "use strict";

    let toolTip = {};
    // Variable to store the last clicked tool tip trigger
    let lastTriggeredToolTipTrigger = null;
    const componentName = "qld__tool-tip";
    const toolTipTriggerQueryClass = "." + componentName + "-trigger";
    const toolTipContentQueryClass = "." + componentName + "-content";
    const marginFromTrigger = 4;
    const contentLeaveDelay = 200; // Delay before hiding the content on mouse leave

    toolTip.init = function () {
        // Find all tool tip trigger elements
        const toolTipTriggers = document.querySelectorAll(toolTipTriggerQueryClass);

        if (!toolTipTriggers.length) return;

        toolTipTriggers.forEach(function (toolTipTrigger) {
            let closeTimeout = null;
            const toolTipId = toolTipTrigger.getAttribute("data-target");

            if (!toolTipId) return;

            const toolTip = document.getElementById(toolTipId);
            const content = toolTip.querySelector(toolTipContentQueryClass);

            // Function to open the tool tip
            function openToolTip() {
                lastTriggeredToolTipTrigger = toolTipTrigger;
                QLD.toggleToolTips.openToggleToolTip(componentName, toolTip, toolTipTrigger, marginFromTrigger);
            }

            // Function to open the tool tip
            function closeToolTip() {
                QLD.toggleToolTips.closeToggleToolTip(componentName, toolTip, toolTipTrigger);
            }

            toolTipTrigger.addEventListener("mouseenter", function (e) {
                closeAllToolTips();
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
                closeAllToolTips();
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
                closeAllToolTips();
            }
        });
    };

    // Function to close all tool tips found on the page
    function closeAllToolTips() {
        const toolTipTriggers = document.querySelectorAll(toolTipTriggerQueryClass);

        if (!toolTipTriggers.length) return;

        lastTriggeredToolTipTrigger = null;
        QLD.toggleToolTips.closeAllToggleToolTips(componentName, toolTipTriggers);
    }

    QLD.toolTip = toolTip;
})();

window.addEventListener("DOMContentLoaded", function () {
    QLD.toolTip.init();
});
