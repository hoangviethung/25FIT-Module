odoo.define("theme_25fit.swiper-fullpage-content", function (require) {
    ("use strict");
    const publicWidget = require("web.public.widget");
    publicWidget.registry.Website25FitCheckout = publicWidget.Widget.extend({
        selector: ".swiper-fullpage-content",
        xmlDependencies: [],
        events: {},
        start: function () {
            this._initSwiper();
            return this._super.apply(this, arguments);
        },
        _initSwiper: function (ev) {
            const swiper = new Swiper(".fullpageSwiper", {
                slidesPerView: 1,
                direction: "vertical",
                slidesPerView: 1,
                spaceBetween: 30,
                mousewheel: true,
                simulateTouch: false,
                pagination: {
                    el: ".fullpageSwiper .swiper-pagination-dots",
                    clickable: true,
                },
            });
        },
    });
});
