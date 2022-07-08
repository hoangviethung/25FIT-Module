odoo.define("theme_25fit.content.menu", function (require) {
    ("use strict");
    const publicWidget = require("web.public.widget");
    publicWidget.registry.header = publicWidget.Widget.extend({
        selector: "header#top",
        xmlDependencies: [],
        events: {},

        /**
         * @constructor
         */
        init: function () {
            this._super(...arguments);
        },
        start: function () {
            return this._super(...arguments);
        },
    });
});
