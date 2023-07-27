const mongoose = require("mongoose");

const dataSchema = new mongoose.Schema({
  name: {
    required: true,
    type: String,
  },
  media: {
    required: true,
    type: String,
  },
  mediaAspectRatio: {
    required: true,
    type: String,
    default: "1/1",
  },
  mediaType: {
    required: true,
    type: String,
  },
  description: {
    required: false,
    type: String,
  },
  tags: [{ type: String }],
  likes: {
    required: true,
    type: Number,
    default: 0,
  },
  likedBy: [{ type: String }],
});

module.exports = mongoose.model("Posts", dataSchema);
