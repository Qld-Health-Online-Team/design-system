(function () {
    'use strict';



    window.addEventListener('DOMContentLoaded', function () {
        // var servicesAZOptions = document.getElementsByClassName('qld__services_a-z__options__item__link');

        // for (let i = 0; i < servicesAZOptions.length; i++) {
        //     servicesAZOptions[i].addEventListener('click', function(e) {

        //         // e.preventDefault();

        //         for (let z = 0; z < servicesAZOptions.length; z++) {
        //             servicesAZOptions[z].classList.remove('active');
        //         }

        //         console.log('test');
                
        //         this.classList.add('active');

        //         document.querySelector(this.getAttribute('href')).scrollIntoView({
        //             behavior: 'smooth'
        //         });
        //     });
        // }


        function checkIfAzSelected() {
            var hash = window.location.hash;

            if(hash) {
                setTimeout(function() {
                    var $servicesAZOptions = $('.qld__services_a-z__options__item__link');
                    var $servicesAZHeaders = $('.qld__services_a-z__list__item__header');

                    $servicesAZOptions.each(function() {
                        $(this).removeClass('active');
                    });
        
                    $servicesAZHeaders.each(function() {
                        $(this).removeClass('active');
                    });

                    $(`a[href^="${hash}"].qld__services_a-z__options__item__link`).addClass('active');
                    $(`.qld__services_a-z__list__item__header ${hash}`).parent().addClass('active');

                    $('html, body').animate({
                        scrollTop: $(hash).offset().top - 20
                    }, 400);
                }, 100);
            }
        }

        $(document).on('click', 'a[href^="#"].qld__services_a-z__options__item__link', function (event) {
            var $servicesAZOptions = $('.qld__services_a-z__options__item__link');
            var $servicesAZHeaders = $('.qld__services_a-z__list__item__header');
            var target = $.attr(this, 'href');
            event.preventDefault();

            $servicesAZOptions.each(function() {
                $(this).removeClass('active');
            });

            $servicesAZHeaders.each(function() {
                $(this).removeClass('active');
            });

            $(this).addClass('active');
            $(`.qld__services_a-z__list__item__header ${target}`).parent().addClass('active');
        
            $('html, body').animate({
                scrollTop: $(target).offset().top - 20
            }, 400);

            window.location.hash = target;
        });

        $(window).on('hashchange', function() {
            checkIfAzSelected();
        });

        checkIfAzSelected();


        // let servicesUrl = "https://au-a14fc409.datastore.squiz.cloud/services";
        // var azServiceData = [];
        // var $azServicesOptionsEl = $('.qld__services_a-z .qld__services_a-z__options');
        // var $azServicesListEl = $('.qld__services_a-z .qld__services_a-z__list');
        // var azList = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"];
        // var azListMatch = [];
    
        // $.get(servicesUrl, function(data) {
        //     azServiceData = data;
    
        //     for(let letter in azList) {
        //         $azServicesOptionsEl.append(
        //             `<li class="qld__services_a-z__options__item"><a class="qld__services_a-z__options__item__link" href="#${azList[letter]}">${azList[letter]}</a></li>`
        //         );
        //     }
    
        //     for(let service in azServiceData) {
        //         console.log(azServiceData[service].name);
        //     }
    
        // });

    });

    
}());