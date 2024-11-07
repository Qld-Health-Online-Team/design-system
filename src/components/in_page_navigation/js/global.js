(function() {

    /**
     * @module inPageNav
     */
    var inPageNav = {};

    /**
     * Create in page nav from headings
     * 
     * @memberof module:inPageNav
     */
    inPageNav.init = function() {
        var navs = document.querySelectorAll('.qld__inpage-nav-links');
        var mainEl = document.querySelector('main.main');
        var isLandingPage = mainEl && mainEl.classList.contains('landing');

        // For all In-Page Nav components
        navs.forEach(function(nav) {
            
            var headingSelector = nav.getAttribute('data-headingType') ? nav.getAttribute('data-headingType') : 'h2';
            var pageContent = isLandingPage ? mainEl : document.getElementById('content');
            
            // Determine whether we should exclude .qld__accordion based on headingSelector
            const excludeAccordion = /h[3-6]/.test(headingSelector);
            
            // Define the base selector to exclude .qld__code and additional classes
            const baseSelector = `${headingSelector}:not(.qld__inpage-nav-links__heading):not(.banner__heading):not(.qld__code *)`;
            
            // Adjust the selector if excluding .qld__accordion headings
            const finalSelector = excludeAccordion
              ? `${baseSelector}:not(.qld__accordion)`
              : baseSelector;
            
            // Collect unique headings using a Set to avoid duplicates
            const headings = new Set(
              Array.from(pageContent.querySelectorAll(finalSelector)).map(heading => heading.textContent.trim())
            );
            
            // Log the unique text content of each heading in the console
            headings.forEach(heading => console.log(heading));
            

            var list = nav.querySelector('.qld__link-list');
            list.innerHTML = '';

            if (headings.length === 0) {
                nav.style.display = 'none';
            }
        
            // For all headings (with matching data-headingType) in page content
            headings.forEach(function(heading) {
                var title = heading.innerText;
                var id = 'section__' + title.toLowerCase().replace(/\s+/g, '-');
                heading.setAttribute('id', id);
                heading.setAttribute('tabindex', -1);
                var link = '<li><a href="#' + id + '">' + title + '</a></li>';
                
                // Append link item if it doesn't already exist in list
                if (list.querySelector('a[href="#' + id + '"') === null) {
                    list.insertAdjacentHTML('beforeend', link);
                }
            });
        });
    }

    QLD.inPageNav = inPageNav;

    // Init In Page Nav on document load
    document.addEventListener('DOMContentLoaded', QLD.inPageNav.init);
})();