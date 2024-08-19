module.exports = function (obj,name) {
    var index = name.replace(/\D/g, "");
    return obj['title_' + index].value;
};
