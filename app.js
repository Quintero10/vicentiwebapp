'use strict'

//cargar módulos de node para crear servidor
const express=require('express');
const bodyparser=require('body-parser');


//Ejecutar express(http)
const app=express();

//cargar ficheros ruta

//Middlewares
app.use(bodyparser.urlencoded({extended:false}));
app.use(bodyparser.json());


//CORS

//Añadir prefijos de rutas

//Exportar módulo (fichero actual)
module.exports=app;