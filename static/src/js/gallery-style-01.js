odoo.define("theme_25fit.gallery_style_01", function (require) {
    ("use strict");
    const publicWidget = require("web.public.widget");
    publicWidget.registry.GalleryStyle01 = publicWidget.Widget.extend({
        selector: ".gallery-style-01",
        xmlDependencies: [],
        events: {},
        start: function () {
            this._initGallerySwiper();
            return this._super.apply(this, arguments);
        },
        _initGallerySwiper: function (ev) {
            const swiper = new Swiper(".gallery-style-01 .gallery-swiper", {
                slidesPerView: 2,
                loop: true,
                spaceBetween: 16,
                autoplay: {
                    delay: 1500,
                },
                speed: 1500,
                simulateTouch: false,
                breakpoints: {
                    768: {
                        slidesPerView: 3,
                        spaceBetween: 24,
                    },
                    1024: {
                        slidesPerView: 4,
                    },
                },
                navigation: {
                    nextEl: ".gallery-style-01 .swiper-button-next",
                    prevEl: ".gallery-style-01 .swiper-button-prev",
                },
            });
        },
    });
});
