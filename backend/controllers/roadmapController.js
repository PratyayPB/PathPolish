import { GoogleGenerativeAI } from "@google/generative-ai";
// import mermaid from "https://cdn.jsdelivr.net/npm/mermaid@10/dist/mermaid.esm.min.mjs";
import mermaid from "mermaid";
import dotenv from "dotenv";
import Roadmap from "../models/roadmapModel.js";
dotenv.config();
const GenAI = new GoogleGenerativeAI(process.env.GEMINI_API_KEY);
const model = GenAI.getGenerativeModel({ model: "gemini-2.5-flash" });

mermaid.initialize({ startOnLoad: true });

// Function to generate AI roadmap in Mermaid format
async function generateMermaidCode(role, duration) {
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
  //   console.log("Raw AI Response Object:", result);

  let responseText = await result.response.text();
  responseText = responseText.replace(/```mermaid\n|```/g, "").trim();
  //   console.log("AI Response Text:", responseText);
  return responseText;
}

const generateRoadmap = async (req, res) => {
  const { role, duration } = req.body;
  try {
    //  Check if roadmap already exists
    const existingRoadmap = await Roadmap.findOne({ role, duration });

    if (existingRoadmap) {
      console.log("✅ Roadmap fetched from DB — no AI call needed.");

      return res.status(200).json({
        success: true,
        mermaidCode: existingRoadmap.mermaidCode,
        fromDatabase: true,
      });
    }

    const mermaidCode = await generateMermaidCode(role, duration);

    if (!mermaidCode) {
      console.error("❌ Failed to generate Mermaid code.");
      return res
        .status(500)
        .json({ success: false, message: "Generation failed." });
    }

    // Store newly generated roadmap in DB
    const saved = await Roadmap.create({
      role,
      duration,
      mermaidCode,
    });

    console.log("New Roadmap stored in DB:", saved._id);

    // 4) Send response to frontend
    return res.status(200).json({
      success: true,
      mermaidCode,
      fromDatabase: false,
    });
  } catch (error) {
    console.error("❌ Error generating roadmap:", error);
    return res.status(500).json({ success: false, message: "Server error." });
  }
};

export default generateRoadmap;
