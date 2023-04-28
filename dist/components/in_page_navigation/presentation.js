{"compiler":[8,">= 4.3.0"],"main":function(container,depth0,helpers,partials,data) {
    var stack1, alias1=container.lambda, alias2=container.escapeExpression, lookupProperty = container.lookupProperty || function(parent, propertyName) {
        if (Object.prototype.hasOwnProperty.call(parent, propertyName)) {
          return parent[propertyName];
        }
        return undefined
    };

  return "<section class=\"qld__body\">\r\n    <div class=\"container-fluid\">\r\n\r\n    <nav class=\"qld__inpage-nav-links\" aria-label=\"In page navigation\" data-headingType=\""
    + alias2(alias1(((stack1 = ((stack1 = ((stack1 = ((stack1 = (depth0 != null ? lookupProperty(depth0,"component") : depth0)) != null ? lookupProperty(stack1,"data") : stack1)) != null ? lookupProperty(stack1,"metadata") : stack1)) != null ? lookupProperty(stack1,"headingType") : stack1)) != null ? lookupProperty(stack1,"value") : stack1), depth0))
    + "\">\r\n        <h2 class=\"qld__inpage-nav-links__heading\">\r\n            "
    + alias2(alias1(((stack1 = ((stack1 = ((stack1 = ((stack1 = (depth0 != null ? lookupProperty(depth0,"component") : depth0)) != null ? lookupProperty(stack1,"data") : stack1)) != null ? lookupProperty(stack1,"metadata") : stack1)) != null ? lookupProperty(stack1,"heading") : stack1)) != null ? lookupProperty(stack1,"value") : stack1), depth0))
    + "\r\n        </h2>\r\n        <ul class=\"qld__link-list\"></ul>\r\n    </nav>\r\n\r\n</div>\r\n</section>\r\n\r\n";
},"useData":true}