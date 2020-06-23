from django.shortcuts import render
from django.views.generic import View, FormView, CreateView

from newsletter.forms import JoinForm


class HomeView(CreateView):
    template_name = 'pages/index.html'
    form_class = JoinForm
    success_url = '/'
