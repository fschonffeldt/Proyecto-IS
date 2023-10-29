const express = require("express");
const router = express.Router();
const {
  createPostulacion,
  getPostulacionesByRut,
  getPostulacionByNumeroSolicitud,
  updatePostulacion,
  deletePostulacion,
} = require("../controllers/postulacion.controller");

// Rutas para las postulaciones
router.post("/", createPostulacion);
router.get("/rut/:rut", getPostulacionesByRut);
router.get("/solicitud/:numeroSolicitud", getPostulacionByNumeroSolicitud);
router.put("/solicitud/:numeroSolicitud", updatePostulacion);
router.delete("/solicitud/:numeroSolicitud", deletePostulacion);

module.exports = router;
