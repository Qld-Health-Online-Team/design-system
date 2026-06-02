module.exports = function (string) {
    if (!string) return "";

    return string
        .replace(/<[^>]*>/g, "")
        .replace(/&/g, "&amp;")
        .replace(/</g, "&lt;")
        .replace(/>/g, "&gt;")
        .replace(/"/g, "&quot;")
        .replace(/'/g, "&#x27;");
};
