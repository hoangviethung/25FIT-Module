odoo.define("theme_25fit.content_and_image_style_01", function (require) {
    ("use strict");
    const publicWidget = require("web.public.widget");
    publicWidget.registry.ContentAndImageStyle01Section =
        publicWidget.Widget.extend({
            selector: ".content-and-image-style-01",
            xmlDependencies: [],
            events: {},
            start: function () {
                this._initImagesSwiper();
                return this._super.apply(this, arguments);
            },
            _initImagesSwiper: function (ev) {
                const swiper = new Swiper(".image-style-01-swiper", {
                    slidesPerView: 1,
                    pagination: {
                        el: ".image-style-01-swiper .swiper-pagination-dots",
                        clickable: true,
                    },
                    autoplay: {
                        delay: 3000,
                    },
                    simulateTouch: false,
                });
            },
        });
});
