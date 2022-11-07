function populateDatastore() {
    
    // Store ids of created documents
    var category_ids = [];
    var service_ids = [];
    var hhs_ids = [];
    var facility_ids = [];

    // Number of each data type to create
    var categoryCount = 5;
    var serviceCount = 15;
    var hhsCount = 3;
    var facilityCount = 10; 

    var testFacilityCoordinates = [
        [-27.470125, 153.021072],
        [-27.593294, 153.266418],
        [-27.639168,153.109451],
        [-27.566668,151.949997],
        [-27.616667, 152.766663],
        [-19.258965, 146.816956],
        [-16.925491, 145.754120],
        [-23.375000, 150.511673],
        [-21.144337, 149.186813],
        [-23.843138, 151.268356]
    ];

    var testHHSNames = {};

    var testFacilityNames = [
        'Brisbane',
        'Redland City',
        'Logan City',
        'Toowoomba',
        'Ipswich',
        'Townsville',
        'Cairns',
        'Rockhampton',
        'Mackay',
        'Gladstone'
    ];
    var testFacilityPaths = [];

    var testServiceNames = {};
    var testServicePaths = {};

    var topInHHS = {};
    var topInFacilities = {};

    // If serviceFinderData has been initialised on the page
    if (typeof(serviceFinderData) !== 'undefined') {

        var currentUser = serviceFinderData.jwt.getPayload();
        var updatedBy = currentUser.fullName;
        
        // Only continue if we have no data
        serviceFinderData.collection('service-categories').get().then(function(response) {
            if (response.length === 0) {
                addServiceCategory(1);
            }
        });

        function addServiceCategory(index) {
            console.log('Adding service category ' + index);

            serviceFinderData.collection('service-categories').add({
                "name": "Category " + index,
                "status": "active",
                "updatedBy": updatedBy,
                "updatedDate": Date.now()
            }).then(function(response) {
                category_ids.push(response.id);
                if (index < categoryCount) {
                    addServiceCategory(index + 1);
                } else {
                    addHHS(1);
                }
            });
        }

        function addHHS(index) {
            console.log('Adding HHS ' + index);
            var hhs_id = index === 1 ? 'darling-downs' : ('hhs-' + index);

            serviceFinderData.collection('hhs').add({
                "name": index === 1 ? "Darling Downs" : ("HHS " + index),
                "abbrev": "HHS" + index,
                "rsd_org_id": "123",
                "top_services": [],
                "status": "active",
                "updatedBy": updatedBy,
                "updatedDate": Date.now()
            }, hhs_id).then(function(response) {
                hhs_ids.push(response.id);
                testHHSNames[response.id] = response.name;

                if (index < hhsCount) {
                    addHHS(index + 1);
                } else {
                    addFacility(1);
                }
            });
        }

        function addFacility(index) {
            console.log('Adding facility ' + index);

            var randomHHS = hhs_ids[Math.floor(Math.random() * hhsCount)];

            serviceFinderData.collection('hhs').doc(randomHHS).get().then(function(response) {
                var hhs_name = response.name;
                var web_path = "facility-" + index;

                serviceFinderData.collection('facilities').add({
                    "name": testFacilityNames[index-1],
                    "web_path": web_path,
                    "code": "123",
                    "abbrev": "F" + index,
                    "hhs_id": randomHHS,
                    "hhs_name": hhs_name,
                    "description": "This is the description of the facility",
                    "content": "<p>This is the content for the facility</p>",
                    "url": "",
                    "top_services": [],
                    "other_services": "",
                    "status": "active",
                    "building": "",
                    "physical_address_street": "Pechey Street",
                    "physical_address_suburb": "Toowoomba City",
                    "physical_address_postcode": "4350",
                    "location_details": "Extra details about the location",
                    "latitude": testFacilityCoordinates[index-1][0],
                    "longitude": testFacilityCoordinates[index-1][1],
                    "postal_address_street": "Pechey Street",
                    "postal_address_suburb": "Toowoomba City",
                    "postal_address_postcode": "4350",
                    "phone_number": "+61 7 4616 6000",
                    "fax_number": "+61 7 4616 6170",
                    "email_address": "DDHHS@health.qld.gov.au",
                    "updatedBy": updatedBy,
                    "updatedDate": Date.now()
                }).then(function(response) {
                    facility_ids.push(response.id);
                    testFacilityPaths.push(response.web_path);

                    if (index < facilityCount) {
                        addFacility(index + 1);
                    } else {
                        addService(1);
                    }
                });
            });
        }

        function addService(index) {
            console.log('Adding service ' + index);
            var web_path = "service-" + index;

            var numOfCategories = Math.floor(Math.random() * categoryCount) + 1;
            var shuffledCategories = category_ids.sort(function() { 0.5 - Math.random()});
            var selectedCategories = shuffledCategories.slice(0, numOfCategories);
            var randomChar = String.fromCharCode(65+Math.floor(Math.random() * 26));

            serviceFinderData.collection('services').add({
                "name": randomChar + "Service " + index,
                "web_path": web_path,
                "categories": selectedCategories,
                "description": "The description of this service",
                "status": "active",
                "top_in_hhs": [],
                "top_in_facilities": [],
                "tier_2_name": "",
                "tier_2_code": "",
                "updatedBy": updatedBy,
                "updatedDate": Date.now()
            }).then(function(response) {
                service_ids.push(response.id);
                testServiceNames[response.id] = response.name;
                testServicePaths[response.id] = response.web_path;

                if (index < serviceCount) {
                    addService(index + 1);
                } else {
                    addServicesAtHHS(0);
                }
            });
        }

        

        function addServicesAtHHS(index) {
            console.log('Adding services to HHS ' + (index + 1));
            var hhs_id = hhs_ids[index];

            var numOfServices = Math.floor(Math.random() * serviceCount) + 1;
            var shuffledServices = service_ids.sort(function() { 0.5 - Math.random()});
            var selectedServices = shuffledServices.slice(0, numOfServices);

            var top_services = [];

            selectedServices.forEach(function(service_id, service_index) {
                serviceFinderData.collection('hhs-services').add({
                    "service_id": service_id,
                    "hhs_id": hhs_id,
                    "name": testServiceNames[service_id] + " - " + testHHSNames[hhs_id],
                    "content": `
                        <h3>Our services</h3>
                        <ul>
                            <li>Teeth, gums and mouth check ups</li>
                            <li>Fillings</li>
                            <li>Taking out damaged or decayed teeth</li>
                            <li>Fitting of plates and braces (orthodontics)</li>
                            <li>Artificial teeth or dentures</li>
                            <li>Emergency treatment</li>
                            <li>Advice on the best ways to keep your mouth, teeth and gums healthy.</li>
                        </ul>
                        <h3>Who can access this service?</h3>
                        <h4>Adults</h4>
                        <ul>
                            <li>Adults can get free dental care if they're a Queensland resident and have one of the following cards:</li>
                            <li>Pensioner Concession Card issued by the Department of Veteran's Affairs</li>
                            <li>Pensioner Concession Card issued by Centrelink</li>
                            <li>Health Care Card</li>
                            <li>Commonwealth Seniors Health Card</li>
                            <li>Queensland Seniors Card.</li>
                        </ul>

                        <h4>Children</h4>

                        <p>Children can get free dental care if they're:</p>
                        <ul>
                            <li>17 or younger</li>
                            <li>eligible for the Child Dental Benefits Schedule.</li>
                        </ul>
                        <p>The Child Dental Benefits Schedule doesn't include orthodontics or cosmetic dental work. Read more about the Child Dental Benefits Schedule on the Services Australia website.</p>
                    `,
                    "updatedBy": updatedBy,
                    "updatedDate": Date.now()
                }).then(function() {

                    // 50/50 chance that this is a top service in the HHS
                    if (Math.floor(Math.random() * 2) === 1) {
                        top_services.push(service_id);
                        if (!topInHHS.hasOwnProperty(service_id)) {
                            topInHHS[service_id] = [];
                        }
                        topInHHS[service_id].push(hhs_id);
                    }

                    if (service_index === selectedServices.length - 1) {
                        serviceFinderData.collection('hhs').doc(hhs_id).get().then(function(hhs) {
                            hhs.top_services = top_services;
                            serviceFinderData.collection('hhs').doc(hhs_id).update(hhs).then(function() {
                                if (index < (hhsCount-1)) {
                                    addServicesAtHHS(index + 1);
                                } else {
                                    addServicesAtFacility(0);
                                }
                            });
                        });
                        
                    }

                });
            });

            

        }
        

        function addServicesAtFacility(index) {
            console.log('Adding services to facility ' + (index + 1));
            var facility_id = facility_ids[index];

            var numOfServices = Math.floor(Math.random() * serviceCount) + 1;
            var shuffledServices = service_ids.sort(function() { 0.5 - Math.random()});
            var selectedServices = shuffledServices.slice(0, numOfServices);

            var top_services = [];

            selectedServices.forEach(function(service_id, service_index) {
                var web_path = testServicePaths[service_id] + '-' + testFacilityPaths[index];
                serviceFinderData.collection('service-locations').add({
                    "service_id": service_id,
                    "facility_id": facility_id,
                    "name": testServiceNames[service_id] + " - " + testFacilityNames[index],
                    "web_path": web_path,
                    "facility_level": Math.floor(Math.random() * 2) === 1 ? 'major' : 'limited',
                    "rsd_service_id": "123",
                    "description": "This is the description of the service location",
                    "content": "This is the content for the service location",
                    "status": "active",
                    "building": "",
                    "physical_address_street": "Pechey Street",
                    "physical_address_suburb": "Toowoomba City",
                    "physical_address_postcode": "4350",
                    "location_details": "Extra details about the location",
                    "latitude": testFacilityCoordinates[index][0],
                    "longitude": testFacilityCoordinates[index][1],
                    "phone_number": "+61 7 4616 6000",
                    "fax_number": "+61 7 4616 6170",
                    "email_address": "DDHHS@health.qld.gov.au",
                    "contact_label": "Contact us",
                    "opening_hours": "<p>0800 - 1630</p>",
                    "updatedBy": updatedBy,
                    "updatedDate": Date.now()
                }).then(function() {

                    // 50/50 chance that this is a top service in the facility
                    if (Math.floor(Math.random() * 2) === 1) {
                        top_services.push(service_id);
                        if (!topInFacilities.hasOwnProperty(service_id)) {
                            topInFacilities[service_id] = [];
                        }
                        topInFacilities[service_id].push(facility_id);
                    }

                    if (service_index === selectedServices.length - 1) {
                        serviceFinderData.collection('facilities').doc(facility_id).get().then(function(facility) {
                            facility.top_services = top_services;
                            serviceFinderData.collection('facilities').doc(facility_id).update(facility);

                            if (index < (facilityCount-1)) {
                                addServicesAtFacility(index + 1);
                            } else {
                                updateTopAttributes();
                            }
                        });
                        
                    }
                });
            });

            
        }

        function updateTopAttributes() {
            service_ids.forEach(function(service_id, service_index) {
                serviceFinderData.collection('services').doc(service_id).get().then(function(service) {
                    if (topInHHS.hasOwnProperty(service.id)) {
                        service.top_in_hhs = topInHHS[service.id];
                    }
                    if (topInFacilities.hasOwnProperty(service.id)) {
                        service.top_in_facilities = topInFacilities[service.id];
                    }
                    serviceFinderData.collection('services').doc(service_id).update(service);
                });
            });
        }

    }
}


function clearDatastore() {

    var collections = [
        'service-categories',
        'hhs',
        'facilities',
        'services',
        'hhs-services',
        'service-locations'
    ];

    collections.forEach(function(collection) {
        emptyCollection(collection);
    })

    function emptyCollection(collection) {
        serviceFinderData.collection(collection).get().then(function(documents) {
            documents.forEach(function(doc) {
                serviceFinderData.collection(collection).doc(doc.id).delete().then(function() {
                    console.log(doc.id + ' deleted');
                });
            });
        });
    }

}