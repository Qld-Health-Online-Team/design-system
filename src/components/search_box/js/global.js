(function () {

    /**
     * @module searchBox
     */

    var searchBox = {}

    /**
     * Init the basicSearch component by adding relevent event listeners
     * 
     * @memberof module:searchBox
    */ 
    searchBox.init = function() {

 
        function autoSuggestSearch(searchField, autocompleteId, autoSuggestId, location) {
            console.log('autoSuggestSearch start');

            var $this = searchField;
            var $thisValue = $this.value;
            let regex = new RegExp("(" + $thisValue + ")", "ig");

            var autocompleteElement = document.getElementById(autocompleteId);
            var autocompleteSuggestionElement = document.getElementById(autoSuggestId);
            
                    
            var fbUrl = site.metadata.siteSearchFbDomain.value + '/s/suggest.json';
            var fbCollection = site.metadata.siteSearchCollection.value;
            var fbSuggestAmount = site.metadata.siteSearchFbSuggestAmount.value;
            
            var funnelbackUrl = fbUrl + '?collection=' + fbCollection + '&partial_query=' + $thisValue + '&show='+ fbSuggestAmount;

            fetch(funnelbackUrl)
                .then(function(response) {
                    if (!response.ok) {
                        throw new Error('Funnelback Request Failed');
                    }

                    return response.json();
                })
                .then(function(data) {

                    let standardsList = data;
                    let set = new Set, results = [];
                
                    for (let list of standardsList) {
                        let id = Object.values(list).join('');
                        if (!set.has(id)) {
                            set.add(id);
                            results.push(list);
                        }
                    }
            
                    var suggestResults = results;
                    var suggestResultsHtml = [];
                        
                    suggestResultsHtml.push('<span class="qld__search-form__autocomplete__category-title qld__display-sm">Suggestions</span>');
                    suggestResultsHtml.push('<ul class="qld__link-list">');
                    var searchPage = document.querySelector('form').getAttribute('action');
            

                    for (var i = 0; i < suggestResults.length; i++) {
                        var item = suggestResults[i];
                        suggestResultsHtml.push('<li class="qld__search-form__autocomplete__suggestion">');
                        suggestResultsHtml.push('<a href="' + searchPage + '?query=' + item + '&collection=business-qld-meta">' + item.replace(regex, '<strong class="keyword">$1</strong>') + '</a>');
                        suggestResultsHtml.push('</li>');
                    }
            
                    suggestResultsHtml.push('</ul>');
                    var qldSuggestId = '#'+ $this.id +'-autocomplete #'+ $this.id +'-autocomplete-suggest';
                    ////fix here search-input-global-basic-query  search-input-global-basic-query-autocomplete
                    var qldSuggestData = document.querySelectorAll(qldSuggestId)[0];


                    if(qldSuggestData) {
                        qldSuggestData.innerHTML = suggestResultsHtml.join('');
                        autocompleteElement.classList.add('qld__search-form__autocomplete--has-data');
                        autocompleteElement.classList.add('qld__search-form__autocomplete--show');
                        autocompleteSuggestionElement.classList.add('qld__search-form__autocomplete--data-show');
                    }

                })
                .catch(function(error) {
                    console.log(error);
                });

        }; //END autoSuggestSearch



        function autoSuggestInit(globalSearchInput, location) {
            // console.log('autoSuggestInit start');

            var searchField = globalSearchInput; 
            // var form = searchField.closest('.qld__search-form');
            var autocompleteId = searchField.id + '-autocomplete';
            var autocompleteElement = document.getElementById(autocompleteId);
            var autoSuggestId = autocompleteId + '-suggest';

            console.log('autoSuggestInit '+ searchField);

            // check if autocomplete element exists
            if (autocompleteElement === null) {

                // Create a autocomplete element
                var autocompleteElement = document.createElement('div');
                autocompleteElement.id = autocompleteId;
                autocompleteElement.className = 'qld__search-form__autocomplete';
                autocompleteElement.innerHTML = '<div class="qld__search-form__autocomplete__inner"><div id="'+ autoSuggestId +'" class="qld__search-form__autocomplete__data-set"></div></div>';
                
                
                searchField.insertAdjacentElement('afterend', autocompleteElement);

                searchField.addEventListener("focus", function(e) {
                    if(autocompleteElement.classList.contains('qld__search-form__autocomplete--has-data')){
                        autocompleteElement.classList.add('qld__search-form__autocomplete--show');
                    }
                });
               
                autocompleteElement.addEventListener("focusout", function(e) {
                    autocompleteElement.classList.remove('qld__search-form__autocomplete--show');
                });
            };

            // Adds a keyup listener on the input.
            searchField.addEventListener("keyup", function(e) {
                // If input value is longer or equal than 2 chars, adding "users" on ID attribute.

                if (e.target.value.length >= 3) {
                    autoSuggestSearch(searchField, autocompleteId, autoSuggestId, location);
                }
                
                if (e.keyCode==8 || e.keyCode==46) {

                    if (e.target.value.length < 3) {
                        document.getElementById(autocompleteId).classList.remove('qld__search-form__autocomplete--show');
                        document.getElementById(autoSuggestId).innerHTML = '';
                        // document.getElementById('qld-suggest-content').innerHTML = '';
                        document.getElementById(autocompleteId).classList.remove('qld__search-form__autocomplete--has-data');
                    };
                }
            });

        };// END autoSuggestInit


        let globalSearchInputs = document.querySelectorAll('.qld__search-form .qld__text-input');
        let location = '';
        location = location

        for (var i = 0; i < globalSearchInputs.length; i++) {
            var currentInput = globalSearchInputs[i];
            // Your code for each input element goes here
            // console.log(currentInput.value); // Just an example, you can perform operations on each input element
            autoSuggestInit(currentInput, location);
        }

    };  

    // Make basic search public
    QLD.searchBox = searchBox;

    window.addEventListener('DOMContentLoaded', function () {
        QLD.searchBox.init();
    });
}()); 