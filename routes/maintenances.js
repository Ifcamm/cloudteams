const express = require("express");
const router = express.Router();
const maintController = require("../controllers/maintenances");
const checkAuth = require("../middleware/check-auth");
const checkRoleSU = require("../middleware/check-role");

//routes for maintenances

router.get(
	"/:assetcode",
	checkAuth,
	maintController.getMaintenancesByAssetcode
);
router.get("/maintenance/:id", checkAuth, maintController.getMaintenance);
router.get("/", checkAuth, maintController.getMaintenances);
router.post("/createmaintenance", checkAuth, maintController.createMaintenance);
router.put("/:id", checkAuth, maintController.updateMaintenance);
router.delete(
	"/:id",
	checkAuth,
	checkRoleSU,
	maintController.deleteMaintenance
);

module.exports = router;
