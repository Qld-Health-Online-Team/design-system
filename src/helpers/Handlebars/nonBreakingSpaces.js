module.exports = function(str) {
    if(typeof str == 'string') {
        return str.replace(/ /g, '&nbsp;');
    }
    else return '';
}