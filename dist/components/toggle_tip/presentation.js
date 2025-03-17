{"1":function(container,depth0,helpers,partials,data) {
    var stack1, helper, alias1=depth0 != null ? depth0 : (container.nullContext || {}), alias2=container.hooks.helperMissing, alias3="function", alias4=container.escapeExpression, alias5=container.lambda, lookupProperty = container.lookupProperty || function(parent, propertyName) {
        if (Object.prototype.hasOwnProperty.call(parent, propertyName)) {
          return parent[propertyName];
        }
        return undefined
    };

  return "    <span class=\"qld__toggle-tip\" id=\""
    + ((stack1 = lookupProperty(helpers,"if").call(alias1,((stack1 = ((stack1 = (depth0 != null ? lookupProperty(depth0,"metadata") : depth0)) != null ? lookupProperty(stack1,"id_field") : stack1)) != null ? lookupProperty(stack1,"value") : stack1),{"name":"if","hash":{},"fn":container.program(2, data, 0),"inverse":container.program(4, data, 0),"data":data,"loc":{"start":{"line":2,"column":38},"end":{"line":2,"column":135}}})) != null ? stack1 : "")
    + "\">\r\n        <button class=\"qld__toggle-tip-trigger\" aria-controls=\"toggle-tip-content-"
    + alias4(((helper = (helper = lookupProperty(helpers,"assetid") || (depth0 != null ? lookupProperty(depth0,"assetid") : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"assetid","hash":{},"data":data,"loc":{"start":{"line":3,"column":82},"end":{"line":3,"column":93}}}) : helper)))
    + "\" aria-expanded=\"false\" aria-label=\"more information\" aria-haspopup=\"dialog\" tabindex=\"0\">\r\n"
    + ((stack1 = (lookupProperty(helpers,"ifCond")||(depth0 && lookupProperty(depth0,"ifCond"))||alias2).call(alias1,((stack1 = ((stack1 = (depth0 != null ? lookupProperty(depth0,"metadata") : depth0)) != null ? lookupProperty(stack1,"definition") : stack1)) != null ? lookupProperty(stack1,"value") : stack1),"==","true",{"name":"ifCond","hash":{},"fn":container.program(6, data, 0),"inverse":container.program(8, data, 0),"data":data,"loc":{"start":{"line":4,"column":8},"end":{"line":21,"column":19}}})) != null ? stack1 : "")
    + "        </button>\r\n        <div class=\"qld__toggle-tip-content qld__toggle-tip-hidden qld__toggle-tip-aligned-"
    + alias4(alias5(((stack1 = ((stack1 = (depth0 != null ? lookupProperty(depth0,"metadata") : depth0)) != null ? lookupProperty(stack1,"content_alignment") : stack1)) != null ? lookupProperty(stack1,"value") : stack1), depth0))
    + "\" id=\"toggle-tip-content-"
    + alias4(((helper = (helper = lookupProperty(helpers,"assetid") || (depth0 != null ? lookupProperty(depth0,"assetid") : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"assetid","hash":{},"data":data,"loc":{"start":{"line":23,"column":152},"end":{"line":23,"column":163}}}) : helper)))
    + "\" role=\"status\">\r\n"
    + ((stack1 = lookupProperty(helpers,"if").call(alias1,((stack1 = ((stack1 = (depth0 != null ? lookupProperty(depth0,"metadata") : depth0)) != null ? lookupProperty(stack1,"heading") : stack1)) != null ? lookupProperty(stack1,"value") : stack1),{"name":"if","hash":{},"fn":container.program(16, data, 0),"inverse":container.noop,"data":data,"loc":{"start":{"line":24,"column":12},"end":{"line":28,"column":19}}})) != null ? stack1 : "")
    + "            "
    + ((stack1 = alias5(((stack1 = ((stack1 = (depth0 != null ? lookupProperty(depth0,"metadata") : depth0)) != null ? lookupProperty(stack1,"content") : stack1)) != null ? lookupProperty(stack1,"value") : stack1), depth0)) != null ? stack1 : "")
    + "\r\n"
    + ((stack1 = lookupProperty(helpers,"if").call(alias1,((stack1 = ((stack1 = (depth0 != null ? lookupProperty(depth0,"metadata") : depth0)) != null ? lookupProperty(stack1,"link_text") : stack1)) != null ? lookupProperty(stack1,"value") : stack1),{"name":"if","hash":{},"fn":container.program(18, data, 0),"inverse":container.noop,"data":data,"loc":{"start":{"line":30,"column":12},"end":{"line":34,"column":19}}})) != null ? stack1 : "")
    + "        </div>\r\n        <div class=\"qld__toggle-tip-content-carat qld__toggle-tip-hidden\"></div>\r\n    </span>\r\n";
},"2":function(container,depth0,helpers,partials,data) {
    var stack1, lookupProperty = container.lookupProperty || function(parent, propertyName) {
        if (Object.prototype.hasOwnProperty.call(parent, propertyName)) {
          return parent[propertyName];
        }
        return undefined
    };

  return ((stack1 = container.lambda(((stack1 = ((stack1 = (depth0 != null ? lookupProperty(depth0,"metadata") : depth0)) != null ? lookupProperty(stack1,"id_field") : stack1)) != null ? lookupProperty(stack1,"value") : stack1), depth0)) != null ? stack1 : "");
},"4":function(container,depth0,helpers,partials,data) {
    var helper, lookupProperty = container.lookupProperty || function(parent, propertyName) {
        if (Object.prototype.hasOwnProperty.call(parent, propertyName)) {
          return parent[propertyName];
        }
        return undefined
    };

  return "toggle-tip-"
    + container.escapeExpression(((helper = (helper = lookupProperty(helpers,"assetid") || (depth0 != null ? lookupProperty(depth0,"assetid") : depth0)) != null ? helper : container.hooks.helperMissing),(typeof helper === "function" ? helper.call(depth0 != null ? depth0 : (container.nullContext || {}),{"name":"assetid","hash":{},"data":data,"loc":{"start":{"line":2,"column":117},"end":{"line":2,"column":128}}}) : helper)));
},"6":function(container,depth0,helpers,partials,data) {
    var stack1, lookupProperty = container.lookupProperty || function(parent, propertyName) {
        if (Object.prototype.hasOwnProperty.call(parent, propertyName)) {
          return parent[propertyName];
        }
        return undefined
    };

  return "            <span class=\"qld__toggle-tip-trigger-definition\">\r\n                "
    + container.escapeExpression(container.lambda(((stack1 = ((stack1 = (depth0 != null ? lookupProperty(depth0,"metadata") : depth0)) != null ? lookupProperty(stack1,"title") : stack1)) != null ? lookupProperty(stack1,"value") : stack1), depth0))
    + "\r\n            </span>\r\n";
},"8":function(container,depth0,helpers,partials,data) {
    var stack1, alias1=depth0 != null ? depth0 : (container.nullContext || {}), alias2=container.hooks.helperMissing, lookupProperty = container.lookupProperty || function(parent, propertyName) {
        if (Object.prototype.hasOwnProperty.call(parent, propertyName)) {
          return parent[propertyName];
        }
        return undefined
    };

  return "            <div class=\"qld__toggle-tip-trigger-icon\">\r\n"
    + ((stack1 = (lookupProperty(helpers,"ifCond")||(depth0 && lookupProperty(depth0,"ifCond"))||alias2).call(alias1,((stack1 = ((stack1 = (depth0 != null ? lookupProperty(depth0,"metadata") : depth0)) != null ? lookupProperty(stack1,"type") : stack1)) != null ? lookupProperty(stack1,"value") : stack1),"==","info",{"name":"ifCond","hash":{},"fn":container.program(9, data, 0),"inverse":container.noop,"data":data,"loc":{"start":{"line":10,"column":16},"end":{"line":14,"column":27}}})) != null ? stack1 : "")
    + ((stack1 = (lookupProperty(helpers,"ifCond")||(depth0 && lookupProperty(depth0,"ifCond"))||alias2).call(alias1,((stack1 = ((stack1 = (depth0 != null ? lookupProperty(depth0,"metadata") : depth0)) != null ? lookupProperty(stack1,"type") : stack1)) != null ? lookupProperty(stack1,"value") : stack1),"==","help",{"name":"ifCond","hash":{},"fn":container.program(14, data, 0),"inverse":container.noop,"data":data,"loc":{"start":{"line":15,"column":16},"end":{"line":19,"column":27}}})) != null ? stack1 : "")
    + "            </div>\r\n";
},"9":function(container,depth0,helpers,partials,data) {
    var stack1, lookupProperty = container.lookupProperty || function(parent, propertyName) {
        if (Object.prototype.hasOwnProperty.call(parent, propertyName)) {
          return parent[propertyName];
        }
        return undefined
    };

  return "                <svg class=\"qld__icon qld__icon--"
    + ((stack1 = (lookupProperty(helpers,"ifCond")||(depth0 && lookupProperty(depth0,"ifCond"))||container.hooks.helperMissing).call(depth0 != null ? depth0 : (container.nullContext || {}),((stack1 = ((stack1 = (depth0 != null ? lookupProperty(depth0,"metadata") : depth0)) != null ? lookupProperty(stack1,"icon_size") : stack1)) != null ? lookupProperty(stack1,"value") : stack1),"==","medium",{"name":"ifCond","hash":{},"fn":container.program(10, data, 0),"inverse":container.program(12, data, 0),"data":data,"loc":{"start":{"line":11,"column":49},"end":{"line":11,"column":122}}})) != null ? stack1 : "")
    + "\" aria-label=\"Information toggle tip\" xmlns=\"http://www.w3.org/2000/svg\">\r\n                    <use href=\""
    + container.escapeExpression(container.lambda(((stack1 = ((stack1 = ((stack1 = ((stack1 = (data && lookupProperty(data,"root"))) && lookupProperty(stack1,"site"))) && lookupProperty(stack1,"metadata"))) && lookupProperty(stack1,"coreSiteIcons"))) && lookupProperty(stack1,"value")), depth0))
    + "#status-info\"></use>\r\n                </svg>\r\n";
},"10":function(container,depth0,helpers,partials,data) {
    return "md";
},"12":function(container,depth0,helpers,partials,data) {
    return "lg";
},"14":function(container,depth0,helpers,partials,data) {
    var stack1, lookupProperty = container.lookupProperty || function(parent, propertyName) {
        if (Object.prototype.hasOwnProperty.call(parent, propertyName)) {
          return parent[propertyName];
        }
        return undefined
    };

  return "                <svg class=\"qld__icon qld__icon--"
    + ((stack1 = (lookupProperty(helpers,"ifCond")||(depth0 && lookupProperty(depth0,"ifCond"))||container.hooks.helperMissing).call(depth0 != null ? depth0 : (container.nullContext || {}),((stack1 = ((stack1 = (depth0 != null ? lookupProperty(depth0,"metadata") : depth0)) != null ? lookupProperty(stack1,"icon_size") : stack1)) != null ? lookupProperty(stack1,"value") : stack1),"==","medium",{"name":"ifCond","hash":{},"fn":container.program(10, data, 0),"inverse":container.program(12, data, 0),"data":data,"loc":{"start":{"line":16,"column":49},"end":{"line":16,"column":122}}})) != null ? stack1 : "")
    + "\" aria-label=\"Help toggle tip\" xmlns=\"http://www.w3.org/2000/svg\">\r\n                    <use href=\""
    + container.escapeExpression(container.lambda(((stack1 = ((stack1 = ((stack1 = ((stack1 = (data && lookupProperty(data,"root"))) && lookupProperty(stack1,"site"))) && lookupProperty(stack1,"metadata"))) && lookupProperty(stack1,"coreSiteIcons"))) && lookupProperty(stack1,"value")), depth0))
    + "#help\"></use>\r\n                </svg>\r\n";
},"16":function(container,depth0,helpers,partials,data) {
    var stack1, lookupProperty = container.lookupProperty || function(parent, propertyName) {
        if (Object.prototype.hasOwnProperty.call(parent, propertyName)) {
          return parent[propertyName];
        }
        return undefined
    };

  return "            <div class=\"qld__toggle-tip-content-heading\">\r\n                "
    + container.escapeExpression(container.lambda(((stack1 = ((stack1 = (depth0 != null ? lookupProperty(depth0,"metadata") : depth0)) != null ? lookupProperty(stack1,"heading") : stack1)) != null ? lookupProperty(stack1,"value") : stack1), depth0))
    + "\r\n            </div>\r\n";
},"18":function(container,depth0,helpers,partials,data) {
    var stack1, alias1=container.lambda, alias2=container.escapeExpression, lookupProperty = container.lookupProperty || function(parent, propertyName) {
        if (Object.prototype.hasOwnProperty.call(parent, propertyName)) {
          return parent[propertyName];
        }
        return undefined
    };

  return "            <div class=\"qld__toggle-tip-content-link\">\r\n                <a href="
    + alias2(alias1(((stack1 = ((stack1 = (depth0 != null ? lookupProperty(depth0,"metadata") : depth0)) != null ? lookupProperty(stack1,"link_url") : stack1)) != null ? lookupProperty(stack1,"value") : stack1), depth0))
    + ">"
    + alias2(alias1(((stack1 = ((stack1 = (depth0 != null ? lookupProperty(depth0,"metadata") : depth0)) != null ? lookupProperty(stack1,"link_text") : stack1)) != null ? lookupProperty(stack1,"value") : stack1), depth0))
    + "</a>\r\n            </div>\r\n";
},"compiler":[8,">= 4.3.0"],"main":function(container,depth0,helpers,partials,data) {
    var stack1, lookupProperty = container.lookupProperty || function(parent, propertyName) {
        if (Object.prototype.hasOwnProperty.call(parent, propertyName)) {
          return parent[propertyName];
        }
        return undefined
    };

  return ((stack1 = lookupProperty(helpers,"with").call(depth0 != null ? depth0 : (container.nullContext || {}),((stack1 = (depth0 != null ? lookupProperty(depth0,"component") : depth0)) != null ? lookupProperty(stack1,"data") : stack1),{"name":"with","hash":{},"fn":container.program(1, data, 0),"inverse":container.noop,"data":data,"loc":{"start":{"line":1,"column":0},"end":{"line":38,"column":9}}})) != null ? stack1 : "");
},"useData":true}