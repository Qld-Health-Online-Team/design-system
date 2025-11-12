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
            const thirdLevelLinks = document.querySelectorAll("ul ul ul a, ul ul ul span");

            // Loop through each matching element and apply the style
            thirdLevelLinks.forEach((link) => {
                if (!link.querySelector("svg")) {
                    // Create <svg>
                    const svg = document.createElementNS("http://www.w3.org/2000/svg", "svg");
                    svg.setAttribute("class", "qld__icon");
                    svg.setAttribute("aria-hidden", "true");
                    svg.setAttribute("xmlns", "http://www.w3.org/2000/svg");

                    // Create <use>
                    const use = document.createElementNS("http://www.w3.org/2000/svg", "use");
                    use.setAttributeNS(null, "href", `${svgPath}#tick`);

                    // Append <use> to <svg>
                    svg.appendChild(use);
                    link.insertBefore(svg, link.firstChild);
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
