# -*- coding: utf-8 -*-
{
    'name': '25FIT Website Theme',
    'summary': 'This is module 25FIT Website Theme',
    'version': '14.0.0.1.0',
    'license': 'LGPL-3',
    'category': 'Theme/25FIT Website Theme',
    'author': '25FIT',
    'maintainer': '25FIT',
    'company': '25FIT',
    'support': 'welisten@25fit.net',
    'website': 'https://25fit.net/en/',
    'depends': [
        # Odoo
        'website',
    ],
    'data': [
        # Assets
        'views/assets.xml',
        # Snippets
        'views/snippets/s_antiseptic_model.xml',
        'views/snippets/snippets.xml',
        # Demo View
        'views/demo_homepage.xml',
        'views/demo_ems_training.xml',
        'views/demo_franchise.xml',
        'views/demo_renew_plan_step_1.xml',
        'views/demo_renew_plan_step_2.xml',
        'views/demo_your_booking_information.xml',
    ],
    'qweb': [
        'static/xml/*.xml',
    ],
    'installable': True,
    'application': True,
    'auto_install': True,
}