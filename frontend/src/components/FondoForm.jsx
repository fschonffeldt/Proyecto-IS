import { useForm } from 'react-hook-form';
import { createfondos } from '../services/fondos.service';
import { useNavigate } from 'react-router-dom';
import './FondoForm.css';

const FondoForm = () => {
  const { register, handleSubmit, formState: { errors } } = useForm();
  const navigate = useNavigate();

  const onSubmit = async (data) => {
    try {
      const response = await createfondos(data);
      if (response) {
        console.log(response);
        navigate('/');
      }
    } catch (error) {
      console.error('Error al enviar el formulario de fondo:', error);
    }
  };

  return (
    <div className="container mt-5">
      <h2>Nuevo Fondo</h2>
      <form onSubmit={handleSubmit(onSubmit)}>
        <div className="mb-3">
          <label htmlFor="nombre" className="form-label">Nombre del fondo:</label>
          <input {...register('nombre', { required: 'Este campo es obligatorio' })} className={form-control ${errors.nombre ? 'is-invalid' : ''}} />
          {errors.nombre && <div className="invalid-feedback">{errors.nombre.message}</div>}
        </div>

        <div className="mb-3">
          <label htmlFor="montoTotal" className="form-label">Monto Total:</label>
          <input {...register('montoTotal', { required: 'Este campo es obligatorio', min: { value: 1, message: 'El monto debe ser mayor que cero' } })} className={form-control ${errors.montoTotal ? 'is-invalid' : ''}} />
          {errors.montoTotal && <div className="invalid-feedback">{errors.montoTotal.message}</div>}
        </div>

        {/* Agrega más campos según tus necesidades */}

        <button type="submit" className="btn btn-primary">Crear Fondo</button>
      </form>
    </div>
  );
};

export default FondoForm;