{"1":function(container,depth0,helpers,partials,data) {
    var stack1, alias1=depth0 != null ? depth0 : (container.nullContext || {}), alias2=container.hooks.helperMissing, alias3=container.lambda, alias4=container.escapeExpression, lookupProperty = container.lookupProperty || function(parent, propertyName) {
        if (Object.prototype.hasOwnProperty.call(parent, propertyName)) {
          return parent[propertyName];
        }
        return undefined
    };

  return "    <div \r\n    role=\"region\" \r\n    aria-label=\""
    + ((stack1 = (lookupProperty(helpers,"ifCond")||(depth0 && lookupProperty(depth0,"ifCond"))||alias2).call(alias1,((stack1 = ((stack1 = ((stack1 = (depth0 != null ? lookupProperty(depth0,"site") : depth0)) != null ? lookupProperty(stack1,"metadata") : stack1)) != null ? lookupProperty(stack1,"alertLevel") : stack1)) != null ? lookupProperty(stack1,"value") : stack1),"==","default",{"name":"ifCond","hash":{},"fn":container.program(2, data, 0),"inverse":container.noop,"data":data,"loc":{"start":{"line":4,"column":16},"end":{"line":4,"column":91}}})) != null ? stack1 : "")
    + ((stack1 = (lookupProperty(helpers,"ifCond")||(depth0 && lookupProperty(depth0,"ifCond"))||alias2).call(alias1,((stack1 = ((stack1 = ((stack1 = (depth0 != null ? lookupProperty(depth0,"site") : depth0)) != null ? lookupProperty(stack1,"metadata") : stack1)) != null ? lookupProperty(stack1,"alertLevel") : stack1)) != null ? lookupProperty(stack1,"value") : stack1),"==","critical",{"name":"ifCond","hash":{},"fn":container.program(4, data, 0),"inverse":container.noop,"data":data,"loc":{"start":{"line":4,"column":91},"end":{"line":4,"column":165}}})) != null ? stack1 : "")
    + ((stack1 = (lookupProperty(helpers,"ifCond")||(depth0 && lookupProperty(depth0,"ifCond"))||alias2).call(alias1,((stack1 = ((stack1 = ((stack1 = (depth0 != null ? lookupProperty(depth0,"site") : depth0)) != null ? lookupProperty(stack1,"metadata") : stack1)) != null ? lookupProperty(stack1,"alertLevel") : stack1)) != null ? lookupProperty(stack1,"value") : stack1),"==","general",{"name":"ifCond","hash":{},"fn":container.program(6, data, 0),"inverse":container.noop,"data":data,"loc":{"start":{"line":4,"column":165},"end":{"line":4,"column":244}}})) != null ? stack1 : "")
    + "\" \r\n    class=\"qld__global-alert qld__global-alert--"
    + alias4(alias3(((stack1 = ((stack1 = ((stack1 = (depth0 != null ? lookupProperty(depth0,"site") : depth0)) != null ? lookupProperty(stack1,"metadata") : stack1)) != null ? lookupProperty(stack1,"alertLevel") : stack1)) != null ? lookupProperty(stack1,"value") : stack1), depth0))
    + "\">\r\n \r\n        <div class=\"container-fluid\">\r\n            <div class=\"qld__global-alert__main\">\r\n                <div class=\"qld__global-alert__icon\">\r\n"
    + ((stack1 = (lookupProperty(helpers,"ifCond")||(depth0 && lookupProperty(depth0,"ifCond"))||alias2).call(alias1,((stack1 = ((stack1 = ((stack1 = (depth0 != null ? lookupProperty(depth0,"site") : depth0)) != null ? lookupProperty(stack1,"metadata") : stack1)) != null ? lookupProperty(stack1,"alertLevel") : stack1)) != null ? lookupProperty(stack1,"value") : stack1),"==","default",{"name":"ifCond","hash":{},"fn":container.program(8, data, 0),"inverse":container.noop,"data":data,"loc":{"start":{"line":10,"column":20},"end":{"line":12,"column":31}}})) != null ? stack1 : "")
    + ((stack1 = (lookupProperty(helpers,"ifCond")||(depth0 && lookupProperty(depth0,"ifCond"))||alias2).call(alias1,((stack1 = ((stack1 = ((stack1 = (depth0 != null ? lookupProperty(depth0,"site") : depth0)) != null ? lookupProperty(stack1,"metadata") : stack1)) != null ? lookupProperty(stack1,"alertLevel") : stack1)) != null ? lookupProperty(stack1,"value") : stack1),"==","critical",{"name":"ifCond","hash":{},"fn":container.program(10, data, 0),"inverse":container.noop,"data":data,"loc":{"start":{"line":13,"column":20},"end":{"line":15,"column":31}}})) != null ? stack1 : "")
    + ((stack1 = (lookupProperty(helpers,"ifCond")||(depth0 && lookupProperty(depth0,"ifCond"))||alias2).call(alias1,((stack1 = ((stack1 = ((stack1 = (depth0 != null ? lookupProperty(depth0,"site") : depth0)) != null ? lookupProperty(stack1,"metadata") : stack1)) != null ? lookupProperty(stack1,"alertLevel") : stack1)) != null ? lookupProperty(stack1,"value") : stack1),"==","general",{"name":"ifCond","hash":{},"fn":container.program(12, data, 0),"inverse":container.noop,"data":data,"loc":{"start":{"line":16,"column":20},"end":{"line":18,"column":31}}})) != null ? stack1 : "")
    + "                </div>\r\n                <div class=\"qld__global-alert__content\">\r\n"
    + ((stack1 = lookupProperty(helpers,"if").call(alias1,((stack1 = ((stack1 = ((stack1 = (depth0 != null ? lookupProperty(depth0,"site") : depth0)) != null ? lookupProperty(stack1,"metadata") : stack1)) != null ? lookupProperty(stack1,"alertMessage") : stack1)) != null ? lookupProperty(stack1,"value") : stack1),{"name":"if","hash":{},"fn":container.program(14, data, 0),"inverse":container.noop,"data":data,"loc":{"start":{"line":21,"column":20},"end":{"line":25,"column":27}}})) != null ? stack1 : "")
    + "                    <div class=\"qld__global-alert__action\">\r\n                        <a href=\""
    + alias4(alias3(((stack1 = ((stack1 = ((stack1 = (depth0 != null ? lookupProperty(depth0,"site") : depth0)) != null ? lookupProperty(stack1,"metadata") : stack1)) != null ? lookupProperty(stack1,"alertLinkURL") : stack1)) != null ? lookupProperty(stack1,"value") : stack1), depth0))
    + "\">\r\n                            <span>"
    + alias4(alias3(((stack1 = ((stack1 = ((stack1 = (depth0 != null ? lookupProperty(depth0,"site") : depth0)) != null ? lookupProperty(stack1,"metadata") : stack1)) != null ? lookupProperty(stack1,"alertLinkTitle") : stack1)) != null ? lookupProperty(stack1,"value") : stack1), depth0))
    + "</span>\r\n                            <svg class=\"qld__icon qld__icon--sm\" role=\"img\" aria-hidden=\"true\" focusable=\"false\" xmlns=\"http://www.w3.org/2000/svg\"><use href=\""
    + alias4(alias3(((stack1 = ((stack1 = ((stack1 = ((stack1 = (data && lookupProperty(data,"root"))) && lookupProperty(stack1,"site"))) && lookupProperty(stack1,"metadata"))) && lookupProperty(stack1,"coreSiteIcons"))) && lookupProperty(stack1,"value")), depth0))
    + "#arrow-right\"></use></svg>\r\n                        </a>   \r\n                    </div>\r\n                </div>\r\n                <div class=\"qld__global-alert__close\">\r\n                    <button aria-label=\"Close alert\">\r\n                        <svg class=\"qld__icon qld__icon--sm\" role=\"img\" aria-hidden=\"true\" focusable=\"false\" xmlns=\"http://www.w3.org/2000/svg\"><use href=\""
    + alias4(alias3(((stack1 = ((stack1 = ((stack1 = ((stack1 = (data && lookupProperty(data,"root"))) && lookupProperty(stack1,"site"))) && lookupProperty(stack1,"metadata"))) && lookupProperty(stack1,"coreSiteIcons"))) && lookupProperty(stack1,"value")), depth0))
    + "#close\"></use></svg>\r\n                    </button>\r\n                </div>\r\n            </div>\r\n        </div> \r\n    </div>\r\n";
},"2":function(container,depth0,helpers,partials,data) {
    return "Warning";
},"4":function(container,depth0,helpers,partials,data) {
    return "Alert";
},"6":function(container,depth0,helpers,partials,data) {
    return "Information";
},"8":function(container,depth0,helpers,partials,data) {
    var stack1, lookupProperty = container.lookupProperty || function(parent, propertyName) {
        if (Object.prototype.hasOwnProperty.call(parent, propertyName)) {
          return parent[propertyName];
        }
        return undefined
    };

  return "                    <svg class=\"qld__icon qld__icon--md\" role=\"img\" aria-label=\"Warning icon\" focusable=\"false\" xmlns=\"http://www.w3.org/2000/svg\"><use href=\""
    + container.escapeExpression(container.lambda(((stack1 = ((stack1 = ((stack1 = ((stack1 = (data && lookupProperty(data,"root"))) && lookupProperty(stack1,"site"))) && lookupProperty(stack1,"metadata"))) && lookupProperty(stack1,"coreSiteIcons"))) && lookupProperty(stack1,"value")), depth0))
    + "#alert-warning\"></use></svg>\r\n";
},"10":function(container,depth0,helpers,partials,data) {
    var stack1, lookupProperty = container.lookupProperty || function(parent, propertyName) {
        if (Object.prototype.hasOwnProperty.call(parent, propertyName)) {
          return parent[propertyName];
        }
        return undefined
    };

  return "                    <svg class=\"qld__icon qld__icon--md\" role=\"img\" aria-label=\"Alert icon\" focusable=\"false\" xmlns=\"http://www.w3.org/2000/svg\"><use href=\""
    + container.escapeExpression(container.lambda(((stack1 = ((stack1 = ((stack1 = ((stack1 = (data && lookupProperty(data,"root"))) && lookupProperty(stack1,"site"))) && lookupProperty(stack1,"metadata"))) && lookupProperty(stack1,"coreSiteIcons"))) && lookupProperty(stack1,"value")), depth0))
    + "#alert-danger\"></use></svg>\r\n";
},"12":function(container,depth0,helpers,partials,data) {
    var stack1, lookupProperty = container.lookupProperty || function(parent, propertyName) {
        if (Object.prototype.hasOwnProperty.call(parent, propertyName)) {
          return parent[propertyName];
        }
        return undefined
    };

  return "                    <svg class=\"qld__icon qld__icon--md\" role=\"img\" aria-label=\"Information icon\" focusable=\"false\" xmlns=\"http://www.w3.org/2000/svg\"><use href=\""
    + container.escapeExpression(container.lambda(((stack1 = ((stack1 = ((stack1 = ((stack1 = (data && lookupProperty(data,"root"))) && lookupProperty(stack1,"site"))) && lookupProperty(stack1,"metadata"))) && lookupProperty(stack1,"coreSiteIcons"))) && lookupProperty(stack1,"value")), depth0))
    + "#alert-information\"></use></svg>\r\n";
},"14":function(container,depth0,helpers,partials,data) {
    var stack1, alias1=container.lambda, alias2=container.escapeExpression, lookupProperty = container.lookupProperty || function(parent, propertyName) {
        if (Object.prototype.hasOwnProperty.call(parent, propertyName)) {
          return parent[propertyName];
        }
        return undefined
    };

  return "                    <div class=\"qld__global-alert__message\">\r\n                    <strong>"
    + alias2(alias1(((stack1 = ((stack1 = ((stack1 = (depth0 != null ? lookupProperty(depth0,"site") : depth0)) != null ? lookupProperty(stack1,"metadata") : stack1)) != null ? lookupProperty(stack1,"alertTitle") : stack1)) != null ? lookupProperty(stack1,"value") : stack1), depth0))
    + "</strong> "
    + alias2(alias1(((stack1 = ((stack1 = ((stack1 = (depth0 != null ? lookupProperty(depth0,"site") : depth0)) != null ? lookupProperty(stack1,"metadata") : stack1)) != null ? lookupProperty(stack1,"alertMessage") : stack1)) != null ? lookupProperty(stack1,"value") : stack1), depth0))
    + "    \r\n                    </div>\r\n";
},"16":function(container,depth0,helpers,partials,data) {
    var stack1, alias1=depth0 != null ? depth0 : (container.nullContext || {}), alias2=container.hooks.helperMissing, alias3=container.lambda, alias4=container.escapeExpression, lookupProperty = container.lookupProperty || function(parent, propertyName) {
        if (Object.prototype.hasOwnProperty.call(parent, propertyName)) {
          return parent[propertyName];
        }
        return undefined
    };

  return "        <div \r\n        role=\"region\" \r\n        aria-label=\""
    + ((stack1 = (lookupProperty(helpers,"ifCond")||(depth0 && lookupProperty(depth0,"ifCond"))||alias2).call(alias1,((stack1 = ((stack1 = ((stack1 = (depth0 != null ? lookupProperty(depth0,"site") : depth0)) != null ? lookupProperty(stack1,"metadata") : stack1)) != null ? lookupProperty(stack1,"secondAlertLevel") : stack1)) != null ? lookupProperty(stack1,"value") : stack1),"==","default",{"name":"ifCond","hash":{},"fn":container.program(2, data, 0),"inverse":container.noop,"data":data,"loc":{"start":{"line":45,"column":20},"end":{"line":45,"column":101}}})) != null ? stack1 : "")
    + ((stack1 = (lookupProperty(helpers,"ifCond")||(depth0 && lookupProperty(depth0,"ifCond"))||alias2).call(alias1,((stack1 = ((stack1 = ((stack1 = (depth0 != null ? lookupProperty(depth0,"site") : depth0)) != null ? lookupProperty(stack1,"metadata") : stack1)) != null ? lookupProperty(stack1,"secondAlertLevel") : stack1)) != null ? lookupProperty(stack1,"value") : stack1),"==","critical",{"name":"ifCond","hash":{},"fn":container.program(4, data, 0),"inverse":container.noop,"data":data,"loc":{"start":{"line":45,"column":101},"end":{"line":45,"column":181}}})) != null ? stack1 : "")
    + ((stack1 = (lookupProperty(helpers,"ifCond")||(depth0 && lookupProperty(depth0,"ifCond"))||alias2).call(alias1,((stack1 = ((stack1 = ((stack1 = (depth0 != null ? lookupProperty(depth0,"site") : depth0)) != null ? lookupProperty(stack1,"metadata") : stack1)) != null ? lookupProperty(stack1,"secondAlertLevel") : stack1)) != null ? lookupProperty(stack1,"value") : stack1),"==","general",{"name":"ifCond","hash":{},"fn":container.program(6, data, 0),"inverse":container.noop,"data":data,"loc":{"start":{"line":45,"column":181},"end":{"line":45,"column":266}}})) != null ? stack1 : "")
    + "\"\r\n        class=\"qld__global-alert qld__global-alert--"
    + alias4(alias3(((stack1 = ((stack1 = ((stack1 = (depth0 != null ? lookupProperty(depth0,"site") : depth0)) != null ? lookupProperty(stack1,"metadata") : stack1)) != null ? lookupProperty(stack1,"secondAlertLevel") : stack1)) != null ? lookupProperty(stack1,"value") : stack1), depth0))
    + "\">\r\n        <div class=\"container-fluid\">\r\n            <div class=\"qld__global-alert__main\">\r\n                <div class=\"qld__global-alert__icon\">\r\n"
    + ((stack1 = (lookupProperty(helpers,"ifCond")||(depth0 && lookupProperty(depth0,"ifCond"))||alias2).call(alias1,((stack1 = ((stack1 = ((stack1 = (depth0 != null ? lookupProperty(depth0,"site") : depth0)) != null ? lookupProperty(stack1,"metadata") : stack1)) != null ? lookupProperty(stack1,"secondAlertLevel") : stack1)) != null ? lookupProperty(stack1,"value") : stack1),"==","default",{"name":"ifCond","hash":{},"fn":container.program(8, data, 0),"inverse":container.noop,"data":data,"loc":{"start":{"line":50,"column":20},"end":{"line":52,"column":31}}})) != null ? stack1 : "")
    + ((stack1 = (lookupProperty(helpers,"ifCond")||(depth0 && lookupProperty(depth0,"ifCond"))||alias2).call(alias1,((stack1 = ((stack1 = ((stack1 = (depth0 != null ? lookupProperty(depth0,"site") : depth0)) != null ? lookupProperty(stack1,"metadata") : stack1)) != null ? lookupProperty(stack1,"secondAlertLevel") : stack1)) != null ? lookupProperty(stack1,"value") : stack1),"==","critical",{"name":"ifCond","hash":{},"fn":container.program(10, data, 0),"inverse":container.noop,"data":data,"loc":{"start":{"line":53,"column":20},"end":{"line":55,"column":31}}})) != null ? stack1 : "")
    + ((stack1 = (lookupProperty(helpers,"ifCond")||(depth0 && lookupProperty(depth0,"ifCond"))||alias2).call(alias1,((stack1 = ((stack1 = ((stack1 = (depth0 != null ? lookupProperty(depth0,"site") : depth0)) != null ? lookupProperty(stack1,"metadata") : stack1)) != null ? lookupProperty(stack1,"secondAlertLevel") : stack1)) != null ? lookupProperty(stack1,"value") : stack1),"==","general",{"name":"ifCond","hash":{},"fn":container.program(12, data, 0),"inverse":container.noop,"data":data,"loc":{"start":{"line":56,"column":20},"end":{"line":58,"column":31}}})) != null ? stack1 : "")
    + "                </div>\r\n                <div class=\"qld__global-alert__content\">\r\n"
    + ((stack1 = lookupProperty(helpers,"if").call(alias1,((stack1 = ((stack1 = ((stack1 = (depth0 != null ? lookupProperty(depth0,"site") : depth0)) != null ? lookupProperty(stack1,"metadata") : stack1)) != null ? lookupProperty(stack1,"secondAlertMessage") : stack1)) != null ? lookupProperty(stack1,"value") : stack1),{"name":"if","hash":{},"fn":container.program(17, data, 0),"inverse":container.noop,"data":data,"loc":{"start":{"line":61,"column":20},"end":{"line":65,"column":27}}})) != null ? stack1 : "")
    + "                    <div class=\"qld__global-alert__action\">\r\n                        <a href=\""
    + alias4(alias3(((stack1 = ((stack1 = ((stack1 = (depth0 != null ? lookupProperty(depth0,"site") : depth0)) != null ? lookupProperty(stack1,"metadata") : stack1)) != null ? lookupProperty(stack1,"secondAlertLinkURL") : stack1)) != null ? lookupProperty(stack1,"value") : stack1), depth0))
    + "\">\r\n                            <span>"
    + alias4(alias3(((stack1 = ((stack1 = ((stack1 = (depth0 != null ? lookupProperty(depth0,"site") : depth0)) != null ? lookupProperty(stack1,"metadata") : stack1)) != null ? lookupProperty(stack1,"secondAlertLinkTitle") : stack1)) != null ? lookupProperty(stack1,"value") : stack1), depth0))
    + "</span>\r\n                            <svg class=\"qld__icon qld__icon--sm\" role=\"img\" aria-hidden=\"true\" focusable=\"false\" xmlns=\"http://www.w3.org/2000/svg\"><use href=\""
    + alias4(alias3(((stack1 = ((stack1 = ((stack1 = ((stack1 = (data && lookupProperty(data,"root"))) && lookupProperty(stack1,"site"))) && lookupProperty(stack1,"metadata"))) && lookupProperty(stack1,"coreSiteIcons"))) && lookupProperty(stack1,"value")), depth0))
    + "#arrow-right\"></use></svg>\r\n                        </a>   \r\n                    </div>\r\n                </div>\r\n                <div class=\"qld__global-alert__close\">\r\n                    <button aria-label=\"Close alert\">\r\n                        <svg class=\"qld__icon qld__icon--sm\" role=\"img\" aria-hidden=\"true\" focusable=\"false\" xmlns=\"http://www.w3.org/2000/svg\"><use href=\""
    + alias4(alias3(((stack1 = ((stack1 = ((stack1 = ((stack1 = (data && lookupProperty(data,"root"))) && lookupProperty(stack1,"site"))) && lookupProperty(stack1,"metadata"))) && lookupProperty(stack1,"coreSiteIcons"))) && lookupProperty(stack1,"value")), depth0))
    + "#close\"></use></svg>\r\n                    </button>\r\n                </div>\r\n            </div>\r\n        </div> \r\n    </div>\r\n";
},"17":function(container,depth0,helpers,partials,data) {
    var stack1, alias1=container.lambda, alias2=container.escapeExpression, lookupProperty = container.lookupProperty || function(parent, propertyName) {
        if (Object.prototype.hasOwnProperty.call(parent, propertyName)) {
          return parent[propertyName];
        }
        return undefined
    };

  return "                    <div class=\"qld__global-alert__message\">\r\n                    <strong>"
    + alias2(alias1(((stack1 = ((stack1 = ((stack1 = (depth0 != null ? lookupProperty(depth0,"site") : depth0)) != null ? lookupProperty(stack1,"metadata") : stack1)) != null ? lookupProperty(stack1,"secondAlertTitle") : stack1)) != null ? lookupProperty(stack1,"value") : stack1), depth0))
    + "</strong> "
    + alias2(alias1(((stack1 = ((stack1 = ((stack1 = (depth0 != null ? lookupProperty(depth0,"site") : depth0)) != null ? lookupProperty(stack1,"metadata") : stack1)) != null ? lookupProperty(stack1,"secondAlertMessage") : stack1)) != null ? lookupProperty(stack1,"value") : stack1), depth0))
    + "    \r\n                    </div>\r\n";
},"19":function(container,depth0,helpers,partials,data) {
    var stack1, alias1=depth0 != null ? depth0 : (container.nullContext || {}), alias2=container.hooks.helperMissing, alias3=container.lambda, alias4=container.escapeExpression, lookupProperty = container.lookupProperty || function(parent, propertyName) {
        if (Object.prototype.hasOwnProperty.call(parent, propertyName)) {
          return parent[propertyName];
        }
        return undefined
    };

  return "    <div \r\n        role=\"region\" \r\n        aria-label=\""
    + ((stack1 = (lookupProperty(helpers,"ifCond")||(depth0 && lookupProperty(depth0,"ifCond"))||alias2).call(alias1,((stack1 = ((stack1 = ((stack1 = (depth0 != null ? lookupProperty(depth0,"site") : depth0)) != null ? lookupProperty(stack1,"metadata") : stack1)) != null ? lookupProperty(stack1,"thirdAlertLevel") : stack1)) != null ? lookupProperty(stack1,"value") : stack1),"==","default",{"name":"ifCond","hash":{},"fn":container.program(2, data, 0),"inverse":container.noop,"data":data,"loc":{"start":{"line":85,"column":20},"end":{"line":85,"column":100}}})) != null ? stack1 : "")
    + ((stack1 = (lookupProperty(helpers,"ifCond")||(depth0 && lookupProperty(depth0,"ifCond"))||alias2).call(alias1,((stack1 = ((stack1 = ((stack1 = (depth0 != null ? lookupProperty(depth0,"site") : depth0)) != null ? lookupProperty(stack1,"metadata") : stack1)) != null ? lookupProperty(stack1,"thirdAlertLevel") : stack1)) != null ? lookupProperty(stack1,"value") : stack1),"==","critical",{"name":"ifCond","hash":{},"fn":container.program(4, data, 0),"inverse":container.noop,"data":data,"loc":{"start":{"line":85,"column":100},"end":{"line":85,"column":179}}})) != null ? stack1 : "")
    + ((stack1 = (lookupProperty(helpers,"ifCond")||(depth0 && lookupProperty(depth0,"ifCond"))||alias2).call(alias1,((stack1 = ((stack1 = ((stack1 = (depth0 != null ? lookupProperty(depth0,"site") : depth0)) != null ? lookupProperty(stack1,"metadata") : stack1)) != null ? lookupProperty(stack1,"thirdAlertLevel") : stack1)) != null ? lookupProperty(stack1,"value") : stack1),"==","general",{"name":"ifCond","hash":{},"fn":container.program(6, data, 0),"inverse":container.noop,"data":data,"loc":{"start":{"line":85,"column":179},"end":{"line":85,"column":263}}})) != null ? stack1 : "")
    + "\"\r\n        class=\"qld__global-alert qld__global-alert--"
    + alias4(alias3(((stack1 = ((stack1 = ((stack1 = (depth0 != null ? lookupProperty(depth0,"site") : depth0)) != null ? lookupProperty(stack1,"metadata") : stack1)) != null ? lookupProperty(stack1,"thirdAlertLevel") : stack1)) != null ? lookupProperty(stack1,"value") : stack1), depth0))
    + "\">\r\n        <div class=\"container-fluid\">\r\n            <div class=\"qld__global-alert__main\">\r\n                <div class=\"qld__global-alert__icon\">\r\n"
    + ((stack1 = (lookupProperty(helpers,"ifCond")||(depth0 && lookupProperty(depth0,"ifCond"))||alias2).call(alias1,((stack1 = ((stack1 = ((stack1 = (depth0 != null ? lookupProperty(depth0,"site") : depth0)) != null ? lookupProperty(stack1,"metadata") : stack1)) != null ? lookupProperty(stack1,"thirdAlertLevel") : stack1)) != null ? lookupProperty(stack1,"value") : stack1),"==","default",{"name":"ifCond","hash":{},"fn":container.program(8, data, 0),"inverse":container.noop,"data":data,"loc":{"start":{"line":90,"column":20},"end":{"line":92,"column":31}}})) != null ? stack1 : "")
    + ((stack1 = (lookupProperty(helpers,"ifCond")||(depth0 && lookupProperty(depth0,"ifCond"))||alias2).call(alias1,((stack1 = ((stack1 = ((stack1 = (depth0 != null ? lookupProperty(depth0,"site") : depth0)) != null ? lookupProperty(stack1,"metadata") : stack1)) != null ? lookupProperty(stack1,"thirdAlertLevel") : stack1)) != null ? lookupProperty(stack1,"value") : stack1),"==","critical",{"name":"ifCond","hash":{},"fn":container.program(10, data, 0),"inverse":container.noop,"data":data,"loc":{"start":{"line":93,"column":20},"end":{"line":95,"column":31}}})) != null ? stack1 : "")
    + ((stack1 = (lookupProperty(helpers,"ifCond")||(depth0 && lookupProperty(depth0,"ifCond"))||alias2).call(alias1,((stack1 = ((stack1 = ((stack1 = (depth0 != null ? lookupProperty(depth0,"site") : depth0)) != null ? lookupProperty(stack1,"metadata") : stack1)) != null ? lookupProperty(stack1,"thirdAlertLevel") : stack1)) != null ? lookupProperty(stack1,"value") : stack1),"==","general",{"name":"ifCond","hash":{},"fn":container.program(12, data, 0),"inverse":container.noop,"data":data,"loc":{"start":{"line":96,"column":20},"end":{"line":98,"column":31}}})) != null ? stack1 : "")
    + "                </div>\r\n                <div class=\"qld__global-alert__content\">\r\n"
    + ((stack1 = lookupProperty(helpers,"if").call(alias1,((stack1 = ((stack1 = ((stack1 = (depth0 != null ? lookupProperty(depth0,"site") : depth0)) != null ? lookupProperty(stack1,"metadata") : stack1)) != null ? lookupProperty(stack1,"thirdAlertMessage") : stack1)) != null ? lookupProperty(stack1,"value") : stack1),{"name":"if","hash":{},"fn":container.program(20, data, 0),"inverse":container.noop,"data":data,"loc":{"start":{"line":101,"column":20},"end":{"line":105,"column":27}}})) != null ? stack1 : "")
    + "                    <div class=\"qld__global-alert__action\">\r\n                        <a href=\""
    + alias4(alias3(((stack1 = ((stack1 = ((stack1 = (depth0 != null ? lookupProperty(depth0,"site") : depth0)) != null ? lookupProperty(stack1,"metadata") : stack1)) != null ? lookupProperty(stack1,"thirdAlertLinkURL") : stack1)) != null ? lookupProperty(stack1,"value") : stack1), depth0))
    + "\">\r\n                            <span>"
    + alias4(alias3(((stack1 = ((stack1 = ((stack1 = (depth0 != null ? lookupProperty(depth0,"site") : depth0)) != null ? lookupProperty(stack1,"metadata") : stack1)) != null ? lookupProperty(stack1,"thirdAlertLinkTitle") : stack1)) != null ? lookupProperty(stack1,"value") : stack1), depth0))
    + "</span>\r\n                            <svg class=\"qld__icon qld__icon--sm\" role=\"img\" aria-hidden=\"true\" focusable=\"false\" xmlns=\"http://www.w3.org/2000/svg\"><use href=\""
    + alias4(alias3(((stack1 = ((stack1 = ((stack1 = ((stack1 = (data && lookupProperty(data,"root"))) && lookupProperty(stack1,"site"))) && lookupProperty(stack1,"metadata"))) && lookupProperty(stack1,"coreSiteIcons"))) && lookupProperty(stack1,"value")), depth0))
    + "#arrow-right\"></use></svg>\r\n                        </a>   \r\n                    </div>\r\n                </div>\r\n                <div class=\"qld__global-alert__close\">\r\n                    <button aria-label=\"Close alert\">\r\n                        <svg class=\"qld__icon qld__icon--sm\" role=\"img\" aria-hidden=\"true\" focusable=\"false\" xmlns=\"http://www.w3.org/2000/svg\"><use href=\""
    + alias4(alias3(((stack1 = ((stack1 = ((stack1 = ((stack1 = (data && lookupProperty(data,"root"))) && lookupProperty(stack1,"site"))) && lookupProperty(stack1,"metadata"))) && lookupProperty(stack1,"coreSiteIcons"))) && lookupProperty(stack1,"value")), depth0))
    + "#close\"></use></svg>\r\n                    </button>\r\n                </div>\r\n            </div>\r\n        </div> \r\n    </div>\r\n";
},"20":function(container,depth0,helpers,partials,data) {
    var stack1, alias1=container.lambda, alias2=container.escapeExpression, lookupProperty = container.lookupProperty || function(parent, propertyName) {
        if (Object.prototype.hasOwnProperty.call(parent, propertyName)) {
          return parent[propertyName];
        }
        return undefined
    };

  return "                    <div class=\"qld__global-alert__message\">\r\n                    <strong>"
    + alias2(alias1(((stack1 = ((stack1 = ((stack1 = (depth0 != null ? lookupProperty(depth0,"site") : depth0)) != null ? lookupProperty(stack1,"metadata") : stack1)) != null ? lookupProperty(stack1,"thirdAlertTitle") : stack1)) != null ? lookupProperty(stack1,"value") : stack1), depth0))
    + "</strong> "
    + alias2(alias1(((stack1 = ((stack1 = ((stack1 = (depth0 != null ? lookupProperty(depth0,"site") : depth0)) != null ? lookupProperty(stack1,"metadata") : stack1)) != null ? lookupProperty(stack1,"thirdAlertMessage") : stack1)) != null ? lookupProperty(stack1,"value") : stack1), depth0))
    + "    \r\n                    </div>\r\n";
},"compiler":[8,">= 4.3.0"],"main":function(container,depth0,helpers,partials,data) {
    var stack1, alias1=depth0 != null ? depth0 : (container.nullContext || {}), alias2=container.hooks.helperMissing, lookupProperty = container.lookupProperty || function(parent, propertyName) {
        if (Object.prototype.hasOwnProperty.call(parent, propertyName)) {
          return parent[propertyName];
        }
        return undefined
    };

  return ((stack1 = (lookupProperty(helpers,"ifCond")||(depth0 && lookupProperty(depth0,"ifCond"))||alias2).call(alias1,((stack1 = ((stack1 = ((stack1 = (depth0 != null ? lookupProperty(depth0,"site") : depth0)) != null ? lookupProperty(stack1,"metadata") : stack1)) != null ? lookupProperty(stack1,"alertDisplay") : stack1)) != null ? lookupProperty(stack1,"value") : stack1),"==","true",{"name":"ifCond","hash":{},"fn":container.program(1, data, 0),"inverse":container.noop,"data":data,"loc":{"start":{"line":1,"column":0},"end":{"line":41,"column":11}}})) != null ? stack1 : "")
    + ((stack1 = (lookupProperty(helpers,"ifCond")||(depth0 && lookupProperty(depth0,"ifCond"))||alias2).call(alias1,((stack1 = ((stack1 = ((stack1 = (depth0 != null ? lookupProperty(depth0,"site") : depth0)) != null ? lookupProperty(stack1,"metadata") : stack1)) != null ? lookupProperty(stack1,"secondAlertDisplay") : stack1)) != null ? lookupProperty(stack1,"value") : stack1),"==","true",{"name":"ifCond","hash":{},"fn":container.program(16, data, 0),"inverse":container.noop,"data":data,"loc":{"start":{"line":42,"column":0},"end":{"line":81,"column":11}}})) != null ? stack1 : "")
    + ((stack1 = (lookupProperty(helpers,"ifCond")||(depth0 && lookupProperty(depth0,"ifCond"))||alias2).call(alias1,((stack1 = ((stack1 = ((stack1 = (depth0 != null ? lookupProperty(depth0,"site") : depth0)) != null ? lookupProperty(stack1,"metadata") : stack1)) != null ? lookupProperty(stack1,"thirdAlertDisplay") : stack1)) != null ? lookupProperty(stack1,"value") : stack1),"==","true",{"name":"ifCond","hash":{},"fn":container.program(19, data, 0),"inverse":container.noop,"data":data,"loc":{"start":{"line":82,"column":0},"end":{"line":121,"column":11}}})) != null ? stack1 : "");
},"useData":true}