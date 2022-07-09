odoo.define("theme_25fit.content.menu", function (require) {
    ("use strict");
    const publicWidget = require("web.public.widget");
    require("website.content.menu");

    publicWidget.registry.StandardAffixedHeader.include({
        /**
         * @override
         */
        start: function () {
            console.log(this);
            return this._super.apply(this, arguments);
        },
    });
});
