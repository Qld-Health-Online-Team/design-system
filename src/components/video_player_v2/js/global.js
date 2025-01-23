(function () {
    'use strict';

    // Select all accordion title buttons
    const accordionTitles = document.querySelectorAll('.qld__accordion__title');

    if (!accordionTitles.length) return;

    accordionTitles.forEach(function (accordionTitle) {
        accordionTitle.addEventListener('click', function () {
            // Toggle the text content based on the accordion state
            const buttonText = this.querySelector('i').nextSibling;

            buttonText.textContent = accordionTitle.classList.contains('qld__accordion--open')
            ? "Show transcript"
            : "Hide transcript";
        });
    });
})();
