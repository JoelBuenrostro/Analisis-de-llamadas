from django.shortcuts import render, HttpResponse
import boto3

# Cada funcion es una vista de la aplicacion web

s3 = boto3.resource('s3')


def home(request):

    if request.method == 'POST':
        files = request.FILES.getlist('files')
        for file in files:
            file_name = 'calls/' + str(file)
            s3.Bucket('django-call-storage').put_object(Key=file_name, Body=file)

    return render(request, 'CALL/home.html')


def about(request):

    return render(request, 'CALL/about.html')
