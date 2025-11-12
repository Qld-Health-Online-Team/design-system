(function () {
    /**
     * @module inPageNav
     */
    var inPageNav = {};

    /**
     * Create in page nav from headings
     *
     * @memberof module:inPageNav
     */
    inPageNav.init = function () {
        var navs = document.querySelectorAll(".qld__inpage-nav-links");
        var mainEl = document.querySelector("main.main");
        var isLandingPage = mainEl && mainEl.classList.contains("landing");

        // For all In-Page Nav components
        navs.forEach(function (nav) {
            var headingSelector = nav.getAttribute("data-headingType") ? nav.getAttribute("data-headingType") : "h2";
            var pageContent = isLandingPage ? mainEl : document.getElementById("content");
            // Exclude Code CT, and accordion h3, h4, h5, h6
            var headings = pageContent.querySelectorAll(
                headingSelector + ":not(.qld__inpage-nav-links__heading):not(.banner__heading):not(.qld__code *):not(.qld__accordion h3):not(.qld__accordion h4):not(.qld__accordion h5):not(.qld__accordion h6)",
            );

            // Get list element and clear existing children
            var list = nav.querySelector(".qld__link-list");
            list.replaceChildren();

            if (headings.length === 0) {
                nav.style.display = "none";
            }

            // For all headings (with matching data-headingType) in page content
            headings.forEach(function (heading) {
                var title = heading.innerText;
                var id = "section__" + title.toLowerCase().replace(/\s+/g, "-");
                heading.setAttribute("id", id);
                heading.setAttribute("tabindex", -1);

                // Create link and anchor items to be added to the list
                var link = document.createElement("li");
                var anchor = document.createElement("a");
                anchor.setAttribute("href", `#${id}`);
                anchor.textContent = title;
                link.appendChild(anchor);

                // Append link item if it doesn't already exist in the list
                if (list.querySelector(`a[href="#${id}"]`) === null) {
                    list.appendChild(link);
                }
            });
        });
    };

    QLD.inPageNav = inPageNav;

    // Init In Page Nav on document load
    document.addEventListener("DOMContentLoaded", QLD.inPageNav.init);
})();
