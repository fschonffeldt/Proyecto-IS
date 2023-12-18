import axios from './root.service'; // Asume que root.service.js maneja la configuración de axios

export const createpostulacion = async (postulaciones) => {
  try {
    const response = await axios.post('/postulacion',postulaciones);
    if (response.status === 201) {
      return response.data.data;
    }
  } catch (error) {
    console.log(error);
  }
};

export const getpostulaciones = async () => {
  try {
    const response = await axios.get('/postulacion/:id');
    if (response.status === 200) {
      return response.data.data;
    }
  } catch (error) {
    console.log(error);
  }
}
