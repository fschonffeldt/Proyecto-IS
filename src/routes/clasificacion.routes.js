"use strict";

const express = require("express");
const clasificacionController = require("../controllers/clasificacion.controller"); // Asegúrate de que el controlador tenga el nombre correcto
const router = express.Router();

router.get('/', clasificacionController.getClasificacion);  // Ruta para obtener todos los estados
router.post('/', clasificacionController.createClasificacion);  // Ruta para crear un nuevo estado
router.put('/:id', clasificacionController.updateClasificacion);  // Ruta para actualizar un estado existente
router.delete('/:id', clasificacionController.deleteClasificacion);  // Ruta para eliminar un estado existente
router.get('/id',clasificacionController.getClasificacionById);
router.get('/:id_postulacion', clasificacionController.getClasificacionByPostulacion);

module.exports = router;
