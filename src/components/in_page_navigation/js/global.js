import { normaliseIdentifier } from "../../../helpers/global-helpers.js";

/**
 * @module inPageNavigation
 */

/**
 *
 * @param {Document|Element} root
 */
export default function initInPageNavigation(root = document) {
    const navs = root.querySelectorAll(".qld__inpage-nav-links");
    const mainEl = root.querySelector("main.main");
    const isLandingPage = mainEl && mainEl.classList.contains("landing");

    // For all In-Page Nav components
    navs.forEach((nav) => {
        const headingSelector = nav.getAttribute("data-headingType") ? nav.getAttribute("data-headingType") : "h2";
        const pageContent = isLandingPage ? mainEl : root.querySelector('[id="content"]')
        // Gracefully handle missing page content element
        if (!pageContent) {
            return;
        }
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
            // If heading already has an ID, use it
            const existingId = heading.getAttribute("id");
            const title = heading.innerText;
            // Create sanitized ID from heading text
            const id = existingId || `section__${normaliseIdentifier(title.toLowerCase())}`;
            heading.setAttribute("id", id);
            heading.setAttribute("tabindex", -1);
        });

        // Handle leftover duplicate ID's found to ensure new unique ID's are generated
        // Get array of all target heading IDs on the page
        const headingsIds = [...headings].map((heading) => heading.getAttribute("id"));
        // Filter anything that's not unique
        const uniqueIds = headingsIds.filter((heading) => headingsIds.indexOf(heading) === headingsIds.lastIndexOf(heading));
        // Loop through headings again but this time handle only duplicated ids
        headings.forEach((elem, index) => {
            let heading = elem.getAttribute("id");
            const title = elem.innerText;
            if (![...uniqueIds].includes(heading)) {
                heading = `${heading}-${index}`;
                elem.setAttribute("id", heading);
            }

            // Create link and anchor items to be added to the list
            const link = document.createElement("li");
            const anchor = document.createElement("a");
            anchor.setAttribute("href", `#${heading}`);
            anchor.setAttribute("target", `_self`);
            anchor.textContent = title;
            link.appendChild(anchor);

            // Append link item if it doesn't already exist in the list
            if (list.querySelector(`a[href="#${heading}"]`) === null) {
                list.appendChild(link);
            }
        });
    });
}
