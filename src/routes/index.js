const {Router} = require('express')
 const router = Router();

router.get('/', (req, res) => {
    res.render('images.hbs')
});


router.get('/images/add',(req,res)=> {
    res.render('image_form.hbs');
});
//Esta ruta nos permite pintar el formulario, renderiza la vista

module.exports = router;