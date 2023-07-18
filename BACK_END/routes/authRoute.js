const express = require("express");
const {
  createUser,
  loginUserCtrl,
  getallUser,
  getaUser,
  deleteaUser,
  updatedUser,
} = require("../controller/userCtrl");
const router = express.Router();

router.post("/register", createUser);
router.post("/login", loginUserCtrl);

// GET user
router.get("/all-users", getallUser);
router.get("/:id", getaUser);

// Delete user
router.delete("/:id", deleteaUser);

// updated user
router.put("/:id", updatedUser);

module.exports = router;
