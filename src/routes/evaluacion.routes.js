"use strict";
const express = require("express");

const evaluacionController = require("../controllers/evaluacion.controller.js");
const authorizationMiddleware = require("../middlewares/authorization.middleware.js");
const authenticationMiddleware = require("../middlewares/authentication.middleware.js");

const router = express.Router();

router.use(authenticationMiddleware);

router.get("/", evaluacionController.getEvaluaciones);
router.post("/", authorizationMiddleware.isAdmin, evaluacionController.createEvaluacion);
router.get("/:id", evaluacionController.getEvaluacionById);
router.put("/:id", authorizationMiddleware.isAdmin, evaluacionController.updateEvaluacion);
router.delete("/:id", authorizationMiddleware.isAdmin, evaluacionController.deleteEvaluacion);

module.exports = router;
