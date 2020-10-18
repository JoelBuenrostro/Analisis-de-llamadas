# Equipo Los Outliers

## Integrantes

* Elizabeth Rodríguez Sánchez
* Brisa Tovar Hernandez
* Elizabeth Rodríguez
* Jesus Joel Buenrostro Jimenez
* Luis Germán Esquivel Grados
* Miguel Alejandro Corona Ramírez

## Reto : Speech Analytics

Construye una herramienta que analice llamadas telefónicas e identifique con la mayor precisión posible el motivo de la llamada.

## Reto : Integración de tecnologías AWS

Este reto reconocerá al equipo que mediante el uso de los servicios de AWS logre resolver alguno de los retos planteados en el Hackathon BBVA 2020.

## Nuestra solución

Hola equipo organizador, les platicamos un poco lo que tenemos pensado para la solución de este reto.

Entendemos la necesidad que tiene actualmente el centro de llamadas de escalar su capacidad en el servicio y análisis de todas las llamadas que reciben día a día. Es por eso que hemos decidido realizar una solución incorporando los servicios en la nube que Amazon ya tiene disponibles.

Pensamos brindar una solución que permite a los operadores cargar los audios de las llamadas de manera sencilla para ser procesados con técnicas de transcripción y aprendizaje automático, para finalmente ser visualizados con servicios de inteligencia empresarial basados en la nube que ayude en la toma de importantes decisiones de negocio y proporcione un sistema flexible y escalable.


# Como configurar Django para probar de manera local

Django-dev es el ambiente para probar con las funciones que integraran los servicios de AWS con la aplicación web.

Django-prod sera el ambiente con las utilidades ya probadas y con despliegue en AWS Elastic Beanstalk como entregable, el cual sera una copia con la misma estructura que Django-dev.

# Pasos para la configuración

1. Tener una version de Python 3 instalada y configurada
2. Instalar virtualenv con 'pip install virtualenv'
3. Hacer un fork o descargar el código del repositorio como zip y descomprimirlo
4. Con la linea de comandos, ubicarse de dentro de la carpeta 'Django' esto se puede lograr con el comando cd 'ruta' o cd .. para retroceder
5. Crear un ambiente virtual de Python para este proyecto, ejecutar el comando 'virtualenv venv'
6. Activar el ambiente virtual desde la linea de comando, para esto se debe posicionar en la carpeta Scripts y ejecutar el comando 'activate' si ha funcionado, aparecerá (venv) en la ruta de la consola
7. Posicionarse en la raíz de la carpeta Web app nuevamente
8. Instalar Django 2.1.1 con 'pip install django==2.1.1' desde cmd, esta es la version soportada por EB
9. Una vez instalado, entrar a la primer carpeta Django_dev desde la linea de comandos, ahi se encuentra Otra carpeta con el mismo nombre y un archivo manage.py, ejecutar el comando 'manage.py runserver'
10. Si todo ha salido bien, la consola mostrara la dirección http donde se esta ejecutando la aplicación local de Django, ir a esa dirección desde el navegador.

Ahora ya esta configurado Django de manera local para pruebas, para cerrar el server ctrl+c y para activarlo de nuevo para visualizar modificaciones repetir solamente el paso 9

Para desactivar el ambiente virtual de Python ejecutar en la linea de comandos 'deactivate' y para volver a usarlo repetir el paso 6.
