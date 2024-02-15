/**
 * Tab module TODO
 */
(function (QLD) {

    // For easy reference
    var keys = {
        end: 35,
        home: 36,
        left: 37,
        up: 38,
        right: 39,
        down: 40,
        delete: 46
    };

    // Add or substract depending on key pressed
    var direction = {
        37: -1,
        38: -1,
        39: 1,
        40: 1
    };

    /**
     * @module tabs
     */
    var tabs = {

        // Vars
        'buttons': null,

        /**
         * Initialise any tab components on the page
         * 
         * @memberof module:tabs
         */
        'init': function() {
            tabs.buttons = QLD.utils.listToArray(document.querySelectorAll('[role="tab"]'));

            // Bind listeners
            for (var i = 0; i < tabs.buttons.length; i++) {
                addListeners(i);
            };
        }
    };

    /**
     * Add event listeners for given tab
     * 
     * @memberof module:tabs
     * @instance
     * @private
     * 
     * @param {number} index 
     */
    function addListeners(index) {
        var tab = tabs.buttons[index];
        tab.addEventListener('click', clickEventListener);
        tab.addEventListener('keydown', keydownEventListener);
        tab.addEventListener('keyup', keyupEventListener);

        // Build an array with all tabs (<button>s) in it
        tab.index = index;
    };

    /**
     * When a tab is clicked, activateTab is fired to activate it
     * 
     * @memberof module:tabs
     * @instance
     * @private
     * 
     * @param {Document.event} event 
     */
    function clickEventListener(event) {
        var tab = event.target;
        activateTab(tab, false);
    };

    /**
     * Handle keydown on tabs
     * 
     * @memberof module:tabs
     * @instance
     * @private
     * 
     * @param {Document.event} event 
     */
    function keydownEventListener(event) {
        var key = event.keyCode;
        var tab = event.target;
        var tablist = tab.parentNode;
        var siblingTabs = QLD.utils.listToArray(tablist.querySelectorAll('[role="tab"]'));
        var firstTab = siblingTabs[0];
        var lastTab = siblingTabs[siblingTabs.length - 1];

        switch (key) {
            case keys.end:
                event.preventDefault();
                // Activate last tab
                activateTab(lastTab);
                break;
            case keys.home:
                event.preventDefault();
                // Activate first tab
                activateTab(firstTab);
                break;

                // Up and down are in keydown
                // because we need to prevent page scroll >:)
            case keys.up:
            case keys.down:
                determineOrientation(event);
                break;
        };
    };

    /**
     * Handle keyup on tabs
     * 
     * @memberof module:tabs
     * @instance
     * @private
     * 
     * @param {Document.event} event 
     */
    function keyupEventListener(event) {
        var key = event.keyCode;

        switch (key) {
            case keys.left:
            case keys.right:
                determineOrientation(event);
                break;
        };
    };

    /**
     * When a tablist's aria-orientation is set to vertical,
     * only up and down arrow should function.
     * In all other cases only left and right arrow function.
     * 
     * @memberof module:tabs
     * @instance
     * @private
     * 
     * @param {Document.event} event 
     */
    function determineOrientation(event) {
        var key = event.keyCode;
        var tab = event.target;
        var tablist = tab.parentNode;
        var vertical = tablist.getAttribute('aria-orientation') == 'vertical';
        var proceed = false;

        if (vertical) {
            if (key === keys.up || key === keys.down) {
                event.preventDefault();
                proceed = true;
            };
        } else {
            if (key === keys.left || key === keys.right) {
                proceed = true;
            };
        };

        if (proceed) {
            switchTabOnArrowPress(event);
        };
    };

    /**
     * Either focus the next, previous, first, or last tab
     * depending on key pressed
     * 
     * @memberof module:tabs
     * @instance
     * @private
     * 
     * @param {Document.event} event 
     */
    function switchTabOnArrowPress(event) {
        var pressed = event.keyCode;
        var tab = event.target;
        var tablist = tab.parentNode;
        var siblingTabs = QLD.utils.listToArray(tablist.querySelectorAll('[role="tab"]'));
        var firstTabIndex = siblingTabs[0].index;

        for (var x = 0; x < siblingTabs.length; x++) {
            siblingTabs[x].addEventListener('focus', focusEventHandler);
        };

        if (direction[pressed]) {
            if (tab.index !== undefined) {
                var newIndex = tab.index - firstTabIndex + direction[pressed];
                if (siblingTabs[newIndex]) {
                    siblingTabs[newIndex].focus();
                } else if (pressed === keys.left || pressed === keys.up) {
                    siblingTabs[0].focus()
                } else if (pressed === keys.right || pressed == keys.down) {
                    siblingTabs[siblingTabs.length - 1].focus();
                };
            };
        };
    };

    /**
     * Activates any given tab panel
     * 
     * @memberof module:tabs
     * @instance
     * @private
     * 
     * @param {Node} tab 
     * @param {boolean} setFocus 
     */
    function activateTab(tab, setFocus) {
        setFocus = setFocus || true;
        // Deactivate all other tabs
        deactivatetabs(tab);

        // Remove tabindex attribute
        tab.removeAttribute('tabindex');

        // Set the tab as selected
        tab.setAttribute('aria-selected', 'true');

        // Get the value of aria-controls (which is an ID)
        var controls = tab.getAttribute('aria-controls');

        // Remove hidden attribute from tab panel to make it visible
        document.getElementById(controls).removeAttribute('hidden');

        // Set focus when required
        if (setFocus) {
            tab.focus();
        };
    };

    /**
     * Deactivate all tabs and tab panels
     * 
     * @memberof module:tabs
     * @instance
     * @private
     */
    function deactivatetabs(tab) {

        var tablist = tab.parentNode;
        var siblingTabs = QLD.utils.listToArray(tablist.querySelectorAll('[role="tab"]'));

        for (var t = 0; t < siblingTabs.length; t++) {
            var tab = siblingTabs[t];
            tab.setAttribute('tabindex', '-1');
            tab.setAttribute('aria-selected', 'false');
            tab.removeEventListener('focus', focusEventHandler);

            var controls = tab.getAttribute('aria-controls');
            var panel = document.getElementById(controls);
            panel.setAttribute('hidden', 'hidden');
        };
    };

    /**
     * Handle focus event on tab
     * 
     * @memberof module:tabs
     * @instance
     * @private
     * 
     * @param {Document.event} event 
     */
    function focusEventHandler(event) {
        var target = event.target;
        setTimeout(checkTabFocus, 300, target);
    };

    /**
     * Check if given tab is currently focused
     * @memberof module:tabs
     * @instance
     * @private
     * 
     * @param {Node} target 
     */
    function checkTabFocus(target) {
        var focused = document.activeElement;

        if (target === focused) {
            activateTab(target, false);
        };
    };

    // Add to global QLD module
    var QLD = QLD ? QLD : {};
    QLD.tabs = tabs;
    window.QLD = QLD;

    // Init tabs
    window.addEventListener('DOMContentLoaded', function () {
        QLD.tabs.init()
    });

}(window.QLD));
