// fondos.routes.js

"use strict";

const express = require("express");
const fondosController = require("../controllers/fondos.controller");
const authenticationMiddleware = require('../middlewares/authentication.middleware');
const { isAdmin } = require('../middlewares/authorization.middleware');

const router = express.Router();

// Ruta para obtener todos los fondos. Todos los usuarios pueden acceder.
router.get('/', authenticationMiddleware, fondosController.findAll);

// Ruta para crear un nuevo fondo. Solo accesible para administradore
router.post('/', authenticationMiddleware, isAdmin, fondosController.create);

// Ruta para actualizar un fondo existente. Solo accesible para administradores.
router.put('/:id', authenticationMiddleware, isAdmin, fondosController.update);

// Ruta para eliminar un fondo existente. Solo accesible para administradores.
router.delete('/:id', authenticationMiddleware, isAdmin, fondosController.delete);

module.exports = router;
