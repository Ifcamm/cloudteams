const Contract = require("../models/contract");
const Material = require("../models/material");
const Tool = require("../models/tool");

//------------------GET------------------//
//obtencion de todos los contratos y de contrato por ID
exports.getContracts = (req, res) => {
	Contract.find().then((contractResult) => {
		if (!contractResult) {
			return res.status(200).json({ message: "Contracts not found" });
		}
		res.status(200).json(contractResult);
	});
};
exports.getContract = (req, res) => {
	Contract.findById(req.params.id).then((contractResult) => {
		if (!contractResult) {
			return res.status(200).json({ message: "Contract not found" });
		}
		res.status(200).json(contractResult);
	});
};

exports.getMaterial = (req, res) => {
	Material.findById(req.params.id).then((contractResult) => {
		if (!contractResult) {
			return res.status(200).json({ message: "Material not found" });
		}
		res.status(200).json(contractResult);
	});
};

exports.getTool = (req, res) => {
	Tool.findById(req.params.id).then((contractResult) => {
		if (!contractResult) {
			return res.status(200).json({ message: "Tool not found" });
		}
		res.status(200).json(contractResult);
	});
};

//obtencion de listado de materiales y herramientas del contrato usando el id de contrato
exports.getMaterialsByContractId = (req, res) => {
	Material.find({ contractId: req.params.contractId }).then(
		(materialResult) => {
			if (!materialResult) {
				return res.status(200).json({ message: "Materials not found" });
			}
			res.status(200).json(materialResult);
		}
	);
};

exports.getToolsByContractId = (req, res) => {
	Tool.find({ contractId: req.params.contractId }).then((toolResult) => {
		if (!toolResult) {
			return res.status(200).json({ message: "Tools not found" });
		}
		res.status(200).json(toolResult);
	});
};

//------------------POST------------------//

//crear contrato
exports.createContract = (req, res) => {
	const newContract = Contract({
		title: req.body.title,
		business: req.body.business,
		process: req.body.process,
		line: req.body.line,
		numberOfMachines: req.body.numberOfMachines,
		date: req.body.date,
		asset: req.body.asset,
		system: req.body.system,
		assetOrCriticComponent: req.body.assetOrCriticComponent,
		inventory: req.body.inventory,
		systemFunction: req.body.systemFunction,
		failtureMode: req.body.failtureMode,
		faultureOrigin: req.body.faultureOrigin,
		operationalCheckList: req.body.operationalCheckList,
		preventivePlans: req.body.preventivePlans,
		predictivePlans: req.body.predictivePlans,
		category: req.body.category,
		workPlace: req.body.workPlace,
		frecuency: req.body.frecuency,
		lineCondition: req.body.lineCondition,
		hm: req.body.hm,
		description: req.body.description,
	});

	newContract
		.save()
		.then((result) => {
			res.status(201).json({ message: "Contract created" });
		})
		.catch((err) => {
			res.status(500).json({ error: err });
		});
};

//crear material
exports.createMaterial = (req, res) => {
	const newMaterial = Material({
		contractId: req.body.contractId,
		sapCode: req.body.sapCode,
		sparePart: req.body.sparePart,
		units: req.body.units,
	});
	newMaterial
		.save()
		.then((result) => {
			res.status(201).json({ message: "Material added" });
		})
		.catch((err) => {
			res.status(500).json({ error: err });
		});
};

//crear herramienta
exports.createTool = (req, res) => {
	const newTool = Tool({
		contractId: req.body.contractId,
		tool: req.body.tool,
	});

	newTool
		.save()
		.then((result) => {
			res.status(201).json({ message: "Tool added" });
		})
		.catch((err) => {
			res.status(500).json({ error: err });
		});
};

//------------------PUT------------------//

//actualizar contrato
exports.updateContract = (req, res) => {
	const id = req.params.id;
	const contract = new Contract({
		_id: id,
		title: req.body.title,
		business: req.body.business,
		process: req.body.process,
		line: req.body.line,
		numberOfMachines: req.body.numberOfMachines,
		date: req.body.date,
		asset: req.body.asset,
		system: req.body.system,
		assetOrCriticComponent: req.body.assetOrCriticComponent,
		inventory: req.body.inventory,
		systemFunction: req.body.systemFunction,
		failtureMode: req.body.failtureMode,
		faultureOrigin: req.body.faultureOrigin,
		operationalCheckList: req.body.operationalCheckList,
		preventivePlans: req.body.preventivePlans,
		predictivePlans: req.body.predictivePlans,
		category: req.body.category,
		workPlace: req.body.workPlace,
		frecuency: req.body.frecuency,
		lineCondition: req.body.lineCondition,
		hm: req.body.hm,
		description: req.body.description,
	});

	Contract.updateOne({ _id: id }, contract).then((result) => {
		if (result.modifiedCount > 0) {
			res.status(200).json({ message: "Successfully updated" });
		} else {
			res.status(200).json({ message: "Update failed" });
		}
	});
};

//actualizar material
exports.updateMaterial = (req, res) => {
	const id = req.params.id;
	const material = new Material({
		_id: id,
		contractId: req.body.contractId,
		sapCode: req.body.sapCode,
		sparePart: req.body.sparePart,
		units: req.body.units,
	});

	Material.updateOne({ _id: id }, material).then((result) => {
		if (result.modifiedCount > 0) {
			res.status(200).json({ message: "Successfully updated" });
		} else {
			res.status(200).json({ message: "Update failed" });
		}
	});
};

//actualizar herramientas
exports.updateTool = (req, res) => {
	const id = req.params.id;
	const tool = new Tool({
		_id: id,
		contractId: req.body.contractId,
		tool: req.body.tool,
	});

	Tool.updateOne({ _id: id }, tool).then((result) => {
		if (result.modifiedCount > 0) {
			res.status(200).json({ message: "Successfully updated" });
		} else {
			res.status(200).json({ message: "Update failed" });
		}
	});
};

//------------------DELETE------------------//
//eliminar contrato

exports.deleteContract = (req, res) => {
	Contract.deleteOne({ _id: req.params.id }).then((result) => {
		if (result.deletedCount > 0) {
			res.status(200).json({ message: "Contract eliminated" });
		} else {
			res.status(200).json({ message: "Contract not found" });
		}
	});
};

//eliminar material
exports.deleteMaterial = (req, res) => {
	Material.deleteOne({ _id: req.params.id }).then((result) => {
		if (result.deletedCount > 0) {
			res.status(200).json({ message: "Material eliminated" });
		} else {
			res.status(200).json({ message: "Maintenance not found" });
		}
	});
};

//eliminar herramienta
exports.deleteTool = (req, res) => {
	Tool.deleteOne({ _id: req.params.id }).then((result) => {
		if (result.deletedCount > 0) {
			res.status(200).json({ message: "Tool eliminated" });
		} else {
			res.status(200).json({ message: "Tool not found" });
		}
	});
};
