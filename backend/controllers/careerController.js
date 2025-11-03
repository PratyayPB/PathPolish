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
    } = req.body;

    if (
      !name ||
      !interests ||
      !education ||
      !skills ||
      !goals ||
      !experience ||
      !currentRole ||
      !industry
    )
      return res.status(400).json({ message: "Enter all the fields" });

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
      
      
      Based on this information, suggest:
      1. Short-term actionable steps they can take.
      2. Long-term career growth strategies.
      3. Relevant resources(e.g., books, online courses or certification programmes for skill development) to pursue along with the links.
      4. Potential alternative career paths (if applicable).
      
      Keep the advice personalized, practical, and encouraging.Keep the response within 200 words start with hello {name} and keep it simple and precise
      
        `;

    const result = await geminiModel.generateContent(prompt);
    const output = await result.response.text();
    // const response = await geminiModel.generateContent({
    //   role: "career guide",
    //   contents: [
    //     {
    //       role: "user",
    //       parts: [{ text: prompt }],
    //     },
    //   ],
    // });
    console.log(output);

    return res.status(200).json({ guide: output });

    // console.log(response.text);
  } catch (error) {
    console.error("Error generating guide:", error);
    if (error.code === 503)
      return res
        .status(503)
        .json({ message: "Please try again. Server overloaded." });

    return res.status(500).json({ message: error.message || "Server error" });
  }
};
export default getGuide;
