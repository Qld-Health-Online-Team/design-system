module.exports = function (str, search, replacement) {
    if(typeof str == 'string') {

        var regex = new RegExp(search, "g"); // need double backslashes in search to use them in regex
        return str.replace(regex, replacement);
    }
    else return '';
};
