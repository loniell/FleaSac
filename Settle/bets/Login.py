from django.contrib.auth.models import User

def createUser(username, email, password, firstName, lastName, birthday, gender, location):
    user = User.objects.create_user(username, email, password)
