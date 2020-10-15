get_ipython().getoutput("pip install boto3")


get_ipython().getoutput("pip install awscli")


import boto3


# Servicios AWS
s3 = boto3.resource('s3')
transcribe = boto3.client('transcribe')
comprehend = boto3.client('comprehend')
athena = boto3.client('athena')
quicksight = boto3.client('quicksight') 


for bucket in s3.buckets.all():
    print(bucket.name)


audio = open('ejemplo.wav', 'rb')
s3.Bucket('django-call-storage').put_object(Key='llamada', Body=audio)
