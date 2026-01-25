import { GoogleGenerativeAI } from "@google/generative-ai";
import dotenv from "dotenv";

dotenv.config();
const geminiAI = new GoogleGenerativeAI(process.env.GEMINI_API_KEY);
const geminiModel = geminiAI.getGenerativeModel({ model: "gemini-2.5-flash" });

const getGuide = async (req, res) => {
  try {
    const {
      name,
      interests,
      education,
      skills,
      goals,
      experience,
      currentRole,
      industry,
      country,
    } = req.body;

    // Validation
    if (
      !name ||
      !interests ||
      !education ||
      !skills ||
      !goals ||
      !experience ||
      !currentRole ||
      !industry ||
      !country
    ) {
      return res.status(400).json({ 
        success: false,
        message: "All fields are required. Please fill out the complete form." 
      });
    }

    const prompt = `
      Provide career guidance for a professional with the following details:
      - Name: ${name}
      - Interests: ${interests}
      - Education: ${education}
      - Skills: ${skills}
      - Goals: ${goals}
      - Experience: ${experience}
      - Current Role: ${currentRole}
      - Industry: ${industry}
      - Country: ${country}
      
      
      Based on this information, suggest:
      1. Short-term actionable steps they can take.
      2. Long-term career growth strategies.
      3. Relevant resources(e.g., books, online courses or certification programmes for skill development) to pursue along with the links.
      4. Potential alternative career paths (if applicable).
      
      Keep the advice personalized, practical, and encouraging.Keep the response within 200 words start with hello {name} and keep it simple and precise 
      
        `;

    const result = await geminiModel.generateContent(prompt);
    
    if (!result || !result.response) {
      throw new Error("Invalid response from AI model");
    }
    
    const output = await result.response.text();
    
    if (!output || output.trim().length === 0) {
      throw new Error("AI model returned empty response");
    }
    
    console.log("Career guide generated successfully for:", name);

    return res.status(200).json({ 
      success: true,
      guide: output 
    });
  } catch (error) {
    console.error("Error generating career guide:", error);
    
    // Handle AI API specific errors
    if (error.message?.includes("API key")) {
      return res.status(500).json({ 
        success: false,
        message: "AI service configuration error. Please contact support." 
      });
    }
    
    if (error.code === 503 || error.message?.includes("overloaded")) {
      return res.status(503).json({ 
        success: false,
        message: "Service is currently busy. Please try again in a few moments." 
      });
    }
    
    if (error.message?.includes("quota") || error.message?.includes("rate limit")) {
      return res.status(503).json({ 
        success: false,
        message: "Service rate limit exceeded. Please try again later." 
      });
    }
    
    if (error.message?.includes("timeout")) {
      return res.status(504).json({ 
        success: false,
        message: "Request timeout. Please try again." 
      });
    }

    return res.status(500).json({ 
      success: false,
      message: "Failed to generate career guidance. Please try again.",
      error: process.env.NODE_ENV === "development" ? error.message : undefined
    });
  }
};
export default getGuide;
