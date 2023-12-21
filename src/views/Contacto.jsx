import React from "react";
import "./css/contacto.css";

const Contacto = () => {
  const handleSubmit = (event) => {
    event.preventDefault();
    event.target.reset();
  };

  return (
    <div className="contactContainer">
      <h1 className="mt-5">Cuentanos, ¿en que te podemos ayudar?</h1>
      <form onSubmit={handleSubmit} className="formContainer">
        <label htmlFor="email">Correo:</label>
        <section className="form-group mt-2">
          <input
            type="text"
            name="email"
            id="email"
            className="form-control"
            placeholder="tuemail@ejemplo.com"
          />
        </section>
        <label className="mt-3" htmlFor="description">
          Descripción
        </label>
        <section className="form-group mt-4">
          <textarea
            className="form-control"
            name="description"
            id="description"
          ></textarea>
        </section>

        <section className="form-group mt-4">
          <input type="submit" value="Enviar" className="btn btn-danger" />
        </section>
      </form>
    </div>
  );
};

export default Contacto;
