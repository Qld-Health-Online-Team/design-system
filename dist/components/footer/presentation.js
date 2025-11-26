{"1":function(container,depth0,helpers,partials,data,blockParams,depths) {
    var stack1, alias1=depth0 != null ? depth0 : (container.nullContext || {}), alias2=container.hooks.helperMissing, lookupProperty = container.lookupProperty || function(parent, propertyName) {
        if (Object.prototype.hasOwnProperty.call(parent, propertyName)) {
          return parent[propertyName];
        }
        return undefined
    };

  return "<footer class=\"qld__footer "
    + container.escapeExpression(container.lambda(((stack1 = (depth0 != null ? lookupProperty(depth0,"footerStyle") : depth0)) != null ? lookupProperty(stack1,"value") : stack1), depth0))
    + "\" role=\"contentinfo\">\n\n"
    + ((stack1 = lookupProperty(helpers,"if").call(alias1,((stack1 = (depth0 != null ? lookupProperty(depth0,"footerSiteTitle") : depth0)) != null ? lookupProperty(stack1,"value") : stack1),{"name":"if","hash":{},"fn":container.program(2, data, 0, blockParams, depths),"inverse":container.noop,"data":data,"loc":{"start":{"line":5,"column":4},"end":{"line":15,"column":11}}})) != null ? stack1 : "")
    + "\n    <div class=\"container-fluid\">\n        <div class=\"row\">\n            <div class=\"col-xs-12 col-lg-3 qld__footer__column\">\n                <div class=\"container-fluid\">\n                    <div class=\"row qld__footer-contact\">\n                        <div class=\"col-xs-12 col-sm-8 col-lg-12\">\n"
    + ((stack1 = lookupProperty(helpers,"if").call(alias1,(depth0 != null ? lookupProperty(depth0,"footerCTAHeading") : depth0),{"name":"if","hash":{},"fn":container.program(4, data, 0, blockParams, depths),"inverse":container.noop,"data":data,"loc":{"start":{"line":23,"column":28},"end":{"line":25,"column":35}}})) != null ? stack1 : "")
    + ((stack1 = lookupProperty(helpers,"if").call(alias1,(depth0 != null ? lookupProperty(depth0,"footerCTALead") : depth0),{"name":"if","hash":{},"fn":container.program(6, data, 0, blockParams, depths),"inverse":container.noop,"data":data,"loc":{"start":{"line":26,"column":28},"end":{"line":30,"column":35}}})) != null ? stack1 : "")
    + ((stack1 = lookupProperty(helpers,"if").call(alias1,((stack1 = (depth0 != null ? lookupProperty(depth0,"footerCTAContactPhone") : depth0)) != null ? lookupProperty(stack1,"value") : stack1),{"name":"if","hash":{},"fn":container.program(8, data, 0, blockParams, depths),"inverse":container.noop,"data":data,"loc":{"start":{"line":31,"column":27},"end":{"line":37,"column":35}}})) != null ? stack1 : "")
    + ((stack1 = lookupProperty(helpers,"if").call(alias1,((stack1 = (depth0 != null ? lookupProperty(depth0,"footerCTAContactEmail") : depth0)) != null ? lookupProperty(stack1,"value") : stack1),{"name":"if","hash":{},"fn":container.program(13, data, 0, blockParams, depths),"inverse":container.noop,"data":data,"loc":{"start":{"line":38,"column":27},"end":{"line":44,"column":35}}})) != null ? stack1 : "")
    + "                        </div>\n                        <div class=\"col-xs-12 col-sm-4 col-lg-12\">\n"
    + ((stack1 = lookupProperty(helpers,"with").call(alias1,(lookupProperty(helpers,"jsonParse")||(depth0 && lookupProperty(depth0,"jsonParse"))||alias2).call(alias1,((stack1 = (depth0 != null ? lookupProperty(depth0,"footerMetaMetadata") : depth0)) != null ? lookupProperty(stack1,"value") : stack1),{"name":"jsonParse","hash":{},"data":data,"loc":{"start":{"line":47,"column":36},"end":{"line":47,"column":72}}}),{"name":"with","hash":{},"fn":container.program(18, data, 0, blockParams, depths),"inverse":container.noop,"data":data,"loc":{"start":{"line":47,"column":28},"end":{"line":55,"column":37}}})) != null ? stack1 : "")
    + "                        </div>\n                    </div>\n                </div>\n            </div>\n            \n"
    + ((stack1 = lookupProperty(helpers,"with").call(alias1,(lookupProperty(helpers,"jsonParse")||(depth0 && lookupProperty(depth0,"jsonParse"))||alias2).call(alias1,((stack1 = (depth0 != null ? lookupProperty(depth0,"footerMetaMetadata") : depth0)) != null ? lookupProperty(stack1,"value") : stack1),{"name":"jsonParse","hash":{},"data":data,"loc":{"start":{"line":61,"column":20},"end":{"line":61,"column":56}}}),{"name":"with","hash":{},"fn":container.program(24, data, 0, blockParams, depths),"inverse":container.noop,"data":data,"loc":{"start":{"line":61,"column":12},"end":{"line":83,"column":21}}})) != null ? stack1 : "")
    + "            \n"
    + ((stack1 = lookupProperty(helpers,"with").call(alias1,(lookupProperty(helpers,"jsonParse")||(depth0 && lookupProperty(depth0,"jsonParse"))||alias2).call(alias1,((stack1 = (depth0 != null ? lookupProperty(depth0,"footerMetaMetadata") : depth0)) != null ? lookupProperty(stack1,"value") : stack1),{"name":"jsonParse","hash":{},"data":data,"loc":{"start":{"line":85,"column":20},"end":{"line":85,"column":56}}}),{"name":"with","hash":{},"fn":container.program(33, data, 0, blockParams, depths),"inverse":container.noop,"data":data,"loc":{"start":{"line":85,"column":12},"end":{"line":104,"column":21}}})) != null ? stack1 : "")
    + "\n"
    + ((stack1 = lookupProperty(helpers,"with").call(alias1,(lookupProperty(helpers,"jsonParse")||(depth0 && lookupProperty(depth0,"jsonParse"))||alias2).call(alias1,((stack1 = (depth0 != null ? lookupProperty(depth0,"footerMetaMetadata") : depth0)) != null ? lookupProperty(stack1,"value") : stack1),{"name":"jsonParse","hash":{},"data":data,"loc":{"start":{"line":106,"column":20},"end":{"line":106,"column":56}}}),{"name":"with","hash":{},"fn":container.program(36, data, 0, blockParams, depths),"inverse":container.noop,"data":data,"loc":{"start":{"line":106,"column":12},"end":{"line":144,"column":21}}})) != null ? stack1 : "")
    + "            \n            <div class=\"col-xs-12 qld__footer__column\">\n                <div class=\"\">\n                    \n"
    + ((stack1 = lookupProperty(helpers,"if").call(alias1,((stack1 = (depth0 != null ? lookupProperty(depth0,"footerAcknowledgementsHeading") : depth0)) != null ? lookupProperty(stack1,"value") : stack1),{"name":"if","hash":{},"fn":container.program(55, data, 0, blockParams, depths),"inverse":container.noop,"data":data,"loc":{"start":{"line":149,"column":20},"end":{"line":153,"column":27}}})) != null ? stack1 : "")
    + "\n"
    + ((stack1 = lookupProperty(helpers,"if").call(alias1,((stack1 = (depth0 != null ? lookupProperty(depth0,"footerAcknowledgements") : depth0)) != null ? lookupProperty(stack1,"value") : stack1),{"name":"if","hash":{},"fn":container.program(57, data, 0, blockParams, depths),"inverse":container.noop,"data":data,"loc":{"start":{"line":155,"column":20},"end":{"line":159,"column":27}}})) != null ? stack1 : "")
    + "\n"
    + ((stack1 = lookupProperty(helpers,"with").call(alias1,(lookupProperty(helpers,"jsonParse")||(depth0 && lookupProperty(depth0,"jsonParse"))||alias2).call(alias1,((stack1 = (depth0 != null ? lookupProperty(depth0,"footerMetaMetadata") : depth0)) != null ? lookupProperty(stack1,"value") : stack1),{"name":"jsonParse","hash":{},"data":data,"loc":{"start":{"line":161,"column":28},"end":{"line":161,"column":64}}}),{"name":"with","hash":{},"fn":container.program(59, data, 0, blockParams, depths),"inverse":container.noop,"data":data,"loc":{"start":{"line":161,"column":20},"end":{"line":192,"column":29}}})) != null ? stack1 : "")
    + "\n"
    + ((stack1 = lookupProperty(helpers,"if").call(alias1,((stack1 = (depth0 != null ? lookupProperty(depth0,"footerCopyrightMessage") : depth0)) != null ? lookupProperty(stack1,"value") : stack1),{"name":"if","hash":{},"fn":container.program(68, data, 0, blockParams, depths),"inverse":container.noop,"data":data,"loc":{"start":{"line":194,"column":20},"end":{"line":198,"column":27}}})) != null ? stack1 : "")
    + "\n"
    + ((stack1 = lookupProperty(helpers,"with").call(alias1,(lookupProperty(helpers,"jsonParse")||(depth0 && lookupProperty(depth0,"jsonParse"))||alias2).call(alias1,((stack1 = (depth0 != null ? lookupProperty(depth0,"footerMetaMetadata") : depth0)) != null ? lookupProperty(stack1,"value") : stack1),{"name":"jsonParse","hash":{},"data":data,"loc":{"start":{"line":200,"column":28},"end":{"line":200,"column":64}}}),{"name":"with","hash":{},"fn":container.program(70, data, 0, blockParams, depths),"inverse":container.noop,"data":data,"loc":{"start":{"line":200,"column":20},"end":{"line":209,"column":29}}})) != null ? stack1 : "")
    + "                    \n                </div>\n            </div> \n        </div>\n    </div>\n</footer>\n\n";
},"2":function(container,depth0,helpers,partials,data) {
    var stack1, lookupProperty = container.lookupProperty || function(parent, propertyName) {
        if (Object.prototype.hasOwnProperty.call(parent, propertyName)) {
          return parent[propertyName];
        }
        return undefined
    };

  return "    <div class=\"container-fluid\">\n        <div class=\"row qld__footer__row\">\n            <div class=\"col-xs-12 qld__footer__column\">\n                <div class=\"qld__footer__title\">\n                    <h2 class=\"qld__footer__heading\">"
    + container.escapeExpression(container.lambda(((stack1 = (depth0 != null ? lookupProperty(depth0,"footerSiteTitle") : depth0)) != null ? lookupProperty(stack1,"value") : stack1), depth0))
    + "</h2>\n                </div>\n            </div>\n        </div>\n    </div>\n";
},"4":function(container,depth0,helpers,partials,data) {
    var stack1, lookupProperty = container.lookupProperty || function(parent, propertyName) {
        if (Object.prototype.hasOwnProperty.call(parent, propertyName)) {
          return parent[propertyName];
        }
        return undefined
    };

  return "                            <h3 class=\"qld__footer__heading\">"
    + container.escapeExpression(container.lambda(((stack1 = (depth0 != null ? lookupProperty(depth0,"footerCTAHeading") : depth0)) != null ? lookupProperty(stack1,"value") : stack1), depth0))
    + "</h3> \n";
},"6":function(container,depth0,helpers,partials,data) {
    var stack1, lookupProperty = container.lookupProperty || function(parent, propertyName) {
        if (Object.prototype.hasOwnProperty.call(parent, propertyName)) {
          return parent[propertyName];
        }
        return undefined
    };

  return "                            <p class=\"qld__footer__cta-content\">\n                                "
    + container.escapeExpression(container.lambda(((stack1 = (depth0 != null ? lookupProperty(depth0,"footerCTALead") : depth0)) != null ? lookupProperty(stack1,"value") : stack1), depth0))
    + "\n                            </p>\n";
},"8":function(container,depth0,helpers,partials,data) {
    var stack1, lookupProperty = container.lookupProperty || function(parent, propertyName) {
        if (Object.prototype.hasOwnProperty.call(parent, propertyName)) {
          return parent[propertyName];
        }
        return undefined
    };

  return "                                <p class=\"qld__footer__cta-content\">\n                                    <svg class=\"qld__icon qld__icon--lead\" xmlns=\"http://www.w3.org/2000/svg\"><use href=\""
    + container.escapeExpression(container.lambda(((stack1 = ((stack1 = ((stack1 = ((stack1 = (data && lookupProperty(data,"root"))) && lookupProperty(stack1,"site"))) && lookupProperty(stack1,"metadata"))) && lookupProperty(stack1,"coreSiteIcons"))) && lookupProperty(stack1,"value")), depth0))
    + "#phone\"></use></svg>\n                                    <strong>Phone: </strong>\n                                    "
    + ((stack1 = lookupProperty(helpers,"if").call(depth0 != null ? depth0 : (container.nullContext || {}),((stack1 = (depth0 != null ? lookupProperty(depth0,"footerCTAContactPhoneLink") : depth0)) != null ? lookupProperty(stack1,"value") : stack1),{"name":"if","hash":{},"fn":container.program(9, data, 0),"inverse":container.program(11, data, 0),"data":data,"loc":{"start":{"line":35,"column":36},"end":{"line":35,"column":218}}})) != null ? stack1 : "")
    + "\n                                </p>\n";
},"9":function(container,depth0,helpers,partials,data) {
    var stack1, alias1=container.lambda, alias2=container.escapeExpression, lookupProperty = container.lookupProperty || function(parent, propertyName) {
        if (Object.prototype.hasOwnProperty.call(parent, propertyName)) {
          return parent[propertyName];
        }
        return undefined
    };

  return "<a href=\""
    + alias2(alias1(((stack1 = (depth0 != null ? lookupProperty(depth0,"footerCTAContactPhoneLink") : depth0)) != null ? lookupProperty(stack1,"value") : stack1), depth0))
    + "\" target=\"_blank\">"
    + alias2(alias1(((stack1 = (depth0 != null ? lookupProperty(depth0,"footerCTAContactPhone") : depth0)) != null ? lookupProperty(stack1,"value") : stack1), depth0))
    + "</a>";
},"11":function(container,depth0,helpers,partials,data) {
    var stack1, lookupProperty = container.lookupProperty || function(parent, propertyName) {
        if (Object.prototype.hasOwnProperty.call(parent, propertyName)) {
          return parent[propertyName];
        }
        return undefined
    };

  return container.escapeExpression(container.lambda(((stack1 = (depth0 != null ? lookupProperty(depth0,"footerCTAContactPhone") : depth0)) != null ? lookupProperty(stack1,"value") : stack1), depth0));
},"13":function(container,depth0,helpers,partials,data) {
    var stack1, lookupProperty = container.lookupProperty || function(parent, propertyName) {
        if (Object.prototype.hasOwnProperty.call(parent, propertyName)) {
          return parent[propertyName];
        }
        return undefined
    };

  return "                                <p class=\"qld__footer__cta-content\">\n                                    <svg class=\"qld__icon qld__icon--lead\" xmlns=\"http://www.w3.org/2000/svg\"><use href=\""
    + container.escapeExpression(container.lambda(((stack1 = ((stack1 = ((stack1 = ((stack1 = (data && lookupProperty(data,"root"))) && lookupProperty(stack1,"site"))) && lookupProperty(stack1,"metadata"))) && lookupProperty(stack1,"coreSiteIcons"))) && lookupProperty(stack1,"value")), depth0))
    + "#email\"></use></svg>\n                                    <strong>Email: </strong>\n                                    "
    + ((stack1 = lookupProperty(helpers,"if").call(depth0 != null ? depth0 : (container.nullContext || {}),((stack1 = (depth0 != null ? lookupProperty(depth0,"footerCTAContactEmailLink") : depth0)) != null ? lookupProperty(stack1,"value") : stack1),{"name":"if","hash":{},"fn":container.program(14, data, 0),"inverse":container.program(16, data, 0),"data":data,"loc":{"start":{"line":42,"column":36},"end":{"line":42,"column":218}}})) != null ? stack1 : "")
    + "\n                                </p>\n";
},"14":function(container,depth0,helpers,partials,data) {
    var stack1, alias1=container.lambda, alias2=container.escapeExpression, lookupProperty = container.lookupProperty || function(parent, propertyName) {
        if (Object.prototype.hasOwnProperty.call(parent, propertyName)) {
          return parent[propertyName];
        }
        return undefined
    };

  return "<a href=\""
    + alias2(alias1(((stack1 = (depth0 != null ? lookupProperty(depth0,"footerCTAContactEmailLink") : depth0)) != null ? lookupProperty(stack1,"value") : stack1), depth0))
    + "\" target=\"_blank\">"
    + alias2(alias1(((stack1 = (depth0 != null ? lookupProperty(depth0,"footerCTAContactEmail") : depth0)) != null ? lookupProperty(stack1,"value") : stack1), depth0))
    + "</a>";
},"16":function(container,depth0,helpers,partials,data) {
    var stack1, lookupProperty = container.lookupProperty || function(parent, propertyName) {
        if (Object.prototype.hasOwnProperty.call(parent, propertyName)) {
          return parent[propertyName];
        }
        return undefined
    };

  return container.escapeExpression(container.lambda(((stack1 = (depth0 != null ? lookupProperty(depth0,"footerCTAContactEmail") : depth0)) != null ? lookupProperty(stack1,"value") : stack1), depth0));
},"18":function(container,depth0,helpers,partials,data) {
    var stack1, lookupProperty = container.lookupProperty || function(parent, propertyName) {
        if (Object.prototype.hasOwnProperty.call(parent, propertyName)) {
          return parent[propertyName];
        }
        return undefined
    };

  return ((stack1 = lookupProperty(helpers,"if").call(depth0 != null ? depth0 : (container.nullContext || {}),(depth0 != null ? lookupProperty(depth0,"footerCTALink") : depth0),{"name":"if","hash":{},"fn":container.program(19, data, 0),"inverse":container.noop,"data":data,"loc":{"start":{"line":48,"column":32},"end":{"line":54,"column":39}}})) != null ? stack1 : "");
},"19":function(container,depth0,helpers,partials,data) {
    var stack1, lookupProperty = container.lookupProperty || function(parent, propertyName) {
        if (Object.prototype.hasOwnProperty.call(parent, propertyName)) {
          return parent[propertyName];
        }
        return undefined
    };

  return ((stack1 = (lookupProperty(helpers,"ifCond")||(depth0 && lookupProperty(depth0,"ifCond"))||container.hooks.helperMissing).call(depth0 != null ? depth0 : (container.nullContext || {}),((stack1 = (depth0 != null ? lookupProperty(depth0,"footerCTALink") : depth0)) != null ? lookupProperty(stack1,"asset_type_code") : stack1),"==","page_redirect",{"name":"ifCond","hash":{},"fn":container.program(20, data, 0),"inverse":container.program(22, data, 0),"data":data,"loc":{"start":{"line":49,"column":32},"end":{"line":53,"column":43}}})) != null ? stack1 : "");
},"20":function(container,depth0,helpers,partials,data) {
    var alias1=depth0 != null ? depth0 : (container.nullContext || {}), alias2=container.escapeExpression, lookupProperty = container.lookupProperty || function(parent, propertyName) {
        if (Object.prototype.hasOwnProperty.call(parent, propertyName)) {
          return parent[propertyName];
        }
        return undefined
    };

  return "                                <a href=\""
    + alias2((lookupProperty(helpers,"urldecode")||(depth0 && lookupProperty(depth0,"urldecode"))||container.hooks.helperMissing).call(alias1,lookupProperty(helpers,"lookup").call(alias1,(depth0 != null ? lookupProperty(depth0,"footerCTALink") : depth0),"redirect_url^urlencode",{"name":"lookup","hash":{},"data":data,"loc":{"start":{"line":50,"column":53},"end":{"line":50,"column":100}}}),{"name":"urldecode","hash":{},"data":data,"loc":{"start":{"line":50,"column":41},"end":{"line":50,"column":102}}}))
    + "\" class=\"qld__btn qld__btn--secondary\">"
    + alias2(lookupProperty(helpers,"lookup").call(alias1,(depth0 != null ? lookupProperty(depth0,"footerCTALink") : depth0),"asset_short_name^escapequotes",{"name":"lookup","hash":{},"data":data,"loc":{"start":{"line":50,"column":141},"end":{"line":50,"column":197}}}))
    + "</a>\n";
},"22":function(container,depth0,helpers,partials,data) {
    var alias1=depth0 != null ? depth0 : (container.nullContext || {}), alias2=container.escapeExpression, lookupProperty = container.lookupProperty || function(parent, propertyName) {
        if (Object.prototype.hasOwnProperty.call(parent, propertyName)) {
          return parent[propertyName];
        }
        return undefined
    };

  return "                                <a href=\""
    + alias2((lookupProperty(helpers,"urldecode")||(depth0 && lookupProperty(depth0,"urldecode"))||container.hooks.helperMissing).call(alias1,lookupProperty(helpers,"lookup").call(alias1,(depth0 != null ? lookupProperty(depth0,"footerCTALink") : depth0),"asset_url^urlencode",{"name":"lookup","hash":{},"data":data,"loc":{"start":{"line":52,"column":53},"end":{"line":52,"column":97}}}),{"name":"urldecode","hash":{},"data":data,"loc":{"start":{"line":52,"column":41},"end":{"line":52,"column":99}}}))
    + "\" class=\"qld__btn qld__btn--secondary\">"
    + alias2(lookupProperty(helpers,"lookup").call(alias1,(depth0 != null ? lookupProperty(depth0,"footerCTALink") : depth0),"asset_short_name^escapequotes",{"name":"lookup","hash":{},"data":data,"loc":{"start":{"line":52,"column":138},"end":{"line":52,"column":194}}}))
    + "</a>\n";
},"24":function(container,depth0,helpers,partials,data,blockParams,depths) {
    var stack1, lookupProperty = container.lookupProperty || function(parent, propertyName) {
        if (Object.prototype.hasOwnProperty.call(parent, propertyName)) {
          return parent[propertyName];
        }
        return undefined
    };

  return ((stack1 = lookupProperty(helpers,"if").call(depth0 != null ? depth0 : (container.nullContext || {}),(depth0 != null ? lookupProperty(depth0,"footerOptionalSecondLinksList") : depth0),{"name":"if","hash":{},"fn":container.program(25, data, 0, blockParams, depths),"inverse":container.noop,"data":data,"loc":{"start":{"line":62,"column":12},"end":{"line":82,"column":19}}})) != null ? stack1 : "");
},"25":function(container,depth0,helpers,partials,data,blockParams,depths) {
    var stack1, alias1=depth0 != null ? depth0 : (container.nullContext || {}), lookupProperty = container.lookupProperty || function(parent, propertyName) {
        if (Object.prototype.hasOwnProperty.call(parent, propertyName)) {
          return parent[propertyName];
        }
        return undefined
    };

  return "            <div class=\"col-xs-12 col-lg-2 qld__footer__column\">\n                <nav class=\"qld__footer__navigation\" aria-label=\"footer\">\n"
    + ((stack1 = lookupProperty(helpers,"if").call(alias1,((stack1 = (depths[1] != null ? lookupProperty(depths[1],"footerOptionalExtraLinksHeading") : depths[1])) != null ? lookupProperty(stack1,"value") : stack1),{"name":"if","hash":{},"fn":container.program(26, data, 0, blockParams, depths),"inverse":container.noop,"data":data,"loc":{"start":{"line":65,"column":20},"end":{"line":67,"column":27}}})) != null ? stack1 : "")
    + "                    <ul class=\"qld__link-list\">\n"
    + ((stack1 = lookupProperty(helpers,"each").call(alias1,(depth0 != null ? lookupProperty(depth0,"footerOptionalSecondLinksList") : depth0),{"name":"each","hash":{},"fn":container.program(28, data, 0, blockParams, depths),"inverse":container.noop,"data":data,"loc":{"start":{"line":69,"column":24},"end":{"line":78,"column":33}}})) != null ? stack1 : "")
    + "                    </ul>\n                </nav>\n            </div>\n";
},"26":function(container,depth0,helpers,partials,data,blockParams,depths) {
    var stack1, lookupProperty = container.lookupProperty || function(parent, propertyName) {
        if (Object.prototype.hasOwnProperty.call(parent, propertyName)) {
          return parent[propertyName];
        }
        return undefined
    };

  return "                    <h3 class=\"qld__footer__heading\">"
    + container.escapeExpression(container.lambda(((stack1 = (depths[1] != null ? lookupProperty(depths[1],"footerOptionalExtraLinksHeading") : depths[1])) != null ? lookupProperty(stack1,"value") : stack1), depth0))
    + "</h3>\n";
},"28":function(container,depth0,helpers,partials,data) {
    var stack1, lookupProperty = container.lookupProperty || function(parent, propertyName) {
        if (Object.prototype.hasOwnProperty.call(parent, propertyName)) {
          return parent[propertyName];
        }
        return undefined
    };

  return "                        <li>\n"
    + ((stack1 = (lookupProperty(helpers,"ifCond")||(depth0 && lookupProperty(depth0,"ifCond"))||container.hooks.helperMissing).call(depth0 != null ? depth0 : (container.nullContext || {}),(depth0 != null ? lookupProperty(depth0,"asset_type_code") : depth0),"==","page_redirect",{"name":"ifCond","hash":{},"fn":container.program(29, data, 0),"inverse":container.program(31, data, 0),"data":data,"loc":{"start":{"line":71,"column":28},"end":{"line":76,"column":39}}})) != null ? stack1 : "")
    + "                        </li>\n";
},"29":function(container,depth0,helpers,partials,data) {
    var alias1=depth0 != null ? depth0 : (container.nullContext || {}), alias2=container.escapeExpression, lookupProperty = container.lookupProperty || function(parent, propertyName) {
        if (Object.prototype.hasOwnProperty.call(parent, propertyName)) {
          return parent[propertyName];
        }
        return undefined
    };

  return "                            <a class=\"qld__footer__clickable__link\" href=\""
    + alias2((lookupProperty(helpers,"urldecode")||(depth0 && lookupProperty(depth0,"urldecode"))||container.hooks.helperMissing).call(alias1,lookupProperty(helpers,"lookup").call(alias1,depth0,"redirect_url^urlencode",{"name":"lookup","hash":{},"data":data,"loc":{"start":{"line":72,"column":86},"end":{"line":72,"column":124}}}),{"name":"urldecode","hash":{},"data":data,"loc":{"start":{"line":72,"column":74},"end":{"line":72,"column":126}}}))
    + "\">"
    + alias2(lookupProperty(helpers,"lookup").call(alias1,depth0,"asset_short_name^escapequotes",{"name":"lookup","hash":{},"data":data,"loc":{"start":{"line":72,"column":128},"end":{"line":72,"column":175}}}))
    + "</a>\n\n";
},"31":function(container,depth0,helpers,partials,data) {
    var alias1=depth0 != null ? depth0 : (container.nullContext || {}), alias2=container.escapeExpression, lookupProperty = container.lookupProperty || function(parent, propertyName) {
        if (Object.prototype.hasOwnProperty.call(parent, propertyName)) {
          return parent[propertyName];
        }
        return undefined
    };

  return "                            <a class=\"qld__footer__clickable__link\" href=\""
    + alias2((lookupProperty(helpers,"urldecode")||(depth0 && lookupProperty(depth0,"urldecode"))||container.hooks.helperMissing).call(alias1,lookupProperty(helpers,"lookup").call(alias1,depth0,"asset_url^urlencode",{"name":"lookup","hash":{},"data":data,"loc":{"start":{"line":75,"column":86},"end":{"line":75,"column":121}}}),{"name":"urldecode","hash":{},"data":data,"loc":{"start":{"line":75,"column":74},"end":{"line":75,"column":123}}}))
    + "\">"
    + alias2(lookupProperty(helpers,"lookup").call(alias1,depth0,"asset_short_name^escapequotes",{"name":"lookup","hash":{},"data":data,"loc":{"start":{"line":75,"column":125},"end":{"line":75,"column":172}}}))
    + "</a>\n";
},"33":function(container,depth0,helpers,partials,data,blockParams,depths) {
    var stack1, lookupProperty = container.lookupProperty || function(parent, propertyName) {
        if (Object.prototype.hasOwnProperty.call(parent, propertyName)) {
          return parent[propertyName];
        }
        return undefined
    };

  return ((stack1 = lookupProperty(helpers,"if").call(depth0 != null ? depth0 : (container.nullContext || {}),(depth0 != null ? lookupProperty(depth0,"footerLinks") : depth0),{"name":"if","hash":{},"fn":container.program(34, data, 0, blockParams, depths),"inverse":container.noop,"data":data,"loc":{"start":{"line":86,"column":12},"end":{"line":103,"column":19}}})) != null ? stack1 : "");
},"34":function(container,depth0,helpers,partials,data,blockParams,depths) {
    var stack1, lookupProperty = container.lookupProperty || function(parent, propertyName) {
        if (Object.prototype.hasOwnProperty.call(parent, propertyName)) {
          return parent[propertyName];
        }
        return undefined
    };

  return "            <div class=\"col-xs-12 col-lg-2 qld__footer__column\">\n                <nav class=\"qld__footer__navigation\" aria-label=\"footer\">\n                    <ul class=\"qld__link-list\">\n"
    + ((stack1 = lookupProperty(helpers,"each").call(depth0 != null ? depth0 : (container.nullContext || {}),(depth0 != null ? lookupProperty(depth0,"footerLinks") : depth0),{"name":"each","hash":{},"fn":container.program(28, data, 0, blockParams, depths),"inverse":container.noop,"data":data,"loc":{"start":{"line":90,"column":24},"end":{"line":99,"column":33}}})) != null ? stack1 : "")
    + "                    </ul>\n                </nav>\n            </div>\n";
},"36":function(container,depth0,helpers,partials,data,blockParams,depths) {
    var stack1, lookupProperty = container.lookupProperty || function(parent, propertyName) {
        if (Object.prototype.hasOwnProperty.call(parent, propertyName)) {
          return parent[propertyName];
        }
        return undefined
    };

  return ((stack1 = lookupProperty(helpers,"if").call(depth0 != null ? depth0 : (container.nullContext || {}),(depth0 != null ? lookupProperty(depth0,"footerSocialLinks") : depth0),{"name":"if","hash":{},"fn":container.program(37, data, 0, blockParams, depths),"inverse":container.noop,"data":data,"loc":{"start":{"line":107,"column":12},"end":{"line":143,"column":19}}})) != null ? stack1 : "");
},"37":function(container,depth0,helpers,partials,data,blockParams,depths) {
    var stack1, alias1=depth0 != null ? depth0 : (container.nullContext || {}), lookupProperty = container.lookupProperty || function(parent, propertyName) {
        if (Object.prototype.hasOwnProperty.call(parent, propertyName)) {
          return parent[propertyName];
        }
        return undefined
    };

  return "            <div class=\"col-xs-12 col-lg-2 qld__footer__column\">\n                <nav class=\"qld__footer__social\" aria-label=\"social media links\">\n"
    + ((stack1 = lookupProperty(helpers,"if").call(alias1,((stack1 = (depths[1] != null ? lookupProperty(depths[1],"footerSocialLinksHeading") : depths[1])) != null ? lookupProperty(stack1,"value") : stack1),{"name":"if","hash":{},"fn":container.program(38, data, 0, blockParams, depths),"inverse":container.noop,"data":data,"loc":{"start":{"line":110,"column":20},"end":{"line":112,"column":27}}})) != null ? stack1 : "")
    + "                    <ul class=\"qld__link-list\">\n"
    + ((stack1 = lookupProperty(helpers,"each").call(alias1,(depth0 != null ? lookupProperty(depth0,"footerSocialLinks") : depth0),{"name":"each","hash":{},"fn":container.program(40, data, 0, blockParams, depths),"inverse":container.noop,"data":data,"loc":{"start":{"line":114,"column":24},"end":{"line":139,"column":33}}})) != null ? stack1 : "")
    + "                    </ul>\n                </nav>\n            </div>\n";
},"38":function(container,depth0,helpers,partials,data,blockParams,depths) {
    var stack1, lookupProperty = container.lookupProperty || function(parent, propertyName) {
        if (Object.prototype.hasOwnProperty.call(parent, propertyName)) {
          return parent[propertyName];
        }
        return undefined
    };

  return "                    <h3 class=\"qld__footer__heading\">"
    + container.escapeExpression(container.lambda(((stack1 = (depths[1] != null ? lookupProperty(depths[1],"footerSocialLinksHeading") : depths[1])) != null ? lookupProperty(stack1,"value") : stack1), depth0))
    + "</h3>\n";
},"40":function(container,depth0,helpers,partials,data) {
    var stack1, alias1=depth0 != null ? depth0 : (container.nullContext || {}), alias2=container.hooks.helperMissing, lookupProperty = container.lookupProperty || function(parent, propertyName) {
        if (Object.prototype.hasOwnProperty.call(parent, propertyName)) {
          return parent[propertyName];
        }
        return undefined
    };

  return "                        <li>\n"
    + ((stack1 = (lookupProperty(helpers,"ifCond")||(depth0 && lookupProperty(depth0,"ifCond"))||alias2).call(alias1,(depth0 != null ? lookupProperty(depth0,"asset_type_code") : depth0),"==","page_redirect",{"name":"ifCond","hash":{},"fn":container.program(41, data, 0),"inverse":container.program(43, data, 0),"data":data,"loc":{"start":{"line":116,"column":28},"end":{"line":120,"column":39}}})) != null ? stack1 : "")
    + ((stack1 = (lookupProperty(helpers,"ifCond")||(depth0 && lookupProperty(depth0,"ifCond"))||alias2).call(alias1,lookupProperty(helpers,"lookup").call(alias1,depth0,"asset_short_name^escapequotes",{"name":"lookup","hash":{},"data":data,"loc":{"start":{"line":121,"column":42},"end":{"line":121,"column":87}}}),"contains","facebook",{"name":"ifCond","hash":{},"fn":container.program(45, data, 0),"inverse":container.noop,"data":data,"loc":{"start":{"line":121,"column":32},"end":{"line":123,"column":43}}})) != null ? stack1 : "")
    + ((stack1 = (lookupProperty(helpers,"ifCond")||(depth0 && lookupProperty(depth0,"ifCond"))||alias2).call(alias1,lookupProperty(helpers,"lookup").call(alias1,depth0,"asset_short_name^escapequotes",{"name":"lookup","hash":{},"data":data,"loc":{"start":{"line":124,"column":42},"end":{"line":124,"column":87}}}),"contains","linkedin",{"name":"ifCond","hash":{},"fn":container.program(47, data, 0),"inverse":container.noop,"data":data,"loc":{"start":{"line":124,"column":32},"end":{"line":126,"column":43}}})) != null ? stack1 : "")
    + ((stack1 = (lookupProperty(helpers,"ifCond")||(depth0 && lookupProperty(depth0,"ifCond"))||alias2).call(alias1,lookupProperty(helpers,"lookup").call(alias1,depth0,"asset_short_name^escapequotes",{"name":"lookup","hash":{},"data":data,"loc":{"start":{"line":127,"column":42},"end":{"line":127,"column":87}}}),"contains","youtube",{"name":"ifCond","hash":{},"fn":container.program(49, data, 0),"inverse":container.noop,"data":data,"loc":{"start":{"line":127,"column":32},"end":{"line":129,"column":43}}})) != null ? stack1 : "")
    + ((stack1 = (lookupProperty(helpers,"ifCond")||(depth0 && lookupProperty(depth0,"ifCond"))||alias2).call(alias1,lookupProperty(helpers,"lookup").call(alias1,depth0,"asset_short_name^escapequotes",{"name":"lookup","hash":{},"data":data,"loc":{"start":{"line":130,"column":42},"end":{"line":130,"column":87}}}),"contains","instagram",{"name":"ifCond","hash":{},"fn":container.program(51, data, 0),"inverse":container.noop,"data":data,"loc":{"start":{"line":130,"column":32},"end":{"line":132,"column":43}}})) != null ? stack1 : "")
    + ((stack1 = (lookupProperty(helpers,"ifCond")||(depth0 && lookupProperty(depth0,"ifCond"))||alias2).call(alias1,lookupProperty(helpers,"lookup").call(alias1,depth0,"asset_short_name^escapequotes",{"name":"lookup","hash":{},"data":data,"loc":{"start":{"line":133,"column":42},"end":{"line":133,"column":87}}}),"contains","twitter",{"name":"ifCond","hash":{},"fn":container.program(53, data, 0),"inverse":container.noop,"data":data,"loc":{"start":{"line":133,"column":32},"end":{"line":135,"column":43}}})) != null ? stack1 : "")
    + "                                <span class=\"qld__footer__social__label\">"
    + container.escapeExpression(lookupProperty(helpers,"lookup").call(alias1,depth0,"asset_short_name^escapequotes",{"name":"lookup","hash":{},"data":data,"loc":{"start":{"line":136,"column":73},"end":{"line":136,"column":120}}}))
    + "</span>\n                            </a>\n                        </li>\n";
},"41":function(container,depth0,helpers,partials,data) {
    var alias1=depth0 != null ? depth0 : (container.nullContext || {}), lookupProperty = container.lookupProperty || function(parent, propertyName) {
        if (Object.prototype.hasOwnProperty.call(parent, propertyName)) {
          return parent[propertyName];
        }
        return undefined
    };

  return "                            <a class=\"qld__footer__clickable__link\" href=\""
    + container.escapeExpression((lookupProperty(helpers,"urldecode")||(depth0 && lookupProperty(depth0,"urldecode"))||container.hooks.helperMissing).call(alias1,lookupProperty(helpers,"lookup").call(alias1,depth0,"redirect_url^urlencode",{"name":"lookup","hash":{},"data":data,"loc":{"start":{"line":117,"column":86},"end":{"line":117,"column":124}}}),{"name":"urldecode","hash":{},"data":data,"loc":{"start":{"line":117,"column":74},"end":{"line":117,"column":126}}}))
    + "\">\n";
},"43":function(container,depth0,helpers,partials,data) {
    var alias1=depth0 != null ? depth0 : (container.nullContext || {}), lookupProperty = container.lookupProperty || function(parent, propertyName) {
        if (Object.prototype.hasOwnProperty.call(parent, propertyName)) {
          return parent[propertyName];
        }
        return undefined
    };

  return "                            <a class=\"qld__footer__clickable__link\" href=\""
    + container.escapeExpression((lookupProperty(helpers,"urldecode")||(depth0 && lookupProperty(depth0,"urldecode"))||container.hooks.helperMissing).call(alias1,lookupProperty(helpers,"lookup").call(alias1,depth0,"asset_url^urlencode",{"name":"lookup","hash":{},"data":data,"loc":{"start":{"line":119,"column":86},"end":{"line":119,"column":121}}}),{"name":"urldecode","hash":{},"data":data,"loc":{"start":{"line":119,"column":74},"end":{"line":119,"column":123}}}))
    + "\">\n";
},"45":function(container,depth0,helpers,partials,data) {
    var stack1, lookupProperty = container.lookupProperty || function(parent, propertyName) {
        if (Object.prototype.hasOwnProperty.call(parent, propertyName)) {
          return parent[propertyName];
        }
        return undefined
    };

  return "                                    <svg class=\"qld__icon qld__icon--md\" aria-hidden=\"true\" xmlns=\"http://www.w3.org/2000/svg\"><use href=\""
    + container.escapeExpression(container.lambda(((stack1 = ((stack1 = ((stack1 = ((stack1 = (data && lookupProperty(data,"root"))) && lookupProperty(stack1,"site"))) && lookupProperty(stack1,"metadata"))) && lookupProperty(stack1,"coreSiteIcons"))) && lookupProperty(stack1,"value")), depth0))
    + "#facebook\"></use></svg>\n";
},"47":function(container,depth0,helpers,partials,data) {
    var stack1, lookupProperty = container.lookupProperty || function(parent, propertyName) {
        if (Object.prototype.hasOwnProperty.call(parent, propertyName)) {
          return parent[propertyName];
        }
        return undefined
    };

  return "                                    <svg class=\"qld__icon qld__icon--md\" aria-hidden=\"true\" xmlns=\"http://www.w3.org/2000/svg\"><use href=\""
    + container.escapeExpression(container.lambda(((stack1 = ((stack1 = ((stack1 = ((stack1 = (data && lookupProperty(data,"root"))) && lookupProperty(stack1,"site"))) && lookupProperty(stack1,"metadata"))) && lookupProperty(stack1,"coreSiteIcons"))) && lookupProperty(stack1,"value")), depth0))
    + "#linkedin\"></use></svg>\n";
},"49":function(container,depth0,helpers,partials,data) {
    var stack1, lookupProperty = container.lookupProperty || function(parent, propertyName) {
        if (Object.prototype.hasOwnProperty.call(parent, propertyName)) {
          return parent[propertyName];
        }
        return undefined
    };

  return "                                    <svg class=\"qld__icon qld__icon--md\" aria-hidden=\"true\" xmlns=\"http://www.w3.org/2000/svg\"><use href=\""
    + container.escapeExpression(container.lambda(((stack1 = ((stack1 = ((stack1 = ((stack1 = (data && lookupProperty(data,"root"))) && lookupProperty(stack1,"site"))) && lookupProperty(stack1,"metadata"))) && lookupProperty(stack1,"coreSiteIcons"))) && lookupProperty(stack1,"value")), depth0))
    + "#youtube\"></use></svg>\n";
},"51":function(container,depth0,helpers,partials,data) {
    var stack1, lookupProperty = container.lookupProperty || function(parent, propertyName) {
        if (Object.prototype.hasOwnProperty.call(parent, propertyName)) {
          return parent[propertyName];
        }
        return undefined
    };

  return "                                    <svg class=\"qld__icon qld__icon--md\" aria-hidden=\"true\" xmlns=\"http://www.w3.org/2000/svg\"><use href=\""
    + container.escapeExpression(container.lambda(((stack1 = ((stack1 = ((stack1 = ((stack1 = (data && lookupProperty(data,"root"))) && lookupProperty(stack1,"site"))) && lookupProperty(stack1,"metadata"))) && lookupProperty(stack1,"coreSiteIcons"))) && lookupProperty(stack1,"value")), depth0))
    + "#instagram\"></use></svg>\n";
},"53":function(container,depth0,helpers,partials,data) {
    var stack1, lookupProperty = container.lookupProperty || function(parent, propertyName) {
        if (Object.prototype.hasOwnProperty.call(parent, propertyName)) {
          return parent[propertyName];
        }
        return undefined
    };

  return "                                    <svg class=\"qld__icon qld__icon--md\" aria-hidden=\"true\" xmlns=\"http://www.w3.org/2000/svg\"><use href=\""
    + container.escapeExpression(container.lambda(((stack1 = ((stack1 = ((stack1 = ((stack1 = (data && lookupProperty(data,"root"))) && lookupProperty(stack1,"site"))) && lookupProperty(stack1,"metadata"))) && lookupProperty(stack1,"coreSiteIcons"))) && lookupProperty(stack1,"value")), depth0))
    + "#x\"></use></svg>\n";
},"55":function(container,depth0,helpers,partials,data) {
    var stack1, lookupProperty = container.lookupProperty || function(parent, propertyName) {
        if (Object.prototype.hasOwnProperty.call(parent, propertyName)) {
          return parent[propertyName];
        }
        return undefined
    };

  return "                    <h3 class=\"qld__footer__heading\">\n                        "
    + container.escapeExpression(container.lambda(((stack1 = (depth0 != null ? lookupProperty(depth0,"footerAcknowledgementsHeading") : depth0)) != null ? lookupProperty(stack1,"value") : stack1), depth0))
    + "\n                    </h3>\n";
},"57":function(container,depth0,helpers,partials,data) {
    var stack1, lookupProperty = container.lookupProperty || function(parent, propertyName) {
        if (Object.prototype.hasOwnProperty.call(parent, propertyName)) {
          return parent[propertyName];
        }
        return undefined
    };

  return "                    <p class=\"qld__footer__acknowledgements\">\n                        "
    + container.escapeExpression(container.lambda(((stack1 = (depth0 != null ? lookupProperty(depth0,"footerAcknowledgements") : depth0)) != null ? lookupProperty(stack1,"value") : stack1), depth0))
    + "\n                    </p>\n";
},"59":function(container,depth0,helpers,partials,data) {
    var stack1, lookupProperty = container.lookupProperty || function(parent, propertyName) {
        if (Object.prototype.hasOwnProperty.call(parent, propertyName)) {
          return parent[propertyName];
        }
        return undefined
    };

  return ((stack1 = lookupProperty(helpers,"if").call(depth0 != null ? depth0 : (container.nullContext || {}),(depth0 != null ? lookupProperty(depth0,"footerLogo") : depth0),{"name":"if","hash":{},"fn":container.program(60, data, 0),"inverse":container.noop,"data":data,"loc":{"start":{"line":162,"column":20},"end":{"line":191,"column":27}}})) != null ? stack1 : "");
},"60":function(container,depth0,helpers,partials,data) {
    var stack1, lookupProperty = container.lookupProperty || function(parent, propertyName) {
        if (Object.prototype.hasOwnProperty.call(parent, propertyName)) {
          return parent[propertyName];
        }
        return undefined
    };

  return ((stack1 = lookupProperty(helpers,"if").call(depth0 != null ? depth0 : (container.nullContext || {}),(depth0 != null ? lookupProperty(depth0,"footerCopyrightLink") : depth0),{"name":"if","hash":{},"fn":container.program(61, data, 0),"inverse":container.program(66, data, 0),"data":data,"loc":{"start":{"line":163,"column":20},"end":{"line":189,"column":27}}})) != null ? stack1 : "")
    + "                        \n";
},"61":function(container,depth0,helpers,partials,data) {
    var stack1, lookupProperty = container.lookupProperty || function(parent, propertyName) {
        if (Object.prototype.hasOwnProperty.call(parent, propertyName)) {
          return parent[propertyName];
        }
        return undefined
    };

  return ((stack1 = (lookupProperty(helpers,"ifCond")||(depth0 && lookupProperty(depth0,"ifCond"))||container.hooks.helperMissing).call(depth0 != null ? depth0 : (container.nullContext || {}),((stack1 = (depth0 != null ? lookupProperty(depth0,"footerCopyrightLink") : depth0)) != null ? lookupProperty(stack1,"asset_type_code") : stack1),"==","page_redirect",{"name":"ifCond","hash":{},"fn":container.program(62, data, 0),"inverse":container.program(64, data, 0),"data":data,"loc":{"start":{"line":164,"column":28},"end":{"line":180,"column":39}}})) != null ? stack1 : "");
},"62":function(container,depth0,helpers,partials,data) {
    var alias1=depth0 != null ? depth0 : (container.nullContext || {}), alias2=container.hooks.helperMissing, alias3=container.escapeExpression, lookupProperty = container.lookupProperty || function(parent, propertyName) {
        if (Object.prototype.hasOwnProperty.call(parent, propertyName)) {
          return parent[propertyName];
        }
        return undefined
    };

  return "                            <a class=\"qld__footer__logo\" href=\""
    + alias3((lookupProperty(helpers,"urldecode")||(depth0 && lookupProperty(depth0,"urldecode"))||alias2).call(alias1,lookupProperty(helpers,"lookup").call(alias1,(depth0 != null ? lookupProperty(depth0,"footerCopyrightLink") : depth0),"redirect_url^urlencode",{"name":"lookup","hash":{},"data":data,"loc":{"start":{"line":165,"column":75},"end":{"line":165,"column":128}}}),{"name":"urldecode","hash":{},"data":data,"loc":{"start":{"line":165,"column":63},"end":{"line":165,"column":130}}}))
    + "\">\n                                <img\n                                    class=\"qld__footer__logo-image\"\n                                    alt=\"Queensland Government\"\n                                    src=\""
    + alias3((lookupProperty(helpers,"urldecode")||(depth0 && lookupProperty(depth0,"urldecode"))||alias2).call(alias1,lookupProperty(helpers,"lookup").call(alias1,(depth0 != null ? lookupProperty(depth0,"footerLogo") : depth0),"asset_url^urlencode",{"name":"lookup","hash":{},"data":data,"loc":{"start":{"line":169,"column":53},"end":{"line":169,"column":94}}}),{"name":"urldecode","hash":{},"data":data,"loc":{"start":{"line":169,"column":41},"end":{"line":169,"column":96}}}))
    + "\"\n                                />\n                            </a>\n";
},"64":function(container,depth0,helpers,partials,data) {
    var alias1=depth0 != null ? depth0 : (container.nullContext || {}), alias2=container.hooks.helperMissing, alias3=container.escapeExpression, lookupProperty = container.lookupProperty || function(parent, propertyName) {
        if (Object.prototype.hasOwnProperty.call(parent, propertyName)) {
          return parent[propertyName];
        }
        return undefined
    };

  return "                            <a class=\"qld__footer__logo\" href=\""
    + alias3((lookupProperty(helpers,"urldecode")||(depth0 && lookupProperty(depth0,"urldecode"))||alias2).call(alias1,lookupProperty(helpers,"lookup").call(alias1,(depth0 != null ? lookupProperty(depth0,"footerCopyrightLink") : depth0),"asset_url^urlencode",{"name":"lookup","hash":{},"data":data,"loc":{"start":{"line":173,"column":75},"end":{"line":173,"column":125}}}),{"name":"urldecode","hash":{},"data":data,"loc":{"start":{"line":173,"column":63},"end":{"line":173,"column":127}}}))
    + "\">\n                                <img\n                                    class=\"qld__footer__logo-image\"\n                                    alt=\"Queensland Government\"\n                                    src=\""
    + alias3((lookupProperty(helpers,"urldecode")||(depth0 && lookupProperty(depth0,"urldecode"))||alias2).call(alias1,lookupProperty(helpers,"lookup").call(alias1,(depth0 != null ? lookupProperty(depth0,"footerLogo") : depth0),"asset_url^urlencode",{"name":"lookup","hash":{},"data":data,"loc":{"start":{"line":177,"column":53},"end":{"line":177,"column":94}}}),{"name":"urldecode","hash":{},"data":data,"loc":{"start":{"line":177,"column":41},"end":{"line":177,"column":96}}}))
    + "\"\n                                />\n                            </a>\n";
},"66":function(container,depth0,helpers,partials,data) {
    var alias1=depth0 != null ? depth0 : (container.nullContext || {}), lookupProperty = container.lookupProperty || function(parent, propertyName) {
        if (Object.prototype.hasOwnProperty.call(parent, propertyName)) {
          return parent[propertyName];
        }
        return undefined
    };

  return "                        <a class=\"qld__footer__logo\"  href=\"https://www.qld.gov.au/\">\n                            <img\n                                class=\"qld__footer__logo-image\"\n                                alt=\"Queensland Government\"\n                                src=\""
    + container.escapeExpression((lookupProperty(helpers,"urldecode")||(depth0 && lookupProperty(depth0,"urldecode"))||container.hooks.helperMissing).call(alias1,lookupProperty(helpers,"lookup").call(alias1,(depth0 != null ? lookupProperty(depth0,"footerLogo") : depth0),"asset_url^urlencode",{"name":"lookup","hash":{},"data":data,"loc":{"start":{"line":186,"column":49},"end":{"line":186,"column":90}}}),{"name":"urldecode","hash":{},"data":data,"loc":{"start":{"line":186,"column":37},"end":{"line":186,"column":92}}}))
    + "\"\n                            />\n                        </a>\n";
},"68":function(container,depth0,helpers,partials,data) {
    var stack1, lookupProperty = container.lookupProperty || function(parent, propertyName) {
        if (Object.prototype.hasOwnProperty.call(parent, propertyName)) {
          return parent[propertyName];
        }
        return undefined
    };

  return "                    <p class=\"qld__footer__copyrightMessage\">\n                        "
    + container.escapeExpression(container.lambda(((stack1 = (depth0 != null ? lookupProperty(depth0,"footerCopyrightMessage") : depth0)) != null ? lookupProperty(stack1,"value") : stack1), depth0))
    + "\n                    </p>\n";
},"70":function(container,depth0,helpers,partials,data) {
    var stack1, lookupProperty = container.lookupProperty || function(parent, propertyName) {
        if (Object.prototype.hasOwnProperty.call(parent, propertyName)) {
          return parent[propertyName];
        }
        return undefined
    };

  return ((stack1 = lookupProperty(helpers,"if").call(depth0 != null ? depth0 : (container.nullContext || {}),(depth0 != null ? lookupProperty(depth0,"footerCopyrightLink") : depth0),{"name":"if","hash":{},"fn":container.program(71, data, 0),"inverse":container.noop,"data":data,"loc":{"start":{"line":201,"column":24},"end":{"line":207,"column":31}}})) != null ? stack1 : "")
    + "                        \n";
},"71":function(container,depth0,helpers,partials,data) {
    var stack1, lookupProperty = container.lookupProperty || function(parent, propertyName) {
        if (Object.prototype.hasOwnProperty.call(parent, propertyName)) {
          return parent[propertyName];
        }
        return undefined
    };

  return ((stack1 = (lookupProperty(helpers,"ifCond")||(depth0 && lookupProperty(depth0,"ifCond"))||container.hooks.helperMissing).call(depth0 != null ? depth0 : (container.nullContext || {}),((stack1 = (depth0 != null ? lookupProperty(depth0,"footerCopyrightLink") : depth0)) != null ? lookupProperty(stack1,"asset_type_code") : stack1),"==","page_redirect",{"name":"ifCond","hash":{},"fn":container.program(72, data, 0),"inverse":container.program(74, data, 0),"data":data,"loc":{"start":{"line":202,"column":28},"end":{"line":206,"column":39}}})) != null ? stack1 : "");
},"72":function(container,depth0,helpers,partials,data) {
    var alias1=depth0 != null ? depth0 : (container.nullContext || {}), alias2=container.escapeExpression, lookupProperty = container.lookupProperty || function(parent, propertyName) {
        if (Object.prototype.hasOwnProperty.call(parent, propertyName)) {
          return parent[propertyName];
        }
        return undefined
    };

  return "                            <a class=\"qld__footer__clickable__link qld__footer__copyright-link\" href=\""
    + alias2((lookupProperty(helpers,"urldecode")||(depth0 && lookupProperty(depth0,"urldecode"))||container.hooks.helperMissing).call(alias1,lookupProperty(helpers,"lookup").call(alias1,(depth0 != null ? lookupProperty(depth0,"footerCopyrightLink") : depth0),"redirect_url^urlencode",{"name":"lookup","hash":{},"data":data,"loc":{"start":{"line":203,"column":114},"end":{"line":203,"column":167}}}),{"name":"urldecode","hash":{},"data":data,"loc":{"start":{"line":203,"column":102},"end":{"line":203,"column":169}}}))
    + "\" rel=\"external\">"
    + alias2(lookupProperty(helpers,"lookup").call(alias1,(depth0 != null ? lookupProperty(depth0,"footerCopyrightLink") : depth0),"asset_short_name^escapequotes",{"name":"lookup","hash":{},"data":data,"loc":{"start":{"line":203,"column":186},"end":{"line":203,"column":248}}}))
    + "</a>\n";
},"74":function(container,depth0,helpers,partials,data) {
    var alias1=depth0 != null ? depth0 : (container.nullContext || {}), alias2=container.escapeExpression, lookupProperty = container.lookupProperty || function(parent, propertyName) {
        if (Object.prototype.hasOwnProperty.call(parent, propertyName)) {
          return parent[propertyName];
        }
        return undefined
    };

  return "                            <a class=\"qld__footer__clickable__link qld__footer__copyright-link\" href=\""
    + alias2((lookupProperty(helpers,"urldecode")||(depth0 && lookupProperty(depth0,"urldecode"))||container.hooks.helperMissing).call(alias1,lookupProperty(helpers,"lookup").call(alias1,(depth0 != null ? lookupProperty(depth0,"footerCopyrightLink") : depth0),"asset_url^urlencode",{"name":"lookup","hash":{},"data":data,"loc":{"start":{"line":205,"column":114},"end":{"line":205,"column":164}}}),{"name":"urldecode","hash":{},"data":data,"loc":{"start":{"line":205,"column":102},"end":{"line":205,"column":166}}}))
    + "\" rel=\"external\">"
    + alias2(lookupProperty(helpers,"lookup").call(alias1,(depth0 != null ? lookupProperty(depth0,"footerCopyrightLink") : depth0),"asset_short_name^escapequotes",{"name":"lookup","hash":{},"data":data,"loc":{"start":{"line":205,"column":183},"end":{"line":205,"column":245}}}))
    + "</a>\n";
},"compiler":[8,">= 4.3.0"],"main":function(container,depth0,helpers,partials,data,blockParams,depths) {
    var stack1, lookupProperty = container.lookupProperty || function(parent, propertyName) {
        if (Object.prototype.hasOwnProperty.call(parent, propertyName)) {
          return parent[propertyName];
        }
        return undefined
    };

  return "<!--FOOTER -->\n"
    + ((stack1 = lookupProperty(helpers,"with").call(depth0 != null ? depth0 : (container.nullContext || {}),((stack1 = (depth0 != null ? lookupProperty(depth0,"site") : depth0)) != null ? lookupProperty(stack1,"metadata") : stack1),{"name":"with","hash":{},"fn":container.program(1, data, 0, blockParams, depths),"inverse":container.noop,"data":data,"loc":{"start":{"line":2,"column":0},"end":{"line":217,"column":9}}})) != null ? stack1 : "");
},"useData":true,"useDepths":true}