const express = require("express");
const router = express.Router();
const PostulacionesController = require("../controllers/postulacion.controller");

// Ruta para crear una postulación
router.post("/", PostulacionesController.createPostulacion);

// Ruta para eliminar una postulación por ID
router.delete("/:id", PostulacionesController.deletePostulacionById);

// Ruta para obtener todas las postulaciones por RUT
router.get("/rut/:rut", PostulacionesController.getPostulacionesByRut);

// Ruta para buscar una postulación específica por número de ID
router.get("/:id", PostulacionesController.getPostulacionById);

// Ruta para actualizar una postulación
router.put("/:id", PostulacionesController.updatePostulacion);

module.exports = router;

