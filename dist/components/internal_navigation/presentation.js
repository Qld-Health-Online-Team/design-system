{"1":function(container,depth0,helpers,partials,data) {
    var stack1, alias1=depth0 != null ? depth0 : (container.nullContext || {}), alias2=container.hooks.helperMissing, lookupProperty = container.lookupProperty || function(parent, propertyName) {
        if (Object.prototype.hasOwnProperty.call(parent, propertyName)) {
          return parent[propertyName];
        }
        return undefined
    };

  return ((stack1 = (lookupProperty(helpers,"ifCond")||(depth0 && lookupProperty(depth0,"ifCond"))||alias2).call(alias1,(depth0 != null ? lookupProperty(depth0,"asset_assetid") : depth0),"!=",((stack1 = ((stack1 = ((stack1 = (data && lookupProperty(data,"root"))) && lookupProperty(stack1,"current"))) && lookupProperty(stack1,"data"))) && lookupProperty(stack1,"assetid")),{"name":"ifCond","hash":{},"fn":container.program(2, data, 0),"inverse":container.noop,"data":data,"loc":{"start":{"line":11,"column":12},"end":{"line":14,"column":23}}})) != null ? stack1 : "")
    + ((stack1 = (lookupProperty(helpers,"ifCond")||(depth0 && lookupProperty(depth0,"ifCond"))||alias2).call(alias1,(depth0 != null ? lookupProperty(depth0,"asset_assetid") : depth0),"==",((stack1 = ((stack1 = ((stack1 = (data && lookupProperty(data,"root"))) && lookupProperty(stack1,"current"))) && lookupProperty(stack1,"data"))) && lookupProperty(stack1,"assetid")),{"name":"ifCond","hash":{},"fn":container.program(4, data, 0),"inverse":container.noop,"data":data,"loc":{"start":{"line":15,"column":12},"end":{"line":18,"column":23}}})) != null ? stack1 : "")
    + ((stack1 = (lookupProperty(helpers,"inArray")||(depth0 && lookupProperty(depth0,"inArray"))||alias2).call(alias1,((stack1 = ((stack1 = (data && lookupProperty(data,"root"))) && lookupProperty(stack1,"current"))) && lookupProperty(stack1,"lineage")),"asset_assetid",(depth0 != null ? lookupProperty(depth0,"asset_assetid") : depth0),{"name":"inArray","hash":{},"fn":container.program(6, data, 0),"inverse":container.noop,"data":data,"loc":{"start":{"line":19,"column":12},"end":{"line":52,"column":24}}})) != null ? stack1 : "")
    + "             </li>\n";
},"2":function(container,depth0,helpers,partials,data) {
    var helper, alias1=depth0 != null ? depth0 : (container.nullContext || {}), alias2=container.hooks.helperMissing, alias3=container.escapeExpression, lookupProperty = container.lookupProperty || function(parent, propertyName) {
        if (Object.prototype.hasOwnProperty.call(parent, propertyName)) {
          return parent[propertyName];
        }
        return undefined
    };

  return "            <li>\n                <a class=\"qld__sidenav__link\" href=\""
    + alias3(((helper = (helper = lookupProperty(helpers,"asset_url") || (depth0 != null ? lookupProperty(depth0,"asset_url") : depth0)) != null ? helper : alias2),(typeof helper === "function" ? helper.call(alias1,{"name":"asset_url","hash":{},"data":data,"loc":{"start":{"line":13,"column":52},"end":{"line":13,"column":65}}}) : helper)))
    + "\">"
    + alias3((lookupProperty(helpers,"renderSpecialChar")||(depth0 && lookupProperty(depth0,"renderSpecialChar"))||alias2).call(alias1,(depth0 != null ? lookupProperty(depth0,"asset_short_name") : depth0),{"name":"renderSpecialChar","hash":{},"data":data,"loc":{"start":{"line":13,"column":67},"end":{"line":13,"column":105}}}))
    + "</a>\n";
},"4":function(container,depth0,helpers,partials,data) {
    var lookupProperty = container.lookupProperty || function(parent, propertyName) {
        if (Object.prototype.hasOwnProperty.call(parent, propertyName)) {
          return parent[propertyName];
        }
        return undefined
    };

  return "            <li class=\"active\" aria-current=\"page\">\n                <span>"
    + container.escapeExpression((lookupProperty(helpers,"renderSpecialChar")||(depth0 && lookupProperty(depth0,"renderSpecialChar"))||container.hooks.helperMissing).call(depth0 != null ? depth0 : (container.nullContext || {}),(depth0 != null ? lookupProperty(depth0,"asset_short_name") : depth0),{"name":"renderSpecialChar","hash":{},"data":data,"loc":{"start":{"line":17,"column":22},"end":{"line":17,"column":60}}}))
    + "</span>\n";
},"6":function(container,depth0,helpers,partials,data) {
    var stack1, lookupProperty = container.lookupProperty || function(parent, propertyName) {
        if (Object.prototype.hasOwnProperty.call(parent, propertyName)) {
          return parent[propertyName];
        }
        return undefined
    };

  return ((stack1 = lookupProperty(helpers,"if").call(depth0 != null ? depth0 : (container.nullContext || {}),(depth0 != null ? lookupProperty(depth0,"children") : depth0),{"name":"if","hash":{},"fn":container.program(7, data, 0),"inverse":container.noop,"data":data,"loc":{"start":{"line":20,"column":16},"end":{"line":51,"column":23}}})) != null ? stack1 : "");
},"7":function(container,depth0,helpers,partials,data) {
    var stack1, lookupProperty = container.lookupProperty || function(parent, propertyName) {
        if (Object.prototype.hasOwnProperty.call(parent, propertyName)) {
          return parent[propertyName];
        }
        return undefined
    };

  return "                    <ul class=\"qld__link-list\">\n"
    + ((stack1 = lookupProperty(helpers,"each").call(depth0 != null ? depth0 : (container.nullContext || {}),(depth0 != null ? lookupProperty(depth0,"children") : depth0),{"name":"each","hash":{},"fn":container.program(8, data, 0),"inverse":container.noop,"data":data,"loc":{"start":{"line":22,"column":20},"end":{"line":49,"column":29}}})) != null ? stack1 : "")
    + "                    </ul>  \n";
},"8":function(container,depth0,helpers,partials,data) {
    var stack1, alias1=depth0 != null ? depth0 : (container.nullContext || {}), alias2=container.hooks.helperMissing, lookupProperty = container.lookupProperty || function(parent, propertyName) {
        if (Object.prototype.hasOwnProperty.call(parent, propertyName)) {
          return parent[propertyName];
        }
        return undefined
    };

  return ((stack1 = (lookupProperty(helpers,"ifCond")||(depth0 && lookupProperty(depth0,"ifCond"))||alias2).call(alias1,(depth0 != null ? lookupProperty(depth0,"asset_assetid") : depth0),"!=",((stack1 = ((stack1 = ((stack1 = (data && lookupProperty(data,"root"))) && lookupProperty(stack1,"current"))) && lookupProperty(stack1,"data"))) && lookupProperty(stack1,"assetid")),{"name":"ifCond","hash":{},"fn":container.program(9, data, 0),"inverse":container.noop,"data":data,"loc":{"start":{"line":23,"column":24},"end":{"line":26,"column":35}}})) != null ? stack1 : "")
    + ((stack1 = (lookupProperty(helpers,"ifCond")||(depth0 && lookupProperty(depth0,"ifCond"))||alias2).call(alias1,(depth0 != null ? lookupProperty(depth0,"asset_assetid") : depth0),"==",((stack1 = ((stack1 = ((stack1 = (data && lookupProperty(data,"root"))) && lookupProperty(stack1,"current"))) && lookupProperty(stack1,"data"))) && lookupProperty(stack1,"assetid")),{"name":"ifCond","hash":{},"fn":container.program(11, data, 0),"inverse":container.noop,"data":data,"loc":{"start":{"line":27,"column":24},"end":{"line":30,"column":35}}})) != null ? stack1 : "")
    + ((stack1 = (lookupProperty(helpers,"inArray")||(depth0 && lookupProperty(depth0,"inArray"))||alias2).call(alias1,((stack1 = ((stack1 = (data && lookupProperty(data,"root"))) && lookupProperty(stack1,"current"))) && lookupProperty(stack1,"lineage")),"asset_assetid",(depth0 != null ? lookupProperty(depth0,"asset_assetid") : depth0),{"name":"inArray","hash":{},"fn":container.program(13, data, 0),"inverse":container.noop,"data":data,"loc":{"start":{"line":31,"column":24},"end":{"line":47,"column":36}}})) != null ? stack1 : "")
    + "                        </li>\n";
},"9":function(container,depth0,helpers,partials,data) {
    var helper, alias1=depth0 != null ? depth0 : (container.nullContext || {}), alias2=container.hooks.helperMissing, alias3=container.escapeExpression, lookupProperty = container.lookupProperty || function(parent, propertyName) {
        if (Object.prototype.hasOwnProperty.call(parent, propertyName)) {
          return parent[propertyName];
        }
        return undefined
    };

  return "                        <li>\n                            <a class=\"qld__sidenav__link\" href=\""
    + alias3(((helper = (helper = lookupProperty(helpers,"asset_url") || (depth0 != null ? lookupProperty(depth0,"asset_url") : depth0)) != null ? helper : alias2),(typeof helper === "function" ? helper.call(alias1,{"name":"asset_url","hash":{},"data":data,"loc":{"start":{"line":25,"column":64},"end":{"line":25,"column":77}}}) : helper)))
    + "\">"
    + alias3((lookupProperty(helpers,"renderSpecialChar")||(depth0 && lookupProperty(depth0,"renderSpecialChar"))||alias2).call(alias1,(depth0 != null ? lookupProperty(depth0,"asset_short_name") : depth0),{"name":"renderSpecialChar","hash":{},"data":data,"loc":{"start":{"line":25,"column":79},"end":{"line":25,"column":117}}}))
    + "</a>\n";
},"11":function(container,depth0,helpers,partials,data) {
    var lookupProperty = container.lookupProperty || function(parent, propertyName) {
        if (Object.prototype.hasOwnProperty.call(parent, propertyName)) {
          return parent[propertyName];
        }
        return undefined
    };

  return "                        <li class=\"active\" aria-current=\"page\">\n                            <span>"
    + container.escapeExpression((lookupProperty(helpers,"renderSpecialChar")||(depth0 && lookupProperty(depth0,"renderSpecialChar"))||container.hooks.helperMissing).call(depth0 != null ? depth0 : (container.nullContext || {}),(depth0 != null ? lookupProperty(depth0,"asset_short_name") : depth0),{"name":"renderSpecialChar","hash":{},"data":data,"loc":{"start":{"line":29,"column":34},"end":{"line":29,"column":72}}}))
    + "</span>\n";
},"13":function(container,depth0,helpers,partials,data) {
    var stack1, lookupProperty = container.lookupProperty || function(parent, propertyName) {
        if (Object.prototype.hasOwnProperty.call(parent, propertyName)) {
          return parent[propertyName];
        }
        return undefined
    };

  return ((stack1 = lookupProperty(helpers,"if").call(depth0 != null ? depth0 : (container.nullContext || {}),(depth0 != null ? lookupProperty(depth0,"children") : depth0),{"name":"if","hash":{},"fn":container.program(14, data, 0),"inverse":container.noop,"data":data,"loc":{"start":{"line":32,"column":28},"end":{"line":46,"column":35}}})) != null ? stack1 : "");
},"14":function(container,depth0,helpers,partials,data) {
    var stack1, lookupProperty = container.lookupProperty || function(parent, propertyName) {
        if (Object.prototype.hasOwnProperty.call(parent, propertyName)) {
          return parent[propertyName];
        }
        return undefined
    };

  return "                                <ul class=\"qld__link-list\">\n"
    + ((stack1 = lookupProperty(helpers,"each").call(depth0 != null ? depth0 : (container.nullContext || {}),(depth0 != null ? lookupProperty(depth0,"children") : depth0),{"name":"each","hash":{},"fn":container.program(15, data, 0),"inverse":container.noop,"data":data,"loc":{"start":{"line":34,"column":32},"end":{"line":44,"column":41}}})) != null ? stack1 : "")
    + "                                </ul>  \n";
},"15":function(container,depth0,helpers,partials,data) {
    var stack1, alias1=depth0 != null ? depth0 : (container.nullContext || {}), alias2=container.hooks.helperMissing, lookupProperty = container.lookupProperty || function(parent, propertyName) {
        if (Object.prototype.hasOwnProperty.call(parent, propertyName)) {
          return parent[propertyName];
        }
        return undefined
    };

  return ((stack1 = (lookupProperty(helpers,"ifCond")||(depth0 && lookupProperty(depth0,"ifCond"))||alias2).call(alias1,(depth0 != null ? lookupProperty(depth0,"asset_assetid") : depth0),"!=",((stack1 = ((stack1 = ((stack1 = (data && lookupProperty(data,"root"))) && lookupProperty(stack1,"current"))) && lookupProperty(stack1,"data"))) && lookupProperty(stack1,"assetid")),{"name":"ifCond","hash":{},"fn":container.program(16, data, 0),"inverse":container.noop,"data":data,"loc":{"start":{"line":35,"column":36},"end":{"line":38,"column":47}}})) != null ? stack1 : "")
    + ((stack1 = (lookupProperty(helpers,"ifCond")||(depth0 && lookupProperty(depth0,"ifCond"))||alias2).call(alias1,(depth0 != null ? lookupProperty(depth0,"asset_assetid") : depth0),"==",((stack1 = ((stack1 = ((stack1 = (data && lookupProperty(data,"root"))) && lookupProperty(stack1,"current"))) && lookupProperty(stack1,"data"))) && lookupProperty(stack1,"assetid")),{"name":"ifCond","hash":{},"fn":container.program(18, data, 0),"inverse":container.noop,"data":data,"loc":{"start":{"line":39,"column":36},"end":{"line":42,"column":47}}})) != null ? stack1 : "")
    + "                                    </li>    \n";
},"16":function(container,depth0,helpers,partials,data) {
    var helper, alias1=depth0 != null ? depth0 : (container.nullContext || {}), alias2=container.hooks.helperMissing, alias3=container.escapeExpression, lookupProperty = container.lookupProperty || function(parent, propertyName) {
        if (Object.prototype.hasOwnProperty.call(parent, propertyName)) {
          return parent[propertyName];
        }
        return undefined
    };

  return "                                    <li>\n                                        <a class=\"qld__sidenav__link\" href=\""
    + alias3(((helper = (helper = lookupProperty(helpers,"asset_url") || (depth0 != null ? lookupProperty(depth0,"asset_url") : depth0)) != null ? helper : alias2),(typeof helper === "function" ? helper.call(alias1,{"name":"asset_url","hash":{},"data":data,"loc":{"start":{"line":37,"column":76},"end":{"line":37,"column":89}}}) : helper)))
    + "\">"
    + alias3((lookupProperty(helpers,"renderSpecialChar")||(depth0 && lookupProperty(depth0,"renderSpecialChar"))||alias2).call(alias1,(depth0 != null ? lookupProperty(depth0,"asset_short_name") : depth0),{"name":"renderSpecialChar","hash":{},"data":data,"loc":{"start":{"line":37,"column":91},"end":{"line":37,"column":129}}}))
    + "</a>\n";
},"18":function(container,depth0,helpers,partials,data) {
    var lookupProperty = container.lookupProperty || function(parent, propertyName) {
        if (Object.prototype.hasOwnProperty.call(parent, propertyName)) {
          return parent[propertyName];
        }
        return undefined
    };

  return "                                    <li class=\"active\" aria-current=\"page\">\n                                        <span>"
    + container.escapeExpression((lookupProperty(helpers,"renderSpecialChar")||(depth0 && lookupProperty(depth0,"renderSpecialChar"))||container.hooks.helperMissing).call(depth0 != null ? depth0 : (container.nullContext || {}),(depth0 != null ? lookupProperty(depth0,"asset_short_name") : depth0),{"name":"renderSpecialChar","hash":{},"data":data,"loc":{"start":{"line":41,"column":46},"end":{"line":41,"column":84}}}))
    + "</span>\n";
},"compiler":[8,">= 4.3.0"],"main":function(container,depth0,helpers,partials,data) {
    var stack1, alias1=container.lambda, alias2=container.escapeExpression, lookupProperty = container.lookupProperty || function(parent, propertyName) {
        if (Object.prototype.hasOwnProperty.call(parent, propertyName)) {
          return parent[propertyName];
        }
        return undefined
    };

  return "<div class=\"qld__side-nav qld__accordion\">\n    <button class=\"qld__side-nav__toggle qld__accordion__title qld__accordion--closed\" aria-controls=\"nav-default\" aria-expanded=\"false\" aria-selected=\"false\" >\n    In "
    + alias2(alias1(((stack1 = ((stack1 = (depth0 != null ? lookupProperty(depth0,"current") : depth0)) != null ? lookupProperty(stack1,"top") : stack1)) != null ? lookupProperty(stack1,"asset_name") : stack1), depth0))
    + "\n    </button>\n    <nav aria-label=\"side navigation\" id=\"nav-default\" class=\"qld__side-nav__content qld__accordion--closed qld__accordion__body\"> \n        <h2 class=\"qld__sidenav__title\">\n            <a class=\"qld__sidenav__link\" href=\""
    + alias2(alias1(((stack1 = ((stack1 = (depth0 != null ? lookupProperty(depth0,"current") : depth0)) != null ? lookupProperty(stack1,"top") : stack1)) != null ? lookupProperty(stack1,"asset_url") : stack1), depth0))
    + "\">"
    + alias2(alias1(((stack1 = ((stack1 = (depth0 != null ? lookupProperty(depth0,"current") : depth0)) != null ? lookupProperty(stack1,"top") : stack1)) != null ? lookupProperty(stack1,"asset_name") : stack1), depth0))
    + "</a>\n        </h2>\n        <ul class=\"qld__link-list\">\n"
    + ((stack1 = lookupProperty(helpers,"each").call(depth0 != null ? depth0 : (container.nullContext || {}),((stack1 = (depth0 != null ? lookupProperty(depth0,"current") : depth0)) != null ? lookupProperty(stack1,"children") : stack1),{"name":"each","hash":{},"fn":container.program(1, data, 0),"inverse":container.noop,"data":data,"loc":{"start":{"line":10,"column":8},"end":{"line":54,"column":17}}})) != null ? stack1 : "")
    + "        </ul>\n    </nav>\n</div>";
},"useData":true}