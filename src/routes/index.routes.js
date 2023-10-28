"use strict";
// Importa el modulo 'express' para crear las rutas
const express = require("express");

/** Enrutador de usuarios  */
const userRoutes = require("./user.routes.js");

/** Enrutador de autenticación */
const authRoutes = require("./auth.routes.js");

/** Enrutador de Concurso */
const concursoRoutes = require("./concurso.routes.js");

/** Enrutador de Fondo */
const fondoRoutes = require("./fondos.routes.js");

/** Middleware de autenticación */
const authenticationMiddleware = require("../middlewares/authentication.middleware.js");

/** Instancia del enrutador */
const router = express.Router();

// Define las rutas para los usuarios /api/usuarios
router.use("/users", authenticationMiddleware, userRoutes);

// Define las rutas para la autenticación /api/auth
router.use("/auth", authRoutes);

// Define las rutas para Concurso /api/concurso
router.use("/concurso", concursoRoutes);

// Define las rutas para Fondo /api/fondo
router.use("/fondos", fondoRoutes);

// Exporta el enrutador
module.exports = router;
