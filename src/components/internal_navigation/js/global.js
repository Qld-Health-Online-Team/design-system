import { validateInternalSvgPath, buildIconPath } from "../../../helpers/global-helpers.js";

/**
 * @module internalNavigation
 */

export default function initInternalNavigation(document = document) {
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
                // Attempt to validate SVG path before using it
                if (validateInternalSvgPath(svgPath)) {
                    use.setAttributeNS(null, "href", buildIconPath(svgPath, "tick").toString());
                }

                // Append <use> to <svg>
                svg.appendChild(use);
                link.insertBefore(svg, link.firstChild);
            }

            link.parentElement.style.borderTopColor = "transparent";
        });
    }
}
