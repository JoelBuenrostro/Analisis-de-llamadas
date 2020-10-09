import click
import sys


@click.command()
def cli():
    ''' 
    Informacion general sobre la herramienta y sus dependencias
    '''
    print(' ')
    print('BBVA Open Innovation')
    print(' ')
    print('''
    Construye una herramienta que analice llamadas telefonicas
    e identifique con la mayor precision posible el motivo de 
    la llamada''')
    print(' ')
    print('Version de la aplicacion : 0.0.1')
