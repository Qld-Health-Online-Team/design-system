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

    "use strict";

    /**
     * @module tab
     */

    /**
     * Initialise all embedded facility maps on a particular page
     *
     * @memberof module:tab
     */

    var tab = {};
    const SCROLL_AMOUNT = 500;

    /**
     * The functions below scroll the tab list to the left or right by the defined scroll amount
     * @param {HTMLElement} tabList - The tab list element to scroll
     */

    function scrollRight(tabList, ScrollRightBtn, ScrollLeftBtn) {
        // Check if the current scroll position is at the maximum scroll position
        if (
            tabList.scrollLeft + SCROLL_AMOUNT >=
            tabList.scrollWidth - tabList.clientWidth
        ) {
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

    function updateNavLinks() {
        const tabs = document.querySelectorAll(".qld__tab-content");

        for (let tab of tabs) {
            const links = tab.querySelectorAll(".qld__inpage-nav-links li a");

            if (!links) return;

            links.forEach((link) => {
                let targetId = link.getAttribute("href");
                targetId = correctSelectors(targetId);
                let targetElement = tab.querySelector(targetId);

                if (!targetElement) {
                    link.parentElement.remove();
                }
            });
        }

        window.removeEventListener("scroll");
    }

    function correctSelectors(selector) {
        if (!selector) return "";
        const specialChars = [
            "!",
            '"',
            "$",
            "%",
            "&",
            "'",
            "(",
            ")",
            "*",
            "+",
            ",",
            ".",
            "/",
            ":",
            ";",
            "<",
            "=",
            ">",
            "?",
            "@",
            "[",
            "\\",
            "]",
            "^",
            "`",
            "{",
            "|",
            "}",
            "~",
        ];
        const regex = new RegExp(`([${specialChars.join("\\")}])`, "g");
        return selector.replace(regex, "\\$1");
    }

    function tabFixInitializer() {
        let buttons = document.getElementsByClassName("qld__tab-button");
        for (let button of buttons) {
            updateNavLinks();
            button.addEventListener("click", () => {
                updateNavLinks();
            });
        }
    }

    tab.init = function () {
        // Get all tab components on the page
        const tabComponents = document.querySelectorAll(".qld__tab-container");

        // Loop through each tab component
        tabComponents.forEach((tabComponent) => {
            // Get all tab heading elements within the tab component
            const tabHeadings =
                tabComponent.querySelectorAll(".qld__tab-button");

            // Set tab index and aria-selected attributes for the first tab heading and its corresponding content element
            if (tabHeadings.length) {
                tabHeadings[0].setAttribute("tabindex", "0");
                tabHeadings[0].setAttribute("aria-selected", "true");
                const tabContentId = tabHeadings[0].getAttribute("data-tab");
                tabHeadings[0].classList.add("active");

                const tabContent = tabComponent.querySelector(
                    `.qld__tab-content[data-tab="${tabContentId}"]`
                );

                if (tabContent.length) {
                    tabContent.setAttribute("tabindex", "0");
                    tabContent.setAttribute("aria-hidden", "false");
                    tabContent.classList.add("active");
                }
            }

            // Add the 'active' class to the first tab heading and its corresponding content element

            // Loop through each tab heading element
            tabHeadings.forEach((tabHeading) => {
                // Attach a click event listener to the tab heading
                tabHeading.addEventListener("click", (event) => {
                    // Remove the 'active' class from all tab heading and content elements
                    const tabHeadings =
                        tabComponent.querySelectorAll(".qld__tab-button");
                    tabHeadings.forEach((tabHeading) => {
                        tabHeading.classList.remove("active");
                        tabHeading.setAttribute("aria-selected", "false");
                        tabHeading.setAttribute("tabindex", "-1");
                    });
                    const tabContents =
                        tabComponent.querySelectorAll(".qld__tab-content");
                    tabContents.forEach((tabContent) => {
                        tabContent.classList.remove("active");
                        tabContent.setAttribute("aria-hidden", "true");
                        tabContent.setAttribute("tabindex", "-1");
                    });
                    // Add the 'active' class to the clicked tab heading and its corresponding content element
                    event.currentTarget.classList.add("active");
                    event.currentTarget.setAttribute("aria-selected", "true");
                    event.currentTarget.setAttribute("tabindex", "0");
                    const tabContentId =
                        event.currentTarget.getAttribute("data-tab");
                    const tabContent = tabComponent.querySelector(
                        `.qld__tab-content[data-tab="${tabContentId}"]`
                    );
                    tabContent.classList.add("active");
                    tabContent.setAttribute("aria-hidden", "false");
                    tabContent.setAttribute("tabindex", "0");
                });
            });

            let currentTabIndex = 0; // Track the current tab index globally

            tabHeadings.forEach((tabHeading, index) => {
                // Keydown event for arrow navigation
                tabHeading.addEventListener("keydown", (event) => {
                    if (event.key === "Enter" || event.key === "Space") {
                        event.preventDefault();
                        event.currentTarget.click();
                    } else if (event.key === "ArrowLeft") {
                        event.preventDefault();
                        // Navigate to the previous tab
                        currentTabIndex =
                            (currentTabIndex - 1 + tabHeadings.length) %
                            tabHeadings.length;
                        setFocusOnTab(currentTabIndex);
                    } else if (event.key === "ArrowRight") {
                        event.preventDefault();
                        // Navigate to the next tab
                        currentTabIndex =
                            (currentTabIndex + 1) % tabHeadings.length;
                        setFocusOnTab(currentTabIndex);
                    }
                });

                // Focus event to sync currentTabIndex
                tabHeading.addEventListener("focus", (event) => {
                    const tabIndex = Array.from(tabHeadings).indexOf(
                        event.currentTarget
                    );
                    currentTabIndex = tabIndex; // Update the global index

                    const tabContentId =
                        event.currentTarget.getAttribute("data-tab");
                    const tabContent = tabComponent.querySelector(
                        `.qld__tab-content[data-tab="${tabContentId}"]`
                    );
                    if (tabContent) tabContent.classList.add("focused");
                });

                // Blur event to remove focused class
                tabHeading.addEventListener("blur", (event) => {
                    const tabContentId =
                        event.currentTarget.getAttribute("data-tab");
                    const tabContent = tabComponent.querySelector(
                        `.qld__tab-content[data-tab="${tabContentId}"]`
                    );
                    if (tabContent) tabContent.classList.remove("focused");
                });
            });

            // Function to apply focus and delay the update of currentTabIndex
            function setFocusOnTab(index, tabHeadings) {
                // Check if tabHeadings is valid and has elements
                if (tabHeadings && tabHeadings.length > 0) {
                    // Ensure the index is within bounds
                    index = (index + tabHeadings.length) % tabHeadings.length;

                    setTimeout(() => {
                        const nextTabHeading = tabHeadings[index];
                        nextTabHeading.focus();
                    }, 50);
                }
            }
        });

        /*  This script implements horizontal scrolling for fixed tab components on a page.

                It selects the main nav elements and tab list elements, and defines functions to scroll the tab list element to the left or right.
                It also shows or hides the scroll buttons based on whether the tab list element overflows the main nav element.
                THe script includes event listeners for the elements to call the appropriate functions when the page loads or is resized, or when the scroll buttons are clicked.
                It also includes a debounce function to limit the number of times that a function is called.

            */

        // Get the main nav elements and the tab list elements
        const TabHeaders = document.getElementsByClassName(
            "qld__tab-container__fixed"
        );
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
                    () =>
                        overflow(
                            TabHeader,
                            tabList,
                            ScrollRightBtn,
                            ScrollLeftBtn
                        ),
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
    };

    QLD.tab = tab;

    window.addEventListener("DOMContentLoaded", function () {
        QLD.tab.init();
        tabFixInitializer();
    });
    window.addEventListener("scroll", () => {
        tabFixInitializer();
    });
})();
