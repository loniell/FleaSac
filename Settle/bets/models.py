from django.db import models
from django.contrib.auth.models import User
import datetime

# Create your models here.

# Category Object (may get more complex)
class Category(models.Model):
    def __unicode__(self):
        return self.category
    category = models.CharField(max_length=50)

# Metadata for Person
class Demographics(models.Model):
    def __unicode__(self):
        return '' + self.firstName + self.lastName 
    firstName = models.CharField(max_length=50)
    lastName = models.CharField(max_length=50)
    #Define options for gender:
    GENDER_CHOICES = (
        ('M', 'Male'),
        ('F', 'Female'),
        ('X', 'Who cares?'),
    )
    gender = models.CharField(max_length=1, choices=GENDER_CHOICES)
    dateOfBirth = models.DateTimeField('Date of Birth')
    email = models.CharField(max_length=160)
    location = models.CharField(max_length=160)
    #profile picture (ImageField)


# A Person (Participant, User)
class Person(models.Model):
    def __unicode__(self):
        return self.demographics.firstName + " " + self.demographics.lastName
    demographics = models.ForeignKey(Demographics)
    score = models.IntegerField()
    user = models.OneToOneField(User)
    #Networks

#Defines a person as involved in a bet: their position and wager
class PersonBet(models.Model):
    def __unicode__(self):
        return 'Person: ' + self.person.demographics.firstName + ' ' + self.person.demographics.lastName +  ', Position: ' + self.position + ', Wager: ' + str(self.wager)
    person = models.ForeignKey(Person)
    position = models.CharField(max_length=160)
    wager = models.IntegerField()

# Standard Bet Object 
class Bet(models.Model):
    def __unicode__(self):
        return self.itemOfDispute
    itemOfDispute = models.CharField(max_length=160)
    dueDate = models.DateTimeField('Bet Due Date')
    STATUS_CHOICES = (
        ('P', 'Proposed'),
        ('A', 'Agreed'),
        ('C', 'Closed'),
        ('D', 'Disputed'),
        ('X', 'Cancelled'),
    )
    status = models.CharField(max_length=1, choices=STATUS_CHOICES)
    openDate = models.DateTimeField('Date Opened')
    closeDate = models.DateTimeField('Date Closed')
    categories = models.ManyToManyField(Category)
    personBets = models.ManyToManyField(PersonBet)
    
    