module.exports = function (obj,key,prop,options) {
    return (obj[key][prop]) ? options.fn(this) : options.inverse(this);
};
