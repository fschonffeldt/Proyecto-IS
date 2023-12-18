import React, { useState } from 'react';
import axios from 'axios';

const EvaluacionForm = () => {
  const [evaluacion, setEvaluacion] = useState({
    id_postulacion: '',
    comentario: '',
    puntos: 0,
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setEvaluacion((prevEvaluacion) => ({
      ...prevEvaluacion,
      [name]: value
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      await axios.post('http://localhost:5000/api/evaluacion/crear', evaluacion);
      console.log('Evaluación creada exitosamente');
      // Puedes redirigir a otra página o realizar otras acciones después de la creación
    } catch (error) {
      console.error('Error al crear la evaluación', error);
    }
  };

  return (
    <form onSubmit={handleSubmit}>
      <label>
        ID Postulación:
        <input type="text" name="id_postulacion" value={evaluacion.id_postulacion} onChange={handleChange} />
      </label>
      <br />
      <label>
        Comentario:
        <textarea name="comentario" value={evaluacion.comentario} onChange={handleChange} />
      </label>
      <br />
      <label>
        Puntos:
        <input type="number" name="puntos" value={evaluacion.puntos} onChange={handleChange} />
      </label>
      <br />
      <button type="submit">Crear Evaluación</button>
    </form>
  );
};

export default EvaluacionForm;
