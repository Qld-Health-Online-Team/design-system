module.exports = function (string) {
    if (!string) return "";
    let cleaned = string;
    let prev;

    while (cleaned !== prev) {
        prev = cleaned;
        // Remove any HTML tags
        cleaned = cleaned.replace(/<[^>]*>/g, "");
    }

    // Convert the last remaining special characters to HTML entities
    return cleaned.replace(/&/g, "&amp;").replace(/</g, "&lt;").replace(/>/g, "&gt;");
};
