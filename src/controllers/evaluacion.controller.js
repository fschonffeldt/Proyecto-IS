"use strict";

const { respondSuccess, respondError } = require("../utils/resHandler");
const EvaluacionService = require("../services/evaluacion.service");
const { evaluacionBodySchema, evaluacionIdSchema } = require("../schema/evaluacion.schema");
const { handleError } = require("../utils/errorHandler");

async function getEvaluaciones(req, res) {
  try {
    const [evaluaciones, errorEvaluaciones] = await EvaluacionService.getEvaluaciones();
    if (errorEvaluaciones) return respondError(req, res, 404, errorEvaluaciones);

    evaluaciones.length === 0
      ? respondSuccess(req, res, 204)
      : respondSuccess(req, res, 200, evaluaciones);
  } catch (error) {
    handleError(error, "evaluacion.controller -> getEvaluaciones");
    respondError(req, res, 500, "No se pudieron obtener las evaluaciones");
  }
}

async function createEvaluacion(req, res) {
  try {
    const { body } = req;
    const { error: bodyError } = evaluacionBodySchema.validate(body);
    if (bodyError) return respondError(req, res, 400, bodyError.message);

    const [newEvaluacion, evaluacionError] = await EvaluacionService.createEvaluacion(body);

    if (evaluacionError) return respondError(req, res, 400, evaluacionError);
    if (!newEvaluacion) {
      return respondError(req, res, 400, "No se creó la evaluación");
    }

    respondSuccess(req, res, 201, newEvaluacion);
  } catch (error) {
    handleError(error, "evaluacion.controller -> createEvaluacion");
    respondError(req, res, 500, "No se creó la evaluación");
  }
}

async function getEvaluacionById(req, res) {
  try {
    const { params } = req;
    const { error: paramsError } = evaluacionIdSchema.validate(params);
    if (paramsError) return respondError(req, res, 400, paramsError.message);

    const [evaluacion, errorEvaluacion] = await EvaluacionService.getEvaluacionById(params.id);

    if (errorEvaluacion) return respondError(req, res, 404, errorEvaluacion);

    respondSuccess(req, res, 200, evaluacion);
  } catch (error) {
    handleError(error, "evaluacion.controller -> getEvaluacionById");
    respondError(req, res, 500, "No se pudo obtener la evaluación");
  }
}

async function updateEvaluacion(req, res) {
  try {
    const { params, body } = req;
    const { error: paramsError } = evaluacionIdSchema.validate(params);
    if (paramsError) return respondError(req, res, 400, paramsError.message);

    const { error: bodyError } = evaluacionBodySchema.validate(body);
    if (bodyError) return respondError(req, res, 400, bodyError.message);

    const [evaluacion, evaluacionError] = await EvaluacionService.updateEvaluacion(params.id, body);

    if (evaluacionError) return respondError(req, res, 400, evaluacionError);

    respondSuccess(req, res, 200, evaluacion);
  } catch (error) {
    handleError(error, "evaluacion.controller -> updateEvaluacion");
    respondError(req, res, 500, "No se pudo actualizar la evaluación");
  }
}

async function deleteEvaluacion(req, res) {
  try {
    const { params } = req;
    const { error: paramsError } = evaluacionIdSchema.validate(params);
    if (paramsError) return respondError(req, res, 400, paramsError.message);

    const evaluacion = await EvaluacionService.deleteEvaluacion(params.id);
    !evaluacion
      ? respondError(
          req,
          res,
          404,
          "No se encontró la evaluación solicitada",
          "Verifique el id ingresado"
        )
      : respondSuccess(req, res, 200, evaluacion);
  } catch (error) {
    handleError(error, "evaluacion.controller -> deleteEvaluacion");
    respondError(req, res, 500, "No se pudo eliminar la evaluación");
  }
}

module.exports = {
  getEvaluaciones,
  createEvaluacion,
  getEvaluacionById,
  updateEvaluacion,
  deleteEvaluacion,
};
