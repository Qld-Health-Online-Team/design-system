(function () {
    'use strict';

    /**
     * @module multiActionCards
     */
    let multiActionCards = {};

    /**
     * Create mouse leave/enter 
     * 
     * @memberof module:multiActionCards
     */

    multiActionCards.init = function() {
        let cards = document.querySelectorAll(".qld__card__multi-action");

        cards.forEach(function(card){
            let imageLink = card.querySelector('.qld__responsive-media-img--bg');
            let link = card.querySelector(".qld__card__title");
            
            if (imageLink) {
              imageLink.addEventListener('mouseenter', function(e) {
                link.dispatchEvent(new MouseEvent('mouseenter', {'bubbles': true}));
              });
            
              imageLink.addEventListener('mouseleave', function(e) {
                link.dispatchEvent(new MouseEvent('mouseleave', {'bubbles': true}));
              });
            }
            
        })
    }

    QLD.multiActionCards = multiActionCards;

    // Init In Page Nav on document load
    document.addEventListener('DOMContentLoaded', QLD.multiActionCards.init);
    
}());