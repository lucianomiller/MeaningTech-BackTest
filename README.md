# MeaningTech-BackTest

Explicación de lo realizado:

Back:
Se creo una api con NestJs que contiene 5 rutas para manejar las consultas. La cual almacena los datos en MongoDB Atlas.
Se realizo el deploy en Heroku : https://meaning-tech.herokuapp.com/ 
Para tener todas las consultas :https://meaning-tech.herokuapp.com/consultas

Funcionamiento: luego de crear las consultas de los usuarios, la api consulta a la base de datos las consultas que tenga mayor antieguedad y consultas que no hallan sido respondidas luego de un periodo de 10 minutos. Entregando al agente la consulta mas antigua como prioritaria.

Iniciacion en localhost: realizar npm i e la carpeta back y luego npm run start:dev

Front:
