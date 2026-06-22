{"1":function(container,depth0,helpers,partials,data) {
    var stack1, alias1=depth0 != null ? depth0 : (container.nullContext || {}), lookupProperty = container.lookupProperty || function(parent, propertyName) {
        if (Object.prototype.hasOwnProperty.call(parent, propertyName)) {
          return parent[propertyName];
        }
        return undefined
    };

  return "  <div\n    class=\"qld__header__contained-banner\"\n"
    + ((stack1 = lookupProperty(helpers,"if").call(alias1,((stack1 = ((stack1 = ((stack1 = (depth0 != null ? lookupProperty(depth0,"site") : depth0)) != null ? lookupProperty(stack1,"metadata") : stack1)) != null ? lookupProperty(stack1,"imageContainedLayoutBackground") : stack1)) != null ? lookupProperty(stack1,"value") : stack1),{"name":"if","hash":{},"fn":container.program(2, data, 0),"inverse":container.noop,"data":data,"loc":{"start":{"line":4,"column":4},"end":{"line":6,"column":11}}})) != null ? stack1 : "")
    + ((stack1 = lookupProperty(helpers,"if").call(alias1,((stack1 = ((stack1 = ((stack1 = (depth0 != null ? lookupProperty(depth0,"site") : depth0)) != null ? lookupProperty(stack1,"metadata") : stack1)) != null ? lookupProperty(stack1,"imageContainedLayoutTexture") : stack1)) != null ? lookupProperty(stack1,"value") : stack1),{"name":"if","hash":{},"fn":container.program(4, data, 0),"inverse":container.noop,"data":data,"loc":{"start":{"line":7,"column":4},"end":{"line":9,"column":11}}})) != null ? stack1 : "")
    + "  ></div>\n";
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
    + "; \"\n";
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
    + ";\"\n";
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

  return "          <img\n            class=\"qld__header__pre-header-brand-image\"\n            alt=\"Queensland Government logo\"\n            src=\"./?a="
    + container.escapeExpression(container.lambda(((stack1 = ((stack1 = ((stack1 = (depth0 != null ? lookupProperty(depth0,"site") : depth0)) != null ? lookupProperty(stack1,"metadata") : stack1)) != null ? lookupProperty(stack1,"sitePreHeaderLogo") : stack1)) != null ? lookupProperty(stack1,"value") : stack1), depth0))
    + "\"\n          />\n";
},"12":function(container,depth0,helpers,partials,data) {
    var stack1, lookupProperty = container.lookupProperty || function(parent, propertyName) {
        if (Object.prototype.hasOwnProperty.call(parent, propertyName)) {
          return parent[propertyName];
        }
        return undefined
    };

  return "          <span class=\"qld__header__pre-header-url--mobile\">\n            "
    + container.escapeExpression(container.lambda(((stack1 = ((stack1 = ((stack1 = (depth0 != null ? lookupProperty(depth0,"site") : depth0)) != null ? lookupProperty(stack1,"metadata") : stack1)) != null ? lookupProperty(stack1,"sitePreHeaderText") : stack1)) != null ? lookupProperty(stack1,"value") : stack1), depth0))
    + "\n          </span>\n";
},"14":function(container,depth0,helpers,partials,data) {
    var stack1, alias1=container.lambda, alias2=container.escapeExpression, lookupProperty = container.lookupProperty || function(parent, propertyName) {
        if (Object.prototype.hasOwnProperty.call(parent, propertyName)) {
          return parent[propertyName];
        }
        return undefined
    };

  return "          <a\n            class=\"qld__header__cta-link\"\n            href=\"./?a="
    + alias2(alias1(((stack1 = ((stack1 = ((stack1 = (depth0 != null ? lookupProperty(depth0,"site") : depth0)) != null ? lookupProperty(stack1,"metadata") : stack1)) != null ? lookupProperty(stack1,"mainNavCtaOne") : stack1)) != null ? lookupProperty(stack1,"value") : stack1), depth0))
    + "\"\n          >\n"
    + ((stack1 = lookupProperty(helpers,"if").call(depth0 != null ? depth0 : (container.nullContext || {}),((stack1 = ((stack1 = ((stack1 = (depth0 != null ? lookupProperty(depth0,"site") : depth0)) != null ? lookupProperty(stack1,"metadata") : stack1)) != null ? lookupProperty(stack1,"mainNavCtaOneIcon") : stack1)) != null ? lookupProperty(stack1,"value") : stack1),{"name":"if","hash":{},"fn":container.program(15, data, 0),"inverse":container.noop,"data":data,"loc":{"start":{"line":58,"column":12},"end":{"line":70,"column":19}}})) != null ? stack1 : "")
    + "            <span class=\"qld__header__cta-link-text\">\n              "
    + alias2(alias1(((stack1 = ((stack1 = ((stack1 = (depth0 != null ? lookupProperty(depth0,"site") : depth0)) != null ? lookupProperty(stack1,"metadata") : stack1)) != null ? lookupProperty(stack1,"mainNavCtaOneText") : stack1)) != null ? lookupProperty(stack1,"value") : stack1), depth0))
    + "\n            </span>\n          </a>\n";
},"15":function(container,depth0,helpers,partials,data) {
    var stack1, alias1=container.lambda, alias2=container.escapeExpression, lookupProperty = container.lookupProperty || function(parent, propertyName) {
        if (Object.prototype.hasOwnProperty.call(parent, propertyName)) {
          return parent[propertyName];
        }
        return undefined
    };

  return "              <span class=\"qld__header__cta-link-icon\">\n                <svg\n                  class=\"qld__icon\"\n                  aria-hidden=\"true\"\n                  xmlns=\"http://www.w3.org/2000/svg\"\n                >\n                  <use\n                    href=\""
    + alias2(alias1(((stack1 = ((stack1 = ((stack1 = ((stack1 = (data && lookupProperty(data,"root"))) && lookupProperty(stack1,"site"))) && lookupProperty(stack1,"metadata"))) && lookupProperty(stack1,"coreSiteIcons"))) && lookupProperty(stack1,"value")), depth0))
    + "#"
    + alias2(alias1(((stack1 = ((stack1 = ((stack1 = (depth0 != null ? lookupProperty(depth0,"site") : depth0)) != null ? lookupProperty(stack1,"metadata") : stack1)) != null ? lookupProperty(stack1,"mainNavCtaOneIcon") : stack1)) != null ? lookupProperty(stack1,"value") : stack1), depth0))
    + "\"\n                  ></use>\n                </svg>\n              </span>\n";
},"17":function(container,depth0,helpers,partials,data) {
    var stack1, alias1=container.lambda, alias2=container.escapeExpression, lookupProperty = container.lookupProperty || function(parent, propertyName) {
        if (Object.prototype.hasOwnProperty.call(parent, propertyName)) {
          return parent[propertyName];
        }
        return undefined
    };

  return "          <a\n            class=\"qld__header__cta-link\"\n            href=\"./?a="
    + alias2(alias1(((stack1 = ((stack1 = ((stack1 = (depth0 != null ? lookupProperty(depth0,"site") : depth0)) != null ? lookupProperty(stack1,"metadata") : stack1)) != null ? lookupProperty(stack1,"mainNavCtaTwo") : stack1)) != null ? lookupProperty(stack1,"value") : stack1), depth0))
    + "\"\n          >\n"
    + ((stack1 = lookupProperty(helpers,"if").call(depth0 != null ? depth0 : (container.nullContext || {}),((stack1 = ((stack1 = ((stack1 = (depth0 != null ? lookupProperty(depth0,"site") : depth0)) != null ? lookupProperty(stack1,"metadata") : stack1)) != null ? lookupProperty(stack1,"mainNavCtaTwoIcon") : stack1)) != null ? lookupProperty(stack1,"value") : stack1),{"name":"if","hash":{},"fn":container.program(18, data, 0),"inverse":container.noop,"data":data,"loc":{"start":{"line":81,"column":12},"end":{"line":93,"column":19}}})) != null ? stack1 : "")
    + "            <span class=\"qld__header__cta-link-text\">\n              "
    + alias2(alias1(((stack1 = ((stack1 = ((stack1 = (depth0 != null ? lookupProperty(depth0,"site") : depth0)) != null ? lookupProperty(stack1,"metadata") : stack1)) != null ? lookupProperty(stack1,"mainNavCtaTwoText") : stack1)) != null ? lookupProperty(stack1,"value") : stack1), depth0))
    + "\n            </span>\n          </a>\n";
},"18":function(container,depth0,helpers,partials,data) {
    var stack1, alias1=container.lambda, alias2=container.escapeExpression, lookupProperty = container.lookupProperty || function(parent, propertyName) {
        if (Object.prototype.hasOwnProperty.call(parent, propertyName)) {
          return parent[propertyName];
        }
        return undefined
    };

  return "              <span class=\"qld__header__cta-link-icon\">\n                <svg\n                  class=\"qld__icon\"\n                  aria-hidden=\"true\"\n                  xmlns=\"http://www.w3.org/2000/svg\"\n                >\n                  <use\n                    href=\""
    + alias2(alias1(((stack1 = ((stack1 = ((stack1 = ((stack1 = (data && lookupProperty(data,"root"))) && lookupProperty(stack1,"site"))) && lookupProperty(stack1,"metadata"))) && lookupProperty(stack1,"coreSiteIcons"))) && lookupProperty(stack1,"value")), depth0))
    + "#"
    + alias2(alias1(((stack1 = ((stack1 = ((stack1 = (depth0 != null ? lookupProperty(depth0,"site") : depth0)) != null ? lookupProperty(stack1,"metadata") : stack1)) != null ? lookupProperty(stack1,"mainNavCtaTwoIcon") : stack1)) != null ? lookupProperty(stack1,"value") : stack1), depth0))
    + "\"\n                  ></use>\n                </svg>\n              </span>\n";
},"20":function(container,depth0,helpers,partials,data) {
    var stack1, alias1=container.lambda, alias2=container.escapeExpression, lookupProperty = container.lookupProperty || function(parent, propertyName) {
        if (Object.prototype.hasOwnProperty.call(parent, propertyName)) {
          return parent[propertyName];
        }
        return undefined
    };

  return "          <button\n            class=\"\n              qld__header__toggle-main-nav\n              qld__main-nav__toggle-search\n              qld__main-nav__toggle-search--open\n            \"\n            aria-controls=\"qld-header-search\"\n            aria-expanded=\"false\"\n          >\n            <svg\n              class=\"qld__icon qld__main-nav__toggle-search-icon\"\n              aria-hidden=\"true\"\n              xmlns=\"http://www.w3.org/2000/svg\"\n            >\n              <use href=\""
    + alias2(alias1(((stack1 = ((stack1 = ((stack1 = ((stack1 = (data && lookupProperty(data,"root"))) && lookupProperty(stack1,"site"))) && lookupProperty(stack1,"metadata"))) && lookupProperty(stack1,"coreSiteIcons"))) && lookupProperty(stack1,"value")), depth0))
    + "#search\"\n              ></use>\n            </svg>\n            <svg\n              class=\"qld__icon qld__main-nav__toggle-search-close-icon\"\n              aria-hidden=\"true\"\n              xmlns=\"http://www.w3.org/2000/svg\"\n            >\n              <use href=\""
    + alias2(alias1(((stack1 = ((stack1 = ((stack1 = ((stack1 = (data && lookupProperty(data,"root"))) && lookupProperty(stack1,"site"))) && lookupProperty(stack1,"metadata"))) && lookupProperty(stack1,"coreSiteIcons"))) && lookupProperty(stack1,"value")), depth0))
    + "#close\"\n              ></use>\n            </svg>\n            <span class=\"qld__main-nav__toggle-text\">Search</span>\n          </button>\n";
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

  return "            <div class=\"qld__header__brand-image\">\n"
    + ((stack1 = lookupProperty(helpers,"if").call(depth0 != null ? depth0 : (container.nullContext || {}),((stack1 = ((stack1 = ((stack1 = (depth0 != null ? lookupProperty(depth0,"site") : depth0)) != null ? lookupProperty(stack1,"metadata") : stack1)) != null ? lookupProperty(stack1,"siteLogo") : stack1)) != null ? lookupProperty(stack1,"value") : stack1),{"name":"if","hash":{},"fn":container.program(25, data, 0),"inverse":container.program(27, data, 0),"data":data,"loc":{"start":{"line":159,"column":14},"end":{"line":178,"column":21}}})) != null ? stack1 : "")
    + "            </div>\n";
},"25":function(container,depth0,helpers,partials,data) {
    var stack1, lookupProperty = container.lookupProperty || function(parent, propertyName) {
        if (Object.prototype.hasOwnProperty.call(parent, propertyName)) {
          return parent[propertyName];
        }
        return undefined
    };

  return "                <img\n                  src=\"./?a="
    + container.escapeExpression(container.lambda(((stack1 = ((stack1 = ((stack1 = (depth0 != null ? lookupProperty(depth0,"site") : depth0)) != null ? lookupProperty(stack1,"metadata") : stack1)) != null ? lookupProperty(stack1,"siteLogo") : stack1)) != null ? lookupProperty(stack1,"value") : stack1), depth0))
    + "\"\n                  width=\"170\"\n                  height=\"56\"\n                  alt=\"Queensland Government logo\"\n                />\n";
},"27":function(container,depth0,helpers,partials,data) {
    var stack1, lookupProperty = container.lookupProperty || function(parent, propertyName) {
        if (Object.prototype.hasOwnProperty.call(parent, propertyName)) {
          return parent[propertyName];
        }
        return undefined
    };

  return "                <svg\n                  xmlns=\"http://www.w3.org/2000/svg\"\n                  width=\"170\"\n                  height=\"56\"\n                  role=\"img\"\n                  aria-label=\"Queensland Government logo\"\n                >\n                  <use\n                    href=\"./?a="
    + container.escapeExpression(container.lambda(((stack1 = ((stack1 = ((stack1 = (depth0 != null ? lookupProperty(depth0,"site") : depth0)) != null ? lookupProperty(stack1,"metadata") : stack1)) != null ? lookupProperty(stack1,"siteHeaderDefaultLogo") : stack1)) != null ? lookupProperty(stack1,"value") : stack1), depth0))
    + "#logo\"\n                  ></use>\n                </svg>\n";
},"29":function(container,depth0,helpers,partials,data) {
    var stack1, alias1=container.lambda, alias2=container.escapeExpression, lookupProperty = container.lookupProperty || function(parent, propertyName) {
        if (Object.prototype.hasOwnProperty.call(parent, propertyName)) {
          return parent[propertyName];
        }
        return undefined
    };

  return "            <div class=\"qld__header__site-name\">\n              <picture>\n"
    + ((stack1 = lookupProperty(helpers,"if").call(depth0 != null ? depth0 : (container.nullContext || {}),((stack1 = ((stack1 = ((stack1 = (depth0 != null ? lookupProperty(depth0,"site") : depth0)) != null ? lookupProperty(stack1,"metadata") : stack1)) != null ? lookupProperty(stack1,"siteLogoSecondaryMobile") : stack1)) != null ? lookupProperty(stack1,"value") : stack1),{"name":"if","hash":{},"fn":container.program(30, data, 0),"inverse":container.program(32, data, 0),"data":data,"loc":{"start":{"line":185,"column":16},"end":{"line":195,"column":23}}})) != null ? stack1 : "")
    + "                <source\n                  media=\"(max-width: 3000px)\"\n                  srcset=\"./?a="
    + alias2(alias1(((stack1 = ((stack1 = ((stack1 = (depth0 != null ? lookupProperty(depth0,"site") : depth0)) != null ? lookupProperty(stack1,"metadata") : stack1)) != null ? lookupProperty(stack1,"siteLogoSecondary") : stack1)) != null ? lookupProperty(stack1,"value") : stack1), depth0))
    + "\"\n                />\n                <img\n                  class=\"qld__header__secondary-image\"\n                  alt=\""
    + alias2(alias1(((stack1 = ((stack1 = ((stack1 = (depth0 != null ? lookupProperty(depth0,"site") : depth0)) != null ? lookupProperty(stack1,"metadata") : stack1)) != null ? lookupProperty(stack1,"siteTitle") : stack1)) != null ? lookupProperty(stack1,"value") : stack1), depth0))
    + "\"\n                  src=\"./?a="
    + alias2(alias1(((stack1 = ((stack1 = ((stack1 = (depth0 != null ? lookupProperty(depth0,"site") : depth0)) != null ? lookupProperty(stack1,"metadata") : stack1)) != null ? lookupProperty(stack1,"siteLogoSecondary") : stack1)) != null ? lookupProperty(stack1,"value") : stack1), depth0))
    + "\"\n                />\n              </picture>\n            </div>\n";
},"30":function(container,depth0,helpers,partials,data) {
    var stack1, lookupProperty = container.lookupProperty || function(parent, propertyName) {
        if (Object.prototype.hasOwnProperty.call(parent, propertyName)) {
          return parent[propertyName];
        }
        return undefined
    };

  return "                  <source\n                    media=\"(max-width: 991px)\"\n                    srcset=\"./?a="
    + container.escapeExpression(container.lambda(((stack1 = ((stack1 = ((stack1 = (depth0 != null ? lookupProperty(depth0,"site") : depth0)) != null ? lookupProperty(stack1,"metadata") : stack1)) != null ? lookupProperty(stack1,"siteLogoSecondaryMobile") : stack1)) != null ? lookupProperty(stack1,"value") : stack1), depth0))
    + "\"\n                  />\n";
},"32":function(container,depth0,helpers,partials,data) {
    var stack1, lookupProperty = container.lookupProperty || function(parent, propertyName) {
        if (Object.prototype.hasOwnProperty.call(parent, propertyName)) {
          return parent[propertyName];
        }
        return undefined
    };

  return "                  <source\n                    media=\"(max-width: 991px)\"\n                    srcset=\"./?a="
    + container.escapeExpression(container.lambda(((stack1 = ((stack1 = ((stack1 = (depth0 != null ? lookupProperty(depth0,"site") : depth0)) != null ? lookupProperty(stack1,"metadata") : stack1)) != null ? lookupProperty(stack1,"siteLogoSecondary") : stack1)) != null ? lookupProperty(stack1,"value") : stack1), depth0))
    + "\"\n                  />\n";
},"34":function(container,depth0,helpers,partials,data) {
    var stack1, lookupProperty = container.lookupProperty || function(parent, propertyName) {
        if (Object.prototype.hasOwnProperty.call(parent, propertyName)) {
          return parent[propertyName];
        }
        return undefined
    };

  return "            <div class=\"qld__header__site-name\">\n              <span class=\"qld__header__heading\">\n                "
    + container.escapeExpression(container.lambda(((stack1 = ((stack1 = ((stack1 = (depth0 != null ? lookupProperty(depth0,"site") : depth0)) != null ? lookupProperty(stack1,"metadata") : stack1)) != null ? lookupProperty(stack1,"siteTitle") : stack1)) != null ? lookupProperty(stack1,"value") : stack1), depth0))
    + "\n              </span>\n"
    + ((stack1 = lookupProperty(helpers,"if").call(depth0 != null ? depth0 : (container.nullContext || {}),((stack1 = ((stack1 = ((stack1 = (depth0 != null ? lookupProperty(depth0,"site") : depth0)) != null ? lookupProperty(stack1,"metadata") : stack1)) != null ? lookupProperty(stack1,"siteSubline") : stack1)) != null ? lookupProperty(stack1,"value") : stack1),{"name":"if","hash":{},"fn":container.program(35, data, 0),"inverse":container.noop,"data":data,"loc":{"start":{"line":212,"column":14},"end":{"line":216,"column":21}}})) != null ? stack1 : "")
    + "            </div>\n";
},"35":function(container,depth0,helpers,partials,data) {
    var stack1, lookupProperty = container.lookupProperty || function(parent, propertyName) {
        if (Object.prototype.hasOwnProperty.call(parent, propertyName)) {
          return parent[propertyName];
        }
        return undefined
    };

  return "                <span class=\"qld__header__subline\">\n                  "
    + container.escapeExpression(container.lambda(((stack1 = ((stack1 = ((stack1 = (depth0 != null ? lookupProperty(depth0,"site") : depth0)) != null ? lookupProperty(stack1,"metadata") : stack1)) != null ? lookupProperty(stack1,"siteSubline") : stack1)) != null ? lookupProperty(stack1,"value") : stack1), depth0))
    + "\n                </span>\n";
},"37":function(container,depth0,helpers,partials,data) {
    var stack1, alias1=container.lambda, alias2=container.escapeExpression, lookupProperty = container.lookupProperty || function(parent, propertyName) {
        if (Object.prototype.hasOwnProperty.call(parent, propertyName)) {
          return parent[propertyName];
        }
        return undefined
    };

  return "        <div id=\"qld-header-search\" class=\"qld__header__search\">\n          <div class=\"qld__main-nav__focus-trap-top\"></div>\n\n          <div class=\"qld__search-form--wrapper\">\n            <form\n              id=\"search-input-global-header\"\n              class=\"qld__search-form\"\n              role=\"search\"\n              aria-label=\"sitewide\"\n              action=\""
    + alias2(alias1(((stack1 = ((stack1 = ((stack1 = (depth0 != null ? lookupProperty(depth0,"site") : depth0)) != null ? lookupProperty(stack1,"metadata") : stack1)) != null ? lookupProperty(stack1,"siteSearchUrl") : stack1)) != null ? lookupProperty(stack1,"value") : stack1), depth0))
    + "\"\n            >\n              <label\n                class=\"qld__label qld__display-lg qld__search-form__label\"\n                for=\"search-input-global-header-query\"\n              >\n                Search this website\n              </label>\n              <div class=\"qld__search-form__inner\">\n                <svg\n                  class=\"qld__icon qld__icon--sm qld__search-form__inner-icon\"\n                  xmlns=\"http://www.w3.org/2000/svg\"\n                  aria-hidden=\"true\"\n                >\n                  <use\n                    href=\""
    + alias2(alias1(((stack1 = ((stack1 = ((stack1 = ((stack1 = (data && lookupProperty(data,"root"))) && lookupProperty(stack1,"site"))) && lookupProperty(stack1,"metadata"))) && lookupProperty(stack1,"coreSiteIcons"))) && lookupProperty(stack1,"value")), depth0))
    + "#search\"\n                  ></use>\n                </svg>\n                <input\n                  id=\"search-input-global-header-query\"\n                  class=\"qld__text-input data-hj-allow\"\n                  type=\"search\"\n                  name=\"query\"\n                  autocomplete=\"off\"\n                  disabled=\"true\"\n                />\n                <input\n                  id=\"name\"\n                  class=\"qld__text-input--validation\"\n                  type=\"text\"\n                  name=\"name\"\n                  autocomplete=\"off\"\n                  tabindex=\"-1\"\n                />\n                <div class=\"qld__search-form__btn\">\n                  <button\n                    class=\"qld__btn qld__btn--search\"\n                    type=\"button\"\n                    aria-label=\"Search\"\n                    disabled=\"true\"\n                  >\n                    <span class=\"qld__btn__icon\">\n                      <svg\n                        class=\"qld__icon\"\n                        xmlns=\"http://www.w3.org/2000/svg\"\n                        aria-hidden=\"true\"\n                      >\n                        <use\n                          href=\""
    + alias2(alias1(((stack1 = ((stack1 = ((stack1 = ((stack1 = (data && lookupProperty(data,"root"))) && lookupProperty(stack1,"site"))) && lookupProperty(stack1,"metadata"))) && lookupProperty(stack1,"coreSiteIcons"))) && lookupProperty(stack1,"value")), depth0))
    + "#search\"\n                        ></use>\n                      </svg>\n                    </span>\n                    <span class=\"qld__btn__text\">Search</span>\n                  </button>\n                </div>\n              </div>\n            </form>\n          </div>\n\n          <div class=\"qld__main-nav__focus-trap-bottom\"></div>\n        </div>\n";
},"compiler":[8,">= 4.3.0"],"main":function(container,depth0,helpers,partials,data) {
    var stack1, alias1=depth0 != null ? depth0 : (container.nullContext || {}), alias2=container.hooks.helperMissing, alias3=container.lambda, alias4=container.escapeExpression, lookupProperty = container.lookupProperty || function(parent, propertyName) {
        if (Object.prototype.hasOwnProperty.call(parent, propertyName)) {
          return parent[propertyName];
        }
        return undefined
    };

  return ((stack1 = (lookupProperty(helpers,"ifCond")||(depth0 && lookupProperty(depth0,"ifCond"))||alias2).call(alias1,((stack1 = ((stack1 = ((stack1 = (depth0 != null ? lookupProperty(depth0,"site") : depth0)) != null ? lookupProperty(stack1,"metadata") : stack1)) != null ? lookupProperty(stack1,"defaultBannerContainedBanner") : stack1)) != null ? lookupProperty(stack1,"value") : stack1),"==","qld__banner_contained",{"name":"ifCond","hash":{},"fn":container.program(1, data, 0),"inverse":container.noop,"data":data,"loc":{"start":{"line":1,"column":0},"end":{"line":11,"column":11}}})) != null ? stack1 : "")
    + "<header class=\"qld__header\" role=\"banner\">\n  <nav class=\"qld__skip-link\" aria-label=\"skip links\" tabindex=\"-1\">\n    <a class=\"qld__skip-link__link\" href=\"#content\">Skip to main content</a>\n    <a\n      class=\"qld__skip-link__link qld__skip-link__link-desktop\"\n      href=\"#main-nav\"\n    >\n      Skip to main navigation\n    </a>\n    <a\n      class=\"qld__skip-link__link qld__skip-link__link-mobile\"\n      href=\"#main-nav-mobile\"\n    >\n      Skip to main navigation\n    </a>\n  </nav>\n  <div\n    class=\"qld__header__pre-header "
    + alias4(alias3(((stack1 = ((stack1 = ((stack1 = (depth0 != null ? lookupProperty(depth0,"site") : depth0)) != null ? lookupProperty(stack1,"metadata") : stack1)) != null ? lookupProperty(stack1,"sitePreHeaderTheme") : stack1)) != null ? lookupProperty(stack1,"value") : stack1), depth0))
    + "\"\n  >\n    <div class=\"container-fluid\">\n      <a\n        href=\""
    + ((stack1 = lookupProperty(helpers,"if").call(alias1,((stack1 = ((stack1 = ((stack1 = (depth0 != null ? lookupProperty(depth0,"site") : depth0)) != null ? lookupProperty(stack1,"metadata") : stack1)) != null ? lookupProperty(stack1,"sitePreHeaderURL") : stack1)) != null ? lookupProperty(stack1,"value") : stack1),{"name":"if","hash":{},"fn":container.program(6, data, 0),"inverse":container.program(8, data, 0),"data":data,"loc":{"start":{"line":33,"column":14},"end":{"line":33,"column":143}}})) != null ? stack1 : "")
    + "\"\n      >\n        <span class=\"qld__header__pre-header-url\">\n          "
    + alias4(alias3(((stack1 = ((stack1 = ((stack1 = (depth0 != null ? lookupProperty(depth0,"site") : depth0)) != null ? lookupProperty(stack1,"metadata") : stack1)) != null ? lookupProperty(stack1,"sitePreHeaderText") : stack1)) != null ? lookupProperty(stack1,"value") : stack1), depth0))
    + "\n        </span>\n"
    + ((stack1 = lookupProperty(helpers,"if").call(alias1,((stack1 = ((stack1 = ((stack1 = (depth0 != null ? lookupProperty(depth0,"site") : depth0)) != null ? lookupProperty(stack1,"metadata") : stack1)) != null ? lookupProperty(stack1,"sitePreHeaderLogo") : stack1)) != null ? lookupProperty(stack1,"value") : stack1),{"name":"if","hash":{},"fn":container.program(10, data, 0),"inverse":container.program(12, data, 0),"data":data,"loc":{"start":{"line":38,"column":8},"end":{"line":48,"column":15}}})) != null ? stack1 : "")
    + "\n      </a>\n\n      <div class=\"qld__header__cta-wrapper\">\n"
    + ((stack1 = lookupProperty(helpers,"if").call(alias1,((stack1 = ((stack1 = ((stack1 = (depth0 != null ? lookupProperty(depth0,"site") : depth0)) != null ? lookupProperty(stack1,"metadata") : stack1)) != null ? lookupProperty(stack1,"mainNavCtaOne") : stack1)) != null ? lookupProperty(stack1,"value") : stack1),{"name":"if","hash":{},"fn":container.program(14, data, 0),"inverse":container.noop,"data":data,"loc":{"start":{"line":53,"column":8},"end":{"line":75,"column":15}}})) != null ? stack1 : "")
    + ((stack1 = lookupProperty(helpers,"if").call(alias1,((stack1 = ((stack1 = ((stack1 = (depth0 != null ? lookupProperty(depth0,"site") : depth0)) != null ? lookupProperty(stack1,"metadata") : stack1)) != null ? lookupProperty(stack1,"mainNavCtaTwo") : stack1)) != null ? lookupProperty(stack1,"value") : stack1),{"name":"if","hash":{},"fn":container.program(17, data, 0),"inverse":container.noop,"data":data,"loc":{"start":{"line":76,"column":8},"end":{"line":98,"column":15}}})) != null ? stack1 : "")
    + "      </div>\n\n      <div class=\"qld__header__main-nav-controls\">\n"
    + ((stack1 = lookupProperty(helpers,"if").call(alias1,((stack1 = ((stack1 = ((stack1 = (depth0 != null ? lookupProperty(depth0,"site") : depth0)) != null ? lookupProperty(stack1,"metadata") : stack1)) != null ? lookupProperty(stack1,"siteSearchAsset") : stack1)) != null ? lookupProperty(stack1,"value") : stack1),{"name":"if","hash":{},"fn":container.program(20, data, 0),"inverse":container.noop,"data":data,"loc":{"start":{"line":102,"column":8},"end":{"line":130,"column":15}}})) != null ? stack1 : "")
    + "        <button\n          id=\"main-nav-mobile\"\n          class=\"qld__header__toggle-main-nav qld__main-nav__toggle--open\"\n          aria-controls=\"main-nav\"\n        >\n          <svg\n            class=\"qld__icon\"\n            aria-hidden=\"true\"\n            xmlns=\"http://www.w3.org/2000/svg\"\n          >\n            <use href=\""
    + alias4(alias3(((stack1 = ((stack1 = ((stack1 = ((stack1 = (data && lookupProperty(data,"root"))) && lookupProperty(stack1,"site"))) && lookupProperty(stack1,"metadata"))) && lookupProperty(stack1,"coreSiteIcons"))) && lookupProperty(stack1,"value")), depth0))
    + "#menu\"\n            ></use>\n          </svg>\n          <span class=\"qld__main-nav__toggle-text\">Menu</span>\n        </button>\n      </div>\n    </div>\n  </div>\n\n  <div class=\"qld__header__main "
    + alias4(alias3(((stack1 = ((stack1 = ((stack1 = (depth0 != null ? lookupProperty(depth0,"site") : depth0)) != null ? lookupProperty(stack1,"metadata") : stack1)) != null ? lookupProperty(stack1,"siteHeaderMainTheme") : stack1)) != null ? lookupProperty(stack1,"value") : stack1), depth0))
    + "\">\n    <div class=\"container-fluid\">\n\n      <div class=\"qld__header__brand\">\n        <a\n          href=\""
    + ((stack1 = lookupProperty(helpers,"if").call(alias1,((stack1 = ((stack1 = ((stack1 = (depth0 != null ? lookupProperty(depth0,"site") : depth0)) != null ? lookupProperty(stack1,"metadata") : stack1)) != null ? lookupProperty(stack1,"siteLogoUrl") : stack1)) != null ? lookupProperty(stack1,"value") : stack1),{"name":"if","hash":{},"fn":container.program(22, data, 0),"inverse":container.program(8, data, 0),"data":data,"loc":{"start":{"line":155,"column":16},"end":{"line":155,"column":140}}})) != null ? stack1 : "")
    + "\"\n        >\n"
    + ((stack1 = (lookupProperty(helpers,"ifCond")||(depth0 && lookupProperty(depth0,"ifCond"))||alias2).call(alias1,((stack1 = ((stack1 = ((stack1 = (depth0 != null ? lookupProperty(depth0,"site") : depth0)) != null ? lookupProperty(stack1,"metadata") : stack1)) != null ? lookupProperty(stack1,"siteShowLogo") : stack1)) != null ? lookupProperty(stack1,"value") : stack1),"==","yes",{"name":"ifCond","hash":{},"fn":container.program(24, data, 0),"inverse":container.noop,"data":data,"loc":{"start":{"line":157,"column":10},"end":{"line":180,"column":21}}})) != null ? stack1 : "")
    + "\n"
    + ((stack1 = lookupProperty(helpers,"if").call(alias1,((stack1 = ((stack1 = ((stack1 = (depth0 != null ? lookupProperty(depth0,"site") : depth0)) != null ? lookupProperty(stack1,"metadata") : stack1)) != null ? lookupProperty(stack1,"siteLogoSecondary") : stack1)) != null ? lookupProperty(stack1,"value") : stack1),{"name":"if","hash":{},"fn":container.program(29, data, 0),"inverse":container.program(34, data, 0),"data":data,"loc":{"start":{"line":182,"column":10},"end":{"line":218,"column":17}}})) != null ? stack1 : "")
    + "        </a>\n\n      </div>\n\n"
    + ((stack1 = lookupProperty(helpers,"if").call(alias1,((stack1 = ((stack1 = ((stack1 = (depth0 != null ? lookupProperty(depth0,"site") : depth0)) != null ? lookupProperty(stack1,"metadata") : stack1)) != null ? lookupProperty(stack1,"siteSearchAsset") : stack1)) != null ? lookupProperty(stack1,"value") : stack1),{"name":"if","hash":{},"fn":container.program(37, data, 0),"inverse":container.noop,"data":data,"loc":{"start":{"line":223,"column":6},"end":{"line":294,"column":13}}})) != null ? stack1 : "")
    + "\n    </div>\n\n  </div>\n</header>\n<!-- HEADER END -->\n";
},"useData":true}