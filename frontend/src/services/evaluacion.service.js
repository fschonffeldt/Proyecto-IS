import axios from './root.service';

export const crearEvaluacion = async (evaluacion) => {
    try {
      const response = await axios.post('/evaluacion', evaluacion);
      if (response.status === 201) {
        return response.data;
      }
      return {};
    } catch (error) {
      console.log('ERROR ', error);
    }
  };