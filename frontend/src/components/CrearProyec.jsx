import { Formik, Form, Field } from "formik"
import axios from "axios"
import mongoose from "mongoose"

export const CrearProyec = () => {
    const handleSubmit = async (values) => {
      console.log(values)
  
      try {
        const response = await axios.post(
          "http://localhost:5000/api/proyec",
          values
        )
  
        if (response.status === 201) {
          console.log("Solicitud Post exitosa")
          alert('Practica creada!')
          // Realiza acciones adicionales en caso de éxito
        } else {
          console.error("Error en la solicitud Post", response.statusText)
          alert('Error!!!')
        }
      } catch (error) {
        console.error("Error al realizar la solicitud Post:", error)
        alert('Error!!!')
      }
    }
  
    return (
      <div className='container d-flex justify-content-center align-items-center vh-100'>
        <div className='col-lg-6 my-form-container'>
          <h1>Crear un Proyecto</h1> {/* Aplica el estilo personalizado */}
          <Formik
            initialValues={{
              _id: new mongoose.Types.ObjectId(),
              Tema: "",
              Descripcion: "",
              Monto: "",
              Bases: ""
            }}
            onSubmit={handleSubmit}
          >
            {() => (
              <Form>
                <div className='form-group'>
                  <label htmlFor='tema'>Tema</label>
                  <Field type='text' name='tema' className='form-control' />
                </div>

                <div className='form-group'>
                  <label htmlFor='descripcion'>Descripcion</label>
                  <Field type='text' name='descripcion' className='form-control' />
                </div>

                <div className='form-group'>
                  <label htmlFor='monto'>Monto</label>
                  <Field type='text' name='monto' className='form-control'/>
                </div>

                <div className='form-group'>
                  <label htmlFor='bases'>Bases</label>
                  <Field type='text' name='bases' className='form-control'/>
                </div>

                <button type='submit' className='btn btn-primary mt-3'>
                  Enviar
                </button>
              </Form>
            )}
          </Formik>
        </div>
      </div>
    )
}

export default CrearProyec;
