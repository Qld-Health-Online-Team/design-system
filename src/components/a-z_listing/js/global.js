(function () {
    "use strict";

    window.addEventListener("DOMContentLoaded", function () {
        function checkIfAzSelected() {
            var hash = window.location.hash;

            if (hash) {
                setTimeout(function () {
                    var servicesAZOptions = document.querySelectorAll(".qld__a-z_listing__options__item__link");
                    var servicesAZHeaders = document.querySelectorAll(".qld__a-z_listing__list__item__header");

                    servicesAZOptions.forEach(function (option) {
                        option.classList.remove("active");
                    });

                    servicesAZHeaders.forEach(function (header) {
                        header.classList.remove("active");
                    });

                    var activeOption = document.querySelector(`a[href^="${hash}"].qld__a-z_listing__options__item__link`);
                    if (activeOption) {
                        activeOption.classList.add("active");
                    }

                    var activeHeader = document.querySelector(`.qld__a-z_listing__list__item__header ${hash}`);
                    if (activeHeader) {
                        activeHeader.parentElement.classList.add("active");
                    }

                    var targetElement = document.querySelector(hash);
                    if (targetElement) {
                        window.scrollTo({
                            top: targetElement.getBoundingClientRect().top + window.scrollY - 20,
                            behavior: "smooth",
                        });
                    }
                }, 100);
            }
        }

        document.addEventListener("click", function (event) {
            var target = event.target;

            if (target.matches('a[href^="#"].qld__a-z_listing__options__item__link')) {
                event.preventDefault();

                var servicesAZOptions = document.querySelectorAll(".qld__a-z_listing__options__item__link");
                var servicesAZHeaders = document.querySelectorAll(".qld__a-z_listing__list__item__header");

                servicesAZOptions.forEach(function (option) {
                    option.classList.remove("active");
                });

                servicesAZHeaders.forEach(function (header) {
                    header.classList.remove("active");
                });

                target.classList.add("active");
                var targetHeader = document.querySelector(`.qld__a-z_listing__list__item__header ${target.getAttribute("href")}`);
                if (targetHeader) {
                    targetHeader.parentElement.classList.add("active");
                }

                var targetElement = document.querySelector(target.getAttribute("href"));
                if (targetElement) {
                    window.scrollTo({
                        top: targetElement.getBoundingClientRect().top + window.scrollY - 20,
                        behavior: "smooth",
                    });
                }

                setTimeout(() => {
                    window.location.hash = target.getAttribute("href");
                }, 500);
            }
        });

        checkIfAzSelected();
    });
})();
