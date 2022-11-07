module.exports = function(obj,key) {
    var possibleValues = [];
    for(var i in obj) {
        if (obj[i].hasOwnProperty(key)) {
            var value = obj[i][key];
            if (possibleValues.indexOf(value) === -1) {
                possibleValues.push(value);
            }
        }
    }

    return possibleValues;
};