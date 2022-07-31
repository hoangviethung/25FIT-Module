odoo.define("theme_25fit.benefits_of_esm", function (require) {
    ("use strict");
    const publicWidget = require("web.public.widget");
    publicWidget.registry.BenefitsContentStyle01Section =
        publicWidget.Widget.extend({
            selector: ".benefits-of-esm-content-style-01",
            xmlDependencies: [],
            events: {},
            start: function () {
                this._initBenefitSwiper();
                return this._super.apply(this, arguments);
            },
            _initBenefitSwiper: function (ev) {
                const swiper = new Swiper(
                    ".benefits-of-esm-content-style-01-swiper",
                    {
                        slidesPerView: 1,
                        pagination: {
                            el: ".benefits-of-esm-content-style-01-swiper .swiper-pagination-dots",
                            clickable: true,
                        },
                        navigation: {
                            nextEl: ".benefits-of-esm-content-style-01-swiper .swiper-button-next",
                            prevEl: ".benefits-of-esm-content-style-01-swiper .swiper-button-prev",
                        },
                        // simulateTouch: false,
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
                    },
                );
            },
        });
});
