const express = require("express");
const {
  registerUser,
  loginUser,
  getAllUsers,
  getUserById,
  updateUser,
  deleteUser,
} = require("../controllers/Usercontrollers");

const router = express.Router();

// User routes
router.post("/register", registerUser);
router.post("/login", loginUser);
router.get("/", getAllUsers);
router.get("/:id", getUserById);
router.put("/:id", updateUser);
router.delete("/:id", deleteUser);

module.exports = router;
