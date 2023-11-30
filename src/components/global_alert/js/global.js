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
        var index = 0;

        for (const alert of alerts) {
            
            var alertSeen = null;

            if (siteName !== null) {
                alertSeen = QLD.utils.getCookie(`${siteName}_alertSeen_${index}`);
                index++;
            } else {
                alertSeen = QLD.utils.getCookie(`global_alert_dev_alertSeen_${index}`);
                index++;
            }

            if (alertSeen !== null) {
                alert.style.maxHeight = "0";
                alert.style.display ="none";
                break; 
            }

            let closeButton = alert.querySelector(".qld__global-alert__close button");

            if (closeButton !== null) {
                closeButton.addEventListener(
                    "click",
                    function () {
                        alert.style.maxHeight = "0";
                        alert.style.display ="none";

                        if (siteName !== null) {
                            QLD.utils.setCookie(`${siteName}_alertSeen_${index}`,"true");
                            index++;
                        } else {
                            QLD.utils.setCookie(`global_alert_dev_alertSeen_${index}`,"true");
                            index++;
                        }
                    },
                    false
                );
            }
        }
    }
    
    document.addEventListener("DOMContentLoaded", initGlobalAlert);
    
})();
