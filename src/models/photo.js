//Que datos vamos a almacenar 
const { Schema , model} = require('mongoose');

const Photo = new Schema ({
    title :  String,
    description : String,
    imagenURL : String,
    public_id : String

})
//Estoy definiendo que datos quiero para las fotos

module.exports = model('Photo', photo);
//Esta configuracion es para poder usar las fotos en la aplicacion 