import axios from './root.service'; // Se asume que root.service.js maneja la configuración de axios

const concursoService = {
  crearConcurso: async (datosConcurso) => {
    try {
      const respuesta = await axios.post('/concurso', datosConcurso);
      return respuesta.data; // Puedes modificar esto según la estructura de tu respuesta
    } catch (error) {
      throw error.response ? error.response.data : error.message;
    }
  },
  // Agrega otras funciones relacionadas con "concurso" aquí según tus necesidades
};

export default concursoService;