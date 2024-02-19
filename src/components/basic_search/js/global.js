(function () {

    /**
     * @module basicSearch
     */

    var basicSearch = {}

    /**
     * Init the basicSearch component by adding relevent event listeners
     * 
     * @memberof module:basicSearch
    */

    basicSearch.init = function() {

        var searchForm = document.querySelector('.qld__banner__search .qld__search-form');
        if (searchForm) {
            searchForm.action = searchForm.getAttribute('data-action');
            checkHoneypot(searchForm);
        }

        if(document.querySelector('.qld__search__sort #search-sort')){
            var selectElement = document.getElementById('search-sort');
            var currentUrl = new URL(window.location.href);
            var searchParams = new URLSearchParams(currentUrl.search);
            
            if (searchParams.has('sort')) {
                selectElement.value = searchParams.get('sort');
            }

            selectElement.addEventListener('change', function() {
                var selectedValue = this.value;
                searchParams.set('sort', selectedValue);
                currentUrl.search = searchParams.toString();
                window.location.href = currentUrl.toString();
            });
        };           

    };

    /**
     * Check if honeypot field is empty
     * 
     * @memberof module:header
     * @instance
     * @private
     */
    function checkHoneypot(searchForm) {
        var honeypot = searchForm.querySelector('.qld__text-input--validation');
        honeypot.value = '';

        searchForm.addEventListener('submit', function(event) {
            // Prevent form submission if the honeypot field is filled
            if (honeypot.value !== '') {
                event.preventDefault(); // Stop the form submission
            }
        });
    }


    // Make basic search public
    QLD.basicSearch = basicSearch;

    window.addEventListener('DOMContentLoaded', function () {
        QLD.basicSearch.init();
    });
}()); 
