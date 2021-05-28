const express = require('express');
const morgan = require('morgan');
const multer = require('multer');
const path = require('path');
const exphbs = require('express-handlebars');

// Initializacions

const app = express();
require('./database');


//Setting
app.set('port' ,process.env.PORT || 3000)
app.set('views', path.join(__dirname,'views'));
app.engine('.hbs',exphbs({
    defaultLayout:'main',
    layoutsDir: path.join(app.get('views'),'layouts'),
    partialsDir:path.join(app.get('views'),'partials'),extname :'.hbs'
    //todas las vistas en comun, configuracion de plantillas
}))

app.set('viewa engine','.hbs');

//Middel Funciones que se ejecutan antes de llegar a la ruta 

app.use(morgan('dev')); //Para que envie y reciba mensajes cortos por la consola
app.use(express.json());
app.use(express.urlencoded({extends :false}));
const storage = multer.diskStorage({
    destination :path.join(__dirname,'public/uploads'),
    filename : (req,file ,cb)=> {
        cb(null,new Date().getTime() + path.extname(file.originalname));
    }
})
//Configuro el destino de la imagen y el tamaño
//Filename configuro el ID de la imagen con el metodo de fecha y milisegundo y el origen de la imagen
app.use(multer({storage : storage}).single('image'));
//Procesa que cada vez que enviamos datos al servidor, se envia la imagen, esta la interpreta y la coloca dentro del servidor
//Para obtener la informacion que se suba 


//ROUTES 

app.use(require('./routes/index'));

module.exports = app;