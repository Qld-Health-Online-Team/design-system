module.exports = function (string, contains, options) {
    if (typeof string === "string" && string.indexOf(contains) !== -1) {
        return options.fn(this);
    }

    return options.inverse(this);
};
