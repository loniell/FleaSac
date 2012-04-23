from django.contrib.auth.forms import UserCreationForm
from django import forms
from django.contrib.auth.models import User
from models import *
 
class RegisterForm(UserCreationForm):
    email = forms.EmailField(label="E-Mail")
    firstName = forms.CharField(label="First Name")
    lastName = forms.CharField(label="Last Name")
    GENDER_CHOICES = (
        ('', '--Select--'),
        ('M', 'Male'),
        ('F', 'Female'),
    )
    gender = forms.ChoiceField(label="Gender", choices=GENDER_CHOICES)
    #dateOfBirth = forms.DateTimeField(label="Date of Birth")
 
    class Meta:
        model = User
        #fields = ("username", "email", "firstName", "lastName", "gender", "dateOfBirth")
        fields = ("username", "email", "firstName", "lastName", "gender")
        
    
    def clean_email(self):
        email = self.cleaned_data["email"]
 
        try:
            User.objects.get(email=email)
        except User.DoesNotExist:
            return email
 
        raise forms.ValidationError("A user with that email address already exists.")