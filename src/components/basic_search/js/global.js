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
        }

    }


    // Make accordion public
    QLD.basicSearch = basicSearch;

    // Add toggle event listeners to accordion buttons
    window.addEventListener('DOMContentLoaded', function () {
        QLD.basicSearch.init();
    });
}()); 
