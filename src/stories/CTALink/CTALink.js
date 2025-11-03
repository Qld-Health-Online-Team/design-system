export const CTALink = ({ id, text, href, target, isViewAll, isDisabled }) => {
    return `
        <a id="${id}" href="${href}" target="${target}" class="qld__cta-link ${isViewAll ? "qld__cta-link--view-all" : ""}" ${isDisabled ? "disabled" : ""}>${text}</a>
    `;
};
