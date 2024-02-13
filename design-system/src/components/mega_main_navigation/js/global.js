(function () {
   
    /**
     * The mega menu module
     * 
     * @module megaMenu
     */
    var megaMenu = {

        /**
         * Initialise the mega menu listeners for keyboard navigation
         * 
         * @memberof module:megaMenu
         */
        'init': function () {

            // Top level items
            var topNavItems = document.querySelectorAll('.qld__main-nav__item-title > a');
            topNavItems.forEach(function (item) {
                item.addEventListener('keydown', handleTopNavKeydown);
                item.addEventListener('focusin', toggleMenu);
                item.addEventListener('focusout', handleTopNavFocusout);
            });

            // Mega menu items
            var menuItems = document.querySelectorAll('.qld__main-nav__menu-sub a');
            menuItems.forEach(function (item) {
                item.addEventListener('keydown', handleMenuKeypress);
            });
        
        },

    };

    /**
     * Handle keydown on top level nav item to close the menu
     * if ESCAPE or UP key are pressed
     * 
     * @memberof module:megaMenu
     * @instance
     * @private
     * 
     * @param {Document.event} e 
     */
    function handleTopNavKeydown(e) {
        var key = e.keyCode;

        // ESC or UP ARROW
        if (key === 27 || key == 38) {
            toggleMenu(e);
        }
    }

    /**
     * Handle focusout of top level nav items.
     * Close the menu, unless we have tabbed within
     * 
     * @memberof module:megaMenu
     * @instance
     * @private
     * 
     * @param {Document.event} e 
     */
    function handleTopNavFocusout(e) {
        var link = e.target;
        var navItem = link.closest('.qld__main-nav__item');
        var expanded = navItem.classList.contains('expanded') ? true : false;
        var menu = navItem.querySelector('.qld__main-nav__menu-sub');
        
        // Short delay to ensure we are on the new active element
        // Close the menu, unless we have tabbed within
        setTimeout(function() {
            var menuHasFocus = menu.contains(document.activeElement) ? true : false;
            if (!menuHasFocus && expanded) {
                toggleMenu(e);
            }
        }, 20);
    }

    /**
     * Toggle the mega menu open/closed
     * 
     * @memberof module:megaMenu
     * @instance
     * @private
     * 
     * @param {Document.event} e 
     */
    function toggleMenu(e) {
        var link = e.target;
        var navItem = link.closest('.qld__main-nav__item');
        var expanded = navItem.classList.contains('expanded') ? true : false;

        if (!expanded) {
            navItem.classList.add('expanded');
            setTimeout(function() {
                document.addEventListener('click', handleBackgroundClick);
            }, 30);
        } else {
            navItem.classList.remove('expanded');
            document.removeEventListener('click', handleBackgroundClick);
        }
    }

    /**
     * Close the mega menu if the user clicks outside of it while opened
     * 
     * @memberof module:megaMenu
     * @instance
     * @private
     * 
     * @param {Document.event} e 
     */
    function handleBackgroundClick(e) {
        var target = e.target;
        var nav = document.querySelector('.qld__main-nav__menu-inner');

        // If clicked outside nav
        if (!nav.contains(target)) {

            // Close any expanded menu(s)
            document.querySelectorAll('.qld__main-nav__item.expanded').forEach(function(item) {
                item.classList.remove('expanded');
            });

            // Remove listener
            document.removeEventListener('click', handleBackgroundClick);
        }
    }

    /**
     * Handle keypress for item within mega menu.
     * Close the menu on press of ESCAPE or UP
     * After TAB press, check if focus is still within menu,
     * and close if it's not
     * 
     * @memberof module:megaMenu
     * @instance
     * @private
     * 
     * @param {Document.event} e 
     */
    function handleMenuKeypress(e) {
        var link = e.target;
        var key = e.keyCode;
        var navItem = link.closest('.qld__main-nav__item');
        var menu = link.closest('.qld__main-nav__menu-sub');

        // ESC or UP ARROW
        if (key === 27 || key == 38) {
            navItem.querySelector('.qld__main-nav__item-title > a').focus();
        }

        // If TAB key is pressed only (not SHIFT + TAB)
        if (key === 9 && !e.shiftKey) {
            setTimeout(function() {
                var menuHasFocus = menu.contains(document.activeElement) ? true : false;
                if (!menuHasFocus) {
                    toggleMenu(e);
                }
            }, 20);
        }
        
    }

    window.addEventListener('DOMContentLoaded', function () {
        megaMenu.init();
    });

}());
