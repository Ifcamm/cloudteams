const bcrypt = require("bcrypt");
const User = require("../models/user");
const jwt = require("jsonwebtoken");

//metodo para obtener todos los usuarios (GET)
exports.getUsers = (req, res) => {
	User.find().then((userResult) => {
		if (!userResult) {
			return res.status(200).json({ message: "User not found" });
		}
		res.status(200).json(userResult);
	});
};

//metodo para consultar un usuario por id
exports.getUser = (req, res) => {
	User.findById(req.params.id).then((userResult) => {
		if (!userResult) {
			return res.status(200).json({ message: "User not found" });
		}
		res.status(200).json(userResult);
	});
};

//metodo para crear un nuevo usuario
exports.createUser = (req, res) => {
	bcrypt.hash(req.body.password, 10).then((hash) => {
		const newUser = new User({
			identification: req.body.identification,
			name: req.body.name,
			lastName: req.body.lastName,
			email: req.body.email,
			phoneNumber: req.body.phoneNumber,
			password: hash,
			role: req.body.role,
		});

		newUser
			.save()
			.then((result) => {
				res.status(201).json({ message: "User created" });
			})
			.catch((err) => {
				res.status(500).json({ error: err });
			});
	});
};

//metodo para actualizar usuario
exports.updateUser = (req, res) => {
	const id = req.params.id;
	const user = new User({
		_id: id,
		identification: req.body.identification,
		name: req.body.name,
		lastName: req.body.lastName,
		email: req.body.email,
		phoneNumber: req.body.phoneNumber,
		role: req.body.role,
	});

	User.updateOne({ _id: id }, user).then((result) => {
		if (result.modifiedCount > 0) {
			res.status(200).json({ message: "Update success" });
		} else {
			res.status(200).json({ message: "Update failed" });
		}
	});
};

//metodo para eliminar un usuarios
exports.deleteUser = (req, res) => {
	User.deleteOne({ _id: req.params.id }).then((result) => {
		if (result.deletedCount > 0) {
			res.status(200).json({ message: "User eliminated" });
		} else {
			res.status(200).json({ message: "User not found" });
		}
	});
};

//metodo de inicio de sesión
exports.login = (req, res) => {
	let userGet;
	User.findOne({ identification: req.body.identification })
		.then((user) => {
			if (!user) {
				return;
			}
			userGet = user;
			return bcrypt.compare(req.body.password, user.password);
		})
		.then((result) => {
			if (!result) {
				return res.status(401).json({ message: "Authentication failed" });
			}
			const token = jwt.sign(
				{
					identification: userGet.identification,
					userId: userGet._id,
					userRole: userGet.role,
					userName: userGet.name,
				},
				process.env.TOKEN_S,
				{ expiresIn: "1h" }
			);

			res.status(200).json({
				token: token,
				expiresIn: 3600,
				userId: userGet._id,
				userRole: userGet.role,
				userName: userGet.name,
			});
		})
		.catch((err) => {
			return res.status(401).json({ message: "Authentication failed" });
		});
};
