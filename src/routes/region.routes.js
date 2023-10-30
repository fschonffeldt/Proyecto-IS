const express = require("express");
const regionController = require("../controllers/region.controller");
const router = express.Router();

router.post("/", regionController.createRegion);
router.get("/", regionController.listRegiones);
router.get("/:id", regionController.getRegionById);
router.put("/:id", regionController.updateRegionById);
router.delete("/:id", regionController.deleteRegionById);

module.exports = router;
