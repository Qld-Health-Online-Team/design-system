module.exports = function(obj,key,options) {

    var within = Object.keys(obj).some(function() {
        return obj[key] !== "";
    });


    if(within) {
        return options.fn(this); 
    }

    return options.inverse(this);
};