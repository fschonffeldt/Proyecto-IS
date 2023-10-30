"use strict";
const express = require("express");

const evaluacionController = require("../controllers/evaluacion.controller.js");

const router = express.Router();

router.get("/", evaluacionController.getEvaluaciones);
router.get("/id", evaluacionController.getEvaluacionById)
router.post("/", evaluacionController.createEvaluacion);
router.put("/:id",  evaluacionController.updateEvaluacion);
router.delete("/:id",  evaluacionController.deleteEvaluacion);

module.exports = router;
