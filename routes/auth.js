//Importacion de terceros
const { Router } = require('express');
const { check } = require('express-validator');

//Mis importaciones
const { validarCampos } = require('../middlewares/validar_campos');
const { login } = require('../controllers/auth');


//Creacion del Router
const router = Router();



//POST
router.post('/login',[
    check('correo', 'El correo es obligatorio').isEmail(),
    check('password', 'La contraseña es obligatoria').not().isEmpty(),
    validarCampos
], login);



module.exports = router