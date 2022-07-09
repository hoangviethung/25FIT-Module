odoo.define("theme_25fit.layout_home_js", function (require) {
    ("use strict");
    const publicWidget = require("web.public.widget");

    publicWidget.registry.layoutHomeJs = publicWidget.Widget.extend({
        selector: "#layout-home-js",
        xmlDependencies: [],
        events: {},
        start: function () {
            return this._super.apply(this, arguments);
        },
    });
});
