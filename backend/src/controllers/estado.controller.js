"use strict";

const { respondSuccess, respondError } = require("../utils/resHandler");
const EstadoService = require("../services/estado.service");
const { estadoBodySchema, estadoIdSchema } = require("../schema/estado.schema");
const { handleError } = require("../utils/errorHandler");

/**
 * Obtiene todos los estados
 * @param {Object} req - Objeto de petición
 * @param {Object} res - Objeto de respuesta
 */
async function getEstados(req, res) {
  try {
    const [estados, errorEstados] = await EstadoService.getEstados();
    if (errorEstados) return respondError(req, res, 404, errorEstados);

    estados.length === 0
      ? respondSuccess(req, res, 204)
      : respondSuccess(req, res, 200, estados);
  } catch (error) {
    handleError(error, "estado.controller -> getEstados");
    respondError(req, res, 500, "No se pudieron obtener los estados");
  }
}

/**
 * Crea un nuevo estado
 * @param {Object} req - Objeto de petición
 * @param {Object} res - Objeto de respuesta
 */
async function createEstado(req, res) {
  try {
    const { body } = req;
    const { error: bodyError } = estadoBodySchema.validate(body);
    if (bodyError) return respondError(req, res, 400, bodyError.message);

    const [newEstado, estadoError] = await EstadoService.createEstado(body);

    if (estadoError) return respondError(req, res, 400, estadoError);
    if (!newEstado) {
      return respondError(req, res, 400, "No se creó el estado");
    }

    respondSuccess(req, res, 201, newEstado);
  } catch (error) {
    handleError(error, "estado.controller -> createEstado");
    respondError(req, res, 500, "No se creó el estado");
  }
}

/**
 * Obtiene un estado por su id
 * @param {Object} req - Objeto de petición
 * @param {Object} res - Objeto de respuesta
 */
async function getEstadoById(req, res) {
  try {
    const { params } = req;
    const { error: paramsError } = estadoIdSchema.validate(params);
    if (paramsError) return respondError(req, res, 400, paramsError.message);

    const [estado, errorEstado] = await EstadoService.getEstadoById(params.id);

    if (errorEstado) return respondError(req, res, 404, errorEstado);

    respondSuccess(req, res, 200, estado);
  } catch (error) {
    handleError(error, "estado.controller -> getEstadoById");
    respondError(req, res, 500, "No se pudo obtener el estado");
  }
}

/**
 * Actualiza un estado por su id
 * @param {Object} req - Objeto de petición
 * @param {Object} res - Objeto de respuesta
 */
async function updateEstado(req, res) {
  try {
    const { params, body } = req;
    const { error: paramsError } = estadoIdSchema.validate(params);
    if (paramsError) return respondError(req, res, 400, paramsError.message);

    const { error: bodyError } = estadoBodySchema.validate(body);
    if (bodyError) return respondError(req, res, 400, bodyError.message);

    const [estado, estadoError] = await EstadoService.updateEstado(params.id, body);

    if (estadoError) return respondError(req, res, 400, estadoError);

    respondSuccess(req, res, 200, estado);
  } catch (error) {
    handleError(error, "estado.controller -> updateEstado");
    respondError(req, res, 500, "No se pudo actualizar el estado");
  }
}

/**
 * Elimina un estado por su id
 * @param {Object} req - Objeto de petición
 * @param {Object} res - Objeto de respuesta
 */
async function deleteEstado(req, res) {
  try {
    const { params } = req;
    const { error: paramsError } = estadoIdSchema.validate(params);
    if (paramsError) return respondError(req, res, 400, paramsError.message);

    const estado = await EstadoService.deleteEstado(params.id);
    !estado
      ? respondError(
          req,
          res,
          404,
          "No se encontró el estado solicitado",
          "Verifique el id ingresado"
        )
      : respondSuccess(req, res, 200, estado);
  } catch (error) {
    handleError(error, "estado.controller -> deleteEstado");
    respondError(req, res, 500, "No se pudo eliminar el estado");
  }
}

module.exports = {
  getEstados,
  createEstado,
  getEstadoById,
  updateEstado,
  deleteEstado,
};
