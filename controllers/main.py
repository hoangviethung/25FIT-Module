from odoo import http
from odoo.addons.web.controllers.main import Home
from odoo.http import request

class Demo25FitTheme(Home):
    @http.route(['/demo_renew_plan_step_1'], type='http', auth="public", website=True, sitemap=True)
    def demo_renew_plan_step_1(self, **opt):
        return request.render("25fit_website_theme.demo_renew_plan_step_1")