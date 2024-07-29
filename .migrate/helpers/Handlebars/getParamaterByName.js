module.exports = function(name,req) {
    name = name.replace(/[\[]/,"\\\[").replace(/[\]]/,"\\\]");
    var regexS = "[\\?&]"+name+"=([^&#]*)";
    var regex = new RegExp( regexS );
    var results = regex.exec( req.originalUrl );
    if( results == null ) {
      return "";
    } else {
      return decodeURIComponent(results[1].replace(/\+/g, " "));
    }
};