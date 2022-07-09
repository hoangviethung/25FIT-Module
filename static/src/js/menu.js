odoo.define("theme_25fit.content.menu", function (require) {
    ("use strict");
    const publicWidget = require("web.public.widget");
    require("website.content.menu");

    publicWidget.registry.StandardAffixedHeader.include({
        /**
         * @override
         */
        start: function () {
            // this._super(...arguments);
            this.$main = this.$el.next("main");
            return this._super.apply(this, arguments);
        },
        /**
         * @private
         */ _updateMainPaddingTop: function () {
            this._super(...arguments);
            this.$main.css("padding-top", 0);
        },
    });
});
