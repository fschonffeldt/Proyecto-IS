"use strict";
const express = require("express");

const proyecController = require("../controllers/proyect.controller.js");
const authorizationMiddleware = require("../middlewares/authorization.middleware.js");
const authenticationMiddleware = require("../middlewares/authentication.middleware.js");

const router = express.Router();

router.use(authenticationMiddleware);

router.get("/", proyecController.getProyectos);
router.post("/", authorizationMiddleware.isAdmin, proyecController.createProyecto);
router.get("/:id", proyecController.getProyectoById);
router.put("/:id", authorizationMiddleware.isAdmin, proyecController.updateProyecto);
router.delete("/:id", authorizationMiddleware.isAdmin, proyecController.deleteProyecto);

module.exports = router;
