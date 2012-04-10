from bets.models import *
import datetime

def decideBet(outcome, betID, user):
    #First, update the closeDate for the bet. Now it's closed. 
    closeDate = datetime.datetime.now()
    bet = Bet.objects.get(pk=betID)
    bet.closeDate = closeDate
    bet.save()
    
    #Now, give points to the user who won
    #Future: take points from users, update PersonBet to indicate win or loss.
    person = Person.objects.get(user = user)
    personBet = bet.personBets.get(person = person)
    if outcome == "win":
        person.score = person.score + personBet.wager
    else:
        person.score = person.score - personBet.wager
    person.save()