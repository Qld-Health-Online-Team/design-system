(function () {
    "use strict";

    /**
     * @module breadcrumb
    */

    var breadcrumb = {};


    function getTheElements() {
        const banner = document.querySelector('.qld__banner--breadcrumbs') || document.querySelector('.qld__body--breadcrumb')

        if(banner) {
            const bannerBreadCrumb = banner.querySelector('nav.qld__breadcrumbs');
            const breadCrumbsUl = bannerBreadCrumb.querySelector('ul.qld__link-list');

            return {
                bannerBreadCrumb,
                breadCrumbsUl
            }
        }

        return null;
    }

    function createOverFlow() {

         //create the over flow menu here: 

         //start wrapper
         const overFlowWrapper = document.createElement('div');
         overFlowWrapper.className = "qld__overflow_menu_wrapper";
         //end wrapper
         
         //start overflow button
         const button = document.createElement('button');
         button.className = 'qld__btn qld__btn--toggle qld__overflow_menu__btn qld__accordion--closed';
         button.setAttribute('href', '#');
         button.setAttribute('aria-controls', 'overflow-menu--');
         button.setAttribute('aria-expanded', 'false');

         const svg = document.createElementNS('http://www.w3.org/2000/svg', 'svg');
         svg.classList.add('qld__icon');
         svg.classList.add('qld__icon\-\-lg');
         svg.setAttribute('xmlns', 'http://www.w3.org/2000/svg');
         svg.setAttribute('viewBox', '0 0 448 512');
         svg.setAttribute('aria-hidden', 'true');
         svg.setAttribute('focusable', 'false');
         svg.setAttribute('width', '24');
         svg.setAttribute('height', '32');
         svg.setAttribute('role', 'img');

         const path = document.createElementNS('http://www.w3.org/2000/svg', 'path');
         path.setAttribute('fill', 'currentColor');
         path.setAttribute('d', 'M352 256C352 238.3 366.3 224 384 224C401.7 224 416 238.3 416 256C416 273.7 401.7 288 384 288C366.3 288 352 273.7 352 256zM192 256C192 238.3 206.3 224 224 224C241.7 224 256 238.3 256 256C256 273.7 241.7 288 224 288C206.3 288 192 273.7 192 256zM96 256C96 273.7 81.67 288 64 288C46.33 288 32 273.7 32 256C32 238.3 46.33 224 64 224C81.67 224 96 238.3 96 256z');

         svg.appendChild(path);
         button.appendChild(svg);
         //end overflow button

         overFlowWrapper.appendChild(button);

         // Start menu element
         const div = document.createElement('div');
         div.className = 'qld__overflow_menu qld__accordion--closed';
         div.setAttribute('id', 'overflow-menu--');

         const ul = document.createElement('ul');
         ul.className = 'qld__overflow_menu_list';
         ul.setAttribute('aria-label', 'qld__overflow_menu qld__link-columns');

         div.appendChild(ul);
         //end menu

         overFlowWrapper.appendChild(div);

         //This menu does not have the uls , uls are going to be created in insertfunction

         return overFlowWrapper;

    }

    function insertOverFlowButton(overFlowWrapper, element) {

        const newElement = document.createElement('div');
        newElement.className = 'qld__overflow_menu_list-item';

        const link = element.querySelector('a');
        link.classList.add('qld__overflow_menu_list-item-link')
        link.setAttribute('tabindex', '0');

        newElement.appendChild(link);

        const ul = overFlowWrapper.querySelector('ul');

        ul.appendChild(newElement);

        return overFlowWrapper;

    }


    breadcrumb.init = function () {

        if(getTheElements()) {

            const { bannerBreadCrumb, breadCrumbsUl } = getTheElements();
            let bannerBreadCrumbWidth = bannerBreadCrumb.offsetWidth;

            console.log('breadCrumbsUl ', breadCrumbsUl)
            console.log('bannerBreadCrumb ', bannerBreadCrumb)
            console.log('breadCrumbsUl.offsetWidth > bannerBreadCrumbWidth ', breadCrumbsUl.offsetWidth, '>', bannerBreadCrumbWidth);

            if(breadCrumbsUl.offsetWidth > bannerBreadCrumbWidth) {

                const breadCrumbsUlLis = breadCrumbsUl.querySelectorAll('li');
                
                let truncatableWidth = 0;

                const overflowMenu = createOverFlow();


                for(let i = 1 ; i < breadCrumbsUlLis.length - 1; i++) {
                    
                    truncatableWidth += breadCrumbsUlLis[i].offsetWidth + 1; //this is the  width
                    
                    insertOverFlowButton(overflowMenu, breadCrumbsUlLis[i]);
                    breadCrumbsUlLis[i].style.display = "none";
                    
                    if(breadCrumbsUl.offsetWidth < bannerBreadCrumbWidth) {
                        
                        break;
                    }

                }
            

                // if (breadCrumbsUl.offsetWidth + 10 > bannerBreadCrumbWidth) {

                const charactersNeedToGo = Math.ceil((breadCrumbsUl.offsetWidth - bannerBreadCrumbWidth + 160) / 10)

                let lastElementText = '';
                let originalCurrentPageText = breadCrumbsUlLis[breadCrumbsUlLis.length - 1].innerHTML;


                if(breadCrumbsUlLis[breadCrumbsUlLis.length - 1].innerHTML.length > charactersNeedToGo) {
                    lastElementText = breadCrumbsUlLis[breadCrumbsUlLis.length - 1].innerHTML.slice(0, -charactersNeedToGo);
                    lastElementText += '...';
                } else {
                    lastElementText = '...';
                }

                console.log('lastElementText ', charactersNeedToGo, lastElementText)
                   
                breadCrumbsUlLis[breadCrumbsUlLis.length - 1].innerHTML = lastElementText;

                // }


                breadCrumbsUlLis[1].innerHTML = '';
                breadCrumbsUlLis[1].className = "qld__overflow_menu--breadcrumbs"
                breadCrumbsUlLis[1].appendChild(overflowMenu);
                breadCrumbsUlLis[1].style.display = 'inline-block';
                
            }
        }
    };

    QLD.breadcrumb = breadcrumb;

    window.addEventListener("DOMContentLoaded", function () {
        QLD.breadcrumb.init();
        QLD.accordion.init();
    });

})();
