(function () {
    /* This code is for implementing a tab component on a webpage. It does the following:

        1 .Selects all elements with the class qld__tab-container on the page and stores them in the tabComponents variable.
        2. Loops through each element in tabComponents.
        3. Within the loop, it selects all elements with the class qld__tab-button within the current tabComponent element and stores them in the tabHeadings variable.
        4. It adds the active class to the first element in tabHeadings and to the corresponding tab content element.
        5. It loops through each element in tabHeadings.
        6. Within the loop, it attaches a click event listener to each element in tabHeadings.
        7. When a tab heading element is clicked, the event listener removes the active class from all qld__tab-button and qld__tab-content elements within the current tabComponent, 
        8. It then adds the active class to the clicked tab heading element and its corresponding tab content element.
        9. The last part of the code allows the users to navigate tabs with the keyboard which is an accessibilty requirement. 

        This code will work for multiple tab components on the same page.

    */

    'use strict';

    /**
     * @module tab
     */

    /**
     * Initialise all embedded facility maps on a particular page
     * 
     * @memberof module:tab
     */


    var tab = {};

        /**
         * The functions below scroll the tab list to the left or right by the defined scroll amount
         * @param {HTMLElement} tabList - The tab list element to scroll
         */


        function scrollRight(tabList, ScrollRightBtn, ScrollLeftBtn) {
            // Check if the current scroll position is at the maximum scroll position
            if (tabList.scrollLeft + SCROLL_AMOUNT >= tabList.scrollWidth - tabList.clientWidth) {
                // Hide the scroll right button
                ScrollRightBtn.style.display = "none";
            }

            tabList.scrollLeft += SCROLL_AMOUNT;
            ScrollLeftBtn.style.display = "block";
        }

        function scrollLeft(tabList, ScrollRightBtn, ScrollLeftBtn) {
            // Check if the current scroll position is at the beginning of the scroll
            if (tabList.scrollLeft - SCROLL_AMOUNT <= 0) {
                // Hide the scroll left button
                ScrollLeftBtn.style.display = "none";
            }

            tabList.scrollLeft -= SCROLL_AMOUNT;
            ScrollRightBtn.style.display = "block";
        }

        /**
         *  The function below checks if the tab list overflows the tab element and display the appropriate scroll buttons
         * @param {HTMLElement} TabHeader - The tab nav element
         * @param {HTMLElement} tabList - The tab list element
         * @param {HTMLElement} ScrollRightBtn - The right scroll button element
         * @param {HTMLElement} ScrollLeftBtn - The left scroll button element
         */

        function overflow(TabHeader, tabList, ScrollRightBtn, ScrollLeftBtn) {
            const cusidEle = tabList.querySelectorAll(".qld__tab-button");
            const menuWidth = TabHeader.clientWidth;
            let totalWidth = 0;
            // Calculate the total width of all the nav items
            for (let i = 0; i < cusidEle.length; i++) {
                totalWidth += cusidEle[i].offsetWidth;
            }
            // If the total width is greater than the menu width, display the right scroll button
            // and scroll the link list to the left by the defined amount
            if (totalWidth > menuWidth) {
                ScrollRightBtn.style.display = "block";
                tabList.scrollLeft -= SCROLL_AMOUNT;
                ScrollLeftBtn.style.display = "none";
            } else {
                ScrollRightBtn.style.display = "none";
                ScrollLeftBtn.style.display = "none";
            }
        }

        

        /**
         * Debounce function to limit the number of times that a function is called
         * @param {function} func - The function to debounce
         * @param {number} wait - The number of milliseconds to wait before calling the function
         */

        function debounce(func, wait) {
            let timeout;
            return function (...args) {
                clearTimeout(timeout);
                timeout = setTimeout(() => func.apply(this, args), wait);
            };
        }

        tab.init = function() {
            // Get all tab components on the page
            const tabComponents = document.querySelectorAll(".qld__tab-container"); 
    
            // Loop through each tab component
            tabComponents.forEach((tabComponent) => {
                // Get all tab heading elements within the tab component
                const tabHeadings = tabComponent.querySelectorAll(".qld__tab-button");
                // Set tab index and aria-selected attributes for the first tab heading and its corresponding content element
                tabHeadings[0].setAttribute("tabindex", "0");
                tabHeadings[0].setAttribute("aria-selected", "true");
                const tabContentId = tabHeadings[0].getAttribute("data-tab");
                const tabContent = tabComponent.querySelector(
                    `.qld__tab-content[data-tab="${tabContentId}"]`
                );
                tabContent.setAttribute("tabindex", "0");
                tabContent.setAttribute("aria-hidden", "false");
                // Add the 'active' class to the first tab heading and its corresponding content element
                tabHeadings[0].classList.add("active");
                tabContent.classList.add("active");
                // Loop through each tab heading element
                tabHeadings.forEach((tabHeading) => {
                    // Attach a click event listener to the tab heading
                    tabHeading.addEventListener("click", (event) => {
                        // Remove the 'active' class from all tab heading and content elements
                        const tabHeadings = tabComponent.querySelectorAll(".qld__tab-button");
                        tabHeadings.forEach((tabHeading) => {
                            tabHeading.classList.remove("active");
                            tabHeading.setAttribute("aria-selected", "false");
                            tabHeading.setAttribute("tabindex", "-1");
                        });
                        const tabContents = tabComponent.querySelectorAll(".qld__tab-content");
                        tabContents.forEach((tabContent) => {
                            tabContent.classList.remove("active");
                            tabContent.setAttribute("aria-hidden", "true");
                            tabContent.setAttribute("tabindex", "-1");
                        });
                        // Add the 'active' class to the clicked tab heading and its corresponding content element
                        event.currentTarget.classList.add("active");
                        event.currentTarget.setAttribute("aria-selected", "true");
                        event.currentTarget.setAttribute("tabindex", "0");
                        const tabContentId = event.currentTarget.getAttribute("data-tab");
                        const tabContent = tabComponent.querySelector(
                            `.qld__tab-content[data-tab="${tabContentId}"]`
                        );
                        tabContent.classList.add("active");
                        tabContent.setAttribute("aria-hidden", "false");
                        tabContent.setAttribute("tabindex", "0");
                    });
                });
    
                let currentTabIndex = 0;
    
                tabHeadings.forEach((tabHeading, index) => {
                    tabHeading.addEventListener("keydown", (event) => {
    
                        // If the key that was pressed was the "Enter" or "Space" key, treat it as if the tab heading was clicked
                        if (event.key === "Enter" || event.key === "Space") {
                            event.preventDefault();
                            event.currentTarget.click();
                        }
                        // If the key that was pressed was the left arrow key, switch to the previous tab if not already on the first tab
                        if (event.key === "ArrowLeft") {
                            if (currentTabIndex > 0) {
                                event.preventDefault();
                                const previousTabHeading = tabHeadings[index - 1];
                                if (previousTabHeading) {
                                    currentTabIndex = index - 1;
                                    previousTabHeading.focus();
                                }
                            }
                        }
                        // If the key that was pressed was the right arrow key, switch to the next tab if not already on the last tab
                        if (event.key === "ArrowRight") {
                            if (currentTabIndex < tabHeadings.length - 1) {
                                event.preventDefault();
                                const nextTabHeading = tabHeadings[index + 1];
                                if (nextTabHeading) {
                                    currentTabIndex = index + 1;
                                    nextTabHeading.focus();
                                }
                            }
                        }
                    });
    
                    // Add a focus and blur event listener to the tab heading
                    tabHeading.addEventListener("focus", (event) => {
                        // Add the 'focused' class on the corresponding tab content element
                        const tabContentId = event.currentTarget.getAttribute("data-tab");
                        const tabContent = tabComponent.querySelector(
                            `.qld__tab-content[data-tab="${tabContentId}"]`
                        );
                        tabContent.classList.add("focused");
                    });
    
                    tabHeading.addEventListener("blur", (event) => {
                        // Remove the 'focused' class on the corresponding tab content element
                        const tabContentId = event.currentTarget.getAttribute("data-tab");
                        const tabContent = tabComponent.querySelector(
                            `.qld__tab-content[data-tab="${tabContentId}"]`
                        );
                        tabContent.classList.remove("focused");
                    });
    
                });
            });

            /*  This script implements horizontal scrolling for fixed tab components on a page. 

                It selects the main nav elements and tab list elements, and defines functions to scroll the tab list element to the left or right.
                It also shows or hides the scroll buttons based on whether the tab list element overflows the main nav element. 
                THe script includes event listeners for the elements to call the appropriate functions when the page loads or is resized, or when the scroll buttons are clicked. 
                It also includes a debounce function to limit the number of times that a function is called. 

            */

            const SCROLL_AMOUNT = 500;
            // Get the main nav elements and the tab list elements
            const TabHeaders = document.getElementsByClassName("qld__tab-container__fixed");
            const tabLists = [];

            for (let i = 0; i < TabHeaders.length; i++) {
                const tabs = TabHeaders[i].getElementsByClassName("qld__tabs");
                tabLists.push(tabs[0]);
            }

            // Attach event listeners to each component

            for (let i = 0; i < TabHeaders.length; i++) {
                const TabHeader = TabHeaders[i];
                const tabList = tabLists[i];
                const ScrollRightBtn = TabHeader.querySelector(
                    ".tab-overflow-nav-button-right"
                );
                const ScrollLeftBtn = TabHeader.querySelector(
                    ".tab-overflow-nav-button-left"
                );
                window.addEventListener("load", () =>
                    overflow(TabHeader, tabList, ScrollRightBtn, ScrollLeftBtn)
                );
                window.addEventListener(
                    "resize",
                    debounce(
                        () => overflow(TabHeader, tabList, ScrollRightBtn, ScrollLeftBtn),
                        250
                    )
                );
                ScrollRightBtn.addEventListener("click", () =>
                    scrollRight(tabList, ScrollRightBtn, ScrollLeftBtn)
                );
                ScrollLeftBtn.addEventListener("click", () =>
                    scrollLeft(tabList, ScrollRightBtn, ScrollLeftBtn)
                );
            }
    
        }

        QLD.tab = tab; 

        window.addEventListener('DOMContentLoaded', function () {
            QLD.tab.init();
        });
}());