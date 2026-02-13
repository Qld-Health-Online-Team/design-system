export const Iconography = (size, site, iconID) => {
    return `<svg class="qld__icon qld__icon--${size}" xmlns="http://www.w3.org/2000/svg" aria-hidden="true"><use href="${site.metadata.coreSiteIcons.value}#${iconID}"></use></svg>`;
};
