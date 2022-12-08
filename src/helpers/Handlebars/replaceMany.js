module.exports = function (find, replace, options) {
    var string = options.fn(this);
    var regex = new RegExp(find, "g");
    return string.replace(regex, replace);
};
