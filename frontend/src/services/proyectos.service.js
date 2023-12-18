import axios from './root.service';

export const crearProyecto = async (proyecto) => {
    try {
      const response = await axios.post('/proyec', proyecto);
      if (response.status === 201) {
        return response.data;
      }
      return {};
    } catch (error) {
      console.log('ERROR ', error);
    }
  };