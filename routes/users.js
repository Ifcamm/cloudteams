const express = require("express");
const router = express.Router();
const usersController = require("../controllers/users");
const checkAuth = require("../middleware/check-auth");

//routes for users
router.get("/allusers", checkAuth, usersController.getUsers);
router.get("/:id", checkAuth, usersController.getUser);
router.post("/createuser", checkAuth, usersController.createUser);
router.post("/login", usersController.login);
router.put("/:id", checkAuth, usersController.updateUser);
router.delete("/:id", checkAuth, usersController.deleteUser);

module.exports = router;
