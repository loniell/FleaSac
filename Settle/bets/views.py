from bets.models import *
from django.shortcuts import *
import datetime
from django.template import RequestContext
from django.http import HttpResponseRedirect, HttpResponse
from django.core.urlresolvers import reverse, resolve
from django.contrib.auth import authenticate, login, logout
from django.contrib.auth.forms import UserCreationForm
from django.contrib.auth.views import *
from PlaceBet import *
from PlaceWager import *
from RegistrationForm import *
from DecideBet import *
from User import *

def index(request):
    form = RegisterForm()
    list_of_bets = Bet.objects.all().order_by('-dueDate')
    list_of_persons = Person.objects.all()
    list_of_users = User.objects.all()
    error = ""
    selectedUser = None
    if request.method == "POST" and request.POST.__getitem__("name") == "logon" :
        username = request.POST['username']
        password = request.POST['password']
        user = authenticate(username=username, password=password)
        if user is not None:
            if user.is_active:
                login(request, user)
                return render_to_response('bets/index.html', {'user': user, 'form': form, 'list_of_bets': list_of_bets, 'list_of_persons': list_of_persons}, context_instance=RequestContext(request))
            else:
                error="Your account has been disabled."
                return render_to_response('bets/index.html', {'error': error}, context_instance=RequestContext(request))
        else:
            error="Your username or password is incorrect."
            return render_to_response('bets/index.html', {'error': error}, context_instance=RequestContext(request)) 
    elif request.method == "POST" and request.POST.__getitem__("name") == "logout" :
        logout(request)
        #logout_then_login(request, {'login_url':'/bets/index.html'})
        return HttpResponseRedirect('/bets/#index')
        #return render_to_response('bets/index.html', context_instance=RequestContext(request))
    elif request.method == "POST" and request.POST.__getitem__("name") == "place_bet" :
        bet = request.POST['itemOfDispute']
        if bet == "":
            return render_to_response('bets/index.html', {'place_bet_error': "You gotta put something.", 'list_of_bets': list_of_bets, 'list_of_persons': list_of_persons}, context_instance=RequestContext(request)) 
        placebet(request)
        return HttpResponseRedirect('')
    elif request.method == "POST" and request.POST.__getitem__("name") == "place_bet_main" :
        bet = request.POST['itemOfDispute_main']
        if bet == "":
            return render_to_response('bets/index.html', {'place_bet_main_error': "You gotta put something.", 'list_of_bets': list_of_bets, 'list_of_persons': list_of_persons}, context_instance=RequestContext(request)) 
        placebet_main(request)
        return HttpResponseRedirect('')
    elif request.method == "POST" and request.POST.__getitem__("name") == "win" :
        betID = request.POST['betID']
        decideBet("win", betID, request.user)
        return HttpResponseRedirect('')
    elif request.method == "POST" and request.POST.__getitem__("name") == "lose" :
        betID = request.POST['betID']
        decideBet("lose", betID, request.user)
        return HttpResponseRedirect('')
    elif request.method == "POST" and request.POST.__getitem__("name") == "new_password" :
        register(request)
        return HttpResponseRedirect('')
    elif request.method == "POST" and request.POST.__getitem__("name") == "register_submit" :
        #register_message = register(request)
        register(request)
        return HttpResponseRedirect('')
    elif request.method == "POST" and request.POST.__getitem__("name") == "change_password" :
        password_message = "TEST"
        password1 = request.POST['password1']
        password2 = request.POST['password2']
        #form = RegisterForm(request.POST)
        if password1 != password2:
            password_message = "The passwords do not match."
            return render_to_response('bets/index.html',  {'password_message': password_message, 'form': form, 'list_of_bets': list_of_bets, 'list_of_persons': list_of_persons}, context_instance=RequestContext(request))
        else:
            request.user.set_password(password1)
            request.user.save()
            password_message = "Your password has been changed."
            return render(request, 'bets/index.html', {'password_message': password_message, 'form': form, 'list_of_bets': list_of_bets, 'list_of_persons': list_of_persons})
    elif request.method == "POST" and request.POST.__getitem__("name") == "view_user_profile" :
        username = request.POST['username']
        selectedUser = User.objects.get(username__exact=username)
        return render_to_response('bets/index.html',  {'list_of_users':list_of_users, 'selectedUser': selectedUser, 'list_of_bets': list_of_bets}, context_instance=RequestContext(request))
    else:
        return render_to_response('bets/register.html', {'list_of_users':list_of_users, 'user':request.user, 'form': form, 'list_of_bets': list_of_bets, 'list_of_persons': list_of_persons}, context_instance=RequestContext(request))

