from odoo import http
from odoo.addons.web.controllers.main import Home
from odoo.http import request

class Demo25FitThemeController(Home):
    @http.route(['/demo-renew-plan-step-1'], type='http', auth="public", website=True, sitemap=True)
    def DemoReviewPlanStep1(self, **opt):
        return request.render("25fit_website_theme.demo_renew_plan_step_1")

    @http.route(['/demo-renew-plan-step-2'], type='http', auth="public", website=True, sitemap=True)
    def DemoReviewPlanStep2(self, **opt):
        return request.render("25fit_website_theme.demo_renew_plan_step_2")

    @http.route(['/demo-your-booking-information'], type='http', auth="public", website=True, sitemap=True)
    def DemoYourBookingInformation(self, **opt):
        return request.render("25fit_website_theme.demo_your_booking_information")