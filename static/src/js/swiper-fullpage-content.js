odoo.define("theme_25fit.fullpage_content_section", function (require) {
    ("use strict");
    const publicWidget = require("web.public.widget");
    publicWidget.registry.fullpageContentSection = publicWidget.Widget.extend({
        selector: ".fullpage-content-section",
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
                direction: "horizontal",
                // mousewheel: {
                //     invert: false,
                //     releaseOnEdges: true,
                //     forceToAxis: true,
                //     thresholdDelta: 100,
                // },
                parallax: true,
                speed: 1000,
                breakpoints: {
                    1025: { direction: "vertical" },
                },
            });
        },
    });
});
