{
  /*  Gemini AI Configuration Test */
}

import { GoogleGenAI } from "@google/genai";
import dotenv from "dotenv";

dotenv.config();

// DO NOT hard-code your key like this in a real app!
// Use process.env.GEMINI_API_KEY
const API_KEY = process.env.GEMINI_API_KEY;

async function testKey() {
  try {
    const genAI = new GoogleGenAI(API_KEY);

    const result = await genAI.models.generateContent({
      model: "gemini-2.5-flash",
      contents: "Hello, world!",
    });

    // const response = result;

    console.log("✅ Success! Response:", result.text);
  } catch (error) {
    console.error("❌ Error testing API key:", error.message);
  }
}

testKey();
