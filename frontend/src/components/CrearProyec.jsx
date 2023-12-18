import React, { useState } from 'react';
import axios from 'axios';

const ProyectoForm = () => {
  const [proyecto, setProyecto] = useState({
    Tema: '',
    Descripcion: '',
    Monto: 0,
    Bases: ''
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setProyecto((prevProyecto) => ({
      ...prevProyecto,
      [name]: value
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      await axios.post('http://localhost:5000/api/proyec/crear', proyecto);
      console.log('Proyecto creado exitosamente');
      // Puedes redirigir a otra página o realizar otras acciones después de la creación
    } catch (error) {
      console.error('Error al crear el proyecto', error);
    }
  };

  return (
    <form onSubmit={handleSubmit}>
      <label>
        Tema:
        <input type="text" name="Tema" value={proyecto.Tema} onChange={handleChange} />
      </label>
      <br />
      <label>
        Descripcion:
        <textarea name="Descripcion" value={proyecto.Descripcion} onChange={handleChange} />
      </label>
      <br />
      <label>
        Monto:
        <input type="number" name="Monto" value={proyecto.Monto} onChange={handleChange} />
      </label>
      <br />
      <label>
        Bases:
        <input type="text" name="Bases" value={proyecto.Bases} onChange={handleChange} />
      </label>
      <br />
      <button type="submit">Crear Proyecto</button>
    </form>
  );
};

export default ProyectoForm;