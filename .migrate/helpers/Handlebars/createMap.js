module.exports = function(array, key, prop) {
    Array.prototype.polyReduce = function(callbackFn, initialValue) {
        var accumulator = initialValue;

        for (var i = 0; i < this.length; i++) {
            if (accumulator !== undefined) {
            accumulator = callbackFn.call(undefined, accumulator, this[i],   i, this);
            } else {
            accumulator = this[i];
            }
        }
        return accumulator;
    }

    return array.polyReduce(function(acc,item)  {
        acc[item[key]] = item[prop];
        return acc;
    }, {});
};
