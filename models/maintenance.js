const mongoose = require("mongoose");
const uniqueValidator = require("mongoose-unique-validator");

const maintenanceSchema = mongoose.Schema({
	activo: { type: String, required: true },
	acciondemto: { type: String, required: true },
	tiempoestimado: { type: String, required: true },
	encargado: { type: String, required: true },
	h: { type: Boolean, required: true },
	r: { type: Boolean, required: true },
	repuestos: { type: Array, required: true },
	codigofalla: { type: String, required: true },
});

maintenanceSchema.plugin(uniqueValidator);

module.exports = mongoose.model("Maintenance", maintenanceSchema);
