const mongoose = require('mongoose');
const Evaluacion = require('../models/evaluacion.model');  // Ajusta la ruta si es necesario

exports.findAll = async (req, res, next) => {
  try {
    const evaluaciones = await Evaluacion.find();
    res.json(evaluaciones);
  } catch (error) {
    next(error);
  }
};

exports.create = async (req, res, next) => {
  try {
    const nuevaEvaluacion = new Evaluacion(req.body);
    await nuevaEvaluacion.save();
    res.status(201).send(nuevaEvaluacion);  // 201 Created
  } catch (error) {
    if (error instanceof mongoose.Error.ValidationError) {
      res.status(400).send({ message: error.message });
    } else {
      next(error);
    }
  }
};

exports.update = async (req, res, next) => {
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

exports.delete = async (req, res) => {
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
