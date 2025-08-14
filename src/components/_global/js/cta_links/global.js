(function () {
    "use strict";

    var ctaLinks = {};

    ctaLinks.init = function () {
        document.querySelectorAll(".qld__cta-link.qld__cta-link--view-all").forEach((ctaLink) => {
            // First check that the select is not already wrapped
            const ctaLinkText = ctaLink.textContent;
            ctaLink.textContent = "";

            // Create wrapper span for the text
            const wrapper = document.createElement("span");
            wrapper.classList.add("qld__cta-link--view-all--wrapper");
            wrapper.textContent = ctaLinkText;

            // // Insert wrapper BEFORE the select
            ctaLink.appendChild(wrapper);
        });
    };

    // Make cta links available to public
    QLD.ctaLinks = ctaLinks;

    document.addEventListener("DOMContentLoaded", function () {
        QLD.ctaLinks.init();
    });
})();
