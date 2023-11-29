// routes/ganador.routes.js
const express = require('express');
const ganadorController = require('../controllers/ganador.controller');
const { authenticationMiddleware, isAdmin, isEvaluador, isUser } = require('../middlewares/authorization.middleware');
const router = express.Router();

// Ruta para obtener todos los ganadores. Todos los usuarios pueden acceder.
router.get('/', authenticationMiddleware, ganadorController.findAll);

// Ruta para crear un nuevo ganador. Solo accesible para evaluadores.
router.post('/', authenticationMiddleware, ganadorController.create);

// Ruta para actualizar un ganador existente. Solo accesible para evaluadores.
router.put('/:id', authenticationMiddleware, ganadorController.update);

// Ruta para eliminar un ganador existente. Solo accesible para evaluadores.
router.delete('/:id', authenticationMiddleware, ganadorController.delete);

module.exports = router;
