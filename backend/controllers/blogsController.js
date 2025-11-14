import Blog from "../models/blogModel.js";

const getBlogs = async (req, res) => {
  try {
    const blogs = await Blog.find().sort({ published_date: -1 });
    res.status(200).json(blogs);
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
};

const createBlog = async (req, res) => {
  try {
    const { title, content, author } = req.body;

    if (!title || !content) {
      return res
        .status(400)
        .json({ message: "Title and content are required." });
    }

    // Check if blog with same title already exists
    const exists = await Blog.findOne({ title });
    if (exists) {
      return res
        .status(409)
        .json({ message: "A blog with this title already exists." });
    }

    const newBlog = await Blog.create({
      title,
      content,
      author: author || "Anonymous",
    });

    res.status(201).json(newBlog);
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
};
export { getBlogs, createBlog };
