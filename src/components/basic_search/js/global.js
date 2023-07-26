(function () {
    'use strict';

    document.addEventListener('DOMContentLoaded', function() {
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
    });
}());
