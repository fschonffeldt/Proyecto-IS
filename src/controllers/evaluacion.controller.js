"use strict";
const { respondSuccess, respondError } = require("../utils/resHandler");
const Evaluacion = require("../models/evaluacion.model"); // Ajusta esto según la ubicación de tu modelo
const { handleError } = require("../utils/errorHandler");

async function getEvaluaciones(req, res) {
  try {
    const evaluaciones = await Evaluacion.find();
    const formattedEvaluaciones = evaluaciones.map((evaluacion) => ({
      ...evaluacion.toObject(),
      fechaCreacion: evalucion.createdAt.toISOString().split('T')[0],
      horaCreacion: evalucion.createdAt.toISOString().split('T')[1].split('.')[0],
    }));

    if (formattedEvaluaciones.length === 0) {
      respondSuccess(req, res, 204);
    } else {
      respondSuccess(req, res, 200, formattedEvaluaciones);
    }
  } catch (error) {
    handleError(error, "evaluacion.controller -> getEvaluaciones");
    respondError(req, res, 500, "No se pudieron obtener las evaluaciones");
  }
}

async function createEvaluacion(req, res) {
  try {
    const { body } = req;

    const nuevaEvaluacion = new Evaluacion(body);

    await nuevaEvaluacion.save();
    respondSuccess(req, res, 201, nuevaEvaluacion);
  } catch (error) {
    handleError(error, "evaluacion.controller -> createEvaluacion");
    respondError(req, res, 500, "No se creó la evaluación");
  }
}

async function getEvaluacionById(req, res) {
  try {
    const { params } = req;

    const evaluacion = await Evaluacion.findById(params.id);

    if (!evaluacion) {
      respondError(req, res, 404, "No se encontró la evaluación solicitada");
      return;
    }

    const formattedEvaluacion = {
      ...evaluacion.toObject(),
      fechaCreacion: evaluacion.createdAt.toISOString().split('T')[0],
      horaCreacion: evaluacion.createdAt.toISOString().split('T')[1].split('.')[0],
    };

    respondSuccess(req, res, 200, formattedEvaluacion);
  } catch (error) {
    handleError(error, "evaluacion.controller -> getEvaluacionById");
    respondError(req, res, 500, "No se pudo obtener la evaluación");
  }
}

async function updateEvaluacion(req, res) {
  try {
    const { params, body } = req;

    const evaluacionActualizada = await Evaluacion.findByIdAndUpdate(
      params.id,
      body,
      { new: true }
    );

    if (!evaluacionActualizada) {
      respondError(req, res, 404, "No se encontró la evaluación solicitada");
      return;
    }

    respondSuccess(req, res, 200, evaluacionActualizada);
  } catch (error) {
    handleError(error, "evaluacion.controller -> updateEvaluacion");
    respondError(req, res, 500, "No se pudo actualizar la evaluación");
  }
}

async function deleteEvaluacion(req, res) {
  try {
    const { params } = req;

    const evaluacionEliminada = await Evaluacion.findByIdAndDelete(params.id);

    if (!evaluacionEliminada) {
      respondError(req, res, 404, "No se encontró la evaluación solicitada");
      return;
    }

    respondSuccess(req, res, 200, evaluacionEliminada);
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
