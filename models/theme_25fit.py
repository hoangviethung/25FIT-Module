from odoo import models


class Theme25FIT(models.AbstractModel):
    _inherit = 'theme.utils'

    def _theme_25fit_post_copy(self, mod):
        self.enable_view('website.template_footer_minimalist')