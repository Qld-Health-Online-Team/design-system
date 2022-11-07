(function(QLD) {
    "use strict";
    
    /**
     * The main namespace for all QLDDS functions and variables
     * @module _global
     */
    var QLD = QLD ? QLD : {};
    QLD.utils = {
        /**
         * Add 'js' body class if JS is enabled on the page
         * 
         * @memberof module:_global
         */
        'browserJS': function() {
            document.querySelector("html").classList.remove("no-js");
            document.querySelector("html").classList.add("js");
        },
        
        /**
        * Returns a function, that, as long as it continues to be invoked, will not 
        * be triggered. The function will be called after it stops being called for 
        * N milliseconds. If `immediate` is passed, trigger the function on the 
        * leading edge, instead of the trailing.
        * https://davidwalsh.name/javascript-debounce-function
        * 
        * @memberof module:_global
        * 
        * @param {function} func 
        * @param {number} wait 
        * @param {boolean} immediate 
        * 
        * @returns {function}
        */
        'debounce': function (func, wait, immediate) {
            var timeout;
            return function () {
                var context = this,
                    args = arguments;
                var later = function () {
                    timeout = null;
                    if (!immediate) func.apply(context, args);
                };
                var callNow = immediate && !timeout;
                clearTimeout(timeout);
                timeout = setTimeout(later, wait);
                if (callNow) func.apply(context, args);
            };
        },

        /**
         * Convert nodeList to Array (for IE11)
         * 
         * @memberof module:_global
         * 
         * @param {*} node_list 
         * 
         * @returns {Node[]}
         */
        'listToArray': function(node_list) {
            return Array.prototype.slice.call(node_list);
        },

        /**
         * Set browser cookie
         * 
         * @memberof module:_global
         * 
         * @param {string} cookie_name 
         * @param {string} cookie_value 
         */
        'setCookie': function(cookie_name, cookie_value) {
            var cookie_entry = cookie_name + '=' + encodeURIComponent(cookie_value) + ';';
            document.cookie = cookie_entry + '; path=/;';
        },
        /**
         * Get browser cookie
         * 
         * @memberof module:_global
         * 
         * @param {string} cookie_name 
         * 
         * @returns {c_value}
         */
        'getCookie': function(cookie_name) {
            var c_value = " " + document.cookie;
            var c_start = c_value.indexOf(" " + cookie_name + "=");
            if (c_start == -1) {
                c_value = null;
            }
            else {
                c_start = c_value.indexOf("=", c_start) + 1;
                var c_end = c_value.indexOf(";", c_start);
                if (c_end == -1) {
                    c_end = c_value.length;
                }
                c_value = unescape(c_value.substring(c_start,c_end));
            }
            return c_value;
        },
        /**
         * Set browser local storage
         * 
         * @memberof module:_global
         * 
         * @param {string} storage_key
         * @param {string} storage_value 
         */
        'setLocalStorage': function(storage_key, storage_value) {
            if (typeof(storage_value) !== 'string') {
                storage_value = JSON.stringify(storage_value);
            }
        
            localStorage.setItem(storage_key, storage_value);
        },
        /**
         * Get browser local storage from key
         * 
         * @memberof module:_global
         * 
         * @param {string} storage_key 
         * 
         * @returns {localStorage.getItem(storage_key)}
         */
        'getLocalStorage': function(storage_key) {
            return localStorage.getItem(storage_key);
        },
        /**
         * Remove browser local storage item by key
         * 
         * @memberof module:_global
         * 
         * @param {string} storage_key 
         */
        'removeLocalStorage': function(storage_key) {
            localStorage.removeItem(storage_key);
        },
        /**
         * Determine the location of the user using HTML5 geolocation
         * 
         * @memberof module:_global
         * 
         * @param {Boolean} override
         * @param {function} errorCallback
         */
        'geolocateUser': function(override, errorCallback) {
            
            var userLocationStorage = QLD.utils.getLocalStorage('QLD_user_location');
            if(userLocationStorage !== null && !override) {
                return JSON.parse(userLocationStorage);
            }

            if (navigator.geolocation) {

                QLD.utils.setLoadingState(true);
                navigator.geolocation.getCurrentPosition(function(position) {
                    var location = {
                        "latitude": position.coords.latitude,
                        "longitude": position.coords.longitude,
                        "isGeolocated": true,
                        "location": ''
                    };

                    QLD.utils.setUserLocation(location);
                    QLD.utils.removeLocalStorage('deny-location');
                    return `${position.coords.latitude},${position.coords.longitude}`;
                }, function(error) {
                    console.log(error);
                    QLD.utils.setLoadingState(false);
                    if (errorCallback) {
                        errorCallback();
                    }
                    return false;
                }, { timeout: 10000 });

            } else {
                console.log('Unable to locate');
                if (errorCallback) {
                        errorCallback();
                    }
                return false;
            }
        },

        /**
         * Set the user location, including the HHS
         * 
         * @memberof module:_global
         * 
         * @param {object} location 
         */
        'setUserLocation': function(location) {
            
            // Show loader
            QLD.utils.setLoadingState(true);
            
            // If there is a site-wide HHS configured
            var hhsDiv = document.getElementById('qld__hhs');
            if (hhsDiv !== null && typeof(serviceFinderData) !== 'undefined') {
                var hhsId = hhsDiv.getAttribute('data-hhs');
                serviceFinderData.collection('hhs').doc(hhsId).get().then((response) => {
                    location.hhs_id = hhsId;
                    location.hhs_name = response.name;
                    QLD.utils.setUserLocationInStorage(location);
                });
                
            } else {
                // TODO: Convert lat/long into HHS
                QLD.utils.setUserLocationInStorage(location);
            }
        },

        /**
         * Set the 'QLD_user_location' cookie based on a provided location object
         * 
         * @memberof module:_global
         * 
         */
        'setUserLocationInStorage': function(newLocation) {
            QLD.utils.setLocalStorage('QLD_user_location', JSON.stringify(newLocation));
            QLD.utils.setLoadingState(true);
            setTimeout(function() {
                window.location.reload(false);
            }, 300);
        },
        /**
         * Check the 'QLD_user_location' cookie to determine
         * whether the user is geolocated
         * 
         * @memberof module:_global
         * 
         * @return {boolean}
         * 
         */
        'isGeolocated': function() {
            var userLocationStorage = QLD.utils.getLocalStorage('QLD_user_location');
            var userLocationData = {};

            if(userLocationStorage !== null) {
                userLocationData = JSON.parse(userLocationStorage);
            }

            if(Object.keys(userLocationData).length > 0) {

                return userLocationData.isGeolocated;
            }

            return false;
        },
        /**
         * Set the loading state of the page. If 'true',
         * this will show a loader animation overlay over
         * the entire page. Use 'false' to remove this
         * same animation
         * 
         * @memberof module:_global
         * 
         * @param {Boolean} isLoading 
         */
        'setLoadingState': function(isLoading) {
            var loader = document.querySelector('.loader');
            
            if (loader === null) {
                loader = document.createElement('div');
                loader.classList.add('loader');
                var parentNode = document.querySelector('.main');
                parentNode.insertBefore(loader, parentNode.firstChild);
            }

            if (isLoading) {
                loader.parentNode.classList.add('loading');
            } else {
                document.querySelector('.loading').classList.remove('loading');
            }
        },
        /**
         * Get Paramater from URL by name
         * 
         * @memberof module:_global
         * 
         * @param {*} name
         */
        'getParamaterByName': function(name){
            name = name.replace(/[\[]/,"\\\[").replace(/[\]]/,"\\\]");
            var regexS = "[\\?&]"+name+"=([^&#]*)";
            var regex = new RegExp( regexS );
            var results = regex.exec( window.location.href );
            if( results == null )
              return "";
            else
              return decodeURIComponent(results[1].replace(/\+/g, " "));
          }
    };

    // Make QLD variable available to the console for debugging
    window.QLD = QLD;

    QLD.utils.browserJS();
    

})(window.QLD);