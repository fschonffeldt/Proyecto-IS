import React, { useState, useEffect } from 'react';
import postulacionService from '../services/postulacion.service';

function PostulacionForm() {
  const [postulacionData, setPostulacionData] = useState({
    nombreRepresentante: '',
    ApellidoRepresentante: '',
    rutRepresentante: '',
    telefonoRepresentante: '',
    emailRepresentante: '',
    nombreInstitucion: '',
    rutInstitucion: '',
    emailInstitucion: '',
    direccionInstitucion: '',
    region: '',
    ciudad: '',
  });

  const [detallesConcurso, setDetallesConcurso] = useState({
    descripcion: '',
    montoRepartir: 0,
    numeroGanadores: 0,
  });

  useEffect(() => {
    const fetchDetallesConcurso = async () => {
      try {
        const detalles = await postulacionService.obtenerDetallesConcurso();
        setDetallesConcurso(detalles);
      } catch (error) {
        console.error(error.message);
      }
    };

    fetchDetallesConcurso();
  }, []);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setPostulacionData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      await postulacionService.crearPostulacion(postulacionData);
      // Puedes redirigir a otra página después de la creación exitosa
      // (Asegúrate de tener configurado React Router si estás utilizando rutas)
    } catch (error) {
      console.error(error.message);
      // Manejo de errores
    }
  };

  return (
    <div>
      <h2>Formulario de Postulación</h2>
      <p>Descripción del concurso: {detallesConcurso.descripcion}</p>
      <p>Monto a repartir: {detallesConcurso.montoRepartir}</p>
      <p>Número de ganadores: {detallesConcurso.numeroGanadores}</p>

      <form onSubmit={handleSubmit}>
        <label>
          Nombre Representante:
          <input
            type="text"
            name="nombreRepresentante"
            value={postulacionData.nombreRepresentante}
            onChange={handleChange}
          />
        </label>

        <label>
          Apellido Representante:
          <input
            type="text"
            name="ApellidoRepresentante"
            value={postulacionData.ApellidoRepresentante}
            onChange={handleChange}
          />
        </label>

        <label>
          Rut Representante:
          <input
            type="text"
            name="rutRepresentante"
            value={postulacionData.rutRepresentante}
            onChange={handleChange}
          />
        </label>

        <label>
          Teléfono Representante:
          <input
            type="text"
            name="telefonoRepresentante"
            value={postulacionData.telefonoRepresentante}
            onChange={handleChange}
          />
        </label>

        <label>
          Email Representante:
          <input
            type="text"
            name="emailRepresentante"
            value={postulacionData.emailRepresentante}
            onChange={handleChange}
          />
        </label>

        <label>
          Nombre Institución:
          <input
            type="text"
            name="nombreInstitucion"
            value={postulacionData.nombreInstitucion}
            onChange={handleChange}
          />
        </label>

        <label>
          Rut Institución:
          <input
            type="text"
            name="rutInstitucion"
            value={postulacionData.rutInstitucion}
            onChange={handleChange}
          />
        </label>

        <label>
          Email Institución:
          <input
            type="text"
            name="emailInstitucion"
            value={postulacionData.emailInstitucion}
            onChange={handleChange}
          />
        </label>

        <label>
          Dirección Institución:
          <input
            type="text"
            name="direccionInstitucion"
            value={postulacionData.direccionInstitucion}
            onChange={handleChange}
          />
        </label>

        <label>
          Región:
          <input
            type="text"
            name="region"
            value={postulacionData.region}
            onChange={handleChange}
          />
        </label>

        <label>
          Ciudad:
          <input
            type="text"
            name="ciudad"
            value={postulacionData.ciudad}
            onChange={handleChange}
          />
        </label>

        <button type="submit">Enviar Postulación</button>
      </form>
    </div>
  );
}

export default PostulacionForm;