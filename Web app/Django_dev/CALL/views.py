from django.shortcuts import render, HttpResponse

# Cada funcion es una vista de la aplicacion web


def home(request):

    return render(request, 'CALL/home.html')


def about(request):

    return render(request, 'CALL/about.html')
