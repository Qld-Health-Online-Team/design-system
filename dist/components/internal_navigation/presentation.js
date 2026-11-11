{"1":function(container,depth0,helpers,partials,data) {
    var stack1, alias1=depth0 != null ? depth0 : (container.nullContext || {}), alias2=container.hooks.helperMissing, lookupProperty = container.lookupProperty || function(parent, propertyName) {
        if (Object.prototype.hasOwnProperty.call(parent, propertyName)) {
          return parent[propertyName];
        }
        return undefined
    };

  return ((stack1 = (lookupProperty(helpers,"ifCond")||(depth0 && lookupProperty(depth0,"ifCond"))||alias2).call(alias1,(depth0 != null ? lookupProperty(depth0,"asset_assetid") : depth0),"!=",((stack1 = ((stack1 = ((stack1 = (data && lookupProperty(data,"root"))) && lookupProperty(stack1,"current"))) && lookupProperty(stack1,"data"))) && lookupProperty(stack1,"assetid")),{"name":"ifCond","hash":{},"fn":container.program(2, data, 0),"inverse":container.noop,"data":data,"loc":{"start":{"line":33,"column":8},"end":{"line":38,"column":19}}})) != null ? stack1 : "")
    + ((stack1 = (lookupProperty(helpers,"ifCond")||(depth0 && lookupProperty(depth0,"ifCond"))||alias2).call(alias1,(depth0 != null ? lookupProperty(depth0,"asset_assetid") : depth0),"==",((stack1 = ((stack1 = ((stack1 = (data && lookupProperty(data,"root"))) && lookupProperty(stack1,"current"))) && lookupProperty(stack1,"data"))) && lookupProperty(stack1,"assetid")),{"name":"ifCond","hash":{},"fn":container.program(4, data, 0),"inverse":container.noop,"data":data,"loc":{"start":{"line":39,"column":8},"end":{"line":44,"column":19}}})) != null ? stack1 : "")
    + ((stack1 = lookupProperty(helpers,"if").call(alias1,(depth0 != null ? lookupProperty(depth0,"children") : depth0),{"name":"if","hash":{},"fn":container.program(6, data, 0),"inverse":container.noop,"data":data,"loc":{"start":{"line":45,"column":8},"end":{"line":82,"column":15}}})) != null ? stack1 : "")
    + "        </li>\n";
},"2":function(container,depth0,helpers,partials,data) {
    var stack1, helper, alias1=depth0 != null ? depth0 : (container.nullContext || {}), alias2=container.hooks.helperMissing, alias3="function", lookupProperty = container.lookupProperty || function(parent, propertyName) {
        if (Object.prototype.hasOwnProperty.call(parent, propertyName)) {
          return parent[propertyName];
        }
        return undefined
    };

  return "          <li>\n          <a class=\"qld__sidenav__link\" href=\""
    + container.escapeExpression(((helper = (helper = lookupProperty(helpers,"asset_url") || (depth0 != null ? lookupProperty(depth0,"asset_url") : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"asset_url","hash":{},"data":data,"loc":{"start":{"line":35,"column":46},"end":{"line":35,"column":61}}}) : helper)))
    + "\">\n            "
    + ((stack1 = ((helper = (helper = lookupProperty(helpers,"asset_short_name") || (depth0 != null ? lookupProperty(depth0,"asset_short_name") : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"asset_short_name","hash":{},"data":data,"loc":{"start":{"line":36,"column":12},"end":{"line":36,"column":36}}}) : helper))) != null ? stack1 : "")
    + "\n          </a>\n";
},"4":function(container,depth0,helpers,partials,data) {
    var stack1, helper, lookupProperty = container.lookupProperty || function(parent, propertyName) {
        if (Object.prototype.hasOwnProperty.call(parent, propertyName)) {
          return parent[propertyName];
        }
        return undefined
    };

  return "          <li class=\"active\" aria-current=\"page\">\n          <span>\n            "
    + ((stack1 = ((helper = (helper = lookupProperty(helpers,"asset_short_name") || (depth0 != null ? lookupProperty(depth0,"asset_short_name") : depth0)) != null ? helper : container.hooks.helperMissing),(typeof helper === "function" ? helper.call(depth0 != null ? depth0 : (container.nullContext || {}),{"name":"asset_short_name","hash":{},"data":data,"loc":{"start":{"line":42,"column":12},"end":{"line":42,"column":36}}}) : helper))) != null ? stack1 : "")
    + "\n          </span>\n";
},"6":function(container,depth0,helpers,partials,data) {
    var stack1, lookupProperty = container.lookupProperty || function(parent, propertyName) {
        if (Object.prototype.hasOwnProperty.call(parent, propertyName)) {
          return parent[propertyName];
        }
        return undefined
    };

  return "          <ul class=\"qld__link-list\">\n"
    + ((stack1 = lookupProperty(helpers,"each").call(depth0 != null ? depth0 : (container.nullContext || {}),(depth0 != null ? lookupProperty(depth0,"children") : depth0),{"name":"each","hash":{},"fn":container.program(7, data, 0),"inverse":container.noop,"data":data,"loc":{"start":{"line":47,"column":12},"end":{"line":80,"column":21}}})) != null ? stack1 : "")
    + "          </ul>\n";
},"7":function(container,depth0,helpers,partials,data) {
    var stack1, alias1=depth0 != null ? depth0 : (container.nullContext || {}), alias2=container.hooks.helperMissing, lookupProperty = container.lookupProperty || function(parent, propertyName) {
        if (Object.prototype.hasOwnProperty.call(parent, propertyName)) {
          return parent[propertyName];
        }
        return undefined
    };

  return ((stack1 = (lookupProperty(helpers,"ifCond")||(depth0 && lookupProperty(depth0,"ifCond"))||alias2).call(alias1,(depth0 != null ? lookupProperty(depth0,"asset_assetid") : depth0),"!=",((stack1 = ((stack1 = ((stack1 = (data && lookupProperty(data,"root"))) && lookupProperty(stack1,"current"))) && lookupProperty(stack1,"data"))) && lookupProperty(stack1,"assetid")),{"name":"ifCond","hash":{},"fn":container.program(8, data, 0),"inverse":container.noop,"data":data,"loc":{"start":{"line":48,"column":14},"end":{"line":53,"column":25}}})) != null ? stack1 : "")
    + ((stack1 = (lookupProperty(helpers,"ifCond")||(depth0 && lookupProperty(depth0,"ifCond"))||alias2).call(alias1,(depth0 != null ? lookupProperty(depth0,"asset_assetid") : depth0),"==",((stack1 = ((stack1 = ((stack1 = (data && lookupProperty(data,"root"))) && lookupProperty(stack1,"current"))) && lookupProperty(stack1,"data"))) && lookupProperty(stack1,"assetid")),{"name":"ifCond","hash":{},"fn":container.program(10, data, 0),"inverse":container.noop,"data":data,"loc":{"start":{"line":54,"column":14},"end":{"line":59,"column":25}}})) != null ? stack1 : "")
    + ((stack1 = lookupProperty(helpers,"if").call(alias1,(depth0 != null ? lookupProperty(depth0,"children") : depth0),{"name":"if","hash":{},"fn":container.program(12, data, 0),"inverse":container.noop,"data":data,"loc":{"start":{"line":60,"column":14},"end":{"line":78,"column":21}}})) != null ? stack1 : "")
    + "              </li>\n";
},"8":function(container,depth0,helpers,partials,data) {
    var stack1, helper, alias1=depth0 != null ? depth0 : (container.nullContext || {}), alias2=container.hooks.helperMissing, alias3="function", lookupProperty = container.lookupProperty || function(parent, propertyName) {
        if (Object.prototype.hasOwnProperty.call(parent, propertyName)) {
          return parent[propertyName];
        }
        return undefined
    };

  return "                <li>\n                <a class=\"qld__sidenav__link\" href=\""
    + container.escapeExpression(((helper = (helper = lookupProperty(helpers,"asset_url") || (depth0 != null ? lookupProperty(depth0,"asset_url") : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"asset_url","hash":{},"data":data,"loc":{"start":{"line":50,"column":52},"end":{"line":50,"column":67}}}) : helper)))
    + "\">\n                  "
    + ((stack1 = ((helper = (helper = lookupProperty(helpers,"asset_short_name") || (depth0 != null ? lookupProperty(depth0,"asset_short_name") : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"asset_short_name","hash":{},"data":data,"loc":{"start":{"line":51,"column":18},"end":{"line":51,"column":42}}}) : helper))) != null ? stack1 : "")
    + "\n                </a>\n";
},"10":function(container,depth0,helpers,partials,data) {
    var stack1, helper, lookupProperty = container.lookupProperty || function(parent, propertyName) {
        if (Object.prototype.hasOwnProperty.call(parent, propertyName)) {
          return parent[propertyName];
        }
        return undefined
    };

  return "                <li class=\"active\" aria-current=\"page\">\n                <span>\n                  "
    + ((stack1 = ((helper = (helper = lookupProperty(helpers,"asset_short_name") || (depth0 != null ? lookupProperty(depth0,"asset_short_name") : depth0)) != null ? helper : container.hooks.helperMissing),(typeof helper === "function" ? helper.call(depth0 != null ? depth0 : (container.nullContext || {}),{"name":"asset_short_name","hash":{},"data":data,"loc":{"start":{"line":57,"column":18},"end":{"line":57,"column":42}}}) : helper))) != null ? stack1 : "")
    + "\n                </span>\n";
},"12":function(container,depth0,helpers,partials,data) {
    var stack1, lookupProperty = container.lookupProperty || function(parent, propertyName) {
        if (Object.prototype.hasOwnProperty.call(parent, propertyName)) {
          return parent[propertyName];
        }
        return undefined
    };

  return "                <ul class=\"qld__link-list\">\n"
    + ((stack1 = lookupProperty(helpers,"each").call(depth0 != null ? depth0 : (container.nullContext || {}),(depth0 != null ? lookupProperty(depth0,"children") : depth0),{"name":"each","hash":{},"fn":container.program(13, data, 0),"inverse":container.noop,"data":data,"loc":{"start":{"line":62,"column":18},"end":{"line":76,"column":27}}})) != null ? stack1 : "")
    + "                </ul>\n";
},"13":function(container,depth0,helpers,partials,data) {
    var stack1, alias1=depth0 != null ? depth0 : (container.nullContext || {}), alias2=container.hooks.helperMissing, lookupProperty = container.lookupProperty || function(parent, propertyName) {
        if (Object.prototype.hasOwnProperty.call(parent, propertyName)) {
          return parent[propertyName];
        }
        return undefined
    };

  return ((stack1 = (lookupProperty(helpers,"ifCond")||(depth0 && lookupProperty(depth0,"ifCond"))||alias2).call(alias1,(depth0 != null ? lookupProperty(depth0,"asset_assetid") : depth0),"!=",((stack1 = ((stack1 = ((stack1 = (data && lookupProperty(data,"root"))) && lookupProperty(stack1,"current"))) && lookupProperty(stack1,"data"))) && lookupProperty(stack1,"assetid")),{"name":"ifCond","hash":{},"fn":container.program(14, data, 0),"inverse":container.noop,"data":data,"loc":{"start":{"line":63,"column":20},"end":{"line":68,"column":31}}})) != null ? stack1 : "")
    + ((stack1 = (lookupProperty(helpers,"ifCond")||(depth0 && lookupProperty(depth0,"ifCond"))||alias2).call(alias1,(depth0 != null ? lookupProperty(depth0,"asset_assetid") : depth0),"==",((stack1 = ((stack1 = ((stack1 = (data && lookupProperty(data,"root"))) && lookupProperty(stack1,"current"))) && lookupProperty(stack1,"data"))) && lookupProperty(stack1,"assetid")),{"name":"ifCond","hash":{},"fn":container.program(16, data, 0),"inverse":container.noop,"data":data,"loc":{"start":{"line":69,"column":20},"end":{"line":74,"column":31}}})) != null ? stack1 : "")
    + "                    </li>\n";
},"14":function(container,depth0,helpers,partials,data) {
    var stack1, helper, alias1=depth0 != null ? depth0 : (container.nullContext || {}), alias2=container.hooks.helperMissing, alias3="function", lookupProperty = container.lookupProperty || function(parent, propertyName) {
        if (Object.prototype.hasOwnProperty.call(parent, propertyName)) {
          return parent[propertyName];
        }
        return undefined
    };

  return "                      <li>\n                      <a class=\"qld__sidenav__link\" href=\""
    + container.escapeExpression(((helper = (helper = lookupProperty(helpers,"asset_url") || (depth0 != null ? lookupProperty(depth0,"asset_url") : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"asset_url","hash":{},"data":data,"loc":{"start":{"line":65,"column":58},"end":{"line":65,"column":73}}}) : helper)))
    + "\">\n                        "
    + ((stack1 = ((helper = (helper = lookupProperty(helpers,"asset_short_name") || (depth0 != null ? lookupProperty(depth0,"asset_short_name") : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"asset_short_name","hash":{},"data":data,"loc":{"start":{"line":66,"column":24},"end":{"line":66,"column":48}}}) : helper))) != null ? stack1 : "")
    + "\n                      </a>\n";
},"16":function(container,depth0,helpers,partials,data) {
    var stack1, helper, lookupProperty = container.lookupProperty || function(parent, propertyName) {
        if (Object.prototype.hasOwnProperty.call(parent, propertyName)) {
          return parent[propertyName];
        }
        return undefined
    };

  return "                      <li class=\"active\" aria-current=\"page\">\n                      <span>\n                        "
    + ((stack1 = ((helper = (helper = lookupProperty(helpers,"asset_short_name") || (depth0 != null ? lookupProperty(depth0,"asset_short_name") : depth0)) != null ? helper : container.hooks.helperMissing),(typeof helper === "function" ? helper.call(depth0 != null ? depth0 : (container.nullContext || {}),{"name":"asset_short_name","hash":{},"data":data,"loc":{"start":{"line":72,"column":24},"end":{"line":72,"column":48}}}) : helper))) != null ? stack1 : "")
    + "\n                      </span>\n";
},"compiler":[8,">= 4.3.0"],"main":function(container,depth0,helpers,partials,data) {
    var stack1, alias1=container.lambda, alias2=container.escapeExpression, lookupProperty = container.lookupProperty || function(parent, propertyName) {
        if (Object.prototype.hasOwnProperty.call(parent, propertyName)) {
          return parent[propertyName];
        }
        return undefined
    };

  return "<div\n  class=\"qld__side-nav qld__accordion\"\n  data-path=\""
    + alias2(alias1(((stack1 = ((stack1 = ((stack1 = ((stack1 = (data && lookupProperty(data,"root"))) && lookupProperty(stack1,"site"))) && lookupProperty(stack1,"metadata"))) && lookupProperty(stack1,"coreSiteIcons"))) && lookupProperty(stack1,"value")), depth0))
    + "\"\n>\n  <button\n    class=\"qld__side-nav__toggle qld__accordion__title qld__accordion--closed\"\n    aria-controls=\"nav-default\"\n    aria-expanded=\"false\"\n  >\n    In\n    "
    + ((stack1 = alias1(((stack1 = ((stack1 = ((stack1 = (depth0 != null ? lookupProperty(depth0,"current") : depth0)) != null ? lookupProperty(stack1,"nav") : stack1)) != null ? lookupProperty(stack1,"top") : stack1)) != null ? lookupProperty(stack1,"asset_name") : stack1), depth0)) != null ? stack1 : "")
    + "\n    <svg\n      class=\"qld__icon qld__icon--md qld__accordion__icon\"\n      aria-hidden=\"true\"\n      xmlns=\"http://www.w3.org/2000/svg\"\n    >\n      <use href=\""
    + alias2(alias1(((stack1 = ((stack1 = ((stack1 = ((stack1 = (data && lookupProperty(data,"root"))) && lookupProperty(stack1,"site"))) && lookupProperty(stack1,"metadata"))) && lookupProperty(stack1,"coreSiteIcons"))) && lookupProperty(stack1,"value")), depth0))
    + "#chevron-up\"\n      ></use>\n    </svg>\n  </button>\n  <nav\n    id=\"nav-default\"\n    class=\"qld__side-nav__content qld__accordion--closed qld__accordion__body\"\n    aria-label=\"side navigation\"\n  >\n    <h2 class=\"qld__sidenav__title\">\n      <a class=\"qld__sidenav__link\" href=\""
    + alias2(alias1(((stack1 = ((stack1 = ((stack1 = (depth0 != null ? lookupProperty(depth0,"current") : depth0)) != null ? lookupProperty(stack1,"nav") : stack1)) != null ? lookupProperty(stack1,"top") : stack1)) != null ? lookupProperty(stack1,"asset_url") : stack1), depth0))
    + "\">\n        "
    + ((stack1 = alias1(((stack1 = ((stack1 = ((stack1 = (depth0 != null ? lookupProperty(depth0,"current") : depth0)) != null ? lookupProperty(stack1,"nav") : stack1)) != null ? lookupProperty(stack1,"top") : stack1)) != null ? lookupProperty(stack1,"asset_name") : stack1), depth0)) != null ? stack1 : "")
    + "\n      </a>\n    </h2>\n    <ul class=\"qld__link-list\">\n"
    + ((stack1 = lookupProperty(helpers,"each").call(depth0 != null ? depth0 : (container.nullContext || {}),((stack1 = ((stack1 = (depth0 != null ? lookupProperty(depth0,"current") : depth0)) != null ? lookupProperty(stack1,"nav") : stack1)) != null ? lookupProperty(stack1,"items") : stack1),{"name":"each","hash":{},"fn":container.program(1, data, 0),"inverse":container.noop,"data":data,"loc":{"start":{"line":32,"column":6},"end":{"line":84,"column":15}}})) != null ? stack1 : "")
    + "    </ul>\n  </nav>\n</div>\n";
},"useData":true}