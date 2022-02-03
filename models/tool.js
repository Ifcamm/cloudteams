const mongoose = require("mongoose");

const toolSchema = mongoose.Schema({
	contractId: { type: String, required: true },
	tool: { type: String },
});

module.exports = mongoose.model("Tool", toolSchema);
