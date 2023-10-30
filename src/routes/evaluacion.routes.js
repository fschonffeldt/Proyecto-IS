// routes/fondo.routes.js
"use strict";

const express = require("express");
const evaluacionController = require("../controllers/evaluacion.controller");

const router = express.Router();

router.get('/', evaluacionController.findAll);  // Ruta para obtener todos los fondos
router.post('/', evaluacionController.create);  // Ruta para crear un nuevo fondo
router.put('/:id', evaluacionController.update);  // Ruta para actualizar un fondo existente
router.delete('/:id', evaluacionController.delete);  // Ruta para eliminar un fondo existente

module.exports = router;
