const mongoose = require('mongoose');
const Evaluacion = require('../models/evaluacion.model');  // Ajusta la ruta si es necesario

//falta crear

exports.getEvaluacion = async (req, res, next) => {
  try {
    const evaluaciones = await Evaluacion.find();
    res.json(evaluaciones);
  } catch (error) {
    next(error);
  }
};

exports.updateEvaluacion = async (req, res, next) => {
  try {
    const { id } = req.params;
    const evaluacionActualizada = await Evaluacion.findByIdAndUpdate(id, req.body, { new: true });
    if (!evaluacionActualizada) {
      return res.status(404).send();  // 404 Not Found
    }
    res.json(evaluacionActualizada);
  } catch (error) {
    next(error);
  }
};

exports.getEvaluacionById = async (req, res, next) => {
  try {
    const { id } = req.params; // Obtén el ID de los parámetros
    const evaluacion = await Evaluacion.findById(id);
    
    if (!evaluacion) {
      return res.status(404).send({ message: 'No se encontró la evaluación especificada' });
    }

    res.json(evaluacion);
  } catch (error) {
    next(error);
  }
};

exports.deleteEvaluacion = async (req, res) => {
  const { id } = req.params;
  
  try {
    const evaluacion = await Evaluacion.findByIdAndDelete(id);
    if (!evaluacion) {
      return res.status(404).send({ message: 'Evaluación no encontrada' });
    }
    res.send({ message: 'Evaluación eliminada exitosamente', data: evaluacion });
  } catch (error) {
    res.status(500).send({ message: error.message || 'Error al eliminar la evaluación' });
  }
};


module.exports = exports;
