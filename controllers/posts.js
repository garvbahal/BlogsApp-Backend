const Posts = require("../models/Posts");

exports.createPost = async (req, res) => {
  try {
    const { title, body, like, comment } = req.body;
    const response = await Posts.create({ title, body, like, comment });

    res.status(200).json({
      success: true,
      data: response,
      message: "Post Created",
    });
  } catch (err) {
    res.status(500).json({
      success: false,
      error: err.message,
      message: "Internal Server Error",
    });
  }
};

exports.retrievePosts = async (req, res) => {
  try {
    const response = await Posts.find({});

    res.status(200).json({
      success: true,
      data: response,
      message: "Posts Fetched successfully",
    });
  } catch (err) {
    res.status(500).json({
      success: false,
      error: err.message,
      message: "Internal Server Error",
    });
  }
};
