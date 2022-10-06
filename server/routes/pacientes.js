import { Router } from "express";
import dbConnection from "../dbConnection.js"
const route = Router();

//GET ALL
route.get('/pacientes', (req,res)=>{
    const pacientes = dbConnection.query('SELECT pacientes.id,pacientes.nombre_mascota,pacientes.fecha,pacientes.hora,pacientes.sintomas,clientes.nombre_cliente,clientes.apellido_cliente FROM `pacientes` INNER JOIN clientes ON pacientes.propietario_id=clientes.id',(err,result)=>{
        res.status(200).json(result)
    })
})
//GET ID
route.get('/pacientes/:id', (req,res)=>{
    const pacientes = dbConnection.query('SELECT * FROM pacientes WHERE id=?',req.params.id,(err,result)=>{
        res.status(200).json(result)
    })
})
//POST
route.post('/pacientes', (req,res)=>{
    try{
        dbConnection.query("INSERT INTO pacientes SET ?",req.body,(err,result)=>{
            if(err) res.status(500).send(err)
            res.status(201).send('Inseted data')
        })

    }catch{
        res.status(500).send('Error al insertar')
    }
})
//PUT
route.put('/pacientes/:id', (req,res)=>{
    const {id} = req.params
    try{
        dbConnection.query("UPDATE pacientes SET ? WHERE id=?",[req.body, id],(err,result)=>{
            if(err) res.status(500).send(err)
            res.status(200).send('Update data')
        })

    }catch{
        res.status(500).send('Error al actualizar')
    }
})
//DELETE
route.delete('/pacientes/:id', (req,res)=>{
    const {id} = req.params
    try{
        dbConnection.query("DELETE FROM pacientes WHERE id=?",[id],(err,result)=>{
            if(err) res.status(500).send(err)
            res.status(200).send('Delete data')
        })

    }catch{
        res.status(500).send('Error al eliminar')
    }
})

export default route;