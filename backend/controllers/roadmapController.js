import { GoogleGenerativeAI } from "@google/generative-ai";
// import mermaid from "https://cdn.jsdelivr.net/npm/mermaid@10/dist/mermaid.esm.min.mjs";
import mermaid from "mermaid";
import dotenv from "dotenv";
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

// export default generateRoadmap;
// export default generateMermaidCode;

//fetches role and duration from the request body

//calls aiRoadmapResponse with the role and duration to get the ai-generated roadmap

//calls the mermaid api with the ai generated mermaid code to get the svg diagram

//returns the svg diagram
async function mermaidToSvg(mermaidCode) {
  if (typeof mermaidCode !== "string") {
    console.error("Invalid Mermaid input type:", typeof mermaidCode);
    throw new Error("Mermaid code must be a string");
  }
  try {
    const { svg } = await mermaid.render("graphDiv", mermaidCode);
    console.log("Generated SVG:");
    return svg;
  } catch (error) {
    console.error("Error converting Mermaid code to SVG:", error);
    return null;
  }
}
const generateRoadmap = async (req, res) => {
  const { role, duration } = req.body;
  const mermaidCode = await generateMermaidCode(role, duration);
  if (!mermaidCode) {
    console.error("Failed to generate Mermaid code.");
    return;
  }
  console.log("Generated Mermaid Code:", mermaidCode);
  const svg = await mermaidToSvg(mermaidCode);
  if (svg) {
    console.log("Generated SVG:");
    return res.status(200).json({ success: true });
  }
};

export default generateRoadmap;
