//Importar paquetes requeridos de node
const {response}= require('express')


//Importacion de los modelos 
const Ambiente=require('../models/ambiente')

//insercion, modificacion de datos

//consultar
const ambienteGet = async(req, res = response)=>{
    const{nombre_usuario}= req.query // desestructuracion obtiene lo que se manda del navegador
    

    //Buscar todos los usuarios colsultar los uasuarios
    const ambientes = await Ambiente.find()
    res.json({
        ambientes
    })
}


const ambientePost= async(req, res= response)=>{
    //captura atributos o parametros
    const body=req.query
    //instaciar el objeto
   // const{nombre,password,rol,estado}=req.query
    const ambiente= new Ambiente(body)

    //guardar objeto
    await ambiente.save()

    res.json({
        msg:'La insercion se efectuo exitosamente'
    })

}


module.exports={
    ambienteGet,
    ambientePost
}
