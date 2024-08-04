const mongoose = require('mongoose');

const dbConnection = async() => {

    try {

        await mongoose.connect( process.env.MONGODB_CN);
        
        console.log('Base de datos onnline');

    } catch (error) {
        console.error(error);
        throw new Error('Error a la hora de iniciar la base de datos')
    }


}

module.exports = {
    dbConnection
}