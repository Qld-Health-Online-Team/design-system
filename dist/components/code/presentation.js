{"1":function(container,depth0,helpers,partials,data,blockParams,depths) {
    var stack1, lookupProperty = container.lookupProperty || function(parent, propertyName) {
        if (Object.prototype.hasOwnProperty.call(parent, propertyName)) {
          return parent[propertyName];
        }
        return undefined
    };

  return ((stack1 = lookupProperty(helpers,"if").call(depth0 != null ? depth0 : (container.nullContext || {}),((stack1 = (depth0 != null ? lookupProperty(depth0,"code") : depth0)) != null ? lookupProperty(stack1,"value") : stack1),{"name":"if","hash":{},"fn":container.program(2, data, 0, blockParams, depths),"inverse":container.noop,"data":data,"loc":{"start":{"line":2,"column":4},"end":{"line":83,"column":11}}})) != null ? stack1 : "");
},"2":function(container,depth0,helpers,partials,data,blockParams,depths) {
    var stack1, alias1=depth0 != null ? depth0 : (container.nullContext || {}), alias2=container.hooks.helperMissing, lookupProperty = container.lookupProperty || function(parent, propertyName) {
        if (Object.prototype.hasOwnProperty.call(parent, propertyName)) {
          return parent[propertyName];
        }
        return undefined
    };

  return ((stack1 = (lookupProperty(helpers,"ifCond")||(depth0 && lookupProperty(depth0,"ifCond"))||alias2).call(alias1,((stack1 = (depth0 != null ? lookupProperty(depth0,"code_snippet_type") : depth0)) != null ? lookupProperty(stack1,"value") : stack1),"==","singleline",{"name":"ifCond","hash":{},"fn":container.program(3, data, 0, blockParams, depths),"inverse":container.noop,"data":data,"loc":{"start":{"line":3,"column":8},"end":{"line":19,"column":19}}})) != null ? stack1 : "")
    + ((stack1 = (lookupProperty(helpers,"ifCond")||(depth0 && lookupProperty(depth0,"ifCond"))||alias2).call(alias1,((stack1 = (depth0 != null ? lookupProperty(depth0,"code_snippet_type") : depth0)) != null ? lookupProperty(stack1,"value") : stack1),"==","multiline",{"name":"ifCond","hash":{},"fn":container.program(5, data, 0, blockParams, depths),"inverse":container.noop,"data":data,"loc":{"start":{"line":20,"column":8},"end":{"line":82,"column":19}}})) != null ? stack1 : "");
},"3":function(container,depth0,helpers,partials,data) {
    var stack1, lookupProperty = container.lookupProperty || function(parent, propertyName) {
        if (Object.prototype.hasOwnProperty.call(parent, propertyName)) {
          return parent[propertyName];
        }
        return undefined
    };

  return "        <div class=\"qld__code singleline\">\n            <code class=\"qld__code-body\">"
    + container.escapeExpression(container.lambda(((stack1 = (depth0 != null ? lookupProperty(depth0,"code") : depth0)) != null ? lookupProperty(stack1,"value") : stack1), depth0))
    + "</code>\n            <button class=\"qld__btn qld__code-copy--button\" type=\"button\">\n                <div class=\"clean\">\n                    <i class=\"fa-light fa-copy\"></i><span class=\"qld__code-copy--button-text\">Copy</span>\n                </div>\n                <div class=\"dirty\">\n                    <i class=\"fa-solid fa-circle-check\"></i><span class=\"qld__code-copy--button-text\">Copied</span>\n                </div>\n                <div class=\"qld__code-tooltip\">\n                    <span class=\"clean\">Copy</span>\n                    <span class=\"dirty\">Copied</span>\n                </div>\n            </button>\n        </div>\n";
},"5":function(container,depth0,helpers,partials,data,blockParams,depths) {
    var stack1, alias1=depth0 != null ? depth0 : (container.nullContext || {}), alias2=container.hooks.helperMissing, lookupProperty = container.lookupProperty || function(parent, propertyName) {
        if (Object.prototype.hasOwnProperty.call(parent, propertyName)) {
          return parent[propertyName];
        }
        return undefined
    };

  return "        <div class=\"qld__code multiline "
    + ((stack1 = (lookupProperty(helpers,"ifCond")||(depth0 && lookupProperty(depth0,"ifCond"))||alias2).call(alias1,((stack1 = (depth0 != null ? lookupProperty(depth0,"show_more_button") : depth0)) != null ? lookupProperty(stack1,"value") : stack1),"==","true",{"name":"ifCond","hash":{},"fn":container.program(6, data, 0, blockParams, depths),"inverse":container.noop,"data":data,"loc":{"start":{"line":21,"column":40},"end":{"line":21,"column":106}}})) != null ? stack1 : "")
    + " "
    + ((stack1 = (lookupProperty(helpers,"ifCond")||(depth0 && lookupProperty(depth0,"ifCond"))||alias2).call(alias1,((stack1 = (depth0 != null ? lookupProperty(depth0,"show_preview") : depth0)) != null ? lookupProperty(stack1,"value") : stack1),"==","true",{"name":"ifCond","hash":{},"fn":container.program(8, data, 0, blockParams, depths),"inverse":container.noop,"data":data,"loc":{"start":{"line":21,"column":107},"end":{"line":21,"column":172}}})) != null ? stack1 : "")
    + "\">\n"
    + ((stack1 = (lookupProperty(helpers,"ifCond")||(depth0 && lookupProperty(depth0,"ifCond"))||alias2).call(alias1,((stack1 = (depth0 != null ? lookupProperty(depth0,"show_preview") : depth0)) != null ? lookupProperty(stack1,"value") : stack1),"==","true",{"name":"ifCond","hash":{},"fn":container.program(10, data, 0, blockParams, depths),"inverse":container.noop,"data":data,"loc":{"start":{"line":22,"column":12},"end":{"line":50,"column":23}}})) != null ? stack1 : "")
    + ((stack1 = (lookupProperty(helpers,"ifCond")||(depth0 && lookupProperty(depth0,"ifCond"))||alias2).call(alias1,((stack1 = (depth0 != null ? lookupProperty(depth0,"show_more_button") : depth0)) != null ? lookupProperty(stack1,"value") : stack1),"==","true",{"name":"ifCond","hash":{},"fn":container.program(12, data, 0, blockParams, depths),"inverse":container.noop,"data":data,"loc":{"start":{"line":51,"column":12},"end":{"line":55,"column":23}}})) != null ? stack1 : "")
    + "            <div class=\"qld__code-header\">\n                <div class=\"qld__code-header-left\">\n"
    + ((stack1 = lookupProperty(helpers,"if").call(alias1,((stack1 = (depth0 != null ? lookupProperty(depth0,"github_link") : depth0)) != null ? lookupProperty(stack1,"value") : stack1),{"name":"if","hash":{},"fn":container.program(14, data, 0, blockParams, depths),"inverse":container.noop,"data":data,"loc":{"start":{"line":58,"column":20},"end":{"line":60,"column":27}}})) != null ? stack1 : "")
    + ((stack1 = lookupProperty(helpers,"if").call(alias1,((stack1 = (depth0 != null ? lookupProperty(depth0,"figma_link") : depth0)) != null ? lookupProperty(stack1,"value") : stack1),{"name":"if","hash":{},"fn":container.program(16, data, 0, blockParams, depths),"inverse":container.noop,"data":data,"loc":{"start":{"line":61,"column":20},"end":{"line":63,"column":27}}})) != null ? stack1 : "")
    + "                </div>\n                <div class=\"qld__code-header-right\">\n                    <button class=\"qld__btn qld__code-copy--button\" type=\"button\">\n                        <div class=\"clean\">\n                            <i class=\"fa-light fa-copy\"></i><span class=\"qld__code-copy--button-text\">Copy</span>\n                        </div>\n                        <div class=\"dirty\">\n                            <i class=\"fa-solid fa-circle-check\"></i><span class=\"qld__code-copy--button-text\">Copied</span>\n                        </div>\n                        <div class=\"qld__code-tooltip\">\n                            <span class=\"clean\">Copy</span>\n                            <span class=\"dirty\">Copied</span>\n                        </div>\n                    </button>\n                </div>\n            </div>\n            <code class=\"qld__code-body\">"
    + container.escapeExpression(container.lambda(((stack1 = (depth0 != null ? lookupProperty(depth0,"code") : depth0)) != null ? lookupProperty(stack1,"value") : stack1), depth0))
    + "</code>\n        </div>\n";
},"6":function(container,depth0,helpers,partials,data) {
    return "show_less";
},"8":function(container,depth0,helpers,partials,data) {
    return "with-preview";
},"10":function(container,depth0,helpers,partials,data,blockParams,depths) {
    var stack1, alias1=container.lambda, alias2=container.escapeExpression, lookupProperty = container.lookupProperty || function(parent, propertyName) {
        if (Object.prototype.hasOwnProperty.call(parent, propertyName)) {
          return parent[propertyName];
        }
        return undefined
    };

  return "            <div class=\"qld__code-preview\">\n                <span class=\"qld__code-preview-tab\">Example</span>\n                <div class=\"qld__code-preview-colours\">\n                    <span class=\"qld__code-preview-colours-label\">Theme</span>\n                    <ul>\n                        <li>\n                            <input type=\"radio\" name=\"qld__code-preview-colours-"
    + alias2(alias1(((stack1 = ((stack1 = (depths[1] != null ? lookupProperty(depths[1],"component") : depths[1])) != null ? lookupProperty(stack1,"data") : stack1)) != null ? lookupProperty(stack1,"assetid") : stack1), depth0))
    + "\" id=\"qld__code-preview-colours__default-"
    + alias2(alias1(((stack1 = ((stack1 = (depths[1] != null ? lookupProperty(depths[1],"component") : depths[1])) != null ? lookupProperty(stack1,"data") : stack1)) != null ? lookupProperty(stack1,"assetid") : stack1), depth0))
    + "\" value=\"\" checked>\n                            <label for=\"qld__code-preview-colours__default-"
    + alias2(alias1(((stack1 = ((stack1 = (depths[1] != null ? lookupProperty(depths[1],"component") : depths[1])) != null ? lookupProperty(stack1,"data") : stack1)) != null ? lookupProperty(stack1,"assetid") : stack1), depth0))
    + "\">Default</label>\n                        </li>\n                        <li>\n                            <input type=\"radio\" name=\"qld__code-preview-colours-"
    + alias2(alias1(((stack1 = ((stack1 = (depths[1] != null ? lookupProperty(depths[1],"component") : depths[1])) != null ? lookupProperty(stack1,"data") : stack1)) != null ? lookupProperty(stack1,"assetid") : stack1), depth0))
    + "\" id=\"qld__code-preview-colours__alt-"
    + alias2(alias1(((stack1 = ((stack1 = (depths[1] != null ? lookupProperty(depths[1],"component") : depths[1])) != null ? lookupProperty(stack1,"data") : stack1)) != null ? lookupProperty(stack1,"assetid") : stack1), depth0))
    + "\" value=\"qld__body--alt\">\n                            <label for=\"qld__code-preview-colours__alt-"
    + alias2(alias1(((stack1 = ((stack1 = (depths[1] != null ? lookupProperty(depths[1],"component") : depths[1])) != null ? lookupProperty(stack1,"data") : stack1)) != null ? lookupProperty(stack1,"assetid") : stack1), depth0))
    + "\">Alt</label>\n                        </li>\n                        <li>\n                            <input type=\"radio\" name=\"qld__code-preview-colours-"
    + alias2(alias1(((stack1 = ((stack1 = (depths[1] != null ? lookupProperty(depths[1],"component") : depths[1])) != null ? lookupProperty(stack1,"data") : stack1)) != null ? lookupProperty(stack1,"assetid") : stack1), depth0))
    + "\" id=\"qld__code-preview-colours__dark-"
    + alias2(alias1(((stack1 = ((stack1 = (depths[1] != null ? lookupProperty(depths[1],"component") : depths[1])) != null ? lookupProperty(stack1,"data") : stack1)) != null ? lookupProperty(stack1,"assetid") : stack1), depth0))
    + "\" value=\"qld__body--dark\">\n                            <label for=\"qld__code-preview-colours__dark-"
    + alias2(alias1(((stack1 = ((stack1 = (depths[1] != null ? lookupProperty(depths[1],"component") : depths[1])) != null ? lookupProperty(stack1,"data") : stack1)) != null ? lookupProperty(stack1,"assetid") : stack1), depth0))
    + "\">Dark</label>\n                        </li>\n                        <li>\n                            <input type=\"radio\" name=\"qld__code-preview-colours-"
    + alias2(alias1(((stack1 = ((stack1 = (depths[1] != null ? lookupProperty(depths[1],"component") : depths[1])) != null ? lookupProperty(stack1,"data") : stack1)) != null ? lookupProperty(stack1,"assetid") : stack1), depth0))
    + "\" id=\"qld__code-preview-colours__dark-alt-"
    + alias2(alias1(((stack1 = ((stack1 = (depths[1] != null ? lookupProperty(depths[1],"component") : depths[1])) != null ? lookupProperty(stack1,"data") : stack1)) != null ? lookupProperty(stack1,"assetid") : stack1), depth0))
    + "\" value=\"qld__body--dark-alt\">\n                            <label for=\"qld__code-preview-colours__dark-alt-"
    + alias2(alias1(((stack1 = ((stack1 = (depths[1] != null ? lookupProperty(depths[1],"component") : depths[1])) != null ? lookupProperty(stack1,"data") : stack1)) != null ? lookupProperty(stack1,"assetid") : stack1), depth0))
    + "\"> Dark-alt</label>\n                        </li>\n                    </ul>\n                </div>\n                <div class=\"qld__code-preview-body qld__body\">\n                    "
    + ((stack1 = alias1(((stack1 = (depth0 != null ? lookupProperty(depth0,"code") : depth0)) != null ? lookupProperty(stack1,"value") : stack1), depth0)) != null ? stack1 : "")
    + "\n                </div>\n            </div>\n";
},"12":function(container,depth0,helpers,partials,data) {
    return "            <div class=\"qld__code-toggle\">\n                <button class=\"qld__code-toggle-button\" type=\"button\">Show more<i class=\"fa-regular fa-chevron-up\"></i></button>\n            </div>\n";
},"14":function(container,depth0,helpers,partials,data) {
    var stack1, lookupProperty = container.lookupProperty || function(parent, propertyName) {
        if (Object.prototype.hasOwnProperty.call(parent, propertyName)) {
          return parent[propertyName];
        }
        return undefined
    };

  return "                        <a href=\""
    + container.escapeExpression(container.lambda(((stack1 = (depth0 != null ? lookupProperty(depth0,"github_link") : depth0)) != null ? lookupProperty(stack1,"value") : stack1), depth0))
    + "\" target=\"_blank\"><i class=\"fa-regular fa-arrow-up-right-from-square\"></i> Github</a>\n";
},"16":function(container,depth0,helpers,partials,data) {
    var stack1, lookupProperty = container.lookupProperty || function(parent, propertyName) {
        if (Object.prototype.hasOwnProperty.call(parent, propertyName)) {
          return parent[propertyName];
        }
        return undefined
    };

  return "                        <a href=\""
    + container.escapeExpression(container.lambda(((stack1 = (depth0 != null ? lookupProperty(depth0,"figma_link") : depth0)) != null ? lookupProperty(stack1,"value") : stack1), depth0))
    + "\" target=\"_blank\"><i class=\"fa-regular fa-arrow-up-right-from-square\"></i> Figma</a>\n";
},"compiler":[8,">= 4.3.0"],"main":function(container,depth0,helpers,partials,data,blockParams,depths) {
    var stack1, lookupProperty = container.lookupProperty || function(parent, propertyName) {
        if (Object.prototype.hasOwnProperty.call(parent, propertyName)) {
          return parent[propertyName];
        }
        return undefined
    };

  return ((stack1 = lookupProperty(helpers,"with").call(depth0 != null ? depth0 : (container.nullContext || {}),((stack1 = ((stack1 = (depth0 != null ? lookupProperty(depth0,"component") : depth0)) != null ? lookupProperty(stack1,"data") : stack1)) != null ? lookupProperty(stack1,"metadata") : stack1),{"name":"with","hash":{},"fn":container.program(1, data, 0, blockParams, depths),"inverse":container.noop,"data":data,"loc":{"start":{"line":1,"column":0},"end":{"line":84,"column":9}}})) != null ? stack1 : "");
},"useData":true,"useDepths":true}