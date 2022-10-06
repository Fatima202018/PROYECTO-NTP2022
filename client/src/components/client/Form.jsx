import React from "react";

export default function Form({onSubmit,onChange,cancelEdit,stateEdit,form}) {
  return (
    <div className="card shadow-lg p-3">
        <div className="card-header p-1 py-2">Agregar cliente</div>
        <form action="" onSubmit={(e) => onSubmit(e, form.id)} method="POST">
      <div className="form-group">
        <label htmlFor="">NOMBRE: </label>
        <input
          name="nombre_cliente"
          onChange={(e) => onChange(e)}
          type="text"
          className="form-control"
          value={form.nombre_cliente}
        />
      </div>
      <div className="form-group">
        <label htmlFor="">APELLIDO: </label>
        <input
          name="apellido_cliente"
          onChange={(e) => onChange(e)}
          className="form-control"
          value={form.apellido_cliente}
        ></input>
      </div>
      <div className="form-group">
        <label htmlFor="">TELEFONO: </label>
        <input
          name="telefono"
          type="text"
          onChange={(e) => onChange(e)}
          className="form-control"
          value={form.telefono}
        />
      </div>
      <div className="form-group">
        <label htmlFor="">EMAIL: </label>
        <input
          name="email"
          onChange={(e) => onChange(e)}
          type="email"
          className="form-control"
          value={form.email}
        />
      </div>
      {stateEdit === false ? (
        <button className="btn btn-success btn-sm" type="submit">
          Guardar
        </button>
      ) : (
        <>
          <button className="btn btn-secondary btn-sm mr-2" type="submit">
            Edit
          </button>
          <button
            onClick={() => {
              cancelEdit();
            }}
            className="btn btn-outline-danger btn-sm"
          >
            Cancelar
          </button>
        </>
      )}
    </form>
    </div>
  );
}
