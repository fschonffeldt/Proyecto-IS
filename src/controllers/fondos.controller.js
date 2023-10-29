// controllers/fondo.controller.js
"use strict";
const mongoose = require('mongoose');
// Asegúrate de que la ruta y el nombre del archivo sean correctos
const Fondo = require('../models/fondos.model');  // <-- Ajusta esto si es necesario

/**
 * Obtiene todos los fondos.
 */
exports.findAll = async (req, res, next) => {
    try {
        const fondos = await Fondo.find();
        res.json(fondos);
    } catch (error) {
        next(error);
    }
};


// controllers/fondo.controller.js

exports.create = async (req, res, next) => {
    try {
      const nuevoFondo = new Fondo(req.body);
      await nuevoFondo.save();
      res.status(201).send(nuevoFondo);  // 201 Created
    } catch (error) {
      if (error instanceof mongoose.Error.ValidationError) {
        // Si es un error de validación, enviar un mensaje de error personalizado
        res.status(400).send({ message: error.message });
      } else {
        // Si es otro tipo de error, pasarlo al siguiente middleware de manejo de errores
        next(error);
      }
    }
  };


/**
 * Actualiza un fondo existente.
 */
exports.update = async (req, res, next) => {
    try {
        const { id } = req.params;
        const fondoActualizado = await Fondo.findByIdAndUpdate(id, req.body, { new: true });
        if (!fondoActualizado) {
            return res.status(404).send();  // 404 Not Found
        }
        res.json(fondoActualizado);
    } catch (error) {
        next(error);
    }
};

// Método para eliminar un fondo por su ID
exports.delete = async (req, res) => {
    const { id } = req.params;  // Extrae el ID del fondo desde la URL
  
    try {
      // Busca y elimina el fondo por su ID
      const fondo = await Fondo.findByIdAndDelete(id);
  
      if (!fondo) {
        // Si no se encontró el fondo, envía un mensaje de error
        return res.status(404).send({ message: 'Fondo no encontrado' });
      }
  
      // Si se eliminó el fondo, envía un mensaje de éxito
      res.send({ message: 'Fondo eliminado exitosamente', data: fondo });
    } catch (error) {
      // Si ocurre un error, lo captura y envía un mensaje de error
      res.status(500).send({ message: error.message || 'Error al eliminar el fondo' });
    }
  };