#register a user   
def register(request):
    if request.method == 'POST':
        form = RegisterForm(request.POST)
        if form.is_valid():
            username = request.POST['username']
            firstName = request.POST['firstName']
            lastName = request.POST['lastName']
            gender = request.POST['gender']
            user = form.save()
            createPerson(username, firstName, lastName, gender)
            register_message = "You're registered! Welcome!"
            return render_to_response('bets/register.html', {'register_message': register_message, 'form':form}, context_instance=RequestContext(request))
            #return render_to_response('bets/registerSuccess.html', {'user': user})
        else:
            register_message = "Uh oh! Something went wrong."
            return render_to_response('bets/register.html', {'register_message': register_message, 'form':form}, context_instance=RequestContext(request))
    else:
        form = RegisterForm()
    return render_to_response('bets/register.html',  {'form': form,}, context_instance=RequestContext(request))

def change_password(request):
    password_message = 'TESTING'
    if request.method == 'POST':
        password1 = request.POST['password1']
        password2 = request.POST['password2']
        form = RegisterForm(request.POST)
        if password1 != password2:
            password_message = "The passwords do not match."
            return render_to_response('bets/passwordChange.html',  {'form': form, 'password_message': password_message}, context_instance=RequestContext(request))
        elif form.is_valid():
            request.user.set_password(password1)
            request.user.save()
            password_message = "Your password has been changed."
            return render_to_response('bets/passwordChange.html',  {'form': form, 'password_message': password_message}, context_instance=RequestContext(request))
    else:
        form = RegisterForm()
    return render_to_response('bets/index.html', {'form': form,}, context_instance=RequestContext(request))

    

"""#display success screen for a user being registered
def registerSuccess(request, user):
    return render_to_response('bets/registerSuccess.html', {'user': user}) 
"""
"""
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
"""

#display success screen for a user logging in
def loginSuccess(request, user):
    return render_to_response('bets/loginSuccess.html', {'request': request, 'user': user})
    
#def logout(request):
 #   logout(request)
    #return render_to_response('bets/logout.html', context_instance=RequestContext(request))
  #  return HttpResponseRedirect('bets/index.html')  
   
def placebet(request):
    #CHANGE DUEDATE ONCE ADD IT INTO HTML FORM
    error=""
    if request.method == "POST":
        itemOfDispute=request.POST['itemOfDispute']
        wager=request.POST['wager']
        #position=request.POST['position']
        bet = placeBet(itemOfDispute, datetime.datetime.now(), request.user, '', wager)
        return render_to_response('bets/success.html', {'bet': bet, 'error': error}, context_instance=RequestContext(request))
    else:
        error="Failed to place bet."
        return render_to_response('bets/placebet.html', {'bet': bet, 'error': error}, context_instance=RequestContext(request))

def placebet_main(request):
    #CHANGE DUEDATE ONCE ADD IT INTO HTML FORM
    error=""
    if request.method == "POST":
        itemOfDispute=request.POST['itemOfDispute_main']
        wager=request.POST['wager_main']
        #position=request.POST['position']
        bet = placeBet(itemOfDispute, datetime.datetime.now(), request.user, '', wager)
        return render_to_response('bets/success.html', {'bet': bet, 'error': error}, context_instance=RequestContext(request))
    else:
        error="Failed to place bet."
        return render_to_response('bets/placebet.html', {'bet': bet, 'error': error}, context_instance=RequestContext(request))


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
    
    