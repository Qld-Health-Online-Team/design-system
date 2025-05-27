{"1":function(container,depth0,helpers,partials,data) {
    var stack1, alias1=depth0 != null ? depth0 : (container.nullContext || {}), alias2=container.hooks.helperMissing, lookupProperty = container.lookupProperty || function(parent, propertyName) {
        if (Object.prototype.hasOwnProperty.call(parent, propertyName)) {
          return parent[propertyName];
        }
        return undefined
    };

  return ((stack1 = (lookupProperty(helpers,"ifCond")||(depth0 && lookupProperty(depth0,"ifCond"))||alias2).call(alias1,((stack1 = ((stack1 = ((stack1 = ((stack1 = (depth0 != null ? lookupProperty(depth0,"current") : depth0)) != null ? lookupProperty(stack1,"data") : stack1)) != null ? lookupProperty(stack1,"metadata") : stack1)) != null ? lookupProperty(stack1,"pageType") : stack1)) != null ? lookupProperty(stack1,"value") : stack1),"==","landing",{"name":"ifCond","hash":{},"fn":container.program(2, data, 0),"inverse":container.noop,"data":data,"loc":{"start":{"line":2,"column":4},"end":{"line":20,"column":15}}})) != null ? stack1 : "")
    + ((stack1 = (lookupProperty(helpers,"ifCond")||(depth0 && lookupProperty(depth0,"ifCond"))||alias2).call(alias1,((stack1 = ((stack1 = ((stack1 = ((stack1 = (depth0 != null ? lookupProperty(depth0,"current") : depth0)) != null ? lookupProperty(stack1,"data") : stack1)) != null ? lookupProperty(stack1,"metadata") : stack1)) != null ? lookupProperty(stack1,"pageType") : stack1)) != null ? lookupProperty(stack1,"value") : stack1),"==","news_detail",{"name":"ifCond","hash":{},"fn":container.program(2, data, 0),"inverse":container.noop,"data":data,"loc":{"start":{"line":21,"column":4},"end":{"line":39,"column":15}}})) != null ? stack1 : "")
    + ((stack1 = (lookupProperty(helpers,"ifCond")||(depth0 && lookupProperty(depth0,"ifCond"))||alias2).call(alias1,((stack1 = ((stack1 = ((stack1 = ((stack1 = (depth0 != null ? lookupProperty(depth0,"current") : depth0)) != null ? lookupProperty(stack1,"data") : stack1)) != null ? lookupProperty(stack1,"metadata") : stack1)) != null ? lookupProperty(stack1,"pageType") : stack1)) != null ? lookupProperty(stack1,"value") : stack1),"==","content",{"name":"ifCond","hash":{},"fn":container.program(2, data, 0),"inverse":container.noop,"data":data,"loc":{"start":{"line":40,"column":4},"end":{"line":58,"column":15}}})) != null ? stack1 : "")
    + ((stack1 = (lookupProperty(helpers,"ifCond")||(depth0 && lookupProperty(depth0,"ifCond"))||alias2).call(alias1,((stack1 = ((stack1 = ((stack1 = ((stack1 = (depth0 != null ? lookupProperty(depth0,"current") : depth0)) != null ? lookupProperty(stack1,"data") : stack1)) != null ? lookupProperty(stack1,"metadata") : stack1)) != null ? lookupProperty(stack1,"pageType") : stack1)) != null ? lookupProperty(stack1,"value") : stack1),"==","site_search",{"name":"ifCond","hash":{},"fn":container.program(2, data, 0),"inverse":container.noop,"data":data,"loc":{"start":{"line":59,"column":4},"end":{"line":77,"column":15}}})) != null ? stack1 : "");
},"2":function(container,depth0,helpers,partials,data) {
    var stack1, alias1=depth0 != null ? depth0 : (container.nullContext || {}), lookupProperty = container.lookupProperty || function(parent, propertyName) {
        if (Object.prototype.hasOwnProperty.call(parent, propertyName)) {
          return parent[propertyName];
        }
        return undefined
    };

  return "        <section class=\"qld__body qld__pre-footer\">\n            <div class=\"container-fluid\">\n                <p><strong style=\"padding-right: 12px;\">Last updated:</strong>&nbsp;"
    + container.escapeExpression((lookupProperty(helpers,"formatDate")||(depth0 && lookupProperty(depth0,"formatDate"))||container.hooks.helperMissing).call(alias1,((stack1 = ((stack1 = (depth0 != null ? lookupProperty(depth0,"current") : depth0)) != null ? lookupProperty(stack1,"data") : stack1)) != null ? lookupProperty(stack1,"updated") : stack1),"F Y",{"name":"formatDate","hash":{},"data":data,"loc":{"start":{"line":5,"column":84},"end":{"line":8,"column":22}}}))
    + "</p>\n"
    + ((stack1 = lookupProperty(helpers,"if").call(alias1,((stack1 = ((stack1 = ((stack1 = (depth0 != null ? lookupProperty(depth0,"site") : depth0)) != null ? lookupProperty(stack1,"metadata") : stack1)) != null ? lookupProperty(stack1,"siteBackToTopShow") : stack1)) != null ? lookupProperty(stack1,"value") : stack1),{"name":"if","hash":{},"fn":container.program(3, data, 0),"inverse":container.noop,"data":data,"loc":{"start":{"line":9,"column":16},"end":{"line":17,"column":23}}})) != null ? stack1 : "")
    + "            </div>\n        </section>\n";
},"3":function(container,depth0,helpers,partials,data) {
    return "                    <div class=\"qld__widgets__back_to_top\">\n                        <a\n                            href=\"#content\"\n                            class=\"qld__direction-link qld__direction-link--up\"\n                            aria-label=\"Back to top\"\n                        >Back to top</a>\n                    </div>\n";
},"5":function(container,depth0,helpers,partials,data) {
    var stack1, lookupProperty = container.lookupProperty || function(parent, propertyName) {
        if (Object.prototype.hasOwnProperty.call(parent, propertyName)) {
          return parent[propertyName];
        }
        return undefined
    };

  return ((stack1 = lookupProperty(helpers,"if").call(depth0 != null ? depth0 : (container.nullContext || {}),((stack1 = ((stack1 = ((stack1 = (depth0 != null ? lookupProperty(depth0,"site") : depth0)) != null ? lookupProperty(stack1,"metadata") : stack1)) != null ? lookupProperty(stack1,"siteBackToTopShow") : stack1)) != null ? lookupProperty(stack1,"value") : stack1),{"name":"if","hash":{},"fn":container.program(6, data, 0),"inverse":container.noop,"data":data,"loc":{"start":{"line":81,"column":4},"end":{"line":89,"column":11}}})) != null ? stack1 : "");
},"6":function(container,depth0,helpers,partials,data) {
    return "        <div class=\"qld__widgets__back_to_top\">\n            <a\n                href=\"#content\"\n                class=\"qld__direction-link qld__direction-link--up\"\n                aria-label=\"Back to top\"\n            >Back to top</a>\n        </div>\n";
},"compiler":[8,">= 4.3.0"],"main":function(container,depth0,helpers,partials,data) {
    var stack1, alias1=depth0 != null ? depth0 : (container.nullContext || {}), alias2=container.hooks.helperMissing, lookupProperty = container.lookupProperty || function(parent, propertyName) {
        if (Object.prototype.hasOwnProperty.call(parent, propertyName)) {
          return parent[propertyName];
        }
        return undefined
    };

  return ((stack1 = (lookupProperty(helpers,"ifCond")||(depth0 && lookupProperty(depth0,"ifCond"))||alias2).call(alias1,((stack1 = ((stack1 = ((stack1 = ((stack1 = (depth0 != null ? lookupProperty(depth0,"current") : depth0)) != null ? lookupProperty(stack1,"data") : stack1)) != null ? lookupProperty(stack1,"metadata") : stack1)) != null ? lookupProperty(stack1,"displayLastUpdated") : stack1)) != null ? lookupProperty(stack1,"value") : stack1),"==","yes",{"name":"ifCond","hash":{},"fn":container.program(1, data, 0),"inverse":container.noop,"data":data,"loc":{"start":{"line":1,"column":0},"end":{"line":78,"column":11}}})) != null ? stack1 : "")
    + "\n"
    + ((stack1 = (lookupProperty(helpers,"ifCond")||(depth0 && lookupProperty(depth0,"ifCond"))||alias2).call(alias1,((stack1 = ((stack1 = ((stack1 = ((stack1 = (depth0 != null ? lookupProperty(depth0,"current") : depth0)) != null ? lookupProperty(stack1,"data") : stack1)) != null ? lookupProperty(stack1,"metadata") : stack1)) != null ? lookupProperty(stack1,"displayLastUpdated") : stack1)) != null ? lookupProperty(stack1,"value") : stack1),"==","no",{"name":"ifCond","hash":{},"fn":container.program(5, data, 0),"inverse":container.noop,"data":data,"loc":{"start":{"line":80,"column":0},"end":{"line":90,"column":11}}})) != null ? stack1 : "");
},"useData":true}