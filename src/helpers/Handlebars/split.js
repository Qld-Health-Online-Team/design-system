module.exports = function(string, separator) {
    if(typeof string == 'string') {
        return string.split(separator);
    }
    else return '';
}