from django.contrib.auth.models import User
from django.contrib.auth import authenticate, login

def createUser(username, email, password, firstName, lastName, birthday, gender, location):
    #create_user(username, email, password)
    user = User.objects.create_user(username, email, password)
    user.first_name = firstName
    user.last_name = lastName
    