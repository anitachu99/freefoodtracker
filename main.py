import webapp2
import json
import urllib2
import urllib
import jinja2
import os
import datetime
from google.appengine.api import users
from google.appengine.ext import ndb
#from social.backends.google import GoogleOAuth2


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

    # def save_profile(backend, user, response, *args, **kwargs):
    #     if isinstance(backend, GoogleOAuth2):
    #         if response.get('image') and response['image'].get('url'):
    #             url = response['image'].get('url')
    #             ext = url.split('.')[-1]
    #             user.avatar.save(
    #             '{0}.{1}'.format('avatar', ext),
    #             ContentFile(urllib2.urlopen(url).read()),
    #             save=False
    #             )
    #             user.save()

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
        results = Food.query().order(Food.created).fetch()
        results = results[::-1]
        template_vars = {
                'post': []
                }
        for result in results:
            print result.location
            template_vars['post'].append(result)

        print template_vars

        template = jinja_environment.get_template('templates/allposts.html')
        self.response.write(template.render(template_vars))

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

    def post(self):
        post_key = self.request.get('KeyID')
        post_key = ndb.Key(urlsafe=post_key)
        print "object = "+ str(post_key.id())
        #item = post_key.get()
        #print "item =" + item
        print "working"
        #post_key.delete()
        self.redirect('/allposts')

class CalendarHandler(webapp2.RequestHandler):
    def get(self):
        template = jinja_environment.get_template("templates/calendar.html")
        self.response.write(template.render())

class GetEvents(webapp2.RequestHandler):
    def get(self):
        results = Food.query().order(Food.created).fetch()
        events = []
        for result in results:
            month = result.date.split('-')[1]
            if month == self.request.get("month"):
                event_dict = {}
                event_dict["food_type"] = result.food_type
                event_dict["time_begin"] = result.time_begin
                event_dict["time_end"] = result.time_end
                event_dict["location"] = result.location
                event_dict["date"] = result.date
                events.append(event_dict)
        sendinginfo = json.dumps(events)
        self.response.write(sendinginfo)


app = webapp2.WSGIApplication([
    ('/', MainHandler),
    ('/log_in', MainPage),
    ('/addpost', AddPostHandler),
    ('/search', ListPostHandler),
    ('/menu', MenuHandler),
    ('/allposts', AllPostHandler),
    ('/calendar', CalendarHandler),
    ('/getevents', GetEvents)
], debug=True)
