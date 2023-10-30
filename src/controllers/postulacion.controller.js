"use strict";
const Postulaciones = require("../models/postulacion.model");
const Estado = require("../models/estado.model");

// Crear una postulación
async function crearPostulacion(req, res) {
  try {
    const nuevaPostulacion = new Postulaciones(req.body);
    await nuevaPostulacion.save();
    res.status(201).json(nuevaPostulacion);
  } catch (error) {
    res.status(500).json({ error: "No se pudo crear la postulación" });
  }
};


// Buscar una postulación por ID
async function buscarPostulacionPorId(req, res) {
  try {
    const postulacion = await Postulaciones.findById(req.params.id);
    if (!postulacion) {
      return res.status(404).json({ error: "Postulación no encontrada" });
    }
    res.json(postulacion);
  } catch (error) {
    res.status(500).json({ error: "No se pudo buscar la postulación" });
  }
};

// Listar todas las postulaciones por el rut del representante
async function listarPostulacionesPorRutRepresentante(req, res) {
  try {
    const postulaciones = await
     Postulaciones.find({ rutRepresentante: req.params.rutRepresentante });
    res.json(postulaciones);
  } catch (error) {
    res.status(500).json({ error: "No se pudieron listar las postulaciones" });
  }
};

// Eliminar una postulación por ID
async function eliminarPostulacionPorId(req, res) {
  try {
    const postulacion = await Postulaciones.findByIdAndDelete(req.params.id);
    if (!postulacion) {
      return res.status(404).json({ error: "Postulación no encontrada" });
    }
    res.json({ message: "Postulación eliminada" });
  } catch (error) {
    res.status(500).json({ error: "No se pudo eliminar la postulación" });
  }
};

// Actualizar el estado de una postulación
async function actualizarPostulacion(req, res) {
    try {
      const { estadoId, ...actualizacion } = req.body;
  
      // Actualiza la postulación
      const postulacion = await Postulaciones.findByIdAndUpdate(
        req.params.id,
        { ...actualizacion },
        { new: true },
      );
  
      if (!postulacion) {
        return res.status(404).json({ error: "Postulación no encontrada" });
      }
  
      // Si el estado se cambia a 'enviada', crea un nuevo estado
      if (estadoId && actualizacion.estados === "enviada") {
        const nuevoEstado = new Estado({
          id_postulacion: req.params.id,
          estado: "en proceso",
        });
        await nuevoEstado.save();
      }
  
      res.json(postulacion);
    } catch (error) {
      res.status(500).json({ error: "No se pudo actualizar la postulación" });
    }
  };

module.exports = {
  crearPostulacion,
  buscarPostulacionPorId,
  listarPostulacionesPorRutRepresentante,
  eliminarPostulacionPorId,
  actualizarPostulacion,
};
