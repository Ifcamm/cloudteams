const mongoose = require("mongoose");

const materialSchema = mongoose.Schema({
	contractId: { type: String, required: true },
	sapCode: { type: String },
	sparePart: { type: String },
	units: { type: String },
});

module.exports = mongoose.model("Material", materialSchema);
