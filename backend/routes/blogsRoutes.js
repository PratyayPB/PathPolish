import express from "express";
import { getBlogs, createBlog } from "../controllers/blogsController.js";

const router = express.Router();

function requireAdmin(req, res, next) {
  if (!req.session.adminId)
    return res.status(401).json({ message: "Admin login required" });
  next();
}

router.get("/", getBlogs);
router.post("/", createBlog);

export default router;
