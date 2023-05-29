//Migracion 
const {Schema, model}=require('mongoose')

const AmbienteSchema= Schema({
    //se define tipos de datos
    nroambiente:{
        type: Number,
        required: [true,'El campo  es requerido'],
        enum:[701,702,703,704,705,801,802,803,804,805]
        


    },
    fecha_hora:{
        type: Date,
        required:[true, 'La fecha y hora son requeridas']
    },

    temperatura:{
        type:Number,
        required:[true, 'La temperatura del ambiente es requerida'],
        min: -5,
        max: 50,
       
       

    },

    nombre_usuario:{
        type: String,
        required:[true, 'El nombre del usuario es obligatorio'],
       
    }
})
//este es el nombre del objeto Usuario
module.exports = model('Ambiente', AmbienteSchema)//Exportar el modelo

