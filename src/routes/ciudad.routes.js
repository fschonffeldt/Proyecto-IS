const express = require("express");
const ciudadController = require("../controllers/ciudad.controller");
const router = express.Router();

router.post("/ciudades", ciudadController.createCiudad);
router.get("/ciudades", ciudadController.listCiudades);
router.get("/ciudades/:id", ciudadController.getCiudadById);
router.put("/ciudades/:id", ciudadController.updateCiudadById);
router.delete("/ciudades/:id", ciudadController.deleteCiudadById);

module.exports = router;
