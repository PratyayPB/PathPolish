import express from "express";
import generateRoadmap from "../controllers/roadmapController.js";
import Roadmap from "../models/roadmapModel.js";
const router = express.Router();

function requireLogin(req, res, next) {
  try {
    if (!req.session?.userId) {
      return res.status(401).json({
        success: false,
        message: "Authentication required. Please Login to continue.",
      });
    }
    next();
  } catch (err) {
    res.status(500).json({ success: false, message: "Server error" });
  }
}

// POST /roadmap/generate -> generates AI roadmap in Mermaid format
router.post("/", requireLogin, generateRoadmap);
router.post("/save", async (req, res) => {
  const { role, duration, mermaidCode } = req.body;

  try {
    // ✅ Check if roadmap already exists with same role + duration
    const exists = await Roadmap.findOne({ role, duration });
    if (exists) {
      return res
        .status(200)
        .json({ message: "Document already exists. Not created again." });
    }

    // ✅ Create new document
    await Roadmap.create({ role, duration, mermaidCode });

    res.status(201).json({ message: "Roadmap stored successfully." });
  } catch (err) {
    res.status(500).json({ message: "Error saving roadmap", error: err });
  }
});

export default router;
