// routes/fondo.routes.js
"use strict";

const express = require("express");
const fondoController = require("../controllers/fondos.controller");
const authenticationMiddleware = require('../middlewares/authentication.middleware');

const { isAdmin, isUser } = require('../middlewares/authorization.middleware');
const router = express.Router();

router.get('/',authenticationMiddleware,isUser, fondoController.findAll);  // Ruta para obtener todos los fondos
router.post('/',authenticationMiddleware, isAdmin, fondoController.create);  // Ruta para crear un nuevo fondo
router.put('/:id',authenticationMiddleware, isAdmin, fondoController.update);  // Ruta para actualizar un fondo existente
router.delete('/:id',authenticationMiddleware, isAdmin, fondoController.delete);  // Ruta para eliminar un fondo existente

module.exports = router;
