/**
 * @module header
 */
(function () {

    // Search toggle button
    var searchToggle = document.querySelector('.qld__main-nav__toggle-search');
    var searchForm = document.querySelector('.qld__header__search .qld__search-form');

    // Global events object
    var headerSearchEvents = {};

    // Add action so the search works only if JS is enabled
    if (searchForm) {
        searchForm.querySelector('.qld__btn--search').setAttribute('type', 'submit');
        searchForm.querySelectorAll('.qld__btn--search, .qld__text-input').forEach((el) => {
            el.removeAttribute('disabled');
        });
        checkHoneypot();
    }

    // Add event listener to search toggle button
    if (searchToggle) {
        searchToggle.addEventListener('click', toggleHeaderSearch);
    }

    /**
     * Check if honeypot field is empty
     * 
     * @memberof module:header
     * @instance
     * @private
     */
    function checkHoneypot() {
        var honeypot = searchForm.querySelector('.qld__text-input--validation');
        honeypot.value = '';

        searchForm.addEventListener('submit', function(event) {
            // Prevent form submission if the honeypot field is filled
            if (honeypot.value !== '') {
                event.preventDefault(); // Stop the form submission
            } else {
                honeypot.removeAttribute('name');
            }
        });
    }

    function updateImageSource() {
        var imageElement = document.querySelector('.qld__header__secondary-image');
        if (window.innerWidth <= 991) {
            imageElement.src = `./?a=${site.metadata.siteLogoSecondaryMobile.value}`;
        } else {
            imageElement.src = `./?a=${site.metadata.siteLogoSecondary.value}`;
        }
    }
    
    // Run the function on window resize
    window.addEventListener('resize', updateImageSource);
    
    // Run the function on page load
    document.addEventListener('DOMContentLoaded', updateImageSource);

    /**
     * Toggle the header search on mobile/tablet
     * 
     * @memberof module:header
     * @instance
     * @private
     */
    function toggleHeaderSearch() {

        var targetId = searchToggle.getAttribute('aria-controls');
        var target = document.getElementById(targetId);
        var focustrapTop = target.querySelector('.qld__main-nav__focus-trap-top');
        var focustrapBottom = target.querySelector('.qld__main-nav__focus-trap-bottom');
        var isExpanded = searchToggle.getAttribute('aria-expanded');

        // Open menu
        if (isExpanded === "false") {

            searchToggle.setAttribute('aria-expanded', true);
            searchToggle.classList.remove('qld__main-nav__toggle-search--open');
            searchToggle.classList.add('qld__main-nav__toggle-search--close');
            searchToggle.querySelector('.qld__main-nav__toggle-text').innerHTML = 'Close';
            target.style.display = "block";
            
            // Wait for display: block, and then add class to open smoothly
            setTimeout(function() {
                target.classList.add('qld__main-nav__search--open');
                target.querySelector('.qld__text-input').focus();

                // Close header search on click outside
                headerSearchEvents.background = addEvent(document, 'click', function() {
                    var event = event || window.event;
    
                    if (!target.contains(event.target)) {
                        console.log('toggling');
                        toggleHeaderSearch();
                    }
                });
            }, 0);

            // Focus trap enabled
            focustrapTop.setAttribute('tabindex', 0);
            focustrapBottom.setAttribute('tabindex', 0);

            // Add focus listeners
            headerSearchEvents.focusTop = addEvent(focustrapTop, 'focus', function() {
                target.querySelector('button').focus();
            });
            headerSearchEvents.focusBottom = addEvent(focustrapBottom, 'focus', function() {
                target.querySelector('input').focus();
            });

            // Close header search if burger menu opened
            var menuToggle = document.querySelector('button[aria-controls="main-nav"]');
            headerSearchEvents.menu = addEvent(menuToggle, 'click', function() {
                toggleHeaderSearch();
            });
            
            // Add key listener
            headerSearchEvents.escKey = addEvent(document, 'keyup', function() {
                var event = event || window.event;

                // Check the menu is open and visible and the escape key is pressed
                if (event.keyCode === 27 ) {
                    toggleHeaderSearch();
                }
            });
            

        // Close menu
        } else {

            searchToggle.setAttribute('aria-expanded', false);
            searchToggle.classList.remove('qld__main-nav__toggle-search--close');
            searchToggle.classList.add('qld__main-nav__toggle-search--open');
            searchToggle.querySelector('.qld__main-nav__toggle-text').innerHTML = 'Search';
            searchToggle.focus();
            target.classList.remove('qld__main-nav__search--open');
            target.style.display = "none";

            // Remove the focus trap
            focustrapTop.removeAttribute('tabindex');
            focustrapBottom.removeAttribute('tabindex');

            // Remove the event listeners
            removeEvent(headerSearchEvents.focusTop);
            removeEvent(headerSearchEvents.focusBottom);
            removeEvent(headerSearchEvents.background);
            removeEvent(headerSearchEvents.menu);
            removeEvent(headerSearchEvents.escKey);
        }
    }

    /**
     * Object representing an event listener
     * 
     * @typedef {Object} event
     * @property {Node} element             Element the event is attached to
     * @property {function} handler         Event handler function
     * @property {document#event} event     DOM event to listen for
     */

    /**
     * Add event listener
     * 
     * @memberof module:header
     * @instance
     * @private
     * 
     * @param {Node} element            DOM element to add event to
     * @param {document#event} event    The event to listen for
     * @param {function} rawHandler     The raw handler function
     * @return {event}
     */
    function addEvent(element, event, rawHandler) {
        // Using local functions instead of anonymous for event handler
        function listenHandler(event) {
            var handler = rawHandler.apply(this, arguments);
            if (handler === false) {
                event.stopPropagation();
                event.preventDefault();
            }
            return (handler);
        }

        // Make sure attachHandler is also going to work
        function attachHandler() {
            var handler = rawHandler.call(element, window.event);
            if (handler === false) {
                window.event.returnValue = false;
                window.event.cancelBubble = true;
            }
            return (handler);
        }

        // Return the token and add the correct listener
        if (element.addEventListener) {
            element.addEventListener(event, listenHandler, false);
            return {
                element: element,
                handler: listenHandler,
                event: event
            };
        } else {
            element.attachEvent('on' + event, attachHandler);
            return {
                element: element,
                handler: attachHandler,
                event: event
            };
        }
    }


    /**
     * Remove event listener
     * 
     * @memberof module:header
     * @instance
     * @private
     * 
     * @param {event} token     The event to remove
     */
    function removeEvent(token) {
        if (token.element.removeEventListener) {
            token.element.removeEventListener(token.event, token.handler);
        } else {
            token.element.detachEvent('on' + token.event, token.handler);
        }
    }
    
})();