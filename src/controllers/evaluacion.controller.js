const mongoose = require('mongoose');
const Evaluacion = require('../models/evaluacion.model');  // Ajusta la ruta si es necesario
const Estado = require("../models/clasificacion.model"); // Importa el modelo de Estado


exports.getEvaluacion = async (req, res, next) => {
  try {
    const evaluaciones = await Evaluacion.find();
    res.json(evaluaciones);
  } catch (error) {
    next(error);
  }
};

/**
 * Crea una nueva evaluación y asigna el ID del estado y la ID de postulación.
 */
exports.createEvaluacion = async (req, res, next) => {
  try {
    const nuevoEvaluacion = new Evaluacion({
      id_postulacion: req.body.id_postulacion, // Toma el ID de postulación del cuerpo de la solicitud
      comentario: req.body.comentario, // Toma el comentario del cuerpo de la solicitud
      puntos: req.body.puntos, // Toma los puntos del cuerpo de la solicitud
    });

    // Busca el estado relacionado y asigna su ID a la evaluación
    const estado = await Estado.findOne({ id_postulacion: req.body.id_postulacion });
    if (!estado) {
      return res.status(404).send({ message: "No se encontró un estado para la postulación especificada" });
    }

    nuevoEvaluacion.id_estado = estado._id;

    await nuevoEvaluacion.save();
    res.status(201).send(nuevoEvaluacion);
  } catch (error) {
    if (error instanceof mongoose.Error.ValidationError) {
      res.status(400).send({ message: error.message });
    } else {
      next(error);
    }
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

exports.getEvaluacionByPostulacion = async (req, res, next) => {
  try {
    const idPostulacion = req.params.id_postulacion;
    const evaluaciones = await Evaluacion.find({ id_postulacion });
    
    if (!evaluaciones || evaluaciones.length === 0) {
      return res.status(404).send({ message: 'No se encontraron evaluaciones para la postulación especificada' });
    }

    res.json(evaluaciones);
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
