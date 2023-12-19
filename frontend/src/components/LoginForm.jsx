import { useNavigate, Link } from 'react-router-dom';
import { useForm } from 'react-hook-form';

 function LoginForm() {

  const navigate = useNavigate();

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const onSubmit = (data) => {
    login(data).then(() => {
      navigate('/');
    });
  };

  return (
    <div className="container mt-5">
      <div className="row justify-content-center">
        <div className="col-md-6">
          <form onSubmit={handleSubmit(onSubmit)}>
            <h2 className="mb-4">Iniciar Sesión</h2>
            <div className="mb-3">
              <label htmlFor="email" className="form-label">
                Correo Electrónico
              </label>
              <input
                type="email"
                className="form-control"
                {...register('email', { required: true })}
              />
            </div>
            <div className="mb-3">
              <label htmlFor="password" className="form-label">
                Contraseña
              </label>
              <input
                type="password"
                className="form-control"
                {...register('password', { required: true })}
              />
            </div>
            {errors.exampleRequired && (
              <div className="alert alert-danger">Este campo es obligatorio</div>
            )}
            <button type="submit" className="btn btn-primary">
              Iniciar Sesión
            </button>
            <p className="mt-3">
              ¿No tienes una cuenta?{' '}
              <Link to="/registro">Crear cuenta</Link>
            </p>
          </form>
        </div>
      </div>
    </div>
  );
}

export default LoginForm;