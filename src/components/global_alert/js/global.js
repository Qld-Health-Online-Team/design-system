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

        let alerts = document.getElementsByClassName("qld__global-alert") || [];
        let siteName = null;
        if( document.querySelector(".qld__global-alert__include") && document.querySelector(".qld__global-alert__include").alertContainer) {
            siteName = document.querySelector(".qld__global-alert__include").alertContainer.getAttribute("data-name");
        }

        if (siteName == null) {
            siteName = 'global_alert_dev_alertSeen';
        }

        for(let index = 0; index < alerts.length; index++) {

            let alert = alerts[index];
            let alertSeen = QLD.utils.getCookie(`${siteName}_alertSeen_${index}`);

            if (alertSeen !== null) {
                alert.style.maxHeight = "0";
                alert.style.display = "none";
            }

            let closeButton = alert.querySelector(".qld__global-alert__close button");

            if (closeButton !== null) {
                closeButton.addEventListener(
                    "click",
                    function () {
                        alert.style.maxHeight = "0";
                        alert.style.display = "none";
                        QLD.utils.setCookie(`${siteName}_alertSeen_${index}`,"true");
                    },
                    false
                );
            }
        }
    }

    initGlobalAlert();
    
})();
