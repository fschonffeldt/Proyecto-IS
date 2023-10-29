const { postulacionSchema } = require("../schema/postulacion.schema");
const PostulacionService = require("../services/postulacion.service");
// Manejar la creación de una nueva postulación
async function createPostulacion(req, res) {
  try {
    const postulacionData = req.body;

    // Validar los datos con el esquema
    const { error } = postulacionSchema.validate(postulacionData);

    if (error) {
      return res.status(400).json({ error: error.details[0].message });
    }

    const newPostulacion = await PostulacionService.createPostulacion(postulacionData);
    return res.status(201).json(newPostulacion);
  } catch (error) {
    return res.status(400).json({ error: error.message });
  }
}

// Manejar la obtención de todas las postulaciones por el rut del representante
async function getPostulacionesByRut(req, res) {
  try {
    const rut = req.params.rut; // Asegúrate de que esta sea la forma en que pasas el rut
    const postulaciones = await PostulacionService.getPostulacionesByRut(rut);
    return res.status(200).json(postulaciones);
  } catch (error) {
    return res.status(400).json({ error: error.message });
  }
}

// Manejar la obtención de una postulación por número de solicitud
async function getPostulacionByNumeroSolicitud(req, res) {
  try {
    const numeroSolicitud = req.params.numeroSolicitud;
    const postulacion = await PostulacionService.getPostulacionByNumeroSolicitud(numeroSolicitud);
    if (!postulacion) {
      return res.status(404).json({ error: 'Postulación no encontrada' });
    }
    return res.status(200).json(postulacion);
  } catch (error) {
    return res.status(500).json({ error: 'Error al obtener la postulación' });
  }
}

async function updatePostulacion(req, res) {
  try {
    const numeroSolicitud = req.params.numeroSolicitud;
    const postulacionData = req.body;

    // Validar los datos con el esquema
    const { error } = postulacionSchema.validate(postulacionData);

    if (error) {
      return res.status(400).json({ error: error.details[0].message });
    }

    const updatedPostulacion = await PostulacionService.updatePostulacion(numeroSolicitud, postulacionData);
    
    if (!updatedPostulacion) {
      return res.status(404).json({ error: 'Postulación no encontrada' });
    }
    
    return res.status(200).json(updatedPostulacion);
  } catch (error) {
    return res.status(500).json({ error: 'Error al actualizar la postulación' });
  }
}



// Manejar la eliminación de una postulación
async function deletePostulacion(req, res) {
  try {
    const numeroSolicitud = req.params.numeroSolicitud;
    const deletedPostulacion = await PostulacionService.deletePostulacion(numeroSolicitud);
    return res.status(200).json(deletedPostulacion);
  } catch (error) {
    return res.status(500).json({ error: 'Error al eliminar la postulación' });
  }
}

module.exports = {
  createPostulacion,
  getPostulacionesByRut,
  getPostulacionByNumeroSolicitud,
  updatePostulacion,
  deletePostulacion,
};