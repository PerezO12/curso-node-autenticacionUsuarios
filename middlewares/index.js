

const  validarCampos  = require('../middlewares/validar_campos');
const  validarJWT  = require('../middlewares/validar-jwt');
const  validaRole = require('../middlewares/validar-roles');


module.exports = {
    ...validarCampos,
    ...validarJWT,
    ...validaRole
}