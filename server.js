'use strict'

//////////////////////////////////////////
const mongoose=require('mongoose');
const app=require('./app');
const config=require('./config/config')
/////////////////////////////////////////

mongoose.set('useFindAndModify',false);
mongoose.Promise=global.Promise;


console.log("Variable de url es " + config.URL_DB_LOCAL);


mongoose.connect(config.URL_DB_LOCAL + config.DB,{useNewUrlParser:true}).then(
    ()=>{

        console.log("Conexión a BD,perfecta y correcta");
        
    }
);

