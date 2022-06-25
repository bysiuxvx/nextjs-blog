const mongoose = require("mongoose")

const Schema = mongoose.Schema

const postSchema = new Schema(
  {
    title: { type: String, required: true },
    text: { type: String, required: true },
    hashtags: [
      {
        type: String,
        required: false,
      },
    ],
    createdBy: { type: String, required: true },
    // img:
  },
  {
    timestamps: true,
  }
)

const Post = mongoose.model("Post", postSchema)

module.exports = Post
