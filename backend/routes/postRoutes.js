const express = require("express");

const {
  createPost,
  getPosts,
  getPost,
  updatePost,
  deletePost,
} = require("../controllers/postController");

const protect = require("../middleware/authMiddleware");

const router = express.Router();

// Public
router.get("/", getPosts);
router.get("/:id", getPost);

// Protected
router.post("/", protect, createPost);
router.put("/:id", protect, updatePost);
router.delete("/:id", protect, deletePost);

module.exports = router;