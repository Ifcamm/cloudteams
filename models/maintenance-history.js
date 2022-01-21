const mongoose = require("mongoose");
const uniqueValidator = require("mongoose-unique-validator");

const mtoHistorySchema = mongoose.Schema({
	assetcode: { type: String, required: true },
	date: { type: Date, required: true },
	task: { type: String, required: true },
	operationtime: { type: String },
	timeout: { type: String }, //tiempofueradeservicio
	executiontime: { type: String },
	replacementpartscost: { type: String },
	othercosts: { type: String },
	totalcost: { type: String },
});

mtoHistorySchema.plugin(uniqueValidator);

module.exports = mongoose.model("Machine", mtoHistorySchema);
