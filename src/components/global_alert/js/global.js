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
        var alerts =
            document.getElementsByClassName("qld__global-alert") || [];

        for (const alert of alerts) {
            // if (alert !== null) {
            let alertContainer = alert.querySelector(
                ".qld__global_alert_include"
            );
            let closeButton = alert.querySelector(
                ".qld__global-alert__close button"
            );

            let siteName = "";
            if (alertContainer !== null) {
                siteName = alertContainer.getAttribute("data-name");
            }

            if (closeButton !== null) {
                closeButton.addEventListener(
                    "click",
                    function () {
                        alertContainer.style.maxHeight = "0";

                        if (siteName.length > 0) {
                            QLD.utils.setCookie(
                                siteName + "_alertSeen",
                                "true"
                            );
                        }
                    },
                    false
                );
            }
            // }
        }
    }

    initGlobalAlert();
})();
