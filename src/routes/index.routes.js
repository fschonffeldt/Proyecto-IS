"use strict";
// Importa el modulo 'express' para crear las rutas
const express = require("express");
const userRoutes = require("./user.routes.js");                                                 /** Enrutador de usuarios  */
const authRoutes = require("./auth.routes.js");                                                 /** Enrutador de autenticación */
const proyecRoutes = require("./proyec.routes.js");
const authenticationMiddleware = require("../middlewares/authentication.middleware.js");        /** Middleware de autenticación */
const router = express.Router();                                                                /** Instancia del enrutador */

router.use("/users", authenticationMiddleware, userRoutes);                             // Define las rutas para los usuarios /api/usuarios
router.use("/auth", authRoutes);  
router.use("/proyectos", proyecRoutes);                                                 // Define las rutas para la autenticación /api/auth

// Exporta el enrutador
module.exports = router;
