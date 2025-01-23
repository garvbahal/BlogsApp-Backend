const Posts = require("../models/Posts");

exports.createComment = async (req, res) => {
  try {
    const { comment } = req.body;
    const id = req.params.id;
    const response = await Posts.findByIdAndUpdate(
      { _id: id },
      { comment: comment },
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
      message: "Comment Created Successfully",
    });
  } catch (err) {
    res.status(500).json({
      success: false,
      error: err.message,
      message: "Internal Server Error",
    });
  }
};

exports.retrieveComment = async (req, res) => {
  try {
    const id = req.params.id;
    const response = await Posts.findById(id);
    
    if (!response) {
      return res.status(404).json({
        success: false,
        message: "Id not Found",
      });
    }

    res.status(200).json({
      success: true,
      data: response.comment,
      message: "Comment Retrieved Successfully",
    });
  } catch (err) {
    res.status(500).json({
      success: false,
      error: err.message,
      message: "Internal Server Error",
    });
  }
};
