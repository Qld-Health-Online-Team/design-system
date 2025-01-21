(function () {
    'use strict';

    // Select the transcript accordion button
    const transcriptAccordion = document.querySelector('.qld__video__player-v2__transcript .qld__accordion__title');

    if (!transcriptAccordion) return;

    transcriptAccordion.addEventListener('click', function () {
        // Toggle the text content based on the accordion state
        const buttonText = this.querySelector('i').nextSibling;
        buttonText.textContent = transcriptAccordion.classList.contains('qld__accordion--open') 
            ? "Show transcript" 
            : "Hide transcript";
    });
})();
