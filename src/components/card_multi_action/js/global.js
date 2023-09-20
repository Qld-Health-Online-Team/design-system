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
            let imageLink = card.querySelector('.qld__card__image-link');
            let link = card.querySelector(".qld__card__title .qld__card--clickable__link");
            
            if (imageLink) {
              imageLink.addEventListener('mouseover', () => {
                link.classList.add('qld__card--clickable__link--active');
              });
              imageLink.addEventListener('mouseout', () => {
                link.classList.remove('qld__card--clickable__link--active');
              });
              link.addEventListener('mouseover', () => {
                imageLink.classList.add('qld__card__image-link--active');
              });
              link.addEventListener('mouseout', () => {
                imageLink.classList.remove('qld__card__image-link--active');
              });
            }
            
        })
    }

    QLD.multiActionCards = multiActionCards;

    // Init In Page Nav on document load
    document.addEventListener('DOMContentLoaded', QLD.multiActionCards.init);
    
}());