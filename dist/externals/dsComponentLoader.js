(function() {

    window.addEventListener('DOMContentLoaded', function () {
        try {
            /**
             * Module for rendering Service Finder Datastore components
             * 
             * @module serviceFinder
             */
            var serviceFinder = {

                'datastore': {},
                'userLocation': null,
                'document': null,
                'collection': null,
                'webPath': null,

                /**
                 * Initialise the serviceFinder module
                 * 
                 * @memberof module:serviceFinder
                 */
                'init': function() {                     
                    if (serviceFinder.userLocation === null) {
                        serviceFinder.getLocation();

                    } else {
                        serviceFinder.getCurrentDocument();
                    }
                },

                /**
                 * Get the location of the user, set in variable
                 * and re-init module
                 * 
                 * @memberof module:serviceFinder
                 */
                'getLocation': function() {
                    
                    // Get location for local storage
                    var userLocation = QLD.utils.getLocalStorage('qld_user_location');
                    if (userLocation !== null) {
                        serviceFinder.userLocation = JSON.parse(userLocation);
                        serviceFinder.getCurrentDocument();
                    
                    // If there is no location in local storage
                    } else {
                        var location = {};
                        
                        // If there is a site-wide HHS configured
                        var hhsDiv = document.getElementById('qld__hhs');
                        if (hhsDiv !== null) {
                            location.hhs_id = hhsDiv.getAttribute('data-hhs');
                        }

                        // Set location and re-init
                        serviceFinder.userLocation = location;
                        serviceFinder.getCurrentDocument();
                    }
                },
                
                /**
                 * Get the current Service Finder Document. This 
                 * can be explicity set in the 'document' query
                 * param, or calculated from the 'path' param
                 * 
                 * @memberof module:serviceFinder
                 */
                'getCurrentDocument': function() {
                    
                    // Get params
                    var dsParams = document.getElementById('qld__ds-params');
                    var collection = dsParams ? dsParams.getAttribute('data-collection') : serviceFinder.getParameterByName('collection');
                    var webPath = dsParams ? dsParams.getAttribute('data-path') : serviceFinder.getParameterByName('path');
                    var documentParam = dsParams ? dsParams.getAttribute('data-document') : serviceFinder.getParameterByName('document');
                    
                    var mdParams = typeof mdSchema !== 'undefined' ? mdSchema : {};  

                    // Local testing.
                    // mdParams.collection = 'facilities';
                    // mdParams.document = '18a3124f-ae6b-41db-95f7-1f3616091f13';

                    if(typeof mdParams !== 'undefined' && mdParams) {
                        collection = mdParams.collection ? mdParams.collection : collection;
                        documentParam = mdParams.document ? mdParams.document : documentParam;
                        webPath = mdParams.webPath ? mdParams.webPath : webPath;
                    }

                    // Set these in datastore
                    serviceFinder.datastore.collection = collection;

                    // Use document id from query param if it exists
                    if (documentParam !== null && documentParam.length > 0) {
                        serviceFinder.document = documentParam;
                        serviceFinder.getAllData();

                    // Else check for web path
                    } else if (webPath !== null && collection !== null && webPath.length > 0 && collection.length > 0) {
                        serviceFinderData.collection(collection).where('web_path', '===', webPath).get().then(function(response) {
                            serviceFinder.document = response[0].id;
                        }).catch(function(e) {
                            console.log(e);
                        }).then(function() {
                            serviceFinder.getAllData();
                        });
                    
                    // Else there is no document
                    } else {
                        serviceFinder.getAllData();
                    }
                },

                /**
                 * Loop through all dsComponents and get their data
                 * 
                 * @memberof module:serviceFinder
                 */
                'getAllData': function() {
                    dsComponents.forEach(function(dsComponent) {  
                        serviceFinder.getComponentData(dsComponent);
                    });
                },

                /**
                 * Get all data for a specified component, based on
                 * the 'dsQueries' array defined in its manifest file
                 * 
                 * @memberof module:serviceFinder
                 */
                'getComponentData': function(dsComponent) {

                    var index = 0;
                    var dsQueries = dsComponent.manifest.component.ds_queries;

                    // Proceed if there are dsQueries
                    if (typeof(dsQueries) !== 'undefined') {
                        var queryCount = dsQueries.length;
                        
                        // Get the data for the first 'ds_query'
                        datastoreGet(index);
                        
                        // Get the relevant data for the corresponding 'ds_query'
                        function datastoreGet(query_index) {

                            var dsQuery = dsQueries[query_index];
                            var datastore = serviceFinder.datastore;

                            // Only get the data if we haven't already got it
                            if (!datastore.hasOwnProperty(dsQuery.name)) {

                                var collection = replaceDynamicParams(dsQuery.collection);
                                var data = serviceFinderData.collection(collection);

                                // If we are looking for a specific document
                                if (dsQuery.hasOwnProperty('document')) {
                                    var documentId = replaceDynamicParams(dsQuery.document);
                                    data = data.doc(documentId);
                                
                                // Else if we are filtering the collection
                                } else if (dsQuery.hasOwnProperty('filters')) {
                                    dsQuery.filters.forEach(function(filter, filter_index) {
                                        var val1 = replaceDynamicParams(filter.val1);
                                        var val2 = replaceDynamicParams(filter.val2);
                                        var operator = filter.operator;

                                        if (filter_index === 0) {
                                            data.where(val1, operator, val2);
                                        } else {
                                            data.and(val1, operator, val2);
                                        }
                                    });
                                }

                                // Get the data and store it
                                data.get().then(function(response) {
                                    datastore[dsQuery.name] = response;

                                // If something goes wrong, store null
                                }).catch(function(e) {
                                    datastore[dsQuery.name] = null;

                                // Then, move to next 'ds_query', or render component
                                }).then(function() {
                                    index++;
                                    if (index < queryCount) {
                                        datastoreGet(index);
                                    } else {
                                        serviceFinder.renderComponent(dsComponent);
                                    }
                                });
                                
                            // If we already have this data, move on
                            } else {
                                index++;
                                if (index < queryCount) {
                                    datastoreGet(index);
                                } else {
                                    serviceFinder.renderComponent(dsComponent);
                                }
                            }
                        }
                    } else {
                        serviceFinder.renderComponent(dsComponent);
                    }
                    
                    function replaceDynamicParams(string) {
                                    
                        // Replace hhs param
                        var hhsId = serviceFinder.userLocation ? serviceFinder.userLocation.hhs_id : document.getElementById('qld__hhs').getAttribute('data-hhs');
                        string = string.replace('<hhs>', hhsId);

                        // Replace collection param
                        string = string.replace('<collection>', serviceFinder.datastore.collection);

                        // Replace document param
                        string = string.replace('<document>', serviceFinder.document);

                        // Return the string
                        return string;
                    }
                },

                /**
                 * Render the Handlebars template 
                 * 
                 * @memberof module:serviceFinder
                 */
                'renderComponent': function(dsComponent) {

                    //Remove Base64 Headers
                    if (typeof(dsComponent.component) !== 'undefined' && dsComponent.component.length > 0) {
                        var componentClean = window.atob(dsComponent.component.replace('export default "data:text/x-handlebars-template;charset=utf-8;base64,','').replace('"',''));
                        componentClean = componentClean.replace(/\.\/\?a=/g,'');
                    }
                    
                    var datastore = serviceFinder.datastore;

                    // Template data
                    var data = {
                        "component": dsComponent.manifest.component,
                        "datastore": datastore,
                        "userLocation": serviceFinder.userLocation,
                        "current": current,
                        "site": site,
                        "userData": userData,
                        "content":"Lorem Ipsum"
                    };

                    if(dsComponent.templateData) {
                        data.component.data = dsComponent.templateData;
                    }

                    if(typeof(search) !== 'undefined') {
                        data.resultPacket =  search.resultPacket;
                        data.resultsSummary = search.resultsSummary;
                        data.facets = search.facets;
                        data.facetExtras = search.facetExtras;
                        data.placeQuery = search.placeQuery;
                        data.pagination = search.pagination;
                    }

                    // Add collection and schema for sf admin
                    var collection = datastore.collection ? datastore.collection.replace(/_/g, '-') : null;
                    var serviceId = serviceFinder.getParameterByName('service_id');
                    if (dsComponent.type === 'admin') {
                        data.collection = collection;
                        data.schema = dsComponent.schema ? dsComponent.schema : dsComponent.schemas[collection];
                        data.parentService = serviceId;
                    }

                    // Front End URLs
                    if (typeof(sfLinks) !== 'undefined') {
                        data.links = sfLinks;
                    } else {
                        data.links = {
                            "home": "/sf_service_finder.html",
                            "serviceDetails": "/sf_service_page.html",
                            "serviceLocation": "/sf_service_location_page.html",
                            "facilityLocation": "/sf_facility_page.html",
                            "servicesAtoZ": "/sf_services_a-z.html",
                            "servicesSearch": "/sf_service_search.html"
                        };
                    }

                    // Admin URLs
                    if (typeof(sfAdminLinks) !== 'undefined') {
                        data.adminLinks = sfAdminLinks;
                    } else {
                        data.adminLinks = {
                            "list": "/sf_admin_list.html",
                            "form": "/sf_admin_form.html",
                            "view": "/sf_admin_details.html",
                            "topService": "/sf_admin_top_services_form.html",
                            "tinymceStyles": "/externals/tinymce_classes.css"
                        };
                    }

                    // LOCAL - Compile the template and get output
                    var output = null;
                    if (typeof(componentClean) !== 'undefined') {
                        var compiled = Handlebars.compile(componentClean);
                        output = compiled(data).replace(/\.\/\?a=/g, '');
                    
                    // PROD - Else use precompiled template
                    } else if (typeof(dsComponent.template) !== 'undefined') {
                        output = dsComponent.template(data);
                    }
                    
                    // Replace div with Handlebars output
                    document.getElementById("ds_component_" + dsComponent.id).outerHTML = output;

                    // Run callback(s)
                    if ($('.qld__service-finder-admin__list').length > 0) {
                        QLD.adminList.init();
                    }

                    if ($('.qld__service_finder_admin_form form').length > 0) {
                        QLD.adminForm.init();
                    }

                    if ($('.sf-admin__top-services-form form').length > 0) {
                        QLD.topServicesForm.init();
                    }

                    if ($(".qld__update-location-input").length > 0) {
                        QLD.userLocationFinder.init();
                    }

                    if ($('.qld__open-modal').length > 0) {
                        QLD.Modal.init();
                    }

                    if($('.qld__service-finder').length > 0) {
                        QLD.servicesSearchForm.init();
                    }

                    if ($('.qld__service_search__facets').length > 0) {
                        QLD.servicesSearchFacets.init();
                    }
                    
                    if($('.js-map-embed-facility').length > 0) {
                        QLD.facilityMap.init();
                    }

                    if($('.qld__content-tabs').length > 0) {
                        QLD.tabs.init();
                    }
                    
                    if($('.qld__service_search__facets .js-qld__accordion').length > 0) {
                        QLD.accordion.init();
                    }

                    if (location.hash) {
                        var requested_hash = location.hash.slice(1);
                        location.hash = '';
                        location.hash = requested_hash;
                    }
                },

                /**
                 * Get the value of a param by name, given a URL string
                 * 
                 * @memberof module:serviceFinder
                 * 
                 * @param {string} name 
                 * @param {string} url 
                 * 
                 * @returns {string}
                 */
                'getParameterByName': function(name, url) {
                    url = url ? url : window.location.href;
                    name = name.replace(/[\[\]]/g, '\\$&');
                    var regex = new RegExp('[?&]' + name + '(=([^&#]*)|&|#|$)'),
                        results = regex.exec(url);
                    if (!results) return null;
                    if (!results[2]) return '';
                    return decodeURIComponent(results[2].replace(/\+/g, ' '));
                },

                /**
                 * Execute a nested namespace function given the name as a string
                 * 
                 * @memberof module:serviceFinder
                 * 
                 * @param {string} functionName 
                 * @param {object} context 
                 */
                'executeFunctionByName': function(functionName, context /*, args */) {
                    var args = Array.prototype.slice.call(arguments, 2);
                    var namespaces = functionName.split(".");
                    var func = namespaces.pop();
                    for(var i = 0; i < namespaces.length; i++) {
                        context = context[namespaces[i]];
                    }
                    context[func].apply(context, args);
                }
            };
        } catch(e) {
            console.log(e);
        }

        window.serviceFinder = serviceFinder;

        if (typeof(dsComponents) !== 'undefined') {
            serviceFinder.init();
        }
        
    });

}());