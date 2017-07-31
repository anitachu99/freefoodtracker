import webapp2
import json
import urllib2
import urllib
import jinja2
import os

jinja_environment = jinja2.Environment(loader=
    jinja2.FileSystemLoader(os.path.dirname(__file__)))

class MainHandler(webapp2.RequestHandler):
    def get(self):
        template = jinja_environment.get_template("")
        self.response.write(template.render())

    def post(self):










app = webapp2.WSGIApplication([
    ('/', MainHandler)
], debug=True)
