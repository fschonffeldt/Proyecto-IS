// controllers/fondo.controller.js
"use strict";

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

/**
 * Crea un nuevo fondo.
 */
exports.create = async (req, res, next) => {
    try {
        const nuevoFondo = new Fondo(req.body);
        await nuevoFondo.save();
        res.status(201).json(nuevoFondo);  // 201 Created
    } catch (error) {
        next(error);
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
