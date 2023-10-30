// routes/fondo.routes.js
"use strict";

const express = require("express");
const fondoController = require("../controllers/fondos.controller");

const router = express.Router();

router.get('/', fondoController.findAll);  // Ruta para obtener todos los fondos
router.post('/', fondoController.create);  // Ruta para crear un nuevo fondo
router.put('/:id', fondoController.update);  // Ruta para actualizar un fondo existente
router.delete('/:id', fondoController.delete);  // Ruta para eliminar un fondo existente

module.exports = router;