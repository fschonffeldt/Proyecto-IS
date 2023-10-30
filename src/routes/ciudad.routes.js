const express = require("express");
const ciudadController = require("../controllers/ciudad.controller");
const router = express.Router();

router.post("/", ciudadController.createCiudad);
router.get("/", ciudadController.listCiudades);
router.get("/:id", ciudadController.getCiudadById);
router.put("/:id", ciudadController.updateCiudadById);
router.delete("/:id", ciudadController.deleteCiudadById);

module.exports = router;
