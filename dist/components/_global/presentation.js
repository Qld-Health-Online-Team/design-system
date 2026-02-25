{"1":function(container,depth0,helpers,partials,data) {
    var stack1, lookupProperty = container.lookupProperty || function(parent, propertyName) {
        if (Object.prototype.hasOwnProperty.call(parent, propertyName)) {
          return parent[propertyName];
        }
        return undefined
    };

  return ((stack1 = (lookupProperty(helpers,"jsonStringify")||(depth0 && lookupProperty(depth0,"jsonStringify"))||container.hooks.helperMissing).call(depth0 != null ? depth0 : (container.nullContext || {}),(depth0 != null ? lookupProperty(depth0,"schema") : depth0),{"name":"jsonStringify","hash":{},"data":data,"loc":{"start":{"line":18,"column":38},"end":{"line":18,"column":64}}})) != null ? stack1 : "");
},"3":function(container,depth0,helpers,partials,data) {
    return "null";
},"5":function(container,depth0,helpers,partials,data) {
    var stack1, lookupProperty = container.lookupProperty || function(parent, propertyName) {
        if (Object.prototype.hasOwnProperty.call(parent, propertyName)) {
          return parent[propertyName];
        }
        return undefined
    };

  return ((stack1 = (lookupProperty(helpers,"jsonStringify")||(depth0 && lookupProperty(depth0,"jsonStringify"))||container.hooks.helperMissing).call(depth0 != null ? depth0 : (container.nullContext || {}),(depth0 != null ? lookupProperty(depth0,"schemas") : depth0),{"name":"jsonStringify","hash":{},"data":data,"loc":{"start":{"line":19,"column":40},"end":{"line":19,"column":67}}})) != null ? stack1 : "");
},"compiler":[8,">= 4.3.0"],"main":function(container,depth0,helpers,partials,data) {
    var stack1, helper, alias1=depth0 != null ? depth0 : (container.nullContext || {}), alias2=container.hooks.helperMissing, alias3="function", alias4=container.escapeExpression, lookupProperty = container.lookupProperty || function(parent, propertyName) {
        if (Object.prototype.hasOwnProperty.call(parent, propertyName)) {
          return parent[propertyName];
        }
        return undefined
    };

  return "<div id=\"ds_component_"
    + alias4(((helper = (helper = lookupProperty(helpers,"id") || (depth0 != null ? lookupProperty(depth0,"id") : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"id","hash":{},"data":data,"loc":{"start":{"line":1,"column":22},"end":{"line":1,"column":28}}}) : helper)))
    + "\" class=\"loading\">\r\n    <div class=\"loader\">Loading...</div>\r\n\r\n    <script>\r\n\r\n        // Array to store all Datastore components on the page\r\n        var dsComponents = dsComponents ? dsComponents : [];\r\n\r\n        // On Page Load\r\n        window.addEventListener('DOMContentLoaded', function () {\r\n            \r\n            var dsUrl = "
    + alias4(((helper = (helper = lookupProperty(helpers,"datastore") || (depth0 != null ? lookupProperty(depth0,"datastore") : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"datastore","hash":{},"data":data,"loc":{"start":{"line":12,"column":24},"end":{"line":12,"column":37}}}) : helper)))
    + ".baseURL;\r\n\r\n            dsComponents.push({\r\n                id: '"
    + alias4(((helper = (helper = lookupProperty(helpers,"id") || (depth0 != null ? lookupProperty(depth0,"id") : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"id","hash":{},"data":data,"loc":{"start":{"line":15,"column":21},"end":{"line":15,"column":27}}}) : helper)))
    + "',\r\n                dsUrl: dsUrl,\r\n                manifest: "
    + ((stack1 = (lookupProperty(helpers,"jsonStringify")||(depth0 && lookupProperty(depth0,"jsonStringify"))||alias2).call(alias1,(depth0 != null ? lookupProperty(depth0,"manifest") : depth0),{"name":"jsonStringify","hash":{},"data":data,"loc":{"start":{"line":17,"column":26},"end":{"line":17,"column":54}}})) != null ? stack1 : "")
    + ",\r\n                schema: "
    + ((stack1 = lookupProperty(helpers,"if").call(alias1,(depth0 != null ? lookupProperty(depth0,"schema") : depth0),{"name":"if","hash":{},"fn":container.program(1, data, 0),"inverse":container.program(3, data, 0),"data":data,"loc":{"start":{"line":18,"column":24},"end":{"line":18,"column":83}}})) != null ? stack1 : "")
    + ",\r\n                schemas: "
    + ((stack1 = lookupProperty(helpers,"if").call(alias1,(depth0 != null ? lookupProperty(depth0,"schemas") : depth0),{"name":"if","hash":{},"fn":container.program(5, data, 0),"inverse":container.program(3, data, 0),"data":data,"loc":{"start":{"line":19,"column":25},"end":{"line":19,"column":86}}})) != null ? stack1 : "")
    + ",\r\n                collection: '"
    + alias4(((helper = (helper = lookupProperty(helpers,"collection") || (depth0 != null ? lookupProperty(depth0,"collection") : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"collection","hash":{},"data":data,"loc":{"start":{"line":20,"column":29},"end":{"line":20,"column":43}}}) : helper)))
    + "',\r\n                component: '"
    + ((stack1 = ((helper = (helper = lookupProperty(helpers,"component") || (depth0 != null ? lookupProperty(depth0,"component") : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"component","hash":{},"data":data,"loc":{"start":{"line":21,"column":28},"end":{"line":21,"column":43}}}) : helper))) != null ? stack1 : "")
    + "',\r\n                renderCallback: '"
    + ((stack1 = ((helper = (helper = lookupProperty(helpers,"callback") || (depth0 != null ? lookupProperty(depth0,"callback") : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"callback","hash":{},"data":data,"loc":{"start":{"line":22,"column":33},"end":{"line":22,"column":47}}}) : helper))) != null ? stack1 : "")
    + "',\r\n                type: '"
    + alias4(((helper = (helper = lookupProperty(helpers,"type") || (depth0 != null ? lookupProperty(depth0,"type") : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"type","hash":{},"data":data,"loc":{"start":{"line":23,"column":23},"end":{"line":23,"column":31}}}) : helper)))
    + "'\r\n            });\r\n        });\r\n        \r\n    </script>\r\n</div>\r\n\r\n\r\n";
},"useData":true}