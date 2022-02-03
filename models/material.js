const mongoose = require("mongoose");

const materialSchema = mongoose.Schema({
	contractId: { type: String, required: true },
	sapCode: { type: String },
	sparePart: { type: String, required: true },
	units: { type: Date, required: true },
});

module.exports = mongoose.model("Material", materialSchema);
