{"1":function(container,depth0,helpers,partials,data) {
    var stack1, helper, alias1=depth0 != null ? depth0 : (container.nullContext || {}), lookupProperty = container.lookupProperty || function(parent, propertyName) {
        if (Object.prototype.hasOwnProperty.call(parent, propertyName)) {
          return parent[propertyName];
        }
        return undefined
    };

  return "            <li>\r\n                <a class=\"qld__left-nav__item-link\" href=\"./?a="
    + container.escapeExpression(container.lambda(((stack1 = ((stack1 = (depth0 != null ? lookupProperty(depth0,"site") : depth0)) != null ? lookupProperty(stack1,"data") : stack1)) != null ? lookupProperty(stack1,"assetid") : stack1), depth0))
    + "\">\r\n"
    + ((stack1 = lookupProperty(helpers,"if").call(alias1,((stack1 = ((stack1 = ((stack1 = (depth0 != null ? lookupProperty(depth0,"site") : depth0)) != null ? lookupProperty(stack1,"metadata") : stack1)) != null ? lookupProperty(stack1,"mainNavHomeIconShow") : stack1)) != null ? lookupProperty(stack1,"value") : stack1),{"name":"if","hash":{},"fn":container.program(2, data, 0),"inverse":container.noop,"data":data,"loc":{"start":{"line":7,"column":20},"end":{"line":11,"column":27}}})) != null ? stack1 : "")
    + "                    <span class=\"qld__left-nav__item-text\" data-name=\""
    + ((stack1 = ((helper = (helper = lookupProperty(helpers,"asset_short_name") || (depth0 != null ? lookupProperty(depth0,"asset_short_name") : depth0)) != null ? helper : container.hooks.helperMissing),(typeof helper === "function" ? helper.call(alias1,{"name":"asset_short_name","hash":{},"data":data,"loc":{"start":{"line":12,"column":70},"end":{"line":12,"column":92}}}) : helper))) != null ? stack1 : "")
    + "\">Home</span>\r\n                </a>\r\n            </li>\r\n";
},"2":function(container,depth0,helpers,partials,data) {
    return "                    <span class=\"qld__left-nav__item-icon\">\r\n                        <svg aria-hidden=\"true\" xmlns=\"http://www.w3.org/2000/svg\" viewBox=\"0 0 576 512\" height=\"32\" width=\"32\"><path fill=\"currentColor\" d=\"M277.4 4.002C283.5-1.334 292.5-1.334 298.6 4.002L384 79.37V56C384 42.75 394.7 31.1 408 31.1H488C501.3 31.1 512 42.75 512 56V192.3L570.6 244C577.2 249.8 577.8 259.1 571.1 266.6C566.2 273.2 556 273.8 549.4 267.1L512 234.1V432C512 476.2 476.2 512 432 512H144C99.82 512 64 476.2 64 432V234.1L26.59 267.1C19.96 273.8 9.849 273.2 4.003 266.6C-1.844 259.1-1.212 249.8 5.414 244L277.4 4.002zM480 164.1V64H416V107.6L480 164.1zM96 206.7V432C96 458.5 117.5 480 144 480H208V320C208 302.3 222.3 288 240 288H336C353.7 288 368 302.3 368 320V480H432C458.5 480 480 458.5 480 432V206.7L288 37.34L96 206.7zM240 320V480H336V320H240z\"/></svg> \r\n                    </span>\r\n";
},"4":function(container,depth0,helpers,partials,data) {
    var stack1, helper, alias1=depth0 != null ? depth0 : (container.nullContext || {}), lookupProperty = container.lookupProperty || function(parent, propertyName) {
        if (Object.prototype.hasOwnProperty.call(parent, propertyName)) {
          return parent[propertyName];
        }
        return undefined
    };

  return "            <li class=\"active\" aria-current=\"page\">\r\n                <span class=\"qld__left-nav__item-link\">\r\n"
    + ((stack1 = lookupProperty(helpers,"if").call(alias1,((stack1 = ((stack1 = ((stack1 = (depth0 != null ? lookupProperty(depth0,"site") : depth0)) != null ? lookupProperty(stack1,"metadata") : stack1)) != null ? lookupProperty(stack1,"mainNavHomeIconShow") : stack1)) != null ? lookupProperty(stack1,"value") : stack1),{"name":"if","hash":{},"fn":container.program(5, data, 0),"inverse":container.noop,"data":data,"loc":{"start":{"line":18,"column":20},"end":{"line":22,"column":27}}})) != null ? stack1 : "")
    + "                    <span class=\"qld__left-nav__item-text\" data-name=\""
    + ((stack1 = ((helper = (helper = lookupProperty(helpers,"asset_short_name") || (depth0 != null ? lookupProperty(depth0,"asset_short_name") : depth0)) != null ? helper : container.hooks.helperMissing),(typeof helper === "function" ? helper.call(alias1,{"name":"asset_short_name","hash":{},"data":data,"loc":{"start":{"line":23,"column":70},"end":{"line":23,"column":92}}}) : helper))) != null ? stack1 : "")
    + "\">Home</span>\r\n                </span>\r\n            </li>\r\n";
},"5":function(container,depth0,helpers,partials,data) {
    return "                        <span class=\"qld__left-nav__item-icon\">\r\n                            <svg aria-hidden=\"true\" xmlns=\"http://www.w3.org/2000/svg\" viewBox=\"0 0 576 512\" height=\"32\" width=\"32\"><path fill=\"currentColor\" d=\"M277.4 4.002C283.5-1.334 292.5-1.334 298.6 4.002L384 79.37V56C384 42.75 394.7 31.1 408 31.1H488C501.3 31.1 512 42.75 512 56V192.3L570.6 244C577.2 249.8 577.8 259.1 571.1 266.6C566.2 273.2 556 273.8 549.4 267.1L512 234.1V432C512 476.2 476.2 512 432 512H144C99.82 512 64 476.2 64 432V234.1L26.59 267.1C19.96 273.8 9.849 273.2 4.003 266.6C-1.844 259.1-1.212 249.8 5.414 244L277.4 4.002zM480 164.1V64H416V107.6L480 164.1zM96 206.7V432C96 458.5 117.5 480 144 480H208V320C208 302.3 222.3 288 240 288H336C353.7 288 368 302.3 368 320V480H432C458.5 480 480 458.5 480 432V206.7L288 37.34L96 206.7zM240 320V480H336V320H240z\"/></svg> \r\n                        </span>\r\n";
},"7":function(container,depth0,helpers,partials,data,blockParams,depths) {
    var stack1, alias1=depth0 != null ? depth0 : (container.nullContext || {}), alias2=container.hooks.helperMissing, lookupProperty = container.lookupProperty || function(parent, propertyName) {
        if (Object.prototype.hasOwnProperty.call(parent, propertyName)) {
          return parent[propertyName];
        }
        return undefined
    };

  return ((stack1 = (lookupProperty(helpers,"ifCond")||(depth0 && lookupProperty(depth0,"ifCond"))||alias2).call(alias1,(depth0 != null ? lookupProperty(depth0,"asset_assetid") : depth0),"!=",((stack1 = ((stack1 = ((stack1 = (data && lookupProperty(data,"root"))) && lookupProperty(stack1,"current"))) && lookupProperty(stack1,"data"))) && lookupProperty(stack1,"assetid")),{"name":"ifCond","hash":{},"fn":container.program(8, data, 0, blockParams, depths),"inverse":container.program(13, data, 0, blockParams, depths),"data":data,"loc":{"start":{"line":28,"column":16},"end":{"line":43,"column":27}}})) != null ? stack1 : "")
    + ((stack1 = (lookupProperty(helpers,"ifCond")||(depth0 && lookupProperty(depth0,"ifCond"))||alias2).call(alias1,((stack1 = ((stack1 = ((stack1 = (depths[1] != null ? lookupProperty(depths[1],"site") : depths[1])) != null ? lookupProperty(stack1,"metadata") : stack1)) != null ? lookupProperty(stack1,"mainNavMegaMenuShow") : stack1)) != null ? lookupProperty(stack1,"value") : stack1),"==","true",{"name":"ifCond","hash":{},"fn":container.program(15, data, 0, blockParams, depths),"inverse":container.noop,"data":data,"loc":{"start":{"line":44,"column":16},"end":{"line":80,"column":27}}})) != null ? stack1 : "")
    + "                </li>\r\n";
},"8":function(container,depth0,helpers,partials,data) {
    var stack1, helper, alias1=depth0 != null ? depth0 : (container.nullContext || {}), alias2=container.hooks.helperMissing, alias3="function", lookupProperty = container.lookupProperty || function(parent, propertyName) {
        if (Object.prototype.hasOwnProperty.call(parent, propertyName)) {
          return parent[propertyName];
        }
        return undefined
    };

  return "                <li>\r\n"
    + ((stack1 = (lookupProperty(helpers,"inArray")||(depth0 && lookupProperty(depth0,"inArray"))||alias2).call(alias1,((stack1 = ((stack1 = (data && lookupProperty(data,"root"))) && lookupProperty(stack1,"current"))) && lookupProperty(stack1,"lineage")),"asset_assetid",(depth0 != null ? lookupProperty(depth0,"asset_assetid") : depth0),{"name":"inArray","hash":{},"fn":container.program(9, data, 0),"inverse":container.program(11, data, 0),"data":data,"loc":{"start":{"line":30,"column":20},"end":{"line":34,"column":32}}})) != null ? stack1 : "")
    + "                        <span class=\"qld__left-nav__item-text\" data-name=\""
    + ((stack1 = ((helper = (helper = lookupProperty(helpers,"asset_short_name") || (depth0 != null ? lookupProperty(depth0,"asset_short_name") : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"asset_short_name","hash":{},"data":data,"loc":{"start":{"line":35,"column":74},"end":{"line":35,"column":96}}}) : helper))) != null ? stack1 : "")
    + "\">"
    + ((stack1 = ((helper = (helper = lookupProperty(helpers,"asset_short_name") || (depth0 != null ? lookupProperty(depth0,"asset_short_name") : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"asset_short_name","hash":{},"data":data,"loc":{"start":{"line":35,"column":98},"end":{"line":35,"column":120}}}) : helper))) != null ? stack1 : "")
    + "\r\n                        </span>\r\n                    </a> \r\n";
},"9":function(container,depth0,helpers,partials,data) {
    var helper, lookupProperty = container.lookupProperty || function(parent, propertyName) {
        if (Object.prototype.hasOwnProperty.call(parent, propertyName)) {
          return parent[propertyName];
        }
        return undefined
    };

  return "                    <a class=\"qld__left-nav__item-link qld__left-nav__item-link--open\" href=\""
    + container.escapeExpression(((helper = (helper = lookupProperty(helpers,"asset_url") || (depth0 != null ? lookupProperty(depth0,"asset_url") : depth0)) != null ? helper : container.hooks.helperMissing),(typeof helper === "function" ? helper.call(depth0 != null ? depth0 : (container.nullContext || {}),{"name":"asset_url","hash":{},"data":data,"loc":{"start":{"line":31,"column":93},"end":{"line":31,"column":106}}}) : helper)))
    + "\">\r\n";
},"11":function(container,depth0,helpers,partials,data) {
    var helper, lookupProperty = container.lookupProperty || function(parent, propertyName) {
        if (Object.prototype.hasOwnProperty.call(parent, propertyName)) {
          return parent[propertyName];
        }
        return undefined
    };

  return "                    <a class=\"qld__left-nav__item-link\" href=\""
    + container.escapeExpression(((helper = (helper = lookupProperty(helpers,"asset_url") || (depth0 != null ? lookupProperty(depth0,"asset_url") : depth0)) != null ? helper : container.hooks.helperMissing),(typeof helper === "function" ? helper.call(depth0 != null ? depth0 : (container.nullContext || {}),{"name":"asset_url","hash":{},"data":data,"loc":{"start":{"line":33,"column":62},"end":{"line":33,"column":75}}}) : helper)))
    + "\">\r\n";
},"13":function(container,depth0,helpers,partials,data) {
    var stack1, helper, lookupProperty = container.lookupProperty || function(parent, propertyName) {
        if (Object.prototype.hasOwnProperty.call(parent, propertyName)) {
          return parent[propertyName];
        }
        return undefined
    };

  return "                <li class=\"active\" aria-current=\"page\">\r\n                    <span class=\"qld__left-nav__item-link\">\r\n                        <span class=\"qld__left-nav__item-text\">"
    + ((stack1 = ((helper = (helper = lookupProperty(helpers,"asset_short_name") || (depth0 != null ? lookupProperty(depth0,"asset_short_name") : depth0)) != null ? helper : container.hooks.helperMissing),(typeof helper === "function" ? helper.call(depth0 != null ? depth0 : (container.nullContext || {}),{"name":"asset_short_name","hash":{},"data":data,"loc":{"start":{"line":41,"column":63},"end":{"line":41,"column":85}}}) : helper))) != null ? stack1 : "")
    + "</span>\r\n                    </span>\r\n";
},"15":function(container,depth0,helpers,partials,data,blockParams,depths) {
    var stack1, lookupProperty = container.lookupProperty || function(parent, propertyName) {
        if (Object.prototype.hasOwnProperty.call(parent, propertyName)) {
          return parent[propertyName];
        }
        return undefined
    };

  return ((stack1 = (lookupProperty(helpers,"arrayWith")||(depth0 && lookupProperty(depth0,"arrayWith"))||container.hooks.helperMissing).call(depth0 != null ? depth0 : (container.nullContext || {}),(depth0 != null ? lookupProperty(depth0,"children") : depth0),"asset_metadata_showInMegaNav","true",{"name":"arrayWith","hash":{},"fn":container.program(16, data, 0, blockParams, depths),"inverse":container.noop,"data":data,"loc":{"start":{"line":45,"column":20},"end":{"line":79,"column":34}}})) != null ? stack1 : "");
},"16":function(container,depth0,helpers,partials,data,blockParams,depths) {
    var stack1, lookupProperty = container.lookupProperty || function(parent, propertyName) {
        if (Object.prototype.hasOwnProperty.call(parent, propertyName)) {
          return parent[propertyName];
        }
        return undefined
    };

  return ((stack1 = lookupProperty(helpers,"if").call(depth0 != null ? depth0 : (container.nullContext || {}),depth0,{"name":"if","hash":{},"fn":container.program(17, data, 0, blockParams, depths),"inverse":container.noop,"data":data,"loc":{"start":{"line":46,"column":24},"end":{"line":78,"column":31}}})) != null ? stack1 : "");
},"17":function(container,depth0,helpers,partials,data,blockParams,depths) {
    var stack1, alias1=depth0 != null ? depth0 : (container.nullContext || {}), lookupProperty = container.lookupProperty || function(parent, propertyName) {
        if (Object.prototype.hasOwnProperty.call(parent, propertyName)) {
          return parent[propertyName];
        }
        return undefined
    };

  return ((stack1 = (lookupProperty(helpers,"inArray")||(depth0 && lookupProperty(depth0,"inArray"))||container.hooks.helperMissing).call(alias1,((stack1 = ((stack1 = (data && lookupProperty(data,"root"))) && lookupProperty(stack1,"current"))) && lookupProperty(stack1,"lineage")),"asset_assetid",(depths[1] != null ? lookupProperty(depths[1],"asset_assetid") : depths[1]),{"name":"inArray","hash":{},"fn":container.program(18, data, 0, blockParams, depths),"inverse":container.program(20, data, 0, blockParams, depths),"data":data,"loc":{"start":{"line":47,"column":28},"end":{"line":57,"column":40}}})) != null ? stack1 : "")
    + ((stack1 = lookupProperty(helpers,"each").call(alias1,depth0,{"name":"each","hash":{},"fn":container.program(22, data, 0, blockParams, depths),"inverse":container.noop,"data":data,"loc":{"start":{"line":58,"column":28},"end":{"line":76,"column":37}}})) != null ? stack1 : "")
    + "                            </ul>  \r\n";
},"18":function(container,depth0,helpers,partials,data,blockParams,depths) {
    var stack1, alias1=container.lambda, alias2=container.escapeExpression, lookupProperty = container.lookupProperty || function(parent, propertyName) {
        if (Object.prototype.hasOwnProperty.call(parent, propertyName)) {
          return parent[propertyName];
        }
        return undefined
    };

  return "                                <button class=\"qld__left-nav__item-toggle qld__accordion--open\" aria-controls=\"internal-nav-"
    + alias2(alias1((depths[1] != null ? lookupProperty(depths[1],"asset_assetid") : depths[1]), depth0))
    + "\" aria-expanded=\"true\" aria-selected=\"true\" aria-label=\"Toggle navigation, "
    + ((stack1 = alias1((depths[1] != null ? lookupProperty(depths[1],"asset_short_name") : depths[1]), depth0)) != null ? stack1 : "")
    + "\">\r\n                                    <svg class=\"accordion-svg\" aria-hidden=\"true\" xmlns=\"http://www.w3.org/2000/svg\"><use href=\""
    + alias2(alias1(((stack1 = ((stack1 = ((stack1 = ((stack1 = (data && lookupProperty(data,"root"))) && lookupProperty(stack1,"site"))) && lookupProperty(stack1,"metadata"))) && lookupProperty(stack1,"coreSiteIcons"))) && lookupProperty(stack1,"value")), depth0))
    + "#chevron-up\"></use></svg>\r\n                                </button>\r\n                                <ul id=\"internal-nav-"
    + alias2(alias1((depths[1] != null ? lookupProperty(depths[1],"asset_assetid") : depths[1]), depth0))
    + "\" class=\"qld__link-list qld__accordion--open qld__accordion__body\">\r\n";
},"20":function(container,depth0,helpers,partials,data,blockParams,depths) {
    var stack1, alias1=container.lambda, alias2=container.escapeExpression, lookupProperty = container.lookupProperty || function(parent, propertyName) {
        if (Object.prototype.hasOwnProperty.call(parent, propertyName)) {
          return parent[propertyName];
        }
        return undefined
    };

  return "                                <button class=\"qld__left-nav__item-toggle qld__accordion--closed\" aria-controls=\"internal-nav-"
    + alias2(alias1((depths[1] != null ? lookupProperty(depths[1],"asset_assetid") : depths[1]), depth0))
    + "\" aria-expanded=\"false\" aria-selected=\"false\" aria-label=\"Toggle navigation, "
    + ((stack1 = alias1((depths[1] != null ? lookupProperty(depths[1],"asset_short_name") : depths[1]), depth0)) != null ? stack1 : "")
    + "\">\r\n                                    <svg class=\"accordion-svg\" aria-hidden=\"true\" xmlns=\"http://www.w3.org/2000/svg\"><use href=\""
    + alias2(alias1(((stack1 = ((stack1 = ((stack1 = ((stack1 = (data && lookupProperty(data,"root"))) && lookupProperty(stack1,"site"))) && lookupProperty(stack1,"metadata"))) && lookupProperty(stack1,"coreSiteIcons"))) && lookupProperty(stack1,"value")), depth0))
    + "#chevron-up\"></use></svg>\r\n                                </button>\r\n                                <ul id=\"internal-nav-"
    + alias2(alias1((depths[1] != null ? lookupProperty(depths[1],"asset_assetid") : depths[1]), depth0))
    + "\" class=\"qld__link-list qld__accordion--closed qld__accordion__body\">\r\n";
},"22":function(container,depth0,helpers,partials,data) {
    var stack1, alias1=depth0 != null ? depth0 : (container.nullContext || {}), alias2=container.hooks.helperMissing, lookupProperty = container.lookupProperty || function(parent, propertyName) {
        if (Object.prototype.hasOwnProperty.call(parent, propertyName)) {
          return parent[propertyName];
        }
        return undefined
    };

  return ((stack1 = (lookupProperty(helpers,"ifCond")||(depth0 && lookupProperty(depth0,"ifCond"))||alias2).call(alias1,(depth0 != null ? lookupProperty(depth0,"asset_assetid") : depth0),"!=",((stack1 = ((stack1 = ((stack1 = (data && lookupProperty(data,"root"))) && lookupProperty(stack1,"current"))) && lookupProperty(stack1,"data"))) && lookupProperty(stack1,"assetid")),{"name":"ifCond","hash":{},"fn":container.program(23, data, 0),"inverse":container.noop,"data":data,"loc":{"start":{"line":59,"column":32},"end":{"line":66,"column":43}}})) != null ? stack1 : "")
    + ((stack1 = (lookupProperty(helpers,"ifCond")||(depth0 && lookupProperty(depth0,"ifCond"))||alias2).call(alias1,(depth0 != null ? lookupProperty(depth0,"asset_assetid") : depth0),"==",((stack1 = ((stack1 = ((stack1 = (data && lookupProperty(data,"root"))) && lookupProperty(stack1,"current"))) && lookupProperty(stack1,"data"))) && lookupProperty(stack1,"assetid")),{"name":"ifCond","hash":{},"fn":container.program(25, data, 0),"inverse":container.noop,"data":data,"loc":{"start":{"line":67,"column":32},"end":{"line":74,"column":43}}})) != null ? stack1 : "")
    + "                                </li>\r\n";
},"23":function(container,depth0,helpers,partials,data) {
    var stack1, helper, alias1=depth0 != null ? depth0 : (container.nullContext || {}), alias2=container.hooks.helperMissing, alias3="function", lookupProperty = container.lookupProperty || function(parent, propertyName) {
        if (Object.prototype.hasOwnProperty.call(parent, propertyName)) {
          return parent[propertyName];
        }
        return undefined
    };

  return "                                <li>\r\n                                    <a class=\"qld__left-nav__item-link\" href=\""
    + container.escapeExpression(((helper = (helper = lookupProperty(helpers,"asset_url") || (depth0 != null ? lookupProperty(depth0,"asset_url") : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"asset_url","hash":{},"data":data,"loc":{"start":{"line":61,"column":78},"end":{"line":61,"column":91}}}) : helper)))
    + "\">\r\n                                        <span class=\"qld__left-nav__item-text\">\r\n                                            "
    + ((stack1 = ((helper = (helper = lookupProperty(helpers,"asset_short_name") || (depth0 != null ? lookupProperty(depth0,"asset_short_name") : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"asset_short_name","hash":{},"data":data,"loc":{"start":{"line":63,"column":44},"end":{"line":63,"column":66}}}) : helper))) != null ? stack1 : "")
    + "\r\n                                        </span>\r\n                                    </a>\r\n";
},"25":function(container,depth0,helpers,partials,data) {
    var stack1, helper, lookupProperty = container.lookupProperty || function(parent, propertyName) {
        if (Object.prototype.hasOwnProperty.call(parent, propertyName)) {
          return parent[propertyName];
        }
        return undefined
    };

  return "                                <li class=\"active\" aria-current=\"page\">\r\n                                    <span class=\"qld__left-nav__item-link\">\r\n                                        <span class=\"qld__left-nav__item-text\">\r\n                                            "
    + ((stack1 = ((helper = (helper = lookupProperty(helpers,"asset_short_name") || (depth0 != null ? lookupProperty(depth0,"asset_short_name") : depth0)) != null ? helper : container.hooks.helperMissing),(typeof helper === "function" ? helper.call(depth0 != null ? depth0 : (container.nullContext || {}),{"name":"asset_short_name","hash":{},"data":data,"loc":{"start":{"line":71,"column":44},"end":{"line":71,"column":66}}}) : helper))) != null ? stack1 : "")
    + "\r\n                                        </span>\r\n                                    </span>\r\n";
},"compiler":[8,">= 4.3.0"],"main":function(container,depth0,helpers,partials,data,blockParams,depths) {
    var stack1, alias1=depth0 != null ? depth0 : (container.nullContext || {}), lookupProperty = container.lookupProperty || function(parent, propertyName) {
        if (Object.prototype.hasOwnProperty.call(parent, propertyName)) {
          return parent[propertyName];
        }
        return undefined
    };

  return "<div class=\"qld__left-nav "
    + container.escapeExpression(container.lambda(((stack1 = ((stack1 = ((stack1 = (depth0 != null ? lookupProperty(depth0,"site") : depth0)) != null ? lookupProperty(stack1,"metadata") : stack1)) != null ? lookupProperty(stack1,"mainNavStyle") : stack1)) != null ? lookupProperty(stack1,"value") : stack1), depth0))
    + "\">\r\n    <nav aria-label=\"left navigation\" id=\"left-nav\" class=\"qld__left-nav__content\"> \r\n        <ul class=\"qld__link-list\">\r\n"
    + ((stack1 = (lookupProperty(helpers,"ifCond")||(depth0 && lookupProperty(depth0,"ifCond"))||container.hooks.helperMissing).call(alias1,((stack1 = ((stack1 = (depth0 != null ? lookupProperty(depth0,"site") : depth0)) != null ? lookupProperty(stack1,"data") : stack1)) != null ? lookupProperty(stack1,"assetid") : stack1),"!=",((stack1 = ((stack1 = ((stack1 = (data && lookupProperty(data,"root"))) && lookupProperty(stack1,"current"))) && lookupProperty(stack1,"data"))) && lookupProperty(stack1,"assetid")),{"name":"ifCond","hash":{},"fn":container.program(1, data, 0, blockParams, depths),"inverse":container.program(4, data, 0, blockParams, depths),"data":data,"loc":{"start":{"line":4,"column":12},"end":{"line":26,"column":23}}})) != null ? stack1 : "")
    + ((stack1 = lookupProperty(helpers,"each").call(alias1,((stack1 = (depth0 != null ? lookupProperty(depth0,"site") : depth0)) != null ? lookupProperty(stack1,"children") : stack1),{"name":"each","hash":{},"fn":container.program(7, data, 0, blockParams, depths),"inverse":container.noop,"data":data,"loc":{"start":{"line":27,"column":12},"end":{"line":82,"column":21}}})) != null ? stack1 : "")
    + "        </ul>\r\n    </nav>\r\n</div>";
},"useData":true,"useDepths":true}