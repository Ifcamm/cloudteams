const Machine = require("../models/machine");

//metodo para obtener todas las máquinas (GET)
exports.getMachines = (req, res) => {
	Machine.find().then((machineResult) => {
		if (!machineResult) {
			return res.status(200).json({ message: "Machine not found" });
		}
		res.status(200).json(machineResult);
	});
};

//metodo para consultar una máquina por id
exports.getMachine = (req, res) => {
	Machine.findById(req.params.id).then((machineResult) => {
		if (!machineResult) {
			return res.status(200).json({ message: "Machine not found" });
		}
		res.status(200).json(machineResult);
	});
};

//metodo para crear una nueva máquina
exports.createMachine = (req, res) => {
	const newMachine = new Machine({
		activo: req.body.activo,
		equipo: req.body.equipo,
		marca: req.body.marca,
		codigo: req.body.codigo,
		ubicacion: req.body.ubicacion,
		modelo: req.body.modelo,
		serie: req.body.serie,
		voltaje: req.body.voltaje,
		medidas: req.body.medidas,
		potencia: req.body.potencia,
		inventario: req.body.inventario,
		velocidad: req.body.velocidad,
		referencia: req.body.referencia,
		capacidad: req.body.capacidad,
	});

	newMachine
		.save()
		.then((result) => {
			res.status(201).json({ message: "Machine created" });
		})
		.catch((err) => {
			res.status(500).json({ error: err });
		});
};

//metodo para actualizar una máquina
exports.updateMachine = (req, res) => {
	const id = req.params.id;
	const machine = new Machine({
		_id: id,
		activo: req.body.activo,
		equipo: req.body.equipo,
		marca: req.body.marca,
		codigo: req.body.codigo,
		ubicacion: req.body.ubicacion,
		modelo: req.body.modelo,
		serie: req.body.serie,
		voltaje: req.body.voltaje,
		medidas: req.body.medidas,
		potencia: req.body.potencia,
		inventario: req.body.inventario,
		velocidad: req.body.velocidad,
		referencia: req.body.referencia,
		capacidad: req.body.capacidad,
	});

	Machine.updateOne({ _id: id }, machine).then((result) => {
		if (result.modifiedCount > 0) {
			res.status(200).json({ message: "Update success" });
		} else {
			res.status(200).json({ message: "Update failed" });
		}
	});
};

//metodo para eliminar una máquina
exports.deleteMachine = (req, res) => {
	Machine.deleteOne({ _id: req.params.id }).then((result) => {
		if (result.deletedCount > 0) {
			res.status(200).json({ message: "Machine eliminated" });
		} else {
			res.status(200).json({ message: "Machine not found" });
		}
	});
};
