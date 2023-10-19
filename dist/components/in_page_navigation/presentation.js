{"compiler":[8,">= 4.3.0"],"main":function(container,depth0,helpers,partials,data) {
    var stack1, lookupProperty = container.lookupProperty || function(parent, propertyName) {
        if (Object.prototype.hasOwnProperty.call(parent, propertyName)) {
          return parent[propertyName];
        }
        return undefined
    };

  return "<section class=\"qld__body\">\n    <div class=\"container-fluid\">\n\n    <nav class=\"qld__inpage-nav-links\" aria-label=\"In page navigation\" data-headingType=\""
    + container.escapeExpression(container.lambda(((stack1 = ((stack1 = ((stack1 = ((stack1 = (depth0 != null ? lookupProperty(depth0,"component") : depth0)) != null ? lookupProperty(stack1,"data") : stack1)) != null ? lookupProperty(stack1,"metadata") : stack1)) != null ? lookupProperty(stack1,"headingType") : stack1)) != null ? lookupProperty(stack1,"value") : stack1), depth0))
    + "\">\n        <h2 class=\"qld__inpage-nav-links__heading\">\n            "
    + ((stack1 = (lookupProperty(helpers,"renderSpecialChar")||(depth0 && lookupProperty(depth0,"renderSpecialChar"))||container.hooks.helperMissing).call(depth0 != null ? depth0 : (container.nullContext || {}),((stack1 = ((stack1 = ((stack1 = ((stack1 = (depth0 != null ? lookupProperty(depth0,"component") : depth0)) != null ? lookupProperty(stack1,"data") : stack1)) != null ? lookupProperty(stack1,"metadata") : stack1)) != null ? lookupProperty(stack1,"heading") : stack1)) != null ? lookupProperty(stack1,"value") : stack1),{"name":"renderSpecialChar","hash":{},"data":data,"loc":{"start":{"line":8,"column":12},"end":{"line":8,"column":73}}})) != null ? stack1 : "")
    + "\n        </h2>\n        <ul class=\"qld__link-list\"></ul>\n    </nav>\n\n</div>\n</section>\n\n";
},"useData":true}