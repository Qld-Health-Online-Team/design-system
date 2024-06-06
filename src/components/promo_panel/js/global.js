(function () {
    'use strict';

    /**
     * @module initPromoPanel
     */
    var initPromoPanel = {};

    /**
     * Initialise Promo Panel
     * 
     * @memberof module:initPromoPanel
     */
     initPromoPanel.init = function() {

        if($('.qld__promo_panel').length > 0) {
            $('section').each(function() {
                if($(this).hasClass('qld__promo_panel') && !$(this).hasClass('qld__promo_panel--no-image')) {
                    var next = $(this).next();

                    if($(this).next().is("data")) {
                        next = $(this).next().next();
                    }

                    if ($(next).hasClass("qld__body--alt")) {
                        $(this).addClass("qld__body--alt-half");
                    }

                    if ($(next).hasClass("qld__body--dark")) {
                        $(this).addClass("qld__body--dark-half");
                    }

                    if ($(next).hasClass("qld__body--alt-dark")) {
                        $(this).addClass("qld__body--alt-dark-half");
                    }
                }
            });
        }
    };

    // Assign initPromoPanel to global QLD object of functions
    QLD.initPromoPanel = initPromoPanel;
    
    document.addEventListener('DOMContentLoaded', initPromoPanel.init);
}());