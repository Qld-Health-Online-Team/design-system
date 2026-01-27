module.exports = function (obj, key, options) {
    if (obj && obj[key] && obj[key].length > 0) {
        return options.fn(this);
    }
    return options.inverse(this);
};
