// const Contract = require("../models/contract");

// exports.getContracts = (req, res) => {
// 	Contract.find().then((contractResult) => {
// 		if (!contractResult) {
// 			return res.status(200).json({ message: "Maintenances not founded" });
// 		}
// 		res.status(200).json(contractResult);
// 	});
// };

// exports.getMaintenancesByAssetcode = (req, res) => {
// 	Maintenance.find({ assetcode: req.params.assetcode }).then(
// 		(maintenanceResult) => {
// 			if (!maintenanceResult) {
// 				return res.status(200).json({ message: "Maintenances not founded" });
// 			}
// 			res.status(200).json(maintenanceResult);
// 		}
// 	);
// };

// exports.getMaintenance = (req, res) => {
// 	Maintenance.findById(req.params.id).then((maintenanceResult) => {
// 		if (!maintenanceResult) {
// 			return res.status(200).json({ message: "Maintenances not founded" });
// 		}
// 		res.status(200).json(maintenanceResult);
// 	});
// };

// exports.createMaintenance = (req, res) => {
// 	const newMaintenance = Maintenance({
// 		assetcode: req.body.assetcode,
// 		task: req.body.task,
// 		startdate: req.body.startdate,
// 		periodicity: req.body.periodicity,
// 	});

// 	newMaintenance
// 		.save()
// 		.then((result) => {
// 			res.status(201).json({ message: "Maintenance created" });
// 		})
// 		.catch((err) => {
// 			res.status(500).json({ error: err });
// 		});
// };

// exports.updateMaintenance = (req, res) => {
// 	const id = req.params.id;
// 	const maintenance = new Maintenance({
// 		_id: id,
// 		assetcode: req.body.assetcode,
// 		task: req.body.task,
// 		startdate: req.body.startdate,
// 		periodicity: req.body.periodicity,
// 	});

// 	Maintenance.updateOne({ _id: id }, maintenance).then((result) => {
// 		if (result.modifiedCount > 0) {
// 			res.status(200).json({ message: "Successfully updated" });
// 		} else {
// 			res.status(200).json({ message: "Update failed" });
// 		}
// 	});
// };

// exports.deleteMaintenance = (req, res) => {
// 	Maintenance.deleteOne({ _id: req.params.id }).then((result) => {
// 		if (result.deletedCount > 0) {
// 			res.status(200).json({ message: "Maintenance eliminated" });
// 		} else {
// 			res.status(200).json({ message: "Maintenance not found" });
// 		}
// 	});
// };
