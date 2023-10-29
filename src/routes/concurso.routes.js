// routes/concurso.routes.js
"use strict";

const express = require("express");
const concursoController = require("../controllers/concurso.controller");

const router = express.Router();

router.get('/', concursoController.findAll);  // Ruta para obtener todos los concursos
router.post('/', concursoController.create);  // Ruta para crear un nuevo concurso
router.put('/:id', concursoController.update);  // Ruta para actualizar un concurso existente
router.delete('/:id', concursoController.delete);  // Ruta para eliminar un concurso existente

module.exports = router;
