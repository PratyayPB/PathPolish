import mongoose from "mongoose";
//can add tags,blog categories later

const blogSchema = new mongoose.Schema(
  {
    title: {
      type: String,
      required: true,
      unique: true, // title must be unique
      trim: true,
    },
    content: {
      type: String,
      required: true,
    },
    author: {
      type: String,
      required: true,
    },
    published_date: {
      type: Date,
      default: Date.now, // auto-assign current date if not provided
    },
  },
  { timestamps: true } // adds createdAt, updatedAt fields automatically
);

export default mongoose.model("Blog", blogSchema);
