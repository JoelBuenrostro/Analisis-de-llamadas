from django.shortcuts import render, HttpResponse
import boto3
from pydub import AudioSegment



# Cada funcion es una vista de la aplicacion web

s3 = boto3.resource('s3')
time = 180 * 1000  # segundos a milisegundos

def home(request):

    if request.method == 'POST':
        files = request.FILES.getlist('files')
        for file in files:

            sound = AudioSegment.from_file(file.file.name)
            first_3_min = sound[:time]
            # create a new file "first_half.mp3":
            file_name = 'calls/' + str(file).replace(" ", "")
            temp = first_3_min.export(format='wav')
            temp.seek(0)

            s3.Bucket('django-call-storage').put_object(Key=file_name, Body=temp)

    return render(request, 'CALL/home.html')


def about(request):

    return render(request, 'CALL/about.html')
