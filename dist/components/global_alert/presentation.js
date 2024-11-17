{"1":function(container,depth0,helpers,partials,data) {
    var stack1, alias1=depth0 != null ? depth0 : (container.nullContext || {}), alias2=container.hooks.helperMissing, alias3=container.lambda, alias4=container.escapeExpression, lookupProperty = container.lookupProperty || function(parent, propertyName) {
        if (Object.prototype.hasOwnProperty.call(parent, propertyName)) {
          return parent[propertyName];
        }
        return undefined
    };

  return "    <div \n    role=\"region\" \n    aria-label=\""
    + ((stack1 = (lookupProperty(helpers,"ifCond")||(depth0 && lookupProperty(depth0,"ifCond"))||alias2).call(alias1,((stack1 = ((stack1 = ((stack1 = (depth0 != null ? lookupProperty(depth0,"site") : depth0)) != null ? lookupProperty(stack1,"metadata") : stack1)) != null ? lookupProperty(stack1,"alertLevel") : stack1)) != null ? lookupProperty(stack1,"value") : stack1),"==","default",{"name":"ifCond","hash":{},"fn":container.program(2, data, 0),"inverse":container.noop,"data":data,"loc":{"start":{"line":4,"column":16},"end":{"line":4,"column":91}}})) != null ? stack1 : "")
    + ((stack1 = (lookupProperty(helpers,"ifCond")||(depth0 && lookupProperty(depth0,"ifCond"))||alias2).call(alias1,((stack1 = ((stack1 = ((stack1 = (depth0 != null ? lookupProperty(depth0,"site") : depth0)) != null ? lookupProperty(stack1,"metadata") : stack1)) != null ? lookupProperty(stack1,"alertLevel") : stack1)) != null ? lookupProperty(stack1,"value") : stack1),"==","critical",{"name":"ifCond","hash":{},"fn":container.program(4, data, 0),"inverse":container.noop,"data":data,"loc":{"start":{"line":4,"column":91},"end":{"line":4,"column":165}}})) != null ? stack1 : "")
    + ((stack1 = (lookupProperty(helpers,"ifCond")||(depth0 && lookupProperty(depth0,"ifCond"))||alias2).call(alias1,((stack1 = ((stack1 = ((stack1 = (depth0 != null ? lookupProperty(depth0,"site") : depth0)) != null ? lookupProperty(stack1,"metadata") : stack1)) != null ? lookupProperty(stack1,"alertLevel") : stack1)) != null ? lookupProperty(stack1,"value") : stack1),"==","general",{"name":"ifCond","hash":{},"fn":container.program(6, data, 0),"inverse":container.noop,"data":data,"loc":{"start":{"line":4,"column":165},"end":{"line":4,"column":244}}})) != null ? stack1 : "")
    + "\" \n    class=\"qld__global-alert qld__global-alert--"
    + alias4(alias3(((stack1 = ((stack1 = ((stack1 = (depth0 != null ? lookupProperty(depth0,"site") : depth0)) != null ? lookupProperty(stack1,"metadata") : stack1)) != null ? lookupProperty(stack1,"alertLevel") : stack1)) != null ? lookupProperty(stack1,"value") : stack1), depth0))
    + "\">\n \n        <div class=\"container-fluid\">\n            <div class=\"qld__global-alert__main\">\n                <div class=\"qld__global-alert__icon\">\n"
    + ((stack1 = (lookupProperty(helpers,"ifCond")||(depth0 && lookupProperty(depth0,"ifCond"))||alias2).call(alias1,((stack1 = ((stack1 = ((stack1 = (depth0 != null ? lookupProperty(depth0,"site") : depth0)) != null ? lookupProperty(stack1,"metadata") : stack1)) != null ? lookupProperty(stack1,"alertLevel") : stack1)) != null ? lookupProperty(stack1,"value") : stack1),"==","default",{"name":"ifCond","hash":{},"fn":container.program(8, data, 0),"inverse":container.noop,"data":data,"loc":{"start":{"line":10,"column":20},"end":{"line":12,"column":31}}})) != null ? stack1 : "")
    + ((stack1 = (lookupProperty(helpers,"ifCond")||(depth0 && lookupProperty(depth0,"ifCond"))||alias2).call(alias1,((stack1 = ((stack1 = ((stack1 = (depth0 != null ? lookupProperty(depth0,"site") : depth0)) != null ? lookupProperty(stack1,"metadata") : stack1)) != null ? lookupProperty(stack1,"alertLevel") : stack1)) != null ? lookupProperty(stack1,"value") : stack1),"==","critical",{"name":"ifCond","hash":{},"fn":container.program(10, data, 0),"inverse":container.noop,"data":data,"loc":{"start":{"line":13,"column":20},"end":{"line":15,"column":31}}})) != null ? stack1 : "")
    + ((stack1 = (lookupProperty(helpers,"ifCond")||(depth0 && lookupProperty(depth0,"ifCond"))||alias2).call(alias1,((stack1 = ((stack1 = ((stack1 = (depth0 != null ? lookupProperty(depth0,"site") : depth0)) != null ? lookupProperty(stack1,"metadata") : stack1)) != null ? lookupProperty(stack1,"alertLevel") : stack1)) != null ? lookupProperty(stack1,"value") : stack1),"==","general",{"name":"ifCond","hash":{},"fn":container.program(12, data, 0),"inverse":container.noop,"data":data,"loc":{"start":{"line":16,"column":20},"end":{"line":18,"column":31}}})) != null ? stack1 : "")
    + "                </div>\n                <div class=\"qld__global-alert__content\">\n"
    + ((stack1 = lookupProperty(helpers,"if").call(alias1,((stack1 = ((stack1 = ((stack1 = (depth0 != null ? lookupProperty(depth0,"site") : depth0)) != null ? lookupProperty(stack1,"metadata") : stack1)) != null ? lookupProperty(stack1,"alertMessage") : stack1)) != null ? lookupProperty(stack1,"value") : stack1),{"name":"if","hash":{},"fn":container.program(14, data, 0),"inverse":container.noop,"data":data,"loc":{"start":{"line":21,"column":20},"end":{"line":25,"column":27}}})) != null ? stack1 : "")
    + "                    <div class=\"qld__global-alert__action\">\n                        <a href=\""
    + alias4(alias3(((stack1 = ((stack1 = ((stack1 = (depth0 != null ? lookupProperty(depth0,"site") : depth0)) != null ? lookupProperty(stack1,"metadata") : stack1)) != null ? lookupProperty(stack1,"alertLinkURL") : stack1)) != null ? lookupProperty(stack1,"value") : stack1), depth0))
    + "\">\n                            <span>"
    + alias4(alias3(((stack1 = ((stack1 = ((stack1 = (depth0 != null ? lookupProperty(depth0,"site") : depth0)) != null ? lookupProperty(stack1,"metadata") : stack1)) != null ? lookupProperty(stack1,"alertLinkTitle") : stack1)) != null ? lookupProperty(stack1,"value") : stack1), depth0))
    + "</span>\n                            <svg aria-hidden=\"true\" focusable=\"false\" xmlns=\"http://www.w3.org/2000/svg\" class=\"qld__icon qld__icon--sm\"><use href=\""
    + alias4(alias3(((stack1 = ((stack1 = ((stack1 = ((stack1 = (data && lookupProperty(data,"root"))) && lookupProperty(stack1,"site"))) && lookupProperty(stack1,"metadata"))) && lookupProperty(stack1,"siteDefaultIcons"))) && lookupProperty(stack1,"value")), depth0))
    + "#qld__icon__arrow-right\"></use></svg>\n                        </a>   \n                    </div>\n                </div>\n                <div class=\"qld__global-alert__close\">\n                    <button aria-label=\"Close alert\">\n                        <svg aria-hidden=\"true\" focusable=\"false\" xmlns=\"http://www.w3.org/2000/svg\" class=\"qld__icon qld__icon--md\"><use href=\""
    + alias4(alias3(((stack1 = ((stack1 = ((stack1 = ((stack1 = (data && lookupProperty(data,"root"))) && lookupProperty(stack1,"site"))) && lookupProperty(stack1,"metadata"))) && lookupProperty(stack1,"siteDefaultIcons"))) && lookupProperty(stack1,"value")), depth0))
    + "#qld__icon__close\"></use></svg>\n                    </button>\n                </div>\n            </div>\n        </div> \n    </div>\n";
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

  return "                    <svg aria-label=\"Warning\" xmlns=\"http://www.w3.org/2000/svg\" class=\"qld__icon qld__icon--md\"><use href=\""
    + container.escapeExpression(container.lambda(((stack1 = ((stack1 = ((stack1 = ((stack1 = (data && lookupProperty(data,"root"))) && lookupProperty(stack1,"site"))) && lookupProperty(stack1,"metadata"))) && lookupProperty(stack1,"siteDefaultIcons"))) && lookupProperty(stack1,"value")), depth0))
    + "#qld__icon__warning\"></use></svg>\n";
},"10":function(container,depth0,helpers,partials,data) {
    var stack1, lookupProperty = container.lookupProperty || function(parent, propertyName) {
        if (Object.prototype.hasOwnProperty.call(parent, propertyName)) {
          return parent[propertyName];
        }
        return undefined
    };

  return "                    <svg aria-label=\"Alert\" xmlns=\"http://www.w3.org/2000/svg\" class=\"qld__icon qld__icon--md\"><use href=\""
    + container.escapeExpression(container.lambda(((stack1 = ((stack1 = ((stack1 = ((stack1 = (data && lookupProperty(data,"root"))) && lookupProperty(stack1,"site"))) && lookupProperty(stack1,"metadata"))) && lookupProperty(stack1,"siteDefaultIcons"))) && lookupProperty(stack1,"value")), depth0))
    + "#qld__icon__critical\"></use></svg>\n";
},"12":function(container,depth0,helpers,partials,data) {
    var stack1, lookupProperty = container.lookupProperty || function(parent, propertyName) {
        if (Object.prototype.hasOwnProperty.call(parent, propertyName)) {
          return parent[propertyName];
        }
        return undefined
    };

  return "                    <svg aria-label=\"Information\" xmlns=\"http://www.w3.org/2000/svg\" class=\"qld__icon qld__icon--md\"><use href=\""
    + container.escapeExpression(container.lambda(((stack1 = ((stack1 = ((stack1 = ((stack1 = (data && lookupProperty(data,"root"))) && lookupProperty(stack1,"site"))) && lookupProperty(stack1,"metadata"))) && lookupProperty(stack1,"siteDefaultIcons"))) && lookupProperty(stack1,"value")), depth0))
    + "#qld__icon__info\"></use></svg>\n";
},"14":function(container,depth0,helpers,partials,data) {
    var stack1, alias1=container.lambda, alias2=container.escapeExpression, lookupProperty = container.lookupProperty || function(parent, propertyName) {
        if (Object.prototype.hasOwnProperty.call(parent, propertyName)) {
          return parent[propertyName];
        }
        return undefined
    };

  return "                    <div class=\"qld__global-alert__message\">\n                    <strong>"
    + alias2(alias1(((stack1 = ((stack1 = ((stack1 = (depth0 != null ? lookupProperty(depth0,"site") : depth0)) != null ? lookupProperty(stack1,"metadata") : stack1)) != null ? lookupProperty(stack1,"alertTitle") : stack1)) != null ? lookupProperty(stack1,"value") : stack1), depth0))
    + "</strong> "
    + alias2(alias1(((stack1 = ((stack1 = ((stack1 = (depth0 != null ? lookupProperty(depth0,"site") : depth0)) != null ? lookupProperty(stack1,"metadata") : stack1)) != null ? lookupProperty(stack1,"alertMessage") : stack1)) != null ? lookupProperty(stack1,"value") : stack1), depth0))
    + "    \n                    </div>\n";
},"16":function(container,depth0,helpers,partials,data) {
    var stack1, alias1=depth0 != null ? depth0 : (container.nullContext || {}), alias2=container.hooks.helperMissing, alias3=container.lambda, alias4=container.escapeExpression, lookupProperty = container.lookupProperty || function(parent, propertyName) {
        if (Object.prototype.hasOwnProperty.call(parent, propertyName)) {
          return parent[propertyName];
        }
        return undefined
    };

  return "        <div \n        role=\"region\" \n        aria-label=\""
    + ((stack1 = (lookupProperty(helpers,"ifCond")||(depth0 && lookupProperty(depth0,"ifCond"))||alias2).call(alias1,((stack1 = ((stack1 = ((stack1 = (depth0 != null ? lookupProperty(depth0,"site") : depth0)) != null ? lookupProperty(stack1,"metadata") : stack1)) != null ? lookupProperty(stack1,"secondAlertDisplay") : stack1)) != null ? lookupProperty(stack1,"value") : stack1),"==","default",{"name":"ifCond","hash":{},"fn":container.program(2, data, 0),"inverse":container.noop,"data":data,"loc":{"start":{"line":45,"column":20},"end":{"line":45,"column":103}}})) != null ? stack1 : "")
    + ((stack1 = (lookupProperty(helpers,"ifCond")||(depth0 && lookupProperty(depth0,"ifCond"))||alias2).call(alias1,((stack1 = ((stack1 = ((stack1 = (depth0 != null ? lookupProperty(depth0,"site") : depth0)) != null ? lookupProperty(stack1,"metadata") : stack1)) != null ? lookupProperty(stack1,"secondAlertDisplay") : stack1)) != null ? lookupProperty(stack1,"value") : stack1),"==","critical",{"name":"ifCond","hash":{},"fn":container.program(4, data, 0),"inverse":container.noop,"data":data,"loc":{"start":{"line":45,"column":103},"end":{"line":45,"column":185}}})) != null ? stack1 : "")
    + ((stack1 = (lookupProperty(helpers,"ifCond")||(depth0 && lookupProperty(depth0,"ifCond"))||alias2).call(alias1,((stack1 = ((stack1 = ((stack1 = (depth0 != null ? lookupProperty(depth0,"site") : depth0)) != null ? lookupProperty(stack1,"metadata") : stack1)) != null ? lookupProperty(stack1,"secondAlertDisplay") : stack1)) != null ? lookupProperty(stack1,"value") : stack1),"==","general",{"name":"ifCond","hash":{},"fn":container.program(6, data, 0),"inverse":container.noop,"data":data,"loc":{"start":{"line":45,"column":185},"end":{"line":45,"column":272}}})) != null ? stack1 : "")
    + "\"\n        class=\"qld__global-alert qld__global-alert--"
    + alias4(alias3(((stack1 = ((stack1 = ((stack1 = (depth0 != null ? lookupProperty(depth0,"site") : depth0)) != null ? lookupProperty(stack1,"metadata") : stack1)) != null ? lookupProperty(stack1,"secondAlertLevel") : stack1)) != null ? lookupProperty(stack1,"value") : stack1), depth0))
    + "\">\n        <div class=\"container-fluid\">\n            <div class=\"qld__global-alert__main\">\n                <div class=\"qld__global-alert__icon\">\n"
    + ((stack1 = (lookupProperty(helpers,"ifCond")||(depth0 && lookupProperty(depth0,"ifCond"))||alias2).call(alias1,((stack1 = ((stack1 = ((stack1 = (depth0 != null ? lookupProperty(depth0,"site") : depth0)) != null ? lookupProperty(stack1,"metadata") : stack1)) != null ? lookupProperty(stack1,"secondAlertLevel") : stack1)) != null ? lookupProperty(stack1,"value") : stack1),"==","default",{"name":"ifCond","hash":{},"fn":container.program(8, data, 0),"inverse":container.noop,"data":data,"loc":{"start":{"line":50,"column":20},"end":{"line":52,"column":31}}})) != null ? stack1 : "")
    + ((stack1 = (lookupProperty(helpers,"ifCond")||(depth0 && lookupProperty(depth0,"ifCond"))||alias2).call(alias1,((stack1 = ((stack1 = ((stack1 = (depth0 != null ? lookupProperty(depth0,"site") : depth0)) != null ? lookupProperty(stack1,"metadata") : stack1)) != null ? lookupProperty(stack1,"secondAlertLevel") : stack1)) != null ? lookupProperty(stack1,"value") : stack1),"==","critical",{"name":"ifCond","hash":{},"fn":container.program(10, data, 0),"inverse":container.noop,"data":data,"loc":{"start":{"line":53,"column":20},"end":{"line":55,"column":31}}})) != null ? stack1 : "")
    + ((stack1 = (lookupProperty(helpers,"ifCond")||(depth0 && lookupProperty(depth0,"ifCond"))||alias2).call(alias1,((stack1 = ((stack1 = ((stack1 = (depth0 != null ? lookupProperty(depth0,"site") : depth0)) != null ? lookupProperty(stack1,"metadata") : stack1)) != null ? lookupProperty(stack1,"secondAlertLevel") : stack1)) != null ? lookupProperty(stack1,"value") : stack1),"==","general",{"name":"ifCond","hash":{},"fn":container.program(12, data, 0),"inverse":container.noop,"data":data,"loc":{"start":{"line":56,"column":20},"end":{"line":58,"column":31}}})) != null ? stack1 : "")
    + "                </div>\n                <div class=\"qld__global-alert__content\">\n"
    + ((stack1 = lookupProperty(helpers,"if").call(alias1,((stack1 = ((stack1 = ((stack1 = (depth0 != null ? lookupProperty(depth0,"site") : depth0)) != null ? lookupProperty(stack1,"metadata") : stack1)) != null ? lookupProperty(stack1,"secondAlertMessage") : stack1)) != null ? lookupProperty(stack1,"value") : stack1),{"name":"if","hash":{},"fn":container.program(17, data, 0),"inverse":container.noop,"data":data,"loc":{"start":{"line":61,"column":20},"end":{"line":65,"column":27}}})) != null ? stack1 : "")
    + "                    <div class=\"qld__global-alert__action\">\n                        <a href=\""
    + alias4(alias3(((stack1 = ((stack1 = ((stack1 = (depth0 != null ? lookupProperty(depth0,"site") : depth0)) != null ? lookupProperty(stack1,"metadata") : stack1)) != null ? lookupProperty(stack1,"secondAlertLinkURL") : stack1)) != null ? lookupProperty(stack1,"value") : stack1), depth0))
    + "\">\n                            <span>"
    + alias4(alias3(((stack1 = ((stack1 = ((stack1 = (depth0 != null ? lookupProperty(depth0,"site") : depth0)) != null ? lookupProperty(stack1,"metadata") : stack1)) != null ? lookupProperty(stack1,"secondAlertLinkTitle") : stack1)) != null ? lookupProperty(stack1,"value") : stack1), depth0))
    + "</span>\n                            <svg aria-hidden=\"true\" focusable=\"false\" xmlns=\"http://www.w3.org/2000/svg\" class=\"qld__icon qld__icon--sm\"><use href=\""
    + alias4(alias3(((stack1 = ((stack1 = ((stack1 = ((stack1 = (data && lookupProperty(data,"root"))) && lookupProperty(stack1,"site"))) && lookupProperty(stack1,"metadata"))) && lookupProperty(stack1,"siteDefaultIcons"))) && lookupProperty(stack1,"value")), depth0))
    + "#qld__icon__arrow-right\"></use></svg>\n                        </a>   \n                    </div>\n                </div>\n                <div class=\"qld__global-alert__close\">\n                    <button aria-label=\"Close alert\">\n                        <svg aria-hidden=\"true\" focusable=\"false\" xmlns=\"http://www.w3.org/2000/svg\" class=\"qld__icon qld__icon--md\"><use href=\""
    + alias4(alias3(((stack1 = ((stack1 = ((stack1 = ((stack1 = (data && lookupProperty(data,"root"))) && lookupProperty(stack1,"site"))) && lookupProperty(stack1,"metadata"))) && lookupProperty(stack1,"siteDefaultIcons"))) && lookupProperty(stack1,"value")), depth0))
    + "#qld__icon__close\"></use></svg>\n                    </button>\n                </div>\n            </div>\n        </div> \n    </div>\n";
},"17":function(container,depth0,helpers,partials,data) {
    var stack1, alias1=container.lambda, alias2=container.escapeExpression, lookupProperty = container.lookupProperty || function(parent, propertyName) {
        if (Object.prototype.hasOwnProperty.call(parent, propertyName)) {
          return parent[propertyName];
        }
        return undefined
    };

  return "                    <div class=\"qld__global-alert__message\">\n                    <strong>"
    + alias2(alias1(((stack1 = ((stack1 = ((stack1 = (depth0 != null ? lookupProperty(depth0,"site") : depth0)) != null ? lookupProperty(stack1,"metadata") : stack1)) != null ? lookupProperty(stack1,"secondAlertTitle") : stack1)) != null ? lookupProperty(stack1,"value") : stack1), depth0))
    + "</strong> "
    + alias2(alias1(((stack1 = ((stack1 = ((stack1 = (depth0 != null ? lookupProperty(depth0,"site") : depth0)) != null ? lookupProperty(stack1,"metadata") : stack1)) != null ? lookupProperty(stack1,"secondAlertMessage") : stack1)) != null ? lookupProperty(stack1,"value") : stack1), depth0))
    + "    \n                    </div>\n";
},"19":function(container,depth0,helpers,partials,data) {
    var stack1, alias1=depth0 != null ? depth0 : (container.nullContext || {}), alias2=container.hooks.helperMissing, alias3=container.lambda, alias4=container.escapeExpression, lookupProperty = container.lookupProperty || function(parent, propertyName) {
        if (Object.prototype.hasOwnProperty.call(parent, propertyName)) {
          return parent[propertyName];
        }
        return undefined
    };

  return "    <div \n        role=\"region\" \n        aria-label=\""
    + ((stack1 = (lookupProperty(helpers,"ifCond")||(depth0 && lookupProperty(depth0,"ifCond"))||alias2).call(alias1,((stack1 = ((stack1 = ((stack1 = (depth0 != null ? lookupProperty(depth0,"site") : depth0)) != null ? lookupProperty(stack1,"metadata") : stack1)) != null ? lookupProperty(stack1,"thirdAlertDisplay") : stack1)) != null ? lookupProperty(stack1,"value") : stack1),"==","default",{"name":"ifCond","hash":{},"fn":container.program(2, data, 0),"inverse":container.noop,"data":data,"loc":{"start":{"line":85,"column":20},"end":{"line":85,"column":102}}})) != null ? stack1 : "")
    + ((stack1 = (lookupProperty(helpers,"ifCond")||(depth0 && lookupProperty(depth0,"ifCond"))||alias2).call(alias1,((stack1 = ((stack1 = ((stack1 = (depth0 != null ? lookupProperty(depth0,"site") : depth0)) != null ? lookupProperty(stack1,"metadata") : stack1)) != null ? lookupProperty(stack1,"thirdAlertDisplay") : stack1)) != null ? lookupProperty(stack1,"value") : stack1),"==","critical",{"name":"ifCond","hash":{},"fn":container.program(4, data, 0),"inverse":container.noop,"data":data,"loc":{"start":{"line":85,"column":102},"end":{"line":85,"column":183}}})) != null ? stack1 : "")
    + ((stack1 = (lookupProperty(helpers,"ifCond")||(depth0 && lookupProperty(depth0,"ifCond"))||alias2).call(alias1,((stack1 = ((stack1 = ((stack1 = (depth0 != null ? lookupProperty(depth0,"site") : depth0)) != null ? lookupProperty(stack1,"metadata") : stack1)) != null ? lookupProperty(stack1,"thirdAlertDisplay") : stack1)) != null ? lookupProperty(stack1,"value") : stack1),"==","general",{"name":"ifCond","hash":{},"fn":container.program(6, data, 0),"inverse":container.noop,"data":data,"loc":{"start":{"line":85,"column":183},"end":{"line":85,"column":269}}})) != null ? stack1 : "")
    + "\"\n        class=\"qld__global-alert qld__global-alert--"
    + alias4(alias3(((stack1 = ((stack1 = ((stack1 = (depth0 != null ? lookupProperty(depth0,"site") : depth0)) != null ? lookupProperty(stack1,"metadata") : stack1)) != null ? lookupProperty(stack1,"thirdAlertLevel") : stack1)) != null ? lookupProperty(stack1,"value") : stack1), depth0))
    + "\">\n        <div class=\"container-fluid\">\n            <div class=\"qld__global-alert__main\">\n                <div class=\"qld__global-alert__icon\">\n"
    + ((stack1 = (lookupProperty(helpers,"ifCond")||(depth0 && lookupProperty(depth0,"ifCond"))||alias2).call(alias1,((stack1 = ((stack1 = ((stack1 = (depth0 != null ? lookupProperty(depth0,"site") : depth0)) != null ? lookupProperty(stack1,"metadata") : stack1)) != null ? lookupProperty(stack1,"thirdAlertLevel") : stack1)) != null ? lookupProperty(stack1,"value") : stack1),"==","default",{"name":"ifCond","hash":{},"fn":container.program(8, data, 0),"inverse":container.noop,"data":data,"loc":{"start":{"line":90,"column":20},"end":{"line":92,"column":31}}})) != null ? stack1 : "")
    + ((stack1 = (lookupProperty(helpers,"ifCond")||(depth0 && lookupProperty(depth0,"ifCond"))||alias2).call(alias1,((stack1 = ((stack1 = ((stack1 = (depth0 != null ? lookupProperty(depth0,"site") : depth0)) != null ? lookupProperty(stack1,"metadata") : stack1)) != null ? lookupProperty(stack1,"thirdAlertLevel") : stack1)) != null ? lookupProperty(stack1,"value") : stack1),"==","critical",{"name":"ifCond","hash":{},"fn":container.program(10, data, 0),"inverse":container.noop,"data":data,"loc":{"start":{"line":93,"column":20},"end":{"line":95,"column":31}}})) != null ? stack1 : "")
    + ((stack1 = (lookupProperty(helpers,"ifCond")||(depth0 && lookupProperty(depth0,"ifCond"))||alias2).call(alias1,((stack1 = ((stack1 = ((stack1 = (depth0 != null ? lookupProperty(depth0,"site") : depth0)) != null ? lookupProperty(stack1,"metadata") : stack1)) != null ? lookupProperty(stack1,"thirdAlertLevel") : stack1)) != null ? lookupProperty(stack1,"value") : stack1),"==","general",{"name":"ifCond","hash":{},"fn":container.program(12, data, 0),"inverse":container.noop,"data":data,"loc":{"start":{"line":96,"column":20},"end":{"line":98,"column":31}}})) != null ? stack1 : "")
    + "                </div>\n                <div class=\"qld__global-alert__content\">\n"
    + ((stack1 = lookupProperty(helpers,"if").call(alias1,((stack1 = ((stack1 = ((stack1 = (depth0 != null ? lookupProperty(depth0,"site") : depth0)) != null ? lookupProperty(stack1,"metadata") : stack1)) != null ? lookupProperty(stack1,"thirdAlertMessage") : stack1)) != null ? lookupProperty(stack1,"value") : stack1),{"name":"if","hash":{},"fn":container.program(20, data, 0),"inverse":container.noop,"data":data,"loc":{"start":{"line":101,"column":20},"end":{"line":105,"column":27}}})) != null ? stack1 : "")
    + "                    <div class=\"qld__global-alert__action\">\n                        <a href=\""
    + alias4(alias3(((stack1 = ((stack1 = ((stack1 = (depth0 != null ? lookupProperty(depth0,"site") : depth0)) != null ? lookupProperty(stack1,"metadata") : stack1)) != null ? lookupProperty(stack1,"thirdAlertLinkURL") : stack1)) != null ? lookupProperty(stack1,"value") : stack1), depth0))
    + "\">\n                            <span>"
    + alias4(alias3(((stack1 = ((stack1 = ((stack1 = (depth0 != null ? lookupProperty(depth0,"site") : depth0)) != null ? lookupProperty(stack1,"metadata") : stack1)) != null ? lookupProperty(stack1,"thirdAlertLinkTitle") : stack1)) != null ? lookupProperty(stack1,"value") : stack1), depth0))
    + "</span>\n                            <svg aria-hidden=\"true\" focusable=\"false\" xmlns=\"http://www.w3.org/2000/svg\" class=\"qld__icon qld__icon--sm\"><use href=\""
    + alias4(alias3(((stack1 = ((stack1 = ((stack1 = ((stack1 = (data && lookupProperty(data,"root"))) && lookupProperty(stack1,"site"))) && lookupProperty(stack1,"metadata"))) && lookupProperty(stack1,"siteDefaultIcons"))) && lookupProperty(stack1,"value")), depth0))
    + "#qld__icon__arrow-right\"></use></svg>\n                        </a>   \n                    </div>\n                </div>\n                <div class=\"qld__global-alert__close\">\n                    <button aria-label=\"Close alert\">\n                        <svg aria-hidden=\"true\" focusable=\"false\" xmlns=\"http://www.w3.org/2000/svg\" class=\"qld__icon qld__icon--md\"><use href=\""
    + alias4(alias3(((stack1 = ((stack1 = ((stack1 = ((stack1 = (data && lookupProperty(data,"root"))) && lookupProperty(stack1,"site"))) && lookupProperty(stack1,"metadata"))) && lookupProperty(stack1,"siteDefaultIcons"))) && lookupProperty(stack1,"value")), depth0))
    + "#qld__icon__close\"></use></svg>\n                    </button>\n                </div>\n            </div>\n        </div> \n    </div>\n";
},"20":function(container,depth0,helpers,partials,data) {
    var stack1, alias1=container.lambda, alias2=container.escapeExpression, lookupProperty = container.lookupProperty || function(parent, propertyName) {
        if (Object.prototype.hasOwnProperty.call(parent, propertyName)) {
          return parent[propertyName];
        }
        return undefined
    };

  return "                    <div class=\"qld__global-alert__message\">\n                    <strong>"
    + alias2(alias1(((stack1 = ((stack1 = ((stack1 = (depth0 != null ? lookupProperty(depth0,"site") : depth0)) != null ? lookupProperty(stack1,"metadata") : stack1)) != null ? lookupProperty(stack1,"thirdAlertTitle") : stack1)) != null ? lookupProperty(stack1,"value") : stack1), depth0))
    + "</strong> "
    + alias2(alias1(((stack1 = ((stack1 = ((stack1 = (depth0 != null ? lookupProperty(depth0,"site") : depth0)) != null ? lookupProperty(stack1,"metadata") : stack1)) != null ? lookupProperty(stack1,"thirdAlertMessage") : stack1)) != null ? lookupProperty(stack1,"value") : stack1), depth0))
    + "    \n                    </div>\n";
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