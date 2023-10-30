// routes/concurso.routes.js
"use strict";

const express = require("express");
const concursoController = require("../controllers/concurso.controller");
const authenticationMiddleware = require('../middlewares/authentication.middleware');
const { isAdmin } = require('../middlewares/authorization.middleware');

const router = express.Router();

// Ruta para obtener todos los concursos. Todos los usuarios pueden acceder.
router.get('/', authenticationMiddleware, concursoController.findAll);

// Ruta para crear un nuevo concurso. Solo accesible para administradores.
router.post('/', authenticationMiddleware, isAdmin, concursoController.create);

// Ruta para actualizar un concurso existente. Solo accesible para administradores.
router.put('/:id', authenticationMiddleware, isAdmin, concursoController.update);

// Ruta para eliminar un concurso existente. Solo accesible para administradores.
router.delete('/:id', authenticationMiddleware, isAdmin, concursoController.delete);

module.exports = router;
