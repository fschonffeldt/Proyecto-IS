
import  { useState } from 'react';
import { createpostulacion } from '../services/postulacion.service';
import './PostulacionForm.css'; // Ajusta la ruta según tu estructura
import 'bootstrap/dist/css/bootstrap.min.css'; // Importa el CSS de Bootstrap

const PostulacionForm = () => {
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
    // Agrega más campos según sea necesario
  });
  const [successMessage, setSuccessMessage] = useState('');
  const [errorMessage, setErrorMessage] = useState('');

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
      setSuccessMessage('¡Postulación creada con éxito!');
      setErrorMessage(''); // Limpia cualquier mensaje de error existente
      console.log('Postulación creada:', createdPostulacion);
      // Puedes redirigir a otra página después de la creación exitosa
      // (Asegúrate de tener configurado React Router si estás utilizando rutas)
    } catch (error) {
      setSuccessMessage('');
      setErrorMessage('Error al crear la postulación. Por favor, verifica los datos.');
      console.error('Error al crear la postulación:', error.message);
      // Manejo de errores
    }
  };

  return (
    <div className="container mt-4">
      <h2 className="mb-4">Formulario de Postulación</h2>
      {successMessage && <div style={{ color: 'green' }}>{successMessage}</div>}
      {errorMessage && <div style={{ color: 'red' }}>{errorMessage}</div>}

      <form onSubmit={handleSubmit}>
        <div className="row">
          <div className="col-md-6 mb-3">
            <label htmlFor="nombreRepresentante" className="form-label">Nombre Representante:</label>
            <input
              type="text"
              className="form-control"
              id="nombreRepresentante"
              name="nombreRepresentante"
              value={postulacionData.nombreRepresentante}
              onChange={handleChange}
            />
          </div>

          <div className="col-md-6 mb-3">
            <label htmlFor="ApellidoRepresentante" className="form-label">Apellido Representante:</label>
            <input
              type="text"
              className="form-control"
              id="ApellidoRepresentante"
              name="ApellidoRepresentante"
              value={postulacionData.ApellidoRepresentante}
              onChange={handleChange}
            />
          </div>
        </div>

        <div className="row">
          <div className="col-md-6 mb-3">
            <label htmlFor="rutRepresentante" className="form-label">Rut Representante:</label>
            <input
              type="text"
              className="form-control"
              id="rutRepresentante"
              name="rutRepresentante"
              value={postulacionData.rutRepresentante}
              onChange={handleChange}
            />
          </div>

          <div className="col-md-6 mb-3">
            <label htmlFor="telefonoRepresentante" className="form-label">Teléfono Representante:</label>
            <input
              type="text"
              className="form-control"
              id="telefonoRepresentante"
              name="telefonoRepresentante"
              value={postulacionData.telefonoRepresentante}
              onChange={handleChange}
            />
          </div>
        </div>

        <div className="row">
          <div className="col-md-6 mb-3">
            <label htmlFor="emailRepresentante" className="form-label">Email Representante:</label>
            <input
              type="text"
              className="form-control"
              id="emailRepresentante"
              name="emailRepresentante"
              value={postulacionData.emailRepresentante}
              onChange={handleChange}
            />
          </div>

          <div className="col-md-6 mb-3">
            <label htmlFor="nombreInstitucion" className="form-label">Nombre Institución:</label>
            <input
              type="text"
              className="form-control"
              id="nombreInstitucion"
              name="nombreInstitucion"
              value={postulacionData.nombreInstitucion}
              onChange={handleChange}
            />
          </div>
        </div>

        <div className="row">
          <div className="col-md-6 mb-3">
            <label htmlFor="rutInstitucion" className="form-label">Rut Institución:</label>
            <input
              type="text"
              className="form-control"
              id="rutInstitucion"
              name="rutInstitucion"
              value={postulacionData.rutInstitucion}
              onChange={handleChange}
            />
          </div>

          <div className="col-md-6 mb-3">
            <label htmlFor="emailInstitucion" className="form-label">Email Institución:</label>
            <input
              type="text"
              className="form-control"
              id="emailInstitucion"
              name="emailInstitucion"
              value={postulacionData.emailInstitucion}
              onChange={handleChange}
            />
          </div>
        </div>

        <div className="row">
          <div className="col-md-6 mb-3">
            <label htmlFor="direccionInstitucion" className="form-label">Dirección Institución:</label>
            <input
              type="text"
              className="form-control"
              id="direccionInstitucion"
              name="direccionInstitucion"
              value={postulacionData.direccionInstitucion}
              onChange={handleChange}
            />
          </div>

          <div className="col-md-6 mb-3">
            <label htmlFor="region" className="form-label">Región:</label>
            <input
              type="text"
              className="form-control"
              id="region"
              name="region"
              value={postulacionData.region}
              onChange={handleChange}
            />
          </div>
        </div>

        <div className="row">
          <div className="col-md-6 mb-3">
            <label htmlFor="ciudad" className="form-label">Ciudad:</label>
            <input
              type="text"
              className="form-control"
              id="ciudad"
              name="ciudad"
              value={postulacionData.ciudad}
              onChange={handleChange}
            />
          </div>
          {/* Agrega más campos según sea necesario */}
        </div>

        <div className="mt-3">
          <button type="submit" className="btn btn-primary">Enviar Postulación</button>
        </div>
      </form>
    </div>
  );
};

export default PostulacionForm;

