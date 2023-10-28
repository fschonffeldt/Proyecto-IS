// controllers/concurso.controller.js
"use strict";
const Concurso = require('../models/concurso.model');


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
    res.status(201).json(nuevoConcurso);  // 201 Created
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

