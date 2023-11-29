const mongoose = require('mongoose');
const Clasificacion = require('../models/clasificacion.model'); // Asegúrate de tener la ruta correcta al modelo

// Controlador para crear una nueva clasificación
exports.createClasificacion = async (req, res) => {
  try {
<<<<<<< HEAD
    const clasificacion = await Clasificacion.find(); // Población de la referencia 'estado'
    res.json(clasificacion);
=======
    const nuevaClasificacion = new Clasificacion(req.body);
    const resultado = await nuevaClasificacion.save();
    res.status(201).json(resultado);
>>>>>>> 4d48846df43b1a7e90dbd72fef3255b12e2c7d3c
  } catch (error) {
    console.error(error);
    res.status(500).json({ mensaje: 'Error al crear la clasificación' });
  }
};

// Controlador para obtener todas las clasificaciones
exports.getClasificacion = async (req, res) => {
  try {
    const clasificaciones = await Clasificacion.find();
    res.status(200).json(clasificaciones);
  } catch (error) {
    console.error(error);
    res.status(500).json({ mensaje: 'Error al obtener las clasificaciones' });
  }
};

// Buscar clasificación por ID
exports.getClasificacionById = async (req, res) => {
  try {
    const id = req.params.id; // Asegúrate de que estás obteniendo el ID de la solicitud
    const clasificacion = await Clasificacion.findById(id);
    
    if (!clasificacion) {
      return res.status(404).json({ mensaje: 'Clasificación no encontrada' });
    }

    res.status(200).json(clasificacion);
  } catch (error) {
    console.error(error);
    res.status(500).json({ mensaje: 'Error al obtener la clasificación por ID' });
  }
};

// Actualizar clasificación por ID
exports.updateClasificacion = async (req, res) => {
  try {
    const id = req.params.id; // Asegúrate de que estás obteniendo el ID de la solicitud
    const actualizacion = req.body; // Asegúrate de que estás enviando los datos de actualización en el cuerpo de la solicitud
    const clasificacionActualizada = await Clasificacion.findByIdAndUpdate(id, actualizacion, { new: true });
    
    if (!clasificacionActualizada) {
      return res.status(404).json({ mensaje: 'Clasificación no encontrada' });
    }

    res.status(200).json(clasificacionActualizada);
  } catch (error) {
    console.error(error);
    res.status(500).json({ mensaje: 'Error al actualizar la clasificación por ID' });
  }
};

// Eliminar clasificación por ID
exports.deleteClasificacion = async (req, res) => {
  try {
    const id = req.params.id; // Asegúrate de que estás obteniendo el ID de la solicitud
    const clasificacionEliminada = await Clasificacion.findByIdAndRemove(id);
    
    if (!clasificacionEliminada) {
      return res.status(404).json({ mensaje: 'Clasificación no encontrada' });
    }

    res.status(200).json({ mensaje: 'Clasificación eliminada correctamente' });
  } catch (error) {
    console.error(error);
    res.status(500).json({ mensaje: 'Error al eliminar la clasificación por ID' });
  }
};

module.exports = exports;
