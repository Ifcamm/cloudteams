const mongoose = require("mongoose");

const machineSchema = mongoose.Schema({
	assetcode: { type: String, required: true },
	asset: { type: String, required: true },
	trademark: { type: String, required: true },
	code: { type: String, required: true },
	location: { type: String, required: true },
	model: { type: String, required: true },
	series: { type: String, required: true },
	voltage: { type: String, required: true },
	measurement: { type: String, required: true },
	power: { type: String, required: true },
	inventory: { type: String, required: true },
	speed: { type: String, required: true },
	reference: { type: String, required: true },
	capacity: { type: String, required: true },
});

module.exports = mongoose.model("Machine", machineSchema);
