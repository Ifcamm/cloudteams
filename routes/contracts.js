const express = require("express");
const router = express.Router();
const contractsController = require("../controllers/contracts");
const checkAuth = require("../middleware/check-auth");
const checkRoleSU = require("../middleware/check-role");

//routes for contracts
//GET
router.get("", checkAuth, contractsController.getContracts);
router.get("/:id", checkAuth, contractsController.getContract);
router.get(
	"/materials/:contractId",
	checkAuth,
	contractsController.getMaterialsByContractId
);
router.get(
	"/tools/:contractId",
	checkAuth,
	contractsController.getToolsByContractId
);
router.get("/materials/edit/:id", checkAuth, contractsController.getMaterial);
router.get("/tools/edit/:id", checkAuth, contractsController.getTool);

//POST
router.post(
	"/newcontract",
	checkAuth,
	checkRoleSU,
	contractsController.createContract
);

router.post(
	"/newmaterial",
	checkAuth,
	checkRoleSU,
	contractsController.createMaterial
);

router.post("/addtool", checkAuth, checkRoleSU, contractsController.createTool);

//UPDATE
router.put("/:id", checkAuth, checkRoleSU, contractsController.updateContract);
router.put(
	"/material/:id",
	checkAuth,
	checkRoleSU,
	contractsController.updateMaterial
);
router.put("/tool/:id", checkAuth, checkRoleSU, contractsController.updateTool);

//ELIMINATE
router.delete(
	"/:id",
	checkAuth,
	checkRoleSU,
	contractsController.deleteContract
);
router.delete(
	"/material/:id",
	checkAuth,
	checkRoleSU,
	contractsController.deleteMaterial
);
router.delete(
	"/tool/:id",
	checkAuth,
	checkRoleSU,
	contractsController.deleteTool
);

module.exports = router;
