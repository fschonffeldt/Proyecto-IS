const express = require("express");
const router = express.Router();
const {
  createPostulacion,
  getPostulacionesByRut,
  getPostulacionByNumeroSolicitud,
  getEstadoSolicitudByNumeroSolicitud,
  updatePostulacion,
  deletePostulacion,
} = require("../controllers/postulaciones.controller");

// Rutas para las postulaciones
router.post("/", createPostulacion);
router.get("/rut/:rut", getPostulacionesByRut);
router.get("/solicitud/:numeroSolicitud", getPostulacionByNumeroSolicitud);
router.get("/estado/:numeroSolicitud", getEstadoSolicitudByNumeroSolicitud);
router.put("/solicitud/:numeroSolicitud", updatePostulacion);
router.delete("/solicitud/:numeroSolicitud", deletePostulacion);

module.exports = router;
