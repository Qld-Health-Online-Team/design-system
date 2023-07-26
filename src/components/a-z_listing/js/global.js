(function () {
    'use strict';


    window.addEventListener('DOMContentLoaded', function () {

        function checkIfAzSelected() {
            var hash = window.location.hash;

            if(hash) {
                setTimeout(function() {
                    var $servicesAZOptions = $('.qld__a-z_listing__options__item__link');
                    var $servicesAZHeaders = $('.qld__a-z_listing__list__item__header');

                    $servicesAZOptions.each(function() {
                        $(this).removeClass('active');
                    });
        
                    $servicesAZHeaders.each(function() {
                        $(this).removeClass('active');
                    });

                    $(`a[href^="${hash}"].qld__a-z_listing__options__item__link`).addClass('active');
                    $(`.qld__a-z_listing__list__item__header ${hash}`).parent().addClass('active');

                    $('html, body').animate({
                        scrollTop: $(hash).offset().top - 20
                    }, 400);
                }, 100);
            }
        }

        $(document).on('click', 'a[href^="#"].qld__a-z_listing__options__item__link', function (event) {
            var $servicesAZOptions = $('.qld__a-z_listing__options__item__link');
            var $servicesAZHeaders = $('.qld__a-z_listing__list__item__header');
            var target = $.attr(this, 'href');
            event.preventDefault();

            $servicesAZOptions.each(function() {
                $(this).removeClass('active');
            });

            $servicesAZHeaders.each(function() {
                $(this).removeClass('active');
            });

            $(this).addClass('active');
            $(`.qld__a-z_listing__list__item__header ${target}`).parent().addClass('active');
        
            $('html, body').animate({
                scrollTop: $(target).offset().top - 20
            }, 400);

            window.location.hash = target;
        });

        $(window).on('hashchange', function() {
            checkIfAzSelected();
        });

        checkIfAzSelected();

    });
    
}());