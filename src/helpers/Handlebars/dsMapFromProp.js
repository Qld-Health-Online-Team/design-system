module.exports = function(datastore, collection, property, key) {
    return datastore[collection].reduce(function(acc,item) {
        var prop = item[property];
        var value = item[key];
        acc[prop] = value;
        return acc;
    }, {});
};