const mongoose = require('mongoose');
const Evaluacion = require('../models/evaluacion.model');  // Ajusta la ruta si es necesario
const Clasificacion = require("../models/clasificacion.model"); // Importa el modelo de Estado


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
    // Crea una nueva evaluación
    const nuevaEvaluacion = new Evaluacion({
      id_postulacion: req.body.id_postulacion,
      comentario: req.body.comentario,
      puntos: req.body.puntos,
    });

    // Guarda la evaluación para obtener su _id
    await nuevaEvaluacion.save();

    // Crea una nueva clasificación asociada a la postulación y evaluación
    const nuevaClasificacion = new Clasificacion({
      id_postulacion: req.body.id_postulacion,
      id_evaluacion: nuevaEvaluacion._id,
      clasificacion: req.body.clasificacion, // Ajusta según los datos necesarios
    });

    await nuevaClasificacion.save();

    // Actualiza la evaluación con la referencia a la clasificación
    nuevaEvaluacion.id_estado = nuevaClasificacion._id;
    await nuevaEvaluacion.save();

    res.status(201).send({ evaluacion: nuevaEvaluacion, clasificacion: nuevaClasificacion });
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
