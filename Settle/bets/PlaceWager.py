from bets.models import *

#place a new wager on an existing bet. 
#creates the appropriate personBet
#adds the personBet to the appropriate bet 
def placeNewWager(wager, position, user, betID):
    #get the person associated with the logged-on user 
    person = Person.objects.get(user = user)
    #get bet corresponding to betID
    bet = Bet.objects.get(pk=betID)
    #check if user already involved in this bet
    if bet.personBets.filter(person=person).count() > 0:
        return "fail"
    personBet = PersonBet.objects.create(person = person, position = position, wager = wager)
    #add personBet to bet object 
    bet.personBets.add(personBet)
    return bet
    
    
# ISN'T THIS JUST THE SAME AS PLACING A BET?!?!?! -- MAYBE, BUT KEEP SEPARATE FOR NOW