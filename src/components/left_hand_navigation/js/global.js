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

                    button.parentNode.querySelector('.qld__left-nav__item-link').classList.add('qld__left-nav__item-link--open');
                    itemToggles.forEach(function (item) {
                        if(item.className.split(' ').indexOf('qld__accordion--open')>=0){
                            item.parentNode.querySelector('.qld__left-nav__item-link').classList.remove('qld__left-nav__item-link--open');
                            QLD.accordion.Close(item);
                        }
                    });
                }else{
                    button.parentNode.querySelector('.qld__left-nav__item-link').classList.remove('qld__left-nav__item-link--open');
                }


                QLD.accordion.Toggle(button);
            });
        });
    });

}());