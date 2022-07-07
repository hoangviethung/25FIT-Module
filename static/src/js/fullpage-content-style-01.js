odoo.define("theme_25fit.fullpage_content_style_01", function (require) {
    ("use strict");
    const publicWidget = require("web.public.widget");
    publicWidget.registry.fullpageContentSection = publicWidget.Widget.extend({
        selector: ".fullpage-content-style-01",
        xmlDependencies: [],
        events: {},
        start: function () {
            this._initFullContentSwiper();
            return this._super.apply(this, arguments);
        },
        _initFullContentSwiper: function (ev) {
            const swiper = new Swiper(".fullpage-content-swiper", {
                slidesPerView: 1,
                pagination: {
                    el: ".fullpage-content-swiper .swiper-pagination-dots",
                    clickable: true,
                },
                speed: 1500,
                simulateTouch: false,
                autoplay: {
                    delay: 10000,
                },
                navigation: {
                    nextEl: ".fullpage-content-swiper .swiper-button-next",
                    prevEl: ".fullpage-content-swiper .swiper-button-prev",
                },
            });
        },
    });
});
