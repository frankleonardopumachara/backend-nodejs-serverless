## Reto tecnico serverless aws

La estructura del proyecto consiste en lambda-get y lambda-post que representan
las funciones a invocar por el api gateway, cada una tiene sus respectivas depencias.

- La estructura de cada funcion es de la siguiente forma (por eje lambda-get):
- col-init: dependencias que se inicializaran en la etapa de cold start
- domain: contiene los errores de negocio y tipado
- services: contienes las funciones de negocio
- utils: utilidades
- index.ts el archivo principal donde se define la funcion

## Construccion

Para poder generar transpilar el codigo Typescript a Javascript, se necesita compilar el proyecto
para eso se utiliza esbuild como empaquetador, pasos:

```bash
# RECOMENDACION: USAR GIT BASH COMO TERMINAL YA QUE TIENE LOS COMANDOS DE LINUX (que en windows fallarian)
# VERSION DE NODE: este proyecto se contruyo la version 18.15.0, tenerlo en cuenta sino podria fallar la ejecucion
```

```bash
# ubicarse el la carpeta raiz
$ cd backend-nodejs-serverless

# instalar las dependencias (este comando instala las dependencias referenciadas en
# el package-lock.json, para evitar incompatibilidades de librerias)
$ npm ci

# ejecutar el comando npm run build, este comando genera 2 carpetas, una
# lambda-get-dist y lambda-post-dist
$ npm run build

# luego ejecutar el siguiente comando para configurar las credenciales de aws para desplegar las funciones
# reemplazar $AWS_ACCESS_KEY_ID y $AWS_SECRET_ACCESS_KEY con sus credenciales.
$ serverless config credentials --provider aws --key $AWS_ACCESS_KEY_ID --secret $AWS_SECRET_ACCESS_KEY

# luego ejecutar el comando de despliegue
$ serverless deploy
```

## Endpoints

se tiene los endpoints:

- GET users/{userId}, donde userId es de tipo UUID
- POST users, donde necesitamos un body de con el siguiente formato { "nombre": "test","correo": "test@gmail.com"}
- GET planets/{planetId}, donde planetId es un numero entero

## Ejecucion de los tests

```bash
# Ejecutar test unitarios
$ npm run test

# Obtener la cobertura de tests
$ npm run test:cov

```
