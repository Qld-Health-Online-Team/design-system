export default function initCtaLinks(document = document) {
    document.querySelectorAll(".qld__cta-link.qld__cta-link--view-all").forEach((ctaLink) => {
        const viewAllIconWrapperClass = "qld__cta-link--view-all-icon--wrapper";

        // First check that the cta is not already wrapped
        if (ctaLink.querySelector("." + viewAllIconWrapperClass)) return;

        // Remove and store text content
        const ctaLinkText = ctaLink.textContent;
        ctaLink.textContent = "";

        // Create wrapper span for the text
        const wrapper = document.createElement("span");
        wrapper.classList.add(viewAllIconWrapperClass);
        wrapper.textContent = ctaLinkText;

        // Insert wrapper
        ctaLink.appendChild(wrapper);
    });
}
