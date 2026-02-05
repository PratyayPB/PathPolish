import { GoogleGenerativeAI } from "@google/generative-ai";

// import mermaid from "https://cdn.jsdelivr.net/npm/mermaid@10/dist/mermaid.esm.min.mjs";
import mermaid from "mermaid";
import dotenv from "dotenv";
import Roadmap from "../models/roadmapModel.js";
if (process.env.NODE_ENV !== "production") {
  dotenv.config();
}
const GenAI = new GoogleGenerativeAI(process.env.GEMINI_API_KEY);
const model = GenAI.getGenerativeModel({ model: "gemini-2.5-flash" });

mermaid.initialize({ startOnLoad: true });

// Function to generate AI roadmap in Mermaid format
async function generateMermaidCode(role, duration) {
  try {
    const prompt = `Generate a comprehensive learning roadmap for the role of ${role}, to be completed in approximately ${duration}.
Return only a valid Mermaid flowchart code block (graph TD) — no extra text, titles, or commentary outside the code block.
The roadmap must include:
1. Foundational concepts and prerequisites,
2. Core tools, frameworks, and technologies in a logical sequence,
3. Practical projects or milestones after each major learning phase,
4. Advanced topics and long-term specialization paths.
Ensure node labels are concise, quoted, and Mermaid-compatible (no syntax errors). 
Structure the chart for clear visual progression from beginner to advanced.
`;

    const result = await model.generateContent(prompt);

    if (!result || !result.response) {
      throw new Error("Invalid response from AI model");
    }

    let responseText = await result.response.text();

    if (!responseText || responseText.trim().length === 0) {
      throw new Error("AI model returned empty response");
    }

    responseText = responseText.replace(/```mermaid\n|```/g, "").trim();
    return responseText;
  } catch (error) {
    console.error("Error in generateMermaidCode:", error);

    // Re-throw with more context
    if (error.message?.includes("API key")) {
      throw new Error("Invalid or missing API key for AI service");
    }

    if (
      error.message?.includes("quota") ||
      error.message?.includes("rate limit")
    ) {
      throw new Error(
        "AI service rate limit exceeded. Please try again later.",
      );
    }

    throw error;
  }
}

const generateRoadmap = async (req, res, next) => {
  try {
    // requireLogin(req,res,next);
    if (!req.session || !req.session.userId) {
      return res.status(401).json({
        success: false,
        message: "Authentication required. Please login to continue.",
      });
    }
    console.log("User ID:", req.session.userId);
    console.log("Session ID:", req.session.id);
    console.log("Session User ID:", req.session.userId);

    const { role, duration } = req.body;

    if (!role || !duration) {
      return res.status(400).json({
        success: false,
        message: "Role and duration are required.",
      });
    }

    // Validate role length
    if (role.trim().length < 2) {
      return res.status(400).json({
        success: false,
        message: "Role must be at least 2 characters long.",
      });
    }

    //  Check if roadmap already exists
    const existingRoadmap = await Roadmap.findOne({
      role: role.trim(),
      duration: duration.trim(),
    });

    if (existingRoadmap) {
      console.log("✅ Roadmap fetched from DB — no AI call needed.");

      return res.status(200).json({
        success: true,
        mermaidCode: existingRoadmap.mermaidCode,
        fromDatabase: true,
      });
    }

    const mermaidCode = await generateMermaidCode(role.trim(), duration.trim());

    if (!mermaidCode || mermaidCode.trim().length === 0) {
      console.error("❌ Failed to generate Mermaid code.");
      return res.status(500).json({
        success: false,
        message: "Failed to generate roadmap. Please try again.",
      });
    }

    // Store newly generated roadmap in DB
    const saved = await Roadmap.create({
      role: role.trim(),
      duration: duration.trim(),
      mermaidCode,
    });

    console.log("New Roadmap stored in DB:", saved._id);

    // Send response to frontend
    return res.status(200).json({
      success: true,
      mermaidCode,
      fromDatabase: false,
    });
  } catch (error) {
    console.error("❌ Error generating roadmap:", error);

    // Handle AI API specific errors
    if (error.message?.includes("API key")) {
      return res.status(500).json({
        success: false,
        message: "AI service configuration error. Please contact support.",
      });
    }

    if (error.message?.includes("rate limit")) {
      return res.status(503).json({
        success: false,
        message: "Service is busy. Please try again in a few moments.",
      });
    }

    if (error.message?.includes("timeout")) {
      return res.status(504).json({
        success: false,
        message: "Request timeout. Please try again.",
      });
    }

    // Handle database errors
    if (
      error.name === "MongoNetworkError" ||
      error.name === "MongooseServerSelectionError"
    ) {
      return res.status(503).json({
        success: false,
        message: "Database connection error. Please try again later.",
      });
    }

    if (error.name === "ValidationError") {
      const validationErrors = Object.values(error.errors).map(
        (e) => e.message,
      );
      return res.status(400).json({
        success: false,
        message: "Validation failed.",
        errors: validationErrors,
      });
    }

    // Generic error
    return res.status(500).json({
      success: false,
      message: "Failed to generate roadmap. Please try again later.",
      error: process.env.NODE_ENV === "development" ? error.message : undefined,
    });
  }
};

export default generateRoadmap;
