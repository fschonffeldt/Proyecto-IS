"use strict";

const express = require("express");
const proyecController = require("../controllers/proyect.controller.js");
const authenticationMiddleware = require('../middlewares/authentication.middleware');
const { isAdmin } = require('../middlewares/authorization.middleware');


const router = express.Router();

//router.use(authenticationMiddleware);

router.get("/", proyecController.obtain);
router.get("/:id", proyecController.obtainById);
router.post("/", proyecController.create);
router.put("/:id", proyecController.update);
router.delete("/:id", proyecController.delete);

module.exports = router;
