const express = require("express");
const router = express.Router();
const machinesController = require("../controllers/machines");
const checkAuth = require("../middleware/check-auth");

//routes for machines
router.get("/allmachines", checkAuth, machinesController.getMachines);
router.get("/:id", checkAuth, machinesController.getMachine);
router.post("/createmachine", checkAuth, machinesController.createMachine);
router.put("/:id", checkAuth, machinesController.updateMachine);
router.delete("/:id", checkAuth, machinesController.deleteMachine);

module.exports = router;
