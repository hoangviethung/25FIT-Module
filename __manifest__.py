# -*- coding: utf-8 -*-
{
    'name': '25FIT Website Theme',
    'summary': 'This is module 25FIT Website Theme',
    'version': '14.0.0.1.0',
    'license': 'LGPL-3',
    'category': 'Website/Website',
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
        # Snippets
        'views/snippets/s_antiseptic_model.xml',
        'views/snippets/snippets.xml',
        # View
        'views/assets.xml',
    ],
    'qweb': [
        'static/xml/*.xml',
    ],
    'installable': True,
    'application': True,
    'auto_install': True,
}