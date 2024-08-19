module.exports = function(string, contains, options) {
    if(string.indexOf(contains) !== -1) {
        return options.fn(this);
    }

    return options.inverse(this);
}