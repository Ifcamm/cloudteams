const mongoose = require("mongoose");

const maintenanceSchema = mongoose.Schema({
	assetcode: { type: String, required: true },
	task: { type: String, required: true },
	startdate: { type: Date, required: true },
	periodicity: { type: String, required: true },
});

module.exports = mongoose.model("Maintenance", maintenanceSchema);
