const {Router} = require('express')
 const router = Router();

 const Photo = require('../models/photo.js')
 //Me permite actualizar , crear y mas 
 const cloudinary = require('cloudinary')
 cloudinary.config({
    cloud_name : process.env.CLOUDINARY_CLOUD_NAM,
    api_key : process.env.CLOUDINARY_API_KEY,
    api_secret: process.env.CLOUDINARY_API_SECRET
 });

router.get('/', (req, res) => {
    res.render('images.hbs')
});


router.get('/images/add',(req,res)=> {
    res.render('image_form.hbs');
});
//Esta ruta nos permite pintar el formulario, renderiza la vista

router.post('/images/add', (req,res) => {
    console.log(req.body)
    const { title , description}
 = req.body;
     console.log(req.file);
    /*new Photo({
        title ,
        description,
        imageURL,
        public_id
    })
*/
    res.send('Received')
})
//Esta ruta es para recibir los datos

module.exports = router;