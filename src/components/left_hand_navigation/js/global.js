/**
 * The left hand nav module
 * 
 * @module leftHandNav
 */
 (function () {
    'use strict';


    window.addEventListener('DOMContentLoaded', function () {

         // Add toggle event listeners to accordion buttons
        var itemToggles = document.querySelectorAll('.qld__left-nav__item-toggle');
        itemToggles.forEach(function(button) {
            button.addEventListener('click', function () {

                if(button.className.split(' ').indexOf('qld__accordion--closed')>=0){
                    button.classList.replace('qld__accordion--closed','qld__accordion--open');
                    button.parentNode.querySelector('.qld__left-nav__item-link').classList.add('qld__left-nav__item-link--open');
                    
                    button.parentNode.querySelector('.qld__accordion__body').classList.replace('qld__accordion--closed','qld__accordion--open');

                } else{
                    button.classList.replace('qld__accordion--open','qld__accordion--closed');
                    button.parentNode.querySelector('.qld__left-nav__item-link').classList.remove('qld__left-nav__item-link--open');
                    button.parentNode.querySelector('.qld__accordion__body').classList.replace('qld__accordion--open','qld__accordion--closed');

                }

            });
        });
    });

}());