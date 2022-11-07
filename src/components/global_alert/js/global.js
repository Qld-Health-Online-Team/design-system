(function () {
    'use strict';
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
        var alert = document.querySelector(".qld__global_alert");
    
        if (alert !== null) {
            var alertContainer = document.querySelector(".qld__global_alert_include");
            var closeButton = document.querySelector(".qld__global_alert__close button");

            var siteName = '';
            if (alertContainer !== null) {
                siteName = alertContainer.getAttribute("data-name");
            }
            
            if (closeButton !== null) {
                closeButton.addEventListener("click", function() {
                    alertContainer.style.maxHeight = '0';

                    if (siteName.length > 0) {
                        QH.utils.setCookie(siteName + "_alertSeen","true");
                    }
                }, false);
            }
        }
    }
    
    initGlobalAlert();
}());