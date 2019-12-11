from django.conf.urls import url
from basic_app import views

# template url
app_name = 'basic_app'

urlpatterns = [
    url(r'^register/$', views.register, name='register')
]
