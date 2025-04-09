/**
 * Toggle and tool tip components
 */
(function (QLD) {
    /**
     * @module toggleToolTips
     */
    var toggleToolTips = {
        // Classes relative to the main component
        contentQueryClass: ":nth-child(1)",
        // Positioning variables
        marginFromSide: 16,

        // Function to open the toggle/tool tip
        openToggleToolTip: function (componentName, toggleToolTip, trigger, marginFromTrigger) {
            const content = toggleToolTip.querySelector(this.contentQueryClass);
            const carat = content.nextElementSibling;

            content.classList.remove(componentName + "-hidden");
            content.classList.add(componentName + "-visible");
            if (trigger.getAttribute("aria-expanded")) {
                trigger.setAttribute("aria-expanded", "true");
            }
            toggleToolTip.setAttribute("aria-live", "polite");
            carat.classList.remove(componentName + "-hidden");
            carat.classList.add(componentName + "-visible");
            trigger.classList.add(componentName + "-trigger-active");
            this.positionContentBox(trigger, toggleToolTip, marginFromTrigger);
        },

        // Function to close the toggle/tool tip
        closeToggleToolTip: function (componentName, toggleToolTip, trigger) {
            const content = toggleToolTip.querySelector(this.contentQueryClass);
            const carat = content.nextElementSibling;

            content.classList.remove(componentName + "-visible");
            content.classList.add(componentName + "-hidden");
            if (trigger.getAttribute("aria-expanded")) {
                trigger.setAttribute("aria-expanded", "false");
            }
            toggleToolTip.removeAttribute("aria-live");
            carat.classList.remove(componentName + "-visible");
            carat.classList.add(componentName + "-hidden");
            trigger.classList.remove(componentName + "-trigger-active");
        },

        // Function to close all toggle/tool tips found on the page
        closeAllToggleToolTips: function (componentName, triggers) {
            for (let i = 0; i < triggers.length; i++) {
                const Id = triggers[i].getAttribute("data-target");

                if (!Id) return;

                const toggleToolTip = document.getElementById(Id);
                this.closeToggleToolTip(componentName, toggleToolTip, triggers[i]);
            }
        },

        // Function to get the direction from the metadata provided via class
        getAlignmentDirection: function (content) {
            const alignedClass = "tip-aligned-";
            let direction = null;

            const foundClass = Array.from(content.classList).find((className) => className.includes(alignedClass));

            if (foundClass) {
                const index = foundClass.indexOf(alignedClass);
                direction = foundClass.slice(index + alignedClass.length);
            }

            return direction;
        },

        // Check if the content box is overlapping the ALL sides of the screen
        doesElementOverlapAnySide: function (content) {
            const contentDimensions = content.getBoundingClientRect();
            return !(
                contentDimensions.top >= this.marginFromSide &&
                contentDimensions.left >= this.marginFromSide &&
                contentDimensions.bottom + this.marginFromSide <= document.documentElement.clientHeight &&
                contentDimensions.right + this.marginFromSide <= document.documentElement.clientWidth
            );
        },

        // Check if the content box is overlapping with the left and right sides of the screen
        doesElementOverlapScreenX: function (element) {
            const contentDimensions = element.getBoundingClientRect();
            return !(contentDimensions.left >= this.marginFromSide && contentDimensions.right + this.marginFromSide <= document.documentElement.clientWidth);
        },

        // Check if the content box is overlapping with the left and right sides of the screen
        doesElementOverlapScreenY: function (element) {
            const contentDimensions = element.getBoundingClientRect();
            return !(contentDimensions.top >= this.marginFromSide && contentDimensions.bottom + this.marginFromSide <= document.documentElement.clientHeight);
        },

        // Check if the content box is closer to the left of the screen
        elementCloserToLeft: function (element) {
            const contentDimensions = element.getBoundingClientRect();
            const screenCenter = document.documentElement.clientWidth / 2;
            return contentDimensions.left + contentDimensions.width / 2 < screenCenter;
        },

        // Check if the content box is closer to the top of the screen
        elementCloserToTop: function (element) {
            const contentDimensions = element.getBoundingClientRect();
            const screenCenter = document.documentElement.clientHeight / 2;
            return contentDimensions.top + contentDimensions.height / 2 < screenCenter;
        },

        // Function to position the content box dynamically based off the trigger
        positionContentBox: function (trigger, toggleToolTip, marginFromTrigger) {
            const toggleToolTipDimensions = toggleToolTip.getBoundingClientRect();
            const content = toggleToolTip.querySelector(this.contentQueryClass);
            const carat = content.nextElementSibling;
            const triggerDimensions = trigger.getBoundingClientRect();
            const triggerFromTop = triggerDimensions.top + window.scrollY;
            const contentFromTop = toggleToolTipDimensions.top + window.scrollY;
            const contentFromTriggerY = triggerFromTop - contentFromTop;
            const triggerFromLeft = triggerDimensions.left + window.scrollX;
            const contentFromLeft = toggleToolTipDimensions.left + window.scrollX;
            const contentFromTriggerX = triggerFromLeft - contentFromLeft;
            const contentMarginFromTrigger = marginFromTrigger + carat.offsetWidth / 2;
            const direction = this.getAlignmentDirection(content);

            this.positionCarat(trigger, toggleToolTipDimensions, carat, direction, marginFromTrigger);

            if (direction === "top") {
                content.style.left = `${contentFromTriggerX - content.offsetWidth / 2 + triggerDimensions.width / 2}px`;
                content.style.top = `${contentFromTriggerY - content.offsetHeight - contentMarginFromTrigger}px`;

                if (this.doesElementOverlapAnySide(content)) {
                    this.checkAlternativesForTopPosition(trigger, toggleToolTipDimensions, content, carat, marginFromTrigger, contentMarginFromTrigger);
                }
            } else if (direction === "bottom") {
                content.style.left = `${contentFromTriggerX - content.offsetWidth / 2 + triggerDimensions.width / 2}px`;
                content.style.top = `${contentFromTriggerY + triggerDimensions.height + contentMarginFromTrigger}px`;

                if (this.doesElementOverlapAnySide(content)) {
                    this.checkAlternativesForBottomPosition(trigger, toggleToolTipDimensions, content, carat, marginFromTrigger, contentMarginFromTrigger);
                }
            } else if (direction === "left") {
                content.style.left = `${contentFromTriggerX - content.offsetWidth - contentMarginFromTrigger}px`;
                content.style.top = `${contentFromTriggerY - content.offsetHeight / 2 + triggerDimensions.height / 2}px`;

                if (this.doesElementOverlapAnySide(content)) {
                    this.checkAlternativesForLeftPosition(trigger, toggleToolTipDimensions, content, carat, marginFromTrigger, contentMarginFromTrigger);
                }
            } else if (direction === "right") {
                content.style.left = `${contentFromTriggerX + triggerDimensions.width + contentMarginFromTrigger}px`;
                content.style.top = `${contentFromTriggerY - content.offsetHeight / 2 + triggerDimensions.height / 2}px`;

                if (this.doesElementOverlapAnySide(content)) {
                    this.checkAlternativesForRightPosition(trigger, toggleToolTipDimensions, content, carat, marginFromTrigger, contentMarginFromTrigger);
                }
            }
        },

        // If the toggle/tool tip is positioned top, we want to try sliding or inverting the content box
        checkAlternativesForTopPosition: function (trigger, toggleToolTipDimensions, content, carat, marginFromTrigger, contentMarginFromTrigger) {
            const triggerDimensions = trigger.getBoundingClientRect();
            const contentDimensions = content.getBoundingClientRect();
            const triggerFromTop = triggerDimensions.top + window.scrollY;
            const contentFromTop = toggleToolTipDimensions.top + window.scrollY;
            const contentFromTriggerY = triggerFromTop - contentFromTop;
            const triggerFromLeft = triggerDimensions.left + window.scrollX;
            const contentFromLeft = toggleToolTipDimensions.left + window.scrollX;
            const contentFromTriggerX = triggerFromLeft - contentFromLeft;

            if (this.doesElementOverlapScreenY(content, this.marginFromSide)) {
                content.style.top = `${contentFromTriggerY + triggerDimensions.height + contentMarginFromTrigger}px`;
                this.positionCarat(trigger, toggleToolTipDimensions, carat, "bottom", marginFromTrigger);
            }

            if (this.doesElementOverlapScreenX(content, this.marginFromSide)) {
                // Compare the element's position to the center
                if (this.elementCloserToLeft(content)) {
                    content.style.left = `${this.marginFromSide - toggleToolTipDimensions.left}px`;
                } else {
                    content.style.left = `${contentFromTriggerX - triggerDimensions.left + document.documentElement.clientWidth - contentDimensions.width - this.marginFromSide}px`;
                }
            }
        },

        // If the toggle/tool tip is positioned bottom, we want to try sliding or inverting the content box
        checkAlternativesForBottomPosition: function (trigger, toggleToolTipDimensions, content, carat, marginFromTrigger, contentMarginFromTrigger) {
            const triggerDimensions = trigger.getBoundingClientRect();
            const contentDimensions = content.getBoundingClientRect();
            const triggerFromTop = triggerDimensions.top + window.scrollY;
            const contentFromTop = toggleToolTipDimensions.top + window.scrollY;
            const contentFromTriggerY = triggerFromTop - contentFromTop;
            const triggerFromLeft = triggerDimensions.left + window.scrollX;
            const contentFromLeft = toggleToolTipDimensions.left + window.scrollX;
            const contentFromTriggerX = triggerFromLeft - contentFromLeft;

            if (this.doesElementOverlapScreenY(content, this.marginFromSide)) {
                content.style.top = `${contentFromTriggerY - content.offsetHeight - contentMarginFromTrigger}px`;
                this.positionCarat(trigger, toggleToolTipDimensions, carat, "top", marginFromTrigger);
            }

            if (this.doesElementOverlapScreenX(content)) {
                // Compare the element's position to the center
                if (this.elementCloserToLeft(content)) {
                    content.style.left = `${this.marginFromSide - toggleToolTipDimensions.left}px`;
                } else {
                    content.style.left = `${contentFromTriggerX - triggerDimensions.left + document.documentElement.clientWidth - contentDimensions.width - this.marginFromSide}px`;
                }
            }
        },

        // If the toggle/tool tip is positioned left, we want to try sliding or inverting the content box
        checkAlternativesForLeftPosition: function (trigger, toggleToolTipDimensions, content, carat, marginFromTrigger, contentMarginFromTrigger) {
            const triggerDimensions = trigger.getBoundingClientRect();
            const contentDimensions = content.getBoundingClientRect();
            const triggerFromTop = triggerDimensions.top + window.scrollY;
            const contentFromTop = toggleToolTipDimensions.top + window.scrollY;
            const contentFromTriggerY = triggerFromTop - contentFromTop;
            const triggerFromLeft = triggerDimensions.left + window.scrollX;
            const contentFromLeft = toggleToolTipDimensions.left + window.scrollX;
            const contentFromTriggerX = triggerFromLeft - contentFromLeft;

            if (this.doesElementOverlapScreenX(content)) {
                content.style.left = `${contentFromTriggerX + triggerDimensions.width + contentMarginFromTrigger}px`;
                this.positionCarat(trigger, toggleToolTipDimensions, carat, "right", marginFromTrigger);
            }

            if (this.doesElementOverlapScreenY(content, this.marginFromSide)) {
                // Compare the element's position to the center
                if (this.elementCloserToTop(content)) {
                    content.style.top = `${this.marginFromSide - toggleToolTipDimensions.top}px`;
                } else {
                    content.style.top = `${contentFromTriggerY - triggerDimensions.top + document.documentElement.clientHeight - contentDimensions.height - this.marginFromSide}px`;
                }
            }

            // For the specific case on mobile where the tool tip cannot fit on BOTH sides
            if (this.doesElementOverlapScreenX(content)) {
                content.style.left = `${contentFromTriggerX - content.offsetWidth / 2 + triggerDimensions.width / 2}px`;
                content.style.top = `${contentFromTriggerY - content.offsetHeight - contentMarginFromTrigger}px`;
                this.positionCarat(trigger, toggleToolTipDimensions, carat, "top", marginFromTrigger);
            }
        },

        // If the toggle/tool tip is positioned right, we want to try sliding or inverting the content box
        checkAlternativesForRightPosition: function (trigger, toggleToolTipDimensions, content, carat, marginFromTrigger, contentMarginFromTrigger) {
            const triggerDimensions = trigger.getBoundingClientRect();
            const contentDimensions = content.getBoundingClientRect();
            const triggerFromTop = triggerDimensions.top + window.scrollY;
            const contentFromTop = toggleToolTipDimensions.top + window.scrollY;
            const contentFromTriggerY = triggerFromTop - contentFromTop;
            const triggerFromLeft = triggerDimensions.left + window.scrollX;
            const contentFromLeft = toggleToolTipDimensions.left + window.scrollX;
            const contentFromTriggerX = triggerFromLeft - contentFromLeft;

            if (this.doesElementOverlapScreenX(content)) {
                content.style.left = `${contentFromTriggerX - content.offsetWidth - contentMarginFromTrigger}px`;
                this.positionCarat(trigger, toggleToolTipDimensions, carat, "left", marginFromTrigger);
            }

            if (this.doesElementOverlapScreenY(content, this.marginFromSide)) {
                // Compare the element's position to the center
                if (this.elementCloserToTop(content)) {
                    content.style.top = `${this.marginFromSide - toggleToolTipDimensions.top}px`;
                } else {
                    content.style.top = `${contentFromTriggerY - triggerDimensions.top + document.documentElement.clientHeight - contentDimensions.height - this.marginFromSide}px`;
                }
            }

            // For the specific case on mobile where the tool tip cannot fit on BOTH sides
            if (this.doesElementOverlapScreenX(content)) {
                content.style.left = `${contentFromTriggerX - content.offsetWidth / 2 + triggerDimensions.width / 2}px`;
                content.style.top = `${contentFromTriggerY - content.offsetHeight - contentMarginFromTrigger}px`;
                this.positionCarat(trigger, toggleToolTipDimensions, carat, "top", marginFromTrigger);
            }
        },

        // Function to position the carat based off the direction provided
        positionCarat: function (trigger, toggleToolTipDimensions, carat, direction, marginFromTrigger) {
            const triggerDimensions = trigger.getBoundingClientRect();
            const caratWidth = carat.offsetWidth / 2;
            const caratHeight = carat.offsetHeight / 2;
            const triggerFromTop = triggerDimensions.top + window.scrollY;
            const caratFromTop = toggleToolTipDimensions.top + window.scrollY;
            const caratFromTriggerY = triggerFromTop - caratFromTop;
            const triggerFromLeft = triggerDimensions.left + window.scrollX;
            const caratFromLeft = toggleToolTipDimensions.left + window.scrollX;
            const caratFromTriggerX = triggerFromLeft - caratFromLeft;
            let caratTopPosition = 0;
            let caratLeftPosition = 0;

            if (direction === "top") {
                caratLeftPosition = caratFromTriggerX + triggerDimensions.width / 2 - caratWidth;
                caratTopPosition = caratFromTriggerY - caratHeight - marginFromTrigger;
                carat.style.transform = "rotate(180deg)";
            } else if (direction === "bottom") {
                caratLeftPosition = caratFromTriggerX + triggerDimensions.width / 2 - caratWidth;
                caratTopPosition = caratFromTriggerY - caratHeight + triggerDimensions.height + marginFromTrigger;
                carat.style.transform = "rotate(0deg)";
            } else if (direction === "left") {
                caratLeftPosition = caratFromTriggerX - caratWidth - marginFromTrigger;
                caratTopPosition = caratFromTriggerY + triggerDimensions.height / 2 - caratHeight;
                carat.style.transform = "rotate(90deg)";
            } else if (direction === "right") {
                caratLeftPosition = caratFromTriggerX + triggerDimensions.width - caratWidth + marginFromTrigger;
                caratTopPosition = caratFromTriggerY + triggerDimensions.height / 2 - caratHeight;
                carat.style.transform = "rotate(270deg)";
            }

            // Set positioning style of the content box
            carat.style.left = `${caratLeftPosition}px`;
            carat.style.top = `${caratTopPosition}px`;
        },
    };

    // Add to global QLD module
    var QLD = QLD ? QLD : {};
    QLD.toggleToolTips = toggleToolTips;
    window.QLD = QLD;
})(window.QLD);
