odoo.define("theme_25fit.news_style_01", function (require) {
    ("use strict");
    const publicWidget = require("web.public.widget");
    publicWidget.registry.TestimonialSection = publicWidget.Widget.extend({
        selector: ".news-style-01",
        xmlDependencies: [],
        events: {},
        start: function () {
            this._initNewsStyleSwiper();
            return this._super.apply(this, arguments);
        },
        _initNewsStyleSwiper: function (ev) {
            const swiper = new Swiper(".news-style-01-swiper", {
                slidesPerView: 1,
                pagination: {
                    el: ".news-style-01-swiper .swiper-pagination-dots",
                    clickable: true,
                },
                autoplay: {
                    delay: 5000,
                },
                simulateTouch: false,
                speed: 1500,
                breakpoints: {
                    768: {
                        slidesPerView: 2,
                        spaceBetween: 24,
                    },
                    1024: {
                        slidesPerView: 3,
                        spaceBetween: 32,
                    },
                },
            });
        },
    });
});
