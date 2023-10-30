(function () {
    "use strict";
    /**
     * @module globalAlert
     */

    /**
     * Initialise global alert, and add close button event listener
     *
     * @memberof module:globalAlert
     * @instance
     * @private
     */
    function initGlobalAlert() {
        var alerts = document.getElementsByClassName("qld__global-alert") || [];
        for (const alert of alerts) {
            let closeButton = alert.querySelector(
                ".qld__global-alert__close button"
            );
            if (closeButton !== null) {
                closeButton.addEventListener(
                    "click",
                    function () {
                        alert.style.maxHeight = "0";
                        alert.style.display ="none";
                    },
                    false
                );
            }
        }
    }
    initGlobalAlert();
})();
