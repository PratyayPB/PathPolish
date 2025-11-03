import express from "express";
import generateRoadmap from "../controllers/roadmapController.js";
const router = express.Router();

// POST /roadmap/generate -> generates AI roadmap in Mermaid format
router.post("/", generateRoadmap);

export default router;
