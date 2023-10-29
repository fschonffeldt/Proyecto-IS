"use strict";
// Importa el modulo 'express' para crear las rutas
const express = require("express");

/** Enrutador de usuarios  */
const userRoutes = require("./user.routes.js");

/** Enrutador de autenticación */
const authRoutes = require("./auth.routes.js");
/** Middleware de autenticación */
const authenticationMiddleware = require("../middlewares/authentication.middleware.js");

const estadoRoutes = require("./estado.routes.js"); // Agrega esta línea

const evaluacionRoutes = require("./evaluacion.routes.js"); // Agrega esta línea

/** Instancia del enrutador */
const router = express.Router();

// Define las rutas para los usuarios /api/usuarios
router.use("/users", authenticationMiddleware, userRoutes);
// Define las rutas para la autenticación /api/auth
router.use("/auth", authRoutes);
// Agrega las rutas para la entidad "estado" bajo /api/estados
router.use("/estado", authenticationMiddleware, estadoRoutes); // Agrega esta línea
router.use("/evaluacion", authenticationMiddleware, evaluacionRoutes); // Agrega esta línea

// Importa y utiliza las rutas de los diferentes módulos de tu aplicación
const postulacionRoutes = require("./postulacion.routes");
const ciudadRoutes = require("./ciudad.routes");
const regionRoutes = require("./region.routes");

// Agrega las rutas de los diferentes módulos aquí
router.use("/postulaciones", postulacionRoutes);
router.use("/ciudades", ciudadRoutes);
router.use("/regiones", regionRoutes);  


module.exports = router;

