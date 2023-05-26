(function () {
    /**
     * The Basic Search
     * 
     * @module basicSearch
     */

     var basicSearch = {};

        /**
         * Initialise the Basic Search listeners for keyboard navigation
         * 
         * @memberof module:basicSearch
         */

         basicSearch.init = function() { 
            //on facet click
            if(document.querySelector('.qld__search__facet-list')){
                var facetInputs = document.querySelectorAll('.qld__search__facet-list .qld__search__facet-input');

                for (var i = 0; i < facetInputs.length; i++) {
                    var state;

                    facetInputs[i].addEventListener('change', function(){
                        if (this.checked) {
                            state = "add";
                            updateFacet(this, state);

                        } else {
                            state = "remove";
                            updateFacet(this, state);
                        }

                    })
                }
            };

            if(document.querySelector('.qld__search__filters-list')){
                updateFilters();
            };
         }
        // 'init': function () {

            // window.Bloodhound = require('corejs-typeahead/dist/bloodhound.js');

            // //init autocomplete
            // setTimeout(function() {
            //     jQuery('#qld__header__search-query').autocompletion({
            //         program   : 'https://QLD-search.squiz.cloud/s/suggest.json',
            //         datasets: {
            //             organic: {
            //             collection: 'qld-health-design-system-web-DEV',
            //             profile : '_default',
            //             format: 'extended',
            //             alpha: '0.5',
            //             show: '10',
            //             sort: '0',
            //             group: true
            //             }
            //         },
            //         typeahead: {hint: true},
            //         length: 3
            //     });
            //     if(document.querySelector('#search-sort')){
            //         document.querySelector('#search-sort').onchange = function(e) {
            //             window.location.href = e.target.options[e.target.selectedIndex].getAttribute('data-href');
            //         }
            //     }
            // }, 500);


            
        
        // },

    

    /**
     * IE8 compatible function for replacing classes on a DOM node
     *
     * @memberof module:basicSearch
     * @instance
     * @private
     * 
     * @param  {object} element      - The DOM element we want to query with
     * @param  {object} target       - The DOM element we want to toggle classes on
     * @param  {object} state        - The current state of the animation on the element
     */

     function updateFacet(element, state) {

        var facet = element;
        var facetQuery = facet.dataset.querystring;
        var currentQuery = window.location.search;
        var updatedQuery = '';
        
        if(state === "add"){
            //add facet to url 
            if(currentQuery.length > 0){
                console.log('add - current query ' + currentQuery);

                updatedQuery = currentQuery + '&' + facetQuery;

                window.location.href = updatedQuery;
            }
            else{
                updatedQuery += facetQuery;
                console.log('add - current query ' + updatedQuery);

                window.location.href = '?' + updatedQuery;
            }
        }
        //remove facet from url
        if(state === "remove"){ 
            if(currentQuery.length > 0){
                console.log('1 remove - current query ' + updatedQuery);

                // var removeQuery = '[&|?]' + facetQuery;
                // console.log('replace query ' + removeQuery);
                var pattern = new RegExp('[&|?]' + facetQuery, '');
                updatedQuery = currentQuery.replace(pattern, '');
                

                console.log('href ' + window.location.href);
                console.log('2 remove - updated query ' + updatedQuery);

                window.location.href = window.location.pathname + updatedQuery; 
            }
        }
    }

    /**
     * IE8 compatible function for replacing classes on a DOM node
     *
     * @memberof module:basicSearch
     * @instance
     * @private
     * 
     * @param  {object} element      - The DOM element we want to query with
     * @param  {object} target       - The DOM element we want to toggle classes on
     * @param  {object} state        - The current state of the animation on the element
     */

     function updateFilters(element, state) {
        var filterCloseButtons = document.querySelectorAll('.qld__search__filters-list .qld__tag--filter-close');
        var filterClearAll = document.querySelector('.qld__search__filters-list .qld__search__filter-tag--clear');
        var currentQuery = window.location.search.replace('?','').split('&');
        
        for (var i = 0; i < filterCloseButtons.length; i++) {
            filterCloseButtons[i].addEventListener('click', event => {
                const filterQuery = event.currentTarget.dataset.querystring;
                currentQuery.forEach(function(query, index) {
                    if (query === filterQuery) {
                        currentQuery.splice(index, 1);
                    }
                });
                window.location.href = window.location.pathname + '?' + currentQuery.join('&');
            });
        };

        filterClearAll.addEventListener('click', event => {
            var $this = event.currentTarget;
            var clearAllUrl = $this.dataset.clearurl;

            $this.parentNode.remove();
            window.location.href = clearAllUrl;
          });
       

    }



    document.addEventListener('DOMContentLoaded', function () {
        basicSearch.init();
    });

    
}());
