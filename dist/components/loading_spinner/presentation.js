{"1":function(container,depth0,helpers,partials,data) {
    var stack1, alias1=depth0 != null ? depth0 : (container.nullContext || {}), alias2=container.hooks.helperMissing, lookupProperty = container.lookupProperty || function(parent, propertyName) {
        if (Object.prototype.hasOwnProperty.call(parent, propertyName)) {
          return parent[propertyName];
        }
        return undefined
    };

  return "    <div class=\"qld__loading_spinner"
    + ((stack1 = (lookupProperty(helpers,"ifCond")||(depth0 && lookupProperty(depth0,"ifCond"))||alias2).call(alias1,((stack1 = ((stack1 = (depth0 != null ? lookupProperty(depth0,"metadata") : depth0)) != null ? lookupProperty(stack1,"background_colour") : stack1)) != null ? lookupProperty(stack1,"value") : stack1),"==","dark",{"name":"ifCond","hash":{},"fn":container.program(2, data, 0),"inverse":container.noop,"data":data,"loc":{"start":{"line":2,"column":36},"end":{"line":2,"column":130}}})) != null ? stack1 : "")
    + ((stack1 = (lookupProperty(helpers,"ifCond")||(depth0 && lookupProperty(depth0,"ifCond"))||alias2).call(alias1,((stack1 = ((stack1 = (depth0 != null ? lookupProperty(depth0,"metadata") : depth0)) != null ? lookupProperty(stack1,"layout") : stack1)) != null ? lookupProperty(stack1,"value") : stack1),"==","landscape",{"name":"ifCond","hash":{},"fn":container.program(4, data, 0),"inverse":container.noop,"data":data,"loc":{"start":{"line":2,"column":130},"end":{"line":2,"column":223}}})) != null ? stack1 : "")
    + ((stack1 = (lookupProperty(helpers,"ifCond")||(depth0 && lookupProperty(depth0,"ifCond"))||alias2).call(alias1,((stack1 = ((stack1 = (depth0 != null ? lookupProperty(depth0,"metadata") : depth0)) != null ? lookupProperty(stack1,"layout") : stack1)) != null ? lookupProperty(stack1,"value") : stack1),"==","icon_only",{"name":"ifCond","hash":{},"fn":container.program(6, data, 0),"inverse":container.noop,"data":data,"loc":{"start":{"line":2,"column":223},"end":{"line":2,"column":316}}})) != null ? stack1 : "")
    + "\" role=\"status\">\r\n        <span class=\"qld__loading_spinner-wheel\"></span>\r\n        <div class=\"qld__loading_spinner-label qld__display-md\">"
    + container.escapeExpression(container.lambda(((stack1 = ((stack1 = (depth0 != null ? lookupProperty(depth0,"metadata") : depth0)) != null ? lookupProperty(stack1,"label") : stack1)) != null ? lookupProperty(stack1,"value") : stack1), depth0))
    + "</div>\r\n    </div>\r\n";
},"2":function(container,depth0,helpers,partials,data) {
    return " qld__loading_spinner--dark";
},"4":function(container,depth0,helpers,partials,data) {
    return " qld__loading_spinner--landscape";
},"6":function(container,depth0,helpers,partials,data) {
    return " qld__loading_spinner--icon_only";
},"compiler":[8,">= 4.3.0"],"main":function(container,depth0,helpers,partials,data) {
    var stack1, lookupProperty = container.lookupProperty || function(parent, propertyName) {
        if (Object.prototype.hasOwnProperty.call(parent, propertyName)) {
          return parent[propertyName];
        }
        return undefined
    };

  return ((stack1 = lookupProperty(helpers,"with").call(depth0 != null ? depth0 : (container.nullContext || {}),((stack1 = (depth0 != null ? lookupProperty(depth0,"component") : depth0)) != null ? lookupProperty(stack1,"data") : stack1),{"name":"with","hash":{},"fn":container.program(1, data, 0),"inverse":container.noop,"data":data,"loc":{"start":{"line":1,"column":0},"end":{"line":6,"column":9}}})) != null ? stack1 : "");
},"useData":true}