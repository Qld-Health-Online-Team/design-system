{"1":function(container,depth0,helpers,partials,data,blockParams,depths) {
    var stack1, lookupProperty = container.lookupProperty || function(parent, propertyName) {
        if (Object.prototype.hasOwnProperty.call(parent, propertyName)) {
          return parent[propertyName];
        }
        return undefined
    };

  return ((stack1 = lookupProperty(helpers,"if").call(depth0 != null ? depth0 : (container.nullContext || {}),((stack1 = (depth0 != null ? lookupProperty(depth0,"code") : depth0)) != null ? lookupProperty(stack1,"value") : stack1),{"name":"if","hash":{},"fn":container.program(2, data, 0, blockParams, depths),"inverse":container.noop,"data":data,"loc":{"start":{"line":3,"column":4},"end":{"line":160,"column":11}}})) != null ? stack1 : "");
},"2":function(container,depth0,helpers,partials,data,blockParams,depths) {
    var stack1, alias1=depth0 != null ? depth0 : (container.nullContext || {}), alias2=container.hooks.helperMissing, lookupProperty = container.lookupProperty || function(parent, propertyName) {
        if (Object.prototype.hasOwnProperty.call(parent, propertyName)) {
          return parent[propertyName];
        }
        return undefined
    };

  return "    <section class=\"qld__body\">\r\n        <div class=\"container-fluid\">\r\n"
    + ((stack1 = (lookupProperty(helpers,"ifCond")||(depth0 && lookupProperty(depth0,"ifCond"))||alias2).call(alias1,((stack1 = (depth0 != null ? lookupProperty(depth0,"code_snippet_type") : depth0)) != null ? lookupProperty(stack1,"value") : stack1),"==","singleline",{"name":"ifCond","hash":{},"fn":container.program(3, data, 0, blockParams, depths),"inverse":container.noop,"data":data,"loc":{"start":{"line":6,"column":8},"end":{"line":38,"column":19}}})) != null ? stack1 : "")
    + "\r\n"
    + ((stack1 = (lookupProperty(helpers,"ifCond")||(depth0 && lookupProperty(depth0,"ifCond"))||alias2).call(alias1,((stack1 = (depth0 != null ? lookupProperty(depth0,"code_snippet_type") : depth0)) != null ? lookupProperty(stack1,"value") : stack1),"==","multiline",{"name":"ifCond","hash":{},"fn":container.program(9, data, 0, blockParams, depths),"inverse":container.noop,"data":data,"loc":{"start":{"line":40,"column":8},"end":{"line":157,"column":19}}})) != null ? stack1 : "")
    + "        </div>\r\n    </section>\r\n";
},"3":function(container,depth0,helpers,partials,data) {
    var stack1, lookupProperty = container.lookupProperty || function(parent, propertyName) {
        if (Object.prototype.hasOwnProperty.call(parent, propertyName)) {
          return parent[propertyName];
        }
        return undefined
    };

  return ((stack1 = (lookupProperty(helpers,"ifCond")||(depth0 && lookupProperty(depth0,"ifCond"))||container.hooks.helperMissing).call(depth0 != null ? depth0 : (container.nullContext || {}),((stack1 = (depth0 != null ? lookupProperty(depth0,"show_code") : depth0)) != null ? lookupProperty(stack1,"value") : stack1),"==","true",{"name":"ifCond","hash":{},"fn":container.program(4, data, 0),"inverse":container.noop,"data":data,"loc":{"start":{"line":7,"column":12},"end":{"line":37,"column":23}}})) != null ? stack1 : "");
},"4":function(container,depth0,helpers,partials,data) {
    var stack1, alias1=depth0 != null ? depth0 : (container.nullContext || {}), alias2=container.hooks.helperMissing, lookupProperty = container.lookupProperty || function(parent, propertyName) {
        if (Object.prototype.hasOwnProperty.call(parent, propertyName)) {
          return parent[propertyName];
        }
        return undefined
    };

  return "\r\n"
    + ((stack1 = (lookupProperty(helpers,"ifCond")||(depth0 && lookupProperty(depth0,"ifCond"))||alias2).call(alias1,((stack1 = ((stack1 = ((stack1 = ((stack1 = (data && lookupProperty(data,"root"))) && lookupProperty(stack1,"site"))) && lookupProperty(stack1,"metadata"))) && lookupProperty(stack1,"mainNavVerticalNav"))) && lookupProperty(stack1,"value")),"==","Yes",{"name":"ifCond","hash":{},"fn":container.program(5, data, 0),"inverse":container.noop,"data":data,"loc":{"start":{"line":9,"column":16},"end":{"line":12,"column":27}}})) != null ? stack1 : "")
    + "\r\n                \r\n                        <div class=\"qld__code singleline\">\r\n                            <code class=\"qld__code-body\">"
    + container.escapeExpression(container.lambda(((stack1 = (depth0 != null ? lookupProperty(depth0,"code") : depth0)) != null ? lookupProperty(stack1,"value") : stack1), depth0))
    + "</code>\r\n                            <button class=\"qld__btn qld__code-copy--button\" type=\"button\">\r\n                                <div class=\"clean\">\r\n                                    <i class=\"fa-light fa-copy\"></i><span class=\"qld__code-copy--button-text\">Copy</span>\r\n                                </div>\r\n                                <div class=\"dirty\">\r\n                                    <i class=\"fa-solid fa-circle-check\"></i><span class=\"qld__code-copy--button-text\">Copied</span>\r\n                                </div>\r\n                                <div class=\"qld__code-tooltip\">\r\n                                    <span class=\"clean\">Copy</span>\r\n                                    <span class=\"dirty\">Copied</span>\r\n                                </div>\r\n                            </button>\r\n                        </div>\r\n            \r\n\r\n                \r\n"
    + ((stack1 = (lookupProperty(helpers,"ifCond")||(depth0 && lookupProperty(depth0,"ifCond"))||alias2).call(alias1,((stack1 = ((stack1 = ((stack1 = ((stack1 = (data && lookupProperty(data,"root"))) && lookupProperty(stack1,"site"))) && lookupProperty(stack1,"metadata"))) && lookupProperty(stack1,"mainNavVerticalNav"))) && lookupProperty(stack1,"value")),"==","Yes",{"name":"ifCond","hash":{},"fn":container.program(7, data, 0),"inverse":container.noop,"data":data,"loc":{"start":{"line":33,"column":16},"end":{"line":36,"column":27}}})) != null ? stack1 : "");
},"5":function(container,depth0,helpers,partials,data) {
    return "                <section class=\"qld__body\">\r\n                    <div class=\"container-fluid\">\r\n";
},"7":function(container,depth0,helpers,partials,data) {
    return "                    </div>\r\n                </section>\r\n";
},"9":function(container,depth0,helpers,partials,data,blockParams,depths) {
    var stack1, alias1=depth0 != null ? depth0 : (container.nullContext || {}), alias2=container.hooks.helperMissing, lookupProperty = container.lookupProperty || function(parent, propertyName) {
        if (Object.prototype.hasOwnProperty.call(parent, propertyName)) {
          return parent[propertyName];
        }
        return undefined
    };

  return "        <div class=\"qld__code multiline "
    + ((stack1 = (lookupProperty(helpers,"ifCond")||(depth0 && lookupProperty(depth0,"ifCond"))||alias2).call(alias1,((stack1 = (depth0 != null ? lookupProperty(depth0,"show_more_button") : depth0)) != null ? lookupProperty(stack1,"value") : stack1),"==","true",{"name":"ifCond","hash":{},"fn":container.program(10, data, 0, blockParams, depths),"inverse":container.noop,"data":data,"loc":{"start":{"line":41,"column":40},"end":{"line":41,"column":106}}})) != null ? stack1 : "")
    + " "
    + ((stack1 = (lookupProperty(helpers,"ifCond")||(depth0 && lookupProperty(depth0,"ifCond"))||alias2).call(alias1,((stack1 = (depth0 != null ? lookupProperty(depth0,"show_preview") : depth0)) != null ? lookupProperty(stack1,"value") : stack1),"==","true",{"name":"ifCond","hash":{},"fn":container.program(12, data, 0, blockParams, depths),"inverse":container.noop,"data":data,"loc":{"start":{"line":41,"column":107},"end":{"line":41,"column":172}}})) != null ? stack1 : "")
    + "\" "
    + ((stack1 = (lookupProperty(helpers,"ifCond")||(depth0 && lookupProperty(depth0,"ifCond"))||alias2).call(alias1,((stack1 = ((stack1 = (depth0 != null ? lookupProperty(depth0,"width_pixels") : depth0)) != null ? lookupProperty(stack1,"value") : stack1)) != null ? lookupProperty(stack1,"length") : stack1),">",0,{"name":"ifCond","hash":{},"fn":container.program(14, data, 0, blockParams, depths),"inverse":container.noop,"data":data,"loc":{"start":{"line":41,"column":174},"end":{"line":41,"column":304}}})) != null ? stack1 : "")
    + ">\r\n"
    + ((stack1 = (lookupProperty(helpers,"ifCond")||(depth0 && lookupProperty(depth0,"ifCond"))||alias2).call(alias1,((stack1 = (depth0 != null ? lookupProperty(depth0,"show_preview") : depth0)) != null ? lookupProperty(stack1,"value") : stack1),"==","true",{"name":"ifCond","hash":{},"fn":container.program(16, data, 0, blockParams, depths),"inverse":container.noop,"data":data,"loc":{"start":{"line":42,"column":12},"end":{"line":70,"column":23}}})) != null ? stack1 : "")
    + ((stack1 = (lookupProperty(helpers,"ifCond")||(depth0 && lookupProperty(depth0,"ifCond"))||alias2).call(alias1,((stack1 = (depth0 != null ? lookupProperty(depth0,"show_code") : depth0)) != null ? lookupProperty(stack1,"value") : stack1),"==","true",{"name":"ifCond","hash":{},"fn":container.program(18, data, 0, blockParams, depths),"inverse":container.noop,"data":data,"loc":{"start":{"line":71,"column":12},"end":{"line":77,"column":23}}})) != null ? stack1 : "")
    + ((stack1 = (lookupProperty(helpers,"ifCond")||(depth0 && lookupProperty(depth0,"ifCond"))||alias2).call(alias1,((stack1 = (depth0 != null ? lookupProperty(depth0,"show_code") : depth0)) != null ? lookupProperty(stack1,"value") : stack1),"==","false",{"name":"ifCond","hash":{},"fn":container.program(21, data, 0, blockParams, depths),"inverse":container.program(36, data, 0, blockParams, depths),"data":data,"loc":{"start":{"line":78,"column":12},"end":{"line":152,"column":23}}})) != null ? stack1 : "")
    + ((stack1 = (lookupProperty(helpers,"ifCond")||(depth0 && lookupProperty(depth0,"ifCond"))||alias2).call(alias1,((stack1 = (depth0 != null ? lookupProperty(depth0,"show_code") : depth0)) != null ? lookupProperty(stack1,"value") : stack1),"==","true",{"name":"ifCond","hash":{},"fn":container.program(39, data, 0, blockParams, depths),"inverse":container.noop,"data":data,"loc":{"start":{"line":153,"column":12},"end":{"line":155,"column":23}}})) != null ? stack1 : "")
    + "        </div>\r\n";
},"10":function(container,depth0,helpers,partials,data) {
    return "show_less";
},"12":function(container,depth0,helpers,partials,data) {
    return "with-preview";
},"14":function(container,depth0,helpers,partials,data) {
    var stack1, alias1=container.lambda, alias2=container.escapeExpression, lookupProperty = container.lookupProperty || function(parent, propertyName) {
        if (Object.prototype.hasOwnProperty.call(parent, propertyName)) {
          return parent[propertyName];
        }
        return undefined
    };

  return "style=\"max-width: "
    + alias2(alias1(((stack1 = (depth0 != null ? lookupProperty(depth0,"width_pixels") : depth0)) != null ? lookupProperty(stack1,"value") : stack1), depth0))
    + "px; width: "
    + alias2(alias1(((stack1 = (depth0 != null ? lookupProperty(depth0,"width_pixels") : depth0)) != null ? lookupProperty(stack1,"value") : stack1), depth0))
    + "px\"";
},"16":function(container,depth0,helpers,partials,data,blockParams,depths) {
    var stack1, alias1=container.lambda, alias2=container.escapeExpression, lookupProperty = container.lookupProperty || function(parent, propertyName) {
        if (Object.prototype.hasOwnProperty.call(parent, propertyName)) {
          return parent[propertyName];
        }
        return undefined
    };

  return "            <div class=\"qld__code-preview\">\r\n                <span class=\"qld__code-preview-tab\">Example</span>\r\n                <div class=\"qld__code-preview-colours\">\r\n                    <span class=\"qld__code-preview-colours-label\">Theme</span>\r\n                    <ul>\r\n                        <li>\r\n                            <input type=\"radio\" name=\"qld__code-preview-colours-"
    + alias2(alias1(((stack1 = ((stack1 = (depths[1] != null ? lookupProperty(depths[1],"component") : depths[1])) != null ? lookupProperty(stack1,"data") : stack1)) != null ? lookupProperty(stack1,"assetid") : stack1), depth0))
    + "\" id=\"qld__code-preview-colours__default-"
    + alias2(alias1(((stack1 = ((stack1 = (depths[1] != null ? lookupProperty(depths[1],"component") : depths[1])) != null ? lookupProperty(stack1,"data") : stack1)) != null ? lookupProperty(stack1,"assetid") : stack1), depth0))
    + "\" value=\"\" checked>\r\n                            <label for=\"qld__code-preview-colours__default-"
    + alias2(alias1(((stack1 = ((stack1 = (depths[1] != null ? lookupProperty(depths[1],"component") : depths[1])) != null ? lookupProperty(stack1,"data") : stack1)) != null ? lookupProperty(stack1,"assetid") : stack1), depth0))
    + "\">Default</label>\r\n                        </li>\r\n                        <li>\r\n                            <input type=\"radio\" name=\"qld__code-preview-colours-"
    + alias2(alias1(((stack1 = ((stack1 = (depths[1] != null ? lookupProperty(depths[1],"component") : depths[1])) != null ? lookupProperty(stack1,"data") : stack1)) != null ? lookupProperty(stack1,"assetid") : stack1), depth0))
    + "\" id=\"qld__code-preview-colours__alt-"
    + alias2(alias1(((stack1 = ((stack1 = (depths[1] != null ? lookupProperty(depths[1],"component") : depths[1])) != null ? lookupProperty(stack1,"data") : stack1)) != null ? lookupProperty(stack1,"assetid") : stack1), depth0))
    + "\" value=\"qld__body--alt\">\r\n                            <label for=\"qld__code-preview-colours__alt-"
    + alias2(alias1(((stack1 = ((stack1 = (depths[1] != null ? lookupProperty(depths[1],"component") : depths[1])) != null ? lookupProperty(stack1,"data") : stack1)) != null ? lookupProperty(stack1,"assetid") : stack1), depth0))
    + "\">Alt</label>\r\n                        </li>\r\n                        <li>\r\n                            <input type=\"radio\" name=\"qld__code-preview-colours-"
    + alias2(alias1(((stack1 = ((stack1 = (depths[1] != null ? lookupProperty(depths[1],"component") : depths[1])) != null ? lookupProperty(stack1,"data") : stack1)) != null ? lookupProperty(stack1,"assetid") : stack1), depth0))
    + "\" id=\"qld__code-preview-colours__dark-"
    + alias2(alias1(((stack1 = ((stack1 = (depths[1] != null ? lookupProperty(depths[1],"component") : depths[1])) != null ? lookupProperty(stack1,"data") : stack1)) != null ? lookupProperty(stack1,"assetid") : stack1), depth0))
    + "\" value=\"qld__body--dark\">\r\n                            <label for=\"qld__code-preview-colours__dark-"
    + alias2(alias1(((stack1 = ((stack1 = (depths[1] != null ? lookupProperty(depths[1],"component") : depths[1])) != null ? lookupProperty(stack1,"data") : stack1)) != null ? lookupProperty(stack1,"assetid") : stack1), depth0))
    + "\">Dark</label>\r\n                        </li>\r\n                        <li>\r\n                            <input type=\"radio\" name=\"qld__code-preview-colours-"
    + alias2(alias1(((stack1 = ((stack1 = (depths[1] != null ? lookupProperty(depths[1],"component") : depths[1])) != null ? lookupProperty(stack1,"data") : stack1)) != null ? lookupProperty(stack1,"assetid") : stack1), depth0))
    + "\" id=\"qld__code-preview-colours__dark-alt-"
    + alias2(alias1(((stack1 = ((stack1 = (depths[1] != null ? lookupProperty(depths[1],"component") : depths[1])) != null ? lookupProperty(stack1,"data") : stack1)) != null ? lookupProperty(stack1,"assetid") : stack1), depth0))
    + "\" value=\"qld__body--dark-alt\">\r\n                            <label for=\"qld__code-preview-colours__dark-alt-"
    + alias2(alias1(((stack1 = ((stack1 = (depths[1] != null ? lookupProperty(depths[1],"component") : depths[1])) != null ? lookupProperty(stack1,"data") : stack1)) != null ? lookupProperty(stack1,"assetid") : stack1), depth0))
    + "\"> Dark-alt</label>\r\n                        </li>\r\n                    </ul>\r\n                </div>\r\n                <div class=\"qld__code-preview-body qld__body\">\r\n                    "
    + ((stack1 = alias1(((stack1 = (depth0 != null ? lookupProperty(depth0,"code") : depth0)) != null ? lookupProperty(stack1,"value") : stack1), depth0)) != null ? stack1 : "")
    + "\r\n                </div>\r\n            </div>\r\n";
},"18":function(container,depth0,helpers,partials,data) {
    var stack1, lookupProperty = container.lookupProperty || function(parent, propertyName) {
        if (Object.prototype.hasOwnProperty.call(parent, propertyName)) {
          return parent[propertyName];
        }
        return undefined
    };

  return ((stack1 = (lookupProperty(helpers,"ifCond")||(depth0 && lookupProperty(depth0,"ifCond"))||container.hooks.helperMissing).call(depth0 != null ? depth0 : (container.nullContext || {}),((stack1 = (depth0 != null ? lookupProperty(depth0,"show_more_button") : depth0)) != null ? lookupProperty(stack1,"value") : stack1),"==","true",{"name":"ifCond","hash":{},"fn":container.program(19, data, 0),"inverse":container.noop,"data":data,"loc":{"start":{"line":72,"column":12},"end":{"line":76,"column":23}}})) != null ? stack1 : "");
},"19":function(container,depth0,helpers,partials,data) {
    return "            <div class=\"qld__code-toggle\">\r\n                <button class=\"qld__code-toggle-button\" type=\"button\">Show more<i class=\"fa-regular fa-chevron-up\"></i></button>\r\n            </div>\r\n";
},"21":function(container,depth0,helpers,partials,data) {
    var stack1, lookupProperty = container.lookupProperty || function(parent, propertyName) {
        if (Object.prototype.hasOwnProperty.call(parent, propertyName)) {
          return parent[propertyName];
        }
        return undefined
    };

  return ((stack1 = lookupProperty(helpers,"if").call(depth0 != null ? depth0 : (container.nullContext || {}),((stack1 = (depth0 != null ? lookupProperty(depth0,"github_link") : depth0)) != null ? lookupProperty(stack1,"value") : stack1),{"name":"if","hash":{},"fn":container.program(22, data, 0),"inverse":container.program(29, data, 0),"data":data,"loc":{"start":{"line":79,"column":12},"end":{"line":121,"column":19}}})) != null ? stack1 : "");
},"22":function(container,depth0,helpers,partials,data) {
    var stack1, alias1=depth0 != null ? depth0 : (container.nullContext || {}), lookupProperty = container.lookupProperty || function(parent, propertyName) {
        if (Object.prototype.hasOwnProperty.call(parent, propertyName)) {
          return parent[propertyName];
        }
        return undefined
    };

  return "            <div class=\"qld__code-header\">\r\n                <div class=\"qld__code-header-left\">\r\n"
    + ((stack1 = lookupProperty(helpers,"if").call(alias1,((stack1 = (depth0 != null ? lookupProperty(depth0,"github_link") : depth0)) != null ? lookupProperty(stack1,"value") : stack1),{"name":"if","hash":{},"fn":container.program(23, data, 0),"inverse":container.noop,"data":data,"loc":{"start":{"line":82,"column":20},"end":{"line":84,"column":27}}})) != null ? stack1 : "")
    + ((stack1 = lookupProperty(helpers,"if").call(alias1,((stack1 = (depth0 != null ? lookupProperty(depth0,"figma_link") : depth0)) != null ? lookupProperty(stack1,"value") : stack1),{"name":"if","hash":{},"fn":container.program(25, data, 0),"inverse":container.noop,"data":data,"loc":{"start":{"line":85,"column":20},"end":{"line":87,"column":27}}})) != null ? stack1 : "")
    + ((stack1 = lookupProperty(helpers,"if").call(alias1,((stack1 = (depth0 != null ? lookupProperty(depth0,"action_link_title") : depth0)) != null ? lookupProperty(stack1,"value") : stack1),{"name":"if","hash":{},"fn":container.program(27, data, 0),"inverse":container.noop,"data":data,"loc":{"start":{"line":88,"column":20},"end":{"line":90,"column":27}}})) != null ? stack1 : "")
    + "                </div>\r\n            </div>\r\n";
},"23":function(container,depth0,helpers,partials,data) {
    var stack1, lookupProperty = container.lookupProperty || function(parent, propertyName) {
        if (Object.prototype.hasOwnProperty.call(parent, propertyName)) {
          return parent[propertyName];
        }
        return undefined
    };

  return "                        <a class=\"qld__code-header-link\" href=\""
    + container.escapeExpression(container.lambda(((stack1 = (depth0 != null ? lookupProperty(depth0,"github_link") : depth0)) != null ? lookupProperty(stack1,"value") : stack1), depth0))
    + "\" target=\"_blank\"><i class=\"fa-regular fa-arrow-up-right-from-square\"></i> Github</a>\r\n";
},"25":function(container,depth0,helpers,partials,data) {
    var stack1, lookupProperty = container.lookupProperty || function(parent, propertyName) {
        if (Object.prototype.hasOwnProperty.call(parent, propertyName)) {
          return parent[propertyName];
        }
        return undefined
    };

  return "                        <a class=\"qld__code-header-link\" href=\""
    + container.escapeExpression(container.lambda(((stack1 = (depth0 != null ? lookupProperty(depth0,"figma_link") : depth0)) != null ? lookupProperty(stack1,"value") : stack1), depth0))
    + "\" target=\"_blank\"><i class=\"fa-regular fa-arrow-up-right-from-square\"></i> Figma</a>\r\n";
},"27":function(container,depth0,helpers,partials,data) {
    var stack1, alias1=container.lambda, alias2=container.escapeExpression, lookupProperty = container.lookupProperty || function(parent, propertyName) {
        if (Object.prototype.hasOwnProperty.call(parent, propertyName)) {
          return parent[propertyName];
        }
        return undefined
    };

  return "                        <a href=\""
    + alias2(alias1(((stack1 = (depth0 != null ? lookupProperty(depth0,"action_link_address") : depth0)) != null ? lookupProperty(stack1,"value") : stack1), depth0))
    + "\" target=\"_blank\"><i class=\"fa-regular fa-arrow-up-right-from-square\"></i>"
    + alias2(alias1(((stack1 = (depth0 != null ? lookupProperty(depth0,"action_link_title") : depth0)) != null ? lookupProperty(stack1,"value") : stack1), depth0))
    + "</a>\r\n";
},"29":function(container,depth0,helpers,partials,data) {
    var stack1, lookupProperty = container.lookupProperty || function(parent, propertyName) {
        if (Object.prototype.hasOwnProperty.call(parent, propertyName)) {
          return parent[propertyName];
        }
        return undefined
    };

  return ((stack1 = lookupProperty(helpers,"if").call(depth0 != null ? depth0 : (container.nullContext || {}),((stack1 = (depth0 != null ? lookupProperty(depth0,"figma_link") : depth0)) != null ? lookupProperty(stack1,"value") : stack1),{"name":"if","hash":{},"fn":container.program(22, data, 0),"inverse":container.program(30, data, 0),"data":data,"loc":{"start":{"line":93,"column":12},"end":{"line":121,"column":12}}})) != null ? stack1 : "");
},"30":function(container,depth0,helpers,partials,data) {
    var stack1, lookupProperty = container.lookupProperty || function(parent, propertyName) {
        if (Object.prototype.hasOwnProperty.call(parent, propertyName)) {
          return parent[propertyName];
        }
        return undefined
    };

  return ((stack1 = lookupProperty(helpers,"if").call(depth0 != null ? depth0 : (container.nullContext || {}),((stack1 = (depth0 != null ? lookupProperty(depth0,"figma_link") : depth0)) != null ? lookupProperty(stack1,"value") : stack1),{"name":"if","hash":{},"fn":container.program(31, data, 0),"inverse":container.noop,"data":data,"loc":{"start":{"line":107,"column":12},"end":{"line":121,"column":12}}})) != null ? stack1 : "");
},"31":function(container,depth0,helpers,partials,data) {
    var stack1, alias1=depth0 != null ? depth0 : (container.nullContext || {}), lookupProperty = container.lookupProperty || function(parent, propertyName) {
        if (Object.prototype.hasOwnProperty.call(parent, propertyName)) {
          return parent[propertyName];
        }
        return undefined
    };

  return "            <div class=\"qld__code-header\">\r\n                <div class=\"qld__code-header-left\">\r\n"
    + ((stack1 = lookupProperty(helpers,"if").call(alias1,((stack1 = (depth0 != null ? lookupProperty(depth0,"github_link") : depth0)) != null ? lookupProperty(stack1,"value") : stack1),{"name":"if","hash":{},"fn":container.program(32, data, 0),"inverse":container.noop,"data":data,"loc":{"start":{"line":110,"column":20},"end":{"line":112,"column":27}}})) != null ? stack1 : "")
    + ((stack1 = lookupProperty(helpers,"if").call(alias1,((stack1 = (depth0 != null ? lookupProperty(depth0,"figma_link") : depth0)) != null ? lookupProperty(stack1,"value") : stack1),{"name":"if","hash":{},"fn":container.program(34, data, 0),"inverse":container.noop,"data":data,"loc":{"start":{"line":113,"column":20},"end":{"line":115,"column":27}}})) != null ? stack1 : "")
    + ((stack1 = lookupProperty(helpers,"if").call(alias1,((stack1 = (depth0 != null ? lookupProperty(depth0,"action_link_title") : depth0)) != null ? lookupProperty(stack1,"value") : stack1),{"name":"if","hash":{},"fn":container.program(27, data, 0),"inverse":container.noop,"data":data,"loc":{"start":{"line":116,"column":20},"end":{"line":118,"column":27}}})) != null ? stack1 : "")
    + "                </div>\r\n            </div>\r\n            ";
},"32":function(container,depth0,helpers,partials,data) {
    var stack1, lookupProperty = container.lookupProperty || function(parent, propertyName) {
        if (Object.prototype.hasOwnProperty.call(parent, propertyName)) {
          return parent[propertyName];
        }
        return undefined
    };

  return "                        <a href=\""
    + container.escapeExpression(container.lambda(((stack1 = (depth0 != null ? lookupProperty(depth0,"github_link") : depth0)) != null ? lookupProperty(stack1,"value") : stack1), depth0))
    + "\" target=\"_blank\"><i class=\"fa-regular fa-arrow-up-right-from-square\"></i> Github</a>\r\n";
},"34":function(container,depth0,helpers,partials,data) {
    var stack1, lookupProperty = container.lookupProperty || function(parent, propertyName) {
        if (Object.prototype.hasOwnProperty.call(parent, propertyName)) {
          return parent[propertyName];
        }
        return undefined
    };

  return "                        <a href=\""
    + container.escapeExpression(container.lambda(((stack1 = (depth0 != null ? lookupProperty(depth0,"figma_link") : depth0)) != null ? lookupProperty(stack1,"value") : stack1), depth0))
    + "\" target=\"_blank\"><i class=\"fa-regular fa-arrow-up-right-from-square\"></i> Figma</a>\r\n";
},"36":function(container,depth0,helpers,partials,data) {
    var stack1, alias1=depth0 != null ? depth0 : (container.nullContext || {}), lookupProperty = container.lookupProperty || function(parent, propertyName) {
        if (Object.prototype.hasOwnProperty.call(parent, propertyName)) {
          return parent[propertyName];
        }
        return undefined
    };

  return "            <div class=\"qld__code-header\">\r\n                <div class=\"qld__code-header-left\">\r\n"
    + ((stack1 = lookupProperty(helpers,"if").call(alias1,((stack1 = (depth0 != null ? lookupProperty(depth0,"github_link") : depth0)) != null ? lookupProperty(stack1,"value") : stack1),{"name":"if","hash":{},"fn":container.program(23, data, 0),"inverse":container.noop,"data":data,"loc":{"start":{"line":125,"column":20},"end":{"line":127,"column":27}}})) != null ? stack1 : "")
    + ((stack1 = lookupProperty(helpers,"if").call(alias1,((stack1 = (depth0 != null ? lookupProperty(depth0,"figma_link") : depth0)) != null ? lookupProperty(stack1,"value") : stack1),{"name":"if","hash":{},"fn":container.program(25, data, 0),"inverse":container.noop,"data":data,"loc":{"start":{"line":128,"column":20},"end":{"line":130,"column":27}}})) != null ? stack1 : "")
    + ((stack1 = lookupProperty(helpers,"if").call(alias1,((stack1 = (depth0 != null ? lookupProperty(depth0,"action_link_title") : depth0)) != null ? lookupProperty(stack1,"value") : stack1),{"name":"if","hash":{},"fn":container.program(27, data, 0),"inverse":container.noop,"data":data,"loc":{"start":{"line":131,"column":20},"end":{"line":133,"column":27}}})) != null ? stack1 : "")
    + "                </div>\r\n"
    + ((stack1 = (lookupProperty(helpers,"ifCond")||(depth0 && lookupProperty(depth0,"ifCond"))||container.hooks.helperMissing).call(alias1,((stack1 = (depth0 != null ? lookupProperty(depth0,"show_code") : depth0)) != null ? lookupProperty(stack1,"value") : stack1),"==","true",{"name":"ifCond","hash":{},"fn":container.program(37, data, 0),"inverse":container.noop,"data":data,"loc":{"start":{"line":135,"column":16},"end":{"line":150,"column":27}}})) != null ? stack1 : "")
    + "            </div>\r\n";
},"37":function(container,depth0,helpers,partials,data) {
    return "                <div class=\"qld__code-header-right\">\r\n                    <button class=\"qld__btn qld__code-copy--button\" type=\"button\">\r\n                        <div class=\"clean\">\r\n                            <i class=\"fa-light fa-copy\"></i><span class=\"qld__code-copy--button-text\">Copy</span>\r\n                        </div>\r\n                        <div class=\"dirty\">\r\n                            <i class=\"fa-solid fa-circle-check\"></i><span class=\"qld__code-copy--button-text\">Copied</span>\r\n                        </div>\r\n                        <div class=\"qld__code-tooltip\">\r\n                            <span class=\"clean\">Copy</span>\r\n                            <span class=\"dirty\">Copied</span>\r\n                        </div>\r\n                    </button>\r\n                </div>\r\n";
},"39":function(container,depth0,helpers,partials,data) {
    var stack1, lookupProperty = container.lookupProperty || function(parent, propertyName) {
        if (Object.prototype.hasOwnProperty.call(parent, propertyName)) {
          return parent[propertyName];
        }
        return undefined
    };

  return "            <code class=\"qld__code-body\">"
    + container.escapeExpression(container.lambda(((stack1 = (depth0 != null ? lookupProperty(depth0,"code") : depth0)) != null ? lookupProperty(stack1,"value") : stack1), depth0))
    + "</code>\r\n";
},"compiler":[8,">= 4.3.0"],"main":function(container,depth0,helpers,partials,data,blockParams,depths) {
    var stack1, lookupProperty = container.lookupProperty || function(parent, propertyName) {
        if (Object.prototype.hasOwnProperty.call(parent, propertyName)) {
          return parent[propertyName];
        }
        return undefined
    };

  return "\r\n"
    + ((stack1 = lookupProperty(helpers,"with").call(depth0 != null ? depth0 : (container.nullContext || {}),((stack1 = ((stack1 = (depth0 != null ? lookupProperty(depth0,"component") : depth0)) != null ? lookupProperty(stack1,"data") : stack1)) != null ? lookupProperty(stack1,"metadata") : stack1),{"name":"with","hash":{},"fn":container.program(1, data, 0, blockParams, depths),"inverse":container.noop,"data":data,"loc":{"start":{"line":2,"column":0},"end":{"line":161,"column":9}}})) != null ? stack1 : "");
},"useData":true,"useDepths":true}