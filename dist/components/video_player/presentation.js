{"1":function(container,depth0,helpers,partials,data) {
    var stack1, alias1=depth0 != null ? depth0 : (container.nullContext || {}), alias2=container.hooks.helperMissing, lookupProperty = container.lookupProperty || function(parent, propertyName) {
        if (Object.prototype.hasOwnProperty.call(parent, propertyName)) {
          return parent[propertyName];
        }
        return undefined
    };

  return "<section class=\"qld__body qld__video__player--wrapper \r\n  "
    + ((stack1 = lookupProperty(helpers,"if").call(alias1,((stack1 = ((stack1 = (depth0 != null ? lookupProperty(depth0,"metadata") : depth0)) != null ? lookupProperty(stack1,"body_background") : stack1)) != null ? lookupProperty(stack1,"value") : stack1),{"name":"if","hash":{},"fn":container.program(2, data, 0),"inverse":container.noop,"data":data,"loc":{"start":{"line":3,"column":2},"end":{"line":3,"column":92}}})) != null ? stack1 : "")
    + "\" id=\""
    + ((stack1 = lookupProperty(helpers,"if").call(alias1,((stack1 = ((stack1 = (depth0 != null ? lookupProperty(depth0,"metadata") : depth0)) != null ? lookupProperty(stack1,"id_field") : stack1)) != null ? lookupProperty(stack1,"value") : stack1),{"name":"if","hash":{},"fn":container.program(4, data, 0),"inverse":container.program(6, data, 0),"data":data,"loc":{"start":{"line":3,"column":98},"end":{"line":3,"column":197}}})) != null ? stack1 : "")
    + "\">\r\n  <div class=\"container-fluid\">\r\n    <div class=\"row qld__row-gap-component "
    + ((stack1 = (lookupProperty(helpers,"ifCond")||(depth0 && lookupProperty(depth0,"ifCond"))||alias2).call(alias1,((stack1 = ((stack1 = (depth0 != null ? lookupProperty(depth0,"metadata") : depth0)) != null ? lookupProperty(stack1,"video_layout") : stack1)) != null ? lookupProperty(stack1,"value") : stack1),"==","two_column",{"name":"ifCond","hash":{},"fn":container.program(8, data, 0),"inverse":container.noop,"data":data,"loc":{"start":{"line":5,"column":43},"end":{"line":5,"column":136}}})) != null ? stack1 : "")
    + "\">\r\n\r\n\r\n      <!-- Check for 'stack' video layout option -->\r\n"
    + ((stack1 = (lookupProperty(helpers,"ifCond")||(depth0 && lookupProperty(depth0,"ifCond"))||alias2).call(alias1,((stack1 = ((stack1 = (depth0 != null ? lookupProperty(depth0,"metadata") : depth0)) != null ? lookupProperty(stack1,"video_layout") : stack1)) != null ? lookupProperty(stack1,"value") : stack1),"==","stack",{"name":"ifCond","hash":{},"fn":container.program(10, data, 0),"inverse":container.noop,"data":data,"loc":{"start":{"line":9,"column":6},"end":{"line":86,"column":17}}})) != null ? stack1 : "")
    + "\r\n      <!-- Check for 'two_column' video layout option -->\r\n"
    + ((stack1 = (lookupProperty(helpers,"ifCond")||(depth0 && lookupProperty(depth0,"ifCond"))||alias2).call(alias1,((stack1 = ((stack1 = (depth0 != null ? lookupProperty(depth0,"metadata") : depth0)) != null ? lookupProperty(stack1,"video_layout") : stack1)) != null ? lookupProperty(stack1,"value") : stack1),"==","two_column",{"name":"ifCond","hash":{},"fn":container.program(34, data, 0),"inverse":container.noop,"data":data,"loc":{"start":{"line":89,"column":6},"end":{"line":155,"column":17}}})) != null ? stack1 : "")
    + "    </div>\r\n  </div>\r\n</section>\r\n";
},"2":function(container,depth0,helpers,partials,data) {
    var stack1, lookupProperty = container.lookupProperty || function(parent, propertyName) {
        if (Object.prototype.hasOwnProperty.call(parent, propertyName)) {
          return parent[propertyName];
        }
        return undefined
    };

  return "qld__body--"
    + container.escapeExpression(container.lambda(((stack1 = ((stack1 = (depth0 != null ? lookupProperty(depth0,"metadata") : depth0)) != null ? lookupProperty(stack1,"body_background") : stack1)) != null ? lookupProperty(stack1,"value") : stack1), depth0));
},"4":function(container,depth0,helpers,partials,data) {
    var stack1, lookupProperty = container.lookupProperty || function(parent, propertyName) {
        if (Object.prototype.hasOwnProperty.call(parent, propertyName)) {
          return parent[propertyName];
        }
        return undefined
    };

  return ((stack1 = container.lambda(((stack1 = ((stack1 = (depth0 != null ? lookupProperty(depth0,"metadata") : depth0)) != null ? lookupProperty(stack1,"id_field") : stack1)) != null ? lookupProperty(stack1,"value") : stack1), depth0)) != null ? stack1 : "");
},"6":function(container,depth0,helpers,partials,data) {
    var helper, lookupProperty = container.lookupProperty || function(parent, propertyName) {
        if (Object.prototype.hasOwnProperty.call(parent, propertyName)) {
          return parent[propertyName];
        }
        return undefined
    };

  return "video_player-"
    + container.escapeExpression(((helper = (helper = lookupProperty(helpers,"assetid") || (depth0 != null ? lookupProperty(depth0,"assetid") : depth0)) != null ? helper : container.hooks.helperMissing),(typeof helper === "function" ? helper.call(depth0 != null ? depth0 : (container.nullContext || {}),{"name":"assetid","hash":{},"data":data,"loc":{"start":{"line":3,"column":179},"end":{"line":3,"column":190}}}) : helper)));
},"8":function(container,depth0,helpers,partials,data) {
    return "qld__video__player--align";
},"10":function(container,depth0,helpers,partials,data) {
    var stack1, alias1=depth0 != null ? depth0 : (container.nullContext || {}), alias2=container.hooks.helperMissing, lookupProperty = container.lookupProperty || function(parent, propertyName) {
        if (Object.prototype.hasOwnProperty.call(parent, propertyName)) {
          return parent[propertyName];
        }
        return undefined
    };

  return "\r\n      <!-- If video description exists, display it -->\r\n"
    + ((stack1 = lookupProperty(helpers,"if").call(alias1,((stack1 = ((stack1 = (depth0 != null ? lookupProperty(depth0,"metadata") : depth0)) != null ? lookupProperty(stack1,"video_description") : stack1)) != null ? lookupProperty(stack1,"value") : stack1),{"name":"if","hash":{},"fn":container.program(11, data, 0),"inverse":container.noop,"data":data,"loc":{"start":{"line":12,"column":8},"end":{"line":17,"column":15}}})) != null ? stack1 : "")
    + "\r\n        <!-- Embed video based on selected video size and layout -->\r\n        <div class=\""
    + ((stack1 = (lookupProperty(helpers,"ifCond")||(depth0 && lookupProperty(depth0,"ifCond"))||alias2).call(alias1,((stack1 = ((stack1 = (depth0 != null ? lookupProperty(depth0,"metadata") : depth0)) != null ? lookupProperty(stack1,"video_size") : stack1)) != null ? lookupProperty(stack1,"value") : stack1),"==","eight_col",{"name":"ifCond","hash":{},"fn":container.program(14, data, 0),"inverse":container.program(16, data, 0),"data":data,"loc":{"start":{"line":20,"column":20},"end":{"line":20,"column":120}}})) != null ? stack1 : "")
    + " \r\n          "
    + ((stack1 = (lookupProperty(helpers,"ifCond")||(depth0 && lookupProperty(depth0,"ifCond"))||alias2).call(alias1,((stack1 = ((stack1 = (depth0 != null ? lookupProperty(depth0,"metadata") : depth0)) != null ? lookupProperty(stack1,"stack_options") : stack1)) != null ? lookupProperty(stack1,"value") : stack1),"==","centered",{"name":"ifCond","hash":{},"fn":container.program(18, data, 0),"inverse":container.noop,"data":data,"loc":{"start":{"line":21,"column":10},"end":{"line":21,"column":97}}})) != null ? stack1 : "")
    + "\">\r\n\r\n          <!-- Only embed the video if a video ID is provided -->\r\n"
    + ((stack1 = lookupProperty(helpers,"if").call(alias1,((stack1 = ((stack1 = (depth0 != null ? lookupProperty(depth0,"metadata") : depth0)) != null ? lookupProperty(stack1,"video_id") : stack1)) != null ? lookupProperty(stack1,"value") : stack1),{"name":"if","hash":{},"fn":container.program(20, data, 0),"inverse":container.noop,"data":data,"loc":{"start":{"line":24,"column":10},"end":{"line":84,"column":17}}})) != null ? stack1 : "")
    + "        </div>\r\n";
},"11":function(container,depth0,helpers,partials,data) {
    var stack1, lookupProperty = container.lookupProperty || function(parent, propertyName) {
        if (Object.prototype.hasOwnProperty.call(parent, propertyName)) {
          return parent[propertyName];
        }
        return undefined
    };

  return "          <div class=\"col-xs-12 \r\n            "
    + ((stack1 = (lookupProperty(helpers,"ifCond")||(depth0 && lookupProperty(depth0,"ifCond"))||container.hooks.helperMissing).call(depth0 != null ? depth0 : (container.nullContext || {}),((stack1 = ((stack1 = (depth0 != null ? lookupProperty(depth0,"metadata") : depth0)) != null ? lookupProperty(stack1,"stack_options") : stack1)) != null ? lookupProperty(stack1,"value") : stack1),"==","centered",{"name":"ifCond","hash":{},"fn":container.program(12, data, 0),"inverse":container.noop,"data":data,"loc":{"start":{"line":14,"column":12},"end":{"line":14,"column":117}}})) != null ? stack1 : "")
    + "\">\r\n            "
    + ((stack1 = container.lambda(((stack1 = ((stack1 = (depth0 != null ? lookupProperty(depth0,"metadata") : depth0)) != null ? lookupProperty(stack1,"video_description") : stack1)) != null ? lookupProperty(stack1,"value") : stack1), depth0)) != null ? stack1 : "")
    + "\r\n          </div>\r\n";
},"12":function(container,depth0,helpers,partials,data) {
    return "qld__video__copy--centered text-center";
},"14":function(container,depth0,helpers,partials,data) {
    return "col-xs-12 col-lg-8";
},"16":function(container,depth0,helpers,partials,data) {
    return "col-xs-12";
},"18":function(container,depth0,helpers,partials,data) {
    return "qld__video__centered";
},"20":function(container,depth0,helpers,partials,data) {
    var stack1, alias1=depth0 != null ? depth0 : (container.nullContext || {}), alias2=container.hooks.helperMissing, alias3=container.lambda, alias4=container.escapeExpression, lookupProperty = container.lookupProperty || function(parent, propertyName) {
        if (Object.prototype.hasOwnProperty.call(parent, propertyName)) {
          return parent[propertyName];
        }
        return undefined
    };

  return "            <div class=\"qld__video__player--embed\">\r\n              <div class=\"qld__video__player--embed--container\">\r\n                <!-- Embed YouTube or Vimeo based on the selected video type -->\r\n                    <iframe "
    + ((stack1 = (lookupProperty(helpers,"ifCond")||(depth0 && lookupProperty(depth0,"ifCond"))||alias2).call(alias1,((stack1 = ((stack1 = (depth0 != null ? lookupProperty(depth0,"metadata") : depth0)) != null ? lookupProperty(stack1,"video_type") : stack1)) != null ? lookupProperty(stack1,"value") : stack1),"==","youtube",{"name":"ifCond","hash":{},"fn":container.program(21, data, 0),"inverse":container.noop,"data":data,"loc":{"start":{"line":28,"column":28},"end":{"line":28,"column":154}}})) != null ? stack1 : "")
    + "\r\n                    "
    + ((stack1 = (lookupProperty(helpers,"ifCond")||(depth0 && lookupProperty(depth0,"ifCond"))||alias2).call(alias1,((stack1 = ((stack1 = (depth0 != null ? lookupProperty(depth0,"metadata") : depth0)) != null ? lookupProperty(stack1,"video_type") : stack1)) != null ? lookupProperty(stack1,"value") : stack1),"==","vimeo",{"name":"ifCond","hash":{},"fn":container.program(23, data, 0),"inverse":container.noop,"data":data,"loc":{"start":{"line":29,"column":20},"end":{"line":29,"column":145}}})) != null ? stack1 : "")
    + "\r\n                    frameborder=\"0\"\r\n                    allow=\"fullscreen\"\r\n                    allowfullscreen\r\n                    title=\""
    + alias4(alias3(((stack1 = ((stack1 = (depth0 != null ? lookupProperty(depth0,"metadata") : depth0)) != null ? lookupProperty(stack1,"video_caption") : stack1)) != null ? lookupProperty(stack1,"value") : stack1), depth0))
    + " - Video\"\r\n                    aria-label=\"Video: "
    + alias4(alias3(((stack1 = ((stack1 = (depth0 != null ? lookupProperty(depth0,"metadata") : depth0)) != null ? lookupProperty(stack1,"video_caption") : stack1)) != null ? lookupProperty(stack1,"value") : stack1), depth0))
    + "\" \r\n                    class=\"qld__video__player--iframe\">\r\n                    </iframe>\r\n              </div>\r\n\r\n              <!-- Display video caption and duration if provided -->\r\n              <div class=\"qld__video__player--summary\">\r\n"
    + ((stack1 = (lookupProperty(helpers,"ifAny")||(depth0 && lookupProperty(depth0,"ifAny"))||alias2).call(alias1,((stack1 = ((stack1 = (depth0 != null ? lookupProperty(depth0,"metadata") : depth0)) != null ? lookupProperty(stack1,"video_caption") : stack1)) != null ? lookupProperty(stack1,"value") : stack1),((stack1 = ((stack1 = (depth0 != null ? lookupProperty(depth0,"metadata") : depth0)) != null ? lookupProperty(stack1,"video_duration") : stack1)) != null ? lookupProperty(stack1,"value") : stack1),{"name":"ifAny","hash":{},"fn":container.program(25, data, 0),"inverse":container.noop,"data":data,"loc":{"start":{"line":41,"column":16},"end":{"line":50,"column":26}}})) != null ? stack1 : "")
    + "\r\n                <!-- Display transcript link if transcript option is 'link' -->\r\n"
    + ((stack1 = (lookupProperty(helpers,"ifCond")||(depth0 && lookupProperty(depth0,"ifCond"))||alias2).call(alias1,((stack1 = ((stack1 = (depth0 != null ? lookupProperty(depth0,"metadata") : depth0)) != null ? lookupProperty(stack1,"transcript_options") : stack1)) != null ? lookupProperty(stack1,"value") : stack1),"==","link",{"name":"ifCond","hash":{},"fn":container.program(28, data, 0),"inverse":container.noop,"data":data,"loc":{"start":{"line":53,"column":16},"end":{"line":62,"column":27}}})) != null ? stack1 : "")
    + "\r\n                <!-- Display transcript accordion if transcript option is 'accordion' -->\r\n"
    + ((stack1 = (lookupProperty(helpers,"ifCond")||(depth0 && lookupProperty(depth0,"ifCond"))||alias2).call(alias1,((stack1 = ((stack1 = (depth0 != null ? lookupProperty(depth0,"metadata") : depth0)) != null ? lookupProperty(stack1,"transcript_options") : stack1)) != null ? lookupProperty(stack1,"value") : stack1),"==","accordion",{"name":"ifCond","hash":{},"fn":container.program(31, data, 0),"inverse":container.noop,"data":data,"loc":{"start":{"line":65,"column":16},"end":{"line":81,"column":25}}})) != null ? stack1 : "")
    + "              </div>\r\n            </div>\r\n";
},"21":function(container,depth0,helpers,partials,data) {
    var stack1, lookupProperty = container.lookupProperty || function(parent, propertyName) {
        if (Object.prototype.hasOwnProperty.call(parent, propertyName)) {
          return parent[propertyName];
        }
        return undefined
    };

  return "src=\"https://www.youtube.com/embed/"
    + container.escapeExpression(container.lambda(((stack1 = ((stack1 = (depth0 != null ? lookupProperty(depth0,"metadata") : depth0)) != null ? lookupProperty(stack1,"video_id") : stack1)) != null ? lookupProperty(stack1,"value") : stack1), depth0))
    + "\"";
},"23":function(container,depth0,helpers,partials,data) {
    var stack1, lookupProperty = container.lookupProperty || function(parent, propertyName) {
        if (Object.prototype.hasOwnProperty.call(parent, propertyName)) {
          return parent[propertyName];
        }
        return undefined
    };

  return "src=\"https://player.vimeo.com/video/"
    + container.escapeExpression(container.lambda(((stack1 = ((stack1 = (depth0 != null ? lookupProperty(depth0,"metadata") : depth0)) != null ? lookupProperty(stack1,"video_id") : stack1)) != null ? lookupProperty(stack1,"value") : stack1), depth0))
    + "\"";
},"25":function(container,depth0,helpers,partials,data) {
    var stack1, lookupProperty = container.lookupProperty || function(parent, propertyName) {
        if (Object.prototype.hasOwnProperty.call(parent, propertyName)) {
          return parent[propertyName];
        }
        return undefined
    };

  return "                  <div class=\"qld__video__player--caption\">\r\n                    "
    + container.escapeExpression(container.lambda(((stack1 = ((stack1 = (depth0 != null ? lookupProperty(depth0,"metadata") : depth0)) != null ? lookupProperty(stack1,"video_caption") : stack1)) != null ? lookupProperty(stack1,"value") : stack1), depth0))
    + "\r\n"
    + ((stack1 = lookupProperty(helpers,"if").call(depth0 != null ? depth0 : (container.nullContext || {}),((stack1 = ((stack1 = (depth0 != null ? lookupProperty(depth0,"metadata") : depth0)) != null ? lookupProperty(stack1,"video_duration") : stack1)) != null ? lookupProperty(stack1,"value") : stack1),{"name":"if","hash":{},"fn":container.program(26, data, 0),"inverse":container.noop,"data":data,"loc":{"start":{"line":44,"column":20},"end":{"line":48,"column":27}}})) != null ? stack1 : "")
    + "                  </div>\r\n";
},"26":function(container,depth0,helpers,partials,data) {
    var stack1, lookupProperty = container.lookupProperty || function(parent, propertyName) {
        if (Object.prototype.hasOwnProperty.call(parent, propertyName)) {
          return parent[propertyName];
        }
        return undefined
    };

  return "                      <div class=\"qld__video__player--duration\">\r\n                        <i class=\"fal fa-clock\"></i>Duration: "
    + container.escapeExpression(container.lambda(((stack1 = ((stack1 = (depth0 != null ? lookupProperty(depth0,"metadata") : depth0)) != null ? lookupProperty(stack1,"video_duration") : stack1)) != null ? lookupProperty(stack1,"value") : stack1), depth0))
    + "\r\n                      </div>\r\n";
},"28":function(container,depth0,helpers,partials,data) {
    var stack1, lookupProperty = container.lookupProperty || function(parent, propertyName) {
        if (Object.prototype.hasOwnProperty.call(parent, propertyName)) {
          return parent[propertyName];
        }
        return undefined
    };

  return ((stack1 = lookupProperty(helpers,"if").call(depth0 != null ? depth0 : (container.nullContext || {}),((stack1 = ((stack1 = (depth0 != null ? lookupProperty(depth0,"metadata") : depth0)) != null ? lookupProperty(stack1,"transcript_link") : stack1)) != null ? lookupProperty(stack1,"value") : stack1),{"name":"if","hash":{},"fn":container.program(29, data, 0),"inverse":container.noop,"data":data,"loc":{"start":{"line":54,"column":18},"end":{"line":61,"column":25}}})) != null ? stack1 : "");
},"29":function(container,depth0,helpers,partials,data) {
    var stack1, lookupProperty = container.lookupProperty || function(parent, propertyName) {
        if (Object.prototype.hasOwnProperty.call(parent, propertyName)) {
          return parent[propertyName];
        }
        return undefined
    };

  return "                    <div class=\"qld__video__player__transcript\">\r\n                      <div class=\"qld__video__player__transcript-link\">\r\n                        <i class=\"fal fa-arrow-right-long\"></i>\r\n                        <a href=\"%globals_asset_assetid:"
    + container.escapeExpression(container.lambda(((stack1 = ((stack1 = (depth0 != null ? lookupProperty(depth0,"metadata") : depth0)) != null ? lookupProperty(stack1,"transcript_link") : stack1)) != null ? lookupProperty(stack1,"value") : stack1), depth0))
    + "^as_asset:asset_url%\">View transcript</a>\r\n                      </div>\r\n                    </div>\r\n";
},"31":function(container,depth0,helpers,partials,data) {
    var stack1, lookupProperty = container.lookupProperty || function(parent, propertyName) {
        if (Object.prototype.hasOwnProperty.call(parent, propertyName)) {
          return parent[propertyName];
        }
        return undefined
    };

  return ((stack1 = lookupProperty(helpers,"if").call(depth0 != null ? depth0 : (container.nullContext || {}),((stack1 = ((stack1 = (depth0 != null ? lookupProperty(depth0,"metadata") : depth0)) != null ? lookupProperty(stack1,"transcript") : stack1)) != null ? lookupProperty(stack1,"value") : stack1),{"name":"if","hash":{},"fn":container.program(32, data, 0),"inverse":container.noop,"data":data,"loc":{"start":{"line":66,"column":16},"end":{"line":80,"column":23}}})) != null ? stack1 : "");
},"32":function(container,depth0,helpers,partials,data) {
    var stack1, helper, alias1=depth0 != null ? depth0 : (container.nullContext || {}), alias2=container.hooks.helperMissing, alias3="function", alias4=container.escapeExpression, lookupProperty = container.lookupProperty || function(parent, propertyName) {
        if (Object.prototype.hasOwnProperty.call(parent, propertyName)) {
          return parent[propertyName];
        }
        return undefined
    };

  return "                  <div class=\"qld__video__player__transcript\">\r\n                    <div class=\"qld__accordion\">\r\n                      <button class=\"qld__accordion__title js-qld__accordion qld__accordion--closed\"\r\n                              aria-controls=\"accordion-group-"
    + alias4(((helper = (helper = lookupProperty(helpers,"assetid") || (depth0 != null ? lookupProperty(depth0,"assetid") : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"assetid","hash":{},"data":data,"loc":{"start":{"line":70,"column":61},"end":{"line":70,"column":72}}}) : helper)))
    + "\" aria-expanded=\"false\">\r\n                        <i class=\"fal fa-file-lines\"></i>Show transcript\r\n                      </button>\r\n                      <div class=\"qld__accordion__body qld__accordion--closed\" id=\"accordion-group-"
    + alias4(((helper = (helper = lookupProperty(helpers,"assetid") || (depth0 != null ? lookupProperty(depth0,"assetid") : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"assetid","hash":{},"data":data,"loc":{"start":{"line":73,"column":99},"end":{"line":73,"column":110}}}) : helper)))
    + "\">\r\n                        <div class=\"qld__accordion__body-wrapper\">\r\n                          "
    + ((stack1 = container.lambda(((stack1 = ((stack1 = (depth0 != null ? lookupProperty(depth0,"metadata") : depth0)) != null ? lookupProperty(stack1,"transcript") : stack1)) != null ? lookupProperty(stack1,"value") : stack1), depth0)) != null ? stack1 : "")
    + "\r\n                        </div>\r\n                      </div>\r\n                    </div>\r\n                  </div>\r\n";
},"34":function(container,depth0,helpers,partials,data) {
    var stack1, alias1=depth0 != null ? depth0 : (container.nullContext || {}), lookupProperty = container.lookupProperty || function(parent, propertyName) {
        if (Object.prototype.hasOwnProperty.call(parent, propertyName)) {
          return parent[propertyName];
        }
        return undefined
    };

  return "        <div class=\"col-xs-12 col-lg-6\">\r\n"
    + ((stack1 = lookupProperty(helpers,"if").call(alias1,((stack1 = ((stack1 = (depth0 != null ? lookupProperty(depth0,"metadata") : depth0)) != null ? lookupProperty(stack1,"video_description") : stack1)) != null ? lookupProperty(stack1,"value") : stack1),{"name":"if","hash":{},"fn":container.program(35, data, 0),"inverse":container.noop,"data":data,"loc":{"start":{"line":91,"column":10},"end":{"line":93,"column":17}}})) != null ? stack1 : "")
    + "        </div>\r\n        <div class=\"col-xs-12 col-lg-6\">\r\n          <!-- Embed the video if a video ID exists -->\r\n"
    + ((stack1 = lookupProperty(helpers,"if").call(alias1,((stack1 = ((stack1 = (depth0 != null ? lookupProperty(depth0,"metadata") : depth0)) != null ? lookupProperty(stack1,"video_id") : stack1)) != null ? lookupProperty(stack1,"value") : stack1),{"name":"if","hash":{},"fn":container.program(37, data, 0),"inverse":container.noop,"data":data,"loc":{"start":{"line":97,"column":10},"end":{"line":153,"column":17}}})) != null ? stack1 : "")
    + "        </div>\r\n";
},"35":function(container,depth0,helpers,partials,data) {
    var stack1, lookupProperty = container.lookupProperty || function(parent, propertyName) {
        if (Object.prototype.hasOwnProperty.call(parent, propertyName)) {
          return parent[propertyName];
        }
        return undefined
    };

  return "            "
    + ((stack1 = container.lambda(((stack1 = ((stack1 = (depth0 != null ? lookupProperty(depth0,"metadata") : depth0)) != null ? lookupProperty(stack1,"video_description") : stack1)) != null ? lookupProperty(stack1,"value") : stack1), depth0)) != null ? stack1 : "")
    + "\r\n";
},"37":function(container,depth0,helpers,partials,data) {
    var stack1, alias1=depth0 != null ? depth0 : (container.nullContext || {}), alias2=container.hooks.helperMissing, alias3=container.lambda, alias4=container.escapeExpression, lookupProperty = container.lookupProperty || function(parent, propertyName) {
        if (Object.prototype.hasOwnProperty.call(parent, propertyName)) {
          return parent[propertyName];
        }
        return undefined
    };

  return "            <div class=\"qld__video__player--embed\">\r\n              <div class=\"qld__video__player--embed--container\">\r\n                <iframe "
    + ((stack1 = (lookupProperty(helpers,"ifCond")||(depth0 && lookupProperty(depth0,"ifCond"))||alias2).call(alias1,((stack1 = ((stack1 = (depth0 != null ? lookupProperty(depth0,"metadata") : depth0)) != null ? lookupProperty(stack1,"video_type") : stack1)) != null ? lookupProperty(stack1,"value") : stack1),"==","youtube",{"name":"ifCond","hash":{},"fn":container.program(21, data, 0),"inverse":container.noop,"data":data,"loc":{"start":{"line":100,"column":24},"end":{"line":100,"column":150}}})) != null ? stack1 : "")
    + "\r\n                "
    + ((stack1 = (lookupProperty(helpers,"ifCond")||(depth0 && lookupProperty(depth0,"ifCond"))||alias2).call(alias1,((stack1 = ((stack1 = (depth0 != null ? lookupProperty(depth0,"metadata") : depth0)) != null ? lookupProperty(stack1,"video_type") : stack1)) != null ? lookupProperty(stack1,"value") : stack1),"==","vimeo",{"name":"ifCond","hash":{},"fn":container.program(23, data, 0),"inverse":container.noop,"data":data,"loc":{"start":{"line":101,"column":16},"end":{"line":101,"column":141}}})) != null ? stack1 : "")
    + "\r\n                frameborder=\"0\"\r\n                allow=\"fullscreen\"\r\n                allowfullscreen\r\n                title=\""
    + alias4(alias3(((stack1 = ((stack1 = (depth0 != null ? lookupProperty(depth0,"metadata") : depth0)) != null ? lookupProperty(stack1,"video_caption") : stack1)) != null ? lookupProperty(stack1,"value") : stack1), depth0))
    + " - Video\"\r\n                aria-label=\"Video: "
    + alias4(alias3(((stack1 = ((stack1 = (depth0 != null ? lookupProperty(depth0,"metadata") : depth0)) != null ? lookupProperty(stack1,"video_caption") : stack1)) != null ? lookupProperty(stack1,"value") : stack1), depth0))
    + "\" \r\n                class=\"qld__video__player--iframe\">\r\n                </iframe>\r\n              </div>\r\n              <div class=\"qld__video__player--summary\">\r\n"
    + ((stack1 = (lookupProperty(helpers,"ifAny")||(depth0 && lookupProperty(depth0,"ifAny"))||alias2).call(alias1,((stack1 = ((stack1 = (depth0 != null ? lookupProperty(depth0,"metadata") : depth0)) != null ? lookupProperty(stack1,"video_caption") : stack1)) != null ? lookupProperty(stack1,"value") : stack1),((stack1 = ((stack1 = (depth0 != null ? lookupProperty(depth0,"metadata") : depth0)) != null ? lookupProperty(stack1,"video_duration") : stack1)) != null ? lookupProperty(stack1,"value") : stack1),{"name":"ifAny","hash":{},"fn":container.program(25, data, 0),"inverse":container.noop,"data":data,"loc":{"start":{"line":111,"column":16},"end":{"line":120,"column":26}}})) != null ? stack1 : "")
    + "\r\n                <!-- Display transcript link or accordion based on options -->\r\n"
    + ((stack1 = (lookupProperty(helpers,"ifCond")||(depth0 && lookupProperty(depth0,"ifCond"))||alias2).call(alias1,((stack1 = ((stack1 = (depth0 != null ? lookupProperty(depth0,"metadata") : depth0)) != null ? lookupProperty(stack1,"transcript_options") : stack1)) != null ? lookupProperty(stack1,"value") : stack1),"==","link",{"name":"ifCond","hash":{},"fn":container.program(28, data, 0),"inverse":container.noop,"data":data,"loc":{"start":{"line":123,"column":16},"end":{"line":132,"column":27}}})) != null ? stack1 : "")
    + "\r\n"
    + ((stack1 = (lookupProperty(helpers,"ifCond")||(depth0 && lookupProperty(depth0,"ifCond"))||alias2).call(alias1,((stack1 = ((stack1 = (depth0 != null ? lookupProperty(depth0,"metadata") : depth0)) != null ? lookupProperty(stack1,"transcript_options") : stack1)) != null ? lookupProperty(stack1,"value") : stack1),"==","accordion",{"name":"ifCond","hash":{},"fn":container.program(38, data, 0),"inverse":container.noop,"data":data,"loc":{"start":{"line":134,"column":16},"end":{"line":150,"column":27}}})) != null ? stack1 : "")
    + "                </div>\r\n            </div>\r\n";
},"38":function(container,depth0,helpers,partials,data) {
    var stack1, lookupProperty = container.lookupProperty || function(parent, propertyName) {
        if (Object.prototype.hasOwnProperty.call(parent, propertyName)) {
          return parent[propertyName];
        }
        return undefined
    };

  return ((stack1 = lookupProperty(helpers,"if").call(depth0 != null ? depth0 : (container.nullContext || {}),((stack1 = ((stack1 = (depth0 != null ? lookupProperty(depth0,"metadata") : depth0)) != null ? lookupProperty(stack1,"transcript") : stack1)) != null ? lookupProperty(stack1,"value") : stack1),{"name":"if","hash":{},"fn":container.program(39, data, 0),"inverse":container.noop,"data":data,"loc":{"start":{"line":135,"column":18},"end":{"line":149,"column":25}}})) != null ? stack1 : "");
},"39":function(container,depth0,helpers,partials,data) {
    var stack1, helper, alias1=depth0 != null ? depth0 : (container.nullContext || {}), alias2=container.hooks.helperMissing, alias3="function", alias4=container.escapeExpression, lookupProperty = container.lookupProperty || function(parent, propertyName) {
        if (Object.prototype.hasOwnProperty.call(parent, propertyName)) {
          return parent[propertyName];
        }
        return undefined
    };

  return "                    <div class=\"qld__video__player__transcript\">\r\n                      <div class=\"qld__accordion\">\r\n                        <button class=\"qld__accordion__title js-qld__accordion qld__accordion--closed\"\r\n                                aria-controls=\"accordion-group-"
    + alias4(((helper = (helper = lookupProperty(helpers,"assetid") || (depth0 != null ? lookupProperty(depth0,"assetid") : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"assetid","hash":{},"data":data,"loc":{"start":{"line":139,"column":63},"end":{"line":139,"column":74}}}) : helper)))
    + "\" aria-expanded=\"false\">\r\n                          <i class=\"fal fa-file-lines\"></i>Show transcript\r\n                        </button>\r\n                        <div class=\"qld__accordion__body qld__accordion--closed\" id=\"accordion-group-"
    + alias4(((helper = (helper = lookupProperty(helpers,"assetid") || (depth0 != null ? lookupProperty(depth0,"assetid") : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"assetid","hash":{},"data":data,"loc":{"start":{"line":142,"column":101},"end":{"line":142,"column":112}}}) : helper)))
    + "\">\r\n                          <div class=\"qld__accordion__body-wrapper\">\r\n                            "
    + ((stack1 = container.lambda(((stack1 = ((stack1 = (depth0 != null ? lookupProperty(depth0,"metadata") : depth0)) != null ? lookupProperty(stack1,"transcript") : stack1)) != null ? lookupProperty(stack1,"value") : stack1), depth0)) != null ? stack1 : "")
    + "\r\n                          </div>\r\n                        </div>\r\n                      </div>\r\n                    </div>\r\n";
},"compiler":[8,">= 4.3.0"],"main":function(container,depth0,helpers,partials,data) {
    var stack1, lookupProperty = container.lookupProperty || function(parent, propertyName) {
        if (Object.prototype.hasOwnProperty.call(parent, propertyName)) {
          return parent[propertyName];
        }
        return undefined
    };

  return ((stack1 = lookupProperty(helpers,"with").call(depth0 != null ? depth0 : (container.nullContext || {}),((stack1 = (depth0 != null ? lookupProperty(depth0,"component") : depth0)) != null ? lookupProperty(stack1,"data") : stack1),{"name":"with","hash":{},"fn":container.program(1, data, 0),"inverse":container.noop,"data":data,"loc":{"start":{"line":1,"column":0},"end":{"line":159,"column":9}}})) != null ? stack1 : "");
},"useData":true}