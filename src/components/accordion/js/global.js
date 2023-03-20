/**
 * @module accordion
 */

(function () {

    var accordion = {}

    /**
     * Set the correct Aria roles for given element on the accordion title and body
     * 
     * @memberof module:accordion
     * @instance
     * @private
     * 
     * @param  {object} element - The DOM element we want to set attributes for
     * @param  {object} target  - The DOM element we want to set attributes for
     * @param  {string} state   - The DOM element we want to set attributes for
     */
    function setAriaRoles(element, target, state) {

        if (state === 'closing') {
            element.setAttribute('aria-expanded', false);
        } else {
            element.setAttribute('aria-expanded', true);
        }
    }


    /**
     * IE8 compatible function for replacing classes on a DOM node
     *
     * @memberof module:accordion
     * @instance
     * @private
     * 
     * @param  {object} element      - The DOM element we want to toggle classes on
     * @param  {object} target       - The DOM element we want to toggle classes on
     * @param  {object} state        - The current state of the animation on the element
     * @param  {string} openingClass - The firstClass you want to toggle on the DOM node
     * @param  {string} closingClass - The secondClass you want to toggle on the DOM node
     */
    function toggleClasses(element, state, openingClass, closingClass) {

        if (state === 'opening' || state === 'open') {
            var oldClass = openingClass || 'qld__accordion--closed';
            var newClass = closingClass || 'qld__accordion--open';
        } else {
            var oldClass = closingClass || 'qld__accordion--open';
            var newClass = openingClass || 'qld__accordion--closed';
        }

        removeClass(element, oldClass);
        addClass(element, newClass);
    }


    /**
     * IE8 compatible function for removing a class
     * 
     * @memberof module:accordion
     * @instance
     * @private
     *
     * @param  {object} element   - The DOM element we want to manipulate
     * @param  {object} className - The name of the class to be removed
     */
    function removeClass(element, className) {
        if (element.classList) {
            element.classList.remove(className);
        } else {
            element.className = element.className.replace(new RegExp("(^|\\b)" + className.split(" ").join("|") + "(\\b|$)", "gi"), " ");
        }
    }


    /**
     * IE8 compatible function for adding a class
     * 
     * @memberof module:accordion
     * @instance
     * @private
     *
     * @param  {object} element   - The DOM element we want to manipulate
     * @param  {object} className - The name of the class to be added
     */
    function addClass(element, className) {
        if (element.classList) {
            element.classList.add(className);
        } else {
            element.className = element.className + " " + className;
        }
    }


    /**
     * Toggle an accordion element
     * 
     * @memberof module:accordion
     *
     * @param  {string}  elements  - The DOM node/s to toggle
     * @param  {integer} speed     - The speed in ms for the animation
     * @param  {object}  callbacks - An object of four optional callbacks: { onOpen, afterOpen, onClose, afterClose }
     *
     */
    accordion.Toggle = function (elements, speed, callbacks) {

        // stop event propagation
        try {
            window.event.cancelBubble = true;
            event.stopPropagation();
        } catch (error) {}

        // making sure we can iterate over just one DOM element
        if (elements.length === undefined) {
            elements = [elements];
        }

        // check this once
        if (typeof callbacks != 'object') {
            callbacks = {};
        }

        for (var i = 0; i < elements.length; i++) {

            var element = elements[i];
            var targetId = element.getAttribute('aria-controls');
            var target = document.getElementById(targetId);

            if (target == null) {
                throw new Error(
                    'accordion.Toggle cannot find the target to be toggled from inside aria-controls.\n' +
                    'Make sure the first argument you give accordion.Toggle is the DOM element (a button or a link) that has an aria-controls attribute that points ' +
                    'to a div that you want to toggle.'
                );
            }

            target.style.display = 'block';

            (function (element) {
                QLD.animate.Toggle({
                    element: target,
                    property: 'height',
                    speed: speed || 250,
                    prefunction: function (target, state) {
                        if (state === 'opening') {
                            target.style.display = 'block';

                            // run when opening
                            if (typeof callbacks.onOpen === 'function') {
                                callbacks.onOpen();
                            }
                        } else {
                            // run when closing
                            if (typeof callbacks.onClose === 'function') {
                                callbacks.onClose();
                            }
                        }

                        setAriaRoles(element, target, state);
                        toggleClasses(element, state);
                    },
                    postfunction: function (target, state) {
                        if (state === 'closed') {
                            // run after closing
                            target.style.display = '';
                            target.style.height = '';

                            // GTM event
                            if (typeof(window.dataLayer) !== 'undefined') {
                                window.dataLayer.push({
                                    event: 'accordion closed',
                                    category: 'accordion',
                                    action: 'close',
                                    label: targetId
                                });
                            }

                            if (typeof callbacks.afterClose === 'function') {
                                callbacks.afterClose();
                            }
                        } else {
                            // run after opening
                            target.style.display = '';
                            target.style.height = '';

                            // GTM event
                            if (typeof(window.dataLayer) !== 'undefined') {
                                window.dataLayer.push({
                                    event: 'accordion open',
                                    category: 'accordion',
                                    action: 'open',
                                    label: targetId
                                });
                            }

                            if (typeof callbacks.afterOpen === 'function') {
                                callbacks.afterOpen();
                            }
                        }

                        toggleClasses(target, state);
                    },
                    callback: function (target, state) {

                        const controller = new AbortController();

                        function toggleNavOnDocumentClick(event) {
                            if (!event.target.closest(".qld__main-nav__menu-sub.qld__accordion__body.qld__accordion--open")) {

                                controller.abort();
                                if(elements[0].classList.contains('qld__accordion--open')) {
                                    accordion.Toggle(elements, speed, callbacks);   
                                }
                            }
                        }

                        if (state === "open" || state === "opening") {
                            //if it is a mega nav add an event listener to close it when document is clicked
                            if (this.element.classList.contains("qld__main-nav__menu-sub")) {
                                document.addEventListener(
                                    "click",
                                    toggleNavOnDocumentClick,
                                    { signal: controller.signal }
                                )
                            }
                        } else {
                            if (this.element.classList.contains("qld__main-nav__menu-sub")) {
                                document.removeEventListener(
                                    "click",
                                    toggleNavOnDocumentClick,
                                    { signal: controller.signal }
                                )
                                controller.abort();
                            }
                        }

                    },
                });
            })(element);

        }

        return false;

    }

    /**
     * Toggle all accordion elements
     * 
     * @memberof module:accordion
     *
     * @param  {string}  elements  - The DOM node/s to toggle
     * @param  {integer} speed     - The speed in ms for the animation
     * @param  {object}  callbacks - An object of four optional callbacks: { onOpen, afterOpen, onClose, afterClose }
     *
     */
    accordion.ToggleAll = function (elements, speed, callbacks) {
        // stop event propagation
        try {
            window.event.cancelBubble = true;
            event.stopPropagation();
        } catch (error) {}

        var toogleAllButton = elements;
        // find the accordion wrapper
        var wrapper = toogleAllButton.closest(".qld__accordion-group");
        // get all the accordion buttons
        var accordionButtons =  wrapper.querySelectorAll('.qld__accordion__title');


        // check this once
        if (typeof callbacks != 'object') {
            callbacks = {};
        }

        // Check if opened or closed 
        if(toogleAllButton.classList.contains('qld__accordion__toggle-btn--closed')){
            toogleAllButton.classList.remove('qld__accordion__toggle-btn--closed');
            toogleAllButton.classList.add('qld__accordion__toggle-btn--open');
            toogleAllButton.textContent = "Close all";
            accordion.Open(accordionButtons);
        }else if(toogleAllButton.classList.contains('qld__accordion__toggle-btn--open')){
            toogleAllButton.classList.remove('qld__accordion__toggle-btn--open');
            toogleAllButton.classList.add('qld__accordion__toggle-btn--closed');
            toogleAllButton.textContent = "Open all";
            accordion.Close(accordionButtons);
        }

        return false;
    }


    /**
     * Open a group of accordion elements
     * 
     * @memberof module:accordion
     *
     * @param  {string}  elements - The DOM node/s to toggle
     * @param  {integer} speed    - The speed in ms for the animation
     *
     */
    accordion.Open = function (elements, speed) {

        // stop event propagation
        try {
            window.event.cancelBubble = true;
            event.stopPropagation();
        } catch (error) {}

        if (elements.length === undefined) {
            elements = [elements];
        }

        for (var i = 0; i < elements.length; i++) {

            var element = elements[i];
            var targetId = element.getAttribute('aria-controls');
            var target = document.getElementById(targetId);

            // let’s find out if this accordion is still closed
            var height = 0;
            if (typeof getComputedStyle !== 'undefined') {
                height = window.getComputedStyle(target).height;
            } else {
                height = target.currentStyle.height;
            }

            if (parseInt(height) === 0) {
                target.style.height = '0px';
            }

            target.style.display = '';
            toggleClasses(target, 'opening');
            toggleClasses(element, 'opening');
            setAriaRoles(element, target, 'opening');

            if (typeof(window.dataLayer) !== 'undefined') {
                window.dataLayer.push({
                    event: 'accordion open',
                    category: 'accordion',
                    action: 'close',
                    label: targetId
                });            
            }
            
            (function (target, speed, element) {
                QLD.animate.Run({
                    element: target,
                    property: 'height',
                    endSize: 'auto',
                    speed: speed || 250,
                    callback: function () {
                        toggleClasses(element, 'opening');
                    },
                });
            })(target, speed, element);
        }

    }


    /**
     * Close a group of accordion elements
     * 
     * @memberof module:accordion
     *
     * @param  {string}  elements - The DOM node/s to toggle
     * @param  {integer} speed    - The speed in ms for the animation
     *
     */
    accordion.Close = function (elements, speed) {

        // stop event propagation
        try {
            window.event.cancelBubble = true;
            event.stopPropagation();
        } catch (error) {}

        if (elements.length === undefined) {
            elements = [elements];
        }

        for (var i = 0; i < elements.length; i++) {

            var element = elements[i];
            var targetId = element.getAttribute('aria-controls');
            var target = document.getElementById(targetId);

            toggleClasses(element, 'closing');
            setAriaRoles(element, target, 'closing');
            
            if (typeof(window.dataLayer) !== 'undefined') {
                window.dataLayer.push({
                    event: 'accordion close',
                    category: 'accordion',
                    action: 'close',
                    label: targetId
                });             
            }
            
            (function (target, speed) {
                QLD.animate.Run({
                    element: target,
                    property: 'height',
                    endSize: 0,
                    speed: speed || 250,
                    callback: function () {
                        target.style.display = '';
                        toggleClasses(target, 'close');
                    },
                });
            })(target, speed);
        }

    }

    /**
     * Init the accordion component by adding relevent event listeners
     * 
     * @memberof module:accordion
     */
    accordion.init = function() {

        var accordionButtons = document.querySelectorAll('.qld__accordion__title');
        accordionButtons.forEach(function (button) {
            button.addEventListener('click', function () {
                accordion.Toggle(button)
            });
        });

        var accordionAllButtton = document.querySelectorAll('.qld__accordion__toggle-btn');
        accordionAllButtton.forEach(function (button) {
            button.addEventListener('click', function () {
                accordion.ToggleAll(button)
            });
        });
    }

    // Make accordion public
    QLD.accordion = accordion;

    // Add toggle event listeners to accordion buttons
    window.addEventListener('DOMContentLoaded', function () {
        QLD.accordion.init();
    });

}());