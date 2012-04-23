from django.contrib.auth.models import User
from django.contrib.auth import authenticate, login
from models import *
import datetime

def createPerson(username, firstName, lastName, gender):
    user = User.objects.get(username__exact=username)
    user.first_name = firstName
    user.last_name = lastName
    demographics = Demographics.objects.create(firstName=firstName, lastName=lastName, gender=gender, dateOfBirth=datetime.datetime.now(), email=user.email, location="LOCATION")
    person = Person.objects.create(user=user, score=0, demographics=demographics)
    user.save()
    person.save()
    