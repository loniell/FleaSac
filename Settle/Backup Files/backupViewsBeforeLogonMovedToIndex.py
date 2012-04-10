from bets.models import *
from django.shortcuts import *
import datetime
from django.template import RequestContext
from django.http import HttpResponseRedirect, HttpResponse
from django.core.urlresolvers import reverse
from django.contrib.auth import authenticate, login, logout
from django.contrib.auth.forms import UserCreationForm
from PlaceBet import *
from PlaceWager import *
from RegistrationForm import *

#main view of 10 most recent bets
def index(request):
    list_of_bets = Bet.objects.all().order_by('-dueDate')[:10]
    return render_to_response('bets/index.html', {'user':request.user, 'list_of_bets': list_of_bets}, context_instance=RequestContext(request))

#register a user   
def register(request):
    if request.method == 'POST':
        form = RegisterForm(request.POST)
        if form.is_valid():
            user = form.save()
            return render_to_response('bets/registerSuccess.html', {'user': user})
    else:
        form = RegisterForm()
 
    return render_to_response('bets/register.html',  {'form': form,}, context_instance=RequestContext(request))

#display success screen for a user being registered
def registerSuccess(request, user):
    return render_to_response('bets/registerSuccess.html', {'user': user}) 

#logon a user
def logon(request):
    error = ""
    if request.method == "POST":
        username = request.POST['username']
        password = request.POST['password']
        user = authenticate(username=username, password=password)
        if user is not None:
            if user.is_active:
                login(request, user)
                return render_to_response('bets/loginSuccess.html', {'user': user})
            else:
                error="Your account has been disabled."
                return render_to_response('bets/logon.html', {'error': error}, context_instance=RequestContext(request))
        else:
            error="FAIL. Your username or password is incorrect."
            return render_to_response('bets/logon.html', {'error': error}, context_instance=RequestContext(request)) 
    else:
        return render_to_response('bets/logon.html', context_instance=RequestContext(request))

#display success screen for a user logging in
def loginSuccess(request, user):
    return render_to_response('bets/loginSuccess.html', {'request': request, 'user': user})
    
def logout(request):
    return HttpResponseRedirect('bets/logout.html')  
   
def placebet(request):
    #CHANGE DUEDATE ONCE ADD IT INTO HTML FORM
    if request.method == "POST":
        itemOfDispute=request.POST['itemOfDispute']
        wager=request.POST['wager']
        position=request.POST['position']
        bet = placeBet(itemOfDispute, datetime.datetime.now(), request.user, position, wager)
        return render_to_response('bets/success.html', {'bet': bet})
    else:
        return render_to_response('bets/placebet.html', context_instance=RequestContext(request))

#displays "success" when bet is placed
def success(request, bet):
    list_of_bets = Bet.objects.all().order_by('-dueDate')[:10]
    return render_to_response('bets/success.html', {'bet': bet})

#displays list of bets you want to place a wager on
def selectBetToWager(request):
    list_of_bets = Bet.objects.all().order_by('-dueDate')[:10]
    return render_to_response('bets/selectBetToWager.html', {'list_of_bets': list_of_bets})

#displays the details of a bet
def detail(request, bet_id):
    bet = get_object_or_404(Bet, pk=bet_id)
    return render_to_response('bets/detail.html', {'bet': bet})


def participants(request, bet_id):
    return HttpResponse("You're looking at the participants of bet %s." % bet_id)

#displays the details of the bet you are placing a wager on, and allows you to place the wager 
def wager(request, bet_id):
    error=""
    bet = get_object_or_404(Bet, pk=bet_id)
    if request.method == "POST":
        wager=request.POST['wager']
        position=request.POST['position']
        result = placeNewWager(wager, position, request.user, bet_id)
        if result == "fail":
            #the user has already been involed with this bet...let them know
            error = "You already told us what you think about this. Move along."
            return render_to_response('bets/wager.html', {'bet': bet, 'error': error})
        else:
            bet = result 
        return render_to_response('bets/success.html', {'bet': bet})
    else:
        return render_to_response('bets/wager.html', {'bet': bet}, context_instance=RequestContext(request))

#displays list of bets you want to give outcome of 
def selectBetToDecide(request):
    #get all bets that are "Proposed"
    list_of_bets = Bet.objects.filter(status='P').order_by('-dueDate')[:10]
    return render_to_response('bets/selectBetToDecide.html', {'list_of_bets': list_of_bets})

#give the outcome of a bet -- win, lose, etc. 
def decide(request, bet_id):
    bet = get_object_or_404(Bet, pk=bet_id)
    return render_to_response('bets/decide.html', {'bet': bet})
    
    