const express = require("express");
const {
  createBlog,
  updateBlog,
  getBlog,
  getAllBlogs,
  deleteBlog,
  liketheBlog,
  disliketheBlog,
} = require("../controller/blogCtrl");
const { authMiddleware, isAdmin } = require("../middlewares/authMiddleware");

const router = express.Router();

// create blog
router.post("/", authMiddleware, isAdmin, createBlog);

// like the Blog
router.put("/likes", authMiddleware, liketheBlog);

// disLike the blog
router.put("/dislikes", authMiddleware, disliketheBlog);

// update Blog
router.put("/:id", authMiddleware, isAdmin, updateBlog);

// get Blog
router.get("/:id", getBlog);

// get Blog
router.get("/", getAllBlogs);

// delete Blog
router.delete("/:id", authMiddleware, isAdmin, deleteBlog);

module.exports = router;
