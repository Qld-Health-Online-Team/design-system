{"1":function(container,depth0,helpers,partials,data,blockParams,depths) {
    var stack1, alias1=depth0 != null ? depth0 : (container.nullContext || {}), alias2=container.hooks.helperMissing, lookupProperty = container.lookupProperty || function(parent, propertyName) {
        if (Object.prototype.hasOwnProperty.call(parent, propertyName)) {
          return parent[propertyName];
        }
        return undefined
    };

  return "  <footer class=\"qld__footer "
    + container.escapeExpression(container.lambda(((stack1 = (depth0 != null ? lookupProperty(depth0,"footerStyle") : depth0)) != null ? lookupProperty(stack1,"value") : stack1), depth0))
    + "\" role=\"contentinfo\">\n\n"
    + ((stack1 = lookupProperty(helpers,"if").call(alias1,((stack1 = (depth0 != null ? lookupProperty(depth0,"footerSiteTitle") : depth0)) != null ? lookupProperty(stack1,"value") : stack1),{"name":"if","hash":{},"fn":container.program(2, data, 0, blockParams, depths),"inverse":container.noop,"data":data,"loc":{"start":{"line":5,"column":4},"end":{"line":15,"column":11}}})) != null ? stack1 : "")
    + "\n    <div class=\"container-fluid\">\n      <div class=\"row\">\n        <div class=\"col-xs-12 col-lg-3 qld__footer__column\">\n          <div class=\"container-fluid\">\n            <div class=\"row qld__footer-contact\">\n              <div class=\"col-xs-12 col-sm-8 col-lg-12\">\n"
    + ((stack1 = lookupProperty(helpers,"if").call(alias1,(depth0 != null ? lookupProperty(depth0,"footerCTAHeading") : depth0),{"name":"if","hash":{},"fn":container.program(4, data, 0, blockParams, depths),"inverse":container.noop,"data":data,"loc":{"start":{"line":23,"column":16},"end":{"line":27,"column":23}}})) != null ? stack1 : "")
    + ((stack1 = lookupProperty(helpers,"if").call(alias1,(depth0 != null ? lookupProperty(depth0,"footerCTALead") : depth0),{"name":"if","hash":{},"fn":container.program(6, data, 0, blockParams, depths),"inverse":container.noop,"data":data,"loc":{"start":{"line":28,"column":16},"end":{"line":32,"column":23}}})) != null ? stack1 : "")
    + ((stack1 = lookupProperty(helpers,"if").call(alias1,((stack1 = (depth0 != null ? lookupProperty(depth0,"footerCTAContactPhone") : depth0)) != null ? lookupProperty(stack1,"value") : stack1),{"name":"if","hash":{},"fn":container.program(8, data, 0, blockParams, depths),"inverse":container.noop,"data":data,"loc":{"start":{"line":33,"column":16},"end":{"line":55,"column":23}}})) != null ? stack1 : "")
    + ((stack1 = lookupProperty(helpers,"if").call(alias1,((stack1 = (depth0 != null ? lookupProperty(depth0,"footerCTAContactEmail") : depth0)) != null ? lookupProperty(stack1,"value") : stack1),{"name":"if","hash":{},"fn":container.program(13, data, 0, blockParams, depths),"inverse":container.noop,"data":data,"loc":{"start":{"line":56,"column":16},"end":{"line":78,"column":23}}})) != null ? stack1 : "")
    + "              </div>\n              <div class=\"col-xs-12 col-sm-4 col-lg-12\">\n"
    + ((stack1 = lookupProperty(helpers,"with").call(alias1,(lookupProperty(helpers,"jsonParse")||(depth0 && lookupProperty(depth0,"jsonParse"))||alias2).call(alias1,((stack1 = (depth0 != null ? lookupProperty(depth0,"footerMetaMetadata") : depth0)) != null ? lookupProperty(stack1,"value") : stack1),{"name":"jsonParse","hash":{},"data":data,"loc":{"start":{"line":81,"column":24},"end":{"line":81,"column":60}}}),{"name":"with","hash":{},"fn":container.program(18, data, 0, blockParams, depths),"inverse":container.noop,"data":data,"loc":{"start":{"line":81,"column":16},"end":{"line":99,"column":25}}})) != null ? stack1 : "")
    + "              </div>\n            </div>\n          </div>\n        </div>\n\n"
    + ((stack1 = lookupProperty(helpers,"with").call(alias1,(lookupProperty(helpers,"jsonParse")||(depth0 && lookupProperty(depth0,"jsonParse"))||alias2).call(alias1,((stack1 = (depth0 != null ? lookupProperty(depth0,"footerMetaMetadata") : depth0)) != null ? lookupProperty(stack1,"value") : stack1),{"name":"jsonParse","hash":{},"data":data,"loc":{"start":{"line":105,"column":16},"end":{"line":105,"column":52}}}),{"name":"with","hash":{},"fn":container.program(24, data, 0, blockParams, depths),"inverse":container.noop,"data":data,"loc":{"start":{"line":105,"column":8},"end":{"line":138,"column":17}}})) != null ? stack1 : "")
    + "\n"
    + ((stack1 = lookupProperty(helpers,"with").call(alias1,(lookupProperty(helpers,"jsonParse")||(depth0 && lookupProperty(depth0,"jsonParse"))||alias2).call(alias1,((stack1 = (depth0 != null ? lookupProperty(depth0,"footerMetaMetadata") : depth0)) != null ? lookupProperty(stack1,"value") : stack1),{"name":"jsonParse","hash":{},"data":data,"loc":{"start":{"line":140,"column":16},"end":{"line":140,"column":52}}}),{"name":"with","hash":{},"fn":container.program(33, data, 0, blockParams, depths),"inverse":container.noop,"data":data,"loc":{"start":{"line":140,"column":8},"end":{"line":168,"column":17}}})) != null ? stack1 : "")
    + "\n"
    + ((stack1 = lookupProperty(helpers,"with").call(alias1,(lookupProperty(helpers,"jsonParse")||(depth0 && lookupProperty(depth0,"jsonParse"))||alias2).call(alias1,((stack1 = (depth0 != null ? lookupProperty(depth0,"footerMetaMetadata") : depth0)) != null ? lookupProperty(stack1,"value") : stack1),{"name":"jsonParse","hash":{},"data":data,"loc":{"start":{"line":170,"column":16},"end":{"line":170,"column":52}}}),{"name":"with","hash":{},"fn":container.program(36, data, 0, blockParams, depths),"inverse":container.noop,"data":data,"loc":{"start":{"line":170,"column":8},"end":{"line":252,"column":17}}})) != null ? stack1 : "")
    + "\n        <div class=\"col-xs-12 qld__footer__column\">\n          <div class=\"\">\n\n"
    + ((stack1 = lookupProperty(helpers,"if").call(alias1,((stack1 = (depth0 != null ? lookupProperty(depth0,"footerAcknowledgementsHeading") : depth0)) != null ? lookupProperty(stack1,"value") : stack1),{"name":"if","hash":{},"fn":container.program(55, data, 0, blockParams, depths),"inverse":container.noop,"data":data,"loc":{"start":{"line":257,"column":12},"end":{"line":261,"column":19}}})) != null ? stack1 : "")
    + "\n"
    + ((stack1 = lookupProperty(helpers,"if").call(alias1,((stack1 = (depth0 != null ? lookupProperty(depth0,"footerAcknowledgements") : depth0)) != null ? lookupProperty(stack1,"value") : stack1),{"name":"if","hash":{},"fn":container.program(57, data, 0, blockParams, depths),"inverse":container.noop,"data":data,"loc":{"start":{"line":263,"column":12},"end":{"line":267,"column":19}}})) != null ? stack1 : "")
    + "\n"
    + ((stack1 = lookupProperty(helpers,"with").call(alias1,(lookupProperty(helpers,"jsonParse")||(depth0 && lookupProperty(depth0,"jsonParse"))||alias2).call(alias1,((stack1 = (depth0 != null ? lookupProperty(depth0,"footerMetaMetadata") : depth0)) != null ? lookupProperty(stack1,"value") : stack1),{"name":"jsonParse","hash":{},"data":data,"loc":{"start":{"line":269,"column":20},"end":{"line":269,"column":56}}}),{"name":"with","hash":{},"fn":container.program(59, data, 0, blockParams, depths),"inverse":container.noop,"data":data,"loc":{"start":{"line":269,"column":12},"end":{"line":305,"column":21}}})) != null ? stack1 : "")
    + "\n"
    + ((stack1 = lookupProperty(helpers,"if").call(alias1,((stack1 = (depth0 != null ? lookupProperty(depth0,"footerCopyrightMessage") : depth0)) != null ? lookupProperty(stack1,"value") : stack1),{"name":"if","hash":{},"fn":container.program(68, data, 0, blockParams, depths),"inverse":container.noop,"data":data,"loc":{"start":{"line":307,"column":12},"end":{"line":311,"column":19}}})) != null ? stack1 : "")
    + "\n"
    + ((stack1 = lookupProperty(helpers,"with").call(alias1,(lookupProperty(helpers,"jsonParse")||(depth0 && lookupProperty(depth0,"jsonParse"))||alias2).call(alias1,((stack1 = (depth0 != null ? lookupProperty(depth0,"footerMetaMetadata") : depth0)) != null ? lookupProperty(stack1,"value") : stack1),{"name":"jsonParse","hash":{},"data":data,"loc":{"start":{"line":313,"column":20},"end":{"line":313,"column":56}}}),{"name":"with","hash":{},"fn":container.program(70, data, 0, blockParams, depths),"inverse":container.noop,"data":data,"loc":{"start":{"line":313,"column":12},"end":{"line":333,"column":21}}})) != null ? stack1 : "")
    + "\n          </div>\n        </div>\n      </div>\n    </div>\n  </footer>\n";
},"2":function(container,depth0,helpers,partials,data) {
    var stack1, lookupProperty = container.lookupProperty || function(parent, propertyName) {
        if (Object.prototype.hasOwnProperty.call(parent, propertyName)) {
          return parent[propertyName];
        }
        return undefined
    };

  return "      <div class=\"container-fluid\">\n        <div class=\"row qld__footer__row\">\n          <div class=\"col-xs-12 qld__footer__column\">\n            <div class=\"qld__footer__title\">\n              <h2 class=\"qld__footer__heading\">"
    + container.escapeExpression(container.lambda(((stack1 = (depth0 != null ? lookupProperty(depth0,"footerSiteTitle") : depth0)) != null ? lookupProperty(stack1,"value") : stack1), depth0))
    + "</h2>\n            </div>\n          </div>\n        </div>\n      </div>\n";
},"4":function(container,depth0,helpers,partials,data) {
    var stack1, lookupProperty = container.lookupProperty || function(parent, propertyName) {
        if (Object.prototype.hasOwnProperty.call(parent, propertyName)) {
          return parent[propertyName];
        }
        return undefined
    };

  return "                  <h3 class=\"qld__footer__heading\">\n                    "
    + container.escapeExpression(container.lambda(((stack1 = (depth0 != null ? lookupProperty(depth0,"footerCTAHeading") : depth0)) != null ? lookupProperty(stack1,"value") : stack1), depth0))
    + "\n                  </h3>\n";
},"6":function(container,depth0,helpers,partials,data) {
    var stack1, lookupProperty = container.lookupProperty || function(parent, propertyName) {
        if (Object.prototype.hasOwnProperty.call(parent, propertyName)) {
          return parent[propertyName];
        }
        return undefined
    };

  return "                  <p class=\"qld__footer__cta-content\">\n                    "
    + container.escapeExpression(container.lambda(((stack1 = (depth0 != null ? lookupProperty(depth0,"footerCTALead") : depth0)) != null ? lookupProperty(stack1,"value") : stack1), depth0))
    + "\n                  </p>\n";
},"8":function(container,depth0,helpers,partials,data) {
    var stack1, lookupProperty = container.lookupProperty || function(parent, propertyName) {
        if (Object.prototype.hasOwnProperty.call(parent, propertyName)) {
          return parent[propertyName];
        }
        return undefined
    };

  return "                  <p class=\"qld__footer__cta-content\">\n                    <svg\n                      class=\"qld__icon qld__icon--lead\"\n                      xmlns=\"http://www.w3.org/2000/svg\"\n                    >\n                      <use\n                        href=\""
    + container.escapeExpression(container.lambda(((stack1 = ((stack1 = ((stack1 = ((stack1 = (data && lookupProperty(data,"root"))) && lookupProperty(stack1,"site"))) && lookupProperty(stack1,"metadata"))) && lookupProperty(stack1,"coreSiteIcons"))) && lookupProperty(stack1,"value")), depth0))
    + "#phone\"\n                      ></use>\n                    </svg>\n                    <strong>Phone:</strong>\n"
    + ((stack1 = lookupProperty(helpers,"if").call(depth0 != null ? depth0 : (container.nullContext || {}),((stack1 = (depth0 != null ? lookupProperty(depth0,"footerCTAContactPhoneLink") : depth0)) != null ? lookupProperty(stack1,"value") : stack1),{"name":"if","hash":{},"fn":container.program(9, data, 0),"inverse":container.program(11, data, 0),"data":data,"loc":{"start":{"line":44,"column":20},"end":{"line":53,"column":27}}})) != null ? stack1 : "")
    + "                  </p>\n";
},"9":function(container,depth0,helpers,partials,data) {
    var stack1, alias1=container.lambda, alias2=container.escapeExpression, lookupProperty = container.lookupProperty || function(parent, propertyName) {
        if (Object.prototype.hasOwnProperty.call(parent, propertyName)) {
          return parent[propertyName];
        }
        return undefined
    };

  return "                      <a\n                        href=\""
    + alias2(alias1(((stack1 = (depth0 != null ? lookupProperty(depth0,"footerCTAContactPhoneLink") : depth0)) != null ? lookupProperty(stack1,"value") : stack1), depth0))
    + "\"\n                        target=\"_blank\"\n                      >\n                        "
    + alias2(alias1(((stack1 = (depth0 != null ? lookupProperty(depth0,"footerCTAContactPhone") : depth0)) != null ? lookupProperty(stack1,"value") : stack1), depth0))
    + "\n                      </a>\n";
},"11":function(container,depth0,helpers,partials,data) {
    var stack1, lookupProperty = container.lookupProperty || function(parent, propertyName) {
        if (Object.prototype.hasOwnProperty.call(parent, propertyName)) {
          return parent[propertyName];
        }
        return undefined
    };

  return "                      "
    + container.escapeExpression(container.lambda(((stack1 = (depth0 != null ? lookupProperty(depth0,"footerCTAContactPhone") : depth0)) != null ? lookupProperty(stack1,"value") : stack1), depth0))
    + "\n";
},"13":function(container,depth0,helpers,partials,data) {
    var stack1, lookupProperty = container.lookupProperty || function(parent, propertyName) {
        if (Object.prototype.hasOwnProperty.call(parent, propertyName)) {
          return parent[propertyName];
        }
        return undefined
    };

  return "                  <p class=\"qld__footer__cta-content\">\n                    <svg\n                      class=\"qld__icon qld__icon--lead\"\n                      xmlns=\"http://www.w3.org/2000/svg\"\n                    >\n                      <use\n                        href=\""
    + container.escapeExpression(container.lambda(((stack1 = ((stack1 = ((stack1 = ((stack1 = (data && lookupProperty(data,"root"))) && lookupProperty(stack1,"site"))) && lookupProperty(stack1,"metadata"))) && lookupProperty(stack1,"coreSiteIcons"))) && lookupProperty(stack1,"value")), depth0))
    + "#email\"\n                      ></use>\n                    </svg>\n                    <strong>Email:</strong>\n"
    + ((stack1 = lookupProperty(helpers,"if").call(depth0 != null ? depth0 : (container.nullContext || {}),((stack1 = (depth0 != null ? lookupProperty(depth0,"footerCTAContactEmailLink") : depth0)) != null ? lookupProperty(stack1,"value") : stack1),{"name":"if","hash":{},"fn":container.program(14, data, 0),"inverse":container.program(16, data, 0),"data":data,"loc":{"start":{"line":67,"column":20},"end":{"line":76,"column":27}}})) != null ? stack1 : "")
    + "                  </p>\n";
},"14":function(container,depth0,helpers,partials,data) {
    var stack1, alias1=container.lambda, alias2=container.escapeExpression, lookupProperty = container.lookupProperty || function(parent, propertyName) {
        if (Object.prototype.hasOwnProperty.call(parent, propertyName)) {
          return parent[propertyName];
        }
        return undefined
    };

  return "                      <a\n                        href=\""
    + alias2(alias1(((stack1 = (depth0 != null ? lookupProperty(depth0,"footerCTAContactEmailLink") : depth0)) != null ? lookupProperty(stack1,"value") : stack1), depth0))
    + "\"\n                        target=\"_blank\"\n                      >\n                        "
    + alias2(alias1(((stack1 = (depth0 != null ? lookupProperty(depth0,"footerCTAContactEmail") : depth0)) != null ? lookupProperty(stack1,"value") : stack1), depth0))
    + "\n                      </a>\n";
},"16":function(container,depth0,helpers,partials,data) {
    var stack1, lookupProperty = container.lookupProperty || function(parent, propertyName) {
        if (Object.prototype.hasOwnProperty.call(parent, propertyName)) {
          return parent[propertyName];
        }
        return undefined
    };

  return "                      "
    + container.escapeExpression(container.lambda(((stack1 = (depth0 != null ? lookupProperty(depth0,"footerCTAContactEmail") : depth0)) != null ? lookupProperty(stack1,"value") : stack1), depth0))
    + "\n";
},"18":function(container,depth0,helpers,partials,data) {
    var stack1, lookupProperty = container.lookupProperty || function(parent, propertyName) {
        if (Object.prototype.hasOwnProperty.call(parent, propertyName)) {
          return parent[propertyName];
        }
        return undefined
    };

  return ((stack1 = lookupProperty(helpers,"if").call(depth0 != null ? depth0 : (container.nullContext || {}),(depth0 != null ? lookupProperty(depth0,"footerCTALink") : depth0),{"name":"if","hash":{},"fn":container.program(19, data, 0),"inverse":container.noop,"data":data,"loc":{"start":{"line":82,"column":18},"end":{"line":98,"column":25}}})) != null ? stack1 : "");
},"19":function(container,depth0,helpers,partials,data) {
    var stack1, lookupProperty = container.lookupProperty || function(parent, propertyName) {
        if (Object.prototype.hasOwnProperty.call(parent, propertyName)) {
          return parent[propertyName];
        }
        return undefined
    };

  return ((stack1 = (lookupProperty(helpers,"ifCond")||(depth0 && lookupProperty(depth0,"ifCond"))||container.hooks.helperMissing).call(depth0 != null ? depth0 : (container.nullContext || {}),((stack1 = (depth0 != null ? lookupProperty(depth0,"footerCTALink") : depth0)) != null ? lookupProperty(stack1,"asset_type_code") : stack1),"==","page_redirect",{"name":"ifCond","hash":{},"fn":container.program(20, data, 0),"inverse":container.program(22, data, 0),"data":data,"loc":{"start":{"line":83,"column":20},"end":{"line":97,"column":31}}})) != null ? stack1 : "");
},"20":function(container,depth0,helpers,partials,data) {
    var alias1=depth0 != null ? depth0 : (container.nullContext || {}), alias2=container.escapeExpression, lookupProperty = container.lookupProperty || function(parent, propertyName) {
        if (Object.prototype.hasOwnProperty.call(parent, propertyName)) {
          return parent[propertyName];
        }
        return undefined
    };

  return "                      <a\n                        class=\"qld__btn qld__btn--secondary\"\n                        href=\""
    + alias2((lookupProperty(helpers,"urldecode")||(depth0 && lookupProperty(depth0,"urldecode"))||container.hooks.helperMissing).call(alias1,lookupProperty(helpers,"lookup").call(alias1,(depth0 != null ? lookupProperty(depth0,"footerCTALink") : depth0),"redirect_url^urlencode",{"name":"lookup","hash":{},"data":data,"loc":{"start":{"line":86,"column":42},"end":{"line":86,"column":89}}}),{"name":"urldecode","hash":{},"data":data,"loc":{"start":{"line":86,"column":30},"end":{"line":86,"column":91}}}))
    + "\"\n                      >\n                        "
    + alias2(lookupProperty(helpers,"lookup").call(alias1,(depth0 != null ? lookupProperty(depth0,"footerCTALink") : depth0),"asset_short_name^escapequotes",{"name":"lookup","hash":{},"data":data,"loc":{"start":{"line":88,"column":24},"end":{"line":88,"column":80}}}))
    + "\n                      </a>\n";
},"22":function(container,depth0,helpers,partials,data) {
    var alias1=depth0 != null ? depth0 : (container.nullContext || {}), alias2=container.escapeExpression, lookupProperty = container.lookupProperty || function(parent, propertyName) {
        if (Object.prototype.hasOwnProperty.call(parent, propertyName)) {
          return parent[propertyName];
        }
        return undefined
    };

  return "                      <a\n                        class=\"qld__btn qld__btn--secondary\"\n                        href=\""
    + alias2((lookupProperty(helpers,"urldecode")||(depth0 && lookupProperty(depth0,"urldecode"))||container.hooks.helperMissing).call(alias1,lookupProperty(helpers,"lookup").call(alias1,(depth0 != null ? lookupProperty(depth0,"footerCTALink") : depth0),"asset_url^urlencode",{"name":"lookup","hash":{},"data":data,"loc":{"start":{"line":93,"column":42},"end":{"line":93,"column":86}}}),{"name":"urldecode","hash":{},"data":data,"loc":{"start":{"line":93,"column":30},"end":{"line":93,"column":88}}}))
    + "\"\n                      >\n                        "
    + alias2(lookupProperty(helpers,"lookup").call(alias1,(depth0 != null ? lookupProperty(depth0,"footerCTALink") : depth0),"asset_short_name^escapequotes",{"name":"lookup","hash":{},"data":data,"loc":{"start":{"line":95,"column":24},"end":{"line":95,"column":80}}}))
    + "\n                      </a>\n";
},"24":function(container,depth0,helpers,partials,data,blockParams,depths) {
    var stack1, lookupProperty = container.lookupProperty || function(parent, propertyName) {
        if (Object.prototype.hasOwnProperty.call(parent, propertyName)) {
          return parent[propertyName];
        }
        return undefined
    };

  return ((stack1 = lookupProperty(helpers,"if").call(depth0 != null ? depth0 : (container.nullContext || {}),(depth0 != null ? lookupProperty(depth0,"footerOptionalSecondLinksList") : depth0),{"name":"if","hash":{},"fn":container.program(25, data, 0, blockParams, depths),"inverse":container.noop,"data":data,"loc":{"start":{"line":106,"column":10},"end":{"line":137,"column":17}}})) != null ? stack1 : "");
},"25":function(container,depth0,helpers,partials,data,blockParams,depths) {
    var stack1, alias1=depth0 != null ? depth0 : (container.nullContext || {}), lookupProperty = container.lookupProperty || function(parent, propertyName) {
        if (Object.prototype.hasOwnProperty.call(parent, propertyName)) {
          return parent[propertyName];
        }
        return undefined
    };

  return "            <div class=\"col-xs-12 col-lg-2 qld__footer__column\">\n              <nav class=\"qld__footer__navigation\" aria-label=\"footer\">\n"
    + ((stack1 = lookupProperty(helpers,"if").call(alias1,((stack1 = (depths[1] != null ? lookupProperty(depths[1],"footerOptionalExtraLinksHeading") : depths[1])) != null ? lookupProperty(stack1,"value") : stack1),{"name":"if","hash":{},"fn":container.program(26, data, 0, blockParams, depths),"inverse":container.noop,"data":data,"loc":{"start":{"line":109,"column":16},"end":{"line":113,"column":23}}})) != null ? stack1 : "")
    + "                <ul class=\"qld__link-list\">\n"
    + ((stack1 = lookupProperty(helpers,"each").call(alias1,(depth0 != null ? lookupProperty(depth0,"footerOptionalSecondLinksList") : depth0),{"name":"each","hash":{},"fn":container.program(28, data, 0, blockParams, depths),"inverse":container.noop,"data":data,"loc":{"start":{"line":115,"column":18},"end":{"line":133,"column":27}}})) != null ? stack1 : "")
    + "                </ul>\n              </nav>\n            </div>\n";
},"26":function(container,depth0,helpers,partials,data,blockParams,depths) {
    var stack1, lookupProperty = container.lookupProperty || function(parent, propertyName) {
        if (Object.prototype.hasOwnProperty.call(parent, propertyName)) {
          return parent[propertyName];
        }
        return undefined
    };

  return "                  <h3 class=\"qld__footer__heading\">\n                    "
    + container.escapeExpression(container.lambda(((stack1 = (depths[1] != null ? lookupProperty(depths[1],"footerOptionalExtraLinksHeading") : depths[1])) != null ? lookupProperty(stack1,"value") : stack1), depth0))
    + "\n                  </h3>\n";
},"28":function(container,depth0,helpers,partials,data) {
    var stack1, lookupProperty = container.lookupProperty || function(parent, propertyName) {
        if (Object.prototype.hasOwnProperty.call(parent, propertyName)) {
          return parent[propertyName];
        }
        return undefined
    };

  return "                    <li>\n"
    + ((stack1 = (lookupProperty(helpers,"ifCond")||(depth0 && lookupProperty(depth0,"ifCond"))||container.hooks.helperMissing).call(depth0 != null ? depth0 : (container.nullContext || {}),(depth0 != null ? lookupProperty(depth0,"asset_type_code") : depth0),"==","page_redirect",{"name":"ifCond","hash":{},"fn":container.program(29, data, 0),"inverse":container.program(31, data, 0),"data":data,"loc":{"start":{"line":117,"column":22},"end":{"line":131,"column":33}}})) != null ? stack1 : "")
    + "                    </li>\n";
},"29":function(container,depth0,helpers,partials,data) {
    var alias1=depth0 != null ? depth0 : (container.nullContext || {}), alias2=container.escapeExpression, lookupProperty = container.lookupProperty || function(parent, propertyName) {
        if (Object.prototype.hasOwnProperty.call(parent, propertyName)) {
          return parent[propertyName];
        }
        return undefined
    };

  return "                        <a\n                          class=\"qld__footer__clickable__link\"\n                          href=\""
    + alias2((lookupProperty(helpers,"urldecode")||(depth0 && lookupProperty(depth0,"urldecode"))||container.hooks.helperMissing).call(alias1,lookupProperty(helpers,"lookup").call(alias1,depth0,"redirect_url^urlencode",{"name":"lookup","hash":{},"data":data,"loc":{"start":{"line":120,"column":44},"end":{"line":120,"column":82}}}),{"name":"urldecode","hash":{},"data":data,"loc":{"start":{"line":120,"column":32},"end":{"line":120,"column":84}}}))
    + "\"\n                        >\n                          "
    + alias2(lookupProperty(helpers,"lookup").call(alias1,depth0,"asset_short_name^escapequotes",{"name":"lookup","hash":{},"data":data,"loc":{"start":{"line":122,"column":26},"end":{"line":122,"column":73}}}))
    + "\n                        </a>\n";
},"31":function(container,depth0,helpers,partials,data) {
    var alias1=depth0 != null ? depth0 : (container.nullContext || {}), alias2=container.escapeExpression, lookupProperty = container.lookupProperty || function(parent, propertyName) {
        if (Object.prototype.hasOwnProperty.call(parent, propertyName)) {
          return parent[propertyName];
        }
        return undefined
    };

  return "                        <a\n                          class=\"qld__footer__clickable__link\"\n                          href=\""
    + alias2((lookupProperty(helpers,"urldecode")||(depth0 && lookupProperty(depth0,"urldecode"))||container.hooks.helperMissing).call(alias1,lookupProperty(helpers,"lookup").call(alias1,depth0,"asset_url^urlencode",{"name":"lookup","hash":{},"data":data,"loc":{"start":{"line":127,"column":44},"end":{"line":127,"column":79}}}),{"name":"urldecode","hash":{},"data":data,"loc":{"start":{"line":127,"column":32},"end":{"line":127,"column":81}}}))
    + "\"\n                        >\n                          "
    + alias2(lookupProperty(helpers,"lookup").call(alias1,depth0,"asset_short_name^escapequotes",{"name":"lookup","hash":{},"data":data,"loc":{"start":{"line":129,"column":26},"end":{"line":129,"column":73}}}))
    + "\n                        </a>\n";
},"33":function(container,depth0,helpers,partials,data,blockParams,depths) {
    var stack1, lookupProperty = container.lookupProperty || function(parent, propertyName) {
        if (Object.prototype.hasOwnProperty.call(parent, propertyName)) {
          return parent[propertyName];
        }
        return undefined
    };

  return ((stack1 = lookupProperty(helpers,"if").call(depth0 != null ? depth0 : (container.nullContext || {}),(depth0 != null ? lookupProperty(depth0,"footerLinks") : depth0),{"name":"if","hash":{},"fn":container.program(34, data, 0, blockParams, depths),"inverse":container.noop,"data":data,"loc":{"start":{"line":141,"column":10},"end":{"line":167,"column":17}}})) != null ? stack1 : "");
},"34":function(container,depth0,helpers,partials,data,blockParams,depths) {
    var stack1, lookupProperty = container.lookupProperty || function(parent, propertyName) {
        if (Object.prototype.hasOwnProperty.call(parent, propertyName)) {
          return parent[propertyName];
        }
        return undefined
    };

  return "            <div class=\"col-xs-12 col-lg-2 qld__footer__column\">\n              <nav class=\"qld__footer__navigation\" aria-label=\"footer\">\n                <ul class=\"qld__link-list\">\n"
    + ((stack1 = lookupProperty(helpers,"each").call(depth0 != null ? depth0 : (container.nullContext || {}),(depth0 != null ? lookupProperty(depth0,"footerLinks") : depth0),{"name":"each","hash":{},"fn":container.program(28, data, 0, blockParams, depths),"inverse":container.noop,"data":data,"loc":{"start":{"line":145,"column":18},"end":{"line":163,"column":27}}})) != null ? stack1 : "")
    + "                </ul>\n              </nav>\n            </div>\n";
},"36":function(container,depth0,helpers,partials,data,blockParams,depths) {
    var stack1, lookupProperty = container.lookupProperty || function(parent, propertyName) {
        if (Object.prototype.hasOwnProperty.call(parent, propertyName)) {
          return parent[propertyName];
        }
        return undefined
    };

  return ((stack1 = lookupProperty(helpers,"if").call(depth0 != null ? depth0 : (container.nullContext || {}),(depth0 != null ? lookupProperty(depth0,"footerSocialLinks") : depth0),{"name":"if","hash":{},"fn":container.program(37, data, 0, blockParams, depths),"inverse":container.noop,"data":data,"loc":{"start":{"line":171,"column":10},"end":{"line":251,"column":17}}})) != null ? stack1 : "");
},"37":function(container,depth0,helpers,partials,data,blockParams,depths) {
    var stack1, alias1=depth0 != null ? depth0 : (container.nullContext || {}), lookupProperty = container.lookupProperty || function(parent, propertyName) {
        if (Object.prototype.hasOwnProperty.call(parent, propertyName)) {
          return parent[propertyName];
        }
        return undefined
    };

  return "            <div class=\"col-xs-12 col-lg-2 qld__footer__column\">\n              <nav class=\"qld__footer__social\" aria-label=\"social media links\">\n"
    + ((stack1 = lookupProperty(helpers,"if").call(alias1,((stack1 = (depths[1] != null ? lookupProperty(depths[1],"footerSocialLinksHeading") : depths[1])) != null ? lookupProperty(stack1,"value") : stack1),{"name":"if","hash":{},"fn":container.program(38, data, 0, blockParams, depths),"inverse":container.noop,"data":data,"loc":{"start":{"line":174,"column":16},"end":{"line":178,"column":23}}})) != null ? stack1 : "")
    + "                <ul class=\"qld__link-list\">\n"
    + ((stack1 = lookupProperty(helpers,"each").call(alias1,(depth0 != null ? lookupProperty(depth0,"footerSocialLinks") : depth0),{"name":"each","hash":{},"fn":container.program(40, data, 0, blockParams, depths),"inverse":container.noop,"data":data,"loc":{"start":{"line":180,"column":18},"end":{"line":247,"column":27}}})) != null ? stack1 : "")
    + "                </ul>\n              </nav>\n            </div>\n";
},"38":function(container,depth0,helpers,partials,data,blockParams,depths) {
    var stack1, lookupProperty = container.lookupProperty || function(parent, propertyName) {
        if (Object.prototype.hasOwnProperty.call(parent, propertyName)) {
          return parent[propertyName];
        }
        return undefined
    };

  return "                  <h3 class=\"qld__footer__heading\">\n                    "
    + container.escapeExpression(container.lambda(((stack1 = (depths[1] != null ? lookupProperty(depths[1],"footerSocialLinksHeading") : depths[1])) != null ? lookupProperty(stack1,"value") : stack1), depth0))
    + "\n                  </h3>\n";
},"40":function(container,depth0,helpers,partials,data) {
    var stack1, alias1=depth0 != null ? depth0 : (container.nullContext || {}), alias2=container.hooks.helperMissing, lookupProperty = container.lookupProperty || function(parent, propertyName) {
        if (Object.prototype.hasOwnProperty.call(parent, propertyName)) {
          return parent[propertyName];
        }
        return undefined
    };

  return "                    <li>\n"
    + ((stack1 = (lookupProperty(helpers,"ifCond")||(depth0 && lookupProperty(depth0,"ifCond"))||alias2).call(alias1,(depth0 != null ? lookupProperty(depth0,"asset_type_code") : depth0),"==","page_redirect",{"name":"ifCond","hash":{},"fn":container.program(41, data, 0),"inverse":container.program(43, data, 0),"data":data,"loc":{"start":{"line":182,"column":22},"end":{"line":186,"column":33}}})) != null ? stack1 : "")
    + ((stack1 = (lookupProperty(helpers,"ifCond")||(depth0 && lookupProperty(depth0,"ifCond"))||alias2).call(alias1,lookupProperty(helpers,"lookup").call(alias1,depth0,"asset_short_name^escapequotes",{"name":"lookup","hash":{},"data":data,"loc":{"start":{"line":187,"column":32},"end":{"line":187,"column":77}}}),"contains","facebook",{"name":"ifCond","hash":{},"fn":container.program(45, data, 0),"inverse":container.noop,"data":data,"loc":{"start":{"line":187,"column":22},"end":{"line":197,"column":33}}})) != null ? stack1 : "")
    + ((stack1 = (lookupProperty(helpers,"ifCond")||(depth0 && lookupProperty(depth0,"ifCond"))||alias2).call(alias1,lookupProperty(helpers,"lookup").call(alias1,depth0,"asset_short_name^escapequotes",{"name":"lookup","hash":{},"data":data,"loc":{"start":{"line":198,"column":32},"end":{"line":198,"column":77}}}),"contains","linkedin",{"name":"ifCond","hash":{},"fn":container.program(47, data, 0),"inverse":container.noop,"data":data,"loc":{"start":{"line":198,"column":22},"end":{"line":208,"column":33}}})) != null ? stack1 : "")
    + ((stack1 = (lookupProperty(helpers,"ifCond")||(depth0 && lookupProperty(depth0,"ifCond"))||alias2).call(alias1,lookupProperty(helpers,"lookup").call(alias1,depth0,"asset_short_name^escapequotes",{"name":"lookup","hash":{},"data":data,"loc":{"start":{"line":209,"column":32},"end":{"line":209,"column":77}}}),"contains","youtube",{"name":"ifCond","hash":{},"fn":container.program(49, data, 0),"inverse":container.noop,"data":data,"loc":{"start":{"line":209,"column":22},"end":{"line":219,"column":33}}})) != null ? stack1 : "")
    + ((stack1 = (lookupProperty(helpers,"ifCond")||(depth0 && lookupProperty(depth0,"ifCond"))||alias2).call(alias1,lookupProperty(helpers,"lookup").call(alias1,depth0,"asset_short_name^escapequotes",{"name":"lookup","hash":{},"data":data,"loc":{"start":{"line":220,"column":32},"end":{"line":220,"column":77}}}),"contains","instagram",{"name":"ifCond","hash":{},"fn":container.program(51, data, 0),"inverse":container.noop,"data":data,"loc":{"start":{"line":220,"column":22},"end":{"line":230,"column":33}}})) != null ? stack1 : "")
    + ((stack1 = (lookupProperty(helpers,"ifCond")||(depth0 && lookupProperty(depth0,"ifCond"))||alias2).call(alias1,lookupProperty(helpers,"lookup").call(alias1,depth0,"asset_short_name^escapequotes",{"name":"lookup","hash":{},"data":data,"loc":{"start":{"line":231,"column":32},"end":{"line":231,"column":77}}}),"contains","twitter",{"name":"ifCond","hash":{},"fn":container.program(53, data, 0),"inverse":container.noop,"data":data,"loc":{"start":{"line":231,"column":22},"end":{"line":241,"column":33}}})) != null ? stack1 : "")
    + "                      <span class=\"qld__footer__social__label\">\n                        "
    + container.escapeExpression(lookupProperty(helpers,"lookup").call(alias1,depth0,"asset_short_name^escapequotes",{"name":"lookup","hash":{},"data":data,"loc":{"start":{"line":243,"column":24},"end":{"line":243,"column":71}}}))
    + "\n                      </span>\n                      </a>\n                    </li>\n";
},"41":function(container,depth0,helpers,partials,data) {
    var alias1=depth0 != null ? depth0 : (container.nullContext || {}), lookupProperty = container.lookupProperty || function(parent, propertyName) {
        if (Object.prototype.hasOwnProperty.call(parent, propertyName)) {
          return parent[propertyName];
        }
        return undefined
    };

  return "                        <a class=\"qld__footer__clickable__link\" href=\""
    + container.escapeExpression((lookupProperty(helpers,"urldecode")||(depth0 && lookupProperty(depth0,"urldecode"))||container.hooks.helperMissing).call(alias1,lookupProperty(helpers,"lookup").call(alias1,depth0,"redirect_url^urlencode",{"name":"lookup","hash":{},"data":data,"loc":{"start":{"line":183,"column":82},"end":{"line":183,"column":120}}}),{"name":"urldecode","hash":{},"data":data,"loc":{"start":{"line":183,"column":70},"end":{"line":183,"column":122}}}))
    + "\">\n";
},"43":function(container,depth0,helpers,partials,data) {
    var alias1=depth0 != null ? depth0 : (container.nullContext || {}), lookupProperty = container.lookupProperty || function(parent, propertyName) {
        if (Object.prototype.hasOwnProperty.call(parent, propertyName)) {
          return parent[propertyName];
        }
        return undefined
    };

  return "                        <a class=\"qld__footer__clickable__link\" href=\""
    + container.escapeExpression((lookupProperty(helpers,"urldecode")||(depth0 && lookupProperty(depth0,"urldecode"))||container.hooks.helperMissing).call(alias1,lookupProperty(helpers,"lookup").call(alias1,depth0,"asset_url^urlencode",{"name":"lookup","hash":{},"data":data,"loc":{"start":{"line":185,"column":82},"end":{"line":185,"column":117}}}),{"name":"urldecode","hash":{},"data":data,"loc":{"start":{"line":185,"column":70},"end":{"line":185,"column":119}}}))
    + "\">\n";
},"45":function(container,depth0,helpers,partials,data) {
    var stack1, lookupProperty = container.lookupProperty || function(parent, propertyName) {
        if (Object.prototype.hasOwnProperty.call(parent, propertyName)) {
          return parent[propertyName];
        }
        return undefined
    };

  return "                        <svg\n                          class=\"qld__icon qld__icon--md\"\n                          aria-hidden=\"true\"\n                          xmlns=\"http://www.w3.org/2000/svg\"\n                        >\n                          <use\n                            href=\""
    + container.escapeExpression(container.lambda(((stack1 = ((stack1 = ((stack1 = ((stack1 = (data && lookupProperty(data,"root"))) && lookupProperty(stack1,"site"))) && lookupProperty(stack1,"metadata"))) && lookupProperty(stack1,"coreSiteIcons"))) && lookupProperty(stack1,"value")), depth0))
    + "#facebook\"\n                          ></use>\n                        </svg>\n";
},"47":function(container,depth0,helpers,partials,data) {
    var stack1, lookupProperty = container.lookupProperty || function(parent, propertyName) {
        if (Object.prototype.hasOwnProperty.call(parent, propertyName)) {
          return parent[propertyName];
        }
        return undefined
    };

  return "                        <svg\n                          class=\"qld__icon qld__icon--md\"\n                          aria-hidden=\"true\"\n                          xmlns=\"http://www.w3.org/2000/svg\"\n                        >\n                          <use\n                            href=\""
    + container.escapeExpression(container.lambda(((stack1 = ((stack1 = ((stack1 = ((stack1 = (data && lookupProperty(data,"root"))) && lookupProperty(stack1,"site"))) && lookupProperty(stack1,"metadata"))) && lookupProperty(stack1,"coreSiteIcons"))) && lookupProperty(stack1,"value")), depth0))
    + "#linkedin\"\n                          ></use>\n                        </svg>\n";
},"49":function(container,depth0,helpers,partials,data) {
    var stack1, lookupProperty = container.lookupProperty || function(parent, propertyName) {
        if (Object.prototype.hasOwnProperty.call(parent, propertyName)) {
          return parent[propertyName];
        }
        return undefined
    };

  return "                        <svg\n                          class=\"qld__icon qld__icon--md\"\n                          aria-hidden=\"true\"\n                          xmlns=\"http://www.w3.org/2000/svg\"\n                        >\n                          <use\n                            href=\""
    + container.escapeExpression(container.lambda(((stack1 = ((stack1 = ((stack1 = ((stack1 = (data && lookupProperty(data,"root"))) && lookupProperty(stack1,"site"))) && lookupProperty(stack1,"metadata"))) && lookupProperty(stack1,"coreSiteIcons"))) && lookupProperty(stack1,"value")), depth0))
    + "#youtube\"\n                          ></use>\n                        </svg>\n";
},"51":function(container,depth0,helpers,partials,data) {
    var stack1, lookupProperty = container.lookupProperty || function(parent, propertyName) {
        if (Object.prototype.hasOwnProperty.call(parent, propertyName)) {
          return parent[propertyName];
        }
        return undefined
    };

  return "                        <svg\n                          class=\"qld__icon qld__icon--md\"\n                          aria-hidden=\"true\"\n                          xmlns=\"http://www.w3.org/2000/svg\"\n                        >\n                          <use\n                            href=\""
    + container.escapeExpression(container.lambda(((stack1 = ((stack1 = ((stack1 = ((stack1 = (data && lookupProperty(data,"root"))) && lookupProperty(stack1,"site"))) && lookupProperty(stack1,"metadata"))) && lookupProperty(stack1,"coreSiteIcons"))) && lookupProperty(stack1,"value")), depth0))
    + "#instagram\"\n                          ></use>\n                        </svg>\n";
},"53":function(container,depth0,helpers,partials,data) {
    var stack1, lookupProperty = container.lookupProperty || function(parent, propertyName) {
        if (Object.prototype.hasOwnProperty.call(parent, propertyName)) {
          return parent[propertyName];
        }
        return undefined
    };

  return "                        <svg\n                          class=\"qld__icon qld__icon--md\"\n                          aria-hidden=\"true\"\n                          xmlns=\"http://www.w3.org/2000/svg\"\n                        >\n                          <use\n                            href=\""
    + container.escapeExpression(container.lambda(((stack1 = ((stack1 = ((stack1 = ((stack1 = (data && lookupProperty(data,"root"))) && lookupProperty(stack1,"site"))) && lookupProperty(stack1,"metadata"))) && lookupProperty(stack1,"coreSiteIcons"))) && lookupProperty(stack1,"value")), depth0))
    + "#x\"\n                          ></use>\n                        </svg>\n";
},"55":function(container,depth0,helpers,partials,data) {
    var stack1, lookupProperty = container.lookupProperty || function(parent, propertyName) {
        if (Object.prototype.hasOwnProperty.call(parent, propertyName)) {
          return parent[propertyName];
        }
        return undefined
    };

  return "              <h3 class=\"qld__footer__heading\">\n                "
    + container.escapeExpression(container.lambda(((stack1 = (depth0 != null ? lookupProperty(depth0,"footerAcknowledgementsHeading") : depth0)) != null ? lookupProperty(stack1,"value") : stack1), depth0))
    + "\n              </h3>\n";
},"57":function(container,depth0,helpers,partials,data) {
    var stack1, lookupProperty = container.lookupProperty || function(parent, propertyName) {
        if (Object.prototype.hasOwnProperty.call(parent, propertyName)) {
          return parent[propertyName];
        }
        return undefined
    };

  return "              <p class=\"qld__footer__acknowledgements\">\n                "
    + container.escapeExpression(container.lambda(((stack1 = (depth0 != null ? lookupProperty(depth0,"footerAcknowledgements") : depth0)) != null ? lookupProperty(stack1,"value") : stack1), depth0))
    + "\n              </p>\n";
},"59":function(container,depth0,helpers,partials,data) {
    var stack1, lookupProperty = container.lookupProperty || function(parent, propertyName) {
        if (Object.prototype.hasOwnProperty.call(parent, propertyName)) {
          return parent[propertyName];
        }
        return undefined
    };

  return ((stack1 = lookupProperty(helpers,"if").call(depth0 != null ? depth0 : (container.nullContext || {}),(depth0 != null ? lookupProperty(depth0,"footerLogo") : depth0),{"name":"if","hash":{},"fn":container.program(60, data, 0),"inverse":container.noop,"data":data,"loc":{"start":{"line":270,"column":14},"end":{"line":304,"column":21}}})) != null ? stack1 : "");
},"60":function(container,depth0,helpers,partials,data) {
    var stack1, lookupProperty = container.lookupProperty || function(parent, propertyName) {
        if (Object.prototype.hasOwnProperty.call(parent, propertyName)) {
          return parent[propertyName];
        }
        return undefined
    };

  return ((stack1 = lookupProperty(helpers,"if").call(depth0 != null ? depth0 : (container.nullContext || {}),(depth0 != null ? lookupProperty(depth0,"footerCopyrightLink") : depth0),{"name":"if","hash":{},"fn":container.program(61, data, 0),"inverse":container.program(66, data, 0),"data":data,"loc":{"start":{"line":271,"column":16},"end":{"line":303,"column":23}}})) != null ? stack1 : "");
},"61":function(container,depth0,helpers,partials,data) {
    var stack1, lookupProperty = container.lookupProperty || function(parent, propertyName) {
        if (Object.prototype.hasOwnProperty.call(parent, propertyName)) {
          return parent[propertyName];
        }
        return undefined
    };

  return ((stack1 = (lookupProperty(helpers,"ifCond")||(depth0 && lookupProperty(depth0,"ifCond"))||container.hooks.helperMissing).call(depth0 != null ? depth0 : (container.nullContext || {}),((stack1 = (depth0 != null ? lookupProperty(depth0,"footerCopyrightLink") : depth0)) != null ? lookupProperty(stack1,"asset_type_code") : stack1),"==","page_redirect",{"name":"ifCond","hash":{},"fn":container.program(62, data, 0),"inverse":container.program(64, data, 0),"data":data,"loc":{"start":{"line":272,"column":18},"end":{"line":294,"column":29}}})) != null ? stack1 : "");
},"62":function(container,depth0,helpers,partials,data) {
    var alias1=depth0 != null ? depth0 : (container.nullContext || {}), alias2=container.hooks.helperMissing, alias3=container.escapeExpression, lookupProperty = container.lookupProperty || function(parent, propertyName) {
        if (Object.prototype.hasOwnProperty.call(parent, propertyName)) {
          return parent[propertyName];
        }
        return undefined
    };

  return "                    <a\n                      class=\"qld__footer__logo\"\n                      href=\""
    + alias3((lookupProperty(helpers,"urldecode")||(depth0 && lookupProperty(depth0,"urldecode"))||alias2).call(alias1,lookupProperty(helpers,"lookup").call(alias1,(depth0 != null ? lookupProperty(depth0,"footerCopyrightLink") : depth0),"redirect_url^urlencode",{"name":"lookup","hash":{},"data":data,"loc":{"start":{"line":275,"column":40},"end":{"line":275,"column":93}}}),{"name":"urldecode","hash":{},"data":data,"loc":{"start":{"line":275,"column":28},"end":{"line":275,"column":95}}}))
    + "\"\n                    >\n                      <img\n                        class=\"qld__footer__logo-image\"\n                        alt=\"Queensland Government\"\n                        src=\""
    + alias3((lookupProperty(helpers,"urldecode")||(depth0 && lookupProperty(depth0,"urldecode"))||alias2).call(alias1,lookupProperty(helpers,"lookup").call(alias1,(depth0 != null ? lookupProperty(depth0,"footerLogo") : depth0),"asset_url^urlencode",{"name":"lookup","hash":{},"data":data,"loc":{"start":{"line":280,"column":41},"end":{"line":280,"column":82}}}),{"name":"urldecode","hash":{},"data":data,"loc":{"start":{"line":280,"column":29},"end":{"line":280,"column":84}}}))
    + "\"\n                      />\n                    </a>\n";
},"64":function(container,depth0,helpers,partials,data) {
    var alias1=depth0 != null ? depth0 : (container.nullContext || {}), alias2=container.hooks.helperMissing, alias3=container.escapeExpression, lookupProperty = container.lookupProperty || function(parent, propertyName) {
        if (Object.prototype.hasOwnProperty.call(parent, propertyName)) {
          return parent[propertyName];
        }
        return undefined
    };

  return "                    <a\n                      class=\"qld__footer__logo\"\n                      href=\""
    + alias3((lookupProperty(helpers,"urldecode")||(depth0 && lookupProperty(depth0,"urldecode"))||alias2).call(alias1,lookupProperty(helpers,"lookup").call(alias1,(depth0 != null ? lookupProperty(depth0,"footerCopyrightLink") : depth0),"asset_url^urlencode",{"name":"lookup","hash":{},"data":data,"loc":{"start":{"line":286,"column":40},"end":{"line":286,"column":90}}}),{"name":"urldecode","hash":{},"data":data,"loc":{"start":{"line":286,"column":28},"end":{"line":286,"column":92}}}))
    + "\"\n                    >\n                      <img\n                        class=\"qld__footer__logo-image\"\n                        alt=\"Queensland Government\"\n                        src=\""
    + alias3((lookupProperty(helpers,"urldecode")||(depth0 && lookupProperty(depth0,"urldecode"))||alias2).call(alias1,lookupProperty(helpers,"lookup").call(alias1,(depth0 != null ? lookupProperty(depth0,"footerLogo") : depth0),"asset_url^urlencode",{"name":"lookup","hash":{},"data":data,"loc":{"start":{"line":291,"column":41},"end":{"line":291,"column":82}}}),{"name":"urldecode","hash":{},"data":data,"loc":{"start":{"line":291,"column":29},"end":{"line":291,"column":84}}}))
    + "\"\n                      />\n                    </a>\n";
},"66":function(container,depth0,helpers,partials,data) {
    var alias1=depth0 != null ? depth0 : (container.nullContext || {}), lookupProperty = container.lookupProperty || function(parent, propertyName) {
        if (Object.prototype.hasOwnProperty.call(parent, propertyName)) {
          return parent[propertyName];
        }
        return undefined
    };

  return "                  <a class=\"qld__footer__logo\" href=\"https://www.qld.gov.au/\">\n                    <img\n                      class=\"qld__footer__logo-image\"\n                      alt=\"Queensland Government\"\n                      src=\""
    + container.escapeExpression((lookupProperty(helpers,"urldecode")||(depth0 && lookupProperty(depth0,"urldecode"))||container.hooks.helperMissing).call(alias1,lookupProperty(helpers,"lookup").call(alias1,(depth0 != null ? lookupProperty(depth0,"footerLogo") : depth0),"asset_url^urlencode",{"name":"lookup","hash":{},"data":data,"loc":{"start":{"line":300,"column":39},"end":{"line":300,"column":80}}}),{"name":"urldecode","hash":{},"data":data,"loc":{"start":{"line":300,"column":27},"end":{"line":300,"column":82}}}))
    + "\"\n                    />\n                  </a>\n";
},"68":function(container,depth0,helpers,partials,data) {
    var stack1, lookupProperty = container.lookupProperty || function(parent, propertyName) {
        if (Object.prototype.hasOwnProperty.call(parent, propertyName)) {
          return parent[propertyName];
        }
        return undefined
    };

  return "              <p class=\"qld__footer__copyrightMessage\">\n                "
    + container.escapeExpression(container.lambda(((stack1 = (depth0 != null ? lookupProperty(depth0,"footerCopyrightMessage") : depth0)) != null ? lookupProperty(stack1,"value") : stack1), depth0))
    + "\n              </p>\n";
},"70":function(container,depth0,helpers,partials,data) {
    var stack1, lookupProperty = container.lookupProperty || function(parent, propertyName) {
        if (Object.prototype.hasOwnProperty.call(parent, propertyName)) {
          return parent[propertyName];
        }
        return undefined
    };

  return ((stack1 = lookupProperty(helpers,"if").call(depth0 != null ? depth0 : (container.nullContext || {}),(depth0 != null ? lookupProperty(depth0,"footerCopyrightLink") : depth0),{"name":"if","hash":{},"fn":container.program(71, data, 0),"inverse":container.noop,"data":data,"loc":{"start":{"line":314,"column":14},"end":{"line":332,"column":21}}})) != null ? stack1 : "");
},"71":function(container,depth0,helpers,partials,data) {
    var stack1, lookupProperty = container.lookupProperty || function(parent, propertyName) {
        if (Object.prototype.hasOwnProperty.call(parent, propertyName)) {
          return parent[propertyName];
        }
        return undefined
    };

  return ((stack1 = (lookupProperty(helpers,"ifCond")||(depth0 && lookupProperty(depth0,"ifCond"))||container.hooks.helperMissing).call(depth0 != null ? depth0 : (container.nullContext || {}),((stack1 = (depth0 != null ? lookupProperty(depth0,"footerCopyrightLink") : depth0)) != null ? lookupProperty(stack1,"asset_type_code") : stack1),"==","page_redirect",{"name":"ifCond","hash":{},"fn":container.program(72, data, 0),"inverse":container.program(74, data, 0),"data":data,"loc":{"start":{"line":315,"column":16},"end":{"line":331,"column":27}}})) != null ? stack1 : "");
},"72":function(container,depth0,helpers,partials,data) {
    var alias1=depth0 != null ? depth0 : (container.nullContext || {}), alias2=container.escapeExpression, lookupProperty = container.lookupProperty || function(parent, propertyName) {
        if (Object.prototype.hasOwnProperty.call(parent, propertyName)) {
          return parent[propertyName];
        }
        return undefined
    };

  return "                  <a\n                    class=\"qld__footer__clickable__link qld__footer__copyright-link\"\n                    href=\""
    + alias2((lookupProperty(helpers,"urldecode")||(depth0 && lookupProperty(depth0,"urldecode"))||container.hooks.helperMissing).call(alias1,lookupProperty(helpers,"lookup").call(alias1,(depth0 != null ? lookupProperty(depth0,"footerCopyrightLink") : depth0),"redirect_url^urlencode",{"name":"lookup","hash":{},"data":data,"loc":{"start":{"line":318,"column":38},"end":{"line":318,"column":91}}}),{"name":"urldecode","hash":{},"data":data,"loc":{"start":{"line":318,"column":26},"end":{"line":318,"column":93}}}))
    + "\"\n                    rel=\"external\"\n                  >\n                    "
    + alias2(lookupProperty(helpers,"lookup").call(alias1,(depth0 != null ? lookupProperty(depth0,"footerCopyrightLink") : depth0),"asset_short_name^escapequotes",{"name":"lookup","hash":{},"data":data,"loc":{"start":{"line":321,"column":20},"end":{"line":321,"column":82}}}))
    + "\n                  </a>\n";
},"74":function(container,depth0,helpers,partials,data) {
    var alias1=depth0 != null ? depth0 : (container.nullContext || {}), alias2=container.escapeExpression, lookupProperty = container.lookupProperty || function(parent, propertyName) {
        if (Object.prototype.hasOwnProperty.call(parent, propertyName)) {
          return parent[propertyName];
        }
        return undefined
    };

  return "                  <a\n                    class=\"qld__footer__clickable__link qld__footer__copyright-link\"\n                    href=\""
    + alias2((lookupProperty(helpers,"urldecode")||(depth0 && lookupProperty(depth0,"urldecode"))||container.hooks.helperMissing).call(alias1,lookupProperty(helpers,"lookup").call(alias1,(depth0 != null ? lookupProperty(depth0,"footerCopyrightLink") : depth0),"asset_url^urlencode",{"name":"lookup","hash":{},"data":data,"loc":{"start":{"line":326,"column":38},"end":{"line":326,"column":88}}}),{"name":"urldecode","hash":{},"data":data,"loc":{"start":{"line":326,"column":26},"end":{"line":326,"column":90}}}))
    + "\"\n                    rel=\"external\"\n                  >\n                    "
    + alias2(lookupProperty(helpers,"lookup").call(alias1,(depth0 != null ? lookupProperty(depth0,"footerCopyrightLink") : depth0),"asset_short_name^escapequotes",{"name":"lookup","hash":{},"data":data,"loc":{"start":{"line":329,"column":20},"end":{"line":329,"column":82}}}))
    + "\n                  </a>\n";
},"compiler":[8,">= 4.3.0"],"main":function(container,depth0,helpers,partials,data,blockParams,depths) {
    var stack1, lookupProperty = container.lookupProperty || function(parent, propertyName) {
        if (Object.prototype.hasOwnProperty.call(parent, propertyName)) {
          return parent[propertyName];
        }
        return undefined
    };

  return "<!--FOOTER -->\n"
    + ((stack1 = lookupProperty(helpers,"with").call(depth0 != null ? depth0 : (container.nullContext || {}),((stack1 = (depth0 != null ? lookupProperty(depth0,"site") : depth0)) != null ? lookupProperty(stack1,"metadata") : stack1),{"name":"with","hash":{},"fn":container.program(1, data, 0, blockParams, depths),"inverse":container.noop,"data":data,"loc":{"start":{"line":2,"column":0},"end":{"line":340,"column":9}}})) != null ? stack1 : "");
},"useData":true,"useDepths":true}