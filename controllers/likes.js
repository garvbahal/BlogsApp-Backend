const Posts = require("../models/Posts");

exports.like = async (req, res) => {
  try {
    const id = req.params.id;
    const response = await Posts.findByIdAndUpdate(
      { _id: id },
      { like: true },
      { new: true }
    );
    if (!response) {
      return res.status(404).json({
        success: false,
        message: "Id not Found",
      });
    }
    res.status(200).json({
      success: true,
      data: response,
      message: "Liked Successfully",
    });
  } catch (err) {
    res.status(500).json({
      success: false,
      error: err.message,
      message: "Internal Server Error",
    });
  }
};

exports.unlike = async (req, res) => {
  try {
    const id = req.params.id;
    const response = await Posts.findByIdAndUpdate(
      { _id: id },
      { like: false },
      { new: true }
    );
    if (!response) {
      return res.status(404).json({
        success: false,
        message: "Id not Found",
      });
    }
    res.status(200).json({
      success: true,
      data: response,
      message: "UnLiked Successfully",
    });
  } catch (err) {
    res.status(500).json({
      success: false,
      error: err.message,
      message: "Internal Server Error",
    });
  }
};
