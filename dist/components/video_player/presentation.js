{"1":function(container,depth0,helpers,partials,data) {
    var stack1, alias1=depth0 != null ? depth0 : (container.nullContext || {}), alias2=container.hooks.helperMissing, lookupProperty = container.lookupProperty || function(parent, propertyName) {
        if (Object.prototype.hasOwnProperty.call(parent, propertyName)) {
          return parent[propertyName];
        }
        return undefined
    };

  return "  <section\r\n    id=\""
    + ((stack1 = lookupProperty(helpers,"if").call(alias1,((stack1 = ((stack1 = (depth0 != null ? lookupProperty(depth0,"metadata") : depth0)) != null ? lookupProperty(stack1,"id_field") : stack1)) != null ? lookupProperty(stack1,"value") : stack1),{"name":"if","hash":{},"fn":container.program(2, data, 0),"inverse":container.program(4, data, 0),"data":data,"loc":{"start":{"line":3,"column":8},"end":{"line":3,"column":111}}})) != null ? stack1 : "")
    + "\"\r\n    class=\"\r\n      qld__body\r\n      qld__video__player--wrapper\r\n"
    + ((stack1 = lookupProperty(helpers,"if").call(alias1,((stack1 = ((stack1 = (depth0 != null ? lookupProperty(depth0,"metadata") : depth0)) != null ? lookupProperty(stack1,"body_background") : stack1)) != null ? lookupProperty(stack1,"value") : stack1),{"name":"if","hash":{},"fn":container.program(6, data, 0),"inverse":container.noop,"data":data,"loc":{"start":{"line":7,"column":6},"end":{"line":9,"column":13}}})) != null ? stack1 : "")
    + "    \"\r\n  >\r\n    <div class=\"container-fluid\">\r\n      <div\r\n        class=\"\r\n          row\r\n          qld__row-gap-component\r\n"
    + ((stack1 = (lookupProperty(helpers,"ifCond")||(depth0 && lookupProperty(depth0,"ifCond"))||alias2).call(alias1,((stack1 = ((stack1 = (depth0 != null ? lookupProperty(depth0,"metadata") : depth0)) != null ? lookupProperty(stack1,"video_layout") : stack1)) != null ? lookupProperty(stack1,"value") : stack1),"==","two_column",{"name":"ifCond","hash":{},"fn":container.program(8, data, 0),"inverse":container.noop,"data":data,"loc":{"start":{"line":17,"column":10},"end":{"line":19,"column":21}}})) != null ? stack1 : "")
    + "        \"\r\n      >\r\n\r\n        <!-- Check for 'stack' video layout option -->\r\n"
    + ((stack1 = (lookupProperty(helpers,"ifCond")||(depth0 && lookupProperty(depth0,"ifCond"))||alias2).call(alias1,((stack1 = ((stack1 = (depth0 != null ? lookupProperty(depth0,"metadata") : depth0)) != null ? lookupProperty(stack1,"video_layout") : stack1)) != null ? lookupProperty(stack1,"value") : stack1),"==","stack",{"name":"ifCond","hash":{},"fn":container.program(10, data, 0),"inverse":container.noop,"data":data,"loc":{"start":{"line":24,"column":8},"end":{"line":160,"column":19}}})) != null ? stack1 : "")
    + "\r\n        <!-- Check for 'two_column' video layout option -->\r\n"
    + ((stack1 = (lookupProperty(helpers,"ifCond")||(depth0 && lookupProperty(depth0,"ifCond"))||alias2).call(alias1,((stack1 = ((stack1 = (depth0 != null ? lookupProperty(depth0,"metadata") : depth0)) != null ? lookupProperty(stack1,"video_layout") : stack1)) != null ? lookupProperty(stack1,"value") : stack1),"==","two_column",{"name":"ifCond","hash":{},"fn":container.program(34, data, 0),"inverse":container.noop,"data":data,"loc":{"start":{"line":163,"column":8},"end":{"line":271,"column":19}}})) != null ? stack1 : "")
    + "      </div>\r\n    </div>\r\n  </section>\r\n";
},"2":function(container,depth0,helpers,partials,data) {
    var stack1, lookupProperty = container.lookupProperty || function(parent, propertyName) {
        if (Object.prototype.hasOwnProperty.call(parent, propertyName)) {
          return parent[propertyName];
        }
        return undefined
    };

  return ((stack1 = container.lambda(((stack1 = ((stack1 = (depth0 != null ? lookupProperty(depth0,"metadata") : depth0)) != null ? lookupProperty(stack1,"id_field") : stack1)) != null ? lookupProperty(stack1,"value") : stack1), depth0)) != null ? stack1 : "");
},"4":function(container,depth0,helpers,partials,data) {
    var helper, lookupProperty = container.lookupProperty || function(parent, propertyName) {
        if (Object.prototype.hasOwnProperty.call(parent, propertyName)) {
          return parent[propertyName];
        }
        return undefined
    };

  return "video_player-"
    + container.escapeExpression(((helper = (helper = lookupProperty(helpers,"assetid") || (depth0 != null ? lookupProperty(depth0,"assetid") : depth0)) != null ? helper : container.hooks.helperMissing),(typeof helper === "function" ? helper.call(depth0 != null ? depth0 : (container.nullContext || {}),{"name":"assetid","hash":{},"data":data,"loc":{"start":{"line":3,"column":91},"end":{"line":3,"column":104}}}) : helper)));
},"6":function(container,depth0,helpers,partials,data) {
    var stack1, lookupProperty = container.lookupProperty || function(parent, propertyName) {
        if (Object.prototype.hasOwnProperty.call(parent, propertyName)) {
          return parent[propertyName];
        }
        return undefined
    };

  return "        qld__body--"
    + container.escapeExpression(container.lambda(((stack1 = ((stack1 = (depth0 != null ? lookupProperty(depth0,"metadata") : depth0)) != null ? lookupProperty(stack1,"body_background") : stack1)) != null ? lookupProperty(stack1,"value") : stack1), depth0))
    + "\r\n";
},"8":function(container,depth0,helpers,partials,data) {
    var stack1, lookupProperty = container.lookupProperty || function(parent, propertyName) {
        if (Object.prototype.hasOwnProperty.call(parent, propertyName)) {
          return parent[propertyName];
        }
        return undefined
    };

  return "            qld__video__player--align-"
    + container.escapeExpression(container.lambda(((stack1 = ((stack1 = (depth0 != null ? lookupProperty(depth0,"metadata") : depth0)) != null ? lookupProperty(stack1,"video_align_items") : stack1)) != null ? lookupProperty(stack1,"value") : stack1), depth0))
    + "\r\n";
},"10":function(container,depth0,helpers,partials,data) {
    var stack1, alias1=depth0 != null ? depth0 : (container.nullContext || {}), alias2=container.hooks.helperMissing, lookupProperty = container.lookupProperty || function(parent, propertyName) {
        if (Object.prototype.hasOwnProperty.call(parent, propertyName)) {
          return parent[propertyName];
        }
        return undefined
    };

  return "          <!-- If video description exists, display it -->\r\n"
    + ((stack1 = lookupProperty(helpers,"if").call(alias1,((stack1 = ((stack1 = (depth0 != null ? lookupProperty(depth0,"metadata") : depth0)) != null ? lookupProperty(stack1,"video_description") : stack1)) != null ? lookupProperty(stack1,"value") : stack1),{"name":"if","hash":{},"fn":container.program(11, data, 0),"inverse":container.noop,"data":data,"loc":{"start":{"line":26,"column":10},"end":{"line":38,"column":17}}})) != null ? stack1 : "")
    + "\r\n          <!-- Embed video based on selected video size and layout -->\r\n          <div\r\n            class=\"\r\n"
    + ((stack1 = (lookupProperty(helpers,"ifCond")||(depth0 && lookupProperty(depth0,"ifCond"))||alias2).call(alias1,((stack1 = ((stack1 = (depth0 != null ? lookupProperty(depth0,"metadata") : depth0)) != null ? lookupProperty(stack1,"video_size") : stack1)) != null ? lookupProperty(stack1,"value") : stack1),"==","eight_col",{"name":"ifCond","hash":{},"fn":container.program(14, data, 0),"inverse":container.program(16, data, 0),"data":data,"loc":{"start":{"line":43,"column":14},"end":{"line":48,"column":25}}})) != null ? stack1 : "")
    + ((stack1 = (lookupProperty(helpers,"ifCond")||(depth0 && lookupProperty(depth0,"ifCond"))||alias2).call(alias1,((stack1 = ((stack1 = (depth0 != null ? lookupProperty(depth0,"metadata") : depth0)) != null ? lookupProperty(stack1,"stack_options") : stack1)) != null ? lookupProperty(stack1,"value") : stack1),"==","centered",{"name":"ifCond","hash":{},"fn":container.program(18, data, 0),"inverse":container.noop,"data":data,"loc":{"start":{"line":49,"column":14},"end":{"line":51,"column":25}}})) != null ? stack1 : "")
    + "            \"\r\n          >\r\n\r\n            <!-- Only embed the video if a video ID is provided -->\r\n"
    + ((stack1 = lookupProperty(helpers,"if").call(alias1,((stack1 = ((stack1 = (depth0 != null ? lookupProperty(depth0,"metadata") : depth0)) != null ? lookupProperty(stack1,"video_id") : stack1)) != null ? lookupProperty(stack1,"value") : stack1),{"name":"if","hash":{},"fn":container.program(20, data, 0),"inverse":container.noop,"data":data,"loc":{"start":{"line":56,"column":12},"end":{"line":158,"column":19}}})) != null ? stack1 : "")
    + "          </div>\r\n";
},"11":function(container,depth0,helpers,partials,data) {
    var stack1, lookupProperty = container.lookupProperty || function(parent, propertyName) {
        if (Object.prototype.hasOwnProperty.call(parent, propertyName)) {
          return parent[propertyName];
        }
        return undefined
    };

  return "            <div\r\n              class=\"\r\n                col-xs-12\r\n"
    + ((stack1 = (lookupProperty(helpers,"ifCond")||(depth0 && lookupProperty(depth0,"ifCond"))||container.hooks.helperMissing).call(depth0 != null ? depth0 : (container.nullContext || {}),((stack1 = ((stack1 = (depth0 != null ? lookupProperty(depth0,"metadata") : depth0)) != null ? lookupProperty(stack1,"stack_options") : stack1)) != null ? lookupProperty(stack1,"value") : stack1),"==","centered",{"name":"ifCond","hash":{},"fn":container.program(12, data, 0),"inverse":container.noop,"data":data,"loc":{"start":{"line":30,"column":16},"end":{"line":33,"column":27}}})) != null ? stack1 : "")
    + "              \"\r\n            >\r\n              "
    + ((stack1 = container.lambda(((stack1 = ((stack1 = (depth0 != null ? lookupProperty(depth0,"metadata") : depth0)) != null ? lookupProperty(stack1,"video_description") : stack1)) != null ? lookupProperty(stack1,"value") : stack1), depth0)) != null ? stack1 : "")
    + "\r\n            </div>\r\n";
},"12":function(container,depth0,helpers,partials,data) {
    return "                  qld__video__copy--centered\r\n                  text-center\r\n";
},"14":function(container,depth0,helpers,partials,data) {
    return "                col-xs-12\r\n                col-lg-8\r\n";
},"16":function(container,depth0,helpers,partials,data) {
    return "                col-xs-12\r\n";
},"18":function(container,depth0,helpers,partials,data) {
    return "                qld__video__centered\r\n";
},"20":function(container,depth0,helpers,partials,data) {
    var stack1, alias1=depth0 != null ? depth0 : (container.nullContext || {}), alias2=container.hooks.helperMissing, alias3=container.lambda, alias4=container.escapeExpression, lookupProperty = container.lookupProperty || function(parent, propertyName) {
        if (Object.prototype.hasOwnProperty.call(parent, propertyName)) {
          return parent[propertyName];
        }
        return undefined
    };

  return "              <div class=\"qld__video__player--embed\">\r\n                <div class=\"qld__video__player--embed--container\">\r\n                  <!-- Embed YouTube or Vimeo based on the selected video type -->\r\n                  <iframe\r\n"
    + ((stack1 = (lookupProperty(helpers,"ifCond")||(depth0 && lookupProperty(depth0,"ifCond"))||alias2).call(alias1,((stack1 = ((stack1 = (depth0 != null ? lookupProperty(depth0,"metadata") : depth0)) != null ? lookupProperty(stack1,"video_type") : stack1)) != null ? lookupProperty(stack1,"value") : stack1),"==","youtube",{"name":"ifCond","hash":{},"fn":container.program(21, data, 0),"inverse":container.noop,"data":data,"loc":{"start":{"line":61,"column":20},"end":{"line":63,"column":31}}})) != null ? stack1 : "")
    + ((stack1 = (lookupProperty(helpers,"ifCond")||(depth0 && lookupProperty(depth0,"ifCond"))||alias2).call(alias1,((stack1 = ((stack1 = (depth0 != null ? lookupProperty(depth0,"metadata") : depth0)) != null ? lookupProperty(stack1,"video_type") : stack1)) != null ? lookupProperty(stack1,"value") : stack1),"==","vimeo",{"name":"ifCond","hash":{},"fn":container.program(23, data, 0),"inverse":container.noop,"data":data,"loc":{"start":{"line":64,"column":20},"end":{"line":66,"column":31}}})) != null ? stack1 : "")
    + "                    class=\"qld__video__player--iframe\"\r\n                    frameborder=\"0\"\r\n                    allow=\"fullscreen\"\r\n                    allowfullscreen\r\n                    title=\""
    + alias4(alias3(((stack1 = ((stack1 = (depth0 != null ? lookupProperty(depth0,"metadata") : depth0)) != null ? lookupProperty(stack1,"video_caption") : stack1)) != null ? lookupProperty(stack1,"value") : stack1), depth0))
    + " - Video\"\r\n                    aria-label=\"Video: "
    + alias4(alias3(((stack1 = ((stack1 = (depth0 != null ? lookupProperty(depth0,"metadata") : depth0)) != null ? lookupProperty(stack1,"video_caption") : stack1)) != null ? lookupProperty(stack1,"value") : stack1), depth0))
    + "\"\r\n                  ></iframe>\r\n                </div>\r\n\r\n                <!-- Display video caption and duration if provided -->\r\n                <div class=\"qld__video__player--summary\">\r\n"
    + ((stack1 = (lookupProperty(helpers,"ifAny")||(depth0 && lookupProperty(depth0,"ifAny"))||alias2).call(alias1,((stack1 = ((stack1 = (depth0 != null ? lookupProperty(depth0,"metadata") : depth0)) != null ? lookupProperty(stack1,"video_caption") : stack1)) != null ? lookupProperty(stack1,"value") : stack1),((stack1 = ((stack1 = (depth0 != null ? lookupProperty(depth0,"metadata") : depth0)) != null ? lookupProperty(stack1,"video_duration") : stack1)) != null ? lookupProperty(stack1,"value") : stack1),{"name":"ifAny","hash":{},"fn":container.program(25, data, 0),"inverse":container.noop,"data":data,"loc":{"start":{"line":78,"column":18},"end":{"line":97,"column":28}}})) != null ? stack1 : "")
    + "\r\n                  <!-- Display transcript link if transcript option is 'link' -->\r\n"
    + ((stack1 = (lookupProperty(helpers,"ifCond")||(depth0 && lookupProperty(depth0,"ifCond"))||alias2).call(alias1,((stack1 = ((stack1 = (depth0 != null ? lookupProperty(depth0,"metadata") : depth0)) != null ? lookupProperty(stack1,"transcript_options") : stack1)) != null ? lookupProperty(stack1,"value") : stack1),"==","link",{"name":"ifCond","hash":{},"fn":container.program(28, data, 0),"inverse":container.noop,"data":data,"loc":{"start":{"line":100,"column":18},"end":{"line":121,"column":29}}})) != null ? stack1 : "")
    + "\r\n                  <!-- Display transcript accordion if transcript option is 'accordion' -->\r\n"
    + ((stack1 = (lookupProperty(helpers,"ifCond")||(depth0 && lookupProperty(depth0,"ifCond"))||alias2).call(alias1,((stack1 = ((stack1 = (depth0 != null ? lookupProperty(depth0,"metadata") : depth0)) != null ? lookupProperty(stack1,"transcript_options") : stack1)) != null ? lookupProperty(stack1,"value") : stack1),"==","accordion",{"name":"ifCond","hash":{},"fn":container.program(31, data, 0),"inverse":container.noop,"data":data,"loc":{"start":{"line":124,"column":18},"end":{"line":155,"column":29}}})) != null ? stack1 : "")
    + "                </div>\r\n              </div>\r\n";
},"21":function(container,depth0,helpers,partials,data) {
    var stack1, lookupProperty = container.lookupProperty || function(parent, propertyName) {
        if (Object.prototype.hasOwnProperty.call(parent, propertyName)) {
          return parent[propertyName];
        }
        return undefined
    };

  return "                      src=\"https://www.youtube.com/embed/"
    + container.escapeExpression(container.lambda(((stack1 = ((stack1 = (depth0 != null ? lookupProperty(depth0,"metadata") : depth0)) != null ? lookupProperty(stack1,"video_id") : stack1)) != null ? lookupProperty(stack1,"value") : stack1), depth0))
    + "\"\r\n";
},"23":function(container,depth0,helpers,partials,data) {
    var stack1, lookupProperty = container.lookupProperty || function(parent, propertyName) {
        if (Object.prototype.hasOwnProperty.call(parent, propertyName)) {
          return parent[propertyName];
        }
        return undefined
    };

  return "                      src=\"https://player.vimeo.com/video/"
    + container.escapeExpression(container.lambda(((stack1 = ((stack1 = (depth0 != null ? lookupProperty(depth0,"metadata") : depth0)) != null ? lookupProperty(stack1,"video_id") : stack1)) != null ? lookupProperty(stack1,"value") : stack1), depth0))
    + "\"\r\n";
},"25":function(container,depth0,helpers,partials,data) {
    var stack1, lookupProperty = container.lookupProperty || function(parent, propertyName) {
        if (Object.prototype.hasOwnProperty.call(parent, propertyName)) {
          return parent[propertyName];
        }
        return undefined
    };

  return "                    <div class=\"qld__video__player--caption\">\r\n                      "
    + container.escapeExpression(container.lambda(((stack1 = ((stack1 = (depth0 != null ? lookupProperty(depth0,"metadata") : depth0)) != null ? lookupProperty(stack1,"video_caption") : stack1)) != null ? lookupProperty(stack1,"value") : stack1), depth0))
    + "\r\n"
    + ((stack1 = lookupProperty(helpers,"if").call(depth0 != null ? depth0 : (container.nullContext || {}),((stack1 = ((stack1 = (depth0 != null ? lookupProperty(depth0,"metadata") : depth0)) != null ? lookupProperty(stack1,"video_duration") : stack1)) != null ? lookupProperty(stack1,"value") : stack1),{"name":"if","hash":{},"fn":container.program(26, data, 0),"inverse":container.noop,"data":data,"loc":{"start":{"line":81,"column":22},"end":{"line":95,"column":29}}})) != null ? stack1 : "")
    + "                    </div>\r\n";
},"26":function(container,depth0,helpers,partials,data) {
    var stack1, alias1=container.lambda, alias2=container.escapeExpression, lookupProperty = container.lookupProperty || function(parent, propertyName) {
        if (Object.prototype.hasOwnProperty.call(parent, propertyName)) {
          return parent[propertyName];
        }
        return undefined
    };

  return "                        <div class=\"qld__video__player--duration\">\r\n                          <svg\r\n                            class=\"qld__icon qld__icon--sm\"\r\n                            aria-hidden=\"true\"\r\n                            xmlns=\"http://www.w3.org/2000/svg\"\r\n                          >\r\n                            <use\r\n                              href=\""
    + alias2(alias1(((stack1 = ((stack1 = ((stack1 = ((stack1 = (data && lookupProperty(data,"root"))) && lookupProperty(stack1,"site"))) && lookupProperty(stack1,"metadata"))) && lookupProperty(stack1,"coreSiteIcons"))) && lookupProperty(stack1,"value")), depth0))
    + "#clock\"\r\n                            ></use>\r\n                          </svg>\r\n                          Duration:\r\n                          "
    + alias2(alias1(((stack1 = ((stack1 = (depth0 != null ? lookupProperty(depth0,"metadata") : depth0)) != null ? lookupProperty(stack1,"video_duration") : stack1)) != null ? lookupProperty(stack1,"value") : stack1), depth0))
    + "\r\n                        </div>\r\n";
},"28":function(container,depth0,helpers,partials,data) {
    var stack1, lookupProperty = container.lookupProperty || function(parent, propertyName) {
        if (Object.prototype.hasOwnProperty.call(parent, propertyName)) {
          return parent[propertyName];
        }
        return undefined
    };

  return ((stack1 = lookupProperty(helpers,"if").call(depth0 != null ? depth0 : (container.nullContext || {}),((stack1 = ((stack1 = (depth0 != null ? lookupProperty(depth0,"metadata") : depth0)) != null ? lookupProperty(stack1,"transcript_link") : stack1)) != null ? lookupProperty(stack1,"value") : stack1),{"name":"if","hash":{},"fn":container.program(29, data, 0),"inverse":container.noop,"data":data,"loc":{"start":{"line":101,"column":20},"end":{"line":120,"column":27}}})) != null ? stack1 : "");
},"29":function(container,depth0,helpers,partials,data) {
    var stack1, alias1=container.lambda, alias2=container.escapeExpression, lookupProperty = container.lookupProperty || function(parent, propertyName) {
        if (Object.prototype.hasOwnProperty.call(parent, propertyName)) {
          return parent[propertyName];
        }
        return undefined
    };

  return "                      <div class=\"qld__video__player__transcript\">\r\n                        <div class=\"qld__video__player__transcript-link\">\r\n                          <svg\r\n                            class=\"qld__icon qld__icon--sm\"\r\n                            aria-hidden=\"true\"\r\n                            xmlns=\"http://www.w3.org/2000/svg\"\r\n                          >\r\n                            <use\r\n                              href=\""
    + alias2(alias1(((stack1 = ((stack1 = ((stack1 = ((stack1 = (data && lookupProperty(data,"root"))) && lookupProperty(stack1,"site"))) && lookupProperty(stack1,"metadata"))) && lookupProperty(stack1,"coreSiteIcons"))) && lookupProperty(stack1,"value")), depth0))
    + "#arrow-right\"\r\n                            ></use>\r\n                          </svg>\r\n                          <a\r\n                            href=\"%globals_asset_assetid:"
    + alias2(alias1(((stack1 = ((stack1 = (depth0 != null ? lookupProperty(depth0,"metadata") : depth0)) != null ? lookupProperty(stack1,"transcript_link") : stack1)) != null ? lookupProperty(stack1,"value") : stack1), depth0))
    + "^as_asset:asset_url%\"\r\n                          >\r\n                            View transcript\r\n                          </a>\r\n                        </div>\r\n                      </div>\r\n";
},"31":function(container,depth0,helpers,partials,data) {
    var stack1, lookupProperty = container.lookupProperty || function(parent, propertyName) {
        if (Object.prototype.hasOwnProperty.call(parent, propertyName)) {
          return parent[propertyName];
        }
        return undefined
    };

  return ((stack1 = lookupProperty(helpers,"if").call(depth0 != null ? depth0 : (container.nullContext || {}),((stack1 = ((stack1 = (depth0 != null ? lookupProperty(depth0,"metadata") : depth0)) != null ? lookupProperty(stack1,"transcript") : stack1)) != null ? lookupProperty(stack1,"value") : stack1),{"name":"if","hash":{},"fn":container.program(32, data, 0),"inverse":container.noop,"data":data,"loc":{"start":{"line":125,"column":20},"end":{"line":154,"column":27}}})) != null ? stack1 : "");
},"32":function(container,depth0,helpers,partials,data) {
    var stack1, helper, alias1=depth0 != null ? depth0 : (container.nullContext || {}), alias2=container.hooks.helperMissing, alias3="function", alias4=container.escapeExpression, alias5=container.lambda, lookupProperty = container.lookupProperty || function(parent, propertyName) {
        if (Object.prototype.hasOwnProperty.call(parent, propertyName)) {
          return parent[propertyName];
        }
        return undefined
    };

  return "                      <div class=\"qld__video__player__transcript\">\r\n                        <div class=\"qld__accordion\">\r\n                          <button\r\n                            class=\"qld__accordion__title js-qld__accordion qld__accordion--closed\"\r\n                            aria-controls=\"accordion-group-"
    + alias4(((helper = (helper = lookupProperty(helpers,"assetid") || (depth0 != null ? lookupProperty(depth0,"assetid") : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"assetid","hash":{},"data":data,"loc":{"start":{"line":130,"column":59},"end":{"line":130,"column":72}}}) : helper)))
    + "\"\r\n                            aria-expanded=\"false\"\r\n                          >\r\n                            <svg\r\n                              class=\"qld__icon qld__icon--md\"\r\n                              aria-hidden=\"true\"\r\n                              xmlns=\"http://www.w3.org/2000/svg\"\r\n                            >\r\n                              <use\r\n                                href=\""
    + alias4(alias5(((stack1 = ((stack1 = ((stack1 = ((stack1 = (data && lookupProperty(data,"root"))) && lookupProperty(stack1,"site"))) && lookupProperty(stack1,"metadata"))) && lookupProperty(stack1,"coreSiteIcons"))) && lookupProperty(stack1,"value")), depth0))
    + "#transcript\"\r\n                              ></use>\r\n                            </svg>\r\n                            <span>Show transcript</span>\r\n                          </button>\r\n                          <div\r\n                            id=\"accordion-group-"
    + alias4(((helper = (helper = lookupProperty(helpers,"assetid") || (depth0 != null ? lookupProperty(depth0,"assetid") : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"assetid","hash":{},"data":data,"loc":{"start":{"line":145,"column":48},"end":{"line":145,"column":61}}}) : helper)))
    + "\"\r\n                            class=\"qld__accordion__body qld__accordion--closed\"\r\n                          >\r\n                            <div class=\"qld__accordion__body-wrapper\">\r\n                              "
    + ((stack1 = alias5(((stack1 = ((stack1 = (depth0 != null ? lookupProperty(depth0,"metadata") : depth0)) != null ? lookupProperty(stack1,"transcript") : stack1)) != null ? lookupProperty(stack1,"value") : stack1), depth0)) != null ? stack1 : "")
    + "\r\n                            </div>\r\n                          </div>\r\n                        </div>\r\n                      </div>\r\n";
},"34":function(container,depth0,helpers,partials,data) {
    var stack1, alias1=depth0 != null ? depth0 : (container.nullContext || {}), lookupProperty = container.lookupProperty || function(parent, propertyName) {
        if (Object.prototype.hasOwnProperty.call(parent, propertyName)) {
          return parent[propertyName];
        }
        return undefined
    };

  return "          <div class=\"col-xs-12 col-lg-6\">\r\n"
    + ((stack1 = lookupProperty(helpers,"if").call(alias1,((stack1 = ((stack1 = (depth0 != null ? lookupProperty(depth0,"metadata") : depth0)) != null ? lookupProperty(stack1,"video_description") : stack1)) != null ? lookupProperty(stack1,"value") : stack1),{"name":"if","hash":{},"fn":container.program(35, data, 0),"inverse":container.noop,"data":data,"loc":{"start":{"line":165,"column":12},"end":{"line":167,"column":19}}})) != null ? stack1 : "")
    + "          </div>\r\n          <div class=\"col-xs-12 col-lg-6\">\r\n            <!-- Embed the video if a video ID exists -->\r\n"
    + ((stack1 = lookupProperty(helpers,"if").call(alias1,((stack1 = ((stack1 = (depth0 != null ? lookupProperty(depth0,"metadata") : depth0)) != null ? lookupProperty(stack1,"video_id") : stack1)) != null ? lookupProperty(stack1,"value") : stack1),{"name":"if","hash":{},"fn":container.program(37, data, 0),"inverse":container.noop,"data":data,"loc":{"start":{"line":171,"column":12},"end":{"line":269,"column":19}}})) != null ? stack1 : "")
    + "          </div>\r\n";
},"35":function(container,depth0,helpers,partials,data) {
    var stack1, lookupProperty = container.lookupProperty || function(parent, propertyName) {
        if (Object.prototype.hasOwnProperty.call(parent, propertyName)) {
          return parent[propertyName];
        }
        return undefined
    };

  return "              "
    + ((stack1 = container.lambda(((stack1 = ((stack1 = (depth0 != null ? lookupProperty(depth0,"metadata") : depth0)) != null ? lookupProperty(stack1,"video_description") : stack1)) != null ? lookupProperty(stack1,"value") : stack1), depth0)) != null ? stack1 : "")
    + "\r\n";
},"37":function(container,depth0,helpers,partials,data) {
    var stack1, alias1=depth0 != null ? depth0 : (container.nullContext || {}), alias2=container.hooks.helperMissing, alias3=container.lambda, alias4=container.escapeExpression, lookupProperty = container.lookupProperty || function(parent, propertyName) {
        if (Object.prototype.hasOwnProperty.call(parent, propertyName)) {
          return parent[propertyName];
        }
        return undefined
    };

  return "              <div class=\"qld__video__player--embed\">\r\n                <div class=\"qld__video__player--embed--container\">\r\n                  <iframe\r\n"
    + ((stack1 = (lookupProperty(helpers,"ifCond")||(depth0 && lookupProperty(depth0,"ifCond"))||alias2).call(alias1,((stack1 = ((stack1 = (depth0 != null ? lookupProperty(depth0,"metadata") : depth0)) != null ? lookupProperty(stack1,"video_type") : stack1)) != null ? lookupProperty(stack1,"value") : stack1),"==","youtube",{"name":"ifCond","hash":{},"fn":container.program(21, data, 0),"inverse":container.noop,"data":data,"loc":{"start":{"line":175,"column":20},"end":{"line":177,"column":31}}})) != null ? stack1 : "")
    + ((stack1 = (lookupProperty(helpers,"ifCond")||(depth0 && lookupProperty(depth0,"ifCond"))||alias2).call(alias1,((stack1 = ((stack1 = (depth0 != null ? lookupProperty(depth0,"metadata") : depth0)) != null ? lookupProperty(stack1,"video_type") : stack1)) != null ? lookupProperty(stack1,"value") : stack1),"==","vimeo",{"name":"ifCond","hash":{},"fn":container.program(23, data, 0),"inverse":container.noop,"data":data,"loc":{"start":{"line":178,"column":20},"end":{"line":180,"column":31}}})) != null ? stack1 : "")
    + "                    class=\"qld__video__player--iframe\"\r\n                    frameborder=\"0\"\r\n                    allow=\"fullscreen\"\r\n                    allowfullscreen\r\n                    title=\""
    + alias4(alias3(((stack1 = ((stack1 = (depth0 != null ? lookupProperty(depth0,"metadata") : depth0)) != null ? lookupProperty(stack1,"video_caption") : stack1)) != null ? lookupProperty(stack1,"value") : stack1), depth0))
    + " - Video\"\r\n                    aria-label=\"Video: "
    + alias4(alias3(((stack1 = ((stack1 = (depth0 != null ? lookupProperty(depth0,"metadata") : depth0)) != null ? lookupProperty(stack1,"video_caption") : stack1)) != null ? lookupProperty(stack1,"value") : stack1), depth0))
    + "\"\r\n                  ></iframe>\r\n                </div>\r\n                <div class=\"qld__video__player--summary\">\r\n"
    + ((stack1 = (lookupProperty(helpers,"ifAny")||(depth0 && lookupProperty(depth0,"ifAny"))||alias2).call(alias1,((stack1 = ((stack1 = (depth0 != null ? lookupProperty(depth0,"metadata") : depth0)) != null ? lookupProperty(stack1,"video_caption") : stack1)) != null ? lookupProperty(stack1,"value") : stack1),((stack1 = ((stack1 = (depth0 != null ? lookupProperty(depth0,"metadata") : depth0)) != null ? lookupProperty(stack1,"video_duration") : stack1)) != null ? lookupProperty(stack1,"value") : stack1),{"name":"ifAny","hash":{},"fn":container.program(25, data, 0),"inverse":container.noop,"data":data,"loc":{"start":{"line":190,"column":18},"end":{"line":209,"column":28}}})) != null ? stack1 : "")
    + "\r\n                  <!-- Display transcript link or accordion based on options -->\r\n"
    + ((stack1 = (lookupProperty(helpers,"ifCond")||(depth0 && lookupProperty(depth0,"ifCond"))||alias2).call(alias1,((stack1 = ((stack1 = (depth0 != null ? lookupProperty(depth0,"metadata") : depth0)) != null ? lookupProperty(stack1,"transcript_options") : stack1)) != null ? lookupProperty(stack1,"value") : stack1),"==","link",{"name":"ifCond","hash":{},"fn":container.program(28, data, 0),"inverse":container.noop,"data":data,"loc":{"start":{"line":212,"column":18},"end":{"line":233,"column":29}}})) != null ? stack1 : "")
    + "\r\n"
    + ((stack1 = (lookupProperty(helpers,"ifCond")||(depth0 && lookupProperty(depth0,"ifCond"))||alias2).call(alias1,((stack1 = ((stack1 = (depth0 != null ? lookupProperty(depth0,"metadata") : depth0)) != null ? lookupProperty(stack1,"transcript_options") : stack1)) != null ? lookupProperty(stack1,"value") : stack1),"==","accordion",{"name":"ifCond","hash":{},"fn":container.program(38, data, 0),"inverse":container.noop,"data":data,"loc":{"start":{"line":235,"column":18},"end":{"line":266,"column":29}}})) != null ? stack1 : "")
    + "                </div>\r\n              </div>\r\n";
},"38":function(container,depth0,helpers,partials,data) {
    var stack1, lookupProperty = container.lookupProperty || function(parent, propertyName) {
        if (Object.prototype.hasOwnProperty.call(parent, propertyName)) {
          return parent[propertyName];
        }
        return undefined
    };

  return ((stack1 = lookupProperty(helpers,"if").call(depth0 != null ? depth0 : (container.nullContext || {}),((stack1 = ((stack1 = (depth0 != null ? lookupProperty(depth0,"metadata") : depth0)) != null ? lookupProperty(stack1,"transcript") : stack1)) != null ? lookupProperty(stack1,"value") : stack1),{"name":"if","hash":{},"fn":container.program(39, data, 0),"inverse":container.noop,"data":data,"loc":{"start":{"line":236,"column":20},"end":{"line":265,"column":27}}})) != null ? stack1 : "");
},"39":function(container,depth0,helpers,partials,data) {
    var stack1, helper, alias1=depth0 != null ? depth0 : (container.nullContext || {}), alias2=container.hooks.helperMissing, alias3="function", alias4=container.escapeExpression, alias5=container.lambda, lookupProperty = container.lookupProperty || function(parent, propertyName) {
        if (Object.prototype.hasOwnProperty.call(parent, propertyName)) {
          return parent[propertyName];
        }
        return undefined
    };

  return "                      <div class=\"qld__video__player__transcript\">\r\n                        <div class=\"qld__accordion\">\r\n                          <button\r\n                            class=\"qld__accordion__title js-qld__accordion qld__accordion--closed\"\r\n                            aria-controls=\"accordion-group-"
    + alias4(((helper = (helper = lookupProperty(helpers,"assetid") || (depth0 != null ? lookupProperty(depth0,"assetid") : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"assetid","hash":{},"data":data,"loc":{"start":{"line":241,"column":59},"end":{"line":241,"column":72}}}) : helper)))
    + "\"\r\n                            aria-expanded=\"false\"\r\n                          >\r\n                            <svg\r\n                              class=\"qld__icon qld__icon--sm\"\r\n                              aria-hidden=\"true\"\r\n                              xmlns=\"http://www.w3.org/2000/svg\"\r\n                            >\r\n                              <use\r\n                                href=\""
    + alias4(alias5(((stack1 = ((stack1 = ((stack1 = ((stack1 = (data && lookupProperty(data,"root"))) && lookupProperty(stack1,"site"))) && lookupProperty(stack1,"metadata"))) && lookupProperty(stack1,"coreSiteIcons"))) && lookupProperty(stack1,"value")), depth0))
    + "#transcript\"\r\n                              ></use>\r\n                            </svg>\r\n                            <span>Show transcript</span>\r\n                          </button>\r\n                          <div\r\n                            id=\"accordion-group-"
    + alias4(((helper = (helper = lookupProperty(helpers,"assetid") || (depth0 != null ? lookupProperty(depth0,"assetid") : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"assetid","hash":{},"data":data,"loc":{"start":{"line":256,"column":48},"end":{"line":256,"column":61}}}) : helper)))
    + "\"\r\n                            class=\"qld__accordion__body qld__accordion--closed\"\r\n                          >\r\n                            <div class=\"qld__accordion__body-wrapper\">\r\n                              "
    + ((stack1 = alias5(((stack1 = ((stack1 = (depth0 != null ? lookupProperty(depth0,"metadata") : depth0)) != null ? lookupProperty(stack1,"transcript") : stack1)) != null ? lookupProperty(stack1,"value") : stack1), depth0)) != null ? stack1 : "")
    + "\r\n                            </div>\r\n                          </div>\r\n                        </div>\r\n                      </div>\r\n";
},"compiler":[8,">= 4.3.0"],"main":function(container,depth0,helpers,partials,data) {
    var stack1, lookupProperty = container.lookupProperty || function(parent, propertyName) {
        if (Object.prototype.hasOwnProperty.call(parent, propertyName)) {
          return parent[propertyName];
        }
        return undefined
    };

  return ((stack1 = lookupProperty(helpers,"with").call(depth0 != null ? depth0 : (container.nullContext || {}),((stack1 = (depth0 != null ? lookupProperty(depth0,"component") : depth0)) != null ? lookupProperty(stack1,"data") : stack1),{"name":"with","hash":{},"fn":container.program(1, data, 0),"inverse":container.noop,"data":data,"loc":{"start":{"line":1,"column":0},"end":{"line":275,"column":9}}})) != null ? stack1 : "");
},"useData":true}