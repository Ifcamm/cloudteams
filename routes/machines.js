const express = require("express");
const router = express.Router();
const machinesController = require("../controllers/machines");
const checkAuth = require("../middleware/check-auth");
const checkRoleSU = require("../middleware/check-role");

//routes for machines
router.get("/allmachines", checkAuth, machinesController.getMachines);
router.get("/:id", checkAuth, machinesController.getMachine);
router.post(
	"/createmachine",
	checkAuth,
	checkRoleSU,
	machinesController.createMachine
);
router.put("/:id", checkAuth, checkRoleSU, machinesController.updateMachine);
router.delete("/:id", checkAuth, checkRoleSU, machinesController.deleteMachine);

module.exports = router;
