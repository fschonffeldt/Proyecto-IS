import { useState } from 'react';
import { createpostulacion } from '../services/postulacion.service';

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
      const createdPostulacion = await createpostulacion(postulacionData);
      console.log('Postulación creada:', createdPostulacion);
      // Puedes redirigir a otra página después de la creación exitosa
      // (Asegúrate de tener configurado React Router si estás utilizando rutas)
    } catch (error) {
      console.error('Error al crear la postulación:', error.message);
      // Manejo de errores
    }
  };

  return (
    <div>
      <h2>Formulario de Postulación</h2>

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
