const jwt = require("jsonwebtoken");

module.exports = (req, res, next) => {
	try {
		const token = req.headers.authorization.split(" ")[1];
		jwt.verify(token, process.env.TOKEN_S);
		next();
	} catch (err) {
		res.status(401).json({ message: "Autentication failed" });
	}
};
