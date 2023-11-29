"use strict";
// Importa el modulo 'express' para crear las rutas
const express = require("express");

/** Enrutador de usuarios  */
const userRoutes = require("./user.routes.js");

/** Enrutador de autenticación */
const authRoutes = require("./auth.routes.js");
/** Middleware de autenticación */
const authenticationMiddleware = require("../middlewares/authentication.middleware.js");

/** Instancia del enrutador */
const router = express.Router();

// Define las rutas para los usuarios /api/usuarios
router.use("/users", authenticationMiddleware, userRoutes);
// Define las rutas para la autenticación /api/auth
router.use("/auth", authRoutes);
// Agrega las rutas para la entidad "estado" bajo /api/estados

const clasificacionRoutes = require("./clasificacion.routes.js"); // Agrega esta línea
<<<<<<< HEAD
router.use("/clasificacion", authenticationMiddleware,  clasificacionRoutes); // Agrega esta línea
=======
router.use("/clasificacion",  clasificacionRoutes); // Agrega esta línea

>>>>>>> 4d48846df43b1a7e90dbd72fef3255b12e2c7d3c
const evaluacionRoutes = require("./evaluacion.routes.js"); // Agrega esta línea
router.use("/evaluacion", authenticationMiddleware, evaluacionRoutes); // Agrega esta línea

module.exports = router;

