import webapp2
import json
import urllib2
import urllib
import jinja2
import os
import datetime
from google.appengine.api import users
from google.appengine.ext import ndb


jinja_environment = jinja2.Environment(loader=
    jinja2.FileSystemLoader(os.path.dirname(__file__)))

class Food(ndb.Model):
    # image = ndb.BlobProperty()
    personname = ndb.StringProperty()
    time_begin = ndb.StringProperty()
    food_type = ndb.StringProperty()
    # owner = ndb.UserProperty()
    location = ndb.StringProperty()
    # views = ndb.IntegerProperty()
    message = ndb.StringProperty()
    time_end = ndb.StringProperty()
    created = ndb.DateTimeProperty()
    date = ndb.StringProperty()

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
                users.create_login_url('/menu'))

        self.response.write('<html><body>%s</body></html>' % greeting)

class MainHandler(webapp2.RequestHandler):
    def get(self):
        template = jinja_environment.get_template("templates/food.html")
        self.response.write(template.render())

class AddPostHandler(webapp2.RequestHandler):
    def get(self):
        template = jinja_environment.get_template('templates/addPost.html')
        # user = users.get_current_user()
        self.response.write(template.render())

    def post(self):
        name = self.request.get("personname")
        food_type = self.request.get('food_type')
        location = self.request.get('location')
        date = self.request.get('date')
        time_begin = self.request.get('time_begin')
        time_end = self.request.get('time_end')
        message = self.request.get('message')

        my_food = Food(created=datetime.datetime.now(),
                        personname=name,
                        food_type=food_type.upper(),
                        location=location.upper(),
                        date=date,
                        time_begin=time_begin,
                        time_end=time_end,
                        message=message)
        key = my_food.put()
        self.response.headers['Content-Type'] = 'text/html'

        food_post = {
          'personname_answer': name,
          'food_type_answer': food_type,
          'location_answer': location,
          'date_answer': date,
          'time_begin_answer': time_begin,
          'time_end_answer': time_end,
          'message_answer': message
          }
        key = my_food.put()
        self.response.write(key.id())

        template = jinja_environment.get_template('templates/food2.html')
        self.response.write(template.render(food_post))

class ListPostHandler(webapp2.RequestHandler):
    def get(self):
        template = jinja_environment.get_template('templates/searchposts.html')
        self.response.out.write(template.render())

    def post(self):
        userInput = self.request.get("location")
        results = Food.query().fetch()
        template_vars = {
                'location': userInput,
                'post': []
                }
        for result in results:
            print result.location
            print userInput.upper()
            if result.location.upper() == userInput.upper():
                    template_vars['post'].append(result)

        print template_vars
        # else:
        #     self.response.out.write("We don't have that type of food yet. Sorry!")
        template = jinja_environment.get_template('templates/listposts.html')
        self.response.out.write(template.render(template_vars))

class MenuHandler(webapp2.RequestHandler):
    def get(self):
        template = jinja_environment.get_template('templates/menu.html')
        self.response.out.write(template.render())

class AllPostHandler(webapp2.RequestHandler):
    def get(self):
        results = Food.query().order(Food.created).fetch()
        template_vars = {
                'post': []
                }
        for result in results:
            template_vars['post'].append(result)

        print template_vars
        # else:
        #     self.response.out.write("We don't have that type of food yet. Sorry!")
        template = jinja_environment.get_template('templates/allposts.html')
        self.response.out.write(template.render(template_vars))

app = webapp2.WSGIApplication([
    ('/', MainHandler),
    ('/log_in', MainPage),
    ('/addpost', AddPostHandler),
    ('/search', ListPostHandler),
    ('/menu', MenuHandler),
    ('/allposts', AllPostHandler)
], debug=True)
