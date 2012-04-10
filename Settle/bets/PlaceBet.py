from bets.models import *
import datetime

#Creates the appropriate personBet object according to the user (Person), 
#their position, and their wager. 
#The personBet is then added to the appropriate bet
def placeBet(itemOfDispute, dueDate, user, position, wager):
    #get the person associated with the logged-on user 
    person = Person.objects.get(user = user)
    #create personBet
    personBet = PersonBet.objects.create(person = person, position = position, wager = wager)
    #create Bet
    bet = Bet(itemOfDispute=itemOfDispute, dueDate=dueDate, status='P', openDate=datetime.datetime.now())
    bet.save()
    #add personBet to the bet object 
    bet.personBets.add(personBet)
    return bet

    