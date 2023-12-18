
import { useForm } from 'react-hook-form';
import { createfondos } from '../services/fondos.service'; // Ajusta la ruta según tu estructura
import { useNavigate } from 'react-router-dom';
const FondoForm = () => {
    const { register, handleSubmit, formState: { errors } } = useForm();
    const navigate = useNavigate();
  
    const onSubmit = async (data) => {
      try {
        const response = await createfondos(data);
        if (response) {
          console.log(response); // Maneja la respuesta según tus necesidades
          navigate('/'); // Redirecciona a la lista de fondos después de crear
        }
      } catch (error) {
        console.error('Error al enviar el formulario de fondo:', error);
      }
    };
  
    return (
      <div className="form-container">
        <h2>Nuevo Fondo</h2>
        <form onSubmit={handleSubmit(onSubmit)}>
          <div className="form-group">
            <label htmlFor="nombre">Nombre del fondo:</label>
            <input {...register('nombre', { required: 'Este campo es obligatorio' })} />
            {errors.nombre && <span className="error-message">{errors.nombre.message}</span>}
          </div>
  
          <div className="form-group">
            <label htmlFor="montoTotal">Monto Total:</label>
            <input {...register('montoTotal', { required: 'Este campo es obligatorio', min: { value: 1, message: 'El monto debe ser mayor que cero' } })} />
            {errors.montoTotal && <span className="error-message">{errors.montoTotal.message}</span>}
          </div>
  
          {/* Agrega más campos según tus necesidades */}
  
          <button type="submit">Crear Fondo</button>
        </form>
      </div>
    );
  };
  
  export default FondoForm;