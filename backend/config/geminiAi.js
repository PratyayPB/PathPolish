{
  /*  Gemini AI Configuration */
}
import { GoogleGenAI } from "@google/genai";
import dotenv from "dotenv";

dotenv.config();
const API_KEY = process.env.GEMINI_API_KEY;

const genAI = new GoogleGenerativeAI(API_KEY);

export const geminiModel = genAI.getGenerativeModel({
  model: "gemini-2.5-flash",
});
