/**
 * @module VideoPlayer
 */

export default function initVideoPlayer(document = document) {
    // Select all accordion title buttons
    const accordionTitles = document.querySelectorAll(".qld__body .qld__video__player--wrapper .qld__accordion__title");
    if (!accordionTitles.length) return;

    accordionTitles.forEach((accordionTitle) => {
        accordionTitle.addEventListener("click", () => {
            toggleButtonState(accordionTitle);
        });
    });
}

function toggleButtonState(accordionTitle) {
    // Toggle the text content based on the accordion state
    const buttonSpan = accordionTitle.querySelector("svg").nextElementSibling;
    const isCurrentlyOpen = accordionTitle.classList.contains("qld__accordion--open");
    buttonSpan.textContent = isCurrentlyOpen ? "Show transcript" : "Hide transcript";
}
