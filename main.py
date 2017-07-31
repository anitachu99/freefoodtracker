import webapp2
import json
import urllib2
import urllib
import jinja2
import os
from google.appengine.api import users


jinja_environment = jinja2.Environment(loader=
    jinja2.FileSystemLoader(os.path.dirname(__file__)))

# class Food(ndb.Model):


class MainPage(webapp2.RequestHandler):
    def get(self):

        template = jinja_environment.get_template("templates/food1.html")
        self.response.write(template.render())

        user = users.get_current_user()
        if user:
            greeting = ('Welcome, %s! (<a href="%s">sign out</a>)' %
                (user.nickname(), users.create_logout_url('/')))
        else:
            greeting = ('<a href="%s">Sign in or register</a>.' %
                users.create_login_url('/'))

        self.response.write('<html><body>%s</body></html>' % greeting)

class MainHandler(webapp2.RequestHandler):
    def get(self):
        template = jinja_environment.get_template("templates/food.html")
        self.response.write(template.render())

class AddPostHandler(webapp2.RequestHandler):

    def get(self):
        template = jinja_environment.get_template('templates/addPost.html')
        self.response.write(template.render())

    def post(self):
        template = jinja_environment.get_template('templates/output_order.html')
        food_post = {
          'personname_answer': self.request.get('personname'),
          'food_type_answer': self.request.get('food_type'),
          'location_answer': self.request.get('location'),
          'date_answer': self.request.get('date'),
          'time_begin_answer': self.request.get('time_begin'),
          'time_end_answer': self.request.get('time_end'),
          'message_answer': self.request.get('message')
          }
        self.response.write(template.render(pizza_order))









app = webapp2.WSGIApplication([
    ('/', MainHandler),
    ('/log_in', MainPage)
], debug=True)
