// This file is temporarily added to Storybook to allow testing of the animate component in isolation, while the main global.js file is being refactored into modules.

/**
 * @module animate
 */

export default function initAnimate(document = document) {
    let animate = {};

    function CalculateAnimationSpecs(initialSize, endSize, speed) {
        if (initialSize === endSize) {
            return {
                stepSize: 0,
                steps: 0,
                intervalTime: 0,
            };
        }

        var distance = endSize - initialSize; // the overall distance the animation needs to travel
        var intervalTime = speed / distance; // the time each setInterval iteration will take
        var stepSize = distance < 0 ? -1 : 1; // if distance is negative then we set stepSize to -1
        var steps = Math.abs(distance / stepSize); // the amount of steps required to get to endSize
        intervalTime = speed / steps;

        // we need to adjust our animation specs if interval time exceeds 60FPS eg intervalTime < 16.67ms
        if (Math.abs(intervalTime) < 1000 / 60) {
            intervalTime = 1000 / 60; // let’s not get lower that 60FPS
            steps = Math.ceil(Math.abs(speed / intervalTime)); // we now need the steps and make sure we ceil them so -1 won't make them negative
            stepSize = distance / steps; // last thing is step sizes which are derived from all of the above
        }

        return {
            stepSize: stepSize,
            steps: steps - 1,
            intervalTime: intervalTime,
        };
    }

    // export for node and babel environments
    if (typeof module !== "undefined") {
        animate.CalculateAnimationSpecs = CalculateAnimationSpecs;
    }

    animate.GetCSSPropertyBecauseIE = function (element, property) {
        if (typeof getComputedStyle !== "undefined") {
            return window.getComputedStyle(element)[property];
        } else {
            var space = element.currentStyle[property];

            if (space === "auto") {
                space = QLD.animate.CalculateAuto(element, property);
            }

            return space;
        }
    };

    animate.CalculateAuto = function (element, dimension) {
        var initialSize;
        var endSize;

        if (dimension === "height") {
            initialSize = element.clientHeight; // get current height
            element.style[dimension] = "auto"; // set height to auto
            endSize = element.clientHeight; // get height again
            element.style[dimension] = initialSize + "px"; // set back to initial height
        } else {
            initialSize = element.clientWidth;
            element.style[dimension] = "auto";
            endSize = element.clientWidth;
            element.style[dimension] = initialSize + "px";
        }

        return parseInt(endSize);
    };

    animate.Stop = function (element) {
        clearInterval(element.QLDanimation);
    };

    animate.Run = function (options) {
        // defaults
        var elements = options.element;
        var speed = options.speed || 250;

        // making a single DOM element iteratable
        if (elements.length === undefined) {
            elements = [elements];
        }

        // making a callback if none was provided
        if (typeof options.callback !== "function") {
            options.callback = function () {};
        }

        // adding iteration counts
        elements[0].QLDinteration = 0;
        elements[0].QLDinterations = elements.length;

        // iterate over all DOM nodes
        for (var i = 0; i < elements.length; i++) {
            var element = elements[i]; // this element
            QLD.animate.Stop(element); // stop any previous animations
            var initialSize = parseInt(QLD.animate.GetCSSPropertyBecauseIE(element, options.property)); // the elements current size
            var endSize = options.endSize; // the element end size

            if (options.endSize === "auto") {
                // calculate what 'auto' means in pixel
                endSize = QLD.animate.CalculateAuto(element, options.property);
            }

            // calculate our animation specs
            var animationSpecs = CalculateAnimationSpecs(initialSize, endSize, speed);
            var iterateCounter = initialSize;

            // set state
            if (animationSpecs.stepSize < 0) {
                element.QLDtoggleState = "closing";
            } else if (animationSpecs.stepSize > 0) {
                element.QLDtoggleState = "opening";
            }

            // scoping variable
            (function (element, initialSize, iterateCounter, animationSpecs, endSize) {
                // keep track of animation by adding it to the DOM element
                element.QLDanimation = setInterval(function () {
                    // when we are at the end
                    if (initialSize === endSize || animationSpecs.steps === 0) {
                        QLD.animate.Stop(element);

                        element.style[options.property] = endSize + "px"; // set to endSize
                        element.QLDtoggleState = "";

                        elements[0].QLDinteration++;

                        // removing auto so CSS can take over
                        if (options.endSize === "auto") {
                            element.style[options.property] = "";
                        }

                        // when all iterations have finished, run the callback
                        if (elements[0].QLDinteration >= elements[0].QLDinterations) {
                            return options.callback();
                        }
                    }

                    // if we are still animating
                    else {
                        iterateCounter += animationSpecs.stepSize;
                        element.style[options.property] = iterateCounter + "px";

                        animationSpecs.steps--;
                    }
                }, Math.abs(animationSpecs.intervalTime));
            })(element, initialSize, iterateCounter, animationSpecs, endSize);
        }
    };

    animate.Toggle = function (options) {
        var elements = options.element;
        var property = options.property || "height";
        var speed = options.speed || 250;
        var closeSize = options.closeSize === undefined ? 0 : options.closeSize;
        var openSize = options.openSize === undefined ? "auto" : options.openSize;

        // making a single DOM element iteratable
        if (elements.length === undefined) {
            elements = [elements];
        }

        // making a prefunction if none was provided
        if (typeof options.prefunction !== "function") {
            options.prefunction = function () {};
        }

        // making a postfunction if none was provided
        if (typeof options.postfunction !== "function") {
            options.postfunction = function () {};
        }

        // making a callback if none was provided
        if (typeof options.callback !== "function") {
            options.callback = function () {};
        }

        // adding iteration counts
        elements[0].QLDtoggleInteration = 0;
        elements[0].QLDtoggleInterations = elements.length;

        // iterate over all DOM nodes
        for (var i = 0; i < elements.length; i++) {
            var element = elements[i];

            QLD.animate.Stop(element);

            var targetSize; // the size the element should open/close to after toggle is clicked
            var preState = ""; // the state we animate to for the prefunction and callback functions
            var postState = ""; // the state we animate to for the prefunction and callback functions
            var currentSize = parseInt(QLD.animate.GetCSSPropertyBecauseIE(element, options.property)); // the current size of the element

            if (currentSize === closeSize || element.QLDtoggleState === "closing") {
                targetSize = openSize;
                preState = "opening";
                postState = "open";
            } else if (currentSize !== closeSize || element.QLDtoggleState === "opening") {
                targetSize = closeSize;
                preState = "closing";
                postState = "closed";
            } else {
                throw new Error("QLD.animate.Toggle cannot determine state of element");
            }

            // run prefunction once per element
            options.prefunction(element, preState);

            // shoot off animation
            QLD.animate.Run({
                element: element,
                endSize: targetSize,
                property: property,
                speed: speed,
                callback: function () {
                    // making sure we fire the callback only once
                    elements[0].QLDtoggleInteration++;

                    if (elements[0].QLDtoggleInteration === elements[0].QLDinterations) {
                        var returnParam = options.callback(element, postState);

                        // run postfunction once per element
                        options.postfunction(element, postState);

                        return returnParam;
                    }

                    // run postfunction once per element
                    options.postfunction(element, postState);
                },
            });
        }
    };

    if (!window.QLD) {
        window.QLD = {};
    }

    window.QLD.animate = animate;
}
