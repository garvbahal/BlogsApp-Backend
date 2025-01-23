const mongoose = require("mongoose");

const PostSchema = new mongoose.Schema({
  title: {
    type: String,
    required: true,
    maxLength: 50,
  },
  body: {
    type: String,
    required: true,
    maxLength: 150,
  },
  like: {
    type: Boolean,
    default: false,
  },
  comment: {
    type: String,
    default: "",
  },
});

module.exports = mongoose.model("Posts", PostSchema);
