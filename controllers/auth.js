const { response, request } = require("express");
const bcryptjs = require('bcryptjs')

const Usuario = require("../models/usuario");
const { generarJWT } = require("../helpers/generar-jwt");



const login = async(req = request, res = response) => {

    //obtener del req el correo y password
    const { correo, password } = req.body;

    try{
        //verificar si el email existe
        const usuario = await Usuario.findOne( {correo} );

        if(!usuario) {
            return res.status(400).json({
                msg: 'Usuario / Password no son correctos - correo'
            });
        }
        //sI EL USUARIO ESTA ACTIVO
        if(!usuario.estado) {
            return res.status(400).json({
                msg: 'Usuario no activo'
            });
        }
        //verificar password
        const validarPassword = bcryptjs.compareSync( password, usuario.password );

        if( !validarPassword ) {
            return res.status(400).json({
                msg: 'Usuario / Password no son correctos - password'
            });
        }

        //generar el json web token
        
        const token = await generarJWT( usuario.id );


        res.json({
            usuario,
            token
        })

    }catch(error){
        console.log(error);
        res.status(500).json({
            msg: 'Habla con el administrador'
        })
    }

}




module.exports = {
    login,
}