import React from 'react'
import { useEffect } from 'react';
import { useState } from 'react';
import Navigation from '../components/Navigation'
//Import request API
import { getPaciente, getByIdPaciente, savePaciente, updatePaciente, destroyPaciente } from '../API/pacientes.js';
import { getClient } from '../API/cliente.js';

import Table from '../components/product/Table';
import Form from '../components/product/Form';
//Toastify
import { toast } from 'react-toastify';

export default function Product() {
    const [data,setData] = useState([]) //Obtiene todos los datos de pacientes
    const [clientes,setClientes] = useState([]) //Obtiene todos los datos de pacientes
    const [stateEdit,setStateEdit] = useState(false)
    const notifySuccess = (message)=> {
        toast.success(message, {
            position: "bottom-right",
            autoClose: 5000,
            hideProgressBar: false,
            closeOnClick: true,
            pauseOnHover: true,
            draggable: true,
            progress: undefined,
            });
    }
    const notifyError = (message)=> {
        toast.error(message, {
            position: "bottom-right",
            autoClose: 5000,
            hideProgressBar: false,
            closeOnClick: true,
            pauseOnHover: true,
            draggable: true,
            progress: undefined,
            });
    }
    const [form,setForm] = useState({
        id: '',
        nombre_mascota: '',
        propietario_id: '',
        fecha: '',
        hora: '',
        sintomas: ''
    })
    const validationForm = (form)=>{
        if(!form.nombre_mascota) {
            notifyError('Nombre de Mascota')
            return false;
        }
        if(!form.propietario_id) {
            notifyError('descripción vacia'); return false
        }
        if(!form.fecha) {
            notifyError('Ingrese un fecha')
            return false
        }
        if(!form.hora) {
            notifyError('Ingrese un hora')
            return false
        }
        if(!form.sintomas) {
            notifyError('Ingrese Sintoma')
            return false
        }
        return true

    }
    const getPacientes = async()=>{
        const result = await getPaciente()
        setData(result)
        const datosclientes = await getClient()
        setClientes(datosclientes)
    }
    useEffect(()=>{
        getPacientes();
    },[data])

    const onChange = (e)=>{
        const newData = {
            [e.target.name] : e.target.value,
            [e.target.name] : e.target.value, 
            [e.target.name] : e.target.value,
            [e.target.name] : e.target.value,
            [e.target.name] : e.target.value,

        }
        //Destructuring
        setForm({...form,...newData})
        
    } 

    const onSubmit = async(e,id)=>{
        e.preventDefault();
        if(validationForm(form)){

                savePaciente(form)
                notifySuccess('Producto agregado')
            
    
            setForm({
                nombre_mascota: '',
                propietario_id: '',
                fecha: '',
                hora: '',
                sintomas: ''
            })
        }
    }
    //edit product
    const editPaciente = async(id)=>{        
        const getPaciente = await getByIdPaciente(id)
        setForm({...getPaciente[0]})
        setStateEdit(true)

    }
    const cancelEdit = ()=>{
        setForm({
            nombre_mascota: '',
            propietario_id: '',
            fecha: '',
            hora: '',
            sintomas: ''
        })
        setStateEdit(false)
    }
    //delete product
    const deletePaciente = (id)=>{
        destroyPaciente(id)
    }

  return (
    <>
        <Navigation />

        <div className="container my-5">
            <div className="row">
                <div className="col-sm-12 col-md-7">
                    <Form datosclientes={clientes} cancelEdit={cancelEdit} stateEdit={stateEdit} onChange={onChange} onSubmit={onSubmit} form={form} />
                </div>
                <div className="col-sm-12 col-md-5">
                <Table data={data} editPaciente={editPaciente} deletePaciente={deletePaciente} />
                </div>
            </div>
        </div>
    </>

  )
}
