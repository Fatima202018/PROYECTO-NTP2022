import React from "react";

export default function Table({data,editProduct,deleteProduct}) {
  return (
   <>
           {data.map((paciente, index) => (
            <ul id="citas" class="list-group lista-citas"><div class="cita p-3" data-id="1665089338349"><h2 class="card-title font-weight-bolder">{paciente.nombre_mascota}</h2><p>


            <span class="font-weight-bolder">Propietario: </span> {paciente.nombre_cliente + " " + paciente.apellido_cliente}
        </p><p>
            <span class="font-weight-bolder">Fecha: </span> {paciente.fecha}
        </p><p>
            <span class="font-weight-bolder">Hora: </span> {paciente.hora}
        </p><p>
            <span class="font-weight-bolder">Síntomas: </span> {paciente.sintomas}

        </p><button class="btn btn-danger mr-2">Eliminar <svg fill="none" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" viewBox="0 0 24 24" stroke="currentColor"><path d="M10 14l2-2m0 0l2-2m-2 2l-2-2m2 2l2 2m7-2a9 9 0 11-18 0 9 9 0 0118 0z"></path></svg></button><button class="btn btn-info">Editar <svg fill="none" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" viewBox="0 0 24 24" stroke="currentColor"><path d="M15.232 5.232l3.536 3.536m-2.036-5.036a2.5 2.5 0 113.536 3.536L6.5 21.036H3v-3.572L16.732 3.732z"></path></svg></button></div></ul>
         
        ))}
   </>
    
  );
}
