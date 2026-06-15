{"1":function(container,depth0,helpers,partials,data) {
    var stack1, alias1=depth0 != null ? depth0 : (container.nullContext || {}), alias2=container.hooks.helperMissing, lookupProperty = container.lookupProperty || function(parent, propertyName) {
        if (Object.prototype.hasOwnProperty.call(parent, propertyName)) {
          return parent[propertyName];
        }
        return undefined
    };

  return "  <div\n    class=\"\n      qld__loading_spinner\n"
    + ((stack1 = (lookupProperty(helpers,"ifCond")||(depth0 && lookupProperty(depth0,"ifCond"))||alias2).call(alias1,((stack1 = ((stack1 = (depth0 != null ? lookupProperty(depth0,"metadata") : depth0)) != null ? lookupProperty(stack1,"background_colour") : stack1)) != null ? lookupProperty(stack1,"value") : stack1),"==","dark",{"name":"ifCond","hash":{},"fn":container.program(2, data, 0),"inverse":container.noop,"data":data,"loc":{"start":{"line":5,"column":6},"end":{"line":7,"column":17}}})) != null ? stack1 : "")
    + ((stack1 = (lookupProperty(helpers,"ifCond")||(depth0 && lookupProperty(depth0,"ifCond"))||alias2).call(alias1,((stack1 = ((stack1 = (depth0 != null ? lookupProperty(depth0,"metadata") : depth0)) != null ? lookupProperty(stack1,"layout") : stack1)) != null ? lookupProperty(stack1,"value") : stack1),"==","landscape",{"name":"ifCond","hash":{},"fn":container.program(4, data, 0),"inverse":container.noop,"data":data,"loc":{"start":{"line":8,"column":6},"end":{"line":10,"column":17}}})) != null ? stack1 : "")
    + ((stack1 = (lookupProperty(helpers,"ifCond")||(depth0 && lookupProperty(depth0,"ifCond"))||alias2).call(alias1,((stack1 = ((stack1 = (depth0 != null ? lookupProperty(depth0,"metadata") : depth0)) != null ? lookupProperty(stack1,"layout") : stack1)) != null ? lookupProperty(stack1,"value") : stack1),"==","icon_only",{"name":"ifCond","hash":{},"fn":container.program(6, data, 0),"inverse":container.noop,"data":data,"loc":{"start":{"line":11,"column":6},"end":{"line":13,"column":17}}})) != null ? stack1 : "")
    + "    \"\n    role=\"status\"\n  >\n    <span class=\"qld__loading_spinner-wheel\"></span>\n    <div class=\"qld__loading_spinner-label qld__display-md\">\n      "
    + container.escapeExpression(container.lambda(((stack1 = ((stack1 = (depth0 != null ? lookupProperty(depth0,"metadata") : depth0)) != null ? lookupProperty(stack1,"label") : stack1)) != null ? lookupProperty(stack1,"value") : stack1), depth0))
    + "\n    </div>\n  </div>\n";
},"2":function(container,depth0,helpers,partials,data) {
    return "        qld__loading_spinner--dark\n";
},"4":function(container,depth0,helpers,partials,data) {
    return "        qld__loading_spinner--landscape\n";
},"6":function(container,depth0,helpers,partials,data) {
    return "        qld__loading_spinner--icon_only\n";
},"compiler":[8,">= 4.3.0"],"main":function(container,depth0,helpers,partials,data) {
    var stack1, lookupProperty = container.lookupProperty || function(parent, propertyName) {
        if (Object.prototype.hasOwnProperty.call(parent, propertyName)) {
          return parent[propertyName];
        }
        return undefined
    };

  return ((stack1 = lookupProperty(helpers,"with").call(depth0 != null ? depth0 : (container.nullContext || {}),((stack1 = (depth0 != null ? lookupProperty(depth0,"component") : depth0)) != null ? lookupProperty(stack1,"data") : stack1),{"name":"with","hash":{},"fn":container.program(1, data, 0),"inverse":container.noop,"data":data,"loc":{"start":{"line":1,"column":0},"end":{"line":22,"column":9}}})) != null ? stack1 : "");
},"useData":true}