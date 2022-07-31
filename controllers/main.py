from odoo import http
from odoo.addons.web.controllers.main import Home
from odoo.http import request

class Demo25FitThemeController(Home):
    @http.route(['/demo-homepage'], type='http', auth="public", website=True, sitemap=True)
    def DemoHomePage(self, **opt):
        return request.render("theme_25fit.demo_homepage")

    @http.route(['/demo-ems-training'], type='http', auth="public", website=True, sitemap=True)
    def DemoEmsTraining(self, **opt):
        return request.render("theme_25fit.demo_ems_training")

    @http.route(['/demo-franchise'], type='http', auth="public", website=True, sitemap=True)
    def DemoFranchise(self, **opt):
        return request.render("theme_25fit.demo_franchise")

    @http.route(['/demo-schedule-booking'], type='http', auth="public", website=True, sitemap=True)
    def DemoScheduleBooking(self, **opt):
        return request.render("theme_25fit.demo_schedule_booking")

    @http.route(['/demo-booking-time'], type='http', auth="public", website=True, sitemap=True)
    def DemoBookingTime(self, **opt):
        return request.render("theme_25fit.demo_booking_time")

    @http.route(['/demo-confirm-booking'], type='http', auth="public", website=True, sitemap=True)
    def DemoConfirmBooking(self, **opt):
        return request.render("theme_25fit.demo_confirm_booking")

    @http.route(['/demo-booking-details'], type='http', auth="public", website=True, sitemap=True)
    def DemoBookingValidate(self, **opt):
        return request.render("theme_25fit.demo_booking_details")

    @http.route(['/demo-renew-plan-step-1'], type='http', auth="public", website=True, sitemap=True)
    def DemoReviewPlanStep1(self, **opt):
        return request.render("theme_25fit.demo_renew_plan_step_1")

    @http.route(['/demo-renew-plan-step-2'], type='http', auth="public", website=True, sitemap=True)
    def DemoReviewPlanStep2(self, **opt):
        return request.render("theme_25fit.demo_renew_plan_step_2")

    @http.route(['/demo-your-booking-information'], type='http', auth="public", website=True, sitemap=True)
    def DemoYourBookingInformation(self, **opt):
        return request.render("theme_25fit.demo_your_booking_information")

    @http.route(['/demo-about-us'], type='http', auth="public", website=True, sitemap=True)
    def DemoAboutUs(self, **opt):
        return request.render("theme_25fit.demo_about_us")

    @http.route(['/demo-about-ems'], type='http', auth="public", website=True, sitemap=True)
    def DemoAboutEms(self, **opt):
        return request.render("theme_25fit.demo_about_ems")