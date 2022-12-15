const {request, response} = require("express");
const pool=require("../db/connection");
const {modeloProyecto, updateProyecto} = require("../models/prestamos");

//Recibir datos de todos los Prestamos
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

//Obtener datos de un Prestamo por el ID
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

//Desactivar un Prestamo por su ID
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

//Añadir un nuevo Prestamo
const addProyecto = async (req = request, res = response) =>{
    const {
        PersonaEntrego,
        PersonaRecibo,
        Material,
        HoraPrestamo,
        TiempoPrestamo,
        HoraEntrega,
        FechaPrestamo, 
        Activo
    } = req.body
    if (
        !PersonaEntrego ||
        !PersonaRecibo ||
        !Material ||
        !HoraPrestamo ||
        !TiempoPrestamo ||
        !HoraEntrega ||
        !FechaPrestamo ||
        !Activo

    ){ res.status(400).json({msg:"Falta información del prestamo"})}
    
    let conn;
    try{ 
        conn = await pool.getConnection()
        //No exista el prestamo antes de insertar
        const [user]=await conn.query(modeloProyecto.queryProyectoExists,[PersonaEntrego])
        if (user){
            res.status(403).json({msg:`El prestamo ${PersonaEntrego} ya se encuentra registrado`})
            return
        }

        const {affectedRows} = await conn.query(modeloProyecto.queryAddProyecto,[
            PersonaEntrego,
            PersonaRecibo,
            Material,
            HoraPrestamo,
            TiempoPrestamo,
            HoraEntrega,
            FechaPrestamo, 
            Activo
        ],(error)=>{throw new error})
        if(affectedRows===0){
            res.status(404).json({msg:`No se pudo agregar el registro del prestamo ${PersonaEntrego}`})
            return
        }
        res.json({msg:`Se agrego satisfactoriamente el registro con el prestamo ${PersonaEntrego}`})
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
        PersonaEntrego,
        PersonaRecibo,
        Material,
        HoraPrestamo,
        TiempoPrestamo,
        HoraEntrega,
        FechaPrestamo

    } = req.body

    if (
        !PersonaEntrego ||
        !PersonaRecibo ||
        !Material ||
        !HoraPrestamo ||
        !TiempoPrestamo ||
        !HoraEntrega ||
        !FechaPrestamo
            
    ){
        res.status(400).json({msg:"Falta información del prestamo"})
        return
    }

    let conn;
    try {
        conn = await pool.getConnection()
        const [user]=await conn.query(modeloProyecto.queryGetProyectoInfo,[PersonaEntrego])
        if (!user){
            res.status(403).json({msg: `El prestamo ${PersonaEntrego} no se encuentra registrado`})
        }
        const {affectedRows} = await conn.query(updateProyecto(
            PersonaRecibo,
            Material,
            HoraPrestamo,
            TiempoPrestamo,
            HoraEntrega,
            FechaPrestamo,
            PersonaEntrego
        ),(error)=>{throw new error})
        if (affectedRows === 0) {
            res.status(404).json({msg:`No se pudo actualizar el registro del prestamo ${PersonaEntrego}`})
            return
        }
        res.json({msg: `El prestamo ${PersonaEntrego} se actualizo correctamente`})
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