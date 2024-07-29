module.exports = function(context, count, options) {
    var ret = "";

    if (window.NodeList && !NodeList.prototype.forEach) {
        NodeList.prototype.forEach = Array.prototype.forEach;
    }
  
    context.slice(count).forEach(function(elem) {
        ret += options.fn(elem);
    });
  
    return ret;
}
