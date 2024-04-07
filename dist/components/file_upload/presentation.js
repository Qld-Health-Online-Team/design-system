{"1":function(container,depth0,helpers,partials,data) {
    var stack1, alias1=container.lambda, alias2=container.escapeExpression, alias3=depth0 != null ? depth0 : (container.nullContext || {}), alias4=container.hooks.helperMissing, lookupProperty = container.lookupProperty || function(parent, propertyName) {
        if (Object.prototype.hasOwnProperty.call(parent, propertyName)) {
          return parent[propertyName];
        }
        return undefined
    };

  return "<form class=\"qld__form--validate\" action=\"/\">\n    <div class=\"qld__form-group\">\n        <label class=\"qld__label\" for=\"ij-field__"
    + alias2(alias1(((stack1 = ((stack1 = (depth0 != null ? lookupProperty(depth0,"metadata") : depth0)) != null ? lookupProperty(stack1,"input_name") : stack1)) != null ? lookupProperty(stack1,"value") : stack1), depth0))
    + "\">"
    + alias2(alias1(((stack1 = ((stack1 = (depth0 != null ? lookupProperty(depth0,"metadata") : depth0)) != null ? lookupProperty(stack1,"input_name") : stack1)) != null ? lookupProperty(stack1,"value") : stack1), depth0))
    + "</label>\n        <div class=\"qld__form-file-wrapper\">\n            <div class=\"qld__form-file-dropzone\">\n                <div class=\"qld__file-input-icon\">\n                    <i class=\"fa-light fa-2x fa-arrow-up-from-bracket\"></i>\n                    <div class=\"qld__loading_spinner qld__loading_spinner--dark qld__loading_spinner--landscape\" role=\"status\">\n                        <span class=\"qld__loading_spinner-wheel\"></span>\n                        <div class=\"qld__loading_spinner-label qld__display-md\">Uploading...</div>\n                    </div>\n                </div>\n                <p class=\"qld__file-input-title\"><span>Drag and drop files here or </span>select files to upload</p>\n"
    + ((stack1 = (lookupProperty(helpers,"ifAny")||(depth0 && lookupProperty(depth0,"ifAny"))||alias4).call(alias3,((stack1 = ((stack1 = (depth0 != null ? lookupProperty(depth0,"metadata") : depth0)) != null ? lookupProperty(stack1,"file_types") : stack1)) != null ? lookupProperty(stack1,"value") : stack1),((stack1 = ((stack1 = (depth0 != null ? lookupProperty(depth0,"metadata") : depth0)) != null ? lookupProperty(stack1,"max_size") : stack1)) != null ? lookupProperty(stack1,"value") : stack1),((stack1 = ((stack1 = (depth0 != null ? lookupProperty(depth0,"metadata") : depth0)) != null ? lookupProperty(stack1,"max_selection") : stack1)) != null ? lookupProperty(stack1,"value") : stack1),{"name":"ifAny","hash":{},"fn":container.program(2, data, 0),"inverse":container.noop,"data":data,"loc":{"start":{"line":15,"column":16},"end":{"line":23,"column":26}}})) != null ? stack1 : "")
    + "                <input id=\"ij-field__"
    + alias2(alias1(((stack1 = ((stack1 = (depth0 != null ? lookupProperty(depth0,"metadata") : depth0)) != null ? lookupProperty(stack1,"input_name") : stack1)) != null ? lookupProperty(stack1,"value") : stack1), depth0))
    + "\"\n                    class=\"qld__file-input visuallyhidden\"\n                    name=\"file|"
    + alias2(alias1(((stack1 = ((stack1 = (depth0 != null ? lookupProperty(depth0,"metadata") : depth0)) != null ? lookupProperty(stack1,"input_name") : stack1)) != null ? lookupProperty(stack1,"value") : stack1), depth0))
    + ((stack1 = (lookupProperty(helpers,"ifCond")||(depth0 && lookupProperty(depth0,"ifCond"))||alias4).call(alias3,((stack1 = ((stack1 = (depth0 != null ? lookupProperty(depth0,"metadata") : depth0)) != null ? lookupProperty(stack1,"max_selection") : stack1)) != null ? lookupProperty(stack1,"value") : stack1),">","1",{"name":"ifCond","hash":{},"fn":container.program(12, data, 0),"inverse":container.noop,"data":data,"loc":{"start":{"line":26,"column":60},"end":{"line":26,"column":121}}})) != null ? stack1 : "")
    + "\" type=\"file\"\n                    accept=\""
    + alias2(alias1(((stack1 = ((stack1 = (depth0 != null ? lookupProperty(depth0,"metadata") : depth0)) != null ? lookupProperty(stack1,"file_types") : stack1)) != null ? lookupProperty(stack1,"value") : stack1), depth0))
    + "\"\n                    data-file-types=\""
    + alias2(alias1(((stack1 = ((stack1 = (depth0 != null ? lookupProperty(depth0,"metadata") : depth0)) != null ? lookupProperty(stack1,"file_types") : stack1)) != null ? lookupProperty(stack1,"value") : stack1), depth0))
    + "\"\n                    data-create-location=\""
    + alias2(alias1(((stack1 = ((stack1 = (depth0 != null ? lookupProperty(depth0,"metadata") : depth0)) != null ? lookupProperty(stack1,"create_location") : stack1)) != null ? lookupProperty(stack1,"value") : stack1), depth0))
    + "\"\n                    data-files=''\n                    data-max-size=\""
    + alias2(alias1(((stack1 = ((stack1 = (depth0 != null ? lookupProperty(depth0,"metadata") : depth0)) != null ? lookupProperty(stack1,"max_size") : stack1)) != null ? lookupProperty(stack1,"value") : stack1), depth0))
    + "\"\n                    data-max-files=\""
    + alias2(alias1(((stack1 = ((stack1 = (depth0 != null ? lookupProperty(depth0,"metadata") : depth0)) != null ? lookupProperty(stack1,"max_selection") : stack1)) != null ? lookupProperty(stack1,"value") : stack1), depth0))
    + "\"\n                    data-js-api=\""
    + alias2(alias1(((stack1 = ((stack1 = (depth0 != null ? lookupProperty(depth0,"metadata") : depth0)) != null ? lookupProperty(stack1,"js_api") : stack1)) != null ? lookupProperty(stack1,"value") : stack1), depth0))
    + "\"\n                    "
    + ((stack1 = (lookupProperty(helpers,"ifCond")||(depth0 && lookupProperty(depth0,"ifCond"))||alias4).call(alias3,((stack1 = ((stack1 = (depth0 != null ? lookupProperty(depth0,"metadata") : depth0)) != null ? lookupProperty(stack1,"max_selection") : stack1)) != null ? lookupProperty(stack1,"value") : stack1),">","1",{"name":"ifCond","hash":{},"fn":container.program(14, data, 0),"inverse":container.noop,"data":data,"loc":{"start":{"line":34,"column":20},"end":{"line":34,"column":87}}})) != null ? stack1 : "")
    + "\n                    required\n                >\n                <label class=\"qld__file-input-label qld__btn qld__btn--secondary\" for=\"ij-field__"
    + alias2(alias1(((stack1 = ((stack1 = (depth0 != null ? lookupProperty(depth0,"metadata") : depth0)) != null ? lookupProperty(stack1,"input_name") : stack1)) != null ? lookupProperty(stack1,"value") : stack1), depth0))
    + "\">Select files</label>\n            </div>\n            <div id=\"ij-field__"
    + alias2(alias1(((stack1 = ((stack1 = (depth0 != null ? lookupProperty(depth0,"metadata") : depth0)) != null ? lookupProperty(stack1,"input_name") : stack1)) != null ? lookupProperty(stack1,"value") : stack1), depth0))
    + "-preview\" class=\"qld__form-file-preview\"></div>\n        </div>\n    </div>\n    <input type=\"submit\" value=\"submit\">\n</form>\n";
},"2":function(container,depth0,helpers,partials,data) {
    var stack1, alias1=depth0 != null ? depth0 : (container.nullContext || {}), lookupProperty = container.lookupProperty || function(parent, propertyName) {
        if (Object.prototype.hasOwnProperty.call(parent, propertyName)) {
          return parent[propertyName];
        }
        return undefined
    };

  return "                <div class=\"qld__file-input-constraints qld__caption\">\n                    "
    + ((stack1 = lookupProperty(helpers,"if").call(alias1,((stack1 = ((stack1 = (depth0 != null ? lookupProperty(depth0,"metadata") : depth0)) != null ? lookupProperty(stack1,"file_types") : stack1)) != null ? lookupProperty(stack1,"value") : stack1),{"name":"if","hash":{},"fn":container.program(3, data, 0),"inverse":container.noop,"data":data,"loc":{"start":{"line":17,"column":20},"end":{"line":17,"column":141}}})) != null ? stack1 : "")
    + "\n                    "
    + ((stack1 = lookupProperty(helpers,"if").call(alias1,((stack1 = ((stack1 = (depth0 != null ? lookupProperty(depth0,"metadata") : depth0)) != null ? lookupProperty(stack1,"max_size") : stack1)) != null ? lookupProperty(stack1,"value") : stack1),{"name":"if","hash":{},"fn":container.program(5, data, 0),"inverse":container.noop,"data":data,"loc":{"start":{"line":18,"column":20},"end":{"line":18,"column":129}}})) != null ? stack1 : "")
    + "\n"
    + ((stack1 = lookupProperty(helpers,"if").call(alias1,((stack1 = ((stack1 = (depth0 != null ? lookupProperty(depth0,"metadata") : depth0)) != null ? lookupProperty(stack1,"max_selection") : stack1)) != null ? lookupProperty(stack1,"value") : stack1),{"name":"if","hash":{},"fn":container.program(7, data, 0),"inverse":container.noop,"data":data,"loc":{"start":{"line":19,"column":20},"end":{"line":21,"column":27}}})) != null ? stack1 : "")
    + "                </div>\n";
},"3":function(container,depth0,helpers,partials,data) {
    var stack1, lookupProperty = container.lookupProperty || function(parent, propertyName) {
        if (Object.prototype.hasOwnProperty.call(parent, propertyName)) {
          return parent[propertyName];
        }
        return undefined
    };

  return "<span>You can upload "
    + container.escapeExpression((lookupProperty(helpers,"replace")||(depth0 && lookupProperty(depth0,"replace"))||container.hooks.helperMissing).call(depth0 != null ? depth0 : (container.nullContext || {}),((stack1 = ((stack1 = (depth0 != null ? lookupProperty(depth0,"metadata") : depth0)) != null ? lookupProperty(stack1,"file_types") : stack1)) != null ? lookupProperty(stack1,"value") : stack1),"\\."," ",{"name":"replace","hash":{},"data":data,"loc":{"start":{"line":17,"column":74},"end":{"line":17,"column":120}}}))
    + " files.</span>";
},"5":function(container,depth0,helpers,partials,data) {
    var stack1, lookupProperty = container.lookupProperty || function(parent, propertyName) {
        if (Object.prototype.hasOwnProperty.call(parent, propertyName)) {
          return parent[propertyName];
        }
        return undefined
    };

  return "<span>Files can't be larger than "
    + container.escapeExpression(container.lambda(((stack1 = ((stack1 = (depth0 != null ? lookupProperty(depth0,"metadata") : depth0)) != null ? lookupProperty(stack1,"max_size") : stack1)) != null ? lookupProperty(stack1,"value") : stack1), depth0))
    + " MB.</span>";
},"7":function(container,depth0,helpers,partials,data) {
    var stack1, lookupProperty = container.lookupProperty || function(parent, propertyName) {
        if (Object.prototype.hasOwnProperty.call(parent, propertyName)) {
          return parent[propertyName];
        }
        return undefined
    };

  return "                        <span>You can upload up to "
    + container.escapeExpression(container.lambda(((stack1 = ((stack1 = (depth0 != null ? lookupProperty(depth0,"metadata") : depth0)) != null ? lookupProperty(stack1,"max_selection") : stack1)) != null ? lookupProperty(stack1,"value") : stack1), depth0))
    + " "
    + ((stack1 = (lookupProperty(helpers,"ifCond")||(depth0 && lookupProperty(depth0,"ifCond"))||container.hooks.helperMissing).call(depth0 != null ? depth0 : (container.nullContext || {}),((stack1 = ((stack1 = (depth0 != null ? lookupProperty(depth0,"metadata") : depth0)) != null ? lookupProperty(stack1,"max_selection") : stack1)) != null ? lookupProperty(stack1,"value") : stack1),">","1",{"name":"ifCond","hash":{},"fn":container.program(8, data, 0),"inverse":container.program(10, data, 0),"data":data,"loc":{"start":{"line":20,"column":84},"end":{"line":20,"column":160}}})) != null ? stack1 : "")
    + ".</span>\n";
},"8":function(container,depth0,helpers,partials,data) {
    return "files";
},"10":function(container,depth0,helpers,partials,data) {
    return "file";
},"12":function(container,depth0,helpers,partials,data) {
    return "[]";
},"14":function(container,depth0,helpers,partials,data) {
    return "multiple";
},"compiler":[8,">= 4.3.0"],"main":function(container,depth0,helpers,partials,data) {
    var stack1, lookupProperty = container.lookupProperty || function(parent, propertyName) {
        if (Object.prototype.hasOwnProperty.call(parent, propertyName)) {
          return parent[propertyName];
        }
        return undefined
    };

  return ((stack1 = lookupProperty(helpers,"with").call(depth0 != null ? depth0 : (container.nullContext || {}),((stack1 = (depth0 != null ? lookupProperty(depth0,"component") : depth0)) != null ? lookupProperty(stack1,"data") : stack1),{"name":"with","hash":{},"fn":container.program(1, data, 0),"inverse":container.noop,"data":data,"loc":{"start":{"line":1,"column":0},"end":{"line":45,"column":9}}})) != null ? stack1 : "");
},"useData":true}