module.exports = function (str) {
    if(typeof str == 'string') {
        return str.replace(/\n/g, '<br />');
    }
    else return str;
};
