import { useForm } from 'react-hook-form';
import { createConcurso } from '../services/concurso.service'; // Ajusta la ruta según tu estructura
import { useNavigate } from 'react-router-dom';

const ConcursoForm = () => {
  const { register, handleSubmit, formState: { errors } } = useForm();
  const navigate = useNavigate();

  const onSubmit = async (data) => {
    try {
      const response = await createConcurso(data);
      if (response) {
        console.log(response); // Maneja la respuesta según tus necesidades
        navigate('/'); // Redirecciona a la lista de concursos después de crear
      }
    } catch (error) {
      console.error('Error al enviar el formulario de concurso:', error);
    }
  };

  return (
    <div className="form-container">
      <h2>Nuevo Concurso</h2>
      <form onSubmit={handleSubmit(onSubmit)}>
        <div className="form-group">
          <label htmlFor="nombre">Nombre del concurso:</label>
          <input {...register('nombre', { required: 'Este campo es obligatorio' })} />
          {errors.nombre && <span className="error-message">{errors.nombre.message}</span>}
        </div>

        <div className="form-group">
          <label htmlFor="montoTotal">Monto Total del Fondo:</label>
          <input {...register('montoTotal', { required: 'Este campo es obligatorio', min: { value: 1, message: 'El monto debe ser mayor que cero' } })} />
          {errors.montoTotal && <span className="error-message">{errors.montoTotal.message}</span>}
        </div>

        <div className="form-group">
          <label htmlFor="montoRepartir">Monto a Repartir:</label>
          <input {...register('montoRepartir', { required: 'Este campo es obligatorio', min: { value: 1, message: 'El monto debe ser mayor que cero' } })} />
          {errors.montoRepartir && <span className="error-message">{errors.montoRepartir.message}</span>}
        </div>

        {/* Agrega más campos según tus necesidades */}

        <button type="submit">Crear Concurso</button>
      </form>
    </div>
  );
};

export default ConcursoForm;