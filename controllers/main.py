from odoo import http
from odoo.addons.web.controllers.main import Home
from odoo.http import request

class Theme25FitController(Home):
    @http.route(['/home'], type='http', auth="public", website=True, sitemap=True)
    def Home(self, **opt):
        return request.render("theme_25fit.home")

    @http.route(['/about-us'], type='http', auth="public", website=True, sitemap=True)
    def AboutUs(self, **opt):
        return request.render("theme_25fit.about_us")

    @http.route(['/ems-training-and-success-story'], type='http', auth="public", website=True, sitemap=True)
    def EmsTrainingAndSuccessStory(self, **opt):
        return request.render("theme_25fit.ems_training_and_success_story")

    @http.route(['/franchise'], type='http', auth="public", website=True, sitemap=True)
    def Franchise(self, **opt):
        return request.render("theme_25fit.franchise")

    @http.route(['/recurring-term-and-condition'], type='http', auth="public", website=True, sitemap=True)
    def RecurringTermAndCondition(self, **opt):
        return request.render("theme_25fit.recurring_term_and_condition")