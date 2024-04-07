var data = function (component) {
    var current = require('current.json');
    var site = require('site.json');
    var data = require(`../components/${component}/js/manifest.json`);
    return {
        "containerId":component,
        "data":data,
        "content":"Lorem ipsum dolor sit amet",
        "globals":{
            "current":current,
            "site":site
        }
    }
}