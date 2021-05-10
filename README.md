# MeaningTech-BackTest

Explicación de lo realizado:

Back:
Se creó una api con NestJs que contiene 5 rutas para manejar las consultas. La cual almacena los datos en MongoDB Atlas.
Se realizo el deploy en Heroku : https://meaning-tech.herokuapp.com/ 
Para tener todas las consultas :https://meaning-tech.herokuapp.com/consultas

Funcionamiento: luego de crear las consultas de los usuarios, la api consulta a la base de datos las consultas que tenga mayor antigüedad y consultas que no hayan sido respondidas luego de un periodo de 10 minutos. Entregando al agente la consulta más antigua como prioritaria.

Iniciación en localhost: realizar npm i en la carpeta back y luego npm run start:dev

Front:
El fron fue realizado con React, donde en la misma página se pueden hacer las consultas y las respuestas.
El deploy del front lo hice en netlify : https://meaning-tech.netlify.app/
Funcionamiento. cuenta con 2 páginas: 
- la página de Contact Us es un formulario que manda la información de la consulta a la api de heroku. 
- la página Answer permite responder las consultas si las hay.

Iniciación en localhost: realizar npm i en la carpeta front y luego npm start


DB: utilice mongoDB como base de datos ya que tenia un poco de experiencia y utilizo datos no relacionados 

Colección de Postman: https://www.getpostman.com/collections/1bc43596a07091e6d61a
