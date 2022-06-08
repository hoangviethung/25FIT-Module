odoo.define("theme_25fit.checkout", function (require) {
    ("use strict");
    const publicWidget = require("web.public.widget");
    publicWidget.registry.Website25FitCheckout = publicWidget.Widget.extend({
        selector: ".section-checkout-25fit",
        xmlDependencies: [],
        events: {
            "click .js-check-plan": "_checkPlanItem",
        },
        start: function () {
            return this._super.apply(this, arguments);
        },
        _checkPlanItem: function (ev) {
            ev.preventDefault();
            ev.stopPropagation();
            this.$(".plans__item").removeClass("checked");
            $(ev.currentTarget).addClass("checked");
            $(ev.currentTarget).find("input").prop("checked", true);
        },
    });
});
