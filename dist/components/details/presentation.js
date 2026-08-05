{"1":function(container,depth0,helpers,partials,data) {
    var stack1, alias1=container.lambda, alias2=container.escapeExpression, alias3=depth0 != null ? depth0 : (container.nullContext || {}), lookupProperty = container.lookupProperty || function(parent, propertyName) {
        if (Object.prototype.hasOwnProperty.call(parent, propertyName)) {
          return parent[propertyName];
        }
        return undefined
    };

  return "  <section class=\"qld__body "
    + alias2(alias1(((stack1 = ((stack1 = (depth0 != null ? lookupProperty(depth0,"metadata") : depth0)) != null ? lookupProperty(stack1,"body_background") : stack1)) != null ? lookupProperty(stack1,"value") : stack1), depth0))
    + "\">\n    <div class=\"container-fluid\">\n      <details\n        id=\""
    + ((stack1 = lookupProperty(helpers,"if").call(alias3,((stack1 = ((stack1 = (depth0 != null ? lookupProperty(depth0,"metadata") : depth0)) != null ? lookupProperty(stack1,"id_field") : stack1)) != null ? lookupProperty(stack1,"value") : stack1),{"name":"if","hash":{},"fn":container.program(2, data, 0),"inverse":container.program(4, data, 0),"data":data,"loc":{"start":{"line":5,"column":12},"end":{"line":5,"column":108}}})) != null ? stack1 : "")
    + "\"\n        class=\"qld__details "
    + alias2(alias1(((stack1 = ((stack1 = (depth0 != null ? lookupProperty(depth0,"metadata") : depth0)) != null ? lookupProperty(stack1,"size") : stack1)) != null ? lookupProperty(stack1,"value") : stack1), depth0))
    + "\"\n"
    + ((stack1 = (lookupProperty(helpers,"ifCond")||(depth0 && lookupProperty(depth0,"ifCond"))||container.hooks.helperMissing).call(alias3,((stack1 = ((stack1 = (depth0 != null ? lookupProperty(depth0,"metadata") : depth0)) != null ? lookupProperty(stack1,"open") : stack1)) != null ? lookupProperty(stack1,"value") : stack1),"==","yes",{"name":"ifCond","hash":{},"fn":container.program(6, data, 0),"inverse":container.noop,"data":data,"loc":{"start":{"line":7,"column":8},"end":{"line":9,"column":19}}})) != null ? stack1 : "")
    + "      >\n        <summary class=\"qld__details__summary\">\n          <span class=\"qld__details__summary-text\">\n            <svg\n              class=\"qld__icon qld__details__icon\"\n              aria-hidden=\"true\"\n              xmlns=\"http://www.w3.org/2000/svg\"\n            >\n              <use\n                href=\""
    + alias2(alias1(((stack1 = ((stack1 = ((stack1 = ((stack1 = (data && lookupProperty(data,"root"))) && lookupProperty(stack1,"site"))) && lookupProperty(stack1,"metadata"))) && lookupProperty(stack1,"coreSiteIcons"))) && lookupProperty(stack1,"value")), depth0))
    + "#chevron-right\"\n              ></use>\n            </svg>\n            "
    + alias2(alias1(((stack1 = ((stack1 = (depth0 != null ? lookupProperty(depth0,"metadata") : depth0)) != null ? lookupProperty(stack1,"summary") : stack1)) != null ? lookupProperty(stack1,"value") : stack1), depth0))
    + "\n          </span>\n        </summary>\n        <div class=\"qld__details__content\">"
    + ((stack1 = alias1(((stack1 = ((stack1 = (depth0 != null ? lookupProperty(depth0,"metadata") : depth0)) != null ? lookupProperty(stack1,"content") : stack1)) != null ? lookupProperty(stack1,"value") : stack1), depth0)) != null ? stack1 : "")
    + "</div>\n      </details>\n    </div>\n  </section>\n";
},"2":function(container,depth0,helpers,partials,data) {
    var stack1, lookupProperty = container.lookupProperty || function(parent, propertyName) {
        if (Object.prototype.hasOwnProperty.call(parent, propertyName)) {
          return parent[propertyName];
        }
        return undefined
    };

  return container.escapeExpression(container.lambda(((stack1 = ((stack1 = (depth0 != null ? lookupProperty(depth0,"metadata") : depth0)) != null ? lookupProperty(stack1,"id_field") : stack1)) != null ? lookupProperty(stack1,"value") : stack1), depth0));
},"4":function(container,depth0,helpers,partials,data) {
    var helper, lookupProperty = container.lookupProperty || function(parent, propertyName) {
        if (Object.prototype.hasOwnProperty.call(parent, propertyName)) {
          return parent[propertyName];
        }
        return undefined
    };

  return "details-"
    + container.escapeExpression(((helper = (helper = lookupProperty(helpers,"assetid") || (depth0 != null ? lookupProperty(depth0,"assetid") : depth0)) != null ? helper : container.hooks.helperMissing),(typeof helper === "function" ? helper.call(depth0 != null ? depth0 : (container.nullContext || {}),{"name":"assetid","hash":{},"data":data,"loc":{"start":{"line":5,"column":88},"end":{"line":5,"column":101}}}) : helper)));
},"6":function(container,depth0,helpers,partials,data) {
    return "          open\n";
},"compiler":[8,">= 4.3.0"],"main":function(container,depth0,helpers,partials,data) {
    var stack1, lookupProperty = container.lookupProperty || function(parent, propertyName) {
        if (Object.prototype.hasOwnProperty.call(parent, propertyName)) {
          return parent[propertyName];
        }
        return undefined
    };

  return ((stack1 = lookupProperty(helpers,"with").call(depth0 != null ? depth0 : (container.nullContext || {}),((stack1 = (depth0 != null ? lookupProperty(depth0,"component") : depth0)) != null ? lookupProperty(stack1,"data") : stack1),{"name":"with","hash":{},"fn":container.program(1, data, 0),"inverse":container.noop,"data":data,"loc":{"start":{"line":1,"column":0},"end":{"line":29,"column":9}}})) != null ? stack1 : "");
},"useData":true}