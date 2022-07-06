odoo.define("theme_25fit.content.menu", function (require) {
    ("use strict");

    const contentMenu = require("website.content.menu");
    const publicWidget = require("web.public.widget");

    publicWidget.registry.StandardAffixedHeaderTheme =
        publicWidget.registry.StandardAffixedHeader.extend({});
});
