{"1":function(container,depth0,helpers,partials,data) {
    var stack1, alias1=container.lambda, alias2=container.escapeExpression, alias3=depth0 != null ? depth0 : (container.nullContext || {}), alias4=container.hooks.helperMissing, lookupProperty = container.lookupProperty || function(parent, propertyName) {
        if (Object.prototype.hasOwnProperty.call(parent, propertyName)) {
          return parent[propertyName];
        }
        return undefined
    };

  return "  <form\n    class=\"qld__form--validate\"\n    action=\"/\"\n    data-path=\""
    + alias2(alias1(((stack1 = ((stack1 = ((stack1 = ((stack1 = (data && lookupProperty(data,"root"))) && lookupProperty(stack1,"site"))) && lookupProperty(stack1,"metadata"))) && lookupProperty(stack1,"coreSiteIcons"))) && lookupProperty(stack1,"value")), depth0))
    + "\"\n  >\n    <div class=\"qld__form-group\">\n      <label class=\"qld__label\" for=\"ij-field__"
    + alias2(alias1(((stack1 = ((stack1 = (depth0 != null ? lookupProperty(depth0,"metadata") : depth0)) != null ? lookupProperty(stack1,"input_name") : stack1)) != null ? lookupProperty(stack1,"value") : stack1), depth0))
    + "\">\n        "
    + alias2(alias1(((stack1 = ((stack1 = (depth0 != null ? lookupProperty(depth0,"metadata") : depth0)) != null ? lookupProperty(stack1,"input_name") : stack1)) != null ? lookupProperty(stack1,"value") : stack1), depth0))
    + "\n      </label>\n      <div class=\"qld__form-file-wrapper sq-form-question-answer\">\n        <div class=\"qld__form-file-dropzone\">\n          <div class=\"qld__file-input-icon\">\n            <svg\n              class=\"qld__icon qld__icon--lg\"\n              aria-hidden=\"true\"\n              xmlns=\"http://www.w3.org/2000/svg\"\n            >\n              <use href=\""
    + alias2(alias1(((stack1 = ((stack1 = ((stack1 = ((stack1 = (data && lookupProperty(data,"root"))) && lookupProperty(stack1,"site"))) && lookupProperty(stack1,"metadata"))) && lookupProperty(stack1,"coreSiteIcons"))) && lookupProperty(stack1,"value")), depth0))
    + "#upload\"\n              ></use>\n            </svg>\n            <div\n              class=\"qld__loading_spinner qld__loading_spinner--landscape\"\n              role=\"status\"\n            >\n              <span class=\"qld__loading_spinner-wheel\"></span>\n              <div class=\"qld__loading_spinner-label qld__display-md\">\n                Uploading...\n              </div>\n            </div>\n          </div>\n          <p class=\"qld__file-input-title\">\n            <span>Drag and drop files here or</span>\n            select files to upload\n          </p>\n"
    + ((stack1 = (lookupProperty(helpers,"ifAny")||(depth0 && lookupProperty(depth0,"ifAny"))||alias4).call(alias3,((stack1 = ((stack1 = (depth0 != null ? lookupProperty(depth0,"metadata") : depth0)) != null ? lookupProperty(stack1,"file_types") : stack1)) != null ? lookupProperty(stack1,"value") : stack1),((stack1 = ((stack1 = (depth0 != null ? lookupProperty(depth0,"metadata") : depth0)) != null ? lookupProperty(stack1,"max_size") : stack1)) != null ? lookupProperty(stack1,"value") : stack1),((stack1 = ((stack1 = (depth0 != null ? lookupProperty(depth0,"metadata") : depth0)) != null ? lookupProperty(stack1,"max_selection") : stack1)) != null ? lookupProperty(stack1,"value") : stack1),{"name":"ifAny","hash":{},"fn":container.program(2, data, 0),"inverse":container.noop,"data":data,"loc":{"start":{"line":36,"column":10},"end":{"line":56,"column":20}}})) != null ? stack1 : "")
    + "          <input\n            id=\"ij-field__"
    + alias2(alias1(((stack1 = ((stack1 = (depth0 != null ? lookupProperty(depth0,"metadata") : depth0)) != null ? lookupProperty(stack1,"input_name") : stack1)) != null ? lookupProperty(stack1,"value") : stack1), depth0))
    + "\"\n            class=\"qld__file-input visuallyhidden\"\n            name=\"file|"
    + alias2(alias1(((stack1 = ((stack1 = (depth0 != null ? lookupProperty(depth0,"metadata") : depth0)) != null ? lookupProperty(stack1,"input_name") : stack1)) != null ? lookupProperty(stack1,"value") : stack1), depth0))
    + ((stack1 = (lookupProperty(helpers,"ifCond")||(depth0 && lookupProperty(depth0,"ifCond"))||alias4).call(alias3,((stack1 = ((stack1 = (depth0 != null ? lookupProperty(depth0,"metadata") : depth0)) != null ? lookupProperty(stack1,"max_selection") : stack1)) != null ? lookupProperty(stack1,"value") : stack1),">","1",{"name":"ifCond","hash":{},"fn":container.program(12, data, 0),"inverse":container.noop,"data":data,"loc":{"start":{"line":60,"column":54},"end":{"line":60,"column":115}}})) != null ? stack1 : "")
    + "\"\n            type=\"file\"\n            accept=\""
    + alias2(alias1(((stack1 = ((stack1 = (depth0 != null ? lookupProperty(depth0,"metadata") : depth0)) != null ? lookupProperty(stack1,"file_types") : stack1)) != null ? lookupProperty(stack1,"value") : stack1), depth0))
    + "\"\n            data-file-types=\""
    + alias2(alias1(((stack1 = ((stack1 = (depth0 != null ? lookupProperty(depth0,"metadata") : depth0)) != null ? lookupProperty(stack1,"file_types") : stack1)) != null ? lookupProperty(stack1,"value") : stack1), depth0))
    + "\"\n            data-create-location=\""
    + alias2(alias1(((stack1 = ((stack1 = (depth0 != null ? lookupProperty(depth0,"metadata") : depth0)) != null ? lookupProperty(stack1,"create_location") : stack1)) != null ? lookupProperty(stack1,"value") : stack1), depth0))
    + "\"\n            data-files=\"\"\n            data-max-size=\""
    + alias2(alias1(((stack1 = ((stack1 = (depth0 != null ? lookupProperty(depth0,"metadata") : depth0)) != null ? lookupProperty(stack1,"max_size") : stack1)) != null ? lookupProperty(stack1,"value") : stack1), depth0))
    + "\"\n            data-max-files=\""
    + alias2(alias1(((stack1 = ((stack1 = (depth0 != null ? lookupProperty(depth0,"metadata") : depth0)) != null ? lookupProperty(stack1,"max_selection") : stack1)) != null ? lookupProperty(stack1,"value") : stack1), depth0))
    + "\"\n"
    + ((stack1 = (lookupProperty(helpers,"ifCond")||(depth0 && lookupProperty(depth0,"ifCond"))||alias4).call(alias3,((stack1 = ((stack1 = (depth0 != null ? lookupProperty(depth0,"metadata") : depth0)) != null ? lookupProperty(stack1,"max_selection") : stack1)) != null ? lookupProperty(stack1,"value") : stack1),">","1",{"name":"ifCond","hash":{},"fn":container.program(14, data, 0),"inverse":container.noop,"data":data,"loc":{"start":{"line":70,"column":12},"end":{"line":72,"column":23}}})) != null ? stack1 : "")
    + "            required\n          />\n          <label\n            class=\"qld__file-input-label qld__btn qld__btn--secondary\"\n            for=\"ij-field__"
    + alias2(alias1(((stack1 = ((stack1 = (depth0 != null ? lookupProperty(depth0,"metadata") : depth0)) != null ? lookupProperty(stack1,"input_name") : stack1)) != null ? lookupProperty(stack1,"value") : stack1), depth0))
    + "\"\n          >\n            Select files\n          </label>\n        </div>\n        <div\n          id=\"ij-field__"
    + alias2(alias1(((stack1 = ((stack1 = (depth0 != null ? lookupProperty(depth0,"metadata") : depth0)) != null ? lookupProperty(stack1,"input_name") : stack1)) != null ? lookupProperty(stack1,"value") : stack1), depth0))
    + "-preview\"\n          class=\"qld__form-file-preview\"\n        ></div>\n      </div>\n    </div>\n    <input class=\"qld__btn qld__btn--primary\" type=\"submit\" value=\"Submit\" />\n  </form>\n";
},"2":function(container,depth0,helpers,partials,data) {
    var stack1, alias1=depth0 != null ? depth0 : (container.nullContext || {}), lookupProperty = container.lookupProperty || function(parent, propertyName) {
        if (Object.prototype.hasOwnProperty.call(parent, propertyName)) {
          return parent[propertyName];
        }
        return undefined
    };

  return "            <div class=\"qld__file-input-constraints qld__caption\">\n"
    + ((stack1 = lookupProperty(helpers,"if").call(alias1,((stack1 = ((stack1 = (depth0 != null ? lookupProperty(depth0,"metadata") : depth0)) != null ? lookupProperty(stack1,"file_types") : stack1)) != null ? lookupProperty(stack1,"value") : stack1),{"name":"if","hash":{},"fn":container.program(3, data, 0),"inverse":container.noop,"data":data,"loc":{"start":{"line":38,"column":14},"end":{"line":40,"column":21}}})) != null ? stack1 : "")
    + ((stack1 = lookupProperty(helpers,"if").call(alias1,((stack1 = ((stack1 = (depth0 != null ? lookupProperty(depth0,"metadata") : depth0)) != null ? lookupProperty(stack1,"max_size") : stack1)) != null ? lookupProperty(stack1,"value") : stack1),{"name":"if","hash":{},"fn":container.program(5, data, 0),"inverse":container.noop,"data":data,"loc":{"start":{"line":41,"column":14},"end":{"line":43,"column":21}}})) != null ? stack1 : "")
    + ((stack1 = lookupProperty(helpers,"if").call(alias1,((stack1 = ((stack1 = (depth0 != null ? lookupProperty(depth0,"metadata") : depth0)) != null ? lookupProperty(stack1,"max_selection") : stack1)) != null ? lookupProperty(stack1,"value") : stack1),{"name":"if","hash":{},"fn":container.program(7, data, 0),"inverse":container.noop,"data":data,"loc":{"start":{"line":44,"column":14},"end":{"line":54,"column":21}}})) != null ? stack1 : "")
    + "            </div>\n";
},"3":function(container,depth0,helpers,partials,data) {
    var stack1, lookupProperty = container.lookupProperty || function(parent, propertyName) {
        if (Object.prototype.hasOwnProperty.call(parent, propertyName)) {
          return parent[propertyName];
        }
        return undefined
    };

  return "                <span>You can upload "
    + container.escapeExpression((lookupProperty(helpers,"replace")||(depth0 && lookupProperty(depth0,"replace"))||container.hooks.helperMissing).call(depth0 != null ? depth0 : (container.nullContext || {}),((stack1 = ((stack1 = (depth0 != null ? lookupProperty(depth0,"metadata") : depth0)) != null ? lookupProperty(stack1,"file_types") : stack1)) != null ? lookupProperty(stack1,"value") : stack1),"\\."," ",{"name":"replace","hash":{},"data":data,"loc":{"start":{"line":39,"column":37},"end":{"line":39,"column":83}}}))
    + " files.</span>\n";
},"5":function(container,depth0,helpers,partials,data) {
    var stack1, lookupProperty = container.lookupProperty || function(parent, propertyName) {
        if (Object.prototype.hasOwnProperty.call(parent, propertyName)) {
          return parent[propertyName];
        }
        return undefined
    };

  return "                <span>Files can't be larger than "
    + container.escapeExpression(container.lambda(((stack1 = ((stack1 = (depth0 != null ? lookupProperty(depth0,"metadata") : depth0)) != null ? lookupProperty(stack1,"max_size") : stack1)) != null ? lookupProperty(stack1,"value") : stack1), depth0))
    + " MB.</span>\n";
},"7":function(container,depth0,helpers,partials,data) {
    var stack1, lookupProperty = container.lookupProperty || function(parent, propertyName) {
        if (Object.prototype.hasOwnProperty.call(parent, propertyName)) {
          return parent[propertyName];
        }
        return undefined
    };

  return "                <span>\n                  You can upload up to\n                  "
    + container.escapeExpression(container.lambda(((stack1 = ((stack1 = (depth0 != null ? lookupProperty(depth0,"metadata") : depth0)) != null ? lookupProperty(stack1,"max_selection") : stack1)) != null ? lookupProperty(stack1,"value") : stack1), depth0))
    + "\n"
    + ((stack1 = (lookupProperty(helpers,"ifCond")||(depth0 && lookupProperty(depth0,"ifCond"))||container.hooks.helperMissing).call(depth0 != null ? depth0 : (container.nullContext || {}),((stack1 = ((stack1 = (depth0 != null ? lookupProperty(depth0,"metadata") : depth0)) != null ? lookupProperty(stack1,"max_selection") : stack1)) != null ? lookupProperty(stack1,"value") : stack1),">","1",{"name":"ifCond","hash":{},"fn":container.program(8, data, 0),"inverse":container.program(10, data, 0),"data":data,"loc":{"start":{"line":48,"column":18},"end":{"line":52,"column":29}}})) != null ? stack1 : "")
    + ".\n                </span>\n";
},"8":function(container,depth0,helpers,partials,data) {
    return "                    files\n";
},"10":function(container,depth0,helpers,partials,data) {
    return "                    file\n                  ";
},"12":function(container,depth0,helpers,partials,data) {
    return "[]";
},"14":function(container,depth0,helpers,partials,data) {
    return "              multiple\n";
},"compiler":[8,">= 4.3.0"],"main":function(container,depth0,helpers,partials,data) {
    var stack1, lookupProperty = container.lookupProperty || function(parent, propertyName) {
        if (Object.prototype.hasOwnProperty.call(parent, propertyName)) {
          return parent[propertyName];
        }
        return undefined
    };

  return ((stack1 = lookupProperty(helpers,"with").call(depth0 != null ? depth0 : (container.nullContext || {}),((stack1 = (depth0 != null ? lookupProperty(depth0,"component") : depth0)) != null ? lookupProperty(stack1,"data") : stack1),{"name":"with","hash":{},"fn":container.program(1, data, 0),"inverse":container.noop,"data":data,"loc":{"start":{"line":1,"column":0},"end":{"line":91,"column":9}}})) != null ? stack1 : "");
},"useData":true}