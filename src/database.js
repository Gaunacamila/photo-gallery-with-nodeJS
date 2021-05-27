//Conexion a la base de datos Voy a usar Mongo DB

const mongoose = require('mongoose');

mongoose.connect(MONGODB_URI, {
    useNewUrlParser : true  
})
    .then(db => console.log('DB is connected'))
    .catch(err => console.log(err));