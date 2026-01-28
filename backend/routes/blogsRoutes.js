import express from "express";
import { getBlogs, createBlog } from "../controllers/blogsController.js";
import { requireLogin } from "../middleware/authMiddleware.js"; 
const router = express.Router();

function requireAdmin(req, res, next) {
  if (!req.session.adminId)
    return res.status(401).json({ message: "Admin login required" });
  next();
}

router.get("/",requireLogin, getBlogs);
router.post("/", createBlog);

export default router;
