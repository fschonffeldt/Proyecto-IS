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

// Importa y utiliza las rutas de los diferentes módulos de tu aplicación
const postulacionesRoutes = require("./postulaciones.routes");

// Agrega las rutas de los diferentes módulos aquí
router.use("/postulaciones", postulacionesRoutes);

module.exports = router;

const ciudadRoutes = require("./routes/ciudad.routes");
const regionRoutes = require("./routes/region.routes");

app.use("/api", ciudadRoutes);
app.use("/api", regionRoutes);

