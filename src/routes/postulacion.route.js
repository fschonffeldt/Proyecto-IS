const express = require("express");
const router = express.Router();
const postulacionController = require("../controllers/postulacion.controller");

// Rutas para las postulaciones
router.post("/", postulacionController.createPostulacion);
router.get("/", postulacionController.getPostulaciones);
router.get("/:numeroSolicitud", postulacionController.getPostulacionByNumeroSolicitud);
router.put("/:numeroSolicitud", postulacionController.updatePostulacionByNumeroSolicitud);
router.delete("/:numeroSolicitud", postulacionController.deletePostulacionByNumeroSolicitud);

module.exports = router;
