/** @type {import("prettier").Config} */
module.exports = {
    printWidth: 240,
    semi: true,
    tabWidth: 4,
    singleQuote: false,
    trailingComma: "all",
    plugins: ["@poliklot/prettier-plugin-handlebars"],
    overrides: [
        {
            files: ["*.hbs", "*.handlebars"],
            options: {
                parser: "handlebars",
            },
        },
    ],
};
