const express = require("express");
const router = express.Router();

const { getPosts, addPost, addPostsFromFile } = require("../controllers/postController");
const requireAuth = require("../middleware/requireAuth");

router.use(requireAuth)
router.get("/", getPosts);
router.post("/addPost", addPost);
router.post("/addPostsFromFile", addPostsFromFile);

module.exports = router;
