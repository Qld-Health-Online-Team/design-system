{"1":function(container,depth0,helpers,partials,data,blockParams,depths) {
    var stack1, lookupProperty = container.lookupProperty || function(parent, propertyName) {
        if (Object.prototype.hasOwnProperty.call(parent, propertyName)) {
          return parent[propertyName];
        }
        return undefined
    };

  return ((stack1 = lookupProperty(helpers,"if").call(depth0 != null ? depth0 : (container.nullContext || {}),((stack1 = (depth0 != null ? lookupProperty(depth0,"code") : depth0)) != null ? lookupProperty(stack1,"value") : stack1),{"name":"if","hash":{},"fn":container.program(2, data, 0, blockParams, depths),"inverse":container.noop,"data":data,"loc":{"start":{"line":2,"column":2},"end":{"line":482,"column":9}}})) != null ? stack1 : "");
},"2":function(container,depth0,helpers,partials,data,blockParams,depths) {
    var stack1, alias1=depth0 != null ? depth0 : (container.nullContext || {}), alias2=container.hooks.helperMissing, lookupProperty = container.lookupProperty || function(parent, propertyName) {
        if (Object.prototype.hasOwnProperty.call(parent, propertyName)) {
          return parent[propertyName];
        }
        return undefined
    };

  return "    <section\n      class=\"qld__body\"\n      data-path=\""
    + container.escapeExpression(container.lambda(((stack1 = ((stack1 = ((stack1 = ((stack1 = (data && lookupProperty(data,"root"))) && lookupProperty(stack1,"site"))) && lookupProperty(stack1,"metadata"))) && lookupProperty(stack1,"coreSiteIcons"))) && lookupProperty(stack1,"value")), depth0))
    + "\"\n    >\n      <div class=\"container-fluid\">\n"
    + ((stack1 = (lookupProperty(helpers,"ifCond")||(depth0 && lookupProperty(depth0,"ifCond"))||alias2).call(alias1,((stack1 = (depth0 != null ? lookupProperty(depth0,"code_snippet_type") : depth0)) != null ? lookupProperty(stack1,"value") : stack1),"==","singleline",{"name":"ifCond","hash":{},"fn":container.program(3, data, 0, blockParams, depths),"inverse":container.noop,"data":data,"loc":{"start":{"line":8,"column":8},"end":{"line":54,"column":19}}})) != null ? stack1 : "")
    + "\n"
    + ((stack1 = (lookupProperty(helpers,"ifCond")||(depth0 && lookupProperty(depth0,"ifCond"))||alias2).call(alias1,((stack1 = (depth0 != null ? lookupProperty(depth0,"code_snippet_type") : depth0)) != null ? lookupProperty(stack1,"value") : stack1),"==","multiline",{"name":"ifCond","hash":{},"fn":container.program(9, data, 0, blockParams, depths),"inverse":container.noop,"data":data,"loc":{"start":{"line":56,"column":8},"end":{"line":479,"column":19}}})) != null ? stack1 : "")
    + "      </div>\n    </section>\n";
},"3":function(container,depth0,helpers,partials,data) {
    var stack1, lookupProperty = container.lookupProperty || function(parent, propertyName) {
        if (Object.prototype.hasOwnProperty.call(parent, propertyName)) {
          return parent[propertyName];
        }
        return undefined
    };

  return ((stack1 = (lookupProperty(helpers,"ifCond")||(depth0 && lookupProperty(depth0,"ifCond"))||container.hooks.helperMissing).call(depth0 != null ? depth0 : (container.nullContext || {}),((stack1 = (depth0 != null ? lookupProperty(depth0,"show_code") : depth0)) != null ? lookupProperty(stack1,"value") : stack1),"==","true",{"name":"ifCond","hash":{},"fn":container.program(4, data, 0),"inverse":container.noop,"data":data,"loc":{"start":{"line":9,"column":10},"end":{"line":53,"column":21}}})) != null ? stack1 : "");
},"4":function(container,depth0,helpers,partials,data) {
    var stack1, alias1=depth0 != null ? depth0 : (container.nullContext || {}), alias2=container.hooks.helperMissing, alias3=container.lambda, alias4=container.escapeExpression, lookupProperty = container.lookupProperty || function(parent, propertyName) {
        if (Object.prototype.hasOwnProperty.call(parent, propertyName)) {
          return parent[propertyName];
        }
        return undefined
    };

  return ((stack1 = (lookupProperty(helpers,"ifCond")||(depth0 && lookupProperty(depth0,"ifCond"))||alias2).call(alias1,((stack1 = ((stack1 = ((stack1 = ((stack1 = (data && lookupProperty(data,"root"))) && lookupProperty(stack1,"site"))) && lookupProperty(stack1,"metadata"))) && lookupProperty(stack1,"mainNavVerticalNav"))) && lookupProperty(stack1,"value")),"==","Yes",{"name":"ifCond","hash":{},"fn":container.program(5, data, 0),"inverse":container.noop,"data":data,"loc":{"start":{"line":10,"column":12},"end":{"line":13,"column":23}}})) != null ? stack1 : "")
    + "\n            <div class=\"qld__code singleline\">\n              <code class=\"qld__code-body\">"
    + alias4(alias3(((stack1 = (depth0 != null ? lookupProperty(depth0,"code") : depth0)) != null ? lookupProperty(stack1,"value") : stack1), depth0))
    + "</code>\n              <button class=\"qld__btn qld__code-copy--button\" type=\"button\">\n                <div class=\"clean\">\n                  <svg\n                    class=\"qld__icon qld__icon--sm\"\n                    aria-hidden=\"true\"\n                    xmlns=\"http://www.w3.org/2000/svg\"\n                  >\n                    <use\n                      href=\""
    + alias4(alias3(((stack1 = ((stack1 = ((stack1 = ((stack1 = (data && lookupProperty(data,"root"))) && lookupProperty(stack1,"site"))) && lookupProperty(stack1,"metadata"))) && lookupProperty(stack1,"coreSiteIcons"))) && lookupProperty(stack1,"value")), depth0))
    + "#copy\"\n                    ></use>\n                  </svg>\n                  <span class=\"qld__code-copy--button-text\">Copy</span>\n                </div>\n                <div class=\"dirty\">\n                  <svg\n                    class=\"qld__icon qld__icon--md\"\n                    aria-hidden=\"true\"\n                    xmlns=\"http://www.w3.org/2000/svg\"\n                  >\n                    <use\n                      href=\""
    + alias4(alias3(((stack1 = ((stack1 = ((stack1 = ((stack1 = (data && lookupProperty(data,"root"))) && lookupProperty(stack1,"site"))) && lookupProperty(stack1,"metadata"))) && lookupProperty(stack1,"coreSiteIcons"))) && lookupProperty(stack1,"value")), depth0))
    + "#status-success\"\n                    ></use>\n                  </svg>\n                  <span class=\"qld__code-copy--button-text\">Copied</span>\n                </div>\n                <div class=\"qld__code-tooltip\">\n                  <span class=\"clean\">Copy</span>\n                  <span class=\"dirty\">Copied</span>\n                </div>\n              </button>\n            </div>\n\n"
    + ((stack1 = (lookupProperty(helpers,"ifCond")||(depth0 && lookupProperty(depth0,"ifCond"))||alias2).call(alias1,((stack1 = ((stack1 = ((stack1 = ((stack1 = (data && lookupProperty(data,"root"))) && lookupProperty(stack1,"site"))) && lookupProperty(stack1,"metadata"))) && lookupProperty(stack1,"mainNavVerticalNav"))) && lookupProperty(stack1,"value")),"==","Yes",{"name":"ifCond","hash":{},"fn":container.program(7, data, 0),"inverse":container.noop,"data":data,"loc":{"start":{"line":49,"column":12},"end":{"line":52,"column":23}}})) != null ? stack1 : "");
},"5":function(container,depth0,helpers,partials,data) {
    return "              <section class=\"qld__body\">\n              <div class=\"container-fluid\">\n";
},"7":function(container,depth0,helpers,partials,data) {
    return "              </div>\n              </section>\n";
},"9":function(container,depth0,helpers,partials,data,blockParams,depths) {
    var stack1, alias1=depth0 != null ? depth0 : (container.nullContext || {}), alias2=container.hooks.helperMissing, lookupProperty = container.lookupProperty || function(parent, propertyName) {
        if (Object.prototype.hasOwnProperty.call(parent, propertyName)) {
          return parent[propertyName];
        }
        return undefined
    };

  return "          <div\n            class=\"\n              qld__code\n              multiline\n"
    + ((stack1 = (lookupProperty(helpers,"ifCond")||(depth0 && lookupProperty(depth0,"ifCond"))||alias2).call(alias1,((stack1 = (depth0 != null ? lookupProperty(depth0,"show_more_button") : depth0)) != null ? lookupProperty(stack1,"value") : stack1),"==","true",{"name":"ifCond","hash":{},"fn":container.program(10, data, 0, blockParams, depths),"inverse":container.noop,"data":data,"loc":{"start":{"line":61,"column":14},"end":{"line":63,"column":25}}})) != null ? stack1 : "")
    + ((stack1 = (lookupProperty(helpers,"ifCond")||(depth0 && lookupProperty(depth0,"ifCond"))||alias2).call(alias1,((stack1 = (depth0 != null ? lookupProperty(depth0,"show_preview") : depth0)) != null ? lookupProperty(stack1,"value") : stack1),"==","true",{"name":"ifCond","hash":{},"fn":container.program(12, data, 0, blockParams, depths),"inverse":container.noop,"data":data,"loc":{"start":{"line":64,"column":14},"end":{"line":66,"column":25}}})) != null ? stack1 : "")
    + "            \"\n          >\n"
    + ((stack1 = (lookupProperty(helpers,"ifCond")||(depth0 && lookupProperty(depth0,"ifCond"))||alias2).call(alias1,((stack1 = (depth0 != null ? lookupProperty(depth0,"show_preview") : depth0)) != null ? lookupProperty(stack1,"value") : stack1),"==","true",{"name":"ifCond","hash":{},"fn":container.program(14, data, 0, blockParams, depths),"inverse":container.noop,"data":data,"loc":{"start":{"line":69,"column":12},"end":{"line":154,"column":23}}})) != null ? stack1 : "")
    + ((stack1 = (lookupProperty(helpers,"ifCond")||(depth0 && lookupProperty(depth0,"ifCond"))||alias2).call(alias1,((stack1 = (depth0 != null ? lookupProperty(depth0,"show_code") : depth0)) != null ? lookupProperty(stack1,"value") : stack1),"==","true",{"name":"ifCond","hash":{},"fn":container.program(19, data, 0, blockParams, depths),"inverse":container.noop,"data":data,"loc":{"start":{"line":155,"column":12},"end":{"line":172,"column":23}}})) != null ? stack1 : "")
    + ((stack1 = (lookupProperty(helpers,"ifCond")||(depth0 && lookupProperty(depth0,"ifCond"))||alias2).call(alias1,((stack1 = (depth0 != null ? lookupProperty(depth0,"show_code") : depth0)) != null ? lookupProperty(stack1,"value") : stack1),"==","false",{"name":"ifCond","hash":{},"fn":container.program(22, data, 0, blockParams, depths),"inverse":container.program(34, data, 0, blockParams, depths),"data":data,"loc":{"start":{"line":173,"column":12},"end":{"line":472,"column":23}}})) != null ? stack1 : "")
    + ((stack1 = (lookupProperty(helpers,"ifCond")||(depth0 && lookupProperty(depth0,"ifCond"))||alias2).call(alias1,((stack1 = (depth0 != null ? lookupProperty(depth0,"show_code") : depth0)) != null ? lookupProperty(stack1,"value") : stack1),"==","true",{"name":"ifCond","hash":{},"fn":container.program(43, data, 0, blockParams, depths),"inverse":container.noop,"data":data,"loc":{"start":{"line":473,"column":12},"end":{"line":477,"column":23}}})) != null ? stack1 : "")
    + "          </div>\n";
},"10":function(container,depth0,helpers,partials,data) {
    return "                show_less\n";
},"12":function(container,depth0,helpers,partials,data) {
    return "                with-preview\n";
},"14":function(container,depth0,helpers,partials,data,blockParams,depths) {
    var stack1, alias1=depth0 != null ? depth0 : (container.nullContext || {}), alias2=container.hooks.helperMissing, lookupProperty = container.lookupProperty || function(parent, propertyName) {
        if (Object.prototype.hasOwnProperty.call(parent, propertyName)) {
          return parent[propertyName];
        }
        return undefined
    };

  return "              <div class=\"qld__code-preview\">\n                <span class=\"qld__code-preview-tab\">Vanilla example</span>\n"
    + ((stack1 = (lookupProperty(helpers,"ifCond")||(depth0 && lookupProperty(depth0,"ifCond"))||alias2).call(alias1,((stack1 = (depth0 != null ? lookupProperty(depth0,"show_theme_colors") : depth0)) != null ? lookupProperty(stack1,"value") : stack1),"==","true",{"name":"ifCond","hash":{},"fn":container.program(15, data, 0, blockParams, depths),"inverse":container.noop,"data":data,"loc":{"start":{"line":72,"column":16},"end":{"line":144,"column":27}}})) != null ? stack1 : "")
    + "                <div\n                  class=\"qld__code-preview-body qld__body\"\n"
    + ((stack1 = (lookupProperty(helpers,"ifCond")||(depth0 && lookupProperty(depth0,"ifCond"))||alias2).call(alias1,((stack1 = (depth0 != null ? lookupProperty(depth0,"show_theme_colors") : depth0)) != null ? lookupProperty(stack1,"value") : stack1),"==","false",{"name":"ifCond","hash":{},"fn":container.program(17, data, 0, blockParams, depths),"inverse":container.noop,"data":data,"loc":{"start":{"line":147,"column":18},"end":{"line":149,"column":29}}})) != null ? stack1 : "")
    + "                >\n                  "
    + ((stack1 = container.lambda(((stack1 = (depth0 != null ? lookupProperty(depth0,"code") : depth0)) != null ? lookupProperty(stack1,"value") : stack1), depth0)) != null ? stack1 : "")
    + "\n                </div>\n              </div>\n";
},"15":function(container,depth0,helpers,partials,data,blockParams,depths) {
    var stack1, alias1=container.lambda, alias2=container.escapeExpression, lookupProperty = container.lookupProperty || function(parent, propertyName) {
        if (Object.prototype.hasOwnProperty.call(parent, propertyName)) {
          return parent[propertyName];
        }
        return undefined
    };

  return "                  <div class=\"qld__code-preview-colours\">\n                    <span class=\"qld__code-preview-colours-label\">Palette</span>\n                    <ul>\n                      <li>\n                        <input\n                          id=\"qld__code-preview-colours__default-"
    + alias2(alias1(((stack1 = ((stack1 = (depths[1] != null ? lookupProperty(depths[1],"component") : depths[1])) != null ? lookupProperty(stack1,"data") : stack1)) != null ? lookupProperty(stack1,"assetid") : stack1), depth0))
    + "\"\n                          type=\"radio\"\n                          name=\"qld__code-preview-colours-"
    + alias2(alias1(((stack1 = ((stack1 = (depths[1] != null ? lookupProperty(depths[1],"component") : depths[1])) != null ? lookupProperty(stack1,"data") : stack1)) != null ? lookupProperty(stack1,"assetid") : stack1), depth0))
    + "\"\n                          value=\"\"\n                          checked\n                        />\n                        <label\n                          for=\"qld__code-preview-colours__default-"
    + alias2(alias1(((stack1 = ((stack1 = (depths[1] != null ? lookupProperty(depths[1],"component") : depths[1])) != null ? lookupProperty(stack1,"data") : stack1)) != null ? lookupProperty(stack1,"assetid") : stack1), depth0))
    + "\"\n                        >\n                          Default\n                        </label>\n                      </li>\n                      <li>\n                        <input\n                          id=\"qld__code-preview-colours__light-"
    + alias2(alias1(((stack1 = ((stack1 = (depths[1] != null ? lookupProperty(depths[1],"component") : depths[1])) != null ? lookupProperty(stack1,"data") : stack1)) != null ? lookupProperty(stack1,"assetid") : stack1), depth0))
    + "\"\n                          type=\"radio\"\n                          name=\"qld__code-preview-colours-"
    + alias2(alias1(((stack1 = ((stack1 = (depths[1] != null ? lookupProperty(depths[1],"component") : depths[1])) != null ? lookupProperty(stack1,"data") : stack1)) != null ? lookupProperty(stack1,"assetid") : stack1), depth0))
    + "\"\n                          value=\"qld__body--light\"\n                        />\n                        <label\n                          for=\"qld__code-preview-colours__light-"
    + alias2(alias1(((stack1 = ((stack1 = (depths[1] != null ? lookupProperty(depths[1],"component") : depths[1])) != null ? lookupProperty(stack1,"data") : stack1)) != null ? lookupProperty(stack1,"assetid") : stack1), depth0))
    + "\"\n                        >\n                          Light\n                        </label>\n                      </li>\n                      <li>\n                        <input\n                          id=\"qld__code-preview-colours__alt-"
    + alias2(alias1(((stack1 = ((stack1 = (depths[1] != null ? lookupProperty(depths[1],"component") : depths[1])) != null ? lookupProperty(stack1,"data") : stack1)) != null ? lookupProperty(stack1,"assetid") : stack1), depth0))
    + "\"\n                          type=\"radio\"\n                          name=\"qld__code-preview-colours-"
    + alias2(alias1(((stack1 = ((stack1 = (depths[1] != null ? lookupProperty(depths[1],"component") : depths[1])) != null ? lookupProperty(stack1,"data") : stack1)) != null ? lookupProperty(stack1,"assetid") : stack1), depth0))
    + "\"\n                          value=\"qld__body--alt\"\n                        />\n                        <label\n                          for=\"qld__code-preview-colours__alt-"
    + alias2(alias1(((stack1 = ((stack1 = (depths[1] != null ? lookupProperty(depths[1],"component") : depths[1])) != null ? lookupProperty(stack1,"data") : stack1)) != null ? lookupProperty(stack1,"assetid") : stack1), depth0))
    + "\"\n                        >\n                          Alt\n                        </label>\n                      </li>\n                      <li>\n                        <input\n                          id=\"qld__code-preview-colours__dark-"
    + alias2(alias1(((stack1 = ((stack1 = (depths[1] != null ? lookupProperty(depths[1],"component") : depths[1])) != null ? lookupProperty(stack1,"data") : stack1)) != null ? lookupProperty(stack1,"assetid") : stack1), depth0))
    + "\"\n                          type=\"radio\"\n                          name=\"qld__code-preview-colours-"
    + alias2(alias1(((stack1 = ((stack1 = (depths[1] != null ? lookupProperty(depths[1],"component") : depths[1])) != null ? lookupProperty(stack1,"data") : stack1)) != null ? lookupProperty(stack1,"assetid") : stack1), depth0))
    + "\"\n                          value=\"qld__body--dark\"\n                        />\n                        <label\n                          for=\"qld__code-preview-colours__dark-"
    + alias2(alias1(((stack1 = ((stack1 = (depths[1] != null ? lookupProperty(depths[1],"component") : depths[1])) != null ? lookupProperty(stack1,"data") : stack1)) != null ? lookupProperty(stack1,"assetid") : stack1), depth0))
    + "\"\n                        >\n                          Dark\n                        </label>\n                      </li>\n                      <li>\n                        <input\n                          id=\"qld__code-preview-colours__dark-alt-"
    + alias2(alias1(((stack1 = ((stack1 = (depths[1] != null ? lookupProperty(depths[1],"component") : depths[1])) != null ? lookupProperty(stack1,"data") : stack1)) != null ? lookupProperty(stack1,"assetid") : stack1), depth0))
    + "\"\n                          type=\"radio\"\n                          name=\"qld__code-preview-colours-"
    + alias2(alias1(((stack1 = ((stack1 = (depths[1] != null ? lookupProperty(depths[1],"component") : depths[1])) != null ? lookupProperty(stack1,"data") : stack1)) != null ? lookupProperty(stack1,"assetid") : stack1), depth0))
    + "\"\n                          value=\"qld__body--dark-alt\"\n                        />\n                        <label\n                          for=\"qld__code-preview-colours__dark-alt-"
    + alias2(alias1(((stack1 = ((stack1 = (depths[1] != null ? lookupProperty(depths[1],"component") : depths[1])) != null ? lookupProperty(stack1,"data") : stack1)) != null ? lookupProperty(stack1,"assetid") : stack1), depth0))
    + "\"\n                        >\n                          Dark-alt\n                        </label>\n                      </li>\n                    </ul>\n                  </div>\n";
},"17":function(container,depth0,helpers,partials,data) {
    return "                    style=\"border-radius: 0 12px 0 0;\"\n";
},"19":function(container,depth0,helpers,partials,data) {
    var stack1, lookupProperty = container.lookupProperty || function(parent, propertyName) {
        if (Object.prototype.hasOwnProperty.call(parent, propertyName)) {
          return parent[propertyName];
        }
        return undefined
    };

  return ((stack1 = (lookupProperty(helpers,"ifCond")||(depth0 && lookupProperty(depth0,"ifCond"))||container.hooks.helperMissing).call(depth0 != null ? depth0 : (container.nullContext || {}),((stack1 = (depth0 != null ? lookupProperty(depth0,"show_more_button") : depth0)) != null ? lookupProperty(stack1,"value") : stack1),"==","true",{"name":"ifCond","hash":{},"fn":container.program(20, data, 0),"inverse":container.noop,"data":data,"loc":{"start":{"line":156,"column":14},"end":{"line":171,"column":25}}})) != null ? stack1 : "");
},"20":function(container,depth0,helpers,partials,data) {
    var stack1, lookupProperty = container.lookupProperty || function(parent, propertyName) {
        if (Object.prototype.hasOwnProperty.call(parent, propertyName)) {
          return parent[propertyName];
        }
        return undefined
    };

  return "                <div class=\"qld__code-toggle\">\n                  <button class=\"qld__code-toggle-button\" type=\"button\">\n                    Show more\n                    <svg\n                      class=\"qld__icon qld__icon--sm\"\n                      aria-hidden=\"true\"\n                      xmlns=\"http://www.w3.org/2000/svg\"\n                    >\n                      <use\n                        href=\""
    + container.escapeExpression(container.lambda(((stack1 = ((stack1 = ((stack1 = ((stack1 = (data && lookupProperty(data,"root"))) && lookupProperty(stack1,"site"))) && lookupProperty(stack1,"metadata"))) && lookupProperty(stack1,"coreSiteIcons"))) && lookupProperty(stack1,"value")), depth0))
    + "#chevron-up\"\n                      ></use>\n                    </svg>\n                  </button>\n                </div>\n";
},"22":function(container,depth0,helpers,partials,data) {
    var stack1, lookupProperty = container.lookupProperty || function(parent, propertyName) {
        if (Object.prototype.hasOwnProperty.call(parent, propertyName)) {
          return parent[propertyName];
        }
        return undefined
    };

  return ((stack1 = lookupProperty(helpers,"if").call(depth0 != null ? depth0 : (container.nullContext || {}),((stack1 = (depth0 != null ? lookupProperty(depth0,"github_link") : depth0)) != null ? lookupProperty(stack1,"value") : stack1),{"name":"if","hash":{},"fn":container.program(23, data, 0),"inverse":container.program(30, data, 0),"data":data,"loc":{"start":{"line":174,"column":14},"end":{"line":369,"column":21}}})) != null ? stack1 : "");
},"23":function(container,depth0,helpers,partials,data) {
    var stack1, alias1=depth0 != null ? depth0 : (container.nullContext || {}), lookupProperty = container.lookupProperty || function(parent, propertyName) {
        if (Object.prototype.hasOwnProperty.call(parent, propertyName)) {
          return parent[propertyName];
        }
        return undefined
    };

  return "                <div class=\"qld__code-header\">\n                  <div class=\"qld__code-header-left\">\n"
    + ((stack1 = lookupProperty(helpers,"if").call(alias1,((stack1 = (depth0 != null ? lookupProperty(depth0,"github_link") : depth0)) != null ? lookupProperty(stack1,"value") : stack1),{"name":"if","hash":{},"fn":container.program(24, data, 0),"inverse":container.noop,"data":data,"loc":{"start":{"line":177,"column":20},"end":{"line":196,"column":27}}})) != null ? stack1 : "")
    + ((stack1 = lookupProperty(helpers,"if").call(alias1,((stack1 = (depth0 != null ? lookupProperty(depth0,"figma_link") : depth0)) != null ? lookupProperty(stack1,"value") : stack1),{"name":"if","hash":{},"fn":container.program(26, data, 0),"inverse":container.noop,"data":data,"loc":{"start":{"line":197,"column":20},"end":{"line":216,"column":27}}})) != null ? stack1 : "")
    + ((stack1 = lookupProperty(helpers,"if").call(alias1,((stack1 = (depth0 != null ? lookupProperty(depth0,"action_link_title") : depth0)) != null ? lookupProperty(stack1,"value") : stack1),{"name":"if","hash":{},"fn":container.program(28, data, 0),"inverse":container.noop,"data":data,"loc":{"start":{"line":217,"column":20},"end":{"line":236,"column":27}}})) != null ? stack1 : "")
    + "                  </div>\n                </div>\n";
},"24":function(container,depth0,helpers,partials,data) {
    var stack1, alias1=container.lambda, alias2=container.escapeExpression, lookupProperty = container.lookupProperty || function(parent, propertyName) {
        if (Object.prototype.hasOwnProperty.call(parent, propertyName)) {
          return parent[propertyName];
        }
        return undefined
    };

  return "                      <a\n                        class=\"qld__code-header-link\"\n                        href=\""
    + alias2(alias1(((stack1 = (depth0 != null ? lookupProperty(depth0,"github_link") : depth0)) != null ? lookupProperty(stack1,"value") : stack1), depth0))
    + "\"\n                        rel=\"noopener noreferrer\"\n                        target=\"_blank\"\n                        aria-label=\"Visit Github, opens in new tab\"\n                      >\n                        <span>Github</span>\n                        <svg\n                          class=\"qld__icon qld__icon--sm\"\n                          aria-hidden=\"true\"\n                          xmlns=\"http://www.w3.org/2000/svg\"\n                        >\n                          <use\n                            href=\""
    + alias2(alias1(((stack1 = ((stack1 = ((stack1 = ((stack1 = (data && lookupProperty(data,"root"))) && lookupProperty(stack1,"site"))) && lookupProperty(stack1,"metadata"))) && lookupProperty(stack1,"coreSiteIcons"))) && lookupProperty(stack1,"value")), depth0))
    + "#external-link\"\n                          ></use>\n                        </svg>\n                      </a>\n";
},"26":function(container,depth0,helpers,partials,data) {
    var stack1, alias1=container.lambda, alias2=container.escapeExpression, lookupProperty = container.lookupProperty || function(parent, propertyName) {
        if (Object.prototype.hasOwnProperty.call(parent, propertyName)) {
          return parent[propertyName];
        }
        return undefined
    };

  return "                      <a\n                        class=\"qld__code-header-link\"\n                        href=\""
    + alias2(alias1(((stack1 = (depth0 != null ? lookupProperty(depth0,"figma_link") : depth0)) != null ? lookupProperty(stack1,"value") : stack1), depth0))
    + "\"\n                        rel=\"noopener noreferrer\"\n                        target=\"_blank\"\n                        aria-label=\"Visit Figma, opens in new tab\"\n                      >\n                        <span>Figma</span>\n                        <svg\n                          class=\"qld__icon qld__icon--sm\"\n                          aria-hidden=\"true\"\n                          xmlns=\"http://www.w3.org/2000/svg\"\n                        >\n                          <use\n                            href=\""
    + alias2(alias1(((stack1 = ((stack1 = ((stack1 = ((stack1 = (data && lookupProperty(data,"root"))) && lookupProperty(stack1,"site"))) && lookupProperty(stack1,"metadata"))) && lookupProperty(stack1,"coreSiteIcons"))) && lookupProperty(stack1,"value")), depth0))
    + "#external-link\"\n                          ></use>\n                        </svg>\n                      </a>\n";
},"28":function(container,depth0,helpers,partials,data) {
    var stack1, alias1=container.lambda, alias2=container.escapeExpression, lookupProperty = container.lookupProperty || function(parent, propertyName) {
        if (Object.prototype.hasOwnProperty.call(parent, propertyName)) {
          return parent[propertyName];
        }
        return undefined
    };

  return "                      <a\n                        class=\"qld__code-header-link\"\n                        href=\""
    + alias2(alias1(((stack1 = (depth0 != null ? lookupProperty(depth0,"action_link_address") : depth0)) != null ? lookupProperty(stack1,"value") : stack1), depth0))
    + "\"\n                        rel=\"noopener noreferrer\"\n                        target=\"_blank\"\n                        aria-label=\"Visit "
    + alias2(alias1(((stack1 = (depth0 != null ? lookupProperty(depth0,"action_link_title") : depth0)) != null ? lookupProperty(stack1,"value") : stack1), depth0))
    + ", opens in new tab\"\n                      >\n                        <span>"
    + alias2(alias1(((stack1 = (depth0 != null ? lookupProperty(depth0,"action_link_title") : depth0)) != null ? lookupProperty(stack1,"value") : stack1), depth0))
    + "</span>\n                        <svg\n                          class=\"qld__icon qld__icon--sm\"\n                          aria-hidden=\"true\"\n                          xmlns=\"http://www.w3.org/2000/svg\"\n                        >\n                          <use\n                            href=\""
    + alias2(alias1(((stack1 = ((stack1 = ((stack1 = ((stack1 = (data && lookupProperty(data,"root"))) && lookupProperty(stack1,"site"))) && lookupProperty(stack1,"metadata"))) && lookupProperty(stack1,"coreSiteIcons"))) && lookupProperty(stack1,"value")), depth0))
    + "#external-link\"\n                          ></use>\n                        </svg>\n                      </a>\n";
},"30":function(container,depth0,helpers,partials,data) {
    var stack1, lookupProperty = container.lookupProperty || function(parent, propertyName) {
        if (Object.prototype.hasOwnProperty.call(parent, propertyName)) {
          return parent[propertyName];
        }
        return undefined
    };

  return ((stack1 = lookupProperty(helpers,"if").call(depth0 != null ? depth0 : (container.nullContext || {}),((stack1 = (depth0 != null ? lookupProperty(depth0,"figma_link") : depth0)) != null ? lookupProperty(stack1,"value") : stack1),{"name":"if","hash":{},"fn":container.program(23, data, 0),"inverse":container.program(31, data, 0),"data":data,"loc":{"start":{"line":239,"column":14},"end":{"line":369,"column":14}}})) != null ? stack1 : "");
},"31":function(container,depth0,helpers,partials,data) {
    var stack1, lookupProperty = container.lookupProperty || function(parent, propertyName) {
        if (Object.prototype.hasOwnProperty.call(parent, propertyName)) {
          return parent[propertyName];
        }
        return undefined
    };

  return ((stack1 = lookupProperty(helpers,"if").call(depth0 != null ? depth0 : (container.nullContext || {}),((stack1 = (depth0 != null ? lookupProperty(depth0,"action_link_title") : depth0)) != null ? lookupProperty(stack1,"value") : stack1),{"name":"if","hash":{},"fn":container.program(32, data, 0),"inverse":container.noop,"data":data,"loc":{"start":{"line":304,"column":14},"end":{"line":369,"column":14}}})) != null ? stack1 : "");
},"32":function(container,depth0,helpers,partials,data) {
    var stack1, alias1=depth0 != null ? depth0 : (container.nullContext || {}), lookupProperty = container.lookupProperty || function(parent, propertyName) {
        if (Object.prototype.hasOwnProperty.call(parent, propertyName)) {
          return parent[propertyName];
        }
        return undefined
    };

  return "                <div class=\"qld__code-header\">\n                  <div class=\"qld__code-header-left\">\n"
    + ((stack1 = lookupProperty(helpers,"if").call(alias1,((stack1 = (depth0 != null ? lookupProperty(depth0,"github_link") : depth0)) != null ? lookupProperty(stack1,"value") : stack1),{"name":"if","hash":{},"fn":container.program(24, data, 0),"inverse":container.noop,"data":data,"loc":{"start":{"line":307,"column":20},"end":{"line":326,"column":27}}})) != null ? stack1 : "")
    + ((stack1 = lookupProperty(helpers,"if").call(alias1,((stack1 = (depth0 != null ? lookupProperty(depth0,"figma_link") : depth0)) != null ? lookupProperty(stack1,"value") : stack1),{"name":"if","hash":{},"fn":container.program(26, data, 0),"inverse":container.noop,"data":data,"loc":{"start":{"line":327,"column":20},"end":{"line":346,"column":27}}})) != null ? stack1 : "")
    + ((stack1 = lookupProperty(helpers,"if").call(alias1,((stack1 = (depth0 != null ? lookupProperty(depth0,"action_link_title") : depth0)) != null ? lookupProperty(stack1,"value") : stack1),{"name":"if","hash":{},"fn":container.program(28, data, 0),"inverse":container.noop,"data":data,"loc":{"start":{"line":347,"column":20},"end":{"line":366,"column":27}}})) != null ? stack1 : "")
    + "                  </div>\n                </div>\n              ";
},"34":function(container,depth0,helpers,partials,data) {
    var stack1, alias1=depth0 != null ? depth0 : (container.nullContext || {}), lookupProperty = container.lookupProperty || function(parent, propertyName) {
        if (Object.prototype.hasOwnProperty.call(parent, propertyName)) {
          return parent[propertyName];
        }
        return undefined
    };

  return "              <div class=\"qld__code-header\">\n                <div class=\"qld__code-header-left\">\n"
    + ((stack1 = lookupProperty(helpers,"if").call(alias1,((stack1 = (depth0 != null ? lookupProperty(depth0,"github_link") : depth0)) != null ? lookupProperty(stack1,"value") : stack1),{"name":"if","hash":{},"fn":container.program(35, data, 0),"inverse":container.noop,"data":data,"loc":{"start":{"line":373,"column":18},"end":{"line":392,"column":25}}})) != null ? stack1 : "")
    + ((stack1 = lookupProperty(helpers,"if").call(alias1,((stack1 = (depth0 != null ? lookupProperty(depth0,"figma_link") : depth0)) != null ? lookupProperty(stack1,"value") : stack1),{"name":"if","hash":{},"fn":container.program(37, data, 0),"inverse":container.noop,"data":data,"loc":{"start":{"line":393,"column":18},"end":{"line":412,"column":25}}})) != null ? stack1 : "")
    + ((stack1 = lookupProperty(helpers,"if").call(alias1,((stack1 = (depth0 != null ? lookupProperty(depth0,"action_link_title") : depth0)) != null ? lookupProperty(stack1,"value") : stack1),{"name":"if","hash":{},"fn":container.program(39, data, 0),"inverse":container.noop,"data":data,"loc":{"start":{"line":413,"column":18},"end":{"line":432,"column":25}}})) != null ? stack1 : "")
    + "                </div>\n"
    + ((stack1 = (lookupProperty(helpers,"ifCond")||(depth0 && lookupProperty(depth0,"ifCond"))||container.hooks.helperMissing).call(alias1,((stack1 = (depth0 != null ? lookupProperty(depth0,"show_code") : depth0)) != null ? lookupProperty(stack1,"value") : stack1),"==","true",{"name":"ifCond","hash":{},"fn":container.program(41, data, 0),"inverse":container.noop,"data":data,"loc":{"start":{"line":434,"column":16},"end":{"line":470,"column":27}}})) != null ? stack1 : "")
    + "              </div>\n";
},"35":function(container,depth0,helpers,partials,data) {
    var stack1, alias1=container.lambda, alias2=container.escapeExpression, lookupProperty = container.lookupProperty || function(parent, propertyName) {
        if (Object.prototype.hasOwnProperty.call(parent, propertyName)) {
          return parent[propertyName];
        }
        return undefined
    };

  return "                    <a\n                      class=\"qld__code-header-link\"\n                      href=\""
    + alias2(alias1(((stack1 = (depth0 != null ? lookupProperty(depth0,"github_link") : depth0)) != null ? lookupProperty(stack1,"value") : stack1), depth0))
    + "\"\n                      rel=\"noopener noreferrer\"\n                      target=\"_blank\"\n                      aria-label=\"Visit Github, opens in new tab\"\n                    >\n                      <span>Github</span>\n                      <svg\n                        class=\"qld__icon qld__icon--sm\"\n                        aria-hidden=\"true\"\n                        xmlns=\"http://www.w3.org/2000/svg\"\n                      >\n                        <use\n                          href=\""
    + alias2(alias1(((stack1 = ((stack1 = ((stack1 = ((stack1 = (data && lookupProperty(data,"root"))) && lookupProperty(stack1,"site"))) && lookupProperty(stack1,"metadata"))) && lookupProperty(stack1,"coreSiteIcons"))) && lookupProperty(stack1,"value")), depth0))
    + "#external-link\"\n                        ></use>\n                      </svg>\n                    </a>\n";
},"37":function(container,depth0,helpers,partials,data) {
    var stack1, alias1=container.lambda, alias2=container.escapeExpression, lookupProperty = container.lookupProperty || function(parent, propertyName) {
        if (Object.prototype.hasOwnProperty.call(parent, propertyName)) {
          return parent[propertyName];
        }
        return undefined
    };

  return "                    <a\n                      class=\"qld__code-header-link\"\n                      href=\""
    + alias2(alias1(((stack1 = (depth0 != null ? lookupProperty(depth0,"figma_link") : depth0)) != null ? lookupProperty(stack1,"value") : stack1), depth0))
    + "\"\n                      rel=\"noopener noreferrer\"\n                      target=\"_blank\"\n                      aria-label=\"Visit Figma, opens in new tab\"\n                    >\n                      <span>Figma</span>\n                      <svg\n                        class=\"qld__icon qld__icon--sm\"\n                        aria-hidden=\"true\"\n                        xmlns=\"http://www.w3.org/2000/svg\"\n                      >\n                        <use\n                          href=\""
    + alias2(alias1(((stack1 = ((stack1 = ((stack1 = ((stack1 = (data && lookupProperty(data,"root"))) && lookupProperty(stack1,"site"))) && lookupProperty(stack1,"metadata"))) && lookupProperty(stack1,"coreSiteIcons"))) && lookupProperty(stack1,"value")), depth0))
    + "#external-link\"\n                        ></use>\n                      </svg>\n                    </a>\n";
},"39":function(container,depth0,helpers,partials,data) {
    var stack1, alias1=container.lambda, alias2=container.escapeExpression, lookupProperty = container.lookupProperty || function(parent, propertyName) {
        if (Object.prototype.hasOwnProperty.call(parent, propertyName)) {
          return parent[propertyName];
        }
        return undefined
    };

  return "                    <a\n                      class=\"qld__code-header-link\"\n                      href=\""
    + alias2(alias1(((stack1 = (depth0 != null ? lookupProperty(depth0,"action_link_address") : depth0)) != null ? lookupProperty(stack1,"value") : stack1), depth0))
    + "\"\n                      rel=\"noopener noreferrer\"\n                      target=\"_blank\"\n                      aria-label=\"Visit "
    + alias2(alias1(((stack1 = (depth0 != null ? lookupProperty(depth0,"action_link_title") : depth0)) != null ? lookupProperty(stack1,"value") : stack1), depth0))
    + ", opens in new tab\"\n                    >\n                      <span>"
    + alias2(alias1(((stack1 = (depth0 != null ? lookupProperty(depth0,"action_link_title") : depth0)) != null ? lookupProperty(stack1,"value") : stack1), depth0))
    + "</span>\n                      <svg\n                        class=\"qld__icon qld__icon--sm\"\n                        aria-hidden=\"true\"\n                        xmlns=\"http://www.w3.org/2000/svg\"\n                      >\n                        <use\n                          href=\""
    + alias2(alias1(((stack1 = ((stack1 = ((stack1 = ((stack1 = (data && lookupProperty(data,"root"))) && lookupProperty(stack1,"site"))) && lookupProperty(stack1,"metadata"))) && lookupProperty(stack1,"coreSiteIcons"))) && lookupProperty(stack1,"value")), depth0))
    + "#external-link\"\n                        ></use>\n                      </svg>\n                    </a>\n";
},"41":function(container,depth0,helpers,partials,data) {
    var stack1, alias1=container.lambda, alias2=container.escapeExpression, lookupProperty = container.lookupProperty || function(parent, propertyName) {
        if (Object.prototype.hasOwnProperty.call(parent, propertyName)) {
          return parent[propertyName];
        }
        return undefined
    };

  return "                  <div class=\"qld__code-header-right\">\n                    <button\n                      class=\"qld__btn qld__code-copy--button\"\n                      type=\"button\"\n                    >\n                      <div class=\"clean\">\n                        <svg\n                          class=\"qld__icon qld__icon--sm\"\n                          aria-hidden=\"true\"\n                          xmlns=\"http://www.w3.org/2000/svg\"\n                        >\n                          <use\n                            href=\""
    + alias2(alias1(((stack1 = ((stack1 = ((stack1 = ((stack1 = (data && lookupProperty(data,"root"))) && lookupProperty(stack1,"site"))) && lookupProperty(stack1,"metadata"))) && lookupProperty(stack1,"coreSiteIcons"))) && lookupProperty(stack1,"value")), depth0))
    + "#copy\"\n                          ></use>\n                        </svg>\n                        <span class=\"qld__code-copy--button-text\">Copy</span>\n                      </div>\n                      <div class=\"dirty\">\n                        <svg\n                          class=\"qld__icon qld__icon--md\"\n                          aria-hidden=\"true\"\n                          xmlns=\"http://www.w3.org/2000/svg\"\n                        >\n                          <use\n                            href=\""
    + alias2(alias1(((stack1 = ((stack1 = ((stack1 = ((stack1 = (data && lookupProperty(data,"root"))) && lookupProperty(stack1,"site"))) && lookupProperty(stack1,"metadata"))) && lookupProperty(stack1,"coreSiteIcons"))) && lookupProperty(stack1,"value")), depth0))
    + "#status-success\"\n                          ></use>\n                        </svg>\n                        <span class=\"qld__code-copy--button-text\">Copied</span>\n                      </div>\n                      <div class=\"qld__code-tooltip\">\n                        <span class=\"clean\">Copy</span>\n                        <span class=\"dirty\">Copied</span>\n                      </div>\n                    </button>\n                  </div>\n";
},"43":function(container,depth0,helpers,partials,data) {
    var stack1, lookupProperty = container.lookupProperty || function(parent, propertyName) {
        if (Object.prototype.hasOwnProperty.call(parent, propertyName)) {
          return parent[propertyName];
        }
        return undefined
    };

  return "              <code class=\"qld__code-body\">\n                "
    + container.escapeExpression(container.lambda(((stack1 = (depth0 != null ? lookupProperty(depth0,"code") : depth0)) != null ? lookupProperty(stack1,"value") : stack1), depth0))
    + "\n              </code>\n";
},"compiler":[8,">= 4.3.0"],"main":function(container,depth0,helpers,partials,data,blockParams,depths) {
    var stack1, lookupProperty = container.lookupProperty || function(parent, propertyName) {
        if (Object.prototype.hasOwnProperty.call(parent, propertyName)) {
          return parent[propertyName];
        }
        return undefined
    };

  return ((stack1 = lookupProperty(helpers,"with").call(depth0 != null ? depth0 : (container.nullContext || {}),((stack1 = ((stack1 = (depth0 != null ? lookupProperty(depth0,"component") : depth0)) != null ? lookupProperty(stack1,"data") : stack1)) != null ? lookupProperty(stack1,"metadata") : stack1),{"name":"with","hash":{},"fn":container.program(1, data, 0, blockParams, depths),"inverse":container.noop,"data":data,"loc":{"start":{"line":1,"column":0},"end":{"line":483,"column":9}}})) != null ? stack1 : "");
},"useData":true,"useDepths":true}