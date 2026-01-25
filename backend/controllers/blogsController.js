import Blog from "../models/blogModel.js";

const getBlogs = async (req, res) => {
  try {
    const blogs = await Blog.find().sort({ published_date: -1 });
    res.status(200).json(blogs);
  } catch (err) {
    console.error("Error fetching blogs:", err);
    
    // Handle specific MongoDB errors
    if (err.name === "MongoNetworkError" || err.name === "MongooseServerSelectionError") {
      return res.status(503).json({ 
        success: false,
        message: "Database connection error. Please try again later." 
      });
    }
    
    // Handle timeout errors
    if (err.name === "MongooseError" && err.message.includes("timeout")) {
      return res.status(504).json({ 
        success: false,
        message: "Request timeout. Please try again." 
      });
    }
    
    // Generic error response
    res.status(500).json({ 
      success: false,
      message: "Failed to fetch blogs. Please try again later.",
      error: process.env.NODE_ENV === "development" ? err.message : undefined
    });
  }
};

const createBlog = async (req, res) => {
  try {
    const { title, content, author } = req.body;

    // Validation errors
    if (!title || !content) {
      return res.status(400).json({ 
        success: false,
        message: "Title and content are required." 
      });
    }

    // Validate title length
    if (title.trim().length < 3) {
      return res.status(400).json({ 
        success: false,
        message: "Title must be at least 3 characters long." 
      });
    }

    // Validate content length
    if (content.trim().length < 10) {
      return res.status(400).json({ 
        success: false,
        message: "Content must be at least 10 characters long." 
      });
    }

    // Check if blog with same title already exists
    const exists = await Blog.findOne({ title: title.trim() });
    if (exists) {
      return res.status(409).json({ 
        success: false,
        message: "A blog with this title already exists." 
      });
    }

    const newBlog = await Blog.create({
      title: title.trim(),
      content: content.trim(),
      author: author?.trim() || "Anonymous",
    });

    res.status(201).json({ 
      success: true,
      data: newBlog 
    });
  } catch (err) {
    console.error("Error creating blog:", err);
    
    // Handle MongoDB duplicate key error (in case unique index exists)
    if (err.code === 11000) {
      return res.status(409).json({ 
        success: false,
        message: "A blog with this title already exists." 
      });
    }
    
    // Handle validation errors from Mongoose schema
    if (err.name === "ValidationError") {
      const validationErrors = Object.values(err.errors).map(e => e.message);
      return res.status(400).json({ 
        success: false,
        message: "Validation failed.",
        errors: validationErrors
      });
    }
    
    // Handle database connection errors
    if (err.name === "MongoNetworkError" || err.name === "MongooseServerSelectionError") {
      return res.status(503).json({ 
        success: false,
        message: "Database connection error. Please try again later." 
      });
    }
    
    // Generic error response
    res.status(500).json({ 
      success: false,
      message: "Failed to create blog. Please try again later.",
      error: process.env.NODE_ENV === "development" ? err.message : undefined
    });
  }
};
export { getBlogs, createBlog };
