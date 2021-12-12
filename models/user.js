const mongoose = require("mongoose");
const uniqueValidator = require("mongoose-unique-validator");

const userSchema = mongoose.Schema({
	identification: { type: String, required: true, unique: true },
	name: { type: String, required: true },
	lastName: { type: String, required: true },
	email: { type: String, required: false, unique: true },
	phoneNumber: { type: String, required: false, unique: true },
	password: { type: String, required: true },
	role: { type: String, required: true },
});

userSchema.plugin(uniqueValidator);

module.exports = mongoose.model("User", userSchema);
