"use strict";
const express = require("express");

const estadoController = require("../controllers/estado.controller.js");
const router = express.Router();



// Define las rutas para los estados
router.get("/", estadoController.getEstados);
router.get("/id", estadoController.getEstadoById)
router.post("/",  estadoController.createEstado);
router.put("/:id",  estadoController.updateEstado);
router.delete("/:id",  estadoController.deleteEstado);

// Exporta el enrutador
module.exports = router;
