{"1":function(container,depth0,helpers,partials,data) {
    var stack1, helper, alias1=container.lambda, alias2=container.escapeExpression, lookupProperty = container.lookupProperty || function(parent, propertyName) {
        if (Object.prototype.hasOwnProperty.call(parent, propertyName)) {
          return parent[propertyName];
        }
        return undefined
    };

  return "<section class=\"qld__body "
    + alias2(alias1(((stack1 = ((stack1 = (depth0 != null ? lookupProperty(depth0,"metadata") : depth0)) != null ? lookupProperty(stack1,"body_background") : stack1)) != null ? lookupProperty(stack1,"value") : stack1), depth0))
    + "\">\r\n    <div class=\"container-fluid\">\r\n        <div class=\"qld__data-table "
    + alias2(alias1(((stack1 = ((stack1 = (depth0 != null ? lookupProperty(depth0,"metadata") : depth0)) != null ? lookupProperty(stack1,"table_data_source") : stack1)) != null ? lookupProperty(stack1,"value") : stack1), depth0))
    + " "
    + alias2(alias1(((stack1 = ((stack1 = (depth0 != null ? lookupProperty(depth0,"metadata") : depth0)) != null ? lookupProperty(stack1,"table_styling") : stack1)) != null ? lookupProperty(stack1,"value") : stack1), depth0))
    + "\" id=\"qld-data-table-"
    + alias2(((helper = (helper = lookupProperty(helpers,"assetid") || (depth0 != null ? lookupProperty(depth0,"assetid") : depth0)) != null ? helper : container.hooks.helperMissing),(typeof helper === "function" ? helper.call(depth0 != null ? depth0 : (container.nullContext || {}),{"name":"assetid","hash":{},"data":data,"loc":{"start":{"line":5,"column":126},"end":{"line":5,"column":137}}}) : helper)))
    + "\">\r\n            <div class=\"qld__data-table__header\">\r\n                <span class=\"qld__display-md\">"
    + alias2(alias1(((stack1 = ((stack1 = (depth0 != null ? lookupProperty(depth0,"metadata") : depth0)) != null ? lookupProperty(stack1,"table_title") : stack1)) != null ? lookupProperty(stack1,"value") : stack1), depth0))
    + "</span>\r\n                <span class=\"qld__caption\">\r\n                    "
    + alias2(alias1(((stack1 = ((stack1 = (depth0 != null ? lookupProperty(depth0,"metadata") : depth0)) != null ? lookupProperty(stack1,"table_caption") : stack1)) != null ? lookupProperty(stack1,"value") : stack1), depth0))
    + "\r\n                </span>\r\n            </div>\r\n            <div id=\"qld_data-table_html\" class=\"qld__data-table-content\" aria-describedby=\"\" style=\"display: none\">\r\n                "
    + ((stack1 = alias1(((stack1 = ((stack1 = (depth0 != null ? lookupProperty(depth0,"metadata") : depth0)) != null ? lookupProperty(stack1,"table_in_html") : stack1)) != null ? lookupProperty(stack1,"value") : stack1), depth0)) != null ? stack1 : "")
    + "\r\n            </div>\r\n            <table id=\"qld_data-table_csv\" class=\"qld__data-table-content\" aria-describedby=\"\" data-csv-source=\"./?a="
    + alias2(alias1(((stack1 = ((stack1 = (depth0 != null ? lookupProperty(depth0,"metadata") : depth0)) != null ? lookupProperty(stack1,"table_data_csv") : stack1)) != null ? lookupProperty(stack1,"value") : stack1), depth0))
    + "\" style=\"display: none\">\r\n            </table>\r\n        </div>\r\n    </div>\r\n</section>\r\n";
},"compiler":[8,">= 4.3.0"],"main":function(container,depth0,helpers,partials,data) {
    var stack1, lookupProperty = container.lookupProperty || function(parent, propertyName) {
        if (Object.prototype.hasOwnProperty.call(parent, propertyName)) {
          return parent[propertyName];
        }
        return undefined
    };

  return "\r\n"
    + ((stack1 = lookupProperty(helpers,"with").call(depth0 != null ? depth0 : (container.nullContext || {}),((stack1 = (depth0 != null ? lookupProperty(depth0,"component") : depth0)) != null ? lookupProperty(stack1,"data") : stack1),{"name":"with","hash":{},"fn":container.program(1, data, 0),"inverse":container.noop,"data":data,"loc":{"start":{"line":2,"column":0},"end":{"line":20,"column":9}}})) != null ? stack1 : "");
},"useData":true}