module.exports = function(array,key,value,options) {
    for(var x = 0; x<array.length;x++) {
        if(array[x][key] === value) {
            return options.fn(this)
        }
    }
    return options.inverse(this);
};