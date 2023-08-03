const express = require("express");
const {
  createCategory,
  updateCategory,
  deleteCategory,
  getCategory,
  getAllCategory,
} = require("../controller/prodectCategoryCtrl");
const { authMiddleware, isAdmin } = require("../middlewares/authMiddleware");

const router = express.Router();

// create Category
router.post("/", authMiddleware, isAdmin, createCategory);

// update Category
router.put("/:id", authMiddleware, isAdmin, updateCategory);

// delete Category
router.delete("/:id", authMiddleware, isAdmin, deleteCategory);

// get Category
router.get("/:id", getCategory);

// get all Category
router.get("/", getAllCategory);

module.exports = router;
