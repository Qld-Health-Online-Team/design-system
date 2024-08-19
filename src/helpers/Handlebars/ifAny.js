module.exports = function () {
    var options = arguments[arguments.length - 1];
    for (var i = 0; i < arguments.length - 1; i++) {
        if (arguments[i]) {
            return options.fn(this);
        }
    }
    return options.inverse(this);
};
