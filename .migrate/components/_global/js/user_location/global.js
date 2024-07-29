
(function(QLD) {
    "use strict";
    
    /**
     * @module userLocationFinder
     */
    var userLocationFinder = {};

    /**
     * Initialise the location finder
     * 
     * @memberof module:userLocationFinder
     */
     userLocationFinder.init = function() {


        // Need to move this stuff into a central location as it's also used for BSQ location finder
        var $ = require('jquery');
        var ausPostUrl = typeof site !== 'undefined' ? site.metadata.ausPostUrl.value : ``;
        var Bloodhound = require('corejs-typeahead/dist/bloodhound.js');
        var datumLocationData;
        require('corejs-typeahead/dist/typeahead.jquery.js');

        console.log(ausPostUrl);

        var addressPacket = new Bloodhound({
            datumTokenizer: function(d) {
                var locationTokens = Bloodhound.tokenizers.whitespace(d.location);
                var postcodeTokens = Bloodhound.tokenizers.whitespace(d.postcode);

                return locationTokens.concat(postcodeTokens);
            },
            queryTokenizer: Bloodhound.tokenizers.whitespace,
            limit: 20,
            remote: {
              url: ausPostUrl,
              prepare: function (query, settings) {
                settings.url = encodeURI(settings.url + '?query=' + query);
                return settings;
              }
            }
        });

        
        var $updateLocationInput =  $(".qld__update-location-input");

        $updateLocationInput.typeahead('destroy');

        $updateLocationInput.typeahead(null, {
            name: 'addresses',
            minLength: 3,
            display: 'location',
            limit: 10,
            source: addressPacket,
            templates: {
                suggestion: function(data) {
                    return `<p><strong>${data.location}</strong>, ${data.postcode}</p>`;
                }
            }
        }).on('typeahead:select', function (obj, datum, name) {
            if(datum.latitude && datum.longitude) {
                datumLocationData = datum;
            }
        });

        $(document).on('click', '[data-action="set-location"]', function(e) {
            let $this = $(this);
            let $form = $this.closest('form');

            if($form[0].checkValidity()) {
                e.preventDefault();

                if(datumLocationData) {
                    var location = {
                        "latitude": datumLocationData.latitude,
                        "longitude": datumLocationData.longitude,
                        "isGeolocated": false,
                        "location": datumLocationData.location
                    }
                    QLD.utils.setUserLocation(location);
                } else {
                    console.log('Location not found in search field.');
                }
            } else {
                $form[0].reportValidity();
            }
        });

        var $setCurrentLocationBtn = $('[data-action="set-current-location"]');

        if($setCurrentLocationBtn.length > 0) {
            if(QLD.utils.isGeolocated()) {
                $setCurrentLocationBtn.addClass('active').attr('disabled', true);
            }

            $setCurrentLocationBtn.on('click', function() {
                var errorCallback = function() {
                    $setCurrentLocationBtn.replaceWith('<p class="qld__input--error">Unable to locate</p>');
                }
                QLD.utils.geolocateUser(true, errorCallback);
            });
        }
    }

    var QLD = QLD ? QLD : {};
    QLD.userLocationFinder = userLocationFinder;
    window.QLD = QLD;

    document.addEventListener("DOMContentLoaded", function(event) {
        if ($(".qld__update-location-input").length > 0) {
            QLD.userLocationFinder.init();
        }
    });

}(window.QLD));