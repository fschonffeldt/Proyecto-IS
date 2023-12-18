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
        <div className="mt-10">
            <form className="mx-auto max-w-sm" onSubmit={handleSubmit(onSubmit)}>
                
                <div className="col-span-full">
                    <label htmlFor="Tema" className="block text-sm font-medium leading-6 text-gray-900">
                        Tema
                    </label>
                    <div className="mt-2">
                        <input
                            type="text"
                            {...register("Tema", {
                                pattern: {
                                    value: /^[a-zA-ZÀ-ÿ\s]{1,40}$/,
                                    message: "El tema debe tener entre 1 y 40 letras."
                                }
                            })}
                            id="Tema"
                            className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                        />
                        {errors.Tema && (
                            <span className="text-red-500">{errors.Tema.message}</span>
                        )}
                    </div>
                </div>

                <div className="col-span-full">
                    <label htmlFor="Descripcion" className="block text-sm font-medium leading-6 text-gray-900">
                        Descripcion
                    </label>
                    <div className="mt-2">
                        <input
                            type="text"
                            {...register("Descripcion", {
                                pattern: {
                                    value: /^[a-zA-ZÀ-ÿ\s]{1,40}$/,
                                    message: "El tema debe tener entre 1 y 40 letras."
                                }
                            })}
                            id="Descripcion"
                            className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                        />
                        {errors.Tema && (
                            <span className="text-red-500">{errors.Descripcion.message}</span>
                        )}
                    </div>
                </div>

                <div className="col-span-full">
                  <label htmlFor="Monto" className="block text-sm font-medium leading-6 text-gray-900">
                    Monto
                  </label>
                  <div className="mt-2">
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
                      className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                    />
                    {errors.Monto && (
                      <span className="text-red-500">{errors.Monto.message}</span>
                    )}
                  </div>
                </div>

                <div className="col-span-full">
                    <label htmlFor="Bases" className="block text-sm font-medium leading-6 text-gray-900">
                        Bases
                    </label>
                    <div className="mt-2">
                        <input
                            type="text"
                            {...register("Bases", {
                                pattern: {
                                    value: /^[a-zA-ZÀ-ÿ\s]{1,40}$/,
                                    message: "BASES debe tener entre 1 y 40 letras."
                                }
                            })}
                            id="Bases"
                            className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                        />
                        {errors.Tema && (
                            <span className="text-red-500">{errors.Bases.message}</span>
                        )}
                    </div>
                </div>

                <div className="mt-6 flex items-center justify-center gap-x-6">
                  <button
                    type="submit"
                    className="rounded-md bg-azul px-8 py-2 text-sm font-semibold text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
                  >
                    Enviar
                  </button>
                </div>
            </form>
        </div>
    </div>
  );
};

export default ProyectoForm;