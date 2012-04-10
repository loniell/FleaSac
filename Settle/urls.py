from django.conf.urls.defaults import patterns, include, url
from django.views.static import * 
from django.conf import settings


from django.contrib import admin
admin.autodiscover()

urlpatterns = patterns('',
    url(r'^bets/', include('bets.urls')),
    url(r'^admin/', include(admin.site.urls)),
    url(r'^media/(?P<path>.*)$', 'django.views.static.serve', {'document_root': settings.MEDIA_ROOT}),

)