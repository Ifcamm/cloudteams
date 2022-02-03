const express = require("express");
const router = express.Router();
const usersController = require("../controllers/users");
const checkAuth = require("../middleware/check-auth");
const checkRoleSU = require("../middleware/check-role");

//routes for users
router.get("/allusers", checkAuth, usersController.getUsers);
router.get("/:id", checkAuth, usersController.getUser);
router.post("/createuser", checkAuth, checkRoleSU, usersController.createUser);
router.post("/login", usersController.login);
router.put("/:id", checkAuth, checkRoleSU, usersController.updateUser);
router.delete("/:id", checkAuth, checkRoleSU, usersController.deleteUser);

module.exports = router;
