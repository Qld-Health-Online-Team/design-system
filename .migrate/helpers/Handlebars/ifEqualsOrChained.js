module.exports = function() {
    var options = arguments[arguments.length-1];
    // Assuming that all wanted operator are '||'
    var valueToTest = arguments[0];

    for (var i = 1; i < (arguments.length - 1); i++) {
        if (valueToTest === arguments[i]) {
            return options.fn(this);
        }
    }
    return options.inverse(this);
}