const express = require("express");
const regionController = require("../controllers/region.controller");
const router = express.Router();

router.post("/regiones", regionController.createRegion);
router.get("/regiones", regionController.listRegiones);
router.get("/regiones/:id", regionController.getRegionById);
router.put("/regiones/:id", regionController.updateRegionById);
router.delete("/regiones/:id", regionController.deleteRegionById);

module.exports = router;
