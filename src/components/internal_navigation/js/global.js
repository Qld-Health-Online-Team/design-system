/**
 * The internal navigation module
 *
 * @module internalNavigation
 */
(function () {
    "use strict";

    let internalNavigation = {};
    window.addEventListener("DOMContentLoaded", function () {
        const svgSelector = document.querySelector(".qld__side-nav.qld__accordion");

        if (svgSelector) {
            const svgPath = svgSelector.getAttribute("data-path");
            const svgIcon = `<svg class="qld__icon" aria-hidden="true" xmlns="http://www.w3.org/2000/svg"><use href="${svgPath}#tick"></use></svg>`;

            const thirdLevelLinks = document.querySelectorAll("ul ul ul a, ul ul ul span");

            // Loop through each matching element and apply the style
            thirdLevelLinks.forEach((link) => {
                if (!link.querySelector("svg")) {
                    link.insertAdjacentHTML("afterbegin", svgIcon);
                }
                link.parentElement.style.borderTopColor = "transparent";
            });
        }
    });

    QLD.internalNavigation = internalNavigation;
})();

window.addEventListener("DOMContentLoaded", function () {
    if (QLD && QLD?.internalNavigation && QLD?.internalNavigation?.init) {
        QLD.internalNavigation.init();
    }
});
