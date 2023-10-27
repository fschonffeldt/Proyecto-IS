"use strict";
const express = require("express");

const estadoController = require("../controllers/estado.controller.js");
const authorizationMiddleware = require("../middlewares/authorization.middleware.js");
const authenticationMiddleware = require("../middlewares/authentication.middleware.js");

const router = express.Router();

// Define el middleware de autenticación para todas las rutas
router.use(authenticationMiddleware);

// Define las rutas para los estados
router.get("/", estadoController.getEstados);
router.post("/", authorizationMiddleware.isAdmin, estadoController.createEstado);
router.get("/:id", estadoController.getEstadoById);
router.put("/:id", authorizationMiddleware.isAdmin, estadoController.updateEstado);
router.delete("/:id", authorizationMiddleware.isAdmin, estadoController.deleteEstado);

// Exporta el enrutador
module.exports = router;