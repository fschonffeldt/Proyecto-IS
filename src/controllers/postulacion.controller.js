const Postulacion = require("../models/postulacion.model");
const postulacionSchema = require("../schema/postulacion.schema");

// Crear una nueva postulación
async function createPostulacion(req, res) {
  const { body } = req;
  try {
    // Valida los datos de entrada
    const { error } = postulacionSchema.validate(body);
    if (error) {
      return res.status(400).json({ error: error.details[0].message });
    }

    // Crea la nueva postulación
    const nuevaPostulacion = new Postulacion(body);

    // Guarda la postulación en la base de datos
    await nuevaPostulacion.save();

    return res.status(201).json(nuevaPostulacion);
  } catch (error) {
    console.error(error);
    return res.status(500).json({ error: "Error al crear la postulación" });
  }
}

// Leer todas las postulaciones
async function getPostulaciones(req, res) {
  try {
    const postulaciones = await Postulacion.find().populate("Ciudad Region").exec();
    return res.status(200).json(postulaciones);
  } catch (error) {
    console.error(error);
    return res.status(500).json({ error: "Error al obtener las postulaciones" });
  }
}

// Leer una postulación por número de solicitud
async function getPostulacionByNumeroSolicitud(req, res) {
  const { numeroSolicitud } = req.params;
  try {
    const postulacion = await Postulacion.findOne({ numeroSolicitud });
    if (!postulacion) {
      return res.status(404).json({ error: "Postulación no encontrada" });
    }
    return res.status(200).json(postulacion);
  } catch (error) {
    console.error(error);
    return res.status(500).json({ error: "Error al obtener la postulación" });
  }
}

// Actualizar una postulación por número de solicitud
async function updatePostulacionByNumeroSolicitud(req, res) {
  const { numeroSolicitud } = req.params;
  const { body } = req;
  try {
    // Valida los datos de entrada
    const { error } = postulacionSchema.validate(body);
    if (error) {
      return res.status(400).json({ error: error.details[0].message });
    }

    const postulacion = await Postulacion.findOneAndUpdate({ numeroSolicitud }, body, {
      new: true,
    });

    if (!postulacion) {
      return res.status(404).json({ error: "Postulación no encontrada" });
    }

    return res.status(200).json(postulacion);
  } catch (error) {
    console.error(error);
    return res.status(500).json({ error: "Error al actualizar la postulación" });
  }
}

// Eliminar una postulación por número de solicitud
async function deletePostulacionByNumeroSolicitud(req, res) {
  const { numeroSolicitud } = req.params;
  try {
    const postulacion = await Postulacion.findOneAndRemove({ numeroSolicitud });
    if (!postulacion) {
      return res.status(404).json({ error: "Postulación no encontrada" });
    }
    return res.status(204).end();
  } catch (error) {
    console.error(error);
    return res.status(500).json({ error: "Error al eliminar la postulación" });
  }
}

module.exports = {
  createPostulacion,
  getPostulaciones,
  getPostulacionByNumeroSolicitud,
  updatePostulacionByNumeroSolicitud,
  deletePostulacionByNumeroSolicitud,
};
