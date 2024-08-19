module.exports = function(ds,context,options) {
    var ret = ""; 
    for (var i = 0, j = ds[context].length; i < j; i++) {
     ret = ret + options.fn(ds[context][i]);
    } 
    return ret;
};