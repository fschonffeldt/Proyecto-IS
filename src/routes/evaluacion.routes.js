// routes/fondo.routes.js
"use strict";

const express = require("express");
const evaluacionController = require("../controllers/evaluacion.controller");

/** Middlewares de autorización */
const authorizationMiddleware = require("../middlewares/authorization.middleware.js");

/** Middleware de autenticación */
const authenticationMiddleware = require("../middlewares/authentication.middleware.js");

// Define el middleware de autenticación para todas las rutas
router.use(authenticationMiddleware);

const router = express.Router();

router.get('/', authorizationMiddleware.isEvaluador, evaluacionController.getEvaluacion);  // Ruta para obtener todos los fondos
router.post('/', authorizationMiddleware.isEvaluador, evaluacionController.createEvaluacion);  // Ruta para crear un nuevo fondo
router.put('/:id', authorizationMiddleware.isEvaluador, evaluacionController.updateEvaluacion);  // Ruta para actualizar un fondo existente
router.delete('/:id', authorizationMiddleware.isEvaluador, evaluacionController.deleteEvaluacion);  // Ruta para eliminar un fondo existente
router.get('/:id', authorizationMiddleware.isEvaluador, authorizationMiddleware.isUser, evaluacionController.getEvaluacionById);
router.get('/:id_postulacion', authorizationMiddleware.isUser, evaluacionController.getEvaluacionByPostulacion);

module.exports = router;
