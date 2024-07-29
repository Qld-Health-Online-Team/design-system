module.exports = function(context,options) {
    var output = "";
    var sorted = context.sort(function(a, b){
        if(a.name < b.name) { return -1; }
        if(a.name > b.name) { return 1; }
        return 0;
    });

    for(let item in sorted) {
        let i = Object.keys(sorted).indexOf(item);

        if(i >= 0) {
            output += options.fn(sorted[item]);
        }
    };

    return output;
}