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

  return ((stack1 = lookupProperty(helpers,"with").call(depth0 != null ? depth0 : (container.nullContext || {}),((stack1 = (depth0 != null ? lookupProperty(depth0,"component") : depth0)) != null ? lookupProperty(stack1,"data") : stack1),{"name":"with","hash":{},"fn":container.program(1, data, 0),"inverse":container.noop,"data":data,"loc":{"start":{"line":1,"column":0},"end":{"line":45,"column":9}}})) != null ? stack1 : "")
    + "\n<h2>File List - Examples</h2>\n<div class=\"qld__form-file-wrapper\">\n    <div id=\"ij-field__test-preview\" class=\"qld__form-file-preview\">\n        <div class=\"qld__form-file qld__form-file--success\">\n            <div class=\"qld__form-file-info-wrapper\">\n                <div class=\"qld__form-file-loader\">\n                    <!-- Loader or icon here -->\n                    <i class=\"fa-light fa-2x fa-file\"></i>\n                </div>\n                <div class=\"qld__form-file-info\">\n                    <p class=\"qld__display-xs\">Long_File_Name_Long_File_Name_Long_File_Name_Long_File_Name_Long_File_Name_Long_File_Name_.png</p>\n                    <span class=\"qld__form-file-info-status\">\n                        <svg width=\"20\" height=\"20\" viewBox=\"0 0 20 20\" fill=\"none\" xmlns=\"http://www.w3.org/2000/svg\"><path fill-rule=\"evenodd\" clip-rule=\"evenodd\" d=\"M10 18C14.4183 18 18 14.4183 18 10C18 5.58172 14.4183 2 10 2C5.58172 2 2 5.58172 2 10C2 14.4183 5.58172 18 10 18Z\" fill=\"#339D37\"/><path fill-rule=\"evenodd\" clip-rule=\"evenodd\" d=\"M8.82788 11.064L6.85666 9.26039L5.73438 10.4866L8.87877 13.3638L14.2677 7.97482L13.0929 6.80005L8.82788 11.064Z\" fill=\"white\"/></svg>\n                        Upload successful - 525KB\n                    </span>\n                </div>\n            </div>\n            <div class=\"qld__form-file-actions\">\n                <button class=\"qld__btn qld__btn--tertiary qld__btn--icon-lead qld__form-file-delete-btn\">\n                    <i class=\"fa-light fa-trash\"></i>\n                    Remove\n                </button>\n            </div>\n        </div>\n\n        <div class=\"qld__form-file qld__form-file--success\">\n            <div class=\"qld__form-file-info-wrapper\">\n                <div class=\"qld__form-file-loader\">\n                    <!-- Loader or icon here -->\n                    <i class=\"fa-light fa-2x fa-file-word\"></i>\n                </div>\n                <div class=\"qld__form-file-info\">\n                    <p class=\"qld__display-xs\">WORD_DOC.png</p>\n                    <span class=\"qld__form-file-info-status\">\n                        <svg width=\"20\" height=\"20\" viewBox=\"0 0 20 20\" fill=\"none\" xmlns=\"http://www.w3.org/2000/svg\"><path fill-rule=\"evenodd\" clip-rule=\"evenodd\" d=\"M10 18C14.4183 18 18 14.4183 18 10C18 5.58172 14.4183 2 10 2C5.58172 2 2 5.58172 2 10C2 14.4183 5.58172 18 10 18Z\" fill=\"#339D37\"/><path fill-rule=\"evenodd\" clip-rule=\"evenodd\" d=\"M8.82788 11.064L6.85666 9.26039L5.73438 10.4866L8.87877 13.3638L14.2677 7.97482L13.0929 6.80005L8.82788 11.064Z\" fill=\"white\"/></svg>\n                        Upload successful - 525KB\n                    </span>\n                </div>\n            </div>\n            <div class=\"qld__form-file-actions\">\n                <button class=\"qld__btn qld__btn--tertiary qld__btn--icon-lead qld__form-file-delete-btn\">\n                    <i class=\"fa-light fa-trash\"></i>\n                    Remove\n                </button>\n            </div>\n        </div>\n        \n\n        <div class=\"qld__form-file qld__form-file--complete\">\n            <div class=\"qld__form-file-info-wrapper\">\n                <div class=\"qld__form-file-loader\">\n                    <!-- Loader or icon here -->\n                    <i class=\"fa-light fa-2x fa-file-pdf\"></i>\n                </div>\n                <div class=\"qld__form-file-info\">\n                    <p class=\"qld__display-xs\">PDF_FILE.png</p>\n                    <span class=\"qld__form-file-info-status\">\n                        <svg width=\"20\" height=\"20\" viewBox=\"0 0 20 20\" fill=\"none\" xmlns=\"http://www.w3.org/2000/svg\"><path fill-rule=\"evenodd\" clip-rule=\"evenodd\" d=\"M10 18C14.4183 18 18 14.4183 18 10C18 5.58172 14.4183 2 10 2C5.58172 2 2 5.58172 2 10C2 14.4183 5.58172 18 10 18Z\" fill=\"#339D37\"/><path fill-rule=\"evenodd\" clip-rule=\"evenodd\" d=\"M8.82788 11.064L6.85666 9.26039L5.73438 10.4866L8.87877 13.3638L14.2677 7.97482L13.0929 6.80005L8.82788 11.064Z\" fill=\"white\"/></svg>\n                        Upload complete - 525KB\n                    </span>\n                </div>\n            </div>\n            <div class=\"qld__form-file-actions\">\n                <button class=\"qld__btn qld__btn--tertiary qld__btn--icon-lead qld__form-file-delete-btn\">\n                    <i class=\"fa-light fa-trash\"></i>\n                    Remove\n                </button>\n            </div>\n        </div>\n\n        <div class=\"qld__form-file qld__form-file--error\">\n            <div class=\"qld__form-file-info-wrapper\">\n                <div class=\"qld__form-file-loader\">\n                    <!-- Loader or icon here -->\n                    <i class=\"fa-light fa-2x fa-file-exclamation\"></i>\n                </div>\n                <div class=\"qld__form-file-info\">\n                    <p class=\"qld__display-xs\">FILE_NAME_ERROR.png</p>\n                    <span class=\"qld__form-file-info-status\">\n                        <svg width=\"20\" height=\"20\" viewBox=\"0 0 20 20\" fill=\"none\" xmlns=\"http://www.w3.org/2000/svg\"><circle cx=\"10\" cy=\"10\" r=\"8\" fill=\"#E22339\"/><path d=\"M10 13C9.41667 13 9 13.5357 9 14C9 14.5 9.41667 15 10 15C10.5417 15 11 14.5 11 14C11 13.5357 10.5417 13 10 13ZM10 12C10.8044 12 11 11.3214 11 11V6C11 5.5 10.5 5 10 5C9.5 5 9 5.5 9 6V11C9 11.3214 9.1956 12 10 12Z\" fill=\"white\"/></svg>\n                        Error message\n                    </span>\n                </div>\n            </div>\n            <div class=\"qld__form-file-actions\">\n                <button class=\"qld__btn qld__btn--tertiary qld__btn--icon-lead qld__form-file-delete-btn\">\n                    <i class=\"fa-light fa-trash\"></i>\n                    Remove\n                </button>\n            </div>\n        </div>\n\n        <div class=\"qld__form-file\">\n            <div class=\"qld__form-file-info-wrapper\">\n                <div class=\"qld__form-file-loader\">\n                    <!-- Loader or icon here -->\n                    <div class=\"qld__loading_spinner qld__loading_spinner--dark qld__loading_spinner--landscape\" role=\"status\">\n                        <span class=\"qld__loading_spinner-wheel\"></span>\n                    </div>\n                </div>\n                <div class=\"qld__form-file-info\">\n                    <p class=\"qld__display-xs\">FILE_NAME_LOADING.png</p>\n                    <span class=\"qld__form-file-info-status\">Uploading...</span>\n                </div>\n            </div>\n            <div class=\"qld__form-file-actions\"></div>\n        </div>\n    </div>\n</div>";
},"useData":true}