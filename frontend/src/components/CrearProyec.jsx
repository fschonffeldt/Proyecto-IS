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
    <div>
      <div>
        <form onSubmit={handleSubmit(onSubmit)}>
          
          <div>
            <label htmlFor="Tema">
              Tema
            </label>
            <div>
              <input
                type="text"
                {...register("Tema", {
                  pattern: {
                    value: /^[a-zA-ZÀ-ÿ\s]{1,40}$/,
                    message: "El tema debe tener entre 1 y 40 letras."
                  }
                })}
                id="Tema"
              />
              {errors.Tema && (
                <span>{errors.Tema.message}</span>
              )}
            </div>
          </div>

          <div>
            <label htmlFor="Descripcion">
              Descripcion
            </label>
            <div>
              <input
                type="text"
                {...register("Descripcion", {
                  pattern: {
                    value: /^[a-zA-ZÀ-ÿ\s]{1,40}$/,
                    message: "El tema debe tener entre 1 y 40 letras."
                  }
                })}
                id="Descripcion"
              />
              {errors.Tema && (
                <span>{errors.Descripcion.message}</span>
              )}
            </div>
          </div>

          <div>
            <label htmlFor="Monto">
              Monto
            </label>
            <div>
              <input
                type="number"
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
                id="Monto"
              />
              {errors.Monto && (
                <span>{errors.Monto.message}</span>
              )}
            </div>
          </div>

          <div>
            <label htmlFor="Bases">
              Bases
            </label>
            <div>
              <input
                type="text"
                {...register("Bases", {
                  pattern: {
                    value: /^[a-zA-ZÀ-ÿ\s]{1,40}$/,
                    message: "BASES debe tener entre 1 y 40 letras."
                  }
                })}
                id="Bases"
              />
              {errors.Tema && (
                <span>{errors.Bases.message}</span>
              )}
            </div>
          </div>

          <div>
            <div>
              <button type="submit">Enviar</button>
            </div>
          </div>

        </form>
      </div>
    </div>
  );
};

export default ProyectoForm;