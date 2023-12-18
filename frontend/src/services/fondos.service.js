import axios from './root.service'; // Asume que root.service.js maneja la configuración de axios

export const createfondos = async (fondo) => {
  try {
    const response = await axios.post('/fondos',fondo);
    if (response.status === 201) {
      return response.data.data;
    }
  } catch (error) {
    console.log(error);
  }
}