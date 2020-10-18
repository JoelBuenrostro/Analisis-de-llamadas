# Datos técnicos
Tradicionalmente la conversion de contenido de audio a texto ha requerido de mucha intervención humana. Alguien tiene que reproducir la grabación, capturar y revisar para después editar el contenido. Es aquí donde nuestra propuesta entra para brindar una solución en este reto. Les presentamos CALL (Call Analysis Linguistic Lab)

## Arquitectura
### Arquitectura en la nube de AWS
CALL aprovecha los modelos de Deep Learning de AWS Transcribe y AWS Comprehend  para encontrar relaciones en el texto combinando con las herramientas de análisis y búsqueda de indices altamente escalables para obtener valor en el contenido de audio.
CALL > S3 > AWS Transcribe > AWS Comprehend > AWS Athena > Quicksight


## Bibliotecas
### Django
Django es un framework de alto nivel basado en Python que promueve el desarrollo rápido y limpio con un diseño pragmático. Con Django se pueden llevar desarrollos del concepto al lanzamiento en cuestión de horas, compañías, organizaciones y gobiernos han usado Django para construir una gran cantidad de cosas. Algunos de los sitios que confían en Django son: Instagram, Mozilla, National Geographic y Pinterest.
### PyDub
Pydub es una librería creada para manipular audio de manera simple con una interface de alto nivel.
### Virtualenv
Virtualenv es una herramienta para crear ambientes aislados de Python para el control y gestión de librerías en ambientes de desarrollo
### awscli
La interfaz de línea de comandos (CLI) es una herramienta unificada para administrar los productos de AWS. awscli es un programa shell de línea de comando que ofrece cómodas características de productividad para ayudar a usuarios nuevos y avanzados de la interfaz de línea de comando de AWS.
### Boto3
Boto3 es el kit de desarrollo para AWS hecho para Python. Habilita a los desarrolladores la creación, configuración y administración de los servicios de AWS. Boto3 provee de una API fácil de usar asi como un acceso de bajo nivel a los servicios AWS

## Frameworks
### Django 
Django es una colección de componentes que están diseñados para cubrir varias de las áreas mas comunes de el desarrollo web.
Uno de los aspectos mas importantes en Django es el que muchos de sus componentes son independientes y pueden ser usados individualmente.
Django sirve el modelo MVC (Modelo-Vista-Controlador).


## Modelos
### Modelo ASR
El modelo ASR (Automatic Speech Recognition) es una disciplina de la inteligencia artificial capaz de procesar la señal de voz emitida por el ser humano y reconocer la información contenida en esta, convirtiéndola en texto o emitiendo ordenes que actúan sobre un proceso. En su desarrollo intervienen diversas disciplinas como: fisiología, acústica, lingüística, procesamiento de señales, inteligencia artificial y ciencias de la computación.