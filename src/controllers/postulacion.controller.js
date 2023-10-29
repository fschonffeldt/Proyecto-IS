"use strict";
const { respondSuccess, respondError } = require("../utils/resHandler");
const PostulacionService = require("../services/postulacion.service");
const { postulacionSchema, numeroSolicitudSchema } = require("../schema/postulacion.schema");
const { handleError } = require("../utils/errorHandler");

/**
 * Crea una nueva postulación
 * @param {Object} req - Objeto de petición
 * @param {Object} res - Objeto de respuesta
 */
async function createPostulacion(req, res) {
  try {
    const postulacionData = req.body;

    // Validar los datos con el esquema
    const { error } = postulacionSchema.validate(postulacionData);

    if (error) {
      return respondError(req, res, 400, error.details[0].message);
    }

    const newPostulacion = await PostulacionService.createPostulacion(postulacionData);
    return respondSuccess(req, res, 201, newPostulacion);
  } catch (error) {
    handleError(error, "postulacion.controller -> createPostulacion");
    respondError(req, res, 500, "No se pudo crear la postulación");
  }
}


/**
 * Obtiene todas las postulaciones por el rut del representante
 * @param {Object} req - Objeto de petición
 * @param {Object} res - Objeto de respuesta
 */
async function getPostulacionesByRut(req, res) {
  try {
    const rut = req.params.rut;
    const postulaciones = await PostulacionService.getPostulacionesByRut(rut);

    if (postulaciones.length === 0) {
      return respondSuccess(req, res, 204);
    }

    return respondSuccess(req, res, 200, postulaciones);
  } catch (error) {
    handleError(error, "postulacion.controller -> getPostulacionesByRut");
    respondError(req, res, 500, "No se pudo obtener las postulaciones");
  }
}

/**
 * Obtiene una postulación por número de solicitud
 * @param {Object} req - Objeto de petición
 * @param {Object} res - Objeto de respuesta
 */
async function getPostulacionByNumeroSolicitud(req, res) {
  try {
    const numeroSolicitud = req.params.numeroSolicitud;
    const postulacion = await PostulacionService.getPostulacionByNumeroSolicitud(numeroSolicitud);

    if (!postulacion) {
      return respondError(req, res, 404, "Postulación no encontrada");
    }

    return respondSuccess(req, res, 200, postulacion);
  } catch (error) {
    handleError(error, "postulacion.controller -> getPostulacionByNumeroSolicitud");
    respondError(req, res, 500, "Error al obtener la postulación");
  }
}

/**
 * Actualiza una postulación por número de solicitud
 * @param {Object} req - Objeto de petición
 * @param {Object} res - Objeto de respuesta
 */
async function updatePostulacion(req, res) {
  try {
    const numeroSolicitud = req.params.numeroSolicitud;
    const postulacionData = req.body;

    // Validar los datos con el esquema
    const { error } = postulacionSchema.validate(postulacionData);

    if (error) {
      return respondError(req, res, 400, error.details[0].message);
    }

    const updatedPostulacion = await PostulacionService.updatePostulacion(
      numeroSolicitud,
      postulacionData);

    if (!updatedPostulacion) {
      return respondError(req, res, 404, "Postulación no encontrada");
    }

    return respondSuccess(req, res, 200, updatedPostulacion);
  } catch (error) {
    handleError(error, "postulacion.controller -> updatePostulacion");
    respondError(req, res, 500, "Error al actualizar la postulación");
  }
}

/**
 * Elimina una postulación por número de solicitud
 * @param {Object} req - Objeto de petición
 * @param {Object} res - Objeto de respuesta
 */
async function deletePostulacion(req, res) {
  try {
    const numeroSolicitud = req.params.numeroSolicitud;

    // Valida el número de solicitud con el esquema
    const { error } = numeroSolicitudSchema.validate({ numeroSolicitud });

    if (error) {
      return respondError(req, res, 400, error.details[0].message);
    }

    const deletedPostulacion = await PostulacionService.deletePostulacion(numeroSolicitud);

    if (!deletedPostulacion) {
      return respondError(req, res, 404, "Postulación no encontrada");
    }

    return respondSuccess(req, res, 200, deletedPostulacion);
  } catch (error) {
    handleError(error, "postulacion.controller -> deletePostulacion");
    respondError(req, res, 500, "Error al eliminar la postulación");
  }
}

module.exports = {
  createPostulacion,
  getPostulacionesByRut,
  getPostulacionByNumeroSolicitud,
  updatePostulacion,
  deletePostulacion,
};

