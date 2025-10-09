export const BackToTop = ({ text = "Back to top" }) => {
    const container = document.createElement("div");
    container.className = "qld__widgets__back_to_top";
    container.innerHTML = `<a href="#content" class="qld__direction-link qld__direction-link--up" aria-label="Back to top">
      ${text}
    </a>`;
    return container;
};
