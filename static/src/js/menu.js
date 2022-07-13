odoo.define("theme_25fit.content.menu", function (require) {
    ("use strict");
    const config = require("web.config");
    const publicWidget = require("web.public.widget");
    require("website.content.menu");

    publicWidget.registry.StandardAffixedHeader.include({
        /**
         * @override
         */
        start: function () {
            this.$main = this.$el.next("main");
            return this._super.apply(this, arguments);
        },
        /**
         * @private
         */ _updateMainPaddingTop: function () {
            this._super(...arguments);
            if (config.device.size_class >= config.device.SIZES.LG) {
                this.$main.css("padding-top", 0);
            }
        },
    });
    publicWidget.registry.FixedHeader.include({
        /**
         * @override
         */
        start: function () {
            this.$main = this.$el.next("main");
            return this._super.apply(this, arguments);
        },
        /**
         * @private
         */ _updateMainPaddingTop: function () {
            this._super(...arguments);
            if (config.device.size_class >= config.device.SIZES.LG) {
                this.$main.css("padding-top", 0);
            }
        },
    });
});
