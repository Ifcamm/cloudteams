const mongoose = require("mongoose");
const uniqueValidator = require("mongoose-unique-validator");

const machineSchema = mongoose.Schema({
	activo: { type: String, required: true },
	equipo: { type: String, required: true },
	marca: { type: String, required: true },
	codigo: { type: String, required: true },
	ubicacion: { type: String, required: true },
	modelo: { type: String, required: true },
	serie: { type: String, required: true },
	voltaje: { type: String, required: true },
	medidas: { type: String, required: true },
	potencia: { type: String, required: true },
	inventario: { type: String, required: true },
	velocidad: { type: String, required: true },
	referencia: { type: String, required: true },
	capacidad: { type: String, required: true },
});

machineSchema.plugin(uniqueValidator);

module.exports = mongoose.model("Machine", machineSchema);
