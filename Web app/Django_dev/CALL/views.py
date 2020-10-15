from django.shortcuts import render, HttpResponse
import boto3

# Cada funcion es una vista de la aplicacion web

s3 = boto3.resource('s3')


def home(request):

    if request.method == 'POST':
        print(request.FILES['file'])
        file_name = 'calls/' + str(request.FILES['file'])
        s3.Bucket('django-call-storage').put_object(Key=file_name, Body=request.FILES['file'])

    return render(request, 'CALL/home.html')


def about(request):

    return render(request, 'CALL/about.html')
