"use strict";
const mongoose = require("mongoose");
const Estado = require("../models/estado.model"); // Ajusta esto según la ubicación de tu modelo

/**
 * Obtiene todos los estados.
 */
exports.getEstados = async (req, res, next) => {
  try {
    const estados = await Estado.find(); // Accede directamente al modelo de Estado
    res.json(estados);
  } catch (error) {
    next(error);
  }
};

/**
 * Crea un nuevo estado.
 */
exports.createEstado = async (req, res, next) => {
  try {
    const nuevoEstado = new Estado(req.body);
    await nuevoEstado.save();
    res.status(201).send(nuevoEstado);
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
exports.getEstadoById = async (req, res, next) => {
  try {
    const estado = await Estado.findById(req.params.id); // Accede directamente al modelo de Estado
    if (!estado) {
      return res.status(404).send();
    }
    res.json(estado);
  } catch (error) {
    next(error);
  }
};

/**
 * Actualiza un estado por su id.
 */
exports.updateEstado = async (req, res, next) => {
  try {
    const estadoActualizado = await Estado.findByIdAndUpdate(
      req.params.id,
      req.body,
      { new: true }
    );
    if (!estadoActualizado) {
      return res.status(404).send();
    }
    res.json(estadoActualizado);
  } catch (error) {
    next(error);
  }
};

exports.getEstadoByPostulacion = async (req, res, next) => {
  try {
    const idPostulacion = req.params.id_postulacion; // Obtén el id_postulacion de los parámetros
    const estados = await Estado.find({ id_postulacion });
    
    if (!estados || estados.length === 0) {
      return res.status(404).send({ message: 'No se encontraron estados para la postulación especificada' });
    }

    res.json(estados);
  } catch (error) {
    next(error);
  }
};


/**
 * Elimina un estado por su id.
 */
exports.deleteEstado = async (req, res, next) => {
  try {
    const estadoEliminado = await Estado.findByIdAndDelete(req.params.id); // Accede directamente al modelo de Estado
    if (!estadoEliminado) {
      return res.status(404).send();
    }
    res.send({ message: "Estado eliminado exitosamente", data: estadoEliminado });
  } catch (error) {
    next(error);
  }
};

module.exports = exports;
