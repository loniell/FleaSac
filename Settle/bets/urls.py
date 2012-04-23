from django.conf.urls.defaults import patterns, include, url
from django.contrib.auth.views import logout
from django.views.generic.simple import redirect_to

urlpatterns = patterns('bets.views',
    url(r'^$', 'index'),
    url(r'^index', 'index'),
    #url(r'^logon', 'logon'),
    #url(r'^logout', logout, {'template_name': 'bets/index.html'} ), #, redirect_to, {'url': '/', 'permanent': True}),
    url(r'^register', 'register'),
    url(r'^#register', 'register'),
    #url(r'^loginSuccess', 'loginSuccess'),
    #url(r'^registerSuccess', 'registerSuccess'),
    url(r'^placebet', 'placebet'),
    url(r'^placebet/success/$', 'success'),
    url(r'^selectBetToWager', 'selectBetToWager'),
    url(r'^selectBetToDecide', 'selectBetToDecide'),
    url(r'^(?P<bet_id>\d+)/$', 'detail'),
    url(r'^(?P<bet_id>\d+)/participants/$', 'participants'),
    url(r'^(?P<bet_id>\d+)/wager/$', 'wager'),
    url(r'^(?P<bet_id>\d+)/decide/$', 'decide'),
    )
