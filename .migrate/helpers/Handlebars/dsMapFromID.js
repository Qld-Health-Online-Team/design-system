module.exports = function(datastore, collection, key) {
    return datastore[collection].reduce(function(acc,item) {
        var id = item.id;
        var value = item[key];
        acc[id] = value;
        return acc;
    }, {});
};