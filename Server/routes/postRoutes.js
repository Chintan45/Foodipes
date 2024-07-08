const express = require("express");
const router = express.Router();

const { getPosts, addPost, addPostsFromFile } = require("../controllers/postController");

router.get("/", getPosts);
router.post("/addPost", addPost);
router.post("/addPostsFromFile", addPostsFromFile);

module.exports = router;
