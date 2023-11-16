// routes/fondo.routes.js
"use strict";

const express = require("express");
const evaluacionController = require("../controllers/evaluacion.controller");

const router = express.Router();

router.get('/', evaluacionController.getEvaluacion);  // Ruta para obtener todos los fondos
router.post('/', evaluacionController.createEvaluacion);  // Ruta para crear un nuevo fondo
router.put('/:id', evaluacionController.updateEvaluacion);  // Ruta para actualizar un fondo existente
router.delete('/:id', evaluacionController.deleteEvaluacion);  // Ruta para eliminar un fondo existente
router.get('/:id', evaluacionController.getEvaluacionById);

module.exports = router;
