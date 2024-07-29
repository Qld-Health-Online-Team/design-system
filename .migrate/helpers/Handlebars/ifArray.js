module.exports = function (input,options) {
    return Array.isArray(input) ? options.fn(this) : options.inverse(this);
};
