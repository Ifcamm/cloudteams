const MaintenancePlan = require("../models/maintenance-plan");

//metodo para obtener todos los mantenimientos
exports.getMaintenancePlans = (req, res) => {
	MaintenancePlan.find().then((maintenancesResult) => {
		if (!maintenancesResult) {
			return res.status(200).json({ message: "Maintenance plans not found" });
		}
		res.status(200).json(maintenancesResult);
	});
};

//metodo para consultar un mantenimiento por id
exports.getMaintenancePlan = (req, res) => {
	MaintenancePlan.find({ workid: req.params.workid }).then(
		(maintenanceResult) => {
			if (!maintenanceResult) {
				return res.status(200).json({ message: "Maintenance not found" });
			}
			res.status(200).json(maintenanceResult);
		}
	);
};

exports.getMaintenancePlanById = (req, res) => {
	MaintenancePlan.findById(req.params.id).then((maintenanceResult) => {
		if (!maintenanceResult) {
			return res.status(200).json({ message: "Maintenance not found" });
		}
		res.status(200).json(maintenanceResult);
	});
};

exports.getMaintenancePlanByFrecuency = (req, res) => {
	MaintenancePlan.find(req.params.frecuencia).then((maintenanceResult) => {
		if (!maintenanceResult) {
			return res.status(200).json({ message: "Maintenance not found" });
		}
		res.status(200).json(maintenanceResult);
	});
};

//metodo para crear un nuevo mantenimiento
exports.createMaintenancePlan = (req, res) => {
	const newMaintenance = new MaintenancePlan({
		worker: req.body.worker,
		workid: req.body.workid,
		periodicity: req.body.periodicity,
		date: req.body.date,
		starttime: req.body.starttime, //evaluar tipo de dato
		finishtime: req.body.finishtime, //evaluar tipo de dato
		totaltime: req.body.totaltime, //horafinal - horainicio
		operationtime: req.body.operationtime, // incluye alistamiento de equipos
		replacementparts: req.body.replacementparts,
		ppe: req.body.ppe,
		risks: req.body.risks,
		assetcode: req.body.assetcode,
		task: req.body.task,
		taskrange: req.body.taskrange,
		result: req.body.result,
		observations: req.body.observations,
	});

	newMaintenance
		.save()
		.then((result) => {
			res.status(201).json({ message: "Maintenance created" });
		})
		.catch((err) => {
			res.status(500).json({ error: err });
		});
};

//metodo para actualizar un mantenimiento por id
exports.updateMaintenancePlan = (req, res) => {
	const id = req.params.id;
	const maintenance = new MaintenancePlan({
		_id: id,
		worker: req.body.worker,
		workid: req.body.workid,
		periodicity: req.body.periodicity,
		date: req.body.date,
		starttime: req.body.starttime, //evaluar tipo de dato
		finishtime: req.body.finishtime, //evaluar tipo de dato
		totaltime: req.body.totaltime, //horafinal - horainicio
		operationtime: req.body.operationtime, // incluye alistamiento de equipos
		replacementparts: req.body.replacementparts,
		ppe: req.body.ppe,
		risks: req.body.risks,
		machine: req.body.machine,
		task: req.body.task,
		taskrange: req.body.taskrange,
		result: req.body.result,
		observations: req.body.observations,
	});

	MaintenancePlan.updateOne({ _id: id }, maintenance).then((result) => {
		if (result.modifiedCount > 0) {
			res.status(200).json({ message: "Succesfully updated" });
		} else {
			res.status(200).json({ message: "Update failed" });
		}
	});
};

//metodo para eliminar un mantenimiento por id
exports.deleteMaintenancePlan = (req, res) => {
	MaintenancePlan.deleteOne({ _id: req.params.id }).then((result) => {
		if (result.deletedCount > 0) {
			res.status(200).json({ message: "Machine eliminated" });
		} else {
			res.status(200).json({ message: "Machine not found" });
		}
	});
};
