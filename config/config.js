'use strict'

require('dotenv').config({path:'./enviroment/.env'});

const config={
    PORT:process.env.PORT,
    URL_DB_LOCAL:process.env.URL_DB_LOCAL,
    DB:process.env.DB
   }




module.exports=config;