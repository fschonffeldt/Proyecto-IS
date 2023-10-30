"use strict";
const express = require("express");
const estadoController = require("../controllers/estado.controller"); // Asegúrate de que el controlador tenga el nombre correcto
const router = express.Router();

router.get('/', estadoController.getEstados);  // Ruta para obtener todos los estados
router.post('/', estadoController.createEstado);  // Ruta para crear un nuevo estado
router.put('/:id', estadoController.updateEstado);  // Ruta para actualizar un estado existente
router.delete('/:id', estadoController.deleteEstado);  // Ruta para eliminar un estado existente

// Ruta para obtener un estado por su ID
router.get('/:id', estadoController.getEstadoById);

// Ruta para obtener estados por su ID de formulario
router.get('/formulario/:idFormulario', estadoController.getEstadosByFormularioId);

module.exports = router;
