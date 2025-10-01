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
    + ((stack1 = lookupProperty(helpers,"if").call(alias1,((stack1 = (depth0 != null ? lookupProperty(depth0,"footerCTAContact") : depth0)) != null ? lookupProperty(stack1,"value") : stack1),{"name":"if","hash":{},"fn":container.program(8, data, 0, blockParams, depths),"inverse":container.noop,"data":data,"loc":{"start":{"line":31,"column":27},"end":{"line":41,"column":35}}})) != null ? stack1 : "")
    + "                        </div>\n                        <div class=\"col-xs-12 col-sm-4 col-lg-12\">\n"
    + ((stack1 = lookupProperty(helpers,"with").call(alias1,(lookupProperty(helpers,"jsonParse")||(depth0 && lookupProperty(depth0,"jsonParse"))||alias2).call(alias1,((stack1 = (depth0 != null ? lookupProperty(depth0,"footerMetaMetadata") : depth0)) != null ? lookupProperty(stack1,"value") : stack1),{"name":"jsonParse","hash":{},"data":data,"loc":{"start":{"line":44,"column":36},"end":{"line":44,"column":72}}}),{"name":"with","hash":{},"fn":container.program(13, data, 0, blockParams, depths),"inverse":container.noop,"data":data,"loc":{"start":{"line":44,"column":28},"end":{"line":52,"column":37}}})) != null ? stack1 : "")
    + "                        </div>\n                    </div>\n                </div>\n            </div>\n            \n"
    + ((stack1 = lookupProperty(helpers,"with").call(alias1,(lookupProperty(helpers,"jsonParse")||(depth0 && lookupProperty(depth0,"jsonParse"))||alias2).call(alias1,((stack1 = (depth0 != null ? lookupProperty(depth0,"footerMetaMetadata") : depth0)) != null ? lookupProperty(stack1,"value") : stack1),{"name":"jsonParse","hash":{},"data":data,"loc":{"start":{"line":58,"column":20},"end":{"line":58,"column":56}}}),{"name":"with","hash":{},"fn":container.program(19, data, 0, blockParams, depths),"inverse":container.noop,"data":data,"loc":{"start":{"line":58,"column":12},"end":{"line":80,"column":21}}})) != null ? stack1 : "")
    + "            \n"
    + ((stack1 = lookupProperty(helpers,"with").call(alias1,(lookupProperty(helpers,"jsonParse")||(depth0 && lookupProperty(depth0,"jsonParse"))||alias2).call(alias1,((stack1 = (depth0 != null ? lookupProperty(depth0,"footerMetaMetadata") : depth0)) != null ? lookupProperty(stack1,"value") : stack1),{"name":"jsonParse","hash":{},"data":data,"loc":{"start":{"line":82,"column":20},"end":{"line":82,"column":56}}}),{"name":"with","hash":{},"fn":container.program(28, data, 0, blockParams, depths),"inverse":container.noop,"data":data,"loc":{"start":{"line":82,"column":12},"end":{"line":101,"column":21}}})) != null ? stack1 : "")
    + "\n"
    + ((stack1 = lookupProperty(helpers,"with").call(alias1,(lookupProperty(helpers,"jsonParse")||(depth0 && lookupProperty(depth0,"jsonParse"))||alias2).call(alias1,((stack1 = (depth0 != null ? lookupProperty(depth0,"footerMetaMetadata") : depth0)) != null ? lookupProperty(stack1,"value") : stack1),{"name":"jsonParse","hash":{},"data":data,"loc":{"start":{"line":103,"column":20},"end":{"line":103,"column":56}}}),{"name":"with","hash":{},"fn":container.program(31, data, 0, blockParams, depths),"inverse":container.noop,"data":data,"loc":{"start":{"line":103,"column":12},"end":{"line":141,"column":21}}})) != null ? stack1 : "")
    + "            \n            <div class=\"col-xs-12 qld__footer__column\">\n                <div class=\"\">\n                    \n"
    + ((stack1 = lookupProperty(helpers,"if").call(alias1,((stack1 = (depth0 != null ? lookupProperty(depth0,"footerAcknowledgementsHeading") : depth0)) != null ? lookupProperty(stack1,"value") : stack1),{"name":"if","hash":{},"fn":container.program(50, data, 0, blockParams, depths),"inverse":container.noop,"data":data,"loc":{"start":{"line":146,"column":20},"end":{"line":150,"column":27}}})) != null ? stack1 : "")
    + "\n"
    + ((stack1 = lookupProperty(helpers,"if").call(alias1,((stack1 = (depth0 != null ? lookupProperty(depth0,"footerAcknowledgements") : depth0)) != null ? lookupProperty(stack1,"value") : stack1),{"name":"if","hash":{},"fn":container.program(52, data, 0, blockParams, depths),"inverse":container.noop,"data":data,"loc":{"start":{"line":152,"column":20},"end":{"line":156,"column":27}}})) != null ? stack1 : "")
    + "\n"
    + ((stack1 = lookupProperty(helpers,"with").call(alias1,(lookupProperty(helpers,"jsonParse")||(depth0 && lookupProperty(depth0,"jsonParse"))||alias2).call(alias1,((stack1 = (depth0 != null ? lookupProperty(depth0,"footerMetaMetadata") : depth0)) != null ? lookupProperty(stack1,"value") : stack1),{"name":"jsonParse","hash":{},"data":data,"loc":{"start":{"line":158,"column":28},"end":{"line":158,"column":64}}}),{"name":"with","hash":{},"fn":container.program(54, data, 0, blockParams, depths),"inverse":container.noop,"data":data,"loc":{"start":{"line":158,"column":20},"end":{"line":189,"column":29}}})) != null ? stack1 : "")
    + "\n"
    + ((stack1 = lookupProperty(helpers,"if").call(alias1,((stack1 = (depth0 != null ? lookupProperty(depth0,"footerCopyrightMessage") : depth0)) != null ? lookupProperty(stack1,"value") : stack1),{"name":"if","hash":{},"fn":container.program(63, data, 0, blockParams, depths),"inverse":container.noop,"data":data,"loc":{"start":{"line":191,"column":20},"end":{"line":195,"column":27}}})) != null ? stack1 : "")
    + "\n"
    + ((stack1 = lookupProperty(helpers,"with").call(alias1,(lookupProperty(helpers,"jsonParse")||(depth0 && lookupProperty(depth0,"jsonParse"))||alias2).call(alias1,((stack1 = (depth0 != null ? lookupProperty(depth0,"footerMetaMetadata") : depth0)) != null ? lookupProperty(stack1,"value") : stack1),{"name":"jsonParse","hash":{},"data":data,"loc":{"start":{"line":197,"column":28},"end":{"line":197,"column":64}}}),{"name":"with","hash":{},"fn":container.program(65, data, 0, blockParams, depths),"inverse":container.noop,"data":data,"loc":{"start":{"line":197,"column":20},"end":{"line":206,"column":29}}})) != null ? stack1 : "")
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
    var stack1, alias1=depth0 != null ? depth0 : (container.nullContext || {}), alias2=container.hooks.helperMissing, lookupProperty = container.lookupProperty || function(parent, propertyName) {
        if (Object.prototype.hasOwnProperty.call(parent, propertyName)) {
          return parent[propertyName];
        }
        return undefined
    };

  return "                            <p class=\"qld__footer__cta-content\">\n"
    + ((stack1 = (lookupProperty(helpers,"ifCond")||(depth0 && lookupProperty(depth0,"ifCond"))||alias2).call(alias1,((stack1 = (depth0 != null ? lookupProperty(depth0,"footerCTAContactIcon") : depth0)) != null ? lookupProperty(stack1,"value") : stack1),"==","phone",{"name":"ifCond","hash":{},"fn":container.program(9, data, 0),"inverse":container.noop,"data":data,"loc":{"start":{"line":33,"column":32},"end":{"line":35,"column":43}}})) != null ? stack1 : "")
    + ((stack1 = (lookupProperty(helpers,"ifCond")||(depth0 && lookupProperty(depth0,"ifCond"))||alias2).call(alias1,((stack1 = (depth0 != null ? lookupProperty(depth0,"footerCTAContactIcon") : depth0)) != null ? lookupProperty(stack1,"value") : stack1),"==","email",{"name":"ifCond","hash":{},"fn":container.program(11, data, 0),"inverse":container.noop,"data":data,"loc":{"start":{"line":36,"column":32},"end":{"line":38,"column":43}}})) != null ? stack1 : "")
    + "                                "
    + ((stack1 = container.lambda(((stack1 = (depth0 != null ? lookupProperty(depth0,"footerCTAContact") : depth0)) != null ? lookupProperty(stack1,"value") : stack1), depth0)) != null ? stack1 : "")
    + "\n                            </p>\n";
},"9":function(container,depth0,helpers,partials,data) {
    var stack1, lookupProperty = container.lookupProperty || function(parent, propertyName) {
        if (Object.prototype.hasOwnProperty.call(parent, propertyName)) {
          return parent[propertyName];
        }
        return undefined
    };

  return "                                <svg class=\"qld__icon qld__icon--lead\" xmlns=\"http://www.w3.org/2000/svg\"><use href=\""
    + container.escapeExpression(container.lambda(((stack1 = ((stack1 = ((stack1 = ((stack1 = (data && lookupProperty(data,"root"))) && lookupProperty(stack1,"site"))) && lookupProperty(stack1,"metadata"))) && lookupProperty(stack1,"coreSiteIcons"))) && lookupProperty(stack1,"value")), depth0))
    + "#phone\"></use></svg>\n";
},"11":function(container,depth0,helpers,partials,data) {
    var stack1, lookupProperty = container.lookupProperty || function(parent, propertyName) {
        if (Object.prototype.hasOwnProperty.call(parent, propertyName)) {
          return parent[propertyName];
        }
        return undefined
    };

  return "                                <svg class=\"qld__icon qld__icon--lead\" xmlns=\"http://www.w3.org/2000/svg\"><use href=\""
    + container.escapeExpression(container.lambda(((stack1 = ((stack1 = ((stack1 = ((stack1 = (data && lookupProperty(data,"root"))) && lookupProperty(stack1,"site"))) && lookupProperty(stack1,"metadata"))) && lookupProperty(stack1,"coreSiteIcons"))) && lookupProperty(stack1,"value")), depth0))
    + "#Email\"></use></svg>\n";
},"13":function(container,depth0,helpers,partials,data) {
    var stack1, lookupProperty = container.lookupProperty || function(parent, propertyName) {
        if (Object.prototype.hasOwnProperty.call(parent, propertyName)) {
          return parent[propertyName];
        }
        return undefined
    };

  return ((stack1 = lookupProperty(helpers,"if").call(depth0 != null ? depth0 : (container.nullContext || {}),(depth0 != null ? lookupProperty(depth0,"footerCTALink") : depth0),{"name":"if","hash":{},"fn":container.program(14, data, 0),"inverse":container.noop,"data":data,"loc":{"start":{"line":45,"column":32},"end":{"line":51,"column":39}}})) != null ? stack1 : "");
},"14":function(container,depth0,helpers,partials,data) {
    var stack1, lookupProperty = container.lookupProperty || function(parent, propertyName) {
        if (Object.prototype.hasOwnProperty.call(parent, propertyName)) {
          return parent[propertyName];
        }
        return undefined
    };

  return ((stack1 = (lookupProperty(helpers,"ifCond")||(depth0 && lookupProperty(depth0,"ifCond"))||container.hooks.helperMissing).call(depth0 != null ? depth0 : (container.nullContext || {}),((stack1 = (depth0 != null ? lookupProperty(depth0,"footerCTALink") : depth0)) != null ? lookupProperty(stack1,"asset_type_code") : stack1),"==","page_redirect",{"name":"ifCond","hash":{},"fn":container.program(15, data, 0),"inverse":container.program(17, data, 0),"data":data,"loc":{"start":{"line":46,"column":32},"end":{"line":50,"column":43}}})) != null ? stack1 : "");
},"15":function(container,depth0,helpers,partials,data) {
    var alias1=depth0 != null ? depth0 : (container.nullContext || {}), alias2=container.escapeExpression, lookupProperty = container.lookupProperty || function(parent, propertyName) {
        if (Object.prototype.hasOwnProperty.call(parent, propertyName)) {
          return parent[propertyName];
        }
        return undefined
    };

  return "                                <a href=\""
    + alias2((lookupProperty(helpers,"urldecode")||(depth0 && lookupProperty(depth0,"urldecode"))||container.hooks.helperMissing).call(alias1,lookupProperty(helpers,"lookup").call(alias1,(depth0 != null ? lookupProperty(depth0,"footerCTALink") : depth0),"redirect_url^urlencode",{"name":"lookup","hash":{},"data":data,"loc":{"start":{"line":47,"column":53},"end":{"line":47,"column":100}}}),{"name":"urldecode","hash":{},"data":data,"loc":{"start":{"line":47,"column":41},"end":{"line":47,"column":102}}}))
    + "\" class=\"qld__btn qld__btn--secondary\">"
    + alias2(lookupProperty(helpers,"lookup").call(alias1,(depth0 != null ? lookupProperty(depth0,"footerCTALink") : depth0),"asset_short_name^escapequotes",{"name":"lookup","hash":{},"data":data,"loc":{"start":{"line":47,"column":141},"end":{"line":47,"column":197}}}))
    + "</a>\n";
},"17":function(container,depth0,helpers,partials,data) {
    var alias1=depth0 != null ? depth0 : (container.nullContext || {}), alias2=container.escapeExpression, lookupProperty = container.lookupProperty || function(parent, propertyName) {
        if (Object.prototype.hasOwnProperty.call(parent, propertyName)) {
          return parent[propertyName];
        }
        return undefined
    };

  return "                                <a href=\""
    + alias2((lookupProperty(helpers,"urldecode")||(depth0 && lookupProperty(depth0,"urldecode"))||container.hooks.helperMissing).call(alias1,lookupProperty(helpers,"lookup").call(alias1,(depth0 != null ? lookupProperty(depth0,"footerCTALink") : depth0),"asset_url^urlencode",{"name":"lookup","hash":{},"data":data,"loc":{"start":{"line":49,"column":53},"end":{"line":49,"column":97}}}),{"name":"urldecode","hash":{},"data":data,"loc":{"start":{"line":49,"column":41},"end":{"line":49,"column":99}}}))
    + "\" class=\"qld__btn qld__btn--secondary\">"
    + alias2(lookupProperty(helpers,"lookup").call(alias1,(depth0 != null ? lookupProperty(depth0,"footerCTALink") : depth0),"asset_short_name^escapequotes",{"name":"lookup","hash":{},"data":data,"loc":{"start":{"line":49,"column":138},"end":{"line":49,"column":194}}}))
    + "</a>\n";
},"19":function(container,depth0,helpers,partials,data,blockParams,depths) {
    var stack1, lookupProperty = container.lookupProperty || function(parent, propertyName) {
        if (Object.prototype.hasOwnProperty.call(parent, propertyName)) {
          return parent[propertyName];
        }
        return undefined
    };

  return ((stack1 = lookupProperty(helpers,"if").call(depth0 != null ? depth0 : (container.nullContext || {}),(depth0 != null ? lookupProperty(depth0,"footerOptionalSecondLinksList") : depth0),{"name":"if","hash":{},"fn":container.program(20, data, 0, blockParams, depths),"inverse":container.noop,"data":data,"loc":{"start":{"line":59,"column":12},"end":{"line":79,"column":19}}})) != null ? stack1 : "");
},"20":function(container,depth0,helpers,partials,data,blockParams,depths) {
    var stack1, alias1=depth0 != null ? depth0 : (container.nullContext || {}), lookupProperty = container.lookupProperty || function(parent, propertyName) {
        if (Object.prototype.hasOwnProperty.call(parent, propertyName)) {
          return parent[propertyName];
        }
        return undefined
    };

  return "            <div class=\"col-xs-12 col-lg-2 qld__footer__column\">\n                <nav class=\"qld__footer__navigation\" aria-label=\"footer\">\n"
    + ((stack1 = lookupProperty(helpers,"if").call(alias1,((stack1 = (depths[1] != null ? lookupProperty(depths[1],"footerOptionalExtraLinksHeading") : depths[1])) != null ? lookupProperty(stack1,"value") : stack1),{"name":"if","hash":{},"fn":container.program(21, data, 0, blockParams, depths),"inverse":container.noop,"data":data,"loc":{"start":{"line":62,"column":20},"end":{"line":64,"column":27}}})) != null ? stack1 : "")
    + "                    <ul class=\"qld__link-list\">\n"
    + ((stack1 = lookupProperty(helpers,"each").call(alias1,(depth0 != null ? lookupProperty(depth0,"footerOptionalSecondLinksList") : depth0),{"name":"each","hash":{},"fn":container.program(23, data, 0, blockParams, depths),"inverse":container.noop,"data":data,"loc":{"start":{"line":66,"column":24},"end":{"line":75,"column":33}}})) != null ? stack1 : "")
    + "                    </ul>\n                </nav>\n            </div>\n";
},"21":function(container,depth0,helpers,partials,data,blockParams,depths) {
    var stack1, lookupProperty = container.lookupProperty || function(parent, propertyName) {
        if (Object.prototype.hasOwnProperty.call(parent, propertyName)) {
          return parent[propertyName];
        }
        return undefined
    };

  return "                    <h3 class=\"qld__footer__heading\">"
    + container.escapeExpression(container.lambda(((stack1 = (depths[1] != null ? lookupProperty(depths[1],"footerOptionalExtraLinksHeading") : depths[1])) != null ? lookupProperty(stack1,"value") : stack1), depth0))
    + "</h3>\n";
},"23":function(container,depth0,helpers,partials,data) {
    var stack1, lookupProperty = container.lookupProperty || function(parent, propertyName) {
        if (Object.prototype.hasOwnProperty.call(parent, propertyName)) {
          return parent[propertyName];
        }
        return undefined
    };

  return "                        <li>\n"
    + ((stack1 = (lookupProperty(helpers,"ifCond")||(depth0 && lookupProperty(depth0,"ifCond"))||container.hooks.helperMissing).call(depth0 != null ? depth0 : (container.nullContext || {}),(depth0 != null ? lookupProperty(depth0,"asset_type_code") : depth0),"==","page_redirect",{"name":"ifCond","hash":{},"fn":container.program(24, data, 0),"inverse":container.program(26, data, 0),"data":data,"loc":{"start":{"line":68,"column":28},"end":{"line":73,"column":39}}})) != null ? stack1 : "")
    + "                        </li>\n";
},"24":function(container,depth0,helpers,partials,data) {
    var alias1=depth0 != null ? depth0 : (container.nullContext || {}), alias2=container.escapeExpression, lookupProperty = container.lookupProperty || function(parent, propertyName) {
        if (Object.prototype.hasOwnProperty.call(parent, propertyName)) {
          return parent[propertyName];
        }
        return undefined
    };

  return "                            <a class=\"qld__footer__clickable__link\" href=\""
    + alias2((lookupProperty(helpers,"urldecode")||(depth0 && lookupProperty(depth0,"urldecode"))||container.hooks.helperMissing).call(alias1,lookupProperty(helpers,"lookup").call(alias1,depth0,"redirect_url^urlencode",{"name":"lookup","hash":{},"data":data,"loc":{"start":{"line":69,"column":86},"end":{"line":69,"column":124}}}),{"name":"urldecode","hash":{},"data":data,"loc":{"start":{"line":69,"column":74},"end":{"line":69,"column":126}}}))
    + "\">"
    + alias2(lookupProperty(helpers,"lookup").call(alias1,depth0,"asset_short_name^escapequotes",{"name":"lookup","hash":{},"data":data,"loc":{"start":{"line":69,"column":128},"end":{"line":69,"column":175}}}))
    + "</a>\n\n";
},"26":function(container,depth0,helpers,partials,data) {
    var alias1=depth0 != null ? depth0 : (container.nullContext || {}), alias2=container.escapeExpression, lookupProperty = container.lookupProperty || function(parent, propertyName) {
        if (Object.prototype.hasOwnProperty.call(parent, propertyName)) {
          return parent[propertyName];
        }
        return undefined
    };

  return "                            <a class=\"qld__footer__clickable__link\" href=\""
    + alias2((lookupProperty(helpers,"urldecode")||(depth0 && lookupProperty(depth0,"urldecode"))||container.hooks.helperMissing).call(alias1,lookupProperty(helpers,"lookup").call(alias1,depth0,"asset_url^urlencode",{"name":"lookup","hash":{},"data":data,"loc":{"start":{"line":72,"column":86},"end":{"line":72,"column":121}}}),{"name":"urldecode","hash":{},"data":data,"loc":{"start":{"line":72,"column":74},"end":{"line":72,"column":123}}}))
    + "\">"
    + alias2(lookupProperty(helpers,"lookup").call(alias1,depth0,"asset_short_name^escapequotes",{"name":"lookup","hash":{},"data":data,"loc":{"start":{"line":72,"column":125},"end":{"line":72,"column":172}}}))
    + "</a>\n";
},"28":function(container,depth0,helpers,partials,data,blockParams,depths) {
    var stack1, lookupProperty = container.lookupProperty || function(parent, propertyName) {
        if (Object.prototype.hasOwnProperty.call(parent, propertyName)) {
          return parent[propertyName];
        }
        return undefined
    };

  return ((stack1 = lookupProperty(helpers,"if").call(depth0 != null ? depth0 : (container.nullContext || {}),(depth0 != null ? lookupProperty(depth0,"footerLinks") : depth0),{"name":"if","hash":{},"fn":container.program(29, data, 0, blockParams, depths),"inverse":container.noop,"data":data,"loc":{"start":{"line":83,"column":12},"end":{"line":100,"column":19}}})) != null ? stack1 : "");
},"29":function(container,depth0,helpers,partials,data,blockParams,depths) {
    var stack1, lookupProperty = container.lookupProperty || function(parent, propertyName) {
        if (Object.prototype.hasOwnProperty.call(parent, propertyName)) {
          return parent[propertyName];
        }
        return undefined
    };

  return "            <div class=\"col-xs-12 col-lg-2 qld__footer__column\">\n                <nav class=\"qld__footer__navigation\" aria-label=\"footer\">\n                    <ul class=\"qld__link-list\">\n"
    + ((stack1 = lookupProperty(helpers,"each").call(depth0 != null ? depth0 : (container.nullContext || {}),(depth0 != null ? lookupProperty(depth0,"footerLinks") : depth0),{"name":"each","hash":{},"fn":container.program(23, data, 0, blockParams, depths),"inverse":container.noop,"data":data,"loc":{"start":{"line":87,"column":24},"end":{"line":96,"column":33}}})) != null ? stack1 : "")
    + "                    </ul>\n                </nav>\n            </div>\n";
},"31":function(container,depth0,helpers,partials,data,blockParams,depths) {
    var stack1, lookupProperty = container.lookupProperty || function(parent, propertyName) {
        if (Object.prototype.hasOwnProperty.call(parent, propertyName)) {
          return parent[propertyName];
        }
        return undefined
    };

  return ((stack1 = lookupProperty(helpers,"if").call(depth0 != null ? depth0 : (container.nullContext || {}),(depth0 != null ? lookupProperty(depth0,"footerSocialLinks") : depth0),{"name":"if","hash":{},"fn":container.program(32, data, 0, blockParams, depths),"inverse":container.noop,"data":data,"loc":{"start":{"line":104,"column":12},"end":{"line":140,"column":19}}})) != null ? stack1 : "");
},"32":function(container,depth0,helpers,partials,data,blockParams,depths) {
    var stack1, alias1=depth0 != null ? depth0 : (container.nullContext || {}), lookupProperty = container.lookupProperty || function(parent, propertyName) {
        if (Object.prototype.hasOwnProperty.call(parent, propertyName)) {
          return parent[propertyName];
        }
        return undefined
    };

  return "            <div class=\"col-xs-12 col-lg-2 qld__footer__column\">\n                <nav class=\"qld__footer__social\" aria-label=\"social media links\">\n"
    + ((stack1 = lookupProperty(helpers,"if").call(alias1,((stack1 = (depths[1] != null ? lookupProperty(depths[1],"footerSocialLinksHeading") : depths[1])) != null ? lookupProperty(stack1,"value") : stack1),{"name":"if","hash":{},"fn":container.program(33, data, 0, blockParams, depths),"inverse":container.noop,"data":data,"loc":{"start":{"line":107,"column":20},"end":{"line":109,"column":27}}})) != null ? stack1 : "")
    + "                    <ul class=\"qld__link-list\">\n"
    + ((stack1 = lookupProperty(helpers,"each").call(alias1,(depth0 != null ? lookupProperty(depth0,"footerSocialLinks") : depth0),{"name":"each","hash":{},"fn":container.program(35, data, 0, blockParams, depths),"inverse":container.noop,"data":data,"loc":{"start":{"line":111,"column":24},"end":{"line":136,"column":33}}})) != null ? stack1 : "")
    + "                    </ul>\n                </nav>\n            </div>\n";
},"33":function(container,depth0,helpers,partials,data,blockParams,depths) {
    var stack1, lookupProperty = container.lookupProperty || function(parent, propertyName) {
        if (Object.prototype.hasOwnProperty.call(parent, propertyName)) {
          return parent[propertyName];
        }
        return undefined
    };

  return "                    <h3 class=\"qld__footer__heading\">"
    + container.escapeExpression(container.lambda(((stack1 = (depths[1] != null ? lookupProperty(depths[1],"footerSocialLinksHeading") : depths[1])) != null ? lookupProperty(stack1,"value") : stack1), depth0))
    + "</h3>\n";
},"35":function(container,depth0,helpers,partials,data) {
    var stack1, alias1=depth0 != null ? depth0 : (container.nullContext || {}), alias2=container.hooks.helperMissing, lookupProperty = container.lookupProperty || function(parent, propertyName) {
        if (Object.prototype.hasOwnProperty.call(parent, propertyName)) {
          return parent[propertyName];
        }
        return undefined
    };

  return "                        <li>\n"
    + ((stack1 = (lookupProperty(helpers,"ifCond")||(depth0 && lookupProperty(depth0,"ifCond"))||alias2).call(alias1,(depth0 != null ? lookupProperty(depth0,"asset_type_code") : depth0),"==","page_redirect",{"name":"ifCond","hash":{},"fn":container.program(36, data, 0),"inverse":container.program(38, data, 0),"data":data,"loc":{"start":{"line":113,"column":28},"end":{"line":117,"column":39}}})) != null ? stack1 : "")
    + ((stack1 = (lookupProperty(helpers,"ifCond")||(depth0 && lookupProperty(depth0,"ifCond"))||alias2).call(alias1,lookupProperty(helpers,"lookup").call(alias1,depth0,"asset_short_name^escapequotes",{"name":"lookup","hash":{},"data":data,"loc":{"start":{"line":118,"column":42},"end":{"line":118,"column":87}}}),"contains","facebook",{"name":"ifCond","hash":{},"fn":container.program(40, data, 0),"inverse":container.noop,"data":data,"loc":{"start":{"line":118,"column":32},"end":{"line":120,"column":43}}})) != null ? stack1 : "")
    + ((stack1 = (lookupProperty(helpers,"ifCond")||(depth0 && lookupProperty(depth0,"ifCond"))||alias2).call(alias1,lookupProperty(helpers,"lookup").call(alias1,depth0,"asset_short_name^escapequotes",{"name":"lookup","hash":{},"data":data,"loc":{"start":{"line":121,"column":42},"end":{"line":121,"column":87}}}),"contains","linkedin",{"name":"ifCond","hash":{},"fn":container.program(42, data, 0),"inverse":container.noop,"data":data,"loc":{"start":{"line":121,"column":32},"end":{"line":123,"column":43}}})) != null ? stack1 : "")
    + ((stack1 = (lookupProperty(helpers,"ifCond")||(depth0 && lookupProperty(depth0,"ifCond"))||alias2).call(alias1,lookupProperty(helpers,"lookup").call(alias1,depth0,"asset_short_name^escapequotes",{"name":"lookup","hash":{},"data":data,"loc":{"start":{"line":124,"column":42},"end":{"line":124,"column":87}}}),"contains","youtube",{"name":"ifCond","hash":{},"fn":container.program(44, data, 0),"inverse":container.noop,"data":data,"loc":{"start":{"line":124,"column":32},"end":{"line":126,"column":43}}})) != null ? stack1 : "")
    + ((stack1 = (lookupProperty(helpers,"ifCond")||(depth0 && lookupProperty(depth0,"ifCond"))||alias2).call(alias1,lookupProperty(helpers,"lookup").call(alias1,depth0,"asset_short_name^escapequotes",{"name":"lookup","hash":{},"data":data,"loc":{"start":{"line":127,"column":42},"end":{"line":127,"column":87}}}),"contains","instagram",{"name":"ifCond","hash":{},"fn":container.program(46, data, 0),"inverse":container.noop,"data":data,"loc":{"start":{"line":127,"column":32},"end":{"line":129,"column":43}}})) != null ? stack1 : "")
    + ((stack1 = (lookupProperty(helpers,"ifCond")||(depth0 && lookupProperty(depth0,"ifCond"))||alias2).call(alias1,lookupProperty(helpers,"lookup").call(alias1,depth0,"asset_short_name^escapequotes",{"name":"lookup","hash":{},"data":data,"loc":{"start":{"line":130,"column":42},"end":{"line":130,"column":87}}}),"contains","twitter",{"name":"ifCond","hash":{},"fn":container.program(48, data, 0),"inverse":container.noop,"data":data,"loc":{"start":{"line":130,"column":32},"end":{"line":132,"column":43}}})) != null ? stack1 : "")
    + "                                <span class=\"qld__footer__social__label\">"
    + container.escapeExpression(lookupProperty(helpers,"lookup").call(alias1,depth0,"asset_short_name^escapequotes",{"name":"lookup","hash":{},"data":data,"loc":{"start":{"line":133,"column":73},"end":{"line":133,"column":120}}}))
    + "</span>\n                            </a>\n                        </li>\n";
},"36":function(container,depth0,helpers,partials,data) {
    var alias1=depth0 != null ? depth0 : (container.nullContext || {}), lookupProperty = container.lookupProperty || function(parent, propertyName) {
        if (Object.prototype.hasOwnProperty.call(parent, propertyName)) {
          return parent[propertyName];
        }
        return undefined
    };

  return "                            <a class=\"qld__footer__clickable__link\" href=\""
    + container.escapeExpression((lookupProperty(helpers,"urldecode")||(depth0 && lookupProperty(depth0,"urldecode"))||container.hooks.helperMissing).call(alias1,lookupProperty(helpers,"lookup").call(alias1,depth0,"redirect_url^urlencode",{"name":"lookup","hash":{},"data":data,"loc":{"start":{"line":114,"column":86},"end":{"line":114,"column":124}}}),{"name":"urldecode","hash":{},"data":data,"loc":{"start":{"line":114,"column":74},"end":{"line":114,"column":126}}}))
    + "\">\n";
},"38":function(container,depth0,helpers,partials,data) {
    var alias1=depth0 != null ? depth0 : (container.nullContext || {}), lookupProperty = container.lookupProperty || function(parent, propertyName) {
        if (Object.prototype.hasOwnProperty.call(parent, propertyName)) {
          return parent[propertyName];
        }
        return undefined
    };

  return "                            <a class=\"qld__footer__clickable__link\" href=\""
    + container.escapeExpression((lookupProperty(helpers,"urldecode")||(depth0 && lookupProperty(depth0,"urldecode"))||container.hooks.helperMissing).call(alias1,lookupProperty(helpers,"lookup").call(alias1,depth0,"asset_url^urlencode",{"name":"lookup","hash":{},"data":data,"loc":{"start":{"line":116,"column":86},"end":{"line":116,"column":121}}}),{"name":"urldecode","hash":{},"data":data,"loc":{"start":{"line":116,"column":74},"end":{"line":116,"column":123}}}))
    + "\">\n";
},"40":function(container,depth0,helpers,partials,data) {
    var stack1, lookupProperty = container.lookupProperty || function(parent, propertyName) {
        if (Object.prototype.hasOwnProperty.call(parent, propertyName)) {
          return parent[propertyName];
        }
        return undefined
    };

  return "                                    <svg class=\"qld__icon qld__icon--md\" aria-hidden=\"true\" xmlns=\"http://www.w3.org/2000/svg\"><use href=\""
    + container.escapeExpression(container.lambda(((stack1 = ((stack1 = ((stack1 = ((stack1 = (data && lookupProperty(data,"root"))) && lookupProperty(stack1,"site"))) && lookupProperty(stack1,"metadata"))) && lookupProperty(stack1,"coreSiteIcons"))) && lookupProperty(stack1,"value")), depth0))
    + "#Facebook\"></use></svg>\n";
},"42":function(container,depth0,helpers,partials,data) {
    var stack1, lookupProperty = container.lookupProperty || function(parent, propertyName) {
        if (Object.prototype.hasOwnProperty.call(parent, propertyName)) {
          return parent[propertyName];
        }
        return undefined
    };

  return "                                    <svg class=\"qld__icon qld__icon--md\" aria-hidden=\"true\" xmlns=\"http://www.w3.org/2000/svg\"><use href=\""
    + container.escapeExpression(container.lambda(((stack1 = ((stack1 = ((stack1 = ((stack1 = (data && lookupProperty(data,"root"))) && lookupProperty(stack1,"site"))) && lookupProperty(stack1,"metadata"))) && lookupProperty(stack1,"coreSiteIcons"))) && lookupProperty(stack1,"value")), depth0))
    + "#LinkedIn\"></use></svg>\n";
},"44":function(container,depth0,helpers,partials,data) {
    var stack1, lookupProperty = container.lookupProperty || function(parent, propertyName) {
        if (Object.prototype.hasOwnProperty.call(parent, propertyName)) {
          return parent[propertyName];
        }
        return undefined
    };

  return "                                    <svg class=\"qld__icon qld__icon--md\" aria-hidden=\"true\" xmlns=\"http://www.w3.org/2000/svg\"><use href=\""
    + container.escapeExpression(container.lambda(((stack1 = ((stack1 = ((stack1 = ((stack1 = (data && lookupProperty(data,"root"))) && lookupProperty(stack1,"site"))) && lookupProperty(stack1,"metadata"))) && lookupProperty(stack1,"coreSiteIcons"))) && lookupProperty(stack1,"value")), depth0))
    + "#YouTube\"></use></svg>\n";
},"46":function(container,depth0,helpers,partials,data) {
    var stack1, lookupProperty = container.lookupProperty || function(parent, propertyName) {
        if (Object.prototype.hasOwnProperty.call(parent, propertyName)) {
          return parent[propertyName];
        }
        return undefined
    };

  return "                                    <svg class=\"qld__icon qld__icon--md\" aria-hidden=\"true\" xmlns=\"http://www.w3.org/2000/svg\"><use href=\""
    + container.escapeExpression(container.lambda(((stack1 = ((stack1 = ((stack1 = ((stack1 = (data && lookupProperty(data,"root"))) && lookupProperty(stack1,"site"))) && lookupProperty(stack1,"metadata"))) && lookupProperty(stack1,"coreSiteIcons"))) && lookupProperty(stack1,"value")), depth0))
    + "#Instagram\"></use></svg>\n";
},"48":function(container,depth0,helpers,partials,data) {
    var stack1, lookupProperty = container.lookupProperty || function(parent, propertyName) {
        if (Object.prototype.hasOwnProperty.call(parent, propertyName)) {
          return parent[propertyName];
        }
        return undefined
    };

  return "                                    <svg class=\"qld__icon qld__icon--md\" aria-hidden=\"true\" xmlns=\"http://www.w3.org/2000/svg\"><use href=\""
    + container.escapeExpression(container.lambda(((stack1 = ((stack1 = ((stack1 = ((stack1 = (data && lookupProperty(data,"root"))) && lookupProperty(stack1,"site"))) && lookupProperty(stack1,"metadata"))) && lookupProperty(stack1,"coreSiteIcons"))) && lookupProperty(stack1,"value")), depth0))
    + "#X\"></use></svg>\n";
},"50":function(container,depth0,helpers,partials,data) {
    var stack1, lookupProperty = container.lookupProperty || function(parent, propertyName) {
        if (Object.prototype.hasOwnProperty.call(parent, propertyName)) {
          return parent[propertyName];
        }
        return undefined
    };

  return "                    <h3 class=\"qld__footer__heading\">\n                        "
    + container.escapeExpression(container.lambda(((stack1 = (depth0 != null ? lookupProperty(depth0,"footerAcknowledgementsHeading") : depth0)) != null ? lookupProperty(stack1,"value") : stack1), depth0))
    + "\n                    </h3>\n";
},"52":function(container,depth0,helpers,partials,data) {
    var stack1, lookupProperty = container.lookupProperty || function(parent, propertyName) {
        if (Object.prototype.hasOwnProperty.call(parent, propertyName)) {
          return parent[propertyName];
        }
        return undefined
    };

  return "                    <p class=\"qld__footer__acknowledgements\">\n                        "
    + container.escapeExpression(container.lambda(((stack1 = (depth0 != null ? lookupProperty(depth0,"footerAcknowledgements") : depth0)) != null ? lookupProperty(stack1,"value") : stack1), depth0))
    + "\n                    </p>\n";
},"54":function(container,depth0,helpers,partials,data) {
    var stack1, lookupProperty = container.lookupProperty || function(parent, propertyName) {
        if (Object.prototype.hasOwnProperty.call(parent, propertyName)) {
          return parent[propertyName];
        }
        return undefined
    };

  return ((stack1 = lookupProperty(helpers,"if").call(depth0 != null ? depth0 : (container.nullContext || {}),(depth0 != null ? lookupProperty(depth0,"footerLogo") : depth0),{"name":"if","hash":{},"fn":container.program(55, data, 0),"inverse":container.noop,"data":data,"loc":{"start":{"line":159,"column":20},"end":{"line":188,"column":27}}})) != null ? stack1 : "");
},"55":function(container,depth0,helpers,partials,data) {
    var stack1, lookupProperty = container.lookupProperty || function(parent, propertyName) {
        if (Object.prototype.hasOwnProperty.call(parent, propertyName)) {
          return parent[propertyName];
        }
        return undefined
    };

  return ((stack1 = lookupProperty(helpers,"if").call(depth0 != null ? depth0 : (container.nullContext || {}),(depth0 != null ? lookupProperty(depth0,"footerCopyrightLink") : depth0),{"name":"if","hash":{},"fn":container.program(56, data, 0),"inverse":container.program(61, data, 0),"data":data,"loc":{"start":{"line":160,"column":20},"end":{"line":186,"column":27}}})) != null ? stack1 : "")
    + "                        \n";
},"56":function(container,depth0,helpers,partials,data) {
    var stack1, lookupProperty = container.lookupProperty || function(parent, propertyName) {
        if (Object.prototype.hasOwnProperty.call(parent, propertyName)) {
          return parent[propertyName];
        }
        return undefined
    };

  return ((stack1 = (lookupProperty(helpers,"ifCond")||(depth0 && lookupProperty(depth0,"ifCond"))||container.hooks.helperMissing).call(depth0 != null ? depth0 : (container.nullContext || {}),((stack1 = (depth0 != null ? lookupProperty(depth0,"footerCopyrightLink") : depth0)) != null ? lookupProperty(stack1,"asset_type_code") : stack1),"==","page_redirect",{"name":"ifCond","hash":{},"fn":container.program(57, data, 0),"inverse":container.program(59, data, 0),"data":data,"loc":{"start":{"line":161,"column":28},"end":{"line":177,"column":39}}})) != null ? stack1 : "");
},"57":function(container,depth0,helpers,partials,data) {
    var alias1=depth0 != null ? depth0 : (container.nullContext || {}), alias2=container.hooks.helperMissing, alias3=container.escapeExpression, lookupProperty = container.lookupProperty || function(parent, propertyName) {
        if (Object.prototype.hasOwnProperty.call(parent, propertyName)) {
          return parent[propertyName];
        }
        return undefined
    };

  return "                            <a class=\"qld__footer__logo\" href=\""
    + alias3((lookupProperty(helpers,"urldecode")||(depth0 && lookupProperty(depth0,"urldecode"))||alias2).call(alias1,lookupProperty(helpers,"lookup").call(alias1,(depth0 != null ? lookupProperty(depth0,"footerCopyrightLink") : depth0),"redirect_url^urlencode",{"name":"lookup","hash":{},"data":data,"loc":{"start":{"line":162,"column":75},"end":{"line":162,"column":128}}}),{"name":"urldecode","hash":{},"data":data,"loc":{"start":{"line":162,"column":63},"end":{"line":162,"column":130}}}))
    + "\">\n                                <img\n                                    class=\"qld__footer__logo-image\"\n                                    alt=\"Queensland Government\"\n                                    src=\""
    + alias3((lookupProperty(helpers,"urldecode")||(depth0 && lookupProperty(depth0,"urldecode"))||alias2).call(alias1,lookupProperty(helpers,"lookup").call(alias1,(depth0 != null ? lookupProperty(depth0,"footerLogo") : depth0),"asset_url^urlencode",{"name":"lookup","hash":{},"data":data,"loc":{"start":{"line":166,"column":53},"end":{"line":166,"column":94}}}),{"name":"urldecode","hash":{},"data":data,"loc":{"start":{"line":166,"column":41},"end":{"line":166,"column":96}}}))
    + "\"\n                                />\n                            </a>\n";
},"59":function(container,depth0,helpers,partials,data) {
    var alias1=depth0 != null ? depth0 : (container.nullContext || {}), alias2=container.hooks.helperMissing, alias3=container.escapeExpression, lookupProperty = container.lookupProperty || function(parent, propertyName) {
        if (Object.prototype.hasOwnProperty.call(parent, propertyName)) {
          return parent[propertyName];
        }
        return undefined
    };

  return "                            <a class=\"qld__footer__logo\" href=\""
    + alias3((lookupProperty(helpers,"urldecode")||(depth0 && lookupProperty(depth0,"urldecode"))||alias2).call(alias1,lookupProperty(helpers,"lookup").call(alias1,(depth0 != null ? lookupProperty(depth0,"footerCopyrightLink") : depth0),"asset_url^urlencode",{"name":"lookup","hash":{},"data":data,"loc":{"start":{"line":170,"column":75},"end":{"line":170,"column":125}}}),{"name":"urldecode","hash":{},"data":data,"loc":{"start":{"line":170,"column":63},"end":{"line":170,"column":127}}}))
    + "\">\n                                <img\n                                    class=\"qld__footer__logo-image\"\n                                    alt=\"Queensland Government\"\n                                    src=\""
    + alias3((lookupProperty(helpers,"urldecode")||(depth0 && lookupProperty(depth0,"urldecode"))||alias2).call(alias1,lookupProperty(helpers,"lookup").call(alias1,(depth0 != null ? lookupProperty(depth0,"footerLogo") : depth0),"asset_url^urlencode",{"name":"lookup","hash":{},"data":data,"loc":{"start":{"line":174,"column":53},"end":{"line":174,"column":94}}}),{"name":"urldecode","hash":{},"data":data,"loc":{"start":{"line":174,"column":41},"end":{"line":174,"column":96}}}))
    + "\"\n                                />\n                            </a>\n";
},"61":function(container,depth0,helpers,partials,data) {
    var alias1=depth0 != null ? depth0 : (container.nullContext || {}), lookupProperty = container.lookupProperty || function(parent, propertyName) {
        if (Object.prototype.hasOwnProperty.call(parent, propertyName)) {
          return parent[propertyName];
        }
        return undefined
    };

  return "                        <a class=\"qld__footer__logo\"  href=\"https://www.qld.gov.au/\">\n                            <img\n                                class=\"qld__footer__logo-image\"\n                                alt=\"Queensland Government\"\n                                src=\""
    + container.escapeExpression((lookupProperty(helpers,"urldecode")||(depth0 && lookupProperty(depth0,"urldecode"))||container.hooks.helperMissing).call(alias1,lookupProperty(helpers,"lookup").call(alias1,(depth0 != null ? lookupProperty(depth0,"footerLogo") : depth0),"asset_url^urlencode",{"name":"lookup","hash":{},"data":data,"loc":{"start":{"line":183,"column":49},"end":{"line":183,"column":90}}}),{"name":"urldecode","hash":{},"data":data,"loc":{"start":{"line":183,"column":37},"end":{"line":183,"column":92}}}))
    + "\"\n                            />\n                        </a>\n";
},"63":function(container,depth0,helpers,partials,data) {
    var stack1, lookupProperty = container.lookupProperty || function(parent, propertyName) {
        if (Object.prototype.hasOwnProperty.call(parent, propertyName)) {
          return parent[propertyName];
        }
        return undefined
    };

  return "                    <p class=\"qld__footer__copyrightMessage\">\n                        "
    + container.escapeExpression(container.lambda(((stack1 = (depth0 != null ? lookupProperty(depth0,"footerCopyrightMessage") : depth0)) != null ? lookupProperty(stack1,"value") : stack1), depth0))
    + "\n                    </p>\n";
},"65":function(container,depth0,helpers,partials,data) {
    var stack1, lookupProperty = container.lookupProperty || function(parent, propertyName) {
        if (Object.prototype.hasOwnProperty.call(parent, propertyName)) {
          return parent[propertyName];
        }
        return undefined
    };

  return ((stack1 = lookupProperty(helpers,"if").call(depth0 != null ? depth0 : (container.nullContext || {}),(depth0 != null ? lookupProperty(depth0,"footerCopyrightLink") : depth0),{"name":"if","hash":{},"fn":container.program(66, data, 0),"inverse":container.noop,"data":data,"loc":{"start":{"line":198,"column":24},"end":{"line":204,"column":31}}})) != null ? stack1 : "")
    + "                        \n";
},"66":function(container,depth0,helpers,partials,data) {
    var stack1, lookupProperty = container.lookupProperty || function(parent, propertyName) {
        if (Object.prototype.hasOwnProperty.call(parent, propertyName)) {
          return parent[propertyName];
        }
        return undefined
    };

  return ((stack1 = (lookupProperty(helpers,"ifCond")||(depth0 && lookupProperty(depth0,"ifCond"))||container.hooks.helperMissing).call(depth0 != null ? depth0 : (container.nullContext || {}),((stack1 = (depth0 != null ? lookupProperty(depth0,"footerCopyrightLink") : depth0)) != null ? lookupProperty(stack1,"asset_type_code") : stack1),"==","page_redirect",{"name":"ifCond","hash":{},"fn":container.program(67, data, 0),"inverse":container.program(69, data, 0),"data":data,"loc":{"start":{"line":199,"column":28},"end":{"line":203,"column":39}}})) != null ? stack1 : "");
},"67":function(container,depth0,helpers,partials,data) {
    var alias1=depth0 != null ? depth0 : (container.nullContext || {}), alias2=container.escapeExpression, lookupProperty = container.lookupProperty || function(parent, propertyName) {
        if (Object.prototype.hasOwnProperty.call(parent, propertyName)) {
          return parent[propertyName];
        }
        return undefined
    };

  return "                            <a class=\"qld__footer__clickable__link qld__footer__copyright-link\" href=\""
    + alias2((lookupProperty(helpers,"urldecode")||(depth0 && lookupProperty(depth0,"urldecode"))||container.hooks.helperMissing).call(alias1,lookupProperty(helpers,"lookup").call(alias1,(depth0 != null ? lookupProperty(depth0,"footerCopyrightLink") : depth0),"redirect_url^urlencode",{"name":"lookup","hash":{},"data":data,"loc":{"start":{"line":200,"column":114},"end":{"line":200,"column":167}}}),{"name":"urldecode","hash":{},"data":data,"loc":{"start":{"line":200,"column":102},"end":{"line":200,"column":169}}}))
    + "\" rel=\"external\">"
    + alias2(lookupProperty(helpers,"lookup").call(alias1,(depth0 != null ? lookupProperty(depth0,"footerCopyrightLink") : depth0),"asset_short_name^escapequotes",{"name":"lookup","hash":{},"data":data,"loc":{"start":{"line":200,"column":186},"end":{"line":200,"column":248}}}))
    + "</a>\n";
},"69":function(container,depth0,helpers,partials,data) {
    var alias1=depth0 != null ? depth0 : (container.nullContext || {}), alias2=container.escapeExpression, lookupProperty = container.lookupProperty || function(parent, propertyName) {
        if (Object.prototype.hasOwnProperty.call(parent, propertyName)) {
          return parent[propertyName];
        }
        return undefined
    };

  return "                            <a class=\"qld__footer__clickable__link qld__footer__copyright-link\" href=\""
    + alias2((lookupProperty(helpers,"urldecode")||(depth0 && lookupProperty(depth0,"urldecode"))||container.hooks.helperMissing).call(alias1,lookupProperty(helpers,"lookup").call(alias1,(depth0 != null ? lookupProperty(depth0,"footerCopyrightLink") : depth0),"asset_url^urlencode",{"name":"lookup","hash":{},"data":data,"loc":{"start":{"line":202,"column":114},"end":{"line":202,"column":164}}}),{"name":"urldecode","hash":{},"data":data,"loc":{"start":{"line":202,"column":102},"end":{"line":202,"column":166}}}))
    + "\" rel=\"external\">"
    + alias2(lookupProperty(helpers,"lookup").call(alias1,(depth0 != null ? lookupProperty(depth0,"footerCopyrightLink") : depth0),"asset_short_name^escapequotes",{"name":"lookup","hash":{},"data":data,"loc":{"start":{"line":202,"column":183},"end":{"line":202,"column":245}}}))
    + "</a>\n";
},"compiler":[8,">= 4.3.0"],"main":function(container,depth0,helpers,partials,data,blockParams,depths) {
    var stack1, lookupProperty = container.lookupProperty || function(parent, propertyName) {
        if (Object.prototype.hasOwnProperty.call(parent, propertyName)) {
          return parent[propertyName];
        }
        return undefined
    };

  return "<!--FOOTER -->\n"
    + ((stack1 = lookupProperty(helpers,"with").call(depth0 != null ? depth0 : (container.nullContext || {}),((stack1 = (depth0 != null ? lookupProperty(depth0,"site") : depth0)) != null ? lookupProperty(stack1,"metadata") : stack1),{"name":"with","hash":{},"fn":container.program(1, data, 0, blockParams, depths),"inverse":container.noop,"data":data,"loc":{"start":{"line":2,"column":0},"end":{"line":214,"column":9}}})) != null ? stack1 : "");
},"useData":true,"useDepths":true}