'use strict';

const Evaluacion = require('../models/evaluacion.model'); // Asegúrate de importar el modelo correcto
const { handleError } = require('../utils/errorHandler');

/**
 * Obtiene todas las evaluaciones de la base de datos
 * @returns {Promise} Promesa con el objeto de evaluaciones
 */
async function getEvaluaciones() {
  try {
    const evaluaciones = await Evaluacion.find().exec();
    if (!evaluaciones) return [null, 'No hay evaluaciones'];

    return [evaluaciones, null];
  } catch (error) {
    handleError(error, 'evaluacion.service -> getEvaluaciones');
  }
}

/**
 * Crea una nueva evaluación en la base de datos
 * @param {Object} evaluacion Objeto de evaluación
 * @returns {Promise} Promesa con el objeto de evaluación creado
 */
async function createEvaluacion(evaluacion) {
  try {
    const { error: bodyError, value: validatedEvaluacion } = evaluacionBodySchema.validate(evaluacion);
    if (bodyError) return [null, bodyError.message];

    // Crea una nueva evaluación con los datos validados
    const newEvaluacion = new Evaluacion(validatedEvaluacion);
    await newEvaluacion.save();

    return [newEvaluacion, null];
  } catch (error) {
    handleError(error, 'evaluacion.service -> createEvaluacion');
  }
}

/**
 * Obtiene una evaluación por su id de la base de datos
 * @param {string} id Id de la evaluación
 * @returns {Promise} Promesa con el objeto de evaluación
 */
async function getEvaluacionById(id) {
  try {
    const evaluacion = await Evaluacion.findById({ _id: id }).exec();

    if (!evaluacion) return [null, 'La evaluación no existe'];

    return [evaluacion, null];
  } catch (error) {
    handleError(error, 'evaluacion.service -> getEvaluacionById');
  }
}

/**
 * Actualiza una evaluación por su id en la base de datos
 * @param {string} id Id de la evaluación
 * @param {Object} evaluacion Objeto de evaluación actualizado
 * @returns {Promise} Promesa con el objeto de evaluación actualizado
 */
async function updateEvaluacion(id, evaluacion) {
  try {
    const { error: bodyError, value: validatedEvaluacion } = evaluacionBodySchema.validate(evaluacion);
    if (bodyError) return [null, bodyError.message];

    // Actualiza la evaluación con los datos validados
    const evaluacionToUpdate = await Evaluacion.findByIdAndUpdate(id, validatedEvaluacion, { new: true });

    return [evaluacionToUpdate, null];
  } catch (error) {
    handleError(error, 'evaluacion.service -> updateEvaluacion');
  }
}


/**
 * Elimina una evaluación por su id de la base de datos
 * @param {string} Id de la evaluación
 * @returns {Promise} Promesa con el objeto de evaluación eliminado
 */
async function deleteEvaluacion(id) {
  try {
    // Elimina la evaluación por su ID
    const evaluacionToDelete = await Evaluacion.findByIdAndDelete(id);

    return evaluacionToDelete;
  } catch (error) {
    handleError(error, 'evaluacion.service -> deleteEvaluacion');
  }
}


module.exports = {
  getEvaluaciones,
  createEvaluacion,
  getEvaluacionById,
  updateEvaluacion,
  deleteEvaluacion,
};
