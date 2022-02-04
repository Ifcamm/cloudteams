const mongoose = require("mongoose");

const contractSchema = mongoose.Schema({
	//encabezado
	title: { type: String, required: true },
	business: { type: String, required: true },
	process: { type: String, required: true },
	line: { type: String },
	numberOfMachines: { type: String },
	date: { type: Date },

	//cuerpo where
	asset: { type: String },
	system: { type: String },
	assetOrCriticComponent: { type: String },
	inventory: { type: String },

	//cuerpo what
	systemFunction: { type: String },
	failtureMode: { type: String },
	faultureOrigin: { type: String },
	operationalCheckList: { type: String },
	preventivePlans: { type: String },
	predictivePlans: { type: String },

	//cuerpo who
	category: { type: String },
	workPlace: { type: String },

	//cuerpo when
	frecuency: { type: String },
	lineCondition: { type: String },
	hm: { type: String },

	//cuerpo how
	description: { type: String },
});

module.exports = mongoose.model("Contract", contractSchema);
