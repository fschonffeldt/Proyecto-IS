"use strict";
const Proyecto = require('../models/proyec.model.js');

/** 
 * Obtiene todos los proyectos.
 */
exports.obtain = async (req, res, next) => {
  try {
    const proyectos = await Proyecto.find();
    res.json(proyectos);
  } catch (error) {
    next(error);
  }
};

/** 
 * Obtiene un proyecto por id.
 */
exports.obtainById = async (req, res, next) => {
  const { id } = req.params;
  try {
    const proyecto = await Proyecto.findById(id, req.body);
    res.json(proyecto);
  } catch (error) {
    next(error);
  }
};

/** 
 * Crea un nuevo proyecto.
 */
exports.create = async (req, res, next) => {
  try {
    const newProyecto = new Proyecto(req.body);
    await newProyecto.save();

    res.status(201).json(newProyecto);  // 201 Created
  } catch (error) {
    next(error);
  }
};


/** 
 * Actualiza un proyecto existente.
 */
exports.update = async (req, res, next) => {
  try {
    const { id } = req.params;
    const ProyectoActualizado = await Proyecto.findByIdAndUpdate(id, req.body, { new: true });
    if (!ProyectoActualizado) {
      return res.status(404).send({ message: 'Proyecto no encontrado' });  // 404 Not Found
    }
    res.status(200).send({ message: 'Proyecto actualizado exitosamente' });
    res.json(ProyectoActualizado);
  } catch (error) {
    next(error);
  }
};

exports.delete = async (req, res, next) => {
  try {
      const { id } = req.params;
      const proyectoEliminado = await Proyecto.findByIdAndDelete(id);
      if (!proyectoEliminado) {
          return res.status(404).send({ message: 'Proyecto no encontrado' });  // 404 Not Found
      }
      res.status(200).send({ message: 'Proyecto eliminado exitosamente' });  // 200 OK
  } catch (error) {
      next(error);
  }
};