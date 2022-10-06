import React from "react";

export default function Table({data,editClient,deleteClient}) {
  return (
    <table className="table table-responsive-sm">
      <thead>
        <tr>
          <th>#</th>
          <th>NOMBRE</th>
          <th>APELLIDO</th>
          <th>TELEFONO</th>
          <th>EMAIL</th>
          <th>ACCIONES</th>
        </tr>
      </thead>
      <tbody>
        {data.map((cliente, index) => (
          <tr key={index}>
            <td>{cliente.id}</td>
            <td>{cliente.nombre_cliente}</td>
            <td>{cliente.apellido_cliente}</td>
            <td>{cliente.telefono}</td>
            <td>{cliente.email}</td>
            <td>
              <div className="row">
                <button
                  onClick={() => editClient(cliente.id)}
                  className="btn btn-outline-info btn-sm mr-2"
                >
                  Editar
                </button>
                <button
                  onClick={() => deleteClient(cliente.id)}
                  className="btn btn-danger btn-sm"
                >
                  Eliminar
                </button>
              </div>
            </td>
          </tr>
        ))}
      </tbody>
    </table>
  );
}
