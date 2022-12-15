const {request, response} = require("express");
const pool=require("../db/connection");
const {modeloProyecto, updateProyecto} = require("../models/materiales");

//Recibir datos de todos los Materiales
const getProyecto = async(req=request,res=response)=>{
    
    let conn;

    try{
        conn = await pool.getConnection()
        const users = await conn.query(modeloProyecto.queryGetProyecto,(error)=>{throw new error})
        if(!users){
            res.status(404).json({msg:"No se encontraron registros"})
            return
        }
        res.json({users})
    }catch(error){
        console.log(error)
        res.status(500).json({error})
    }finally{
        if(conn){
            conn.end()
        }
    }
}

//Obtener datos de un Material por el ID
const getProyectoByID = async (req = request, res = response) =>{
    const {id} = req.params
    let conn;
    try{ 
        conn = await pool.getConnection()
        const [user] = await conn.query(modeloProyecto.queryProyectoByID,[id],(error)=>{throw new error})
        if (!user){
            res.status(404).json({msg: `No se encontró registro con el ID ${id}`})
            return
        }
        res.json({user})
    } catch (error){
        console.log(error)
        res.status(500).json({error})
    } finally{
        if(conn){
            conn.end()
        }
    }
}

//Desactivar un Material por su ID
const deleteProyectobyID = async (req = request, res = response) =>{
    const {id} = req.query
    let conn;
    try{ 
        conn = await pool.getConnection()
        const {affectedRows} = await conn.query(modeloProyecto.queryDeleteProyectoByID,[id],(error)=>{throw new error})
        
        if (affectedrows === 0){
            res.status(404).json({msg: `No se pudo eliminar el registro con el ID ${id}`})
            return
        }
        res.json({msg: `Se elimino satisfactoriamente el registro con el ID ${id}`})
    } catch (error){
        console.log(error)
        res.status(500).json({error})
    } finally{
        if(conn){
            conn.end()
        }
    }
}

//Añadir un nuevo Material
const addProyecto = async (req = request, res = response) =>{
    const {
        Material,
        Cantidad,
        Activo
    } = req.body
    if (
        !Material ||
        !Cantidad ||
        !Activo
    ){ res.status(400).json({msg:"Falta información del material"})}
    
    let conn;
    try{ 
        conn = await pool.getConnection()
        //No exista el material antes de insertar
        const [user]=await conn.query(modeloProyecto.queryProyectoExists,[Material])
        if (user){
            res.status(403).json({msg:`El material ${Material} ya se encuentra registrado`})
            return
        }

        const {affectedRows} = await conn.query(modeloProyecto.queryAddProyecto,[
            Material,
            Cantidad,
            Activo
        ],(error)=>{throw new error})
        if(affectedRows===0){
            res.status(404).json({msg:`No se pudo agregar el registro del material ${Material}`})
            return
        }
        res.json({msg:`Se agrego satisfactoriamente el registro con el material ${Material}`})
    } catch (error){
        console.log(error)
        res.status(500).json({error})
    } finally{
        if(conn){
            conn.end()
        }
    }
}

//Actualizar información del Material
const updateProyectoByProyecto = async (req = request, res = response) =>{
    const {
        Material,
        Cantidad
     
    } = req.body

    if (
        !Material||
        !Cantidad      
    ){
        res.status(400).json({msg:"Falta información del material"})
        return
    }

    let conn;
    try {
        conn = await pool.getConnection()
        const [user]=await conn.query(modeloProyecto.queryGetProyectoInfo,[Material])
        if (!user){
            res.status(403).json({msg: `El material ${Material} no se encuentra registrado`})
        }
        const {affectedRows} = await conn.query(updateProyecto(
            Cantidad,
            Material
        ),(error)=>{throw new error})
        if (affectedRows === 0) {
            res.status(404).json({msg:`No se pudo actualizar el registro del material ${Material}`})
            return
        }
        res.json({msg: `El material ${Material} se actualizo correctamente`})
    } catch (error) {
        console.log(error)
        res.status(500).json({error})
    }finally{
        if(conn){
            conn.end()
        }
    }
}

module.exports = {getProyecto, getProyectoByID, deleteProyectobyID, addProyecto, updateProyectoByProyecto}