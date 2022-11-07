module.exports = function (arr, max, options) {
    var item = "";
    var totalCount = max < arr.length ? max : arr.length;
    for (var i = 0; i < totalCount; i++) {
        item = item + options.fn(arr[i]);
    }
    return item;
};
