# -*- coding: utf-8 -*-
{
    'name': 'Theme 25FIT',
    'summary': 'Theme 25FIT Version 2.0',
    'version': '1.0',
    'author': '25FIT',
    'category': 'Theme',
    'sequence': 2000,
    'maintainer': '25FIT',
    'company': '25FIT',
    'support': 'welisten@25fit.net',
    'website': 'https://25fit.net/en/',
    'license': 'LGPL-3',
    'depends': [
        # Odoo
        'website',
    ],
    'data': [
        # Snippets
        'views/snippets/s_antiseptic_model.xml',
        'views/snippets/snippets.xml',
        # Demo View
        'views/website_templates.xml',
        'views/demo_homepage.xml',
        'views/demo_about_us.xml',
        'views/demo_ems_training.xml',
        'views/demo_franchise.xml',
        'views/demo_renew_plan_step_1.xml',
        'views/demo_renew_plan_step_2.xml',
        'views/demo_schedule_booking.xml',
        'views/demo_booking_time.xml',
        'views/demo_confirm_booking.xml',
        'views/demo_booking_details.xml',
        'views/demo_your_booking_information.xml',
    ],
    'qweb': [],
    'assets':{
        'web.assets_frontend': [
            # Library SCSS
            "/theme_25fit/static/src/libs/swiper/swiper-bundle.css",
            "/theme_25fit/static/src/libs/fancybox/jquery.fancybox.scss",
            # Library JS
            "/theme_25fit/static/src/libs/fancybox/jquery.fancybox.min.js",
            "/theme_25fit/static/src/libs/swiper/swiper-bundle.js",
            # Snippets SCSS
            "/theme_25fit/static/src/scss/snippets/s_antiseptic_model.scss",
            # Website UI Kit
            "/theme_25fit/static/src/scss/user_custom_rules.scss",
            "/theme_25fit/static/src/scss/website.ui.scss",
            # Theme JS
            "/theme_25fit/static/src/js/checkout.js",
            "/theme_25fit/static/src/js/menu.js",
            "/theme_25fit/static/src/js/home.js",
            "/theme_25fit/static/src/js/fullpage-content-style-01.js",
            "/theme_25fit/static/src/js/testimonial-style-01.js",
            "/theme_25fit/static/src/js/gallery-style-01.js",
            "/theme_25fit/static/src/js/content-and-image-style-01.js",
            "/theme_25fit/static/src/js/news-style-01.js",
        ],
        'web._assets_primary_variables': [
            "/theme_25fit/static/src/scss/primary_variables.scss",
        ],
        'web._assets_frontend_helpers': [
            ('prepend', '/theme_25fit/static/src/scss/user_custom_bootstrap_overridden.scss'),
        ],
        'website.assets_wysiwyg': [
            ('include', 'web._assets_helpers'),
        ],
    },
    'images': [
        'static/description/screenshot.png',
    ],
}