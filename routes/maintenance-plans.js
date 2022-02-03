const express = require("express");
const router = express.Router();
const maintplanController = require("../controllers/maintenance-plans");
const checkAuth = require("../middleware/check-auth");
checkRoleSU = require("../middleware/check-role");

router.get("/:workid", checkAuth, maintplanController.getMaintenancePlan);
router.get("/mp/:id", checkAuth, maintplanController.getMaintenancePlanById);
router.post(
	"/createmaintenanceplan",
	checkAuth,
	maintplanController.createMaintenancePlan
);
router.put(
	"/:id",
	checkAuth,
	checkRoleSU,
	maintplanController.updateMaintenancePlan
);
router.delete(
	"/:id",
	checkAuth,
	checkRoleSU,
	maintplanController.deleteMaintenancePlan
);

module.exports = router;
