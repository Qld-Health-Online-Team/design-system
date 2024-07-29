module.exports = function (array, index) {
    var idx = parseInt(index, 10);
    if (Array.isArray(array) && !isNaN(idx)) {
        if (idx < 0) {
            return array[array.length + idx];
        }
        if (idx < array.length) {
            return array[idx];
        }
    }
};
