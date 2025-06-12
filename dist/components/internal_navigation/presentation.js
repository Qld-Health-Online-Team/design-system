{"1":function(container,depth0,helpers,partials,data) {
    var stack1, lookupProperty = container.lookupProperty || function(parent, propertyName) {
        if (Object.prototype.hasOwnProperty.call(parent, propertyName)) {
          return parent[propertyName];
        }
        return undefined
    };

  return ((stack1 = lookupProperty(helpers,"if").call(depth0 != null ? depth0 : (container.nullContext || {}),((stack1 = ((stack1 = ((stack1 = ((stack1 = (depth0 != null ? lookupProperty(depth0,"current") : depth0)) != null ? lookupProperty(stack1,"data") : stack1)) != null ? lookupProperty(stack1,"metadata") : stack1)) != null ? lookupProperty(stack1,"sideNavigationParent") : stack1)) != null ? lookupProperty(stack1,"value") : stack1),{"name":"if","hash":{},"fn":container.program(2, data, 0),"inverse":container.program(22, data, 0),"data":data,"loc":{"start":{"line":8,"column":12},"end":{"line":110,"column":19}}})) != null ? stack1 : "");
},"2":function(container,depth0,helpers,partials,data) {
    var stack1, alias1=container.lambda, lookupProperty = container.lookupProperty || function(parent, propertyName) {
        if (Object.prototype.hasOwnProperty.call(parent, propertyName)) {
          return parent[propertyName];
        }
        return undefined
    };

  return "                <h2 class=\"qld__sidenav__title\">\r\n                    <a class=\"qld__sidenav__link\" href=\""
    + container.escapeExpression(alias1(((stack1 = ((stack1 = (depth0 != null ? lookupProperty(depth0,"current") : depth0)) != null ? lookupProperty(stack1,"topOverride") : stack1)) != null ? lookupProperty(stack1,"asset_url") : stack1), depth0))
    + "\">"
    + ((stack1 = alias1(((stack1 = ((stack1 = (depth0 != null ? lookupProperty(depth0,"current") : depth0)) != null ? lookupProperty(stack1,"topOverride") : stack1)) != null ? lookupProperty(stack1,"asset_name") : stack1), depth0)) != null ? stack1 : "")
    + "</a>\r\n                </h2>\r\n                <ul class=\"qld__link-list\">\r\n"
    + ((stack1 = lookupProperty(helpers,"each").call(depth0 != null ? depth0 : (container.nullContext || {}),((stack1 = (depth0 != null ? lookupProperty(depth0,"current") : depth0)) != null ? lookupProperty(stack1,"childrenOverride") : stack1),{"name":"each","hash":{},"fn":container.program(3, data, 0),"inverse":container.noop,"data":data,"loc":{"start":{"line":13,"column":16},"end":{"line":57,"column":25}}})) != null ? stack1 : "")
    + "                </ul>\r\n";
},"3":function(container,depth0,helpers,partials,data) {
    var stack1, alias1=depth0 != null ? depth0 : (container.nullContext || {}), alias2=container.hooks.helperMissing, lookupProperty = container.lookupProperty || function(parent, propertyName) {
        if (Object.prototype.hasOwnProperty.call(parent, propertyName)) {
          return parent[propertyName];
        }
        return undefined
    };

  return ((stack1 = (lookupProperty(helpers,"ifCond")||(depth0 && lookupProperty(depth0,"ifCond"))||alias2).call(alias1,(depth0 != null ? lookupProperty(depth0,"asset_assetid") : depth0),"!=",((stack1 = ((stack1 = ((stack1 = (data && lookupProperty(data,"root"))) && lookupProperty(stack1,"current"))) && lookupProperty(stack1,"data"))) && lookupProperty(stack1,"assetid")),{"name":"ifCond","hash":{},"fn":container.program(4, data, 0),"inverse":container.noop,"data":data,"loc":{"start":{"line":14,"column":20},"end":{"line":17,"column":31}}})) != null ? stack1 : "")
    + ((stack1 = (lookupProperty(helpers,"ifCond")||(depth0 && lookupProperty(depth0,"ifCond"))||alias2).call(alias1,(depth0 != null ? lookupProperty(depth0,"asset_assetid") : depth0),"==",((stack1 = ((stack1 = ((stack1 = (data && lookupProperty(data,"root"))) && lookupProperty(stack1,"current"))) && lookupProperty(stack1,"data"))) && lookupProperty(stack1,"assetid")),{"name":"ifCond","hash":{},"fn":container.program(6, data, 0),"inverse":container.noop,"data":data,"loc":{"start":{"line":18,"column":20},"end":{"line":21,"column":31}}})) != null ? stack1 : "")
    + ((stack1 = (lookupProperty(helpers,"inArray")||(depth0 && lookupProperty(depth0,"inArray"))||alias2).call(alias1,((stack1 = ((stack1 = (data && lookupProperty(data,"root"))) && lookupProperty(stack1,"current"))) && lookupProperty(stack1,"lineageOverride")),"asset_assetid",(depth0 != null ? lookupProperty(depth0,"asset_assetid") : depth0),{"name":"inArray","hash":{},"fn":container.program(8, data, 0),"inverse":container.noop,"data":data,"loc":{"start":{"line":22,"column":20},"end":{"line":55,"column":32}}})) != null ? stack1 : "")
    + "                    </li>\r\n";
},"4":function(container,depth0,helpers,partials,data) {
    var stack1, helper, alias1=depth0 != null ? depth0 : (container.nullContext || {}), alias2=container.hooks.helperMissing, alias3="function", lookupProperty = container.lookupProperty || function(parent, propertyName) {
        if (Object.prototype.hasOwnProperty.call(parent, propertyName)) {
          return parent[propertyName];
        }
        return undefined
    };

  return "                    <li>\r\n                        <a class=\"qld__sidenav__link\" href=\""
    + container.escapeExpression(((helper = (helper = lookupProperty(helpers,"asset_url") || (depth0 != null ? lookupProperty(depth0,"asset_url") : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"asset_url","hash":{},"data":data,"loc":{"start":{"line":16,"column":60},"end":{"line":16,"column":73}}}) : helper)))
    + "\">"
    + ((stack1 = ((helper = (helper = lookupProperty(helpers,"asset_short_name") || (depth0 != null ? lookupProperty(depth0,"asset_short_name") : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"asset_short_name","hash":{},"data":data,"loc":{"start":{"line":16,"column":75},"end":{"line":16,"column":97}}}) : helper))) != null ? stack1 : "")
    + "</a>\r\n";
},"6":function(container,depth0,helpers,partials,data) {
    var stack1, helper, lookupProperty = container.lookupProperty || function(parent, propertyName) {
        if (Object.prototype.hasOwnProperty.call(parent, propertyName)) {
          return parent[propertyName];
        }
        return undefined
    };

  return "                    <li class=\"active\" aria-current=\"page\">\r\n                        <span>"
    + ((stack1 = ((helper = (helper = lookupProperty(helpers,"asset_short_name") || (depth0 != null ? lookupProperty(depth0,"asset_short_name") : depth0)) != null ? helper : container.hooks.helperMissing),(typeof helper === "function" ? helper.call(depth0 != null ? depth0 : (container.nullContext || {}),{"name":"asset_short_name","hash":{},"data":data,"loc":{"start":{"line":20,"column":30},"end":{"line":20,"column":52}}}) : helper))) != null ? stack1 : "")
    + "</span>\r\n";
},"8":function(container,depth0,helpers,partials,data) {
    var stack1, lookupProperty = container.lookupProperty || function(parent, propertyName) {
        if (Object.prototype.hasOwnProperty.call(parent, propertyName)) {
          return parent[propertyName];
        }
        return undefined
    };

  return ((stack1 = lookupProperty(helpers,"if").call(depth0 != null ? depth0 : (container.nullContext || {}),(depth0 != null ? lookupProperty(depth0,"childrenOverride") : depth0),{"name":"if","hash":{},"fn":container.program(9, data, 0),"inverse":container.noop,"data":data,"loc":{"start":{"line":23,"column":24},"end":{"line":54,"column":31}}})) != null ? stack1 : "");
},"9":function(container,depth0,helpers,partials,data) {
    var stack1, lookupProperty = container.lookupProperty || function(parent, propertyName) {
        if (Object.prototype.hasOwnProperty.call(parent, propertyName)) {
          return parent[propertyName];
        }
        return undefined
    };

  return "                            <ul class=\"qld__link-list\">\r\n"
    + ((stack1 = lookupProperty(helpers,"each").call(depth0 != null ? depth0 : (container.nullContext || {}),(depth0 != null ? lookupProperty(depth0,"childrenOverride") : depth0),{"name":"each","hash":{},"fn":container.program(10, data, 0),"inverse":container.noop,"data":data,"loc":{"start":{"line":25,"column":28},"end":{"line":52,"column":37}}})) != null ? stack1 : "")
    + "                            </ul>  \r\n";
},"10":function(container,depth0,helpers,partials,data) {
    var stack1, alias1=depth0 != null ? depth0 : (container.nullContext || {}), alias2=container.hooks.helperMissing, lookupProperty = container.lookupProperty || function(parent, propertyName) {
        if (Object.prototype.hasOwnProperty.call(parent, propertyName)) {
          return parent[propertyName];
        }
        return undefined
    };

  return ((stack1 = (lookupProperty(helpers,"ifCond")||(depth0 && lookupProperty(depth0,"ifCond"))||alias2).call(alias1,(depth0 != null ? lookupProperty(depth0,"asset_assetid") : depth0),"!=",((stack1 = ((stack1 = ((stack1 = (data && lookupProperty(data,"root"))) && lookupProperty(stack1,"current"))) && lookupProperty(stack1,"data"))) && lookupProperty(stack1,"assetid")),{"name":"ifCond","hash":{},"fn":container.program(11, data, 0),"inverse":container.noop,"data":data,"loc":{"start":{"line":26,"column":32},"end":{"line":29,"column":43}}})) != null ? stack1 : "")
    + ((stack1 = (lookupProperty(helpers,"ifCond")||(depth0 && lookupProperty(depth0,"ifCond"))||alias2).call(alias1,(depth0 != null ? lookupProperty(depth0,"asset_assetid") : depth0),"==",((stack1 = ((stack1 = ((stack1 = (data && lookupProperty(data,"root"))) && lookupProperty(stack1,"current"))) && lookupProperty(stack1,"data"))) && lookupProperty(stack1,"assetid")),{"name":"ifCond","hash":{},"fn":container.program(13, data, 0),"inverse":container.noop,"data":data,"loc":{"start":{"line":30,"column":32},"end":{"line":33,"column":43}}})) != null ? stack1 : "")
    + ((stack1 = (lookupProperty(helpers,"inArray")||(depth0 && lookupProperty(depth0,"inArray"))||alias2).call(alias1,((stack1 = ((stack1 = (data && lookupProperty(data,"root"))) && lookupProperty(stack1,"current"))) && lookupProperty(stack1,"lineage")),"asset_assetid",(depth0 != null ? lookupProperty(depth0,"asset_assetid") : depth0),{"name":"inArray","hash":{},"fn":container.program(15, data, 0),"inverse":container.noop,"data":data,"loc":{"start":{"line":34,"column":32},"end":{"line":50,"column":44}}})) != null ? stack1 : "")
    + "                                </li>\r\n";
},"11":function(container,depth0,helpers,partials,data) {
    var stack1, helper, alias1=depth0 != null ? depth0 : (container.nullContext || {}), alias2=container.hooks.helperMissing, alias3="function", lookupProperty = container.lookupProperty || function(parent, propertyName) {
        if (Object.prototype.hasOwnProperty.call(parent, propertyName)) {
          return parent[propertyName];
        }
        return undefined
    };

  return "                                <li>\r\n                                    <a class=\"qld__sidenav__link\" href=\""
    + container.escapeExpression(((helper = (helper = lookupProperty(helpers,"asset_url") || (depth0 != null ? lookupProperty(depth0,"asset_url") : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"asset_url","hash":{},"data":data,"loc":{"start":{"line":28,"column":72},"end":{"line":28,"column":85}}}) : helper)))
    + "\">"
    + ((stack1 = ((helper = (helper = lookupProperty(helpers,"asset_short_name") || (depth0 != null ? lookupProperty(depth0,"asset_short_name") : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"asset_short_name","hash":{},"data":data,"loc":{"start":{"line":28,"column":87},"end":{"line":28,"column":109}}}) : helper))) != null ? stack1 : "")
    + "</a>\r\n";
},"13":function(container,depth0,helpers,partials,data) {
    var stack1, helper, lookupProperty = container.lookupProperty || function(parent, propertyName) {
        if (Object.prototype.hasOwnProperty.call(parent, propertyName)) {
          return parent[propertyName];
        }
        return undefined
    };

  return "                                <li class=\"active\" aria-current=\"page\">\r\n                                    <span>"
    + ((stack1 = ((helper = (helper = lookupProperty(helpers,"asset_short_name") || (depth0 != null ? lookupProperty(depth0,"asset_short_name") : depth0)) != null ? helper : container.hooks.helperMissing),(typeof helper === "function" ? helper.call(depth0 != null ? depth0 : (container.nullContext || {}),{"name":"asset_short_name","hash":{},"data":data,"loc":{"start":{"line":32,"column":42},"end":{"line":32,"column":64}}}) : helper))) != null ? stack1 : "")
    + "</span>\r\n";
},"15":function(container,depth0,helpers,partials,data) {
    var stack1, lookupProperty = container.lookupProperty || function(parent, propertyName) {
        if (Object.prototype.hasOwnProperty.call(parent, propertyName)) {
          return parent[propertyName];
        }
        return undefined
    };

  return ((stack1 = lookupProperty(helpers,"if").call(depth0 != null ? depth0 : (container.nullContext || {}),(depth0 != null ? lookupProperty(depth0,"childrenOverride") : depth0),{"name":"if","hash":{},"fn":container.program(16, data, 0),"inverse":container.noop,"data":data,"loc":{"start":{"line":35,"column":36},"end":{"line":49,"column":43}}})) != null ? stack1 : "");
},"16":function(container,depth0,helpers,partials,data) {
    var stack1, lookupProperty = container.lookupProperty || function(parent, propertyName) {
        if (Object.prototype.hasOwnProperty.call(parent, propertyName)) {
          return parent[propertyName];
        }
        return undefined
    };

  return "                                        <ul class=\"qld__link-list\">\r\n"
    + ((stack1 = lookupProperty(helpers,"each").call(depth0 != null ? depth0 : (container.nullContext || {}),(depth0 != null ? lookupProperty(depth0,"childrenOverride") : depth0),{"name":"each","hash":{},"fn":container.program(17, data, 0),"inverse":container.noop,"data":data,"loc":{"start":{"line":37,"column":40},"end":{"line":47,"column":49}}})) != null ? stack1 : "")
    + "                                        </ul>  \r\n";
},"17":function(container,depth0,helpers,partials,data) {
    var stack1, alias1=depth0 != null ? depth0 : (container.nullContext || {}), alias2=container.hooks.helperMissing, lookupProperty = container.lookupProperty || function(parent, propertyName) {
        if (Object.prototype.hasOwnProperty.call(parent, propertyName)) {
          return parent[propertyName];
        }
        return undefined
    };

  return ((stack1 = (lookupProperty(helpers,"ifCond")||(depth0 && lookupProperty(depth0,"ifCond"))||alias2).call(alias1,(depth0 != null ? lookupProperty(depth0,"asset_assetid") : depth0),"!=",((stack1 = ((stack1 = ((stack1 = (data && lookupProperty(data,"root"))) && lookupProperty(stack1,"current"))) && lookupProperty(stack1,"data"))) && lookupProperty(stack1,"assetid")),{"name":"ifCond","hash":{},"fn":container.program(18, data, 0),"inverse":container.noop,"data":data,"loc":{"start":{"line":38,"column":44},"end":{"line":41,"column":55}}})) != null ? stack1 : "")
    + ((stack1 = (lookupProperty(helpers,"ifCond")||(depth0 && lookupProperty(depth0,"ifCond"))||alias2).call(alias1,(depth0 != null ? lookupProperty(depth0,"asset_assetid") : depth0),"==",((stack1 = ((stack1 = ((stack1 = (data && lookupProperty(data,"root"))) && lookupProperty(stack1,"current"))) && lookupProperty(stack1,"data"))) && lookupProperty(stack1,"assetid")),{"name":"ifCond","hash":{},"fn":container.program(20, data, 0),"inverse":container.noop,"data":data,"loc":{"start":{"line":42,"column":44},"end":{"line":45,"column":55}}})) != null ? stack1 : "")
    + "                                            </li>    \r\n";
},"18":function(container,depth0,helpers,partials,data) {
    var stack1, helper, alias1=depth0 != null ? depth0 : (container.nullContext || {}), alias2=container.hooks.helperMissing, alias3="function", lookupProperty = container.lookupProperty || function(parent, propertyName) {
        if (Object.prototype.hasOwnProperty.call(parent, propertyName)) {
          return parent[propertyName];
        }
        return undefined
    };

  return "                                            <li>\r\n                                                <a class=\"qld__sidenav__link\" href=\""
    + container.escapeExpression(((helper = (helper = lookupProperty(helpers,"asset_url") || (depth0 != null ? lookupProperty(depth0,"asset_url") : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"asset_url","hash":{},"data":data,"loc":{"start":{"line":40,"column":84},"end":{"line":40,"column":97}}}) : helper)))
    + "\">"
    + ((stack1 = ((helper = (helper = lookupProperty(helpers,"asset_short_name") || (depth0 != null ? lookupProperty(depth0,"asset_short_name") : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"asset_short_name","hash":{},"data":data,"loc":{"start":{"line":40,"column":99},"end":{"line":40,"column":121}}}) : helper))) != null ? stack1 : "")
    + "</a>\r\n";
},"20":function(container,depth0,helpers,partials,data) {
    var stack1, helper, lookupProperty = container.lookupProperty || function(parent, propertyName) {
        if (Object.prototype.hasOwnProperty.call(parent, propertyName)) {
          return parent[propertyName];
        }
        return undefined
    };

  return "                                            <li class=\"active\" aria-current=\"page\">\r\n                                                <span>"
    + ((stack1 = ((helper = (helper = lookupProperty(helpers,"asset_short_name") || (depth0 != null ? lookupProperty(depth0,"asset_short_name") : depth0)) != null ? helper : container.hooks.helperMissing),(typeof helper === "function" ? helper.call(depth0 != null ? depth0 : (container.nullContext || {}),{"name":"asset_short_name","hash":{},"data":data,"loc":{"start":{"line":44,"column":54},"end":{"line":44,"column":76}}}) : helper))) != null ? stack1 : "")
    + "</span>\r\n";
},"22":function(container,depth0,helpers,partials,data) {
    var stack1, alias1=container.lambda, lookupProperty = container.lookupProperty || function(parent, propertyName) {
        if (Object.prototype.hasOwnProperty.call(parent, propertyName)) {
          return parent[propertyName];
        }
        return undefined
    };

  return "                <h2 class=\"qld__sidenav__title\">\r\n                    <a class=\"qld__sidenav__link\" href=\""
    + container.escapeExpression(alias1(((stack1 = ((stack1 = (depth0 != null ? lookupProperty(depth0,"current") : depth0)) != null ? lookupProperty(stack1,"top") : stack1)) != null ? lookupProperty(stack1,"asset_url") : stack1), depth0))
    + "\">"
    + ((stack1 = alias1(((stack1 = ((stack1 = (depth0 != null ? lookupProperty(depth0,"current") : depth0)) != null ? lookupProperty(stack1,"top") : stack1)) != null ? lookupProperty(stack1,"asset_name") : stack1), depth0)) != null ? stack1 : "")
    + "</a>\r\n                </h2>\r\n                <ul class=\"qld__link-list\">\r\n"
    + ((stack1 = lookupProperty(helpers,"each").call(depth0 != null ? depth0 : (container.nullContext || {}),((stack1 = (depth0 != null ? lookupProperty(depth0,"current") : depth0)) != null ? lookupProperty(stack1,"children") : stack1),{"name":"each","hash":{},"fn":container.program(23, data, 0),"inverse":container.noop,"data":data,"loc":{"start":{"line":64,"column":16},"end":{"line":108,"column":25}}})) != null ? stack1 : "")
    + "                </ul>\r\n";
},"23":function(container,depth0,helpers,partials,data) {
    var stack1, alias1=depth0 != null ? depth0 : (container.nullContext || {}), alias2=container.hooks.helperMissing, lookupProperty = container.lookupProperty || function(parent, propertyName) {
        if (Object.prototype.hasOwnProperty.call(parent, propertyName)) {
          return parent[propertyName];
        }
        return undefined
    };

  return ((stack1 = (lookupProperty(helpers,"ifCond")||(depth0 && lookupProperty(depth0,"ifCond"))||alias2).call(alias1,(depth0 != null ? lookupProperty(depth0,"asset_assetid") : depth0),"!=",((stack1 = ((stack1 = ((stack1 = (data && lookupProperty(data,"root"))) && lookupProperty(stack1,"current"))) && lookupProperty(stack1,"data"))) && lookupProperty(stack1,"assetid")),{"name":"ifCond","hash":{},"fn":container.program(4, data, 0),"inverse":container.noop,"data":data,"loc":{"start":{"line":65,"column":20},"end":{"line":68,"column":31}}})) != null ? stack1 : "")
    + ((stack1 = (lookupProperty(helpers,"ifCond")||(depth0 && lookupProperty(depth0,"ifCond"))||alias2).call(alias1,(depth0 != null ? lookupProperty(depth0,"asset_assetid") : depth0),"==",((stack1 = ((stack1 = ((stack1 = (data && lookupProperty(data,"root"))) && lookupProperty(stack1,"current"))) && lookupProperty(stack1,"data"))) && lookupProperty(stack1,"assetid")),{"name":"ifCond","hash":{},"fn":container.program(6, data, 0),"inverse":container.noop,"data":data,"loc":{"start":{"line":69,"column":20},"end":{"line":72,"column":31}}})) != null ? stack1 : "")
    + ((stack1 = (lookupProperty(helpers,"inArray")||(depth0 && lookupProperty(depth0,"inArray"))||alias2).call(alias1,((stack1 = ((stack1 = (data && lookupProperty(data,"root"))) && lookupProperty(stack1,"current"))) && lookupProperty(stack1,"lineage")),"asset_assetid",(depth0 != null ? lookupProperty(depth0,"asset_assetid") : depth0),{"name":"inArray","hash":{},"fn":container.program(24, data, 0),"inverse":container.noop,"data":data,"loc":{"start":{"line":73,"column":20},"end":{"line":106,"column":32}}})) != null ? stack1 : "")
    + "                    </li>\r\n";
},"24":function(container,depth0,helpers,partials,data) {
    var stack1, lookupProperty = container.lookupProperty || function(parent, propertyName) {
        if (Object.prototype.hasOwnProperty.call(parent, propertyName)) {
          return parent[propertyName];
        }
        return undefined
    };

  return ((stack1 = lookupProperty(helpers,"if").call(depth0 != null ? depth0 : (container.nullContext || {}),(depth0 != null ? lookupProperty(depth0,"children") : depth0),{"name":"if","hash":{},"fn":container.program(25, data, 0),"inverse":container.noop,"data":data,"loc":{"start":{"line":74,"column":24},"end":{"line":105,"column":31}}})) != null ? stack1 : "");
},"25":function(container,depth0,helpers,partials,data) {
    var stack1, lookupProperty = container.lookupProperty || function(parent, propertyName) {
        if (Object.prototype.hasOwnProperty.call(parent, propertyName)) {
          return parent[propertyName];
        }
        return undefined
    };

  return "                            <ul class=\"qld__link-list\">\r\n"
    + ((stack1 = lookupProperty(helpers,"each").call(depth0 != null ? depth0 : (container.nullContext || {}),(depth0 != null ? lookupProperty(depth0,"children") : depth0),{"name":"each","hash":{},"fn":container.program(26, data, 0),"inverse":container.noop,"data":data,"loc":{"start":{"line":76,"column":28},"end":{"line":103,"column":37}}})) != null ? stack1 : "")
    + "                            </ul>  \r\n";
},"26":function(container,depth0,helpers,partials,data) {
    var stack1, alias1=depth0 != null ? depth0 : (container.nullContext || {}), alias2=container.hooks.helperMissing, lookupProperty = container.lookupProperty || function(parent, propertyName) {
        if (Object.prototype.hasOwnProperty.call(parent, propertyName)) {
          return parent[propertyName];
        }
        return undefined
    };

  return ((stack1 = (lookupProperty(helpers,"ifCond")||(depth0 && lookupProperty(depth0,"ifCond"))||alias2).call(alias1,(depth0 != null ? lookupProperty(depth0,"asset_assetid") : depth0),"!=",((stack1 = ((stack1 = ((stack1 = (data && lookupProperty(data,"root"))) && lookupProperty(stack1,"current"))) && lookupProperty(stack1,"data"))) && lookupProperty(stack1,"assetid")),{"name":"ifCond","hash":{},"fn":container.program(11, data, 0),"inverse":container.noop,"data":data,"loc":{"start":{"line":77,"column":32},"end":{"line":80,"column":43}}})) != null ? stack1 : "")
    + ((stack1 = (lookupProperty(helpers,"ifCond")||(depth0 && lookupProperty(depth0,"ifCond"))||alias2).call(alias1,(depth0 != null ? lookupProperty(depth0,"asset_assetid") : depth0),"==",((stack1 = ((stack1 = ((stack1 = (data && lookupProperty(data,"root"))) && lookupProperty(stack1,"current"))) && lookupProperty(stack1,"data"))) && lookupProperty(stack1,"assetid")),{"name":"ifCond","hash":{},"fn":container.program(13, data, 0),"inverse":container.noop,"data":data,"loc":{"start":{"line":81,"column":32},"end":{"line":84,"column":43}}})) != null ? stack1 : "")
    + ((stack1 = (lookupProperty(helpers,"inArray")||(depth0 && lookupProperty(depth0,"inArray"))||alias2).call(alias1,((stack1 = ((stack1 = (data && lookupProperty(data,"root"))) && lookupProperty(stack1,"current"))) && lookupProperty(stack1,"lineage")),"asset_assetid",(depth0 != null ? lookupProperty(depth0,"asset_assetid") : depth0),{"name":"inArray","hash":{},"fn":container.program(27, data, 0),"inverse":container.noop,"data":data,"loc":{"start":{"line":85,"column":32},"end":{"line":101,"column":44}}})) != null ? stack1 : "")
    + "                                </li>\r\n";
},"27":function(container,depth0,helpers,partials,data) {
    var stack1, lookupProperty = container.lookupProperty || function(parent, propertyName) {
        if (Object.prototype.hasOwnProperty.call(parent, propertyName)) {
          return parent[propertyName];
        }
        return undefined
    };

  return ((stack1 = lookupProperty(helpers,"if").call(depth0 != null ? depth0 : (container.nullContext || {}),(depth0 != null ? lookupProperty(depth0,"children") : depth0),{"name":"if","hash":{},"fn":container.program(28, data, 0),"inverse":container.noop,"data":data,"loc":{"start":{"line":86,"column":36},"end":{"line":100,"column":43}}})) != null ? stack1 : "");
},"28":function(container,depth0,helpers,partials,data) {
    var stack1, lookupProperty = container.lookupProperty || function(parent, propertyName) {
        if (Object.prototype.hasOwnProperty.call(parent, propertyName)) {
          return parent[propertyName];
        }
        return undefined
    };

  return "                                        <ul class=\"qld__link-list\">\r\n"
    + ((stack1 = lookupProperty(helpers,"each").call(depth0 != null ? depth0 : (container.nullContext || {}),(depth0 != null ? lookupProperty(depth0,"children") : depth0),{"name":"each","hash":{},"fn":container.program(17, data, 0),"inverse":container.noop,"data":data,"loc":{"start":{"line":88,"column":40},"end":{"line":98,"column":49}}})) != null ? stack1 : "")
    + "                                        </ul>  \r\n";
},"30":function(container,depth0,helpers,partials,data) {
    var stack1, alias1=container.lambda, lookupProperty = container.lookupProperty || function(parent, propertyName) {
        if (Object.prototype.hasOwnProperty.call(parent, propertyName)) {
          return parent[propertyName];
        }
        return undefined
    };

  return "            <h2 class=\"qld__sidenav__title\">\r\n                <a class=\"qld__sidenav__link\" href=\""
    + container.escapeExpression(alias1(((stack1 = ((stack1 = (depth0 != null ? lookupProperty(depth0,"current") : depth0)) != null ? lookupProperty(stack1,"top") : stack1)) != null ? lookupProperty(stack1,"asset_url") : stack1), depth0))
    + "\">"
    + ((stack1 = alias1(((stack1 = ((stack1 = (depth0 != null ? lookupProperty(depth0,"current") : depth0)) != null ? lookupProperty(stack1,"top") : stack1)) != null ? lookupProperty(stack1,"asset_name") : stack1), depth0)) != null ? stack1 : "")
    + "</a>\r\n            </h2>\r\n            <ul class=\"qld__link-list\">\r\n"
    + ((stack1 = lookupProperty(helpers,"each").call(depth0 != null ? depth0 : (container.nullContext || {}),((stack1 = (depth0 != null ? lookupProperty(depth0,"current") : depth0)) != null ? lookupProperty(stack1,"children") : stack1),{"name":"each","hash":{},"fn":container.program(31, data, 0),"inverse":container.noop,"data":data,"loc":{"start":{"line":116,"column":12},"end":{"line":160,"column":21}}})) != null ? stack1 : "")
    + "            </ul>\r\n";
},"31":function(container,depth0,helpers,partials,data) {
    var stack1, alias1=depth0 != null ? depth0 : (container.nullContext || {}), alias2=container.hooks.helperMissing, lookupProperty = container.lookupProperty || function(parent, propertyName) {
        if (Object.prototype.hasOwnProperty.call(parent, propertyName)) {
          return parent[propertyName];
        }
        return undefined
    };

  return ((stack1 = (lookupProperty(helpers,"ifCond")||(depth0 && lookupProperty(depth0,"ifCond"))||alias2).call(alias1,(depth0 != null ? lookupProperty(depth0,"asset_assetid") : depth0),"!=",((stack1 = ((stack1 = ((stack1 = (data && lookupProperty(data,"root"))) && lookupProperty(stack1,"current"))) && lookupProperty(stack1,"data"))) && lookupProperty(stack1,"assetid")),{"name":"ifCond","hash":{},"fn":container.program(32, data, 0),"inverse":container.noop,"data":data,"loc":{"start":{"line":117,"column":16},"end":{"line":120,"column":27}}})) != null ? stack1 : "")
    + ((stack1 = (lookupProperty(helpers,"ifCond")||(depth0 && lookupProperty(depth0,"ifCond"))||alias2).call(alias1,(depth0 != null ? lookupProperty(depth0,"asset_assetid") : depth0),"==",((stack1 = ((stack1 = ((stack1 = (data && lookupProperty(data,"root"))) && lookupProperty(stack1,"current"))) && lookupProperty(stack1,"data"))) && lookupProperty(stack1,"assetid")),{"name":"ifCond","hash":{},"fn":container.program(34, data, 0),"inverse":container.noop,"data":data,"loc":{"start":{"line":121,"column":16},"end":{"line":124,"column":27}}})) != null ? stack1 : "")
    + ((stack1 = (lookupProperty(helpers,"inArray")||(depth0 && lookupProperty(depth0,"inArray"))||alias2).call(alias1,((stack1 = ((stack1 = (data && lookupProperty(data,"root"))) && lookupProperty(stack1,"current"))) && lookupProperty(stack1,"lineage")),"asset_assetid",(depth0 != null ? lookupProperty(depth0,"asset_assetid") : depth0),{"name":"inArray","hash":{},"fn":container.program(36, data, 0),"inverse":container.noop,"data":data,"loc":{"start":{"line":125,"column":16},"end":{"line":158,"column":28}}})) != null ? stack1 : "")
    + "                </li>\r\n";
},"32":function(container,depth0,helpers,partials,data) {
    var stack1, helper, alias1=depth0 != null ? depth0 : (container.nullContext || {}), alias2=container.hooks.helperMissing, alias3="function", lookupProperty = container.lookupProperty || function(parent, propertyName) {
        if (Object.prototype.hasOwnProperty.call(parent, propertyName)) {
          return parent[propertyName];
        }
        return undefined
    };

  return "                <li>\r\n                    <a class=\"qld__sidenav__link\" href=\""
    + container.escapeExpression(((helper = (helper = lookupProperty(helpers,"asset_url") || (depth0 != null ? lookupProperty(depth0,"asset_url") : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"asset_url","hash":{},"data":data,"loc":{"start":{"line":119,"column":56},"end":{"line":119,"column":69}}}) : helper)))
    + "\">"
    + ((stack1 = ((helper = (helper = lookupProperty(helpers,"asset_short_name") || (depth0 != null ? lookupProperty(depth0,"asset_short_name") : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"asset_short_name","hash":{},"data":data,"loc":{"start":{"line":119,"column":71},"end":{"line":119,"column":93}}}) : helper))) != null ? stack1 : "")
    + "</a>\r\n";
},"34":function(container,depth0,helpers,partials,data) {
    var stack1, helper, lookupProperty = container.lookupProperty || function(parent, propertyName) {
        if (Object.prototype.hasOwnProperty.call(parent, propertyName)) {
          return parent[propertyName];
        }
        return undefined
    };

  return "                <li class=\"active\" aria-current=\"page\">\r\n                    <span>"
    + ((stack1 = ((helper = (helper = lookupProperty(helpers,"asset_short_name") || (depth0 != null ? lookupProperty(depth0,"asset_short_name") : depth0)) != null ? helper : container.hooks.helperMissing),(typeof helper === "function" ? helper.call(depth0 != null ? depth0 : (container.nullContext || {}),{"name":"asset_short_name","hash":{},"data":data,"loc":{"start":{"line":123,"column":26},"end":{"line":123,"column":48}}}) : helper))) != null ? stack1 : "")
    + "</span>\r\n";
},"36":function(container,depth0,helpers,partials,data) {
    var stack1, lookupProperty = container.lookupProperty || function(parent, propertyName) {
        if (Object.prototype.hasOwnProperty.call(parent, propertyName)) {
          return parent[propertyName];
        }
        return undefined
    };

  return ((stack1 = lookupProperty(helpers,"if").call(depth0 != null ? depth0 : (container.nullContext || {}),(depth0 != null ? lookupProperty(depth0,"children") : depth0),{"name":"if","hash":{},"fn":container.program(37, data, 0),"inverse":container.noop,"data":data,"loc":{"start":{"line":126,"column":20},"end":{"line":157,"column":27}}})) != null ? stack1 : "");
},"37":function(container,depth0,helpers,partials,data) {
    var stack1, lookupProperty = container.lookupProperty || function(parent, propertyName) {
        if (Object.prototype.hasOwnProperty.call(parent, propertyName)) {
          return parent[propertyName];
        }
        return undefined
    };

  return "                        <ul class=\"qld__link-list\">\r\n"
    + ((stack1 = lookupProperty(helpers,"each").call(depth0 != null ? depth0 : (container.nullContext || {}),(depth0 != null ? lookupProperty(depth0,"children") : depth0),{"name":"each","hash":{},"fn":container.program(38, data, 0),"inverse":container.noop,"data":data,"loc":{"start":{"line":128,"column":24},"end":{"line":155,"column":33}}})) != null ? stack1 : "")
    + "                        </ul>  \r\n";
},"38":function(container,depth0,helpers,partials,data) {
    var stack1, alias1=depth0 != null ? depth0 : (container.nullContext || {}), alias2=container.hooks.helperMissing, lookupProperty = container.lookupProperty || function(parent, propertyName) {
        if (Object.prototype.hasOwnProperty.call(parent, propertyName)) {
          return parent[propertyName];
        }
        return undefined
    };

  return ((stack1 = (lookupProperty(helpers,"ifCond")||(depth0 && lookupProperty(depth0,"ifCond"))||alias2).call(alias1,(depth0 != null ? lookupProperty(depth0,"asset_assetid") : depth0),"!=",((stack1 = ((stack1 = ((stack1 = (data && lookupProperty(data,"root"))) && lookupProperty(stack1,"current"))) && lookupProperty(stack1,"data"))) && lookupProperty(stack1,"assetid")),{"name":"ifCond","hash":{},"fn":container.program(39, data, 0),"inverse":container.noop,"data":data,"loc":{"start":{"line":129,"column":28},"end":{"line":132,"column":39}}})) != null ? stack1 : "")
    + ((stack1 = (lookupProperty(helpers,"ifCond")||(depth0 && lookupProperty(depth0,"ifCond"))||alias2).call(alias1,(depth0 != null ? lookupProperty(depth0,"asset_assetid") : depth0),"==",((stack1 = ((stack1 = ((stack1 = (data && lookupProperty(data,"root"))) && lookupProperty(stack1,"current"))) && lookupProperty(stack1,"data"))) && lookupProperty(stack1,"assetid")),{"name":"ifCond","hash":{},"fn":container.program(41, data, 0),"inverse":container.noop,"data":data,"loc":{"start":{"line":133,"column":28},"end":{"line":136,"column":39}}})) != null ? stack1 : "")
    + ((stack1 = (lookupProperty(helpers,"inArray")||(depth0 && lookupProperty(depth0,"inArray"))||alias2).call(alias1,((stack1 = ((stack1 = (data && lookupProperty(data,"root"))) && lookupProperty(stack1,"current"))) && lookupProperty(stack1,"lineage")),"asset_assetid",(depth0 != null ? lookupProperty(depth0,"asset_assetid") : depth0),{"name":"inArray","hash":{},"fn":container.program(43, data, 0),"inverse":container.noop,"data":data,"loc":{"start":{"line":137,"column":28},"end":{"line":153,"column":40}}})) != null ? stack1 : "")
    + "                            </li>\r\n";
},"39":function(container,depth0,helpers,partials,data) {
    var stack1, helper, alias1=depth0 != null ? depth0 : (container.nullContext || {}), alias2=container.hooks.helperMissing, alias3="function", lookupProperty = container.lookupProperty || function(parent, propertyName) {
        if (Object.prototype.hasOwnProperty.call(parent, propertyName)) {
          return parent[propertyName];
        }
        return undefined
    };

  return "                            <li>\r\n                                <a class=\"qld__sidenav__link\" href=\""
    + container.escapeExpression(((helper = (helper = lookupProperty(helpers,"asset_url") || (depth0 != null ? lookupProperty(depth0,"asset_url") : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"asset_url","hash":{},"data":data,"loc":{"start":{"line":131,"column":68},"end":{"line":131,"column":81}}}) : helper)))
    + "\">"
    + ((stack1 = ((helper = (helper = lookupProperty(helpers,"asset_short_name") || (depth0 != null ? lookupProperty(depth0,"asset_short_name") : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"asset_short_name","hash":{},"data":data,"loc":{"start":{"line":131,"column":83},"end":{"line":131,"column":105}}}) : helper))) != null ? stack1 : "")
    + "</a>\r\n";
},"41":function(container,depth0,helpers,partials,data) {
    var stack1, helper, lookupProperty = container.lookupProperty || function(parent, propertyName) {
        if (Object.prototype.hasOwnProperty.call(parent, propertyName)) {
          return parent[propertyName];
        }
        return undefined
    };

  return "                            <li class=\"active\" aria-current=\"page\">\r\n                                <span>"
    + ((stack1 = ((helper = (helper = lookupProperty(helpers,"asset_short_name") || (depth0 != null ? lookupProperty(depth0,"asset_short_name") : depth0)) != null ? helper : container.hooks.helperMissing),(typeof helper === "function" ? helper.call(depth0 != null ? depth0 : (container.nullContext || {}),{"name":"asset_short_name","hash":{},"data":data,"loc":{"start":{"line":135,"column":38},"end":{"line":135,"column":60}}}) : helper))) != null ? stack1 : "")
    + "</span>\r\n";
},"43":function(container,depth0,helpers,partials,data) {
    var stack1, lookupProperty = container.lookupProperty || function(parent, propertyName) {
        if (Object.prototype.hasOwnProperty.call(parent, propertyName)) {
          return parent[propertyName];
        }
        return undefined
    };

  return ((stack1 = lookupProperty(helpers,"if").call(depth0 != null ? depth0 : (container.nullContext || {}),(depth0 != null ? lookupProperty(depth0,"children") : depth0),{"name":"if","hash":{},"fn":container.program(44, data, 0),"inverse":container.noop,"data":data,"loc":{"start":{"line":138,"column":32},"end":{"line":152,"column":39}}})) != null ? stack1 : "");
},"44":function(container,depth0,helpers,partials,data) {
    var stack1, lookupProperty = container.lookupProperty || function(parent, propertyName) {
        if (Object.prototype.hasOwnProperty.call(parent, propertyName)) {
          return parent[propertyName];
        }
        return undefined
    };

  return "                                    <ul class=\"qld__link-list\">\r\n"
    + ((stack1 = lookupProperty(helpers,"each").call(depth0 != null ? depth0 : (container.nullContext || {}),(depth0 != null ? lookupProperty(depth0,"children") : depth0),{"name":"each","hash":{},"fn":container.program(45, data, 0),"inverse":container.noop,"data":data,"loc":{"start":{"line":140,"column":36},"end":{"line":150,"column":45}}})) != null ? stack1 : "")
    + "                                    </ul>  \r\n";
},"45":function(container,depth0,helpers,partials,data) {
    var stack1, alias1=depth0 != null ? depth0 : (container.nullContext || {}), alias2=container.hooks.helperMissing, lookupProperty = container.lookupProperty || function(parent, propertyName) {
        if (Object.prototype.hasOwnProperty.call(parent, propertyName)) {
          return parent[propertyName];
        }
        return undefined
    };

  return ((stack1 = (lookupProperty(helpers,"ifCond")||(depth0 && lookupProperty(depth0,"ifCond"))||alias2).call(alias1,(depth0 != null ? lookupProperty(depth0,"asset_assetid") : depth0),"!=",((stack1 = ((stack1 = ((stack1 = (data && lookupProperty(data,"root"))) && lookupProperty(stack1,"current"))) && lookupProperty(stack1,"data"))) && lookupProperty(stack1,"assetid")),{"name":"ifCond","hash":{},"fn":container.program(46, data, 0),"inverse":container.noop,"data":data,"loc":{"start":{"line":141,"column":40},"end":{"line":144,"column":51}}})) != null ? stack1 : "")
    + ((stack1 = (lookupProperty(helpers,"ifCond")||(depth0 && lookupProperty(depth0,"ifCond"))||alias2).call(alias1,(depth0 != null ? lookupProperty(depth0,"asset_assetid") : depth0),"==",((stack1 = ((stack1 = ((stack1 = (data && lookupProperty(data,"root"))) && lookupProperty(stack1,"current"))) && lookupProperty(stack1,"data"))) && lookupProperty(stack1,"assetid")),{"name":"ifCond","hash":{},"fn":container.program(48, data, 0),"inverse":container.noop,"data":data,"loc":{"start":{"line":145,"column":40},"end":{"line":148,"column":51}}})) != null ? stack1 : "")
    + "                                        </li>    \r\n";
},"46":function(container,depth0,helpers,partials,data) {
    var stack1, helper, alias1=depth0 != null ? depth0 : (container.nullContext || {}), alias2=container.hooks.helperMissing, alias3="function", lookupProperty = container.lookupProperty || function(parent, propertyName) {
        if (Object.prototype.hasOwnProperty.call(parent, propertyName)) {
          return parent[propertyName];
        }
        return undefined
    };

  return "                                        <li>\r\n                                            <a class=\"qld__sidenav__link\" href=\""
    + container.escapeExpression(((helper = (helper = lookupProperty(helpers,"asset_url") || (depth0 != null ? lookupProperty(depth0,"asset_url") : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"asset_url","hash":{},"data":data,"loc":{"start":{"line":143,"column":80},"end":{"line":143,"column":93}}}) : helper)))
    + "\">"
    + ((stack1 = ((helper = (helper = lookupProperty(helpers,"asset_short_name") || (depth0 != null ? lookupProperty(depth0,"asset_short_name") : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"asset_short_name","hash":{},"data":data,"loc":{"start":{"line":143,"column":95},"end":{"line":143,"column":117}}}) : helper))) != null ? stack1 : "")
    + "</a>\r\n";
},"48":function(container,depth0,helpers,partials,data) {
    var stack1, helper, lookupProperty = container.lookupProperty || function(parent, propertyName) {
        if (Object.prototype.hasOwnProperty.call(parent, propertyName)) {
          return parent[propertyName];
        }
        return undefined
    };

  return "                                        <li class=\"active\" aria-current=\"page\">\r\n                                            <span>"
    + ((stack1 = ((helper = (helper = lookupProperty(helpers,"asset_short_name") || (depth0 != null ? lookupProperty(depth0,"asset_short_name") : depth0)) != null ? helper : container.hooks.helperMissing),(typeof helper === "function" ? helper.call(depth0 != null ? depth0 : (container.nullContext || {}),{"name":"asset_short_name","hash":{},"data":data,"loc":{"start":{"line":147,"column":50},"end":{"line":147,"column":72}}}) : helper))) != null ? stack1 : "")
    + "</span>\r\n";
},"compiler":[8,">= 4.3.0"],"main":function(container,depth0,helpers,partials,data) {
    var stack1, lookupProperty = container.lookupProperty || function(parent, propertyName) {
        if (Object.prototype.hasOwnProperty.call(parent, propertyName)) {
          return parent[propertyName];
        }
        return undefined
    };

  return "<div class=\"qld__side-nav qld__accordion\">\r\n    <button class=\"qld__side-nav__toggle qld__accordion__title qld__accordion--closed\" aria-controls=\"nav-default\" aria-expanded=\"false\" aria-selected=\"false\" >\r\n    In "
    + ((stack1 = container.lambda(((stack1 = ((stack1 = (depth0 != null ? lookupProperty(depth0,"current") : depth0)) != null ? lookupProperty(stack1,"top") : stack1)) != null ? lookupProperty(stack1,"asset_name") : stack1), depth0)) != null ? stack1 : "")
    + "\r\n    </button>\r\n    <nav aria-label=\"side navigation\" id=\"nav-default\" class=\"qld__side-nav__content qld__accordion--closed qld__accordion__body\"> \r\n        \r\n"
    + ((stack1 = (lookupProperty(helpers,"ifCond")||(depth0 && lookupProperty(depth0,"ifCond"))||container.hooks.helperMissing).call(depth0 != null ? depth0 : (container.nullContext || {}),((stack1 = ((stack1 = ((stack1 = ((stack1 = (depth0 != null ? lookupProperty(depth0,"current") : depth0)) != null ? lookupProperty(stack1,"data") : stack1)) != null ? lookupProperty(stack1,"metadata") : stack1)) != null ? lookupProperty(stack1,"sideNavigation") : stack1)) != null ? lookupProperty(stack1,"value") : stack1),"==","custom",{"name":"ifCond","hash":{},"fn":container.program(1, data, 0),"inverse":container.program(30, data, 0),"data":data,"loc":{"start":{"line":7,"column":8},"end":{"line":162,"column":19}}})) != null ? stack1 : "")
    + "    </nav>\r\n</div>";
},"useData":true}