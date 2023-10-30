"use strict";
const Postulaciones= require("../models/postulacion.model");

async function validarcuidad(ciudad) {
  try {
    // Consulta la base de datos para verificar si la ciudad ya existe
    const ciudadExistente = await Ciudad.findOne({ nombre: ciudad });

    if (ciudadExistente) {
      return false; // La ciudad ya existe, no es válida
    }
    return true; // La ciudad es válida, no existe en la base de datos
  } catch (error) {
    throw new Error("Error al validar la ciudad: " + error.message);
  }
}


// Crear una postulación (con fecha automática, concurso y estado fijos)
async function createPostulacion(data) {
  try {
    const postulacionData = {
      ...data,
      FechaPostulacion: new Date(),
      concurso: concursoId, // Reemplaza concursoId con el ID del concurso fijo
      estado: estadoId,
    };
    const postulacion = new Postulaciones(postulacionData);
    await postulacion.save();
    return postulacion;
  } catch (err) {
    throw new Error(err.message);
  }
}

// Eliminar una postulación por ID
async function deletePostulacionById(postId) {
  try {
    await Postulaciones.findByIdAndRemove(postId);
  } catch (err) {
    throw new Error(err.message);
  }
}

// Obtener todas las postulaciones por RUT (excepto el campo "fondo")
async function getPostulacionesByRut(rut) {
  try {
    const postulaciones = await Postulaciones.find({ rutRepresentante: rut }, { fondo: 0 });
    return postulaciones;
  } catch (err) {
    throw new Error(err.message);
  }
}

// Buscar una postulación específica por número de ID
async function getPostulacionById(postId) {
  try {
    const postulacion = await Postulaciones.findById(postId);
    return postulacion;
  } catch (err) {
    throw new Error(err.message);
  }
}

// Actualizar una postulación (incluyendo cambiar el estado)
async function updatePostulacion(postId, newData) {
  try {
    const updatedPostulacion = await 
    Postulaciones.findByIdAndUpdate(postId, newData, { new: true });
    return updatedPostulacion;
  } catch (err) {
    throw new Error(err.message);
  }
}

async function deletePostulacionById(postId) {
  try {
    // Utiliza Mongoose para eliminar la postulación por su ID
    const result = await Postulaciones.findByIdAndRemove(postId);

    // Si se pudo eliminar con éxito, result será el documento eliminado.
    if (result) {
      return result;
    } else {
      // Si no se encontró la postulación, puedes lanzar un error o devolver un mensaje de que no se encontró.
      throw new Error("La postulación no se encontró o ya fue eliminada.");
    }
  } catch (err) {
    throw new Error(err.message);
  }
}

module.exports = {
  validarcuidad,
  createPostulacion,
  deletePostulacionById,
  getPostulacionesByRut,
  getPostulacionById,
  updatePostulacion,
  deletePostulacionById,
};
