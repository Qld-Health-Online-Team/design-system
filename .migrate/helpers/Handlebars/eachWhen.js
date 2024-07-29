module.exports = function(list, key, value, options) {
    var result = "";
    var arr = [];
    var data = Handlebars.createFrame(options.data);
    var index = 0;
    
    for(var i in list) {
        if(list[i][key] === value) {
            arr.push({
                key: i,
                index: index,
                first: 0 === index,
                last: false,
                value: list[i]
            });
            index++;
        }
    }

    arr[arr.length - 1].last = true;

    for (var i = 0; i < arr.length; i++) {
        data.key = arr[i].key;
        data.index = arr[i].index;
        data.first = arr[i].first;
        data.last = arr[i].last;
        result = result + options.fn(arr[i].value, {
            data: data
        });
    }
    return result;
};

