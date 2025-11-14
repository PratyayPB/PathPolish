import { GoogleGenerativeAI } from "@google/generative-ai";
import dotenv from "dotenv";
import { InterviewType, InterviewQuestion } from "../models/interviewModel.js";
dotenv.config();

const geminiAI = new GoogleGenerativeAI(process.env.GEMINI_API_KEY);
const geminiModel = geminiAI.getGenerativeModel({ model: "gemini-2.5-flash" });

const createInterviewType = async (req, res) => {
  try {
    const { type_name, description } = req.body;

    if (!type_name || !description)
      return res.status(400).json({ message: "Enter all the fields" });

    const interviewType = await InterviewType.create({
      type_name,
      description,
    });

    return res.status(201).json({ interviewType });
  } catch (error) {
    console.error("Error creating interview type:", error);
    return res.status(500).json({ message: "Error creating interview type" });
  }
};

const createInterviewQuestion = async (req, res) => {
  try {
    const { type_name, question_text } = req.body;
    if (!type_name || !question_text)
      return res.status(400).json({ message: "Enter all the fields" });

    const type = await InterviewType.findOne({ type_name });
    if (!type) {
      return res.status(400).json({ message: "Couldn't find type" });
    }

    const interviewQuestion = await InterviewQuestion.create({
      interview_type_id: type._id,
      type_name,
      question_text,
    });

    return res.status(201).json({ interviewQuestion });
  } catch (error) {
    console.error("Error creating interview question:", error);
    return res
      .status(500)
      .json({ message: "Error creating interview question" });
  }
};

/**
 * GET /interview/questions
 * Sends the list of interview questions to the frontend
 */

const getInterviewQuestions = (req, res) => {
  console.log("Sending interview questions to frontend...");
  return res.status(200).json({ questions });
};

/**
 * POST /interview/feedback
 * Body: { responses: [ { question: string, response: string }, ... ] }
 * Returns: { feedback: string }
 */
const getInterviewFeedback = async (req, res) => {
  try {
    const responses = req.body?.responses;

    if (!responses || !Array.isArray(responses) || responses.length === 0) {
      return res.status(400).json({ message: "Provide interview responses." });
    }

    // Check for invalid responses
    const invalidItem = responses.find(
      (item) => !item.question || !item.response
    );
    if (invalidItem) {
      return res.status(400).json({
        message:
          "Each response must include both 'question' and 'response' fields.",
      });
    }

    // Build prompt and get feedback from model

    const prompt = `You are an HR interviewer. Analyze the following candidate's interview responses and provide constructive feedback in three sections:
    1) Strengths
    2) Areas for improvement
    3) Overall concise impression

    Candidate responses:
    ${JSON.stringify(responses, null, 2)}

    Keep the feedback concise and actionable.`;

    const result = await geminiModel.generateContent(prompt);
    const feedback = await result.response.text();

    return res.status(200).json({ feedback });
  } catch (error) {
    console.error("Error generating interview feedback:", error);
    return res.status(500).json({ message: error.message || "Server error" });
  }
};

export {
  getInterviewQuestions,
  getInterviewFeedback,
  createInterviewType,
  createInterviewQuestion,
};
