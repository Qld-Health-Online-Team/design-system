export const LinkColumns = ({ ariaLabel, columns, data, hasViewAll, viewAllHref }) => {
    const getColumns = () => {
        if (columns === 3) {
            return "qld__link-columns--3-col";
        } else if (columns === 2) {
            return "qld__link-columns--2-col";
        } else return "";
    };

    const getListElements = () => {
        if (!data || data.length === 0) return "";
        return data.map((item) => `<li><a href="${item.href}">${item.text}</a></li>`).join("");
    };

    return `
        <ul aria-label="${ariaLabel}" class="qld__link-columns ${getColumns()}">
            ${getListElements()}
            ${hasViewAll ? `<li class="qld__link-columns__all-link"><a href=${viewAllHref} class="qld__cta-link qld__cta-link--view-all">View all</a></li>` : ""}
        </ul>
    `;
};
