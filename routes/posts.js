const express = require("express");
const router = express.Router();

const { createPost, retrievePosts } = require("../controllers/posts");
const { like, unlike } = require("../controllers/likes");
router.post("/posts/create", createPost);

router.get("/posts", retrievePosts);

router.put("/likes/like/:id", like);

router.put("/likes/unlike/:id", unlike);

module.exports = router;
