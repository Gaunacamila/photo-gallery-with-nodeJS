require('dotenv').config();
//Este modulo ayuda a Node a leer el archivo.env

//Conexion a la base de datos Voy a usar Mongo DB
const mongoose = require('mongoose');


mongoose.connect(process.env.MONGODB_URI, {
    useNewUrlParser : true  
})
    .then(db => console.log('DB is connected'))
    .catch(err => console.log(err));