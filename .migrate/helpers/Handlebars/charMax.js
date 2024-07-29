module.exports = function (str, limit) {

    if (str.length > limit) {
        return str.substring(0, 160) + '...';
    }else{
        return str
    }
}
