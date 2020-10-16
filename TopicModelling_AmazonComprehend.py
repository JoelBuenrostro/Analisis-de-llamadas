#! /usr/bin/env python3


import os
import time

# Para acceso a buckets S3
import boto3

# ARN del rol a utilizar por Amazon Comprehend
DATA_ACCESS_ARN = "arn:aws:iam::450415026056:role/AmazonComprehendDataAccess"
print("Usaremos el rol{}".format(DATA_ACCESS_ARN))

"""
Topic Modelling
=================
1. Configuramos los parámetros del proceso
2. Lanzamos el proceso
3. Hacemos poll al servicio hasta que el  proceso finalice o se detenga por otra razón
"""


# Creamos un cliente para acceder a S3
#   - Usará las credenciales actuales para AWS CLI
#   - Para informacion de cómo configurarlas, consultar https://docs.aws.amazon.com/cli/latest/userguide/cli-chap-configure.html
api = boto3.client('comprehend', region_name='us-east-2')
print("Accedemos a Amazon Comprehend usando {}".format(api.meta.endpoint_url))

# Definimos la configuración de datos de entrada
input_data_config = {
	"S3Uri": "s3://django-call-storage/transcript/prueba1.json", # s3://bucket/path_to_key
	"InputFormat": "ONE_DOC_PER_FILE", # Opciones: "ONE_DOC_PER_LINE", "ONE_DOC_PER_FILE"
}

# Definimos la configuración de datos de salida
output_data_config = {
	"S3Uri": "s3://comprehend-output-bbva/", # s3://bucket/path_to_key << el servicio añadirá el resto del path
}

# Creación del proceso de Amazon Comprehend
response = api.start_topics_detection_job(
	InputDataConfig=input_data_config,
	OutputDataConfig=output_data_config,
	DataAccessRoleArn=DATA_ACCESS_ARN,
	JobName="Test Topic Modelling Demo",
	)

# Obtenemos el JobId asignado por el servicio Comprehend
job_id = None
if response:
	job_id = response['JobId']

# Poll all servicio en busca de resultados distintos a "SUBMITTED" e "IN_PROGRESS"
polling = True
while polling:
	response = api.describe_topics_detection_job(JobId=job_id)
	print("Status actual del proceso: {}".format(response['TopicsDetectionJobProperties']['JobStatus']))
	if response['TopicsDetectionJobProperties']['JobStatus'] in [ 'SUBMITTED', 'IN_PROGRESS']:
		# En proceso, esperamos y seguimos haciendo polling
		print("En proceso, esperamos 90 segundos...")
		time.sleep(90) # esperamos 90 segundos para reintentar
	else:
		polling = False
		if response['TopicsDetectionJobProperties']['JobStatus'] == 'FAILED':
			print("El proceso falló debido a:\n\t{}".format(response['TopicsDetectionJobProperties']['Message']))
		elif response['TopicsDetectionJobProperties']['JobStatus'] in [ 'STOP_REQUESTED', 'STOPPED' ]:
			print("el proceso fue interrumpido manualmente")
		else:
			print("Proceso terminado! Resultados disponibles en:\n{}\n".format(response['TopicsDetectionJobProperties']['OutputDataConfig']['S3Uri']))