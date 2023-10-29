// controllers/concurso.controller.js
"use strict";
const Concurso = require('../models/concurso.model');
const Fondo = require('../models/fondos.model');


/** 
 * Obtiene todos los concursos.
 */
exports.findAll = async (req, res, next) => {
  try {
    const concursos = await Concurso.find().populate('fondo');
    res.json(concursos);
  } catch (error) {
    next(error);
  }
};

/** 
 * Crea un nuevo concurso.
 */
exports.create = async (req, res, next) => {
  try {
    const nuevoConcurso = new Concurso(req.body);
    await nuevoConcurso.save();

    // Buscar el Fondo asociado
    const fondo = await Fondo.findById(nuevoConcurso.fondo);
    if (!fondo) {
      throw new Error('Fondo no encontrado');
    }

    // Actualizar la información del Fondo
    fondo.montoTotal = nuevoConcurso.montoTotal;
    fondo.montoAsignado = nuevoConcurso.ganadores.reduce((sum, ganador) => sum + ganador.montoAsignado, 0);
    fondo.ganadores = nuevoConcurso.ganadores;
    fondo.montoRestante = fondo.montoTotal - fondo.montoAsignado;

    await fondo.save();

    // Buscar nuevamente el concurso con el fondo poblado
    const concursoConFondo = await Concurso.findById(nuevoConcurso._id).populate('fondo');

    res.status(201).json(concursoConFondo);  // 201 Created
  } catch (error) {
    next(error);
  }
};



/** 
 * Actualiza un concurso existente.
 */
exports.update = async (req, res, next) => {
  try {
    const { id } = req.params;
    const concursoActualizado = await Concurso.findByIdAndUpdate(id, req.body, { new: true });
    if (!concursoActualizado) {
      return res.status(404).send();  // 404 Not Found
    }
    res.json(concursoActualizado);
  } catch (error) {
    next(error);
  }
};

exports.delete = async (req, res, next) => {
  try {
      const { id } = req.params;
      const concursoEliminado = await Concurso.findByIdAndDelete(id);
      if (!concursoEliminado) {
          return res.status(404).send({ message: 'Concurso no encontrado' });  // 404 Not Found
      }
      res.status(200).send({ message: 'Concurso eliminado exitosamente' });  // 200 OK
  } catch (error) {
      next(error);
  }
};