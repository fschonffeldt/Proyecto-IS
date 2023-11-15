"use strict";
const mongoose = require("mongoose");
const Clasificacion = require("../models/clasificacion.model"); // Ajusta esto según la ubicación de tu modelo
const Evaluacion = require("../models/evaluacion.model");

/**
 * Obtiene todos los estados.
 */
exports.getClasificacion = async (req, res, next) => {
  try {
    const clasificacion = await Clasificacion.find(); // Accede directamente al modelo de Estado
    res.json(clasificacion);
  } catch (error) {
    next(error);
  }
};

/**
 * Crea un nuevo estado.
 */


/**
 * Crea un nuevo estado y una nueva evaluación automáticamente.
 */
exports.createClasificacion = async (req, res, next) => {
  try {
    const nuevaClasificacion = new Clasificacion({
      id_postulacion: req.body.id_postulacion, // Toma el ID de postulación del cuerpo de la solicitud
      clasificacion: req.body.clasificacion, // Toma el estado del cuerpo de la solicitud
    });

    await nuevaClasificacion.save();

    // Crea una nueva evaluación asociada automáticamente
    const nuevaEvaluacion = new Evaluacion({
      id_postulacion: nuevoEstado.id_postulacion, // Asigna la ID de postulación del estado
      comentario: "", // Puedes personalizar esto
      id_clasificacion: nuevaClasificacion._id, // Asigna la ID del estado recién creado
      puntos: 0, // Puedes personalizar esto
    });

    await nuevaEvaluacion.save();

    res.status(201).send({ estado: nuevoEstado, evaluacion: nuevaEvaluacion });
  } catch (error) {
    if (error instanceof mongoose.Error.ValidationError) {
      res.status(400).send({ message: error.message });
    } else {
      next(error);
    }
  }
};


/**
 * Obtiene un estado por su id.
 */
exports.getClasificacionById = async (req, res, next) => {
  try {
    const clasificacion = await Clasificacion.findById(req.params.id); // Accede directamente al modelo de Estado
    if (!clasificacion) {
      return res.status(404).send();
    }
    res.json(clasificacion);
  } catch (error) {
    next(error);
  }
};

/**
 * Actualiza un estado por su id.
 */
exports.updateClasificacion = async (req, res, next) => {
  try {
    const clasificacionActualizado = await Clasificacion.findByIdAndUpdate(
      req.params.id,
      req.body,
      { new: true }
    );
    if (!clasificacionActualizado) {
      return res.status(404).send();
    }
    res.json(clasificacionActualizado);
  } catch (error) {
    next(error);
  }
};

exports.getClasificacionByPostulacion = async (req, res, next) => {
  try {
    const id_postulacion = req.params.id_postulacion; // Obtén el id_postulacion de los parámetros
    const clasificacion = await Clasificacion.find({ id_postulacion });
    
    if (!clasificacion || clasificacion.length === 0) {
      return res.status(404).send({ message: 'No se encontraron estados para la postulación especificada' });
    }

    res.json(clasificacion);
  } catch (error) {
    next(error);
  }
};


/**
 * Elimina un estado por su id.
 */
exports.deleteClasificacion = async (req, res, next) => {
  try {
    const clasificacionEliminado = await Clasificacion.findByIdAndDelete(req.params.id); // Accede directamente al modelo de Estado
    if (!clasificacionEliminado) {
      return res.status(404).send();
    }
    res.send({ message: "Estado eliminado exitosamente", data: clasificacionEliminado });
  } catch (error) {
    next(error);
  }
};

module.exports = exports;
