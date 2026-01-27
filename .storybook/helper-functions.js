// src/.storybook/storybook-utils.js

/**
 * Remove the ./?a= prefix from all href, src, and srcset in rendered HTML
 * @param {string} html - the HTML string to clean
 * @returns {string} - cleaned HTML
 */
export const cleanStorybookUrls = (html) => {
    return (
        html
            .replace(/(\b(?:href|src|srcset)=["'])\.\/\?a=/g, "$1")
            // CSS url(./?a=...)
            .replace(/url\(\s*\.\/\?a=/g, "url(")
    );
};

export const themeWrapper = (theme, content) => {
    return `<div class="${theme}" style="padding: 2rem;">${content}</div>`;
};
