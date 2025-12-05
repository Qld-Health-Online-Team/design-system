/**
 * @module initPromoPanel
 */

export default function initPromoPanel(document = document) {
    let promoPanels = document.querySelectorAll(".qld__promo-panel");

    if (promoPanels.length > 0) {
        document.querySelectorAll("section").forEach(function (section) {
            if (section.classList.contains("qld__promo-panel") && !section.classList.contains("qld__promo-panel--no-image")) {
                let next = section.nextElementSibling;

                if (next && next.tagName.toLowerCase() === "data") {
                    next = next.nextElementSibling;
                }

                if (next && next.classList.contains("qld__body--alt")) {
                    section.classList.add("qld__body--alt-half");
                }

                if (next && next.classList.contains("qld__body--dark")) {
                    section.classList.add("qld__body--dark-half");
                }

                if (next && next.classList.contains("qld__body--alt-dark")) {
                    section.classList.add("qld__body--alt-dark-half");
                }
            }
        });
    }
}
