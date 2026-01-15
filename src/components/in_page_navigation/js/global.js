import { normaliseIdentifier } from "../../../helpers/global-helpers.js";

/**
 * @module inPageNavigation
 */

export default function initInPageNavigation(document = document) {
    const navs = document.querySelectorAll(".qld__inpage-nav-links");
    const mainEl = document.querySelector("main.main");
    const isLandingPage = mainEl && mainEl.classList.contains("landing");

    // For all In-Page Nav components
    navs.forEach((nav) => {
        const headingSelector = nav.getAttribute("data-headingType") ? nav.getAttribute("data-headingType") : "h2";
        const pageContent = isLandingPage ? mainEl : document.getElementById("content");
        // Exclude Code CT, and accordion h3, h4, h5, h6
        const headings = pageContent.querySelectorAll(
            headingSelector + ":not(.qld__inpage-nav-links__heading):not(.banner__heading):not(.qld__code *):not(.qld__accordion h3):not(.qld__accordion h4):not(.qld__accordion h5):not(.qld__accordion h6)",
        );

        // Get list element and clear existing children
        const list = nav.querySelector(".qld__link-list");
        list.replaceChildren();

        if (headings.length === 0) {
            nav.style.display = "none";
        }

        // For all headings (with matching data-headingType) in page content
        headings.forEach((heading) => {
            const title = heading.innerText;
            // Create sanitized ID from heading text
            const id = "section__" + normaliseIdentifier(title.toLowerCase());
            heading.setAttribute("id", id);
            heading.setAttribute("tabindex", -1);

            // Create link and anchor items to be added to the list
            const link = document.createElement("li");
            const anchor = document.createElement("a");
            anchor.setAttribute("href", `#${id}`);
            anchor.textContent = title;
            link.appendChild(anchor);

            // Append link item if it doesn't already exist in the list
            if (list.querySelector(`a[href="#${id}"]`) === null) {
                list.appendChild(link);
            }
        });
    });
}
