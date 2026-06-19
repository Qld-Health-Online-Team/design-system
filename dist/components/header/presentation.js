{"1":function(container,depth0,helpers,partials,data) {
    var stack1, alias1=depth0 != null ? depth0 : (container.nullContext || {}), lookupProperty = container.lookupProperty || function(parent, propertyName) {
        if (Object.prototype.hasOwnProperty.call(parent, propertyName)) {
          return parent[propertyName];
        }
        return undefined
    };

  return "  <div\r\n    class=\"qld__header__contained-banner\"\r\n"
    + ((stack1 = lookupProperty(helpers,"if").call(alias1,((stack1 = ((stack1 = ((stack1 = (depth0 != null ? lookupProperty(depth0,"site") : depth0)) != null ? lookupProperty(stack1,"metadata") : stack1)) != null ? lookupProperty(stack1,"imageContainedLayoutBackground") : stack1)) != null ? lookupProperty(stack1,"value") : stack1),{"name":"if","hash":{},"fn":container.program(2, data, 0),"inverse":container.noop,"data":data,"loc":{"start":{"line":4,"column":4},"end":{"line":6,"column":11}}})) != null ? stack1 : "")
    + ((stack1 = lookupProperty(helpers,"if").call(alias1,((stack1 = ((stack1 = ((stack1 = (depth0 != null ? lookupProperty(depth0,"site") : depth0)) != null ? lookupProperty(stack1,"metadata") : stack1)) != null ? lookupProperty(stack1,"imageContainedLayoutTexture") : stack1)) != null ? lookupProperty(stack1,"value") : stack1),{"name":"if","hash":{},"fn":container.program(4, data, 0),"inverse":container.noop,"data":data,"loc":{"start":{"line":7,"column":4},"end":{"line":9,"column":11}}})) != null ? stack1 : "")
    + "  ></div>\r\n";
},"2":function(container,depth0,helpers,partials,data) {
    var stack1, alias1=container.lambda, alias2=container.escapeExpression, lookupProperty = container.lookupProperty || function(parent, propertyName) {
        if (Object.prototype.hasOwnProperty.call(parent, propertyName)) {
          return parent[propertyName];
        }
        return undefined
    };

  return "      style=\"background-image:url(./?a="
    + alias2(alias1(((stack1 = ((stack1 = ((stack1 = (depth0 != null ? lookupProperty(depth0,"site") : depth0)) != null ? lookupProperty(stack1,"metadata") : stack1)) != null ? lookupProperty(stack1,"imageContainedLayoutBackground") : stack1)) != null ? lookupProperty(stack1,"value") : stack1), depth0))
    + "); background-position:"
    + alias2(alias1(((stack1 = ((stack1 = ((stack1 = (depth0 != null ? lookupProperty(depth0,"site") : depth0)) != null ? lookupProperty(stack1,"metadata") : stack1)) != null ? lookupProperty(stack1,"containedBannerImageTexturePosition") : stack1)) != null ? lookupProperty(stack1,"value") : stack1), depth0))
    + "; background-size:"
    + alias2(alias1(((stack1 = ((stack1 = ((stack1 = (depth0 != null ? lookupProperty(depth0,"site") : depth0)) != null ? lookupProperty(stack1,"metadata") : stack1)) != null ? lookupProperty(stack1,"containedBannerImageTextureSize") : stack1)) != null ? lookupProperty(stack1,"value") : stack1), depth0))
    + "; background-repeat:"
    + alias2(alias1(((stack1 = ((stack1 = ((stack1 = (depth0 != null ? lookupProperty(depth0,"site") : depth0)) != null ? lookupProperty(stack1,"metadata") : stack1)) != null ? lookupProperty(stack1,"containedBannerImageTextureRepeat") : stack1)) != null ? lookupProperty(stack1,"value") : stack1), depth0))
    + "; \"\r\n";
},"4":function(container,depth0,helpers,partials,data) {
    var stack1, alias1=container.lambda, alias2=container.escapeExpression, lookupProperty = container.lookupProperty || function(parent, propertyName) {
        if (Object.prototype.hasOwnProperty.call(parent, propertyName)) {
          return parent[propertyName];
        }
        return undefined
    };

  return "      style=\"background-image:url(./?a="
    + alias2(alias1(((stack1 = ((stack1 = ((stack1 = (depth0 != null ? lookupProperty(depth0,"site") : depth0)) != null ? lookupProperty(stack1,"metadata") : stack1)) != null ? lookupProperty(stack1,"imageContainedLayoutTexture") : stack1)) != null ? lookupProperty(stack1,"value") : stack1), depth0))
    + "); background-position:"
    + alias2(alias1(((stack1 = ((stack1 = ((stack1 = (depth0 != null ? lookupProperty(depth0,"site") : depth0)) != null ? lookupProperty(stack1,"metadata") : stack1)) != null ? lookupProperty(stack1,"containedBannerImageTexturePosition") : stack1)) != null ? lookupProperty(stack1,"value") : stack1), depth0))
    + "; background-size:"
    + alias2(alias1(((stack1 = ((stack1 = ((stack1 = (depth0 != null ? lookupProperty(depth0,"site") : depth0)) != null ? lookupProperty(stack1,"metadata") : stack1)) != null ? lookupProperty(stack1,"containedBannerImageTextureSize") : stack1)) != null ? lookupProperty(stack1,"value") : stack1), depth0))
    + "; background-repeat:"
    + alias2(alias1(((stack1 = ((stack1 = ((stack1 = (depth0 != null ? lookupProperty(depth0,"site") : depth0)) != null ? lookupProperty(stack1,"metadata") : stack1)) != null ? lookupProperty(stack1,"containedBannerImageTextureRepeat") : stack1)) != null ? lookupProperty(stack1,"value") : stack1), depth0))
    + ";\"\r\n";
},"6":function(container,depth0,helpers,partials,data) {
    var stack1, lookupProperty = container.lookupProperty || function(parent, propertyName) {
        if (Object.prototype.hasOwnProperty.call(parent, propertyName)) {
          return parent[propertyName];
        }
        return undefined
    };

  return container.escapeExpression(container.lambda(((stack1 = ((stack1 = ((stack1 = (depth0 != null ? lookupProperty(depth0,"site") : depth0)) != null ? lookupProperty(stack1,"metadata") : stack1)) != null ? lookupProperty(stack1,"sitePreHeaderURL") : stack1)) != null ? lookupProperty(stack1,"value") : stack1), depth0));
},"8":function(container,depth0,helpers,partials,data) {
    var stack1, lookupProperty = container.lookupProperty || function(parent, propertyName) {
        if (Object.prototype.hasOwnProperty.call(parent, propertyName)) {
          return parent[propertyName];
        }
        return undefined
    };

  return "./?a="
    + container.escapeExpression(container.lambda(((stack1 = ((stack1 = (depth0 != null ? lookupProperty(depth0,"site") : depth0)) != null ? lookupProperty(stack1,"data") : stack1)) != null ? lookupProperty(stack1,"assetid") : stack1), depth0));
},"10":function(container,depth0,helpers,partials,data) {
    var stack1, lookupProperty = container.lookupProperty || function(parent, propertyName) {
        if (Object.prototype.hasOwnProperty.call(parent, propertyName)) {
          return parent[propertyName];
        }
        return undefined
    };

  return "          <img\r\n            class=\"qld__header__pre-header-brand-image\"\r\n            alt=\"Queensland Government logo\"\r\n            src=\"./?a="
    + container.escapeExpression(container.lambda(((stack1 = ((stack1 = ((stack1 = (depth0 != null ? lookupProperty(depth0,"site") : depth0)) != null ? lookupProperty(stack1,"metadata") : stack1)) != null ? lookupProperty(stack1,"sitePreHeaderLogo") : stack1)) != null ? lookupProperty(stack1,"value") : stack1), depth0))
    + "\"\r\n          />\r\n";
},"12":function(container,depth0,helpers,partials,data) {
    var stack1, lookupProperty = container.lookupProperty || function(parent, propertyName) {
        if (Object.prototype.hasOwnProperty.call(parent, propertyName)) {
          return parent[propertyName];
        }
        return undefined
    };

  return "          <span class=\"qld__header__pre-header-url--mobile\">\r\n            "
    + container.escapeExpression(container.lambda(((stack1 = ((stack1 = ((stack1 = (depth0 != null ? lookupProperty(depth0,"site") : depth0)) != null ? lookupProperty(stack1,"metadata") : stack1)) != null ? lookupProperty(stack1,"sitePreHeaderText") : stack1)) != null ? lookupProperty(stack1,"value") : stack1), depth0))
    + "\r\n          </span>\r\n";
},"14":function(container,depth0,helpers,partials,data) {
    var stack1, alias1=container.lambda, alias2=container.escapeExpression, lookupProperty = container.lookupProperty || function(parent, propertyName) {
        if (Object.prototype.hasOwnProperty.call(parent, propertyName)) {
          return parent[propertyName];
        }
        return undefined
    };

  return "          <a\r\n            class=\"qld__header__cta-link\"\r\n            href=\"./?a="
    + alias2(alias1(((stack1 = ((stack1 = ((stack1 = (depth0 != null ? lookupProperty(depth0,"site") : depth0)) != null ? lookupProperty(stack1,"metadata") : stack1)) != null ? lookupProperty(stack1,"mainNavCtaOne") : stack1)) != null ? lookupProperty(stack1,"value") : stack1), depth0))
    + "\"\r\n          >\r\n"
    + ((stack1 = lookupProperty(helpers,"if").call(depth0 != null ? depth0 : (container.nullContext || {}),((stack1 = ((stack1 = ((stack1 = (depth0 != null ? lookupProperty(depth0,"site") : depth0)) != null ? lookupProperty(stack1,"metadata") : stack1)) != null ? lookupProperty(stack1,"mainNavCtaOneIcon") : stack1)) != null ? lookupProperty(stack1,"value") : stack1),{"name":"if","hash":{},"fn":container.program(15, data, 0),"inverse":container.noop,"data":data,"loc":{"start":{"line":58,"column":12},"end":{"line":70,"column":19}}})) != null ? stack1 : "")
    + "            <span class=\"qld__header__cta-link-text\">\r\n              "
    + alias2(alias1(((stack1 = ((stack1 = ((stack1 = (depth0 != null ? lookupProperty(depth0,"site") : depth0)) != null ? lookupProperty(stack1,"metadata") : stack1)) != null ? lookupProperty(stack1,"mainNavCtaOneText") : stack1)) != null ? lookupProperty(stack1,"value") : stack1), depth0))
    + "\r\n            </span>\r\n          </a>\r\n";
},"15":function(container,depth0,helpers,partials,data) {
    var stack1, alias1=container.lambda, alias2=container.escapeExpression, lookupProperty = container.lookupProperty || function(parent, propertyName) {
        if (Object.prototype.hasOwnProperty.call(parent, propertyName)) {
          return parent[propertyName];
        }
        return undefined
    };

  return "              <span class=\"qld__header__cta-link-icon\">\r\n                <svg\r\n                  class=\"qld__icon\"\r\n                  aria-hidden=\"true\"\r\n                  xmlns=\"http://www.w3.org/2000/svg\"\r\n                >\r\n                  <use\r\n                    href=\""
    + alias2(alias1(((stack1 = ((stack1 = ((stack1 = ((stack1 = (data && lookupProperty(data,"root"))) && lookupProperty(stack1,"site"))) && lookupProperty(stack1,"metadata"))) && lookupProperty(stack1,"coreSiteIcons"))) && lookupProperty(stack1,"value")), depth0))
    + "#"
    + alias2(alias1(((stack1 = ((stack1 = ((stack1 = (depth0 != null ? lookupProperty(depth0,"site") : depth0)) != null ? lookupProperty(stack1,"metadata") : stack1)) != null ? lookupProperty(stack1,"mainNavCtaOneIcon") : stack1)) != null ? lookupProperty(stack1,"value") : stack1), depth0))
    + "\"\r\n                  ></use>\r\n                </svg>\r\n              </span>\r\n";
},"17":function(container,depth0,helpers,partials,data) {
    var stack1, alias1=container.lambda, alias2=container.escapeExpression, lookupProperty = container.lookupProperty || function(parent, propertyName) {
        if (Object.prototype.hasOwnProperty.call(parent, propertyName)) {
          return parent[propertyName];
        }
        return undefined
    };

  return "          <a\r\n            class=\"qld__header__cta-link\"\r\n            href=\"./?a="
    + alias2(alias1(((stack1 = ((stack1 = ((stack1 = (depth0 != null ? lookupProperty(depth0,"site") : depth0)) != null ? lookupProperty(stack1,"metadata") : stack1)) != null ? lookupProperty(stack1,"mainNavCtaTwo") : stack1)) != null ? lookupProperty(stack1,"value") : stack1), depth0))
    + "\"\r\n          >\r\n"
    + ((stack1 = lookupProperty(helpers,"if").call(depth0 != null ? depth0 : (container.nullContext || {}),((stack1 = ((stack1 = ((stack1 = (depth0 != null ? lookupProperty(depth0,"site") : depth0)) != null ? lookupProperty(stack1,"metadata") : stack1)) != null ? lookupProperty(stack1,"mainNavCtaTwoIcon") : stack1)) != null ? lookupProperty(stack1,"value") : stack1),{"name":"if","hash":{},"fn":container.program(18, data, 0),"inverse":container.noop,"data":data,"loc":{"start":{"line":81,"column":12},"end":{"line":93,"column":19}}})) != null ? stack1 : "")
    + "            <span class=\"qld__header__cta-link-text\">\r\n              "
    + alias2(alias1(((stack1 = ((stack1 = ((stack1 = (depth0 != null ? lookupProperty(depth0,"site") : depth0)) != null ? lookupProperty(stack1,"metadata") : stack1)) != null ? lookupProperty(stack1,"mainNavCtaTwoText") : stack1)) != null ? lookupProperty(stack1,"value") : stack1), depth0))
    + "\r\n            </span>\r\n          </a>\r\n";
},"18":function(container,depth0,helpers,partials,data) {
    var stack1, alias1=container.lambda, alias2=container.escapeExpression, lookupProperty = container.lookupProperty || function(parent, propertyName) {
        if (Object.prototype.hasOwnProperty.call(parent, propertyName)) {
          return parent[propertyName];
        }
        return undefined
    };

  return "              <span class=\"qld__header__cta-link-icon\">\r\n                <svg\r\n                  class=\"qld__icon\"\r\n                  aria-hidden=\"true\"\r\n                  xmlns=\"http://www.w3.org/2000/svg\"\r\n                >\r\n                  <use\r\n                    href=\""
    + alias2(alias1(((stack1 = ((stack1 = ((stack1 = ((stack1 = (data && lookupProperty(data,"root"))) && lookupProperty(stack1,"site"))) && lookupProperty(stack1,"metadata"))) && lookupProperty(stack1,"coreSiteIcons"))) && lookupProperty(stack1,"value")), depth0))
    + "#"
    + alias2(alias1(((stack1 = ((stack1 = ((stack1 = (depth0 != null ? lookupProperty(depth0,"site") : depth0)) != null ? lookupProperty(stack1,"metadata") : stack1)) != null ? lookupProperty(stack1,"mainNavCtaTwoIcon") : stack1)) != null ? lookupProperty(stack1,"value") : stack1), depth0))
    + "\"\r\n                  ></use>\r\n                </svg>\r\n              </span>\r\n";
},"20":function(container,depth0,helpers,partials,data) {
    var stack1, alias1=container.lambda, alias2=container.escapeExpression, lookupProperty = container.lookupProperty || function(parent, propertyName) {
        if (Object.prototype.hasOwnProperty.call(parent, propertyName)) {
          return parent[propertyName];
        }
        return undefined
    };

  return "          <button\r\n            class=\"\r\n              qld__header__toggle-main-nav\r\n              qld__main-nav__toggle-search\r\n              qld__main-nav__toggle-search--open\r\n            \"\r\n            aria-controls=\"qld-header-search\"\r\n            aria-expanded=\"false\"\r\n          >\r\n            <svg\r\n              class=\"qld__icon qld__main-nav__toggle-search-icon\"\r\n              aria-hidden=\"true\"\r\n              xmlns=\"http://www.w3.org/2000/svg\"\r\n            >\r\n              <use href=\""
    + alias2(alias1(((stack1 = ((stack1 = ((stack1 = ((stack1 = (data && lookupProperty(data,"root"))) && lookupProperty(stack1,"site"))) && lookupProperty(stack1,"metadata"))) && lookupProperty(stack1,"coreSiteIcons"))) && lookupProperty(stack1,"value")), depth0))
    + "#search\"\r\n              ></use>\r\n            </svg>\r\n            <svg\r\n              class=\"qld__icon qld__main-nav__toggle-search-close-icon\"\r\n              aria-hidden=\"true\"\r\n              xmlns=\"http://www.w3.org/2000/svg\"\r\n            >\r\n              <use href=\""
    + alias2(alias1(((stack1 = ((stack1 = ((stack1 = ((stack1 = (data && lookupProperty(data,"root"))) && lookupProperty(stack1,"site"))) && lookupProperty(stack1,"metadata"))) && lookupProperty(stack1,"coreSiteIcons"))) && lookupProperty(stack1,"value")), depth0))
    + "#close\"\r\n              ></use>\r\n            </svg>\r\n            <span class=\"qld__main-nav__toggle-text\">Search</span>\r\n          </button>\r\n";
},"22":function(container,depth0,helpers,partials,data) {
    var stack1, lookupProperty = container.lookupProperty || function(parent, propertyName) {
        if (Object.prototype.hasOwnProperty.call(parent, propertyName)) {
          return parent[propertyName];
        }
        return undefined
    };

  return "./?a="
    + container.escapeExpression(container.lambda(((stack1 = ((stack1 = ((stack1 = (depth0 != null ? lookupProperty(depth0,"site") : depth0)) != null ? lookupProperty(stack1,"metadata") : stack1)) != null ? lookupProperty(stack1,"siteLogoUrl") : stack1)) != null ? lookupProperty(stack1,"value") : stack1), depth0));
},"24":function(container,depth0,helpers,partials,data) {
    var stack1, lookupProperty = container.lookupProperty || function(parent, propertyName) {
        if (Object.prototype.hasOwnProperty.call(parent, propertyName)) {
          return parent[propertyName];
        }
        return undefined
    };

  return "            <div class=\"qld__header__brand-image\">\r\n"
    + ((stack1 = lookupProperty(helpers,"if").call(depth0 != null ? depth0 : (container.nullContext || {}),((stack1 = ((stack1 = ((stack1 = (depth0 != null ? lookupProperty(depth0,"site") : depth0)) != null ? lookupProperty(stack1,"metadata") : stack1)) != null ? lookupProperty(stack1,"siteLogo") : stack1)) != null ? lookupProperty(stack1,"value") : stack1),{"name":"if","hash":{},"fn":container.program(25, data, 0),"inverse":container.program(27, data, 0),"data":data,"loc":{"start":{"line":159,"column":14},"end":{"line":178,"column":21}}})) != null ? stack1 : "")
    + "            </div>\r\n";
},"25":function(container,depth0,helpers,partials,data) {
    var stack1, lookupProperty = container.lookupProperty || function(parent, propertyName) {
        if (Object.prototype.hasOwnProperty.call(parent, propertyName)) {
          return parent[propertyName];
        }
        return undefined
    };

  return "                <img\r\n                  src=\"./?a="
    + container.escapeExpression(container.lambda(((stack1 = ((stack1 = ((stack1 = (depth0 != null ? lookupProperty(depth0,"site") : depth0)) != null ? lookupProperty(stack1,"metadata") : stack1)) != null ? lookupProperty(stack1,"siteLogo") : stack1)) != null ? lookupProperty(stack1,"value") : stack1), depth0))
    + "\"\r\n                  width=\"170\"\r\n                  height=\"56\"\r\n                  alt=\"Queensland Government logo\"\r\n                />\r\n";
},"27":function(container,depth0,helpers,partials,data) {
    var stack1, lookupProperty = container.lookupProperty || function(parent, propertyName) {
        if (Object.prototype.hasOwnProperty.call(parent, propertyName)) {
          return parent[propertyName];
        }
        return undefined
    };

  return "                <svg\r\n                  xmlns=\"http://www.w3.org/2000/svg\"\r\n                  width=\"170\"\r\n                  height=\"56\"\r\n                  role=\"img\"\r\n                  aria-label=\"Queensland Government logo\"\r\n                >\r\n                  <use\r\n                    href=\"./?a="
    + container.escapeExpression(container.lambda(((stack1 = ((stack1 = ((stack1 = (depth0 != null ? lookupProperty(depth0,"site") : depth0)) != null ? lookupProperty(stack1,"metadata") : stack1)) != null ? lookupProperty(stack1,"siteHeaderDefaultLogo") : stack1)) != null ? lookupProperty(stack1,"value") : stack1), depth0))
    + "#logo\"\r\n                  ></use>\r\n                </svg>\r\n";
},"29":function(container,depth0,helpers,partials,data) {
    var stack1, alias1=container.lambda, alias2=container.escapeExpression, lookupProperty = container.lookupProperty || function(parent, propertyName) {
        if (Object.prototype.hasOwnProperty.call(parent, propertyName)) {
          return parent[propertyName];
        }
        return undefined
    };

  return "            <div class=\"qld__header__site-name\">\r\n              <picture>\r\n"
    + ((stack1 = lookupProperty(helpers,"if").call(depth0 != null ? depth0 : (container.nullContext || {}),((stack1 = ((stack1 = ((stack1 = (depth0 != null ? lookupProperty(depth0,"site") : depth0)) != null ? lookupProperty(stack1,"metadata") : stack1)) != null ? lookupProperty(stack1,"siteLogoSecondaryMobile") : stack1)) != null ? lookupProperty(stack1,"value") : stack1),{"name":"if","hash":{},"fn":container.program(30, data, 0),"inverse":container.program(32, data, 0),"data":data,"loc":{"start":{"line":185,"column":16},"end":{"line":195,"column":23}}})) != null ? stack1 : "")
    + "                <source\r\n                  media=\"(max-width: 3000px)\"\r\n                  srcset=\"./?a="
    + alias2(alias1(((stack1 = ((stack1 = ((stack1 = (depth0 != null ? lookupProperty(depth0,"site") : depth0)) != null ? lookupProperty(stack1,"metadata") : stack1)) != null ? lookupProperty(stack1,"siteLogoSecondary") : stack1)) != null ? lookupProperty(stack1,"value") : stack1), depth0))
    + "\"\r\n                />\r\n                <img\r\n                  class=\"qld__header__secondary-image\"\r\n                  alt=\""
    + alias2(alias1(((stack1 = ((stack1 = ((stack1 = (depth0 != null ? lookupProperty(depth0,"site") : depth0)) != null ? lookupProperty(stack1,"metadata") : stack1)) != null ? lookupProperty(stack1,"siteTitle") : stack1)) != null ? lookupProperty(stack1,"value") : stack1), depth0))
    + "\"\r\n                  src=\"./?a="
    + alias2(alias1(((stack1 = ((stack1 = ((stack1 = (depth0 != null ? lookupProperty(depth0,"site") : depth0)) != null ? lookupProperty(stack1,"metadata") : stack1)) != null ? lookupProperty(stack1,"siteLogoSecondary") : stack1)) != null ? lookupProperty(stack1,"value") : stack1), depth0))
    + "\"\r\n                />\r\n              </picture>\r\n            </div>\r\n";
},"30":function(container,depth0,helpers,partials,data) {
    var stack1, lookupProperty = container.lookupProperty || function(parent, propertyName) {
        if (Object.prototype.hasOwnProperty.call(parent, propertyName)) {
          return parent[propertyName];
        }
        return undefined
    };

  return "                  <source\r\n                    media=\"(max-width: 991px)\"\r\n                    srcset=\"./?a="
    + container.escapeExpression(container.lambda(((stack1 = ((stack1 = ((stack1 = (depth0 != null ? lookupProperty(depth0,"site") : depth0)) != null ? lookupProperty(stack1,"metadata") : stack1)) != null ? lookupProperty(stack1,"siteLogoSecondaryMobile") : stack1)) != null ? lookupProperty(stack1,"value") : stack1), depth0))
    + "\"\r\n                  />\r\n";
},"32":function(container,depth0,helpers,partials,data) {
    var stack1, lookupProperty = container.lookupProperty || function(parent, propertyName) {
        if (Object.prototype.hasOwnProperty.call(parent, propertyName)) {
          return parent[propertyName];
        }
        return undefined
    };

  return "                  <source\r\n                    media=\"(max-width: 991px)\"\r\n                    srcset=\"./?a="
    + container.escapeExpression(container.lambda(((stack1 = ((stack1 = ((stack1 = (depth0 != null ? lookupProperty(depth0,"site") : depth0)) != null ? lookupProperty(stack1,"metadata") : stack1)) != null ? lookupProperty(stack1,"siteLogoSecondary") : stack1)) != null ? lookupProperty(stack1,"value") : stack1), depth0))
    + "\"\r\n                  />\r\n";
},"34":function(container,depth0,helpers,partials,data) {
    var stack1, lookupProperty = container.lookupProperty || function(parent, propertyName) {
        if (Object.prototype.hasOwnProperty.call(parent, propertyName)) {
          return parent[propertyName];
        }
        return undefined
    };

  return "            <div class=\"qld__header__site-name\">\r\n              <span class=\"qld__header__heading\">\r\n                "
    + container.escapeExpression(container.lambda(((stack1 = ((stack1 = ((stack1 = (depth0 != null ? lookupProperty(depth0,"site") : depth0)) != null ? lookupProperty(stack1,"metadata") : stack1)) != null ? lookupProperty(stack1,"siteTitle") : stack1)) != null ? lookupProperty(stack1,"value") : stack1), depth0))
    + "\r\n              </span>\r\n"
    + ((stack1 = lookupProperty(helpers,"if").call(depth0 != null ? depth0 : (container.nullContext || {}),((stack1 = ((stack1 = ((stack1 = (depth0 != null ? lookupProperty(depth0,"site") : depth0)) != null ? lookupProperty(stack1,"metadata") : stack1)) != null ? lookupProperty(stack1,"siteSubline") : stack1)) != null ? lookupProperty(stack1,"value") : stack1),{"name":"if","hash":{},"fn":container.program(35, data, 0),"inverse":container.noop,"data":data,"loc":{"start":{"line":212,"column":14},"end":{"line":216,"column":21}}})) != null ? stack1 : "")
    + "            </div>\r\n";
},"35":function(container,depth0,helpers,partials,data) {
    var stack1, lookupProperty = container.lookupProperty || function(parent, propertyName) {
        if (Object.prototype.hasOwnProperty.call(parent, propertyName)) {
          return parent[propertyName];
        }
        return undefined
    };

  return "                <span class=\"qld__header__subline\">\r\n                  "
    + container.escapeExpression(container.lambda(((stack1 = ((stack1 = ((stack1 = (depth0 != null ? lookupProperty(depth0,"site") : depth0)) != null ? lookupProperty(stack1,"metadata") : stack1)) != null ? lookupProperty(stack1,"siteSubline") : stack1)) != null ? lookupProperty(stack1,"value") : stack1), depth0))
    + "\r\n                </span>\r\n";
},"37":function(container,depth0,helpers,partials,data) {
    var stack1, alias1=container.lambda, alias2=container.escapeExpression, lookupProperty = container.lookupProperty || function(parent, propertyName) {
        if (Object.prototype.hasOwnProperty.call(parent, propertyName)) {
          return parent[propertyName];
        }
        return undefined
    };

  return "        <div id=\"qld-header-search\" class=\"qld__header__search\">\r\n          <div class=\"qld__main-nav__focus-trap-top\"></div>\r\n\r\n          <div class=\"qld__search-form--wrapper\">\r\n            <form\r\n              id=\"search-input-global-header\"\r\n              class=\"qld__search-form\"\r\n              role=\"search\"\r\n              aria-label=\"sitewide\"\r\n              action=\""
    + alias2(alias1(((stack1 = ((stack1 = ((stack1 = (depth0 != null ? lookupProperty(depth0,"site") : depth0)) != null ? lookupProperty(stack1,"metadata") : stack1)) != null ? lookupProperty(stack1,"siteSearchUrl") : stack1)) != null ? lookupProperty(stack1,"value") : stack1), depth0))
    + "\"\r\n            >\r\n              <label\r\n                class=\"qld__label qld__display-lg qld__search-form__label\"\r\n                for=\"search-input-global-header-query\"\r\n              >\r\n                Search this website\r\n              </label>\r\n              <div class=\"qld__search-form__inner\">\r\n                <svg\r\n                  class=\"qld__icon qld__icon--sm qld__search-form__inner-icon\"\r\n                  xmlns=\"http://www.w3.org/2000/svg\"\r\n                  aria-hidden=\"true\"\r\n                >\r\n                  <use\r\n                    href=\""
    + alias2(alias1(((stack1 = ((stack1 = ((stack1 = ((stack1 = (data && lookupProperty(data,"root"))) && lookupProperty(stack1,"site"))) && lookupProperty(stack1,"metadata"))) && lookupProperty(stack1,"coreSiteIcons"))) && lookupProperty(stack1,"value")), depth0))
    + "#search\"\r\n                  ></use>\r\n                </svg>\r\n                <input\r\n                  id=\"search-input-global-header-query\"\r\n                  class=\"qld__text-input data-hj-allow\"\r\n                  type=\"search\"\r\n                  name=\"query\"\r\n                  autocomplete=\"off\"\r\n                  disabled=\"true\"\r\n                />\r\n                <input\r\n                  id=\"name\"\r\n                  class=\"qld__text-input--validation\"\r\n                  type=\"text\"\r\n                  name=\"name\"\r\n                  autocomplete=\"off\"\r\n                  tabindex=\"-1\"\r\n                />\r\n                <div class=\"qld__search-form__btn\">\r\n                  <button\r\n                    class=\"qld__btn qld__btn--search\"\r\n                    type=\"button\"\r\n                    aria-label=\"Search\"\r\n                    disabled=\"true\"\r\n                  >\r\n                    <span class=\"qld__btn__icon\">\r\n                      <svg\r\n                        class=\"qld__icon\"\r\n                        xmlns=\"http://www.w3.org/2000/svg\"\r\n                        aria-hidden=\"true\"\r\n                      >\r\n                        <use\r\n                          href=\""
    + alias2(alias1(((stack1 = ((stack1 = ((stack1 = ((stack1 = (data && lookupProperty(data,"root"))) && lookupProperty(stack1,"site"))) && lookupProperty(stack1,"metadata"))) && lookupProperty(stack1,"coreSiteIcons"))) && lookupProperty(stack1,"value")), depth0))
    + "#search\"\r\n                        ></use>\r\n                      </svg>\r\n                    </span>\r\n                    <span class=\"qld__btn__text\">Search</span>\r\n                  </button>\r\n                </div>\r\n              </div>\r\n            </form>\r\n          </div>\r\n\r\n          <div class=\"qld__main-nav__focus-trap-bottom\"></div>\r\n        </div>\r\n";
},"compiler":[8,">= 4.3.0"],"main":function(container,depth0,helpers,partials,data) {
    var stack1, alias1=depth0 != null ? depth0 : (container.nullContext || {}), alias2=container.hooks.helperMissing, alias3=container.lambda, alias4=container.escapeExpression, lookupProperty = container.lookupProperty || function(parent, propertyName) {
        if (Object.prototype.hasOwnProperty.call(parent, propertyName)) {
          return parent[propertyName];
        }
        return undefined
    };

  return ((stack1 = (lookupProperty(helpers,"ifCond")||(depth0 && lookupProperty(depth0,"ifCond"))||alias2).call(alias1,((stack1 = ((stack1 = ((stack1 = (depth0 != null ? lookupProperty(depth0,"site") : depth0)) != null ? lookupProperty(stack1,"metadata") : stack1)) != null ? lookupProperty(stack1,"defaultBannerContainedBanner") : stack1)) != null ? lookupProperty(stack1,"value") : stack1),"==","qld__banner_contained",{"name":"ifCond","hash":{},"fn":container.program(1, data, 0),"inverse":container.noop,"data":data,"loc":{"start":{"line":1,"column":0},"end":{"line":11,"column":11}}})) != null ? stack1 : "")
    + "<header class=\"qld__header\" role=\"banner\">\r\n  <nav class=\"qld__skip-link\" aria-label=\"skip links\" tabindex=\"-1\">\r\n    <a class=\"qld__skip-link__link\" href=\"#content\">Skip to main content</a>\r\n    <a\r\n      class=\"qld__skip-link__link qld__skip-link__link-desktop\"\r\n      href=\"#main-nav\"\r\n    >\r\n      Skip to main navigation\r\n    </a>\r\n    <a\r\n      class=\"qld__skip-link__link qld__skip-link__link-mobile\"\r\n      href=\"#main-nav-mobile\"\r\n    >\r\n      Skip to main navigation\r\n    </a>\r\n  </nav>\r\n  <div\r\n    class=\"qld__header__pre-header "
    + alias4(alias3(((stack1 = ((stack1 = ((stack1 = (depth0 != null ? lookupProperty(depth0,"site") : depth0)) != null ? lookupProperty(stack1,"metadata") : stack1)) != null ? lookupProperty(stack1,"sitePreHeaderTheme") : stack1)) != null ? lookupProperty(stack1,"value") : stack1), depth0))
    + "\"\r\n  >\r\n    <div class=\"container-fluid\">\r\n      <a\r\n        href=\""
    + ((stack1 = lookupProperty(helpers,"if").call(alias1,((stack1 = ((stack1 = ((stack1 = (depth0 != null ? lookupProperty(depth0,"site") : depth0)) != null ? lookupProperty(stack1,"metadata") : stack1)) != null ? lookupProperty(stack1,"sitePreHeaderURL") : stack1)) != null ? lookupProperty(stack1,"value") : stack1),{"name":"if","hash":{},"fn":container.program(6, data, 0),"inverse":container.program(8, data, 0),"data":data,"loc":{"start":{"line":33,"column":14},"end":{"line":33,"column":143}}})) != null ? stack1 : "")
    + "\"\r\n      >\r\n        <span class=\"qld__header__pre-header-url\">\r\n          "
    + alias4(alias3(((stack1 = ((stack1 = ((stack1 = (depth0 != null ? lookupProperty(depth0,"site") : depth0)) != null ? lookupProperty(stack1,"metadata") : stack1)) != null ? lookupProperty(stack1,"sitePreHeaderText") : stack1)) != null ? lookupProperty(stack1,"value") : stack1), depth0))
    + "\r\n        </span>\r\n"
    + ((stack1 = lookupProperty(helpers,"if").call(alias1,((stack1 = ((stack1 = ((stack1 = (depth0 != null ? lookupProperty(depth0,"site") : depth0)) != null ? lookupProperty(stack1,"metadata") : stack1)) != null ? lookupProperty(stack1,"sitePreHeaderLogo") : stack1)) != null ? lookupProperty(stack1,"value") : stack1),{"name":"if","hash":{},"fn":container.program(10, data, 0),"inverse":container.program(12, data, 0),"data":data,"loc":{"start":{"line":38,"column":8},"end":{"line":48,"column":15}}})) != null ? stack1 : "")
    + "\r\n      </a>\r\n\r\n      <div class=\"qld__header__cta-wrapper\">\r\n"
    + ((stack1 = lookupProperty(helpers,"if").call(alias1,((stack1 = ((stack1 = ((stack1 = (depth0 != null ? lookupProperty(depth0,"site") : depth0)) != null ? lookupProperty(stack1,"metadata") : stack1)) != null ? lookupProperty(stack1,"mainNavCtaOne") : stack1)) != null ? lookupProperty(stack1,"value") : stack1),{"name":"if","hash":{},"fn":container.program(14, data, 0),"inverse":container.noop,"data":data,"loc":{"start":{"line":53,"column":8},"end":{"line":75,"column":15}}})) != null ? stack1 : "")
    + ((stack1 = lookupProperty(helpers,"if").call(alias1,((stack1 = ((stack1 = ((stack1 = (depth0 != null ? lookupProperty(depth0,"site") : depth0)) != null ? lookupProperty(stack1,"metadata") : stack1)) != null ? lookupProperty(stack1,"mainNavCtaTwo") : stack1)) != null ? lookupProperty(stack1,"value") : stack1),{"name":"if","hash":{},"fn":container.program(17, data, 0),"inverse":container.noop,"data":data,"loc":{"start":{"line":76,"column":8},"end":{"line":98,"column":15}}})) != null ? stack1 : "")
    + "      </div>\r\n\r\n      <div class=\"qld__header__main-nav-controls\">\r\n"
    + ((stack1 = lookupProperty(helpers,"if").call(alias1,((stack1 = ((stack1 = ((stack1 = (depth0 != null ? lookupProperty(depth0,"site") : depth0)) != null ? lookupProperty(stack1,"metadata") : stack1)) != null ? lookupProperty(stack1,"siteSearchAsset") : stack1)) != null ? lookupProperty(stack1,"value") : stack1),{"name":"if","hash":{},"fn":container.program(20, data, 0),"inverse":container.noop,"data":data,"loc":{"start":{"line":102,"column":8},"end":{"line":130,"column":15}}})) != null ? stack1 : "")
    + "        <button\r\n          id=\"main-nav-mobile\"\r\n          class=\"qld__header__toggle-main-nav qld__main-nav__toggle--open\"\r\n          aria-controls=\"main-nav\"\r\n        >\r\n          <svg\r\n            class=\"qld__icon\"\r\n            aria-hidden=\"true\"\r\n            xmlns=\"http://www.w3.org/2000/svg\"\r\n          >\r\n            <use href=\""
    + alias4(alias3(((stack1 = ((stack1 = ((stack1 = ((stack1 = (data && lookupProperty(data,"root"))) && lookupProperty(stack1,"site"))) && lookupProperty(stack1,"metadata"))) && lookupProperty(stack1,"coreSiteIcons"))) && lookupProperty(stack1,"value")), depth0))
    + "#menu\"\r\n            ></use>\r\n          </svg>\r\n          <span class=\"qld__main-nav__toggle-text\">Menu</span>\r\n        </button>\r\n      </div>\r\n    </div>\r\n  </div>\r\n\r\n  <div class=\"qld__header__main "
    + alias4(alias3(((stack1 = ((stack1 = ((stack1 = (depth0 != null ? lookupProperty(depth0,"site") : depth0)) != null ? lookupProperty(stack1,"metadata") : stack1)) != null ? lookupProperty(stack1,"siteHeaderMainTheme") : stack1)) != null ? lookupProperty(stack1,"value") : stack1), depth0))
    + "\">\r\n    <div class=\"container-fluid\">\r\n\r\n      <div class=\"qld__header__brand\">\r\n        <a\r\n          href=\""
    + ((stack1 = lookupProperty(helpers,"if").call(alias1,((stack1 = ((stack1 = ((stack1 = (depth0 != null ? lookupProperty(depth0,"site") : depth0)) != null ? lookupProperty(stack1,"metadata") : stack1)) != null ? lookupProperty(stack1,"siteLogoUrl") : stack1)) != null ? lookupProperty(stack1,"value") : stack1),{"name":"if","hash":{},"fn":container.program(22, data, 0),"inverse":container.program(8, data, 0),"data":data,"loc":{"start":{"line":155,"column":16},"end":{"line":155,"column":140}}})) != null ? stack1 : "")
    + "\"\r\n        >\r\n"
    + ((stack1 = (lookupProperty(helpers,"ifCond")||(depth0 && lookupProperty(depth0,"ifCond"))||alias2).call(alias1,((stack1 = ((stack1 = ((stack1 = (depth0 != null ? lookupProperty(depth0,"site") : depth0)) != null ? lookupProperty(stack1,"metadata") : stack1)) != null ? lookupProperty(stack1,"siteShowLogo") : stack1)) != null ? lookupProperty(stack1,"value") : stack1),"==","yes",{"name":"ifCond","hash":{},"fn":container.program(24, data, 0),"inverse":container.noop,"data":data,"loc":{"start":{"line":157,"column":10},"end":{"line":180,"column":21}}})) != null ? stack1 : "")
    + "\r\n"
    + ((stack1 = lookupProperty(helpers,"if").call(alias1,((stack1 = ((stack1 = ((stack1 = (depth0 != null ? lookupProperty(depth0,"site") : depth0)) != null ? lookupProperty(stack1,"metadata") : stack1)) != null ? lookupProperty(stack1,"siteLogoSecondary") : stack1)) != null ? lookupProperty(stack1,"value") : stack1),{"name":"if","hash":{},"fn":container.program(29, data, 0),"inverse":container.program(34, data, 0),"data":data,"loc":{"start":{"line":182,"column":10},"end":{"line":218,"column":17}}})) != null ? stack1 : "")
    + "        </a>\r\n\r\n      </div>\r\n\r\n"
    + ((stack1 = lookupProperty(helpers,"if").call(alias1,((stack1 = ((stack1 = ((stack1 = (depth0 != null ? lookupProperty(depth0,"site") : depth0)) != null ? lookupProperty(stack1,"metadata") : stack1)) != null ? lookupProperty(stack1,"siteSearchAsset") : stack1)) != null ? lookupProperty(stack1,"value") : stack1),{"name":"if","hash":{},"fn":container.program(37, data, 0),"inverse":container.noop,"data":data,"loc":{"start":{"line":223,"column":6},"end":{"line":294,"column":13}}})) != null ? stack1 : "")
    + "\r\n    </div>\r\n\r\n  </div>\r\n</header>\r\n<!-- HEADER END -->\r\n";
},"useData":true}