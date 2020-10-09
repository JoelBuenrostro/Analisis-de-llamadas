from setuptools import setup, find_packages

setup(
    name="analizador",
    version="0.0.1",
    description='BBVA Open Innovation',
    author="Los Outliers",
    packages=find_packages(exclude=[]),
    install_requires=[
        "click",
        "SpeechRecognition"
    ],
    entry_points={
        'console_scripts': [
            'analizador=analizador.main:cli'
        ]
    }
)
