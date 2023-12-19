import { useForm } from "react-hook-form";
import axios from '../services/root.service';

const ProyectoForm = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
    reset
  } = useForm();

  const onSubmit = (data) => {
      console.log(data);
      axios.post('/proyec/crear', data)
          .then((response) => {
              console.log(response.data);
              reset(); 
          })
          .catch((error) => {
              console.error('Error al enviar los datos:', error);
          });
  };

  return (
    <div className='container d-flex justify-content-center align-items-center vh-100'>
      <div className='col-lg-6 my-form-container'>
      <h2>Crea un Proyecto</h2>
        <form onSubmit={handleSubmit(onSubmit)}>
          
          <div className="mb-3">
            <label className="form-label" htmlFor="Tema">Tema</label>
            <div>
              <input
                className="form-control" type="text" id="Tema"
                {...register("Tema", {
                  pattern: {
                    value: /^[a-zA-ZÀ-ÿ\s]{1,40}$/,
                    message: "El tema debe tener entre 1 y 40 letras."
                  }
                })}
              />
              {errors.Tema && (
                <span>{errors.Tema.message}</span>
              )}
            </div>
          </div>

          <div className="mb-3">
            <label className="form-label" htmlFor="Descripcion">Descripcion</label>
            <div>
              <input
                className="form-control" type="text" id="Descripcion"
                {...register("Descripcion", {
                  pattern: {
                    value: /^[a-zA-ZÀ-ÿ\s]{1,40}$/,
                    message: "El tema debe tener entre 1 y 40 letras."
                  }
                })}
              />
              {errors.Tema && (
                <span>{errors.Descripcion.message}</span>
              )}
            </div>
          </div>

          <div className="mb-3">
            <label className="form-label" htmlFor="Monto">Monto</label>
            <div>
              <input
                className="form-control" type="number" id="Monto"
                {...register("Monto", {
                  min: {
                    value: 0,
                    message: "El monto debe ser igual o mayor que 0."
                  },
                  max: {
                    value: 999999999,
                    message: "El monto no puede exceder 999999999"
                  }
                })}
              />
              {errors.Monto && (
                <span>{errors.Monto.message}</span>
              )}
            </div>
          </div>

          <div className="mb-3">
            <label className="form-label" htmlFor="Bases">Bases</label>
            <div>
              <input
                className="form-control" type="text" id="Bases"
                {...register("Bases", {
                  pattern: {
                    value: /^[a-zA-ZÀ-ÿ\s]{1,40}$/,
                    message: "BASES debe tener entre 1 y 40 letras."
                  }
                })}
              />
              {errors.Tema && (
                <span>{errors.Bases.message}</span>
              )}
            </div>
          </div>

          <button className="btn btn-primary" type="submit">Enviar</button>

        </form>
      </div>
    </div>
  );
};

export default ProyectoForm;