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
        var siteName = null;
        if( document.querySelector(".qld__global-alert__include") && document.querySelector(".qld__global-alert__include").alertContainer) {
            siteName = document.querySelector(".qld__global-alert__include").alertContainer.getAttribute("data-name");
        }

        if (siteName == null) {
            siteName = 'global_alert_dev_alertSeen';
        }

        for(var index = 0; index < alerts.length; index++) {

            var alert = alerts[index];
            var alertSeen = QLD.utils.getCookie(`${siteName}_alertSeen_${index}`);

            if (alertSeen !== null) {
                alert.style.maxHeight = "0";
                alert.style.display ="none";
                break;
            }

            var closeButton = alert.querySelector(".qld__global-alert__close button");

            if (closeButton !== null) {
                closeButton.addEventListener(
                    "click",
                    function () {
                        alert.style.maxHeight = "0";
                        alert.style.display ="none";
                        QLD.utils.setCookie(`${siteName}_alertSeen_${index}`,"true");
                    },
                    false
                );
            }
        }
    }

    initGlobalAlert();
    
})();
