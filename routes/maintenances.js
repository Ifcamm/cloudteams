const express = require("express");
const router = express.Router();
const maintController = require("../controllers/maintenances");
const checkAuth = require("../middleware/check-auth");

//routes for users

router.get(
	"/:assetcode",
	checkAuth,
	maintController.getMaintenancesByAssetcode
);
router.get("/maintenance/:id", checkAuth, maintController.getMaintenance);
router.get("/", checkAuth, maintController.getMaintenances);
router.post("/createmaintenance", checkAuth, maintController.createMaintenance);
router.put("/:id", checkAuth, maintController.updateMaintenance);
router.delete("/:id", checkAuth, maintController.deleteMaintenance);

module.exports = router;
