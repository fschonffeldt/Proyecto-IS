import React, { useState } from 'react';
import axios from 'axios';
import './EvaluacionForm.css'; // Ajusta la ruta según tu estructura
import 'bootstrap/dist/css/bootstrap.min.css'; // Importa el CSS de Bootstrap

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
      [name]: value,
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      await axios.post('http://localhost:5000/api/evaluacion/createEvaluacion', evaluacion);
      console.log('Evaluación creada exitosamente');
      // Puedes redirigir a otra página o realizar otras acciones después de la creación
    } catch (error) {
      console.error('Error al crear la evaluación', error);
    }
  };

  return (
    <div className="container mt-4">
      <h2 className="mb-4">Formulario de Evaluación</h2>

      <form onSubmit={handleSubmit}>
        <div className="mb-3">
          <label htmlFor="id_postulacion" className="form-label">
            ID Postulación:
          </label>
          <input
            type="text"
            className="form-control"
            id="id_postulacion"
            name="id_postulacion"
            value={evaluacion.id_postulacion}
            onChange={handleChange}
          />
        </div>

        <div className="mb-3">
          <label htmlFor="comentario" className="form-label">
            Comentario:
          </label>
          <textarea
            className="form-control"
            id="comentario"
            name="comentario"
            value={evaluacion.comentario}
            onChange={handleChange}
          />
        </div>

        <div className="mb-3">
          <label htmlFor="puntos" className="form-label">
            Puntos:
          </label>
          <input
            type="number"
            className="form-control"
            id="puntos"
            name="puntos"
            value={evaluacion.puntos}
            onChange={handleChange}
          />
        </div>

        <div className="mt-3">
          <button type="submit" className="btn btn-primary">
            Crear Evaluación
          </button>
        </div>
      </form>
    </div>
  );
};

export default EvaluacionForm;
