import React from "react";
import Client from "../../pages/Client";
export default function Form({onSubmit,onChange,cancelEdit,stateEdit,form,datosclientes}) {
  return (
    <div className="card shadow-lg p-3">
        <div className="card-header p-1 py-2">Agregar nueva cita</div>
        <form onSubmit={(e) => onSubmit(e, form.id)} method="POST" id="nueva-cita">
                    <legend class="mb-4">Datos del Paciente</legend>
                    <div class="form-group row">
                        <label class="col-sm-4 col-lg-4 col-form-label">Nombre Mascota:</label>
                        <div class="col-sm-8 col-lg-8">
                            <input onChange={(e) => onChange(e)} type="text" id="mascota" name="nombre_mascota" class="form-control" placeholder="Nombre Mascota"/>
                        </div>
                    </div>

                    <div class="form-group row">
                        <label class="col-sm-4 col-lg-4 col-form-label">Propietario:</label>
                        <div class="col-sm-8 col-lg-8">
                            <select onChange={(e) => onChange(e)} name="propietario_id" class="form-control" id="">
                                <option value="" required >Seleccionar un Propietario</option>
                                {
                                    datosclientes.map((Client) => (
                                        <option value= {Client.id}>
                                            {Client.nombre_cliente + " " + Client.apellido_cliente }
                                        </option>
                                    ))
                                }
                            </select>
                        </div>
                    </div>
                    
                    <div class="form-group row">
                        <label class="col-sm-4 col-lg-4 col-form-label">Fecha:</label>
                        <div class="col-sm-8 col-lg-8">
                            <input onChange={(e) => onChange(e)} type="date" id="fecha" name="fecha" class="form-control"/>
                        </div>
                    </div>

                    <div class="form-group row">
                        <label class="col-sm-4 col-lg-4 col-form-label">Hora:</label>
                        <div class="col-sm-8 col-lg-8">
                            <input onChange={(e) => onChange(e)} type="time" id="hora" name="hora" class="form-control"/>
                        </div>
                    </div>

                    <div class="form-group row">
                        <label class="col-sm-4 col-lg-4 col-form-label">Sintomas:</label>
                        <div class="col-sm-8 col-lg-8">
                            <textarea onChange={(e) => onChange(e)} id="sintomas" name="sintomas" class="form-control"></textarea>
                        </div>
                    </div>
                    <div class="form-group">
                            <button type="submit" class="btn btn-success w-100 d-block">Crear Cita</button>
                    </div>
                </form>
    </div>
  );
}
