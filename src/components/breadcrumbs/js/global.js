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
                'section.qld__body--breadcrumb nav.qld__breadcrumbs'
            );

            const bannerBreadCrumbArray = [...bannerBreadCrumbsAll, ...bodyBreadCrumbsAll];
            const bannerBreadCrumb = bannerBreadCrumbArray.find(
                (breadcrumb) => {
                    return breadcrumb.offsetWidth > 0;
                }
            );

            if(bannerBreadCrumb) {
                if(!originalBreadCrumbUl) {
                    originalBreadCrumbUl = bannerBreadCrumb.querySelector("ol.qld__link-list").cloneNode(true);
                }
    
                if(resized) {
                    bannerBreadCrumb.querySelector("ol.qld__link-list").innerHTML = originalBreadCrumbUl.innerHTML;
                }
    
                const breadCrumbsUl = bannerBreadCrumb.querySelector("ol.qld__link-list");

                if (
                    bannerBreadCrumb &&
                    bannerBreadCrumb.parentElement &&
                    bannerBreadCrumb.parentElement.classList.contains("qld__banner__content")
                ) {
                    const contentBanner = bannerBreadCrumb.closest('.qld__banner__content');
                    const contentBannerStyle = window.getComputedStyle(contentBanner);
                
                    const contentPaddings = 
                        parseFloat(contentBannerStyle.getPropertyValue('padding-right').replace(/[^\d.]/g, '')) + 
                        parseFloat(contentBannerStyle.getPropertyValue('padding-left').replace(/[^\d.]/g, ''));
                
                    bannerBreadCrumb.style.maxWidth = (contentBanner.offsetWidth - contentPaddings) + 'px';
                
                    breadCrumbsUl.style.maxWidth = (contentBanner.offsetWidth - contentPaddings) + 'px';
                
                } else if (bannerBreadCrumb) {
                    const containerFluid = bannerBreadCrumb.closest('.container-fluid');
                    const containerFluidStyle = window.getComputedStyle(containerFluid);
                
                    const paddings = 
                        parseFloat(containerFluidStyle.getPropertyValue('padding-right').replace(/[^\d.]/g, '')) + 
                        parseFloat(containerFluidStyle.getPropertyValue('padding-left').replace(/[^\d.]/g, ''));
                
                    bannerBreadCrumb.style.maxWidth = (containerFluid.offsetWidth - paddings) + 'px';
                
                    breadCrumbsUl.style.maxWidth = (containerFluid.offsetWidth - paddings) + 'px';
                }                
                return {
                    bannerBreadCrumb,
                    breadCrumbsUl,
                };
            }
    }

    function createOverFlow() {

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
        svg.setAttribute("xmlns", "http://www.w3.org/2000/svg");
        svg.setAttribute("viewBox", "0 0 448 512");
        svg.setAttribute("aria-hidden", "true");
        svg.setAttribute("focusable", "false");
        svg.setAttribute("width", "24");
        svg.setAttribute("height", "32");
        svg.setAttribute("role", "img");

        const path = document.createElementNS(
            "http://www.w3.org/2000/svg",
            "path"
        );
        path.setAttribute("fill", "currentColor");
        path.setAttribute(
            "d",
            "M352 256C352 238.3 366.3 224 384 224C401.7 224 416 238.3 416 256C416 273.7 401.7 288 384 288C366.3 288 352 273.7 352 256zM192 256C192 238.3 206.3 224 224 224C241.7 224 256 238.3 256 256C256 273.7 241.7 288 224 288C206.3 288 192 273.7 192 256zM96 256C96 273.7 81.67 288 64 288C46.33 288 32 273.7 32 256C32 238.3 46.33 224 64 224C81.67 224 96 238.3 96 256z"
        );

        svg.appendChild(path);
        button.appendChild(svg);

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
    
    function appendOverflow( breadCrumbsUlLis, overflowMenu, breadcrumbUL) {
        breadCrumbsUlLis[1].innerHTML = "";
        breadCrumbsUlLis[1].className = "qld__overflow_menu--breadcrumbs qld__breadcrumbs__item";
        breadCrumbsUlLis[1].appendChild(overflowMenu);
        breadCrumbsUlLis[1].style.display = "flex";
    }

    breadcrumb.init = function () {
        if (getTheElements()) {
            const { breadCrumbsUl } = getTheElements();

            const breadCrumbsUlLis = breadCrumbsUl.querySelectorAll("li");
            if (breadCrumbsUlLis.length > 2 && breadCrumbsUlLis[0].offsetHeight > 0) {
                const overflowMenu = createOverFlow();
                let breadcrumbLisLength = breadCrumbsUlLis.length;
                let i = 1;
                

                let totalLisOffsetWidth = 0;
                
                for (let i = 0; i < breadCrumbsUlLis.length; i++) {
                    totalLisOffsetWidth += breadCrumbsUlLis[i].offsetWidth;
                }

                if(breadcrumbLisLength > 5) {
                    insertOverFlowButton(overflowMenu, breadCrumbsUlLis[1]);
                    breadCrumbsUlLis[1].style.display = "none";
                    appendOverflow(breadCrumbsUlLis, overflowMenu, breadCrumbsUl);
                    i = 2;

                    while(i < breadCrumbsUlLis.length - 2) {
                        insertOverFlowButton(overflowMenu, breadCrumbsUlLis[i]);
                        breadCrumbsUlLis[i].style.display = "none";
                        i++;
                    }

                } else if((breadCrumbsUl.offsetHeight > (breadCrumbsUlLis[0].offsetHeight * 1.9))) {

                    if(breadcrumbLisLength > 3) { 
                        insertOverFlowButton(overflowMenu, breadCrumbsUlLis[1]);
                        breadCrumbsUlLis[1].style.display = "none";
                        appendOverflow(breadCrumbsUlLis, overflowMenu, breadCrumbsUl);
                    }

                    i = 2;

                    while ((breadCrumbsUl.offsetHeight > (breadCrumbsUlLis[0].offsetHeight * 1.9)) &&
                    (i < breadcrumbLisLength - 2)
                    ) {

                        insertOverFlowButton(overflowMenu, breadCrumbsUlLis[i]);
                        breadCrumbsUlLis[i].style.display = "none";

                        i++;
                    }
                } else if(parseFloat(breadCrumbsUl.style.maxWidth.replace(/[^\d.]/g, '')) < totalLisOffsetWidth) {
                    
                    if(breadcrumbLisLength > 3) {
                        insertOverFlowButton(overflowMenu, breadCrumbsUlLis[1]);
                        breadCrumbsUlLis[1].style.display = "none";
                        appendOverflow(breadCrumbsUlLis, overflowMenu, breadCrumbsUl);
                        totalLisOffsetWidth -= breadCrumbsUlLis[1].offsetWidth;
                    }
                    
                    i = 2;

                    while ((parseFloat(breadCrumbsUl.style.maxWidth.replace(/[^\d.]/g, ''))< totalLisOffsetWidth) &&
                    (i < breadcrumbLisLength - 2)
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
        QLD.accordion.init('overflow');
    });

    window.addEventListener('resize' , function() {
        getTheElements(true);
        QLD.breadcrumb.init();
        QLD.accordion.init('overflow');
    });

})();

