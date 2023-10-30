const express = require("express");
const router = express.Router();
const PostulacionesController = require("../controllers/postulacion.controller");

// Ruta para crear una postulación
router.post("/postulaciones", PostulacionesController.createPostulacion);

// Ruta para eliminar una postulación por ID
router.delete("/postulaciones/:id", PostulacionesController.deletePostulacionById);

// Ruta para obtener todas las postulaciones por RUT
router.get("/postulaciones/rut/:rut", PostulacionesController.getPostulacionesByRut);

// Ruta para buscar una postulación específica por número de ID
router.get("/postulaciones/:id", PostulacionesController.getPostulacionById);

// Ruta para actualizar una postulación
router.put("/postulaciones/:id", PostulacionesController.updatePostulacion);

module.exports = router;

