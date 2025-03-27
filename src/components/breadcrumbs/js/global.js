(function () {
    "use strict";

    /**
     * @module breadcrumb
     */

    var breadcrumb = {};
    var originalBreadCrumbUl = null;

    function getTheElements(resized = false) {
        const bannerBreadCrumbsAll = document.querySelectorAll(
            "nav.qld__banner__breadcrumbs--desktop"
        );

        const bodyBreadCrumbsAll = document.querySelectorAll(
            "section.qld__body--breadcrumb nav.qld__breadcrumbs"
        );

        const bannerBreadCrumbArray = [
            ...bannerBreadCrumbsAll,
            ...bodyBreadCrumbsAll,
        ];
        const bannerBreadCrumb = bannerBreadCrumbArray.find((breadcrumb) => {
            return breadcrumb.offsetWidth > 0;
        });

        if (bannerBreadCrumb) {
            if (!originalBreadCrumbUl) {
                originalBreadCrumbUl = bannerBreadCrumb
                    .querySelector("ol.qld__link-list")
                    .cloneNode(true);
            }

            if (resized) {
                bannerBreadCrumb.querySelector("ol.qld__link-list").innerHTML =
                    originalBreadCrumbUl.innerHTML;
            }

            const breadCrumbsUl =
                bannerBreadCrumb.querySelector("ol.qld__link-list");
            if (
                bannerBreadCrumb.parentElement &&
                bannerBreadCrumb.parentElement.classList.contains(
                    "qld__banner__content"
                )
            ) {
                const contentBanner = bannerBreadCrumb.closest(
                    ".qld__banner__content"
                );
                const contentBannerStyle =
                    window.getComputedStyle(contentBanner);

                const contentPaddings =
                    parseFloat(
                        contentBannerStyle
                            .getPropertyValue("padding-right")
                            .replace(/[^\d.]/g, "")
                    ) +
                    parseFloat(
                        contentBannerStyle
                            .getPropertyValue("padding-left")
                            .replace(/[^\d.]/g, "")
                    );

                bannerBreadCrumb.style.maxWidth =
                    contentBanner.offsetWidth - contentPaddings + "px";

                breadCrumbsUl.style.maxWidth =
                    contentBanner.offsetWidth - contentPaddings + "px";
            } else {
                const containerFluid =
                    bannerBreadCrumb.closest(".container-fluid");
                const containerFluidStyle =
                    window.getComputedStyle(containerFluid);
                if (containerFluid) {
                    const paddings =
                        parseFloat(
                            containerFluidStyle
                                .getPropertyValue("padding-right")
                                .replace(/[^\d.]/g, "")
                        ) +
                        parseFloat(
                            containerFluidStyle
                                .getPropertyValue("padding-left")
                                .replace(/[^\d.]/g, "")
                        );

                    bannerBreadCrumb.style.maxWidth =
                        containerFluid.offsetWidth - paddings + "px";
                    breadCrumbsUl.style.maxWidth =
                        containerFluid.offsetWidth - paddings + "px";
                }
            }
            return {
                bannerBreadCrumb,
                breadCrumbsUl,
            };
        }
    }

    function createOverFlow(svgPath) {
        const overFlowWrapper = document.createElement("div");
        overFlowWrapper.className = "qld__overflow_menu_wrapper";

        const button = document.createElement("button");
        button.className =
            "qld__btn qld__btn--toggle qld__overflow_menu__btn qld__accordion--closed";
        button.setAttribute("href", "#");
        button.setAttribute("aria-controls", "overflow-menu--");
        button.setAttribute("aria-expanded", "false");

        const svg = document.createElementNS(
            "http://www.w3.org/2000/svg",
            "svg"
        );
        svg.classList.add("qld__icon");
        svg.classList.add("qld__icon--lg");
        svg.setAttribute("aria-hidden", "true");
        svg.setAttribute("xmlns", "http://www.w3.org/2000/svg");

        if (svgPath) {
            let use = document.createElement("use");
            use.setAttribute("href", svgPath + "#more-horizontal");
            svg.appendChild(use);
            button.appendChild(svg);
        }

        overFlowWrapper.appendChild(button);

        const div = document.createElement("div");
        div.className = "qld__overflow_menu qld__accordion--closed";
        div.setAttribute("id", "overflow-menu--");

        const ul = document.createElement("ul");
        ul.className = "qld__overflow_menu_list";
        ul.setAttribute("aria-label", "qld__overflow_menu qld__link-columns");

        div.appendChild(ul);

        overFlowWrapper.appendChild(div);

        return overFlowWrapper;
    }

    function insertOverFlowButton(overFlowWrapper, element) {
        const newElement = document.createElement("div");
        newElement.className = "qld__overflow_menu_list-item";

        const link = element.querySelector("a");
        link.classList.add("qld__overflow_menu_list-item-link");
        link.setAttribute("tabindex", "0");

        newElement.appendChild(link);

        const ul = overFlowWrapper.querySelector("ul");

        ul.appendChild(newElement);

        return overFlowWrapper;
    }

    function truncateLastLi(breadCrumbsUlLis) {
        breadCrumbsUlLis[breadCrumbsUlLis.length - 1].style.overflow = "hidden";
    }

    function appendOverflow(breadCrumbsUlLis, overflowMenu, breadcrumbUL) {
        breadCrumbsUlLis[1].innerHTML = "";
        breadCrumbsUlLis[1].className = "qld__overflow_menu--breadcrumbs";
        breadCrumbsUlLis[1].appendChild(overflowMenu);
        breadCrumbsUlLis[1].style.display = "flex";
    }

    breadcrumb.init = function () {
        if (getTheElements()) {
            const { breadCrumbsUl } = getTheElements();

            const breadCrumbsUlLis = breadCrumbsUl.querySelectorAll("li");
            if (
                breadCrumbsUlLis.length > 2 &&
                breadCrumbsUlLis[0].offsetHeight > 0
            ) {
                const parent = breadCrumbsUl.parentElement;
                const svgPath = parent.getAttribute("data-path");
                const overflowMenu = createOverFlow(svgPath);

                let breadcrumbLisLength = breadCrumbsUlLis.length;
                let i = 1;

                let totalLisOffsetWidth = 0;

                for (let i = 0; i < breadCrumbsUlLis.length; i++) {
                    totalLisOffsetWidth += breadCrumbsUlLis[i].offsetWidth;
                }

                if (breadcrumbLisLength > 5) {
                    insertOverFlowButton(overflowMenu, breadCrumbsUlLis[1]);
                    breadCrumbsUlLis[1].style.display = "none";
                    appendOverflow(
                        breadCrumbsUlLis,
                        overflowMenu,
                        breadCrumbsUl
                    );
                    i = 2;

                    while (i < breadCrumbsUlLis.length - 2) {
                        insertOverFlowButton(overflowMenu, breadCrumbsUlLis[i]);
                        breadCrumbsUlLis[i].style.display = "none";
                        i++;
                    }
                } else if (
                    breadCrumbsUl.offsetHeight >
                    breadCrumbsUlLis[0].offsetHeight * 1.9
                ) {
                    if (breadcrumbLisLength > 3) {
                        insertOverFlowButton(overflowMenu, breadCrumbsUlLis[1]);
                        breadCrumbsUlLis[1].style.display = "none";
                        appendOverflow(
                            breadCrumbsUlLis,
                            overflowMenu,
                            breadCrumbsUl
                        );
                    }

                    i = 2;

                    while (
                        breadCrumbsUl.offsetHeight >
                            breadCrumbsUlLis[0].offsetHeight * 1.9 &&
                        i < breadcrumbLisLength - 2
                    ) {
                        insertOverFlowButton(overflowMenu, breadCrumbsUlLis[i]);
                        breadCrumbsUlLis[i].style.display = "none";

                        i++;
                    }
                } else if (
                    parseFloat(
                        breadCrumbsUl.style.maxWidth.replace(/[^\d.]/g, "")
                    ) < totalLisOffsetWidth
                ) {
                    if (breadcrumbLisLength > 3) {
                        insertOverFlowButton(overflowMenu, breadCrumbsUlLis[1]);
                        breadCrumbsUlLis[1].style.display = "none";
                        appendOverflow(
                            breadCrumbsUlLis,
                            overflowMenu,
                            breadCrumbsUl
                        );
                        totalLisOffsetWidth -= breadCrumbsUlLis[1].offsetWidth;
                    }

                    i = 2;

                    while (
                        parseFloat(
                            breadCrumbsUl.style.maxWidth.replace(/[^\d.]/g, "")
                        ) < totalLisOffsetWidth &&
                        i < breadcrumbLisLength - 2
                    ) {
                        insertOverFlowButton(overflowMenu, breadCrumbsUlLis[i]);
                        totalLisOffsetWidth -= breadCrumbsUlLis[1].offsetWidth;
                        breadCrumbsUlLis[i].style.display = "none";
                        i++;
                    }
                }

                truncateLastLi(breadCrumbsUlLis, breadCrumbsUl);
            }
        }
    };

    QLD.breadcrumb = breadcrumb;

    window.addEventListener("DOMContentLoaded", function () {
        QLD.breadcrumb.init();
        QLD.accordion.init("overflow");
    });

    window.addEventListener("resize", function () {
        getTheElements(true);
        QLD.breadcrumb.init();
        QLD.accordion.init("overflow");
    });
})();
