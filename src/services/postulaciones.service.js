const Postulacion = require("../models/postulacion.model");

// Crear una nueva postulación
async function createPostulacion(postulacionData) {
  try {
    const nuevaPostulacion = new Postulacion(postulacionData);
    return await nuevaPostulacion.save();
  } catch (error) {
    throw new Error("Error al crear la postulación");
  }
}

// Obtener todas las postulaciones
async function getPostulaciones() {
  try {
    return await Postulacion.find().populate("Ciudad Region").exec();
  } catch (error) {
    throw new Error("Error al obtener las postulaciones");
  }
}

// Obtener una postulación por número de solicitud
async function getPostulacionByNumeroSolicitud(numeroSolicitud) {
  try {
    return await Postulacion.findOne({ numeroSolicitud }).populate("Ciudad Region").exec();
  } catch (error) {
    throw new Error("Error al obtener la postulación");
  }
}

// Actualizar una postulación por número de solicitud
async function updatePostulacionByNumeroSolicitud(numeroSolicitud, postulacionData) {
  try {
    return await Postulacion.findOneAndUpdate({ numeroSolicitud }, postulacionData, {
      new: true,
    });
  } catch (error) {
    throw new Error("Error al actualizar la postulación");
  }
}

// Eliminar una postulación por número de solicitud
async function deletePostulacionByNumeroSolicitud(numeroSolicitud) {
  try {
    return await Postulacion.findOneAndRemove({ numeroSolicitud });
  } catch (error) {
    throw new Error("Error al eliminar la postulación");
  }
}

module.exports = {
  createPostulacion,
  getPostulaciones,
  getPostulacionByNumeroSolicitud,
  updatePostulacionByNumeroSolicitud,
  deletePostulacionByNumeroSolicitud,
};
