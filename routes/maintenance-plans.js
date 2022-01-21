const express = require("express");
const router = express.Router();
const maintplanController = require("../controllers/maintenance-plans");
const checkAuth = require("../middleware/check-auth");

router.get("/:workid", checkAuth, maintplanController.getMaintenancePlan);
router.get("/mp/:id", checkAuth, maintplanController.getMaintenancePlanById);
router.post(
	"/createmaintenanceplan",
	checkAuth,
	maintplanController.createMaintenancePlan
);
router.put("/:id", checkAuth, maintplanController.updateMaintenancePlan);
router.delete("/:id", checkAuth, maintplanController.deleteMaintenancePlan);

module.exports = router;
