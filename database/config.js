const mongoose= require('mongoose')
//crear conexion 
const dbConnection=()=>{
    try{
        mongoose.connect(process.env.MONGO_CNN)
        console.log('Conexion exitosa en la base de datos')
    }
    catch(error){
        console.log('Error en BD')
        throw new error('Error conectado a la base de datos')
    
    }

}

//Exportar la cadena de conexion
module.exports={dbConnection}