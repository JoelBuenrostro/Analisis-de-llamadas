from django.shortcuts import render, HttpResponseRedirect
from django.contrib import messages
import boto3
from pydub import AudioSegment



# Cada funcion es una vista de la aplicacion web

s3 = boto3.resource('s3')
time = 180 * 1000  # segundos a milisegundos

def home(request):

    if request.method == 'POST':
        files = request.FILES.getlist('files')
        files_name = list(map(str, files))
        print(files_name)
        for file in files:
            file_name = 'calls/' + str(file)
            messages.success(request, "Se han subido tus archivos")
            return render(request, 'CALL/home.html', {'names': files_name})
            # s3.Bucket('django-call-storage').put_object(Key=file_name, Body=file)


    return render(request, 'CALL/home.html')


def about(request):

    return render(request, 'CALL/about.html')
