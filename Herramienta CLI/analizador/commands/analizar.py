import click
import speech_recognition as sr


@click.command()
def cli():
    '''
    Analiza un audio y lo convierte a texto
    '''
    engine = sr.Recognizer()
    file = sr.AudioFile('calls/audio5.wav')

    with file as source:
        record = engine.record(source)
        text = engine.recognize_google(record, language='es-ES')

    print('Resultado de la conversion : ')
    print(text)
