/**
 * Modal module
 */
 (function (QLD) {

    /**
     * @module Modal
     */
    var Modal = {

        // Vars
        'events': {},
        'callbackFns': {},

        /**
         * Initialise a specific modal
         * 
         * @memberof module:Modal
         * 
         * @param {Node} modalBtn The modal button element
         */
        'init': function(modalBtn) {

            // Init single modal btn
            if (typeof(modalBtn) !== 'undefined') {
                modalBtn.addEventListener('click', Modal.open);

            // Else init all modal buttons on the page
            } else {
                var modalBtns = document.querySelectorAll('.qld__open-modal');
                modalBtns.forEach((modalBtn) => {
                    modalBtn.addEventListener('click', Modal.open);
                });
            }
        },

        /**
         * Open the modal
         * 
         * @memberof module:Modal
         * 
         * @param {Document.event} e 
         */
        'open': function(e) {
            let modalOpenBtn = e.currentTarget ? e.currentTarget : null;

            if(modalOpenBtn !== null) {
                var modalTarget = modalOpenBtn.getAttribute('data-modaltarget');
                var modalEl = document.querySelector(`#${modalTarget}`);
                var modalCloseBtns = modalEl.querySelectorAll('button[data-action="close"]');
                var modalUnderlay = modalEl.querySelector('.qld__modal__underlay');
            } else {
                var modalEl = e.get(0);
                var modalCloseBtns = modalEl.querySelectorAll('button[data-action="close"], button[data-action="deny-location"]');
                var modalUnderlay = modalEl.querySelector('.qld__modal__underlay');
            }

            

            // trap focus
            // add all the elements inside modal that are focusable
            let focusableElements = 'button, [href], input, select, textarea, [tabindex]:not([tabindex="-1"])';
            let firstFocusableElement = modalEl.querySelectorAll(focusableElements)[0]; // get first element to be focused inside modal
            let focusableContent = modalEl.querySelectorAll(focusableElements);
            let lastFocusableElement = focusableContent[focusableContent.length - 1]; // get last element to be focused inside modal

            // Add keydown listener
            Modal.events.keydown = Modal.addEvent(document, 'keydown', function(e) {
                // ESC
                if (e.keyCode === 27) {
                    modalOpenBtn.focus();
                    Modal.close(e);
                    return;
                }

                let isTabPressed = e.key === 'Tab' || e.keyCode === 9;

                if (!isTabPressed) {
                    return;
                }

                if (e.shiftKey) { // if shift key pressed for shift + tab combination
                    if (document.activeElement === firstFocusableElement || document.activeElement === modalEl) {
                        lastFocusableElement.focus(); // add focus for the last focusable element
                        e.preventDefault();
                    }
                } else { // if tab key is pressed
                    if (document.activeElement === lastFocusableElement) { // if focused has reached to last focusable element then focus first focusable element after pressing tab
                        firstFocusableElement.focus(); // add focus for the first focusable element
                        e.preventDefault();
                    }
                }
            });
            
            // Open modal
            modalEl.classList.add('active');
            modalEl.focus();

            // Close button click listener
            modalCloseBtns.forEach(function(button, index) {
                Modal.events['close-' + index] = Modal.addEvent(button, 'click', function(e) {
                    modalOpenBtn !== null ? modalOpenBtn.focus() : null;
                    Modal.close(e);
                });
            });

            // Modal underlay listener
            if(modalUnderlay) {
                Modal.events.underlay = Modal.addEvent(modalUnderlay, 'click', Modal.close);
            }

            // Add callback events
            for (var key in Modal.callbackFns) {
                var button = modalEl.querySelector('button[data-callback="' + key + '"]');
                
                if (button !== null) {
                    Modal.events['callback-' + key] = Modal.addEvent(button, 'click', function(e) {
                        Modal.close(e);
                        var callbackKey = e.target.getAttribute('data-callback');
                        Modal.callbackFns[callbackKey](e);
                    });
                }
            }

        },

        /**
         * Close the modal
         * 
         * @memberof module:Modal
         * 
         * @param {Document.event} e 
         */
        'close': function(e) {
            console.log('close');
            var modalEl = e.target.closest('.qld__modal');
            modalEl.classList.remove('active');

            for (var i in Modal.events) {
                var event = Modal.events[i];
                Modal.removeEvent(event);
            }
        },

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
         * @memberof module:Modal
         * @instance
         * @private
         * 
         * @param {Node} element            DOM element to add event to
         * @param {document#event} event    The event to listen for
         * @param {function} rawHandler     The raw handler function
         * @return {event}
         */
        'addEvent': function(element, event, rawHandler) {
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
        },


        /**
         * Remove event listener
         * 
         * @memberof module:Modal
         * @instance
         * @private
         * 
         * @param {event} token     The event to remove
         */
        'removeEvent': function(token) {
            if (token.element.removeEventListener) {
                token.element.removeEventListener(token.event, token.handler);
            } else {
                token.element.detachEvent('on' + token.event, token.handler);
            }
        }
    };


    // Add to global QLD module
    var QLD = QLD ? QLD : {};
    QLD.Modal = Modal;
    window.QLD = QLD;

    window.addEventListener('DOMContentLoaded', function () {
        if (document.querySelector('.qld__open-modal') !== null) {
            QLD.Modal.init();
        }
    });

}(window.QLD));
