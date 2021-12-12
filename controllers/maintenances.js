const Maintenance = require("../models/maintenance");

//metodo para obtener todos los mantenimientos (GET)
exports.getMaintenances = (req, res) => {
	Maintenance.find().then((maintenancesResult) => {
		if (!maintenancesResult) {
			return res.status(200).json({ message: "Maintenances not found" });
		}
		res.status(200).json(maintenancesResult);
	});
};

//metodo para consultar un mantenimiento por id
exports.getMaintenance = (req, res) => {
	Maintenance.findById(req.params.id).then((maintenanceResult) => {
		if (!maintenanceResult) {
			return res.status(200).json({ message: "Maintenance not found" });
		}
		res.status(200).json(maintenanceResult);
	});
};

//metodo para crear un nuevo mantenimiento
exports.createMaintenance = (req, res) => {
	const newMaintenance = new Maintenance({
		activo: req.body.activo,
		acciondemto: req.body.acciondemto,
		tiempoestimado: req.body.tiempoestimado,
		encargado: req.body.encargado,
		h: req.body.h,
		r: req.body.r,
		repuestos: req.body.repuestos,
		codigofalla: req.body.codigofalla,
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
exports.updateMaintenance = (req, res) => {
	const id = req.params.id;
	const maintenance = new Maintenance({
		_id: id,
		activo: req.body.activo,
		acciondemto: req.body.acciondemto,
		tiempoestimado: req.body.tiempoestimado,
		encargado: req.body.encargado,
		h: req.body.h,
		r: req.body.r,
		repuestos: req.body.repuestos,
		codigofalla: req.body.codigofalla,
	});

	Maintenance.updateOne({ _id: id }, maintenance).then((result) => {
		if (result.modifiedCount > 0) {
			res.status(200).json({ message: "Update success" });
		} else {
			res.status(200).json({ message: "Update failed" });
		}
	});
};

//metodo para eliminar un mantenimiento por id
exports.deleteMaintenance = (req, res) => {
	Maintenance.deleteOne({ _id: req.params.id }).then((result) => {
		if (result.deletedCount > 0) {
			res.status(200).json({ message: "Machine eliminated" });
		} else {
			res.status(200).json({ message: "Machine not found" });
		}
	});
};
