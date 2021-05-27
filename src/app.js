const express = require('express');
const morgan = require('morgan');
const multer = require('multer');
const path = require('path');
const exphbs = require('express-handlebars');

// Initializacions

const app = express();


//Setting
app.set('port' ,3000)
app.set('views', path.join(__dirname,'views'));
app.engine('.hbs',exphbs({
    defaultLayout:'main',
    layoutsDir: path.join(app.get('views'),'layouts'),
    partialsDir:path.join(app.get('views'),'partials'),extname :'.hbs'
    //todas las vistas en comun, configuracion de plantillas
}))

app.set('viewa engine','.hbs');

//Middel Funciones que se ejecutan antes de llegar a la ruta 

app.use()
//Para obtener la informacion que se suba 