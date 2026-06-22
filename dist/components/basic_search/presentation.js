{"1":function(container,depth0,helpers,partials,data) {
    return "      qld__banner--light\n";
},"3":function(container,depth0,helpers,partials,data) {
    return "      qld__banner--alt\n";
},"5":function(container,depth0,helpers,partials,data) {
    return "      qld__banner--dark\n";
},"7":function(container,depth0,helpers,partials,data) {
    return "      qld__banner--dark-alt\n";
},"9":function(container,depth0,helpers,partials,data) {
    return "      qld__banner--breadcrumbs\n";
},"11":function(container,depth0,helpers,partials,data) {
    var stack1, lookupProperty = container.lookupProperty || function(parent, propertyName) {
        if (Object.prototype.hasOwnProperty.call(parent, propertyName)) {
          return parent[propertyName];
        }
        return undefined
    };

  return "    style=\"background-image: url(./?a="
    + container.escapeExpression(container.lambda(((stack1 = ((stack1 = ((stack1 = (depth0 != null ? lookupProperty(depth0,"site") : depth0)) != null ? lookupProperty(stack1,"metadata") : stack1)) != null ? lookupProperty(stack1,"defaultBannerTexture") : stack1)) != null ? lookupProperty(stack1,"value") : stack1), depth0))
    + ");\"\n";
},"13":function(container,depth0,helpers,partials,data) {
    var stack1, alias1=depth0 != null ? depth0 : (container.nullContext || {}), alias2=container.hooks.helperMissing, lookupProperty = container.lookupProperty || function(parent, propertyName) {
        if (Object.prototype.hasOwnProperty.call(parent, propertyName)) {
          return parent[propertyName];
        }
        return undefined
    };

  return "    <nav\n      class=\"\n        qld__breadcrumbs\n"
    + ((stack1 = (lookupProperty(helpers,"ifCond")||(depth0 && lookupProperty(depth0,"ifCond"))||alias2).call(alias1,((stack1 = ((stack1 = ((stack1 = (depth0 != null ? lookupProperty(depth0,"site") : depth0)) != null ? lookupProperty(stack1,"metadata") : stack1)) != null ? lookupProperty(stack1,"defaultBannerColour") : stack1)) != null ? lookupProperty(stack1,"value") : stack1),"==","light",{"name":"ifCond","hash":{},"fn":container.program(14, data, 0),"inverse":container.noop,"data":data,"loc":{"start":{"line":31,"column":8},"end":{"line":33,"column":19}}})) != null ? stack1 : "")
    + ((stack1 = (lookupProperty(helpers,"ifCond")||(depth0 && lookupProperty(depth0,"ifCond"))||alias2).call(alias1,((stack1 = ((stack1 = ((stack1 = (depth0 != null ? lookupProperty(depth0,"site") : depth0)) != null ? lookupProperty(stack1,"metadata") : stack1)) != null ? lookupProperty(stack1,"defaultBannerColour") : stack1)) != null ? lookupProperty(stack1,"value") : stack1),"==","alternate",{"name":"ifCond","hash":{},"fn":container.program(16, data, 0),"inverse":container.noop,"data":data,"loc":{"start":{"line":34,"column":8},"end":{"line":36,"column":19}}})) != null ? stack1 : "")
    + ((stack1 = (lookupProperty(helpers,"ifCond")||(depth0 && lookupProperty(depth0,"ifCond"))||alias2).call(alias1,((stack1 = ((stack1 = ((stack1 = (depth0 != null ? lookupProperty(depth0,"site") : depth0)) != null ? lookupProperty(stack1,"metadata") : stack1)) != null ? lookupProperty(stack1,"defaultBannerColour") : stack1)) != null ? lookupProperty(stack1,"value") : stack1),"==","dark",{"name":"ifCond","hash":{},"fn":container.program(18, data, 0),"inverse":container.noop,"data":data,"loc":{"start":{"line":37,"column":8},"end":{"line":39,"column":19}}})) != null ? stack1 : "")
    + ((stack1 = (lookupProperty(helpers,"ifCond")||(depth0 && lookupProperty(depth0,"ifCond"))||alias2).call(alias1,((stack1 = ((stack1 = ((stack1 = (depth0 != null ? lookupProperty(depth0,"site") : depth0)) != null ? lookupProperty(stack1,"metadata") : stack1)) != null ? lookupProperty(stack1,"defaultBannerColour") : stack1)) != null ? lookupProperty(stack1,"value") : stack1),"==","dark-alternate",{"name":"ifCond","hash":{},"fn":container.program(20, data, 0),"inverse":container.noop,"data":data,"loc":{"start":{"line":40,"column":8},"end":{"line":42,"column":19}}})) != null ? stack1 : "")
    + "        qld__banner__breadcrumbs\n        qld__banner__breadcrumbs--mobile\n      \"\n      aria-label=\"breadcrumb\"\n    >\n      <div class=\"qld__link-list qld__link-list--inline\">\n"
    + ((stack1 = lookupProperty(helpers,"with").call(alias1,(lookupProperty(helpers,"itemAt")||(depth0 && lookupProperty(depth0,"itemAt"))||alias2).call(alias1,((stack1 = (depth0 != null ? lookupProperty(depth0,"current") : depth0)) != null ? lookupProperty(stack1,"lineage") : stack1),-2,{"name":"itemAt","hash":{},"data":data,"loc":{"start":{"line":49,"column":16},"end":{"line":49,"column":43}}}),{"name":"with","hash":{},"fn":container.program(22, data, 0),"inverse":container.noop,"data":data,"loc":{"start":{"line":49,"column":8},"end":{"line":66,"column":17}}})) != null ? stack1 : "")
    + "      </div>\n    </nav>\n";
},"14":function(container,depth0,helpers,partials,data) {
    return "          qld__breadcrumbs--light\n";
},"16":function(container,depth0,helpers,partials,data) {
    return "          qld__breadcrumbs--alt\n";
},"18":function(container,depth0,helpers,partials,data) {
    return "          qld__breadcrumbs--dark\n";
},"20":function(container,depth0,helpers,partials,data) {
    return "          qld__breadcrumbs--dark-alt\n";
},"22":function(container,depth0,helpers,partials,data) {
    var stack1, lookupProperty = container.lookupProperty || function(parent, propertyName) {
        if (Object.prototype.hasOwnProperty.call(parent, propertyName)) {
          return parent[propertyName];
        }
        return undefined
    };

  return ((stack1 = (lookupProperty(helpers,"ifCond")||(depth0 && lookupProperty(depth0,"ifCond"))||container.hooks.helperMissing).call(depth0 != null ? depth0 : (container.nullContext || {}),(depth0 != null ? lookupProperty(depth0,"asset_type_code") : depth0),"!=","folder",{"name":"ifCond","hash":{},"fn":container.program(23, data, 0),"inverse":container.noop,"data":data,"loc":{"start":{"line":50,"column":10},"end":{"line":65,"column":21}}})) != null ? stack1 : "");
},"23":function(container,depth0,helpers,partials,data) {
    var stack1, helper, alias1=container.escapeExpression, alias2=depth0 != null ? depth0 : (container.nullContext || {}), alias3=container.hooks.helperMissing, lookupProperty = container.lookupProperty || function(parent, propertyName) {
        if (Object.prototype.hasOwnProperty.call(parent, propertyName)) {
          return parent[propertyName];
        }
        return undefined
    };

  return "            <div class=\"qld__breadcrumbs__item\">\n              <svg class=\"qld__icon\" xmlns=\"http://www.w3.org/2000/svg\">\n                <use\n                  href=\""
    + alias1(container.lambda(((stack1 = ((stack1 = ((stack1 = ((stack1 = (data && lookupProperty(data,"root"))) && lookupProperty(stack1,"site"))) && lookupProperty(stack1,"metadata"))) && lookupProperty(stack1,"coreSiteIcons"))) && lookupProperty(stack1,"value")), depth0))
    + "#chevron-left\"\n                ></use>\n              </svg>\n              <a class=\"qld__breadcrumbs__link\" href=\""
    + alias1(((helper = (helper = lookupProperty(helpers,"asset_url") || (depth0 != null ? lookupProperty(depth0,"asset_url") : depth0)) != null ? helper : alias3),(typeof helper === "function" ? helper.call(alias2,{"name":"asset_url","hash":{},"data":data,"loc":{"start":{"line":57,"column":54},"end":{"line":57,"column":69}}}) : helper)))
    + "\">\n"
    + ((stack1 = (lookupProperty(helpers,"ifCond")||(depth0 && lookupProperty(depth0,"ifCond"))||alias3).call(alias2,(depth0 != null ? lookupProperty(depth0,"asset_is_site_asset") : depth0),"==","1",{"name":"ifCond","hash":{},"fn":container.program(24, data, 0),"inverse":container.program(26, data, 0),"data":data,"loc":{"start":{"line":58,"column":16},"end":{"line":62,"column":27}}})) != null ? stack1 : "")
    + "              </a>\n            </div>\n";
},"24":function(container,depth0,helpers,partials,data) {
    return "                  Home\n";
},"26":function(container,depth0,helpers,partials,data) {
    var helper, lookupProperty = container.lookupProperty || function(parent, propertyName) {
        if (Object.prototype.hasOwnProperty.call(parent, propertyName)) {
          return parent[propertyName];
        }
        return undefined
    };

  return "                  "
    + container.escapeExpression(((helper = (helper = lookupProperty(helpers,"asset_short_name") || (depth0 != null ? lookupProperty(depth0,"asset_short_name") : depth0)) != null ? helper : container.hooks.helperMissing),(typeof helper === "function" ? helper.call(depth0 != null ? depth0 : (container.nullContext || {}),{"name":"asset_short_name","hash":{},"data":data,"loc":{"start":{"line":61,"column":18},"end":{"line":61,"column":40}}}) : helper)))
    + "\n";
},"28":function(container,depth0,helpers,partials,data) {
    var stack1, alias1=depth0 != null ? depth0 : (container.nullContext || {}), alias2=container.hooks.helperMissing, lookupProperty = container.lookupProperty || function(parent, propertyName) {
        if (Object.prototype.hasOwnProperty.call(parent, propertyName)) {
          return parent[propertyName];
        }
        return undefined
    };

  return "            <nav\n              class=\"\n                qld__breadcrumbs\n"
    + ((stack1 = (lookupProperty(helpers,"ifCond")||(depth0 && lookupProperty(depth0,"ifCond"))||alias2).call(alias1,((stack1 = ((stack1 = ((stack1 = (depth0 != null ? lookupProperty(depth0,"site") : depth0)) != null ? lookupProperty(stack1,"metadata") : stack1)) != null ? lookupProperty(stack1,"defaultBannerColour") : stack1)) != null ? lookupProperty(stack1,"value") : stack1),"==","light",{"name":"ifCond","hash":{},"fn":container.program(29, data, 0),"inverse":container.noop,"data":data,"loc":{"start":{"line":82,"column":16},"end":{"line":84,"column":27}}})) != null ? stack1 : "")
    + ((stack1 = (lookupProperty(helpers,"ifCond")||(depth0 && lookupProperty(depth0,"ifCond"))||alias2).call(alias1,((stack1 = ((stack1 = ((stack1 = (depth0 != null ? lookupProperty(depth0,"site") : depth0)) != null ? lookupProperty(stack1,"metadata") : stack1)) != null ? lookupProperty(stack1,"defaultBannerColour") : stack1)) != null ? lookupProperty(stack1,"value") : stack1),"==","alternate",{"name":"ifCond","hash":{},"fn":container.program(31, data, 0),"inverse":container.noop,"data":data,"loc":{"start":{"line":85,"column":16},"end":{"line":87,"column":27}}})) != null ? stack1 : "")
    + ((stack1 = (lookupProperty(helpers,"ifCond")||(depth0 && lookupProperty(depth0,"ifCond"))||alias2).call(alias1,((stack1 = ((stack1 = ((stack1 = (depth0 != null ? lookupProperty(depth0,"site") : depth0)) != null ? lookupProperty(stack1,"metadata") : stack1)) != null ? lookupProperty(stack1,"defaultBannerColour") : stack1)) != null ? lookupProperty(stack1,"value") : stack1),"==","dark",{"name":"ifCond","hash":{},"fn":container.program(33, data, 0),"inverse":container.noop,"data":data,"loc":{"start":{"line":88,"column":16},"end":{"line":90,"column":27}}})) != null ? stack1 : "")
    + ((stack1 = (lookupProperty(helpers,"ifCond")||(depth0 && lookupProperty(depth0,"ifCond"))||alias2).call(alias1,((stack1 = ((stack1 = ((stack1 = (depth0 != null ? lookupProperty(depth0,"site") : depth0)) != null ? lookupProperty(stack1,"metadata") : stack1)) != null ? lookupProperty(stack1,"defaultBannerColour") : stack1)) != null ? lookupProperty(stack1,"value") : stack1),"==","dark-alternate",{"name":"ifCond","hash":{},"fn":container.program(35, data, 0),"inverse":container.noop,"data":data,"loc":{"start":{"line":91,"column":16},"end":{"line":93,"column":27}}})) != null ? stack1 : "")
    + "                qld__banner__breadcrumbs\n                qld__banner__breadcrumbs--tablet\n              \"\n              aria-label=\"breadcrumb\"\n              data-path=\""
    + container.escapeExpression(container.lambda(((stack1 = ((stack1 = ((stack1 = ((stack1 = (data && lookupProperty(data,"root"))) && lookupProperty(stack1,"site"))) && lookupProperty(stack1,"metadata"))) && lookupProperty(stack1,"coreSiteIcons"))) && lookupProperty(stack1,"value")), depth0))
    + "\"\n            >\n              <div class=\"qld__link-list qld__link-list--inline\">\n"
    + ((stack1 = lookupProperty(helpers,"with").call(alias1,(lookupProperty(helpers,"itemAt")||(depth0 && lookupProperty(depth0,"itemAt"))||alias2).call(alias1,((stack1 = (depth0 != null ? lookupProperty(depth0,"current") : depth0)) != null ? lookupProperty(stack1,"lineage") : stack1),-2,{"name":"itemAt","hash":{},"data":data,"loc":{"start":{"line":101,"column":24},"end":{"line":101,"column":51}}}),{"name":"with","hash":{},"fn":container.program(37, data, 0),"inverse":container.noop,"data":data,"loc":{"start":{"line":101,"column":16},"end":{"line":118,"column":25}}})) != null ? stack1 : "")
    + "              </div>\n            </nav>\n";
},"29":function(container,depth0,helpers,partials,data) {
    return "                  qld__breadcrumbs--light\n";
},"31":function(container,depth0,helpers,partials,data) {
    return "                  qld__breadcrumbs--alt\n";
},"33":function(container,depth0,helpers,partials,data) {
    return "                  qld__breadcrumbs--dark\n";
},"35":function(container,depth0,helpers,partials,data) {
    return "                  qld__breadcrumbs--dark-alt\n";
},"37":function(container,depth0,helpers,partials,data) {
    var stack1, lookupProperty = container.lookupProperty || function(parent, propertyName) {
        if (Object.prototype.hasOwnProperty.call(parent, propertyName)) {
          return parent[propertyName];
        }
        return undefined
    };

  return ((stack1 = (lookupProperty(helpers,"ifCond")||(depth0 && lookupProperty(depth0,"ifCond"))||container.hooks.helperMissing).call(depth0 != null ? depth0 : (container.nullContext || {}),(depth0 != null ? lookupProperty(depth0,"asset_type_code") : depth0),"!=","folder",{"name":"ifCond","hash":{},"fn":container.program(38, data, 0),"inverse":container.noop,"data":data,"loc":{"start":{"line":102,"column":18},"end":{"line":117,"column":29}}})) != null ? stack1 : "");
},"38":function(container,depth0,helpers,partials,data) {
    var stack1, helper, alias1=container.escapeExpression, alias2=depth0 != null ? depth0 : (container.nullContext || {}), alias3=container.hooks.helperMissing, lookupProperty = container.lookupProperty || function(parent, propertyName) {
        if (Object.prototype.hasOwnProperty.call(parent, propertyName)) {
          return parent[propertyName];
        }
        return undefined
    };

  return "                    <div class=\"qld__breadcrumbs__item\">\n                      <svg class=\"qld__icon\" xmlns=\"http://www.w3.org/2000/svg\">\n                        <use\n                          href=\""
    + alias1(container.lambda(((stack1 = ((stack1 = ((stack1 = ((stack1 = (data && lookupProperty(data,"root"))) && lookupProperty(stack1,"site"))) && lookupProperty(stack1,"metadata"))) && lookupProperty(stack1,"coreSiteIcons"))) && lookupProperty(stack1,"value")), depth0))
    + "#chevron-left\"\n                        ></use>\n                      </svg>\n                      <a class=\"qld__breadcrumbs__link\" href=\""
    + alias1(((helper = (helper = lookupProperty(helpers,"asset_url") || (depth0 != null ? lookupProperty(depth0,"asset_url") : depth0)) != null ? helper : alias3),(typeof helper === "function" ? helper.call(alias2,{"name":"asset_url","hash":{},"data":data,"loc":{"start":{"line":109,"column":62},"end":{"line":109,"column":77}}}) : helper)))
    + "\">\n"
    + ((stack1 = (lookupProperty(helpers,"ifCond")||(depth0 && lookupProperty(depth0,"ifCond"))||alias3).call(alias2,(depth0 != null ? lookupProperty(depth0,"asset_is_site_asset") : depth0),"==","1",{"name":"ifCond","hash":{},"fn":container.program(39, data, 0),"inverse":container.program(41, data, 0),"data":data,"loc":{"start":{"line":110,"column":24},"end":{"line":114,"column":35}}})) != null ? stack1 : "")
    + "                      </a>\n                    </div>\n";
},"39":function(container,depth0,helpers,partials,data) {
    return "                          Home\n";
},"41":function(container,depth0,helpers,partials,data) {
    var helper, lookupProperty = container.lookupProperty || function(parent, propertyName) {
        if (Object.prototype.hasOwnProperty.call(parent, propertyName)) {
          return parent[propertyName];
        }
        return undefined
    };

  return "                          "
    + container.escapeExpression(((helper = (helper = lookupProperty(helpers,"asset_short_name") || (depth0 != null ? lookupProperty(depth0,"asset_short_name") : depth0)) != null ? helper : container.hooks.helperMissing),(typeof helper === "function" ? helper.call(depth0 != null ? depth0 : (container.nullContext || {}),{"name":"asset_short_name","hash":{},"data":data,"loc":{"start":{"line":113,"column":26},"end":{"line":113,"column":48}}}) : helper)))
    + "\n";
},"43":function(container,depth0,helpers,partials,data) {
    var stack1, alias1=depth0 != null ? depth0 : (container.nullContext || {}), alias2=container.hooks.helperMissing, lookupProperty = container.lookupProperty || function(parent, propertyName) {
        if (Object.prototype.hasOwnProperty.call(parent, propertyName)) {
          return parent[propertyName];
        }
        return undefined
    };

  return "            <nav\n              class=\"\n                qld__breadcrumbs\n"
    + ((stack1 = (lookupProperty(helpers,"ifCond")||(depth0 && lookupProperty(depth0,"ifCond"))||alias2).call(alias1,((stack1 = ((stack1 = ((stack1 = (depth0 != null ? lookupProperty(depth0,"site") : depth0)) != null ? lookupProperty(stack1,"metadata") : stack1)) != null ? lookupProperty(stack1,"defaultBannerColour") : stack1)) != null ? lookupProperty(stack1,"value") : stack1),"==","dark",{"name":"ifCond","hash":{},"fn":container.program(33, data, 0),"inverse":container.noop,"data":data,"loc":{"start":{"line":127,"column":16},"end":{"line":129,"column":27}}})) != null ? stack1 : "")
    + ((stack1 = (lookupProperty(helpers,"ifCond")||(depth0 && lookupProperty(depth0,"ifCond"))||alias2).call(alias1,((stack1 = ((stack1 = ((stack1 = (depth0 != null ? lookupProperty(depth0,"site") : depth0)) != null ? lookupProperty(stack1,"metadata") : stack1)) != null ? lookupProperty(stack1,"defaultBannerColour") : stack1)) != null ? lookupProperty(stack1,"value") : stack1),"==","dark-alternate",{"name":"ifCond","hash":{},"fn":container.program(33, data, 0),"inverse":container.noop,"data":data,"loc":{"start":{"line":130,"column":16},"end":{"line":132,"column":27}}})) != null ? stack1 : "")
    + "                qld__banner__breadcrumbs\n                qld__banner__breadcrumbs--desktop\n              \"\n              aria-label=\"breadcrumb\"\n              data-path=\""
    + container.escapeExpression(container.lambda(((stack1 = ((stack1 = ((stack1 = ((stack1 = (data && lookupProperty(data,"root"))) && lookupProperty(stack1,"site"))) && lookupProperty(stack1,"metadata"))) && lookupProperty(stack1,"coreSiteIcons"))) && lookupProperty(stack1,"value")), depth0))
    + "\"\n            >\n              <ol\n                class=\"qld__breadcrumbs__list--desktop qld__link-list qld__link-list--inline\"\n              >\n"
    + ((stack1 = lookupProperty(helpers,"each").call(alias1,((stack1 = (depth0 != null ? lookupProperty(depth0,"current") : depth0)) != null ? lookupProperty(stack1,"lineage") : stack1),{"name":"each","hash":{},"fn":container.program(44, data, 0),"inverse":container.noop,"data":data,"loc":{"start":{"line":142,"column":16},"end":{"line":171,"column":25}}})) != null ? stack1 : "")
    + "              </ol>\n            </nav>\n";
},"44":function(container,depth0,helpers,partials,data) {
    var stack1, lookupProperty = container.lookupProperty || function(parent, propertyName) {
        if (Object.prototype.hasOwnProperty.call(parent, propertyName)) {
          return parent[propertyName];
        }
        return undefined
    };

  return ((stack1 = (lookupProperty(helpers,"ifCond")||(depth0 && lookupProperty(depth0,"ifCond"))||container.hooks.helperMissing).call(depth0 != null ? depth0 : (container.nullContext || {}),(depth0 != null ? lookupProperty(depth0,"asset_type_code") : depth0),"!=","folder",{"name":"ifCond","hash":{},"fn":container.program(45, data, 0),"inverse":container.noop,"data":data,"loc":{"start":{"line":143,"column":18},"end":{"line":170,"column":29}}})) != null ? stack1 : "");
},"45":function(container,depth0,helpers,partials,data) {
    var stack1, alias1=depth0 != null ? depth0 : (container.nullContext || {}), lookupProperty = container.lookupProperty || function(parent, propertyName) {
        if (Object.prototype.hasOwnProperty.call(parent, propertyName)) {
          return parent[propertyName];
        }
        return undefined
    };

  return "                    <li\n"
    + ((stack1 = lookupProperty(helpers,"if").call(alias1,(data && lookupProperty(data,"last")),{"name":"if","hash":{},"fn":container.program(46, data, 0),"inverse":container.noop,"data":data,"loc":{"start":{"line":145,"column":22},"end":{"line":147,"column":29}}})) != null ? stack1 : "")
    + "                      class=\"qld__breadcrumbs__item\"\n                    >\n"
    + ((stack1 = lookupProperty(helpers,"if").call(alias1,(data && lookupProperty(data,"last")),{"name":"if","hash":{},"fn":container.program(48, data, 0),"inverse":container.program(50, data, 0),"data":data,"loc":{"start":{"line":150,"column":22},"end":{"line":161,"column":29}}})) != null ? stack1 : "")
    + "                    </li>\n"
    + ((stack1 = lookupProperty(helpers,"unless").call(alias1,(data && lookupProperty(data,"last")),{"name":"unless","hash":{},"fn":container.program(55, data, 0),"inverse":container.noop,"data":data,"loc":{"start":{"line":163,"column":20},"end":{"line":169,"column":31}}})) != null ? stack1 : "");
},"46":function(container,depth0,helpers,partials,data) {
    return "                        aria-current=\"page\"\n";
},"48":function(container,depth0,helpers,partials,data) {
    var helper, lookupProperty = container.lookupProperty || function(parent, propertyName) {
        if (Object.prototype.hasOwnProperty.call(parent, propertyName)) {
          return parent[propertyName];
        }
        return undefined
    };

  return "                        "
    + container.escapeExpression(((helper = (helper = lookupProperty(helpers,"asset_short_name") || (depth0 != null ? lookupProperty(depth0,"asset_short_name") : depth0)) != null ? helper : container.hooks.helperMissing),(typeof helper === "function" ? helper.call(depth0 != null ? depth0 : (container.nullContext || {}),{"name":"asset_short_name","hash":{},"data":data,"loc":{"start":{"line":151,"column":24},"end":{"line":151,"column":46}}}) : helper)))
    + "\n";
},"50":function(container,depth0,helpers,partials,data) {
    var stack1, helper, alias1=depth0 != null ? depth0 : (container.nullContext || {}), lookupProperty = container.lookupProperty || function(parent, propertyName) {
        if (Object.prototype.hasOwnProperty.call(parent, propertyName)) {
          return parent[propertyName];
        }
        return undefined
    };

  return "                        <a class=\"qld__breadcrumbs__link\" href=\""
    + container.escapeExpression(((helper = (helper = lookupProperty(helpers,"asset_url") || (depth0 != null ? lookupProperty(depth0,"asset_url") : depth0)) != null ? helper : container.hooks.helperMissing),(typeof helper === "function" ? helper.call(alias1,{"name":"asset_url","hash":{},"data":data,"loc":{"start":{"line":153,"column":64},"end":{"line":153,"column":79}}}) : helper)))
    + "\"\n                        >\n"
    + ((stack1 = lookupProperty(helpers,"if").call(alias1,(data && lookupProperty(data,"first")),{"name":"if","hash":{},"fn":container.program(51, data, 0),"inverse":container.program(53, data, 0),"data":data,"loc":{"start":{"line":155,"column":26},"end":{"line":159,"column":33}}})) != null ? stack1 : "")
    + "                        </a>\n";
},"51":function(container,depth0,helpers,partials,data) {
    return "                            Home\n";
},"53":function(container,depth0,helpers,partials,data) {
    var helper, lookupProperty = container.lookupProperty || function(parent, propertyName) {
        if (Object.prototype.hasOwnProperty.call(parent, propertyName)) {
          return parent[propertyName];
        }
        return undefined
    };

  return "                            "
    + container.escapeExpression(((helper = (helper = lookupProperty(helpers,"asset_short_name") || (depth0 != null ? lookupProperty(depth0,"asset_short_name") : depth0)) != null ? helper : container.hooks.helperMissing),(typeof helper === "function" ? helper.call(depth0 != null ? depth0 : (container.nullContext || {}),{"name":"asset_short_name","hash":{},"data":data,"loc":{"start":{"line":158,"column":28},"end":{"line":158,"column":50}}}) : helper)))
    + "\n";
},"55":function(container,depth0,helpers,partials,data) {
    var stack1, lookupProperty = container.lookupProperty || function(parent, propertyName) {
        if (Object.prototype.hasOwnProperty.call(parent, propertyName)) {
          return parent[propertyName];
        }
        return undefined
    };

  return "                      <svg class=\"qld__icon\" xmlns=\"http://www.w3.org/2000/svg\">\n                        <use\n                          href=\""
    + container.escapeExpression(container.lambda(((stack1 = ((stack1 = ((stack1 = ((stack1 = (data && lookupProperty(data,"root"))) && lookupProperty(stack1,"site"))) && lookupProperty(stack1,"metadata"))) && lookupProperty(stack1,"coreSiteIcons"))) && lookupProperty(stack1,"value")), depth0))
    + "#chevron-right\"\n                        ></use>\n                      </svg>\n";
},"57":function(container,depth0,helpers,partials,data) {
    var stack1, lookupProperty = container.lookupProperty || function(parent, propertyName) {
        if (Object.prototype.hasOwnProperty.call(parent, propertyName)) {
          return parent[propertyName];
        }
        return undefined
    };

  return "            <div class=\"qld__banner__content--body\">\n              "
    + ((stack1 = container.lambda(((stack1 = ((stack1 = (depth0 != null ? lookupProperty(depth0,"metadata") : depth0)) != null ? lookupProperty(stack1,"abstract") : stack1)) != null ? lookupProperty(stack1,"value") : stack1), depth0)) != null ? stack1 : "")
    + "\n            </div>\n";
},"59":function(container,depth0,helpers,partials,data) {
    var stack1, lookupProperty = container.lookupProperty || function(parent, propertyName) {
        if (Object.prototype.hasOwnProperty.call(parent, propertyName)) {
          return parent[propertyName];
        }
        return undefined
    };

  return ((stack1 = (lookupProperty(helpers,"contains")||(depth0 && lookupProperty(depth0,"contains"))||container.hooks.helperMissing).call(depth0 != null ? depth0 : (container.nullContext || {}),((stack1 = ((stack1 = (depth0 != null ? lookupProperty(depth0,"resultsPage") : depth0)) != null ? lookupProperty(stack1,"question") : stack1)) != null ? lookupProperty(stack1,"query") : stack1),"hhsid:",{"name":"contains","hash":{},"fn":container.program(60, data, 0),"inverse":container.program(62, data, 0),"data":data,"loc":{"start":{"line":214,"column":82},"end":{"line":214,"column":196}}})) != null ? stack1 : "");
},"60":function(container,depth0,helpers,partials,data) {
    return "";
},"62":function(container,depth0,helpers,partials,data) {
    var stack1, lookupProperty = container.lookupProperty || function(parent, propertyName) {
        if (Object.prototype.hasOwnProperty.call(parent, propertyName)) {
          return parent[propertyName];
        }
        return undefined
    };

  return container.escapeExpression((lookupProperty(helpers,"renderEncoded")||(depth0 && lookupProperty(depth0,"renderEncoded"))||container.hooks.helperMissing).call(depth0 != null ? depth0 : (container.nullContext || {}),((stack1 = ((stack1 = (depth0 != null ? lookupProperty(depth0,"resultsPage") : depth0)) != null ? lookupProperty(stack1,"question") : stack1)) != null ? lookupProperty(stack1,"query") : stack1),{"name":"renderEncoded","hash":{},"data":data,"loc":{"start":{"line":214,"column":139},"end":{"line":214,"column":183}}}));
},"64":function(container,depth0,helpers,partials,data) {
    var stack1, lookupProperty = container.lookupProperty || function(parent, propertyName) {
        if (Object.prototype.hasOwnProperty.call(parent, propertyName)) {
          return parent[propertyName];
        }
        return undefined
    };

  return ((stack1 = (lookupProperty(helpers,"contains")||(depth0 && lookupProperty(depth0,"contains"))||container.hooks.helperMissing).call(depth0 != null ? depth0 : (container.nullContext || {}),((stack1 = ((stack1 = (depth0 != null ? lookupProperty(depth0,"resultsPage") : depth0)) != null ? lookupProperty(stack1,"question") : stack1)) != null ? lookupProperty(stack1,"query") : stack1),"hhsid:",{"name":"contains","hash":{},"fn":container.program(60, data, 0),"inverse":container.program(65, data, 0),"data":data,"loc":{"start":{"line":263,"column":16},"end":{"line":267,"column":29}}})) != null ? stack1 : "");
},"65":function(container,depth0,helpers,partials,data) {
    var stack1, lookupProperty = container.lookupProperty || function(parent, propertyName) {
        if (Object.prototype.hasOwnProperty.call(parent, propertyName)) {
          return parent[propertyName];
        }
        return undefined
    };

  return "                  for\n                  <span class=\"qld__search__info-query-term\">'"
    + container.escapeExpression((lookupProperty(helpers,"renderEncoded")||(depth0 && lookupProperty(depth0,"renderEncoded"))||container.hooks.helperMissing).call(depth0 != null ? depth0 : (container.nullContext || {}),((stack1 = ((stack1 = (depth0 != null ? lookupProperty(depth0,"resultsPage") : depth0)) != null ? lookupProperty(stack1,"question") : stack1)) != null ? lookupProperty(stack1,"query") : stack1),{"name":"renderEncoded","hash":{},"data":data,"loc":{"start":{"line":266,"column":62},"end":{"line":266,"column":106}}}))
    + "'</span>\n";
},"67":function(container,depth0,helpers,partials,data,blockParams) {
    var stack1, lookupProperty = container.lookupProperty || function(parent, propertyName) {
        if (Object.prototype.hasOwnProperty.call(parent, propertyName)) {
          return parent[propertyName];
        }
        return undefined
    };

  return "            <ol class=\"qld__link-list qld__search__results-list\">\n"
    + ((stack1 = lookupProperty(helpers,"each").call(depth0 != null ? depth0 : (container.nullContext || {}),((stack1 = (depth0 != null ? lookupProperty(depth0,"resultsPage") : depth0)) != null ? lookupProperty(stack1,"results") : stack1),{"name":"each","hash":{},"fn":container.program(68, data, 0, blockParams),"inverse":container.noop,"data":data,"blockParams":blockParams,"loc":{"start":{"line":295,"column":14},"end":{"line":625,"column":23}}})) != null ? stack1 : "")
    + "            </ol>\n";
},"68":function(container,depth0,helpers,partials,data,blockParams) {
    var stack1, alias1=depth0 != null ? depth0 : (container.nullContext || {}), alias2=container.hooks.helperMissing, lookupProperty = container.lookupProperty || function(parent, propertyName) {
        if (Object.prototype.hasOwnProperty.call(parent, propertyName)) {
          return parent[propertyName];
        }
        return undefined
    };

  return "                <li class=\"qld__search__result\">\n                  <div class=\"qld__search__result-inner\">\n                    <div class=\"qld__search__result-header\">\n"
    + ((stack1 = (lookupProperty(helpers,"ifCond")||(depth0 && lookupProperty(depth0,"ifCond"))||alias2).call(alias1,(depth0 != null ? lookupProperty(depth0,"collection") : depth0),"contains","service-finder",{"name":"ifCond","hash":{},"fn":container.program(69, data, 0, blockParams),"inverse":container.program(77, data, 0, blockParams),"data":data,"blockParams":blockParams,"loc":{"start":{"line":299,"column":22},"end":{"line":331,"column":33}}})) != null ? stack1 : "")
    + ((stack1 = lookupProperty(helpers,"if").call(alias1,((stack1 = (depth0 != null ? lookupProperty(depth0,"listMetadata") : depth0)) != null ? lookupProperty(stack1,"assetLineage") : stack1),{"name":"if","hash":{},"fn":container.program(88, data, 0, blockParams),"inverse":container.noop,"data":data,"blockParams":blockParams,"loc":{"start":{"line":332,"column":22},"end":{"line":358,"column":29}}})) != null ? stack1 : "")
    + ((stack1 = (lookupProperty(helpers,"ifCond")||(depth0 && lookupProperty(depth0,"ifCond"))||alias2).call(alias1,(depth0 != null ? lookupProperty(depth0,"collection") : depth0),"contains","__service-locations",{"name":"ifCond","hash":{},"fn":container.program(93, data, 0, blockParams),"inverse":container.noop,"data":data,"blockParams":blockParams,"loc":{"start":{"line":359,"column":22},"end":{"line":388,"column":33}}})) != null ? stack1 : "")
    + ((stack1 = (lookupProperty(helpers,"ifCond")||(depth0 && lookupProperty(depth0,"ifCond"))||alias2).call(alias1,(depth0 != null ? lookupProperty(depth0,"collection") : depth0),"contains","__facilities",{"name":"ifCond","hash":{},"fn":container.program(95, data, 0, blockParams),"inverse":container.noop,"data":data,"blockParams":blockParams,"loc":{"start":{"line":389,"column":22},"end":{"line":418,"column":33}}})) != null ? stack1 : "")
    + ((stack1 = (lookupProperty(helpers,"ifCond")||(depth0 && lookupProperty(depth0,"ifCond"))||alias2).call(alias1,(depth0 != null ? lookupProperty(depth0,"collection") : depth0),"contains","__services",{"name":"ifCond","hash":{},"fn":container.program(97, data, 0, blockParams),"inverse":container.noop,"data":data,"blockParams":blockParams,"loc":{"start":{"line":419,"column":22},"end":{"line":438,"column":33}}})) != null ? stack1 : "")
    + "                    </div>\n                    <div class=\"qld__search__result-type\">\n"
    + ((stack1 = lookupProperty(helpers,"if").call(alias1,((stack1 = (depth0 != null ? lookupProperty(depth0,"listMetadata") : depth0)) != null ? lookupProperty(stack1,"articleType") : stack1),{"name":"if","hash":{},"fn":container.program(99, data, 0, blockParams),"inverse":container.noop,"data":data,"blockParams":blockParams,"loc":{"start":{"line":441,"column":22},"end":{"line":484,"column":29}}})) != null ? stack1 : "")
    + ((stack1 = lookupProperty(helpers,"if").call(alias1,(depth0 != null ? lookupProperty(depth0,"fileType") : depth0),{"name":"if","hash":{},"fn":container.program(106, data, 0, blockParams),"inverse":container.noop,"data":data,"blockParams":blockParams,"loc":{"start":{"line":485,"column":22},"end":{"line":531,"column":29}}})) != null ? stack1 : "")
    + ((stack1 = (lookupProperty(helpers,"ifCond")||(depth0 && lookupProperty(depth0,"ifCond"))||alias2).call(alias1,(depth0 != null ? lookupProperty(depth0,"collection") : depth0),"contains","service-finder",{"name":"ifCond","hash":{},"fn":container.program(113, data, 0, blockParams),"inverse":container.noop,"data":data,"blockParams":blockParams,"loc":{"start":{"line":532,"column":22},"end":{"line":560,"column":33}}})) != null ? stack1 : "")
    + ((stack1 = lookupProperty(helpers,"if").call(alias1,((stack1 = (depth0 != null ? lookupProperty(depth0,"metaData") : depth0)) != null ? lookupProperty(stack1,"format") : stack1),{"name":"if","hash":{},"fn":container.program(118, data, 0, blockParams),"inverse":container.noop,"data":data,"blockParams":blockParams,"loc":{"start":{"line":561,"column":22},"end":{"line":589,"column":29}}})) != null ? stack1 : "")
    + "                    </div>\n                  </div>\n                  <p class=\"qld__search__result-summary\">\n"
    + ((stack1 = (lookupProperty(helpers,"ifCond")||(depth0 && lookupProperty(depth0,"ifCond"))||alias2).call(alias1,(depth0 != null ? lookupProperty(depth0,"collection") : depth0),"contains","__facilities",{"name":"ifCond","hash":{},"fn":container.program(124, data, 0, blockParams),"inverse":container.program(133, data, 0, blockParams),"data":data,"blockParams":blockParams,"loc":{"start":{"line":593,"column":20},"end":{"line":622,"column":31}}})) != null ? stack1 : "")
    + "                  </p>\n                </li>\n";
},"69":function(container,depth0,helpers,partials,data) {
    var stack1, lookupProperty = container.lookupProperty || function(parent, propertyName) {
        if (Object.prototype.hasOwnProperty.call(parent, propertyName)) {
          return parent[propertyName];
        }
        return undefined
    };

  return ((stack1 = (lookupProperty(helpers,"ifCond")||(depth0 && lookupProperty(depth0,"ifCond"))||container.hooks.helperMissing).call(depth0 != null ? depth0 : (container.nullContext || {}),(depth0 != null ? lookupProperty(depth0,"collection") : depth0),"contains","__service-locations",{"name":"ifCond","hash":{},"fn":container.program(70, data, 0),"inverse":container.program(72, data, 0),"data":data,"loc":{"start":{"line":300,"column":24},"end":{"line":312,"column":35}}})) != null ? stack1 : "");
},"70":function(container,depth0,helpers,partials,data) {
    var stack1, helper, alias1=container.lambda, alias2=container.escapeExpression, lookupProperty = container.lookupProperty || function(parent, propertyName) {
        if (Object.prototype.hasOwnProperty.call(parent, propertyName)) {
          return parent[propertyName];
        }
        return undefined
    };

  return "                          <h3 class=\"qld__display-md\">\n                            <a href=\""
    + alias2(alias1(((stack1 = ((stack1 = ((stack1 = ((stack1 = (data && lookupProperty(data,"root"))) && lookupProperty(stack1,"site"))) && lookupProperty(stack1,"metadata"))) && lookupProperty(stack1,"sfHomeUrl"))) && lookupProperty(stack1,"value")), depth0))
    + "/"
    + alias2(alias1(((stack1 = (depth0 != null ? lookupProperty(depth0,"listMetadata") : depth0)) != null ? lookupProperty(stack1,"servicewebpath") : stack1), depth0))
    + "\">Healthcare services | "
    + ((stack1 = ((helper = (helper = lookupProperty(helpers,"title") || (depth0 != null ? lookupProperty(depth0,"title") : depth0)) != null ? helper : container.hooks.helperMissing),(typeof helper === "function" ? helper.call(depth0 != null ? depth0 : (container.nullContext || {}),{"name":"title","hash":{},"data":data,"loc":{"start":{"line":302,"column":136},"end":{"line":302,"column":149}}}) : helper))) != null ? stack1 : "")
    + "</a>\n                          </h3>\n";
},"72":function(container,depth0,helpers,partials,data) {
    var stack1, lookupProperty = container.lookupProperty || function(parent, propertyName) {
        if (Object.prototype.hasOwnProperty.call(parent, propertyName)) {
          return parent[propertyName];
        }
        return undefined
    };

  return ((stack1 = (lookupProperty(helpers,"ifCond")||(depth0 && lookupProperty(depth0,"ifCond"))||container.hooks.helperMissing).call(depth0 != null ? depth0 : (container.nullContext || {}),(depth0 != null ? lookupProperty(depth0,"collection") : depth0),"contains","__facilities",{"name":"ifCond","hash":{},"fn":container.program(73, data, 0),"inverse":container.program(75, data, 0),"data":data,"loc":{"start":{"line":304,"column":24},"end":{"line":312,"column":24}}})) != null ? stack1 : "");
},"73":function(container,depth0,helpers,partials,data) {
    var stack1, helper, alias1=container.lambda, alias2=container.escapeExpression, lookupProperty = container.lookupProperty || function(parent, propertyName) {
        if (Object.prototype.hasOwnProperty.call(parent, propertyName)) {
          return parent[propertyName];
        }
        return undefined
    };

  return "                          <h3 class=\"qld__display-md\">\n                            <a href=\""
    + alias2(alias1(((stack1 = ((stack1 = ((stack1 = ((stack1 = (data && lookupProperty(data,"root"))) && lookupProperty(stack1,"site"))) && lookupProperty(stack1,"metadata"))) && lookupProperty(stack1,"sfFacilitiesUrl"))) && lookupProperty(stack1,"value")), depth0))
    + "/"
    + alias2(alias1(((stack1 = (depth0 != null ? lookupProperty(depth0,"listMetadata") : depth0)) != null ? lookupProperty(stack1,"webpath") : stack1), depth0))
    + "\">Healthcare services | "
    + ((stack1 = ((helper = (helper = lookupProperty(helpers,"title") || (depth0 != null ? lookupProperty(depth0,"title") : depth0)) != null ? helper : container.hooks.helperMissing),(typeof helper === "function" ? helper.call(depth0 != null ? depth0 : (container.nullContext || {}),{"name":"title","hash":{},"data":data,"loc":{"start":{"line":306,"column":135},"end":{"line":306,"column":148}}}) : helper))) != null ? stack1 : "")
    + "</a>\n                          </h3>\n";
},"75":function(container,depth0,helpers,partials,data) {
    var stack1, helper, alias1=container.lambda, alias2=container.escapeExpression, lookupProperty = container.lookupProperty || function(parent, propertyName) {
        if (Object.prototype.hasOwnProperty.call(parent, propertyName)) {
          return parent[propertyName];
        }
        return undefined
    };

  return "                          <h3 class=\"qld__display-md\">\n                            <a href=\""
    + alias2(alias1(((stack1 = ((stack1 = ((stack1 = ((stack1 = (data && lookupProperty(data,"root"))) && lookupProperty(stack1,"site"))) && lookupProperty(stack1,"metadata"))) && lookupProperty(stack1,"sfHomeUrl"))) && lookupProperty(stack1,"value")), depth0))
    + "/"
    + alias2(alias1(((stack1 = (depth0 != null ? lookupProperty(depth0,"listMetadata") : depth0)) != null ? lookupProperty(stack1,"webpath") : stack1), depth0))
    + "\">Healthcare services | "
    + ((stack1 = ((helper = (helper = lookupProperty(helpers,"title") || (depth0 != null ? lookupProperty(depth0,"title") : depth0)) != null ? helper : container.hooks.helperMissing),(typeof helper === "function" ? helper.call(depth0 != null ? depth0 : (container.nullContext || {}),{"name":"title","hash":{},"data":data,"loc":{"start":{"line":310,"column":129},"end":{"line":310,"column":142}}}) : helper))) != null ? stack1 : "")
    + "</a>\n                          </h3>\n                        ";
},"77":function(container,depth0,helpers,partials,data,blockParams) {
    var stack1, helper, alias1=depth0 != null ? depth0 : (container.nullContext || {}), alias2=container.hooks.helperMissing, lookupProperty = container.lookupProperty || function(parent, propertyName) {
        if (Object.prototype.hasOwnProperty.call(parent, propertyName)) {
          return parent[propertyName];
        }
        return undefined
    };

  return "                        <h3 class=\"qld__display-md\">\n                          <a href=\""
    + container.escapeExpression(((helper = (helper = lookupProperty(helpers,"liveUrl") || (depth0 != null ? lookupProperty(depth0,"liveUrl") : depth0)) != null ? helper : alias2),(typeof helper === "function" ? helper.call(alias1,{"name":"liveUrl","hash":{},"data":data,"blockParams":blockParams,"loc":{"start":{"line":315,"column":35},"end":{"line":315,"column":48}}}) : helper)))
    + "\">\n"
    + ((stack1 = (lookupProperty(helpers,"ifCond")||(depth0 && lookupProperty(depth0,"ifCond"))||alias2).call(alias1,(depth0 != null ? lookupProperty(depth0,"liveUrl") : depth0),"contains","?tag=",{"name":"ifCond","hash":{},"fn":container.program(78, data, 0, blockParams),"inverse":container.program(83, data, 0, blockParams),"data":data,"blockParams":blockParams,"loc":{"start":{"line":316,"column":28},"end":{"line":328,"column":39}}})) != null ? stack1 : "")
    + "                          </a>\n                        </h3>\n";
},"78":function(container,depth0,helpers,partials,data,blockParams) {
    var stack1, alias1=depth0 != null ? depth0 : (container.nullContext || {}), alias2=container.hooks.helperMissing, lookupProperty = container.lookupProperty || function(parent, propertyName) {
        if (Object.prototype.hasOwnProperty.call(parent, propertyName)) {
          return parent[propertyName];
        }
        return undefined
    };

  return "                              "
    + container.escapeExpression((lookupProperty(helpers,"replace")||(depth0 && lookupProperty(depth0,"replace"))||alias2).call(alias1,(depth0 != null ? lookupProperty(depth0,"title") : depth0),"\\|.*","",{"name":"replace","hash":{},"data":data,"blockParams":blockParams,"loc":{"start":{"line":317,"column":30},"end":{"line":317,"column":57}}}))
    + "\n                              | Topic |\n"
    + ((stack1 = lookupProperty(helpers,"with").call(alias1,(lookupProperty(helpers,"split")||(depth0 && lookupProperty(depth0,"split"))||alias2).call(alias1,(depth0 != null ? lookupProperty(depth0,"liveUrl") : depth0),"?tag=",{"name":"split","hash":{},"data":data,"blockParams":blockParams,"loc":{"start":{"line":319,"column":38},"end":{"line":319,"column":61}}}),{"name":"with","hash":{},"fn":container.program(79, data, 1, blockParams),"inverse":container.noop,"data":data,"blockParams":blockParams,"loc":{"start":{"line":319,"column":30},"end":{"line":323,"column":39}}})) != null ? stack1 : "");
},"79":function(container,depth0,helpers,partials,data,blockParams) {
    var stack1, lookupProperty = container.lookupProperty || function(parent, propertyName) {
        if (Object.prototype.hasOwnProperty.call(parent, propertyName)) {
          return parent[propertyName];
        }
        return undefined
    };

  return ((stack1 = (lookupProperty(helpers,"replaceMany")||(depth0 && lookupProperty(depth0,"replaceMany"))||container.hooks.helperMissing).call(depth0 != null ? depth0 : (container.nullContext || {}),"%27","'",{"name":"replaceMany","hash":{},"fn":container.program(80, data, 0, blockParams),"inverse":container.noop,"data":data,"blockParams":blockParams,"loc":{"start":{"line":320,"column":32},"end":{"line":322,"column":48}}})) != null ? stack1 : "");
},"80":function(container,depth0,helpers,partials,data,blockParams) {
    var stack1, lookupProperty = container.lookupProperty || function(parent, propertyName) {
        if (Object.prototype.hasOwnProperty.call(parent, propertyName)) {
          return parent[propertyName];
        }
        return undefined
    };

  return "                                  "
    + ((stack1 = (lookupProperty(helpers,"replaceMany")||(depth0 && lookupProperty(depth0,"replaceMany"))||container.hooks.helperMissing).call(depth0 != null ? depth0 : (container.nullContext || {}),"_"," ",{"name":"replaceMany","hash":{},"fn":container.program(81, data, 0, blockParams),"inverse":container.noop,"data":data,"blockParams":blockParams,"loc":{"start":{"line":321,"column":34},"end":{"line":321,"column":104}}})) != null ? stack1 : "")
    + "\n";
},"81":function(container,depth0,helpers,partials,data,blockParams) {
    var stack1, lookupProperty = container.lookupProperty || function(parent, propertyName) {
        if (Object.prototype.hasOwnProperty.call(parent, propertyName)) {
          return parent[propertyName];
        }
        return undefined
    };

  return container.escapeExpression((lookupProperty(helpers,"capitaliseFirst")||(depth0 && lookupProperty(depth0,"capitaliseFirst"))||container.hooks.helperMissing).call(depth0 != null ? depth0 : (container.nullContext || {}),((stack1 = blockParams[2][0]) != null ? lookupProperty(stack1,"1") : stack1),{"name":"capitaliseFirst","hash":{},"data":data,"blockParams":blockParams,"loc":{"start":{"line":321,"column":58},"end":{"line":321,"column":88}}}));
},"83":function(container,depth0,helpers,partials,data) {
    var stack1, lookupProperty = container.lookupProperty || function(parent, propertyName) {
        if (Object.prototype.hasOwnProperty.call(parent, propertyName)) {
          return parent[propertyName];
        }
        return undefined
    };

  return ((stack1 = (lookupProperty(helpers,"ifCond")||(depth0 && lookupProperty(depth0,"ifCond"))||container.hooks.helperMissing).call(depth0 != null ? depth0 : (container.nullContext || {}),(depth0 != null ? lookupProperty(depth0,"fileType") : depth0),"==","pdf",{"name":"ifCond","hash":{},"fn":container.program(84, data, 0),"inverse":container.program(86, data, 0),"data":data,"loc":{"start":{"line":324,"column":28},"end":{"line":328,"column":28}}})) != null ? stack1 : "");
},"84":function(container,depth0,helpers,partials,data) {
    var stack1, lookupProperty = container.lookupProperty || function(parent, propertyName) {
        if (Object.prototype.hasOwnProperty.call(parent, propertyName)) {
          return parent[propertyName];
        }
        return undefined
    };

  return "                              "
    + container.escapeExpression((lookupProperty(helpers,"replace")||(depth0 && lookupProperty(depth0,"replace"))||container.hooks.helperMissing).call(depth0 != null ? depth0 : (container.nullContext || {}),((stack1 = ((stack1 = (depth0 != null ? lookupProperty(depth0,"listMetadata") : depth0)) != null ? lookupProperty(stack1,"fileName") : stack1)) != null ? lookupProperty(stack1,"0") : stack1),"\\|.*","",{"name":"replace","hash":{},"data":data,"loc":{"start":{"line":325,"column":30},"end":{"line":325,"column":77}}}))
    + "\n";
},"86":function(container,depth0,helpers,partials,data) {
    var lookupProperty = container.lookupProperty || function(parent, propertyName) {
        if (Object.prototype.hasOwnProperty.call(parent, propertyName)) {
          return parent[propertyName];
        }
        return undefined
    };

  return "                              "
    + container.escapeExpression((lookupProperty(helpers,"replace")||(depth0 && lookupProperty(depth0,"replace"))||container.hooks.helperMissing).call(depth0 != null ? depth0 : (container.nullContext || {}),(depth0 != null ? lookupProperty(depth0,"title") : depth0),"\\|.*","",{"name":"replace","hash":{},"data":data,"loc":{"start":{"line":327,"column":30},"end":{"line":327,"column":57}}}))
    + "\n                            ";
},"88":function(container,depth0,helpers,partials,data) {
    var stack1, lookupProperty = container.lookupProperty || function(parent, propertyName) {
        if (Object.prototype.hasOwnProperty.call(parent, propertyName)) {
          return parent[propertyName];
        }
        return undefined
    };

  return "                        <div\n                          class=\"qld__breadcrumbs qld__search__result-breadcrumbs\"\n                          aria-label=\"breadcrumb\"\n                        >\n                          <ul class=\"qld__link-list qld__link-list--inline\">\n"
    + ((stack1 = lookupProperty(helpers,"each").call(depth0 != null ? depth0 : (container.nullContext || {}),((stack1 = (depth0 != null ? lookupProperty(depth0,"listMetadata") : depth0)) != null ? lookupProperty(stack1,"assetLineage") : stack1),{"name":"each","hash":{},"fn":container.program(89, data, 0),"inverse":container.noop,"data":data,"loc":{"start":{"line":338,"column":28},"end":{"line":355,"column":37}}})) != null ? stack1 : "")
    + "                          </ul>\n                        </div>\n";
},"89":function(container,depth0,helpers,partials,data) {
    var stack1, alias1=depth0 != null ? depth0 : (container.nullContext || {}), lookupProperty = container.lookupProperty || function(parent, propertyName) {
        if (Object.prototype.hasOwnProperty.call(parent, propertyName)) {
          return parent[propertyName];
        }
        return undefined
    };

  return ((stack1 = lookupProperty(helpers,"each").call(alias1,(lookupProperty(helpers,"split")||(depth0 && lookupProperty(depth0,"split"))||container.hooks.helperMissing).call(alias1,depth0,"+",{"name":"split","hash":{},"data":data,"loc":{"start":{"line":339,"column":38},"end":{"line":339,"column":54}}}),{"name":"each","hash":{},"fn":container.program(90, data, 0),"inverse":container.noop,"data":data,"loc":{"start":{"line":339,"column":30},"end":{"line":354,"column":39}}})) != null ? stack1 : "");
},"90":function(container,depth0,helpers,partials,data) {
    var stack1, lookupProperty = container.lookupProperty || function(parent, propertyName) {
        if (Object.prototype.hasOwnProperty.call(parent, propertyName)) {
          return parent[propertyName];
        }
        return undefined
    };

  return "                                <li>\n                                  "
    + container.escapeExpression(container.lambda(depth0, depth0))
    + "\n                                </li>\n"
    + ((stack1 = lookupProperty(helpers,"unless").call(depth0 != null ? depth0 : (container.nullContext || {}),(data && lookupProperty(data,"last")),{"name":"unless","hash":{},"fn":container.program(91, data, 0),"inverse":container.noop,"data":data,"loc":{"start":{"line":343,"column":32},"end":{"line":353,"column":43}}})) != null ? stack1 : "");
},"91":function(container,depth0,helpers,partials,data) {
    var stack1, lookupProperty = container.lookupProperty || function(parent, propertyName) {
        if (Object.prototype.hasOwnProperty.call(parent, propertyName)) {
          return parent[propertyName];
        }
        return undefined
    };

  return "                                  <svg\n                                    class=\"qld__icon\"\n                                    aria-hidden=\"true\"\n                                    xmlns=\"http://www.w3.org/2000/svg\"\n                                  >\n                                    <use\n                                      href=\""
    + container.escapeExpression(container.lambda(((stack1 = ((stack1 = ((stack1 = ((stack1 = (data && lookupProperty(data,"root"))) && lookupProperty(stack1,"site"))) && lookupProperty(stack1,"metadata"))) && lookupProperty(stack1,"coreSiteIcons"))) && lookupProperty(stack1,"value")), depth0))
    + "#chevron-right\"\n                                    ></use>\n                                  </svg>\n";
},"93":function(container,depth0,helpers,partials,data) {
    var stack1, helper, alias1=container.lambda, alias2=container.escapeExpression, alias3=depth0 != null ? depth0 : (container.nullContext || {}), alias4=container.hooks.helperMissing, lookupProperty = container.lookupProperty || function(parent, propertyName) {
        if (Object.prototype.hasOwnProperty.call(parent, propertyName)) {
          return parent[propertyName];
        }
        return undefined
    };

  return "                        <div\n                          class=\"qld__breadcrumbs qld__search__result-breadcrumbs\"\n                          aria-label=\"breadcrumb\"\n                        >\n                          <ul class=\"qld__link-list qld__link-list--inline\">\n                            <li>Services</li>\n                            <svg\n                              class=\"qld__icon\"\n                              aria-hidden=\"true\"\n                              xmlns=\"http://www.w3.org/2000/svg\"\n                            >\n                              <use\n                                href=\""
    + alias2(alias1(((stack1 = ((stack1 = ((stack1 = ((stack1 = (data && lookupProperty(data,"root"))) && lookupProperty(stack1,"site"))) && lookupProperty(stack1,"metadata"))) && lookupProperty(stack1,"coreSiteIcons"))) && lookupProperty(stack1,"value")), depth0))
    + "#chevron-right\"\n                              ></use>\n                            </svg>\n                            <li>"
    + alias2((lookupProperty(helpers,"itemAt")||(depth0 && lookupProperty(depth0,"itemAt"))||alias4).call(alias3,(lookupProperty(helpers,"split")||(depth0 && lookupProperty(depth0,"split"))||alias4).call(alias3,(depth0 != null ? lookupProperty(depth0,"title") : depth0),"-",{"name":"split","hash":{},"data":data,"loc":{"start":{"line":375,"column":41},"end":{"line":375,"column":58}}}),"0",{"name":"itemAt","hash":{},"data":data,"loc":{"start":{"line":375,"column":32},"end":{"line":375,"column":64}}}))
    + "</li>\n                            <svg\n                              class=\"qld__icon\"\n                              aria-hidden=\"true\"\n                              xmlns=\"http://www.w3.org/2000/svg\"\n                            >\n                              <use\n                                href=\""
    + alias2(alias1(((stack1 = ((stack1 = ((stack1 = ((stack1 = (data && lookupProperty(data,"root"))) && lookupProperty(stack1,"site"))) && lookupProperty(stack1,"metadata"))) && lookupProperty(stack1,"coreSiteIcons"))) && lookupProperty(stack1,"value")), depth0))
    + "#chevron-right\"\n                              ></use>\n                            </svg>\n                            <li>"
    + ((stack1 = ((helper = (helper = lookupProperty(helpers,"title") || (depth0 != null ? lookupProperty(depth0,"title") : depth0)) != null ? helper : alias4),(typeof helper === "function" ? helper.call(alias3,{"name":"title","hash":{},"data":data,"loc":{"start":{"line":385,"column":32},"end":{"line":385,"column":45}}}) : helper))) != null ? stack1 : "")
    + "</li>\n                          </ul>\n                        </div>\n";
},"95":function(container,depth0,helpers,partials,data) {
    var stack1, helper, alias1=container.lambda, alias2=container.escapeExpression, lookupProperty = container.lookupProperty || function(parent, propertyName) {
        if (Object.prototype.hasOwnProperty.call(parent, propertyName)) {
          return parent[propertyName];
        }
        return undefined
    };

  return "                        <div\n                          class=\"qld__breadcrumbs qld__search__result-breadcrumbs\"\n                          aria-label=\"breadcrumb\"\n                        >\n                          <ul class=\"qld__link-list qld__link-list--inline\">\n                            <li>Services</li>\n                            <svg\n                              class=\"qld__icon\"\n                              aria-hidden=\"true\"\n                              xmlns=\"http://www.w3.org/2000/svg\"\n                            >\n                              <use\n                                href=\""
    + alias2(alias1(((stack1 = ((stack1 = ((stack1 = ((stack1 = (data && lookupProperty(data,"root"))) && lookupProperty(stack1,"site"))) && lookupProperty(stack1,"metadata"))) && lookupProperty(stack1,"coreSiteIcons"))) && lookupProperty(stack1,"value")), depth0))
    + "#chevron-right\"\n                              ></use>\n                            </svg>\n                            <li>Locations</li>\n                            <svg\n                              class=\"qld__icon\"\n                              aria-hidden=\"true\"\n                              xmlns=\"http://www.w3.org/2000/svg\"\n                            >\n                              <use\n                                href=\""
    + alias2(alias1(((stack1 = ((stack1 = ((stack1 = ((stack1 = (data && lookupProperty(data,"root"))) && lookupProperty(stack1,"site"))) && lookupProperty(stack1,"metadata"))) && lookupProperty(stack1,"coreSiteIcons"))) && lookupProperty(stack1,"value")), depth0))
    + "#chevron-right\"\n                              ></use>\n                            </svg>\n                            <li>"
    + ((stack1 = ((helper = (helper = lookupProperty(helpers,"title") || (depth0 != null ? lookupProperty(depth0,"title") : depth0)) != null ? helper : container.hooks.helperMissing),(typeof helper === "function" ? helper.call(depth0 != null ? depth0 : (container.nullContext || {}),{"name":"title","hash":{},"data":data,"loc":{"start":{"line":415,"column":32},"end":{"line":415,"column":45}}}) : helper))) != null ? stack1 : "")
    + "</li>\n                          </ul>\n                        </div>\n";
},"97":function(container,depth0,helpers,partials,data) {
    var stack1, helper, lookupProperty = container.lookupProperty || function(parent, propertyName) {
        if (Object.prototype.hasOwnProperty.call(parent, propertyName)) {
          return parent[propertyName];
        }
        return undefined
    };

  return "                        <div\n                          class=\"qld__breadcrumbs qld__search__result-breadcrumbs\"\n                          aria-label=\"breadcrumb\"\n                        >\n                          <ul class=\"qld__link-list qld__link-list--inline\">\n                            <li>Services</li>\n                            <svg\n                              class=\"qld__icon\"\n                              aria-hidden=\"true\"\n                              xmlns=\"http://www.w3.org/2000/svg\"\n                            >\n                              <use\n                                href=\""
    + container.escapeExpression(container.lambda(((stack1 = ((stack1 = ((stack1 = ((stack1 = (data && lookupProperty(data,"root"))) && lookupProperty(stack1,"site"))) && lookupProperty(stack1,"metadata"))) && lookupProperty(stack1,"coreSiteIcons"))) && lookupProperty(stack1,"value")), depth0))
    + "#chevron-right\"\n                              ></use>\n                            </svg>\n                            <li>"
    + ((stack1 = ((helper = (helper = lookupProperty(helpers,"title") || (depth0 != null ? lookupProperty(depth0,"title") : depth0)) != null ? helper : container.hooks.helperMissing),(typeof helper === "function" ? helper.call(depth0 != null ? depth0 : (container.nullContext || {}),{"name":"title","hash":{},"data":data,"loc":{"start":{"line":435,"column":32},"end":{"line":435,"column":45}}}) : helper))) != null ? stack1 : "")
    + "</li>\n                          </ul>\n                        </div>\n";
},"99":function(container,depth0,helpers,partials,data) {
    var stack1, alias1=depth0 != null ? depth0 : (container.nullContext || {}), alias2=container.hooks.helperMissing, lookupProperty = container.lookupProperty || function(parent, propertyName) {
        if (Object.prototype.hasOwnProperty.call(parent, propertyName)) {
          return parent[propertyName];
        }
        return undefined
    };

  return ((stack1 = (lookupProperty(helpers,"ifCond")||(depth0 && lookupProperty(depth0,"ifCond"))||alias2).call(alias1,((stack1 = (depth0 != null ? lookupProperty(depth0,"listMetadata") : depth0)) != null ? lookupProperty(stack1,"articleType") : stack1),"==","news",{"name":"ifCond","hash":{},"fn":container.program(100, data, 0),"inverse":container.noop,"data":data,"loc":{"start":{"line":442,"column":24},"end":{"line":455,"column":35}}})) != null ? stack1 : "")
    + ((stack1 = (lookupProperty(helpers,"ifCond")||(depth0 && lookupProperty(depth0,"ifCond"))||alias2).call(alias1,((stack1 = (depth0 != null ? lookupProperty(depth0,"listMetadata") : depth0)) != null ? lookupProperty(stack1,"articleType") : stack1),"==","feature-article",{"name":"ifCond","hash":{},"fn":container.program(102, data, 0),"inverse":container.noop,"data":data,"loc":{"start":{"line":456,"column":24},"end":{"line":469,"column":35}}})) != null ? stack1 : "")
    + ((stack1 = (lookupProperty(helpers,"ifCond")||(depth0 && lookupProperty(depth0,"ifCond"))||alias2).call(alias1,((stack1 = (depth0 != null ? lookupProperty(depth0,"listMetadata") : depth0)) != null ? lookupProperty(stack1,"articleType") : stack1),"==","podcast-series",{"name":"ifCond","hash":{},"fn":container.program(104, data, 0),"inverse":container.noop,"data":data,"loc":{"start":{"line":470,"column":24},"end":{"line":483,"column":35}}})) != null ? stack1 : "");
},"100":function(container,depth0,helpers,partials,data) {
    var stack1, lookupProperty = container.lookupProperty || function(parent, propertyName) {
        if (Object.prototype.hasOwnProperty.call(parent, propertyName)) {
          return parent[propertyName];
        }
        return undefined
    };

  return "                          <span class=\"qld__search__result-type-name\">\n                            <svg\n                              class=\"qld__icon\"\n                              aria-hidden=\"true\"\n                              xmlns=\"http://www.w3.org/2000/svg\"\n                            >\n                              <use\n                                href=\""
    + container.escapeExpression(container.lambda(((stack1 = ((stack1 = ((stack1 = ((stack1 = (data && lookupProperty(data,"root"))) && lookupProperty(stack1,"site"))) && lookupProperty(stack1,"metadata"))) && lookupProperty(stack1,"coreSiteIcons"))) && lookupProperty(stack1,"value")), depth0))
    + "#article\"\n                              ></use>\n                            </svg>\n                            News\n                          </span>\n";
},"102":function(container,depth0,helpers,partials,data) {
    var stack1, lookupProperty = container.lookupProperty || function(parent, propertyName) {
        if (Object.prototype.hasOwnProperty.call(parent, propertyName)) {
          return parent[propertyName];
        }
        return undefined
    };

  return "                          <span class=\"qld__search__result-type-name\">\n                            <svg\n                              class=\"qld__icon\"\n                              aria-hidden=\"true\"\n                              xmlns=\"http://www.w3.org/2000/svg\"\n                            >\n                              <use\n                                href=\""
    + container.escapeExpression(container.lambda(((stack1 = ((stack1 = ((stack1 = ((stack1 = (data && lookupProperty(data,"root"))) && lookupProperty(stack1,"site"))) && lookupProperty(stack1,"metadata"))) && lookupProperty(stack1,"coreSiteIcons"))) && lookupProperty(stack1,"value")), depth0))
    + "#announcement\"\n                              ></use>\n                            </svg>\n                            Feature Article\n                          </span>\n";
},"104":function(container,depth0,helpers,partials,data) {
    var stack1, lookupProperty = container.lookupProperty || function(parent, propertyName) {
        if (Object.prototype.hasOwnProperty.call(parent, propertyName)) {
          return parent[propertyName];
        }
        return undefined
    };

  return "                          <span class=\"qld__search__result-type-name\">\n                            <svg\n                              class=\"qld__icon\"\n                              aria-hidden=\"true\"\n                              xmlns=\"http://www.w3.org/2000/svg\"\n                            >\n                              <use\n                                href=\""
    + container.escapeExpression(container.lambda(((stack1 = ((stack1 = ((stack1 = ((stack1 = (data && lookupProperty(data,"root"))) && lookupProperty(stack1,"site"))) && lookupProperty(stack1,"metadata"))) && lookupProperty(stack1,"coreSiteIcons"))) && lookupProperty(stack1,"value")), depth0))
    + "#podcast\"\n                              ></use>\n                            </svg>\n                            Podcast\n                          </span>\n";
},"106":function(container,depth0,helpers,partials,data) {
    var stack1, alias1=depth0 != null ? depth0 : (container.nullContext || {}), alias2=container.hooks.helperMissing, lookupProperty = container.lookupProperty || function(parent, propertyName) {
        if (Object.prototype.hasOwnProperty.call(parent, propertyName)) {
          return parent[propertyName];
        }
        return undefined
    };

  return ((stack1 = (lookupProperty(helpers,"ifCond")||(depth0 && lookupProperty(depth0,"ifCond"))||alias2).call(alias1,(depth0 != null ? lookupProperty(depth0,"fileType") : depth0),"==","pdf",{"name":"ifCond","hash":{},"fn":container.program(107, data, 0),"inverse":container.noop,"data":data,"loc":{"start":{"line":486,"column":24},"end":{"line":500,"column":35}}})) != null ? stack1 : "")
    + ((stack1 = (lookupProperty(helpers,"ifCond")||(depth0 && lookupProperty(depth0,"ifCond"))||alias2).call(alias1,(depth0 != null ? lookupProperty(depth0,"fileType") : depth0),"==","docx",{"name":"ifCond","hash":{},"fn":container.program(109, data, 0),"inverse":container.noop,"data":data,"loc":{"start":{"line":501,"column":24},"end":{"line":515,"column":35}}})) != null ? stack1 : "")
    + ((stack1 = (lookupProperty(helpers,"ifCond")||(depth0 && lookupProperty(depth0,"ifCond"))||alias2).call(alias1,(depth0 != null ? lookupProperty(depth0,"fileType") : depth0),"==","xls",{"name":"ifCond","hash":{},"fn":container.program(111, data, 0),"inverse":container.noop,"data":data,"loc":{"start":{"line":516,"column":24},"end":{"line":530,"column":35}}})) != null ? stack1 : "");
},"107":function(container,depth0,helpers,partials,data) {
    var stack1, alias1=container.escapeExpression, alias2=depth0 != null ? depth0 : (container.nullContext || {}), alias3=container.hooks.helperMissing, lookupProperty = container.lookupProperty || function(parent, propertyName) {
        if (Object.prototype.hasOwnProperty.call(parent, propertyName)) {
          return parent[propertyName];
        }
        return undefined
    };

  return "                          <span class=\"qld__search__result-type-name\">\n                            <svg\n                              class=\"qld__icon\"\n                              aria-hidden=\"true\"\n                              xmlns=\"http://www.w3.org/2000/svg\"\n                            >\n                              <use\n                                href=\""
    + alias1(container.lambda(((stack1 = ((stack1 = ((stack1 = ((stack1 = (data && lookupProperty(data,"root"))) && lookupProperty(stack1,"site"))) && lookupProperty(stack1,"metadata"))) && lookupProperty(stack1,"coreSiteIcons"))) && lookupProperty(stack1,"value")), depth0))
    + "#document-pdf\"\n                              ></use>\n                            </svg>\n                            Document\n                          </span>\n                          <span class=\"qld__tag qld__tag--info\">"
    + alias1((lookupProperty(helpers,"toUpperCase")||(depth0 && lookupProperty(depth0,"toUpperCase"))||alias3).call(alias2,(depth0 != null ? lookupProperty(depth0,"fileType") : depth0),{"name":"toUpperCase","hash":{},"data":data,"loc":{"start":{"line":499,"column":64},"end":{"line":499,"column":88}}}))
    + " "
    + alias1((lookupProperty(helpers,"sizeFormat")||(depth0 && lookupProperty(depth0,"sizeFormat"))||alias3).call(alias2,(depth0 != null ? lookupProperty(depth0,"fileSize") : depth0),{"name":"sizeFormat","hash":{},"data":data,"loc":{"start":{"line":499,"column":89},"end":{"line":499,"column":112}}}))
    + "</span>\n";
},"109":function(container,depth0,helpers,partials,data) {
    var stack1, alias1=container.escapeExpression, alias2=depth0 != null ? depth0 : (container.nullContext || {}), alias3=container.hooks.helperMissing, lookupProperty = container.lookupProperty || function(parent, propertyName) {
        if (Object.prototype.hasOwnProperty.call(parent, propertyName)) {
          return parent[propertyName];
        }
        return undefined
    };

  return "                          <span class=\"qld__search__result-type-name\">\n                            <svg\n                              class=\"qld__icon\"\n                              aria-hidden=\"true\"\n                              xmlns=\"http://www.w3.org/2000/svg\"\n                            >\n                              <use\n                                href=\""
    + alias1(container.lambda(((stack1 = ((stack1 = ((stack1 = ((stack1 = (data && lookupProperty(data,"root"))) && lookupProperty(stack1,"site"))) && lookupProperty(stack1,"metadata"))) && lookupProperty(stack1,"coreSiteIcons"))) && lookupProperty(stack1,"value")), depth0))
    + "#document-word\"\n                              ></use>\n                            </svg>\n                            Document\n                          </span>\n                          <span class=\"qld__tag qld__tag--info\">"
    + alias1((lookupProperty(helpers,"toUpperCase")||(depth0 && lookupProperty(depth0,"toUpperCase"))||alias3).call(alias2,(depth0 != null ? lookupProperty(depth0,"fileType") : depth0),{"name":"toUpperCase","hash":{},"data":data,"loc":{"start":{"line":514,"column":64},"end":{"line":514,"column":88}}}))
    + " "
    + alias1((lookupProperty(helpers,"sizeFormat")||(depth0 && lookupProperty(depth0,"sizeFormat"))||alias3).call(alias2,(depth0 != null ? lookupProperty(depth0,"fileSize") : depth0),{"name":"sizeFormat","hash":{},"data":data,"loc":{"start":{"line":514,"column":89},"end":{"line":514,"column":112}}}))
    + "</span>\n";
},"111":function(container,depth0,helpers,partials,data) {
    var stack1, alias1=container.escapeExpression, alias2=depth0 != null ? depth0 : (container.nullContext || {}), alias3=container.hooks.helperMissing, lookupProperty = container.lookupProperty || function(parent, propertyName) {
        if (Object.prototype.hasOwnProperty.call(parent, propertyName)) {
          return parent[propertyName];
        }
        return undefined
    };

  return "                          <span class=\"qld__search__result-type-name\">\n                            <svg\n                              class=\"qld__icon\"\n                              aria-hidden=\"true\"\n                              xmlns=\"http://www.w3.org/2000/svg\"\n                            >\n                              <use\n                                href=\""
    + alias1(container.lambda(((stack1 = ((stack1 = ((stack1 = ((stack1 = (data && lookupProperty(data,"root"))) && lookupProperty(stack1,"site"))) && lookupProperty(stack1,"metadata"))) && lookupProperty(stack1,"coreSiteIcons"))) && lookupProperty(stack1,"value")), depth0))
    + "#document-spreadsheet\"\n                              ></use>\n                            </svg>\n                            Document\n                          </span>\n                          <span class=\"qld__tag qld__tag--info\">"
    + alias1((lookupProperty(helpers,"toUpperCase")||(depth0 && lookupProperty(depth0,"toUpperCase"))||alias3).call(alias2,(depth0 != null ? lookupProperty(depth0,"fileType") : depth0),{"name":"toUpperCase","hash":{},"data":data,"loc":{"start":{"line":529,"column":64},"end":{"line":529,"column":88}}}))
    + " "
    + alias1((lookupProperty(helpers,"sizeFormat")||(depth0 && lookupProperty(depth0,"sizeFormat"))||alias3).call(alias2,(depth0 != null ? lookupProperty(depth0,"fileSize") : depth0),{"name":"sizeFormat","hash":{},"data":data,"loc":{"start":{"line":529,"column":89},"end":{"line":529,"column":112}}}))
    + "</span>\n";
},"113":function(container,depth0,helpers,partials,data) {
    var stack1, lookupProperty = container.lookupProperty || function(parent, propertyName) {
        if (Object.prototype.hasOwnProperty.call(parent, propertyName)) {
          return parent[propertyName];
        }
        return undefined
    };

  return ((stack1 = (lookupProperty(helpers,"ifCond")||(depth0 && lookupProperty(depth0,"ifCond"))||container.hooks.helperMissing).call(depth0 != null ? depth0 : (container.nullContext || {}),(depth0 != null ? lookupProperty(depth0,"collection") : depth0),"contains","__facilities",{"name":"ifCond","hash":{},"fn":container.program(114, data, 0),"inverse":container.program(116, data, 0),"data":data,"loc":{"start":{"line":533,"column":24},"end":{"line":559,"column":35}}})) != null ? stack1 : "");
},"114":function(container,depth0,helpers,partials,data) {
    var stack1, lookupProperty = container.lookupProperty || function(parent, propertyName) {
        if (Object.prototype.hasOwnProperty.call(parent, propertyName)) {
          return parent[propertyName];
        }
        return undefined
    };

  return "                          <span class=\"qld__search__result-type-name\">\n                            <svg\n                              class=\"qld__icon\"\n                              aria-hidden=\"true\"\n                              xmlns=\"http://www.w3.org/2000/svg\"\n                            >\n                              <use\n                                href=\""
    + container.escapeExpression(container.lambda(((stack1 = ((stack1 = ((stack1 = ((stack1 = (data && lookupProperty(data,"root"))) && lookupProperty(stack1,"site"))) && lookupProperty(stack1,"metadata"))) && lookupProperty(stack1,"extendedSiteIcons"))) && lookupProperty(stack1,"value")), depth0))
    + "#hospital\"\n                              ></use>\n                            </svg>\n                            Hospital\n                          </span>\n";
},"116":function(container,depth0,helpers,partials,data) {
    var stack1, lookupProperty = container.lookupProperty || function(parent, propertyName) {
        if (Object.prototype.hasOwnProperty.call(parent, propertyName)) {
          return parent[propertyName];
        }
        return undefined
    };

  return "                          <span class=\"qld__search__result-type-name\">\n                            <svg\n                              class=\"qld__icon\"\n                              aria-hidden=\"true\"\n                              xmlns=\"http://www.w3.org/2000/svg\"\n                            >\n                              <use\n                                href=\""
    + container.escapeExpression(container.lambda(((stack1 = ((stack1 = ((stack1 = ((stack1 = (data && lookupProperty(data,"root"))) && lookupProperty(stack1,"site"))) && lookupProperty(stack1,"metadata"))) && lookupProperty(stack1,"extendedSiteIcons"))) && lookupProperty(stack1,"value")), depth0))
    + "#health_services\"\n                              ></use>\n                            </svg>\n                            Health Service\n                          </span>\n";
},"118":function(container,depth0,helpers,partials,data) {
    var stack1, lookupProperty = container.lookupProperty || function(parent, propertyName) {
        if (Object.prototype.hasOwnProperty.call(parent, propertyName)) {
          return parent[propertyName];
        }
        return undefined
    };

  return ((stack1 = (lookupProperty(helpers,"ifCond")||(depth0 && lookupProperty(depth0,"ifCond"))||container.hooks.helperMissing).call(depth0 != null ? depth0 : (container.nullContext || {}),((stack1 = (depth0 != null ? lookupProperty(depth0,"metaData") : depth0)) != null ? lookupProperty(stack1,"format") : stack1),"contains","video",{"name":"ifCond","hash":{},"fn":container.program(119, data, 0),"inverse":container.program(121, data, 0),"data":data,"loc":{"start":{"line":562,"column":24},"end":{"line":588,"column":35}}})) != null ? stack1 : "");
},"119":function(container,depth0,helpers,partials,data) {
    var stack1, lookupProperty = container.lookupProperty || function(parent, propertyName) {
        if (Object.prototype.hasOwnProperty.call(parent, propertyName)) {
          return parent[propertyName];
        }
        return undefined
    };

  return "                          <span class=\"qld__search__result-type-name\">\n                            <svg\n                              class=\"qld__icon\"\n                              aria-hidden=\"true\"\n                              xmlns=\"http://www.w3.org/2000/svg\"\n                            >\n                              <use\n                                href=\""
    + container.escapeExpression(container.lambda(((stack1 = ((stack1 = ((stack1 = ((stack1 = (data && lookupProperty(data,"root"))) && lookupProperty(stack1,"site"))) && lookupProperty(stack1,"metadata"))) && lookupProperty(stack1,"coreSiteIcons"))) && lookupProperty(stack1,"value")), depth0))
    + "#video\"\n                              ></use>\n                            </svg>\n                            Video\n                          </span>\n";
},"121":function(container,depth0,helpers,partials,data) {
    var stack1, lookupProperty = container.lookupProperty || function(parent, propertyName) {
        if (Object.prototype.hasOwnProperty.call(parent, propertyName)) {
          return parent[propertyName];
        }
        return undefined
    };

  return ((stack1 = (lookupProperty(helpers,"ifCond")||(depth0 && lookupProperty(depth0,"ifCond"))||container.hooks.helperMissing).call(depth0 != null ? depth0 : (container.nullContext || {}),((stack1 = (depth0 != null ? lookupProperty(depth0,"metaData") : depth0)) != null ? lookupProperty(stack1,"format") : stack1),"contains","audio",{"name":"ifCond","hash":{},"fn":container.program(122, data, 0),"inverse":container.noop,"data":data,"loc":{"start":{"line":575,"column":24},"end":{"line":588,"column":24}}})) != null ? stack1 : "");
},"122":function(container,depth0,helpers,partials,data) {
    var stack1, lookupProperty = container.lookupProperty || function(parent, propertyName) {
        if (Object.prototype.hasOwnProperty.call(parent, propertyName)) {
          return parent[propertyName];
        }
        return undefined
    };

  return "                          <span class=\"qld__search__result-type-name\">\n                            <svg\n                              class=\"qld__icon\"\n                              aria-hidden=\"true\"\n                              xmlns=\"http://www.w3.org/2000/svg\"\n                            >\n                              <use\n                                href=\""
    + container.escapeExpression(container.lambda(((stack1 = ((stack1 = ((stack1 = ((stack1 = (data && lookupProperty(data,"root"))) && lookupProperty(stack1,"site"))) && lookupProperty(stack1,"metadata"))) && lookupProperty(stack1,"coreSiteIcons"))) && lookupProperty(stack1,"value")), depth0))
    + "#audio\"\n                              ></use>\n                            </svg>\n                            Audio\n                          </span>\n                        ";
},"124":function(container,depth0,helpers,partials,data) {
    var stack1, alias1=depth0 != null ? depth0 : (container.nullContext || {}), lookupProperty = container.lookupProperty || function(parent, propertyName) {
        if (Object.prototype.hasOwnProperty.call(parent, propertyName)) {
          return parent[propertyName];
        }
        return undefined
    };

  return "                      "
    + ((stack1 = lookupProperty(helpers,"if").call(alias1,((stack1 = (depth0 != null ? lookupProperty(depth0,"listMetadata") : depth0)) != null ? lookupProperty(stack1,"building") : stack1),{"name":"if","hash":{},"fn":container.program(125, data, 0),"inverse":container.noop,"data":data,"loc":{"start":{"line":594,"column":22},"end":{"line":594,"column":88}}})) != null ? stack1 : "")
    + "\n"
    + ((stack1 = lookupProperty(helpers,"if").call(alias1,((stack1 = (depth0 != null ? lookupProperty(depth0,"listMetadata") : depth0)) != null ? lookupProperty(stack1,"physicalAddressStreet") : stack1),{"name":"if","hash":{},"fn":container.program(127, data, 0),"inverse":container.noop,"data":data,"loc":{"start":{"line":595,"column":22},"end":{"line":597,"column":29}}})) != null ? stack1 : "")
    + ((stack1 = lookupProperty(helpers,"if").call(alias1,((stack1 = (depth0 != null ? lookupProperty(depth0,"listMetadata") : depth0)) != null ? lookupProperty(stack1,"physicalAddressSuburb") : stack1),{"name":"if","hash":{},"fn":container.program(129, data, 0),"inverse":container.noop,"data":data,"loc":{"start":{"line":598,"column":22},"end":{"line":600,"column":29}}})) != null ? stack1 : "")
    + ((stack1 = lookupProperty(helpers,"if").call(alias1,((stack1 = (depth0 != null ? lookupProperty(depth0,"listMetadata") : depth0)) != null ? lookupProperty(stack1,"physicalAddressPostcode") : stack1),{"name":"if","hash":{},"fn":container.program(131, data, 0),"inverse":container.noop,"data":data,"loc":{"start":{"line":601,"column":22},"end":{"line":603,"column":29}}})) != null ? stack1 : "");
},"125":function(container,depth0,helpers,partials,data) {
    var stack1, lookupProperty = container.lookupProperty || function(parent, propertyName) {
        if (Object.prototype.hasOwnProperty.call(parent, propertyName)) {
          return parent[propertyName];
        }
        return undefined
    };

  return ((stack1 = container.lambda(((stack1 = (depth0 != null ? lookupProperty(depth0,"listMetadata") : depth0)) != null ? lookupProperty(stack1,"building") : stack1), depth0)) != null ? stack1 : "")
    + ",";
},"127":function(container,depth0,helpers,partials,data) {
    var stack1, lookupProperty = container.lookupProperty || function(parent, propertyName) {
        if (Object.prototype.hasOwnProperty.call(parent, propertyName)) {
          return parent[propertyName];
        }
        return undefined
    };

  return "                        "
    + ((stack1 = container.lambda(((stack1 = (depth0 != null ? lookupProperty(depth0,"listMetadata") : depth0)) != null ? lookupProperty(stack1,"physicalAddressStreet") : stack1), depth0)) != null ? stack1 : "")
    + "\n";
},"129":function(container,depth0,helpers,partials,data) {
    var stack1, lookupProperty = container.lookupProperty || function(parent, propertyName) {
        if (Object.prototype.hasOwnProperty.call(parent, propertyName)) {
          return parent[propertyName];
        }
        return undefined
    };

  return "                        , "
    + ((stack1 = container.lambda(((stack1 = (depth0 != null ? lookupProperty(depth0,"listMetadata") : depth0)) != null ? lookupProperty(stack1,"physicalAddressSuburb") : stack1), depth0)) != null ? stack1 : "")
    + "\n";
},"131":function(container,depth0,helpers,partials,data) {
    var stack1, lookupProperty = container.lookupProperty || function(parent, propertyName) {
        if (Object.prototype.hasOwnProperty.call(parent, propertyName)) {
          return parent[propertyName];
        }
        return undefined
    };

  return "                        , "
    + ((stack1 = container.lambda(((stack1 = (depth0 != null ? lookupProperty(depth0,"listMetadata") : depth0)) != null ? lookupProperty(stack1,"physicalAddressPostcode") : stack1), depth0)) != null ? stack1 : "")
    + "\n";
},"133":function(container,depth0,helpers,partials,data) {
    var stack1, lookupProperty = container.lookupProperty || function(parent, propertyName) {
        if (Object.prototype.hasOwnProperty.call(parent, propertyName)) {
          return parent[propertyName];
        }
        return undefined
    };

  return ((stack1 = (lookupProperty(helpers,"ifCond")||(depth0 && lookupProperty(depth0,"ifCond"))||container.hooks.helperMissing).call(depth0 != null ? depth0 : (container.nullContext || {}),(depth0 != null ? lookupProperty(depth0,"collection") : depth0),"contains","__service-locations",{"name":"ifCond","hash":{},"fn":container.program(134, data, 0),"inverse":container.program(141, data, 0),"data":data,"loc":{"start":{"line":605,"column":22},"end":{"line":621,"column":33}}})) != null ? stack1 : "");
},"134":function(container,depth0,helpers,partials,data) {
    var stack1, alias1=depth0 != null ? depth0 : (container.nullContext || {}), lookupProperty = container.lookupProperty || function(parent, propertyName) {
        if (Object.prototype.hasOwnProperty.call(parent, propertyName)) {
          return parent[propertyName];
        }
        return undefined
    };

  return "                        "
    + ((stack1 = lookupProperty(helpers,"if").call(alias1,((stack1 = (depth0 != null ? lookupProperty(depth0,"listMetadata") : depth0)) != null ? lookupProperty(stack1,"building") : stack1),{"name":"if","hash":{},"fn":container.program(125, data, 0),"inverse":container.noop,"data":data,"loc":{"start":{"line":606,"column":24},"end":{"line":606,"column":90}}})) != null ? stack1 : "")
    + "\n"
    + ((stack1 = lookupProperty(helpers,"if").call(alias1,((stack1 = (depth0 != null ? lookupProperty(depth0,"listMetadata") : depth0)) != null ? lookupProperty(stack1,"physicalAddressStreet") : stack1),{"name":"if","hash":{},"fn":container.program(135, data, 0),"inverse":container.noop,"data":data,"loc":{"start":{"line":607,"column":24},"end":{"line":609,"column":31}}})) != null ? stack1 : "")
    + ((stack1 = lookupProperty(helpers,"if").call(alias1,((stack1 = (depth0 != null ? lookupProperty(depth0,"listMetadata") : depth0)) != null ? lookupProperty(stack1,"physicalAddressSuburb") : stack1),{"name":"if","hash":{},"fn":container.program(137, data, 0),"inverse":container.noop,"data":data,"loc":{"start":{"line":610,"column":24},"end":{"line":612,"column":31}}})) != null ? stack1 : "")
    + ((stack1 = lookupProperty(helpers,"if").call(alias1,((stack1 = (depth0 != null ? lookupProperty(depth0,"listMetadata") : depth0)) != null ? lookupProperty(stack1,"physicalAddressPostcode") : stack1),{"name":"if","hash":{},"fn":container.program(139, data, 0),"inverse":container.noop,"data":data,"loc":{"start":{"line":613,"column":24},"end":{"line":615,"column":31}}})) != null ? stack1 : "");
},"135":function(container,depth0,helpers,partials,data) {
    var stack1, lookupProperty = container.lookupProperty || function(parent, propertyName) {
        if (Object.prototype.hasOwnProperty.call(parent, propertyName)) {
          return parent[propertyName];
        }
        return undefined
    };

  return "                          "
    + ((stack1 = container.lambda(((stack1 = (depth0 != null ? lookupProperty(depth0,"listMetadata") : depth0)) != null ? lookupProperty(stack1,"physicalAddressStreet") : stack1), depth0)) != null ? stack1 : "")
    + "\n";
},"137":function(container,depth0,helpers,partials,data) {
    var stack1, lookupProperty = container.lookupProperty || function(parent, propertyName) {
        if (Object.prototype.hasOwnProperty.call(parent, propertyName)) {
          return parent[propertyName];
        }
        return undefined
    };

  return "                          , "
    + ((stack1 = container.lambda(((stack1 = (depth0 != null ? lookupProperty(depth0,"listMetadata") : depth0)) != null ? lookupProperty(stack1,"physicalAddressSuburb") : stack1), depth0)) != null ? stack1 : "")
    + "\n";
},"139":function(container,depth0,helpers,partials,data) {
    var stack1, lookupProperty = container.lookupProperty || function(parent, propertyName) {
        if (Object.prototype.hasOwnProperty.call(parent, propertyName)) {
          return parent[propertyName];
        }
        return undefined
    };

  return "                          , "
    + ((stack1 = container.lambda(((stack1 = (depth0 != null ? lookupProperty(depth0,"listMetadata") : depth0)) != null ? lookupProperty(stack1,"physicalAddressPostcode") : stack1), depth0)) != null ? stack1 : "")
    + "\n";
},"141":function(container,depth0,helpers,partials,data) {
    var stack1, alias1=depth0 != null ? depth0 : (container.nullContext || {}), lookupProperty = container.lookupProperty || function(parent, propertyName) {
        if (Object.prototype.hasOwnProperty.call(parent, propertyName)) {
          return parent[propertyName];
        }
        return undefined
    };

  return ((stack1 = lookupProperty(helpers,"if").call(alias1,((stack1 = (depth0 != null ? lookupProperty(depth0,"listMetadata") : depth0)) != null ? lookupProperty(stack1,"d") : stack1),{"name":"if","hash":{},"fn":container.program(142, data, 0),"inverse":container.noop,"data":data,"loc":{"start":{"line":617,"column":24},"end":{"line":619,"column":31}}})) != null ? stack1 : "")
    + "                        "
    + ((stack1 = (lookupProperty(helpers,"charMax")||(depth0 && lookupProperty(depth0,"charMax"))||container.hooks.helperMissing).call(alias1,(depth0 != null ? lookupProperty(depth0,"summary") : depth0),"160",{"name":"charMax","hash":{},"data":data,"loc":{"start":{"line":620,"column":24},"end":{"line":620,"column":51}}})) != null ? stack1 : "")
    + "\n";
},"142":function(container,depth0,helpers,partials,data) {
    var stack1, lookupProperty = container.lookupProperty || function(parent, propertyName) {
        if (Object.prototype.hasOwnProperty.call(parent, propertyName)) {
          return parent[propertyName];
        }
        return undefined
    };

  return "                          <span class=\"qld__search__result-date\">"
    + container.escapeExpression((lookupProperty(helpers,"formatDate")||(depth0 && lookupProperty(depth0,"formatDate"))||container.hooks.helperMissing).call(depth0 != null ? depth0 : (container.nullContext || {}),((stack1 = ((stack1 = (depth0 != null ? lookupProperty(depth0,"listMetadata") : depth0)) != null ? lookupProperty(stack1,"d") : stack1)) != null ? lookupProperty(stack1,"0") : stack1),"j F Y",{"name":"formatDate","hash":{},"data":data,"loc":{"start":{"line":618,"column":65},"end":{"line":618,"column":106}}}))
    + " —</span>\n";
},"144":function(container,depth0,helpers,partials,data) {
    var stack1, alias1=container.lambda, alias2=container.escapeExpression, lookupProperty = container.lookupProperty || function(parent, propertyName) {
        if (Object.prototype.hasOwnProperty.call(parent, propertyName)) {
          return parent[propertyName];
        }
        return undefined
    };

  return "          <div class=\"qld__search__results qld__search__results--no-results\">\n            <div class=\"qld__abstract\">\n              Did you mean\n              <a href=\""
    + alias2(alias1(((stack1 = (depth0 != null ? lookupProperty(depth0,"spell") : depth0)) != null ? lookupProperty(stack1,"url") : stack1), depth0))
    + "\">'"
    + alias2(alias1(((stack1 = (depth0 != null ? lookupProperty(depth0,"spell") : depth0)) != null ? lookupProperty(stack1,"text") : stack1), depth0))
    + "'</a>\n            </div>\n            <h2 class=\"qld__display-lg\">\n              <span>Our search for</span>\n              <span class=\"qld__search__info-query-term\">'"
    + alias2((lookupProperty(helpers,"renderEncoded")||(depth0 && lookupProperty(depth0,"renderEncoded"))||container.hooks.helperMissing).call(depth0 != null ? depth0 : (container.nullContext || {}),((stack1 = ((stack1 = (depth0 != null ? lookupProperty(depth0,"resultsPage") : depth0)) != null ? lookupProperty(stack1,"question") : stack1)) != null ? lookupProperty(stack1,"query") : stack1),{"name":"renderEncoded","hash":{},"data":data,"loc":{"start":{"line":638,"column":58},"end":{"line":638,"column":102}}}))
    + "'</span>\n              didn't return any results.\n            </h2>\n            <p class=\"qld__abstract\">You could try:</p>\n            <ul class=\"qld__search-link-list qld__link-list\">\n              <li>Check the spelling of your keywords.</li>\n              <li>Searching again using other words</li>\n              <li>Using fewer keywords.</li>\n            </ul>\n          </div>\n";
},"146":function(container,depth0,helpers,partials,data) {
    var stack1, lookupProperty = container.lookupProperty || function(parent, propertyName) {
        if (Object.prototype.hasOwnProperty.call(parent, propertyName)) {
          return parent[propertyName];
        }
        return undefined
    };

  return "          <nav\n            class=\"text-center hidden-print qld__search-pagination\"\n            aria-label=\"pagination\"\n          >\n            <h2 class=\"sr-only\">Pagination</h2>\n            <ul class=\"qld__search-pagination__list\">\n"
    + ((stack1 = lookupProperty(helpers,"each").call(depth0 != null ? depth0 : (container.nullContext || {}),((stack1 = (depth0 != null ? lookupProperty(depth0,"resultsPage") : depth0)) != null ? lookupProperty(stack1,"pagination") : stack1),{"name":"each","hash":{},"fn":container.program(147, data, 0),"inverse":container.noop,"data":data,"loc":{"start":{"line":657,"column":14},"end":{"line":739,"column":23}}})) != null ? stack1 : "")
    + "            </ul>\n          </nav>\n";
},"147":function(container,depth0,helpers,partials,data) {
    var stack1, alias1=depth0 != null ? depth0 : (container.nullContext || {}), alias2=container.hooks.helperMissing, lookupProperty = container.lookupProperty || function(parent, propertyName) {
        if (Object.prototype.hasOwnProperty.call(parent, propertyName)) {
          return parent[propertyName];
        }
        return undefined
    };

  return ((stack1 = (lookupProperty(helpers,"ifCond")||(depth0 && lookupProperty(depth0,"ifCond"))||alias2).call(alias1,(depth0 != null ? lookupProperty(depth0,"linkType") : depth0),"===","last",{"name":"ifCond","hash":{},"fn":container.program(148, data, 0),"inverse":container.noop,"data":data,"loc":{"start":{"line":658,"column":16},"end":{"line":670,"column":27}}})) != null ? stack1 : "")
    + "\n"
    + ((stack1 = (lookupProperty(helpers,"ifCond")||(depth0 && lookupProperty(depth0,"ifCond"))||alias2).call(alias1,(depth0 != null ? lookupProperty(depth0,"linkType") : depth0),"===","prev",{"name":"ifCond","hash":{},"fn":container.program(150, data, 0),"inverse":container.noop,"data":data,"loc":{"start":{"line":672,"column":16},"end":{"line":690,"column":27}}})) != null ? stack1 : "")
    + "\n"
    + ((stack1 = lookupProperty(helpers,"if").call(alias1,(depth0 != null ? lookupProperty(depth0,"label") : depth0),{"name":"if","hash":{},"fn":container.program(152, data, 0),"inverse":container.noop,"data":data,"loc":{"start":{"line":692,"column":16},"end":{"line":703,"column":23}}})) != null ? stack1 : "")
    + "\n"
    + ((stack1 = (lookupProperty(helpers,"ifCond")||(depth0 && lookupProperty(depth0,"ifCond"))||alias2).call(alias1,(depth0 != null ? lookupProperty(depth0,"linkType") : depth0),"===","next",{"name":"ifCond","hash":{},"fn":container.program(155, data, 0),"inverse":container.noop,"data":data,"loc":{"start":{"line":705,"column":16},"end":{"line":723,"column":27}}})) != null ? stack1 : "")
    + "                </li>\n\n"
    + ((stack1 = (lookupProperty(helpers,"ifCond")||(depth0 && lookupProperty(depth0,"ifCond"))||alias2).call(alias1,(depth0 != null ? lookupProperty(depth0,"linkType") : depth0),"===","first",{"name":"ifCond","hash":{},"fn":container.program(157, data, 0),"inverse":container.noop,"data":data,"loc":{"start":{"line":726,"column":16},"end":{"line":738,"column":27}}})) != null ? stack1 : "");
},"148":function(container,depth0,helpers,partials,data) {
    var stack1, lookupProperty = container.lookupProperty || function(parent, propertyName) {
        if (Object.prototype.hasOwnProperty.call(parent, propertyName)) {
          return parent[propertyName];
        }
        return undefined
    };

  return "                  <li class=\"ellipsis\">\n                    <svg\n                      class=\"qld__icon qld__icon--lg\"\n                      xmlns=\"http://www.w3.org/2000/svg\"\n                      aria-hidden=\"true\"\n                    >\n                      <use\n                        href=\""
    + container.escapeExpression(container.lambda(((stack1 = ((stack1 = ((stack1 = ((stack1 = (data && lookupProperty(data,"root"))) && lookupProperty(stack1,"site"))) && lookupProperty(stack1,"metadata"))) && lookupProperty(stack1,"coreSiteIcons"))) && lookupProperty(stack1,"value")), depth0))
    + "#more-horizontal\"\n                      ></use>\n                    </svg>\n                  </li>\n";
},"150":function(container,depth0,helpers,partials,data) {
    var stack1, helper, lookupProperty = container.lookupProperty || function(parent, propertyName) {
        if (Object.prototype.hasOwnProperty.call(parent, propertyName)) {
          return parent[propertyName];
        }
        return undefined
    };

  return "                  <li class=\"prev\">\n                  <a\n                    href=\""
    + ((stack1 = ((helper = (helper = lookupProperty(helpers,"url") || (depth0 != null ? lookupProperty(depth0,"url") : depth0)) != null ? helper : container.hooks.helperMissing),(typeof helper === "function" ? helper.call(depth0 != null ? depth0 : (container.nullContext || {}),{"name":"url","hash":{},"data":data,"loc":{"start":{"line":675,"column":26},"end":{"line":675,"column":37}}}) : helper))) != null ? stack1 : "")
    + "\"\n                    rel=\"prev\"\n                    aria-label=\"Previous page of results\"\n                  >\n                    <svg\n                      class=\"qld__icon qld__icon--sm\"\n                      xmlns=\"http://www.w3.org/2000/svg\"\n                      aria-hidden=\"true\"\n                    >\n                      <use\n                        href=\""
    + container.escapeExpression(container.lambda(((stack1 = ((stack1 = ((stack1 = ((stack1 = (data && lookupProperty(data,"root"))) && lookupProperty(stack1,"site"))) && lookupProperty(stack1,"metadata"))) && lookupProperty(stack1,"coreSiteIcons"))) && lookupProperty(stack1,"value")), depth0))
    + "#arrow-left\"\n                      ></use>\n                    </svg>\n                    <span>Back</span>\n                  </a>\n";
},"152":function(container,depth0,helpers,partials,data) {
    var stack1, helper, alias1=depth0 != null ? depth0 : (container.nullContext || {}), alias2=container.hooks.helperMissing, alias3="function", alias4=container.escapeExpression, lookupProperty = container.lookupProperty || function(parent, propertyName) {
        if (Object.prototype.hasOwnProperty.call(parent, propertyName)) {
          return parent[propertyName];
        }
        return undefined
    };

  return "                  <li\n                    class=\"\n                      "
    + alias4(((helper = (helper = lookupProperty(helpers,"linkType") || (depth0 != null ? lookupProperty(depth0,"linkType") : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"linkType","hash":{},"data":data,"loc":{"start":{"line":695,"column":22},"end":{"line":695,"column":36}}}) : helper)))
    + "\n"
    + ((stack1 = lookupProperty(helpers,"if").call(alias1,(depth0 != null ? lookupProperty(depth0,"isCurrent") : depth0),{"name":"if","hash":{},"fn":container.program(153, data, 0),"inverse":container.noop,"data":data,"loc":{"start":{"line":696,"column":22},"end":{"line":698,"column":29}}})) != null ? stack1 : "")
    + "                    \"\n                  >\n                    <a href=\""
    + ((stack1 = ((helper = (helper = lookupProperty(helpers,"url") || (depth0 != null ? lookupProperty(depth0,"url") : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"url","hash":{},"data":data,"loc":{"start":{"line":701,"column":29},"end":{"line":701,"column":40}}}) : helper))) != null ? stack1 : "")
    + "\" aria-current=\"page\">"
    + alias4(((helper = (helper = lookupProperty(helpers,"label") || (depth0 != null ? lookupProperty(depth0,"label") : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"label","hash":{},"data":data,"loc":{"start":{"line":701,"column":62},"end":{"line":701,"column":73}}}) : helper)))
    + "</a>\n                  </li>\n";
},"153":function(container,depth0,helpers,partials,data) {
    return "                        active\n";
},"155":function(container,depth0,helpers,partials,data) {
    var stack1, helper, lookupProperty = container.lookupProperty || function(parent, propertyName) {
        if (Object.prototype.hasOwnProperty.call(parent, propertyName)) {
          return parent[propertyName];
        }
        return undefined
    };

  return "                  <li class=\"next\">\n                  <a\n                    href=\""
    + ((stack1 = ((helper = (helper = lookupProperty(helpers,"url") || (depth0 != null ? lookupProperty(depth0,"url") : depth0)) != null ? helper : container.hooks.helperMissing),(typeof helper === "function" ? helper.call(depth0 != null ? depth0 : (container.nullContext || {}),{"name":"url","hash":{},"data":data,"loc":{"start":{"line":708,"column":26},"end":{"line":708,"column":37}}}) : helper))) != null ? stack1 : "")
    + "\"\n                    rel=\"next\"\n                    aria-label=\"Next page of results\"\n                  >\n                    <span>Next</span>\n                    <svg\n                      class=\"qld__icon qld__icon--sm\"\n                      xmlns=\"http://www.w3.org/2000/svg\"\n                      aria-hidden=\"true\"\n                    >\n                      <use\n                        href=\""
    + container.escapeExpression(container.lambda(((stack1 = ((stack1 = ((stack1 = ((stack1 = (data && lookupProperty(data,"root"))) && lookupProperty(stack1,"site"))) && lookupProperty(stack1,"metadata"))) && lookupProperty(stack1,"coreSiteIcons"))) && lookupProperty(stack1,"value")), depth0))
    + "#arrow-right\"\n                      ></use>\n                    </svg>\n                  </a>\n";
},"157":function(container,depth0,helpers,partials,data) {
    var stack1, lookupProperty = container.lookupProperty || function(parent, propertyName) {
        if (Object.prototype.hasOwnProperty.call(parent, propertyName)) {
          return parent[propertyName];
        }
        return undefined
    };

  return "                  <li class=\"ellipsis\">\n                    <svg\n                      class=\"qld__icon qld__icon--sm\"\n                      xmlns=\"http://www.w3.org/2000/svg\"\n                      aria-hidden=\"true\"\n                    >\n                      <use\n                        href=\""
    + container.escapeExpression(container.lambda(((stack1 = ((stack1 = ((stack1 = ((stack1 = (data && lookupProperty(data,"root"))) && lookupProperty(stack1,"site"))) && lookupProperty(stack1,"metadata"))) && lookupProperty(stack1,"coreSiteIcons"))) && lookupProperty(stack1,"value")), depth0))
    + "#more-horizontal\"\n                      ></use>\n                    </svg>\n                  </li>\n";
},"compiler":[8,">= 4.3.0"],"main":function(container,depth0,helpers,partials,data,blockParams) {
    var stack1, alias1=depth0 != null ? depth0 : (container.nullContext || {}), alias2=container.hooks.helperMissing, alias3=container.lambda, alias4=container.escapeExpression, lookupProperty = container.lookupProperty || function(parent, propertyName) {
        if (Object.prototype.hasOwnProperty.call(parent, propertyName)) {
          return parent[propertyName];
        }
        return undefined
    };

  return "<!--@@ Banner @@-->\n<section\n  class=\"\n    qld__banner\n    qld__banner--search\n"
    + ((stack1 = (lookupProperty(helpers,"ifCond")||(depth0 && lookupProperty(depth0,"ifCond"))||alias2).call(alias1,((stack1 = ((stack1 = ((stack1 = (depth0 != null ? lookupProperty(depth0,"site") : depth0)) != null ? lookupProperty(stack1,"metadata") : stack1)) != null ? lookupProperty(stack1,"defaultBannerColour") : stack1)) != null ? lookupProperty(stack1,"value") : stack1),"==","light",{"name":"ifCond","hash":{},"fn":container.program(1, data, 0, blockParams),"inverse":container.noop,"data":data,"blockParams":blockParams,"loc":{"start":{"line":6,"column":4},"end":{"line":8,"column":15}}})) != null ? stack1 : "")
    + ((stack1 = (lookupProperty(helpers,"ifCond")||(depth0 && lookupProperty(depth0,"ifCond"))||alias2).call(alias1,((stack1 = ((stack1 = ((stack1 = (depth0 != null ? lookupProperty(depth0,"site") : depth0)) != null ? lookupProperty(stack1,"metadata") : stack1)) != null ? lookupProperty(stack1,"defaultBannerColour") : stack1)) != null ? lookupProperty(stack1,"value") : stack1),"==","alternate",{"name":"ifCond","hash":{},"fn":container.program(3, data, 0, blockParams),"inverse":container.noop,"data":data,"blockParams":blockParams,"loc":{"start":{"line":9,"column":4},"end":{"line":11,"column":15}}})) != null ? stack1 : "")
    + ((stack1 = (lookupProperty(helpers,"ifCond")||(depth0 && lookupProperty(depth0,"ifCond"))||alias2).call(alias1,((stack1 = ((stack1 = ((stack1 = (depth0 != null ? lookupProperty(depth0,"site") : depth0)) != null ? lookupProperty(stack1,"metadata") : stack1)) != null ? lookupProperty(stack1,"defaultBannerColour") : stack1)) != null ? lookupProperty(stack1,"value") : stack1),"==","dark",{"name":"ifCond","hash":{},"fn":container.program(5, data, 0, blockParams),"inverse":container.noop,"data":data,"blockParams":blockParams,"loc":{"start":{"line":12,"column":4},"end":{"line":14,"column":15}}})) != null ? stack1 : "")
    + ((stack1 = (lookupProperty(helpers,"ifCond")||(depth0 && lookupProperty(depth0,"ifCond"))||alias2).call(alias1,((stack1 = ((stack1 = ((stack1 = (depth0 != null ? lookupProperty(depth0,"site") : depth0)) != null ? lookupProperty(stack1,"metadata") : stack1)) != null ? lookupProperty(stack1,"defaultBannerColour") : stack1)) != null ? lookupProperty(stack1,"value") : stack1),"==","dark-alternate",{"name":"ifCond","hash":{},"fn":container.program(7, data, 0, blockParams),"inverse":container.noop,"data":data,"blockParams":blockParams,"loc":{"start":{"line":15,"column":4},"end":{"line":17,"column":15}}})) != null ? stack1 : "")
    + ((stack1 = (lookupProperty(helpers,"ifCond")||(depth0 && lookupProperty(depth0,"ifCond"))||alias2).call(alias1,((stack1 = ((stack1 = ((stack1 = ((stack1 = (depth0 != null ? lookupProperty(depth0,"current") : depth0)) != null ? lookupProperty(stack1,"data") : stack1)) != null ? lookupProperty(stack1,"metadata") : stack1)) != null ? lookupProperty(stack1,"displayBreadcrumbs") : stack1)) != null ? lookupProperty(stack1,"value") : stack1),"==","true",{"name":"ifCond","hash":{},"fn":container.program(9, data, 0, blockParams),"inverse":container.noop,"data":data,"blockParams":blockParams,"loc":{"start":{"line":18,"column":4},"end":{"line":20,"column":15}}})) != null ? stack1 : "")
    + "  \"\n"
    + ((stack1 = (lookupProperty(helpers,"ifCond")||(depth0 && lookupProperty(depth0,"ifCond"))||alias2).call(alias1,((stack1 = ((stack1 = ((stack1 = (depth0 != null ? lookupProperty(depth0,"site") : depth0)) != null ? lookupProperty(stack1,"metadata") : stack1)) != null ? lookupProperty(stack1,"defaultBannerType") : stack1)) != null ? lookupProperty(stack1,"value") : stack1),"==","texture",{"name":"ifCond","hash":{},"fn":container.program(11, data, 0, blockParams),"inverse":container.noop,"data":data,"blockParams":blockParams,"loc":{"start":{"line":22,"column":2},"end":{"line":24,"column":13}}})) != null ? stack1 : "")
    + ">\n  <!--@@ Breadcrumbs - Mobile @@-->\n"
    + ((stack1 = (lookupProperty(helpers,"ifCond")||(depth0 && lookupProperty(depth0,"ifCond"))||alias2).call(alias1,((stack1 = ((stack1 = ((stack1 = ((stack1 = (depth0 != null ? lookupProperty(depth0,"current") : depth0)) != null ? lookupProperty(stack1,"data") : stack1)) != null ? lookupProperty(stack1,"metadata") : stack1)) != null ? lookupProperty(stack1,"displayBreadcrumbs") : stack1)) != null ? lookupProperty(stack1,"value") : stack1),"==","true",{"name":"ifCond","hash":{},"fn":container.program(13, data, 0, blockParams),"inverse":container.noop,"data":data,"blockParams":blockParams,"loc":{"start":{"line":27,"column":2},"end":{"line":69,"column":13}}})) != null ? stack1 : "")
    + "\n  <div class=\"container-fluid\">\n    <div class=\"qld__banner__wrapper\">\n\n      <div class=\"qld__banner__main row\">\n\n        <div class=\"qld__banner__content col-xs-12 col-md-12 col-lg-4\">\n          <!--@@ Breadcrumbs - Tablet @@-->\n"
    + ((stack1 = (lookupProperty(helpers,"ifCond")||(depth0 && lookupProperty(depth0,"ifCond"))||alias2).call(alias1,((stack1 = ((stack1 = ((stack1 = ((stack1 = (depth0 != null ? lookupProperty(depth0,"current") : depth0)) != null ? lookupProperty(stack1,"data") : stack1)) != null ? lookupProperty(stack1,"metadata") : stack1)) != null ? lookupProperty(stack1,"displayBreadcrumbs") : stack1)) != null ? lookupProperty(stack1,"value") : stack1),"==","true",{"name":"ifCond","hash":{},"fn":container.program(28, data, 0, blockParams),"inverse":container.noop,"data":data,"blockParams":blockParams,"loc":{"start":{"line":78,"column":10},"end":{"line":121,"column":21}}})) != null ? stack1 : "")
    + "          <!--@@ Breadcrumbs - Desktop @@-->\n"
    + ((stack1 = (lookupProperty(helpers,"ifCond")||(depth0 && lookupProperty(depth0,"ifCond"))||alias2).call(alias1,((stack1 = ((stack1 = ((stack1 = ((stack1 = (depth0 != null ? lookupProperty(depth0,"current") : depth0)) != null ? lookupProperty(stack1,"data") : stack1)) != null ? lookupProperty(stack1,"metadata") : stack1)) != null ? lookupProperty(stack1,"displayBreadcrumbs") : stack1)) != null ? lookupProperty(stack1,"value") : stack1),"==","true",{"name":"ifCond","hash":{},"fn":container.program(43, data, 0, blockParams),"inverse":container.noop,"data":data,"blockParams":blockParams,"loc":{"start":{"line":123,"column":10},"end":{"line":174,"column":21}}})) != null ? stack1 : "")
    + "\n          <!--@@ Heading(s) @@-->\n          <h1>Search Results</h1>\n\n          <!--@@ Abstract @@-->\n"
    + ((stack1 = lookupProperty(helpers,"if").call(alias1,((stack1 = ((stack1 = (depth0 != null ? lookupProperty(depth0,"metadata") : depth0)) != null ? lookupProperty(stack1,"abstract") : stack1)) != null ? lookupProperty(stack1,"value") : stack1),{"name":"if","hash":{},"fn":container.program(57, data, 0, blockParams),"inverse":container.noop,"data":data,"blockParams":blockParams,"loc":{"start":{"line":180,"column":10},"end":{"line":184,"column":17}}})) != null ? stack1 : "")
    + "\n        </div>\n        <div class=\"qld__banner__search col-xs-12 col-md-12 col-lg-8\">\n          <div class=\"qld__search-form--wrapper\">\n            <form\n              id=\"search-form-global-basic\"\n              class=\"qld__search-form\"\n              role=\"search\"\n              aria-label=\"sitewide\"\n              action=\""
    + alias4(alias3(((stack1 = ((stack1 = ((stack1 = (depth0 != null ? lookupProperty(depth0,"site") : depth0)) != null ? lookupProperty(stack1,"metadata") : stack1)) != null ? lookupProperty(stack1,"siteSearchUrl") : stack1)) != null ? lookupProperty(stack1,"value") : stack1), depth0))
    + "\"\n            >\n              <div class=\"qld__search-form__inner\">\n                <svg\n                  class=\"qld__icon qld__icon--sm qld__search-form__inner-icon\"\n                  xmlns=\"http://www.w3.org/2000/svg\"\n                  aria-hidden=\"true\"\n                >\n                  <use\n                    href=\""
    + alias4(alias3(((stack1 = ((stack1 = ((stack1 = ((stack1 = (data && lookupProperty(data,"root"))) && lookupProperty(stack1,"site"))) && lookupProperty(stack1,"metadata"))) && lookupProperty(stack1,"coreSiteIcons"))) && lookupProperty(stack1,"value")), depth0))
    + "#search\"\n                  ></use>\n                </svg>\n                <input\n                  id=\"search-input-global-basic-query\"\n                  class=\"qld__text-input data-hj-allow\"\n                  type=\"search\"\n                  name=\"query\"\n                  aria-expanded=\"false\"\n                  autocomplete=\"off\"\n                  disabled=\"true\"\n                  value=\""
    + ((stack1 = (lookupProperty(helpers,"ifCond")||(depth0 && lookupProperty(depth0,"ifCond"))||alias2).call(alias1,((stack1 = ((stack1 = (depth0 != null ? lookupProperty(depth0,"resultsPage") : depth0)) != null ? lookupProperty(stack1,"question") : stack1)) != null ? lookupProperty(stack1,"query") : stack1),"!==","!padrenull",{"name":"ifCond","hash":{},"fn":container.program(59, data, 0, blockParams),"inverse":container.noop,"data":data,"blockParams":blockParams,"loc":{"start":{"line":214,"column":25},"end":{"line":214,"column":207}}})) != null ? stack1 : "")
    + "\"\n                />\n                <input\n                  id=\"name\"\n                  class=\"qld__text-input--validation\"\n                  type=\"text\"\n                  name=\"name\"\n                  autocomplete=\"off\"\n                  tabindex=\"-1\"\n                />\n                <div class=\"qld__search-form__btn\">\n                  <button\n                    class=\"qld__btn qld__btn--search\"\n                    type=\"button\"\n                    aria-label=\"Search\"\n                    disabled=\"true\"\n                  >\n                    <span class=\"qld__btn__icon\">\n                      <svg\n                        class=\"qld__icon\"\n                        xmlns=\"http://www.w3.org/2000/svg\"\n                        aria-hidden=\"true\"\n                      >\n                        <use\n                          href=\""
    + alias4(alias3(((stack1 = ((stack1 = ((stack1 = ((stack1 = (data && lookupProperty(data,"root"))) && lookupProperty(stack1,"site"))) && lookupProperty(stack1,"metadata"))) && lookupProperty(stack1,"coreSiteIcons"))) && lookupProperty(stack1,"value")), depth0))
    + "#search\"\n                        ></use>\n                      </svg>\n                    </span>\n                    <span class=\"qld__btn__text\">Search</span>\n                  </button>\n                </div>\n              </div>\n            </form>\n          </div>\n        </div>\n      </div>\n    </div>\n  </div>\n</section>\n\n<section id=\"content\" class=\"qld__body qld__search\">\n  <div class=\"container-fluid\">\n    <div class=\"row\">\n      <div class=\"col-xs-12 col-md-12\">\n        <div class=\"qld__search__info\">\n          <div class=\"qld__search__info-query\">\n            <h2 class=\"qld__display-lg\">\n              Results\n"
    + ((stack1 = (lookupProperty(helpers,"ifCond")||(depth0 && lookupProperty(depth0,"ifCond"))||alias2).call(alias1,((stack1 = ((stack1 = (depth0 != null ? lookupProperty(depth0,"resultsPage") : depth0)) != null ? lookupProperty(stack1,"question") : stack1)) != null ? lookupProperty(stack1,"query") : stack1),"!==","",{"name":"ifCond","hash":{},"fn":container.program(64, data, 0, blockParams),"inverse":container.noop,"data":data,"blockParams":blockParams,"loc":{"start":{"line":262,"column":14},"end":{"line":268,"column":25}}})) != null ? stack1 : "")
    + "            </h2>\n          </div>\n          <div class=\"qld__search__info-inner\">\n            <div class=\"qld__search__info-summary\">\n              <span class=\"qld__search__info-summary-text\">Showing:</span>\n              <span class=\"qld__search__info-summary-start-end\">"
    + alias4(alias3(((stack1 = ((stack1 = (depth0 != null ? lookupProperty(depth0,"resultsPage") : depth0)) != null ? lookupProperty(stack1,"resultsSummary") : stack1)) != null ? lookupProperty(stack1,"currStart") : stack1), depth0))
    + " - "
    + alias4(alias3(((stack1 = ((stack1 = (depth0 != null ? lookupProperty(depth0,"resultsPage") : depth0)) != null ? lookupProperty(stack1,"resultsSummary") : stack1)) != null ? lookupProperty(stack1,"currEnd") : stack1), depth0))
    + " of</span>\n              <span class=\"qld__search__info-summary-matching\">"
    + alias4(alias3(((stack1 = ((stack1 = (depth0 != null ? lookupProperty(depth0,"resultsPage") : depth0)) != null ? lookupProperty(stack1,"resultsSummary") : stack1)) != null ? lookupProperty(stack1,"totalMatching") : stack1), depth0))
    + " results</span>\n            </div>\n\n            <div class=\"qld__search__sort\">\n              <label class=\"qld__search__sort-text\" for=\"search-sort\">\n                Sort by:\n              </label>\n              <select id=\"search-sort\" class=\"qld__select-control\" name=\"sort\">\n                <option value=\"\" selected=\"\">Relevance</option>\n                <option value=\"metafileName\">A-Z</option>\n                <option value=\"dmetafileName\">Z-A</option>\n                <option value=\"date\">Newest</option>\n                <option value=\"adate\">Oldest</option>\n              </select>\n            </div>\n          </div>\n        </div>\n        <div class=\"qld__search__results\">\n"
    + ((stack1 = lookupProperty(helpers,"if").call(alias1,((stack1 = (depth0 != null ? lookupProperty(depth0,"resultsPage") : depth0)) != null ? lookupProperty(stack1,"results") : stack1),{"name":"if","hash":{},"fn":container.program(67, data, 0, blockParams),"inverse":container.noop,"data":data,"blockParams":blockParams,"loc":{"start":{"line":293,"column":10},"end":{"line":627,"column":17}}})) != null ? stack1 : "")
    + "        </div>\n\n"
    + ((stack1 = (lookupProperty(helpers,"ifCond")||(depth0 && lookupProperty(depth0,"ifCond"))||alias2).call(alias1,((stack1 = ((stack1 = (depth0 != null ? lookupProperty(depth0,"resultsPage") : depth0)) != null ? lookupProperty(stack1,"resultsSummary") : stack1)) != null ? lookupProperty(stack1,"totalMatching") : stack1),"<","1",{"name":"ifCond","hash":{},"fn":container.program(144, data, 0, blockParams),"inverse":container.noop,"data":data,"blockParams":blockParams,"loc":{"start":{"line":630,"column":8},"end":{"line":648,"column":19}}})) != null ? stack1 : "")
    + "\n"
    + ((stack1 = (lookupProperty(helpers,"ifCond")||(depth0 && lookupProperty(depth0,"ifCond"))||alias2).call(alias1,((stack1 = ((stack1 = (depth0 != null ? lookupProperty(depth0,"resultsPage") : depth0)) != null ? lookupProperty(stack1,"resultsSummary") : stack1)) != null ? lookupProperty(stack1,"totalMatching") : stack1),">=","11",{"name":"ifCond","hash":{},"fn":container.program(146, data, 0, blockParams),"inverse":container.noop,"data":data,"blockParams":blockParams,"loc":{"start":{"line":650,"column":8},"end":{"line":742,"column":19}}})) != null ? stack1 : "")
    + "      </div>\n    </div>\n  </div>\n</section>\n";
},"useData":true,"useBlockParams":true}