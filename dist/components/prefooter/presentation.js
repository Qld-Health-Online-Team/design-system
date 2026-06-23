{"1":function(container,depth0,helpers,partials,data) {
    var stack1, alias1=depth0 != null ? depth0 : (container.nullContext || {}), alias2=container.hooks.helperMissing, lookupProperty = container.lookupProperty || function(parent, propertyName) {
        if (Object.prototype.hasOwnProperty.call(parent, propertyName)) {
          return parent[propertyName];
        }
        return undefined
    };

  return ((stack1 = (lookupProperty(helpers,"ifCond")||(depth0 && lookupProperty(depth0,"ifCond"))||alias2).call(alias1,((stack1 = ((stack1 = ((stack1 = ((stack1 = (depth0 != null ? lookupProperty(depth0,"current") : depth0)) != null ? lookupProperty(stack1,"data") : stack1)) != null ? lookupProperty(stack1,"metadata") : stack1)) != null ? lookupProperty(stack1,"pageType") : stack1)) != null ? lookupProperty(stack1,"value") : stack1),"==","landing",{"name":"ifCond","hash":{},"fn":container.program(2, data, 0),"inverse":container.noop,"data":data,"loc":{"start":{"line":2,"column":2},"end":{"line":23,"column":13}}})) != null ? stack1 : "")
    + ((stack1 = (lookupProperty(helpers,"ifCond")||(depth0 && lookupProperty(depth0,"ifCond"))||alias2).call(alias1,((stack1 = ((stack1 = ((stack1 = ((stack1 = (depth0 != null ? lookupProperty(depth0,"current") : depth0)) != null ? lookupProperty(stack1,"data") : stack1)) != null ? lookupProperty(stack1,"metadata") : stack1)) != null ? lookupProperty(stack1,"pageType") : stack1)) != null ? lookupProperty(stack1,"value") : stack1),"==","news_detail",{"name":"ifCond","hash":{},"fn":container.program(2, data, 0),"inverse":container.noop,"data":data,"loc":{"start":{"line":24,"column":2},"end":{"line":45,"column":13}}})) != null ? stack1 : "")
    + ((stack1 = (lookupProperty(helpers,"ifCond")||(depth0 && lookupProperty(depth0,"ifCond"))||alias2).call(alias1,((stack1 = ((stack1 = ((stack1 = ((stack1 = (depth0 != null ? lookupProperty(depth0,"current") : depth0)) != null ? lookupProperty(stack1,"data") : stack1)) != null ? lookupProperty(stack1,"metadata") : stack1)) != null ? lookupProperty(stack1,"pageType") : stack1)) != null ? lookupProperty(stack1,"value") : stack1),"==","content",{"name":"ifCond","hash":{},"fn":container.program(2, data, 0),"inverse":container.noop,"data":data,"loc":{"start":{"line":46,"column":2},"end":{"line":67,"column":13}}})) != null ? stack1 : "")
    + ((stack1 = (lookupProperty(helpers,"ifCond")||(depth0 && lookupProperty(depth0,"ifCond"))||alias2).call(alias1,((stack1 = ((stack1 = ((stack1 = ((stack1 = (depth0 != null ? lookupProperty(depth0,"current") : depth0)) != null ? lookupProperty(stack1,"data") : stack1)) != null ? lookupProperty(stack1,"metadata") : stack1)) != null ? lookupProperty(stack1,"pageType") : stack1)) != null ? lookupProperty(stack1,"value") : stack1),"==","site_search",{"name":"ifCond","hash":{},"fn":container.program(2, data, 0),"inverse":container.noop,"data":data,"loc":{"start":{"line":68,"column":2},"end":{"line":89,"column":13}}})) != null ? stack1 : "");
},"2":function(container,depth0,helpers,partials,data) {
    var stack1, alias1=depth0 != null ? depth0 : (container.nullContext || {}), lookupProperty = container.lookupProperty || function(parent, propertyName) {
        if (Object.prototype.hasOwnProperty.call(parent, propertyName)) {
          return parent[propertyName];
        }
        return undefined
    };

  return "    <section class=\"qld__body qld__pre-footer\">\r\n      <div class=\"container-fluid\">\r\n        <p>\r\n          <strong style=\"padding-right: 12px;\">Last updated:</strong>\r\n          &nbsp;\r\n          "
    + container.escapeExpression((lookupProperty(helpers,"formatDate")||(depth0 && lookupProperty(depth0,"formatDate"))||container.hooks.helperMissing).call(alias1,((stack1 = ((stack1 = (depth0 != null ? lookupProperty(depth0,"current") : depth0)) != null ? lookupProperty(stack1,"data") : stack1)) != null ? lookupProperty(stack1,"updated") : stack1),"F Y",{"name":"formatDate","hash":{},"data":data,"loc":{"start":{"line":8,"column":10},"end":{"line":8,"column":51}}}))
    + "\r\n        </p>\r\n"
    + ((stack1 = lookupProperty(helpers,"if").call(alias1,((stack1 = ((stack1 = ((stack1 = (depth0 != null ? lookupProperty(depth0,"site") : depth0)) != null ? lookupProperty(stack1,"metadata") : stack1)) != null ? lookupProperty(stack1,"siteBackToTopShow") : stack1)) != null ? lookupProperty(stack1,"value") : stack1),{"name":"if","hash":{},"fn":container.program(3, data, 0),"inverse":container.noop,"data":data,"loc":{"start":{"line":10,"column":8},"end":{"line":20,"column":15}}})) != null ? stack1 : "")
    + "      </div>\r\n    </section>\r\n";
},"3":function(container,depth0,helpers,partials,data) {
    return "          <div class=\"qld__widgets__back_to_top\">\r\n            <a\r\n              class=\"qld__direction-link qld__direction-link--up\"\r\n              href=\"#content\"\r\n              aria-label=\"Back to top\"\r\n            >\r\n              Back to top\r\n            </a>\r\n          </div>\r\n";
},"5":function(container,depth0,helpers,partials,data) {
    var stack1, lookupProperty = container.lookupProperty || function(parent, propertyName) {
        if (Object.prototype.hasOwnProperty.call(parent, propertyName)) {
          return parent[propertyName];
        }
        return undefined
    };

  return ((stack1 = lookupProperty(helpers,"if").call(depth0 != null ? depth0 : (container.nullContext || {}),((stack1 = ((stack1 = ((stack1 = (depth0 != null ? lookupProperty(depth0,"site") : depth0)) != null ? lookupProperty(stack1,"metadata") : stack1)) != null ? lookupProperty(stack1,"siteBackToTopShow") : stack1)) != null ? lookupProperty(stack1,"value") : stack1),{"name":"if","hash":{},"fn":container.program(6, data, 0),"inverse":container.noop,"data":data,"loc":{"start":{"line":93,"column":2},"end":{"line":107,"column":9}}})) != null ? stack1 : "");
},"6":function(container,depth0,helpers,partials,data) {
    return "    <section class=\"qld__body qld__pre-footer\">\r\n      <div class=\"container-fluid\">\r\n        <div class=\"qld__widgets__back_to_top\">\r\n          <a\r\n            class=\"qld__direction-link qld__direction-link--up\"\r\n            href=\"#content\"\r\n            aria-label=\"Back to top\"\r\n          >\r\n            Back to top\r\n          </a>\r\n        </div>\r\n      </div>\r\n    </section>\r\n";
},"compiler":[8,">= 4.3.0"],"main":function(container,depth0,helpers,partials,data) {
    var stack1, alias1=depth0 != null ? depth0 : (container.nullContext || {}), alias2=container.hooks.helperMissing, lookupProperty = container.lookupProperty || function(parent, propertyName) {
        if (Object.prototype.hasOwnProperty.call(parent, propertyName)) {
          return parent[propertyName];
        }
        return undefined
    };

  return ((stack1 = (lookupProperty(helpers,"ifCond")||(depth0 && lookupProperty(depth0,"ifCond"))||alias2).call(alias1,((stack1 = ((stack1 = ((stack1 = ((stack1 = (depth0 != null ? lookupProperty(depth0,"current") : depth0)) != null ? lookupProperty(stack1,"data") : stack1)) != null ? lookupProperty(stack1,"metadata") : stack1)) != null ? lookupProperty(stack1,"displayLastUpdated") : stack1)) != null ? lookupProperty(stack1,"value") : stack1),"==","yes",{"name":"ifCond","hash":{},"fn":container.program(1, data, 0),"inverse":container.noop,"data":data,"loc":{"start":{"line":1,"column":0},"end":{"line":90,"column":11}}})) != null ? stack1 : "")
    + "\r\n"
    + ((stack1 = (lookupProperty(helpers,"ifCond")||(depth0 && lookupProperty(depth0,"ifCond"))||alias2).call(alias1,((stack1 = ((stack1 = ((stack1 = ((stack1 = (depth0 != null ? lookupProperty(depth0,"current") : depth0)) != null ? lookupProperty(stack1,"data") : stack1)) != null ? lookupProperty(stack1,"metadata") : stack1)) != null ? lookupProperty(stack1,"displayLastUpdated") : stack1)) != null ? lookupProperty(stack1,"value") : stack1),"==","no",{"name":"ifCond","hash":{},"fn":container.program(5, data, 0),"inverse":container.noop,"data":data,"loc":{"start":{"line":92,"column":0},"end":{"line":108,"column":11}}})) != null ? stack1 : "");
},"useData":true}