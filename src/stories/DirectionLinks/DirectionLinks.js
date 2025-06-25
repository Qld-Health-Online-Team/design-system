export const DirectionLinks = ({ text, direction, href }) => {
    return `<a href="${href}" class="qld__direction-link--${direction}"}>${text}</a>`;
};
