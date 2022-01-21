const mongoose = require("mongoose");

const maintenancePlanSchema = mongoose.Schema({
	worker: { type: String, required: true },
	workid: { type: String, required: true },
	periodicity: { type: String, required: true },
	date: { type: Date, required: true },
	starttime: { type: String, required: true }, //evaluar tipo de dato
	finishtime: { type: String, required: true }, //evaluar tipo de dato
	totaltime: { type: String }, //horafinal - horainicio
	operationtime: { type: String }, // incluye alistamiento de equipos
	replacementparts: { type: String, required: true },
	ppe: { type: String, required: true },
	risks: { type: String },
	assetcode: { type: String, required: true },
	task: { type: String, required: true },
	taskrange: { type: String },
	result: { type: String },
	observations: { type: String },
});

module.exports = mongoose.model("MaintenancePlans", maintenancePlanSchema);
