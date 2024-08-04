const Role = require('../models/role');
const Usuario = require('../models/usuario');


const esRoleValido = async(rol = '') => {

    const existeRol = await Role.findOne({ rol });

    if(!existeRol) {
        throw new Error(`El rol ${ rol } no esta registrado en la BD`)
    }
}

const emailExiste = async( correo = '' ) => {

    //verificar si el correo existe

    const existeEmail = await Usuario.findOne({ correo });

    if ( existeEmail ) {
        throw new Error(`El correo: ${correo}, ya esta registrado`);
    }
}

const existeUsuarioPorId = async( id ) => {
    //verificar si el id existe

    const existeID = await Usuario.findById( id );

    if ( !existeID ) {
        throw new Error(`El id ${id} no existe`);
    } 
}


module.exports = {
    esRoleValido,
    emailExiste,
    existeUsuarioPorId
}
