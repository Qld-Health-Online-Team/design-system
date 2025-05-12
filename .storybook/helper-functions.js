import { themes } from "./globals.js";

export const variantsThemeMapper = (variantTitle, variant) => {
    const title = `<h2>${variantTitle}</h2>`;
    const tags = Object.keys(themes).map((key) => {
        return `
            <div class="${themes[key]}">
                <h3>${key}</h3>
                ${variant}
            </div>
        `;
    });
    return title + tags.join("");
};
