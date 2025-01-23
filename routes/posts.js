const express = require("express");
const router = express.Router();

const { createPost, retrievePosts } = require("../controllers/posts");
const { like, unlike } = require("../controllers/likes");
const { createComment, retrieveComment } = require("../controllers/comments");

router.post("/posts/create", createPost);

router.get("/posts", retrievePosts);

router.put("/likes/like/:id", like);

router.put("/likes/unlike/:id", unlike);

router.post("/comments/create/:id", createComment);

router.get("/comments/:id", retrieveComment);

module.exports = router;
