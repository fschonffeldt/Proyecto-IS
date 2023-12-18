import axios from './root.service';

export const createConcurso = async (data) => {
  try {
    const response = await axios.post('/concurso', data);
    return response.data;
  } catch (error) {
    throw new Error('Error creating concurso');
  }
};