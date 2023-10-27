"use strict";
// Importa el modulo 'express' para crear las rutas
const express = require("express");

/** Enrutador de usuarios  */
const userRoutes = require("./user.routes.js");

/** Enrutador de autenticación */
const authRoutes = require("./auth.routes.js");

const estadoRoutes = require("./estado.routes.js"); // Agrega esta línea

const evaluacionRoutes = require("./evaluacion.routes.js"); // Agrega esta línea

/** Middleware de autenticación */
const authenticationMiddleware = require("../middlewares/authentication.middleware.js");

/** Instancia del enrutador */
const router = express.Router();

// Define las rutas para los usuarios /api/usuarios
router.use("/users", authenticationMiddleware, userRoutes);
// Define las rutas para la autenticación /api/auth
router.use("/auth", authRoutes);
// Agrega las rutas para la entidad "estado" bajo /api/estados
router.use("/estados", authenticationMiddleware, estadoRoutes); // Agrega esta línea
router.use("/evaluaciones", authenticationMiddleware, evaluacionRoutes); // Agrega esta línea

// Exporta el enrutador
module.exports = router;
