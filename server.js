'use strict'

const mongoose=require('mongoose');
const config = require('./config/config');


mongoose.set('useFindAndModify',false);
mongoose.Promise=global.Promise;


mongoose.connect(config.url + config.bd,{useNewUrlParser:true}).then(
    ()=>{
        console.log("Conexión a BD,perfecta y correcta");
        console.log(config.url);
    }
);

