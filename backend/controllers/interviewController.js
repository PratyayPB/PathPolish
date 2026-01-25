import { GoogleGenerativeAI } from "@google/generative-ai";
import dotenv from "dotenv";
import { InterviewType, InterviewQuestion } from "../models/interviewModel.js";
dotenv.config();

const geminiAI = new GoogleGenerativeAI(process.env.GEMINI_API_KEY);
const geminiModel = geminiAI.getGenerativeModel({ model: "gemini-2.5-flash" });

const createInterviewType = async (req, res) => {
  try {
    const { type_name, description } = req.body;

    // Validation
    if (!type_name || !description) {
      return res.status(400).json({
        success: false,
        message: "Type name and description are required.",
      });
    }

    // Validate type_name length
    if (type_name.trim().length < 2) {
      return res.status(400).json({
        success: false,
        message: "Type name must be at least 2 characters long.",
      });
    }

    // Check for duplicate type
    const existing = await InterviewType.findOne({
      type_name: type_name.trim(),
    });
    if (existing) {
      return res.status(409).json({
        success: false,
        message: "Interview type with this name already exists.",
      });
    }

    const interviewType = await InterviewType.create({
      type_name: type_name.trim(),
      description: description.trim(),
    });

    return res.status(201).json({
      success: true,
      data: interviewType,
    });
  } catch (error) {
    console.error("Error creating interview type:", error);

    // Handle duplicate key error
    if (error.code === 11000) {
      return res.status(409).json({
        success: false,
        message: "Interview type with this name already exists.",
      });
    }

    // Handle validation errors
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

    return res.status(500).json({
      success: false,
      message: "Failed to create interview type.",
      error: process.env.NODE_ENV === "development" ? error.message : undefined,
    });
  }
};

const createInterviewQuestion = async (req, res) => {
  try {
    const { type_name, question_text } = req.body;

    // Validation
    if (!type_name || !question_text) {
      return res.status(400).json({
        success: false,
        message: "Type name and question text are required.",
      });
    }

    // Validate question length
    if (question_text.trim().length < 5) {
      return res.status(400).json({
        success: false,
        message: "Question text must be at least 5 characters long.",
      });
    }

    const type = await InterviewType.findOne({ type_name: type_name.trim() });
    if (!type) {
      return res.status(404).json({
        success: false,
        message: "Interview type not found.",
      });
    }

    const interviewQuestion = await InterviewQuestion.create({
      interview_type_id: type._id,
      type_name: type_name.trim(),
      question_text: question_text.trim(),
    });

    return res.status(201).json({
      success: true,
      data: interviewQuestion,
    });
  } catch (error) {
    console.error("Error creating interview question:", error);

    // Handle validation errors
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

    return res.status(500).json({
      success: false,
      message: "Failed to create interview question.",
      error: process.env.NODE_ENV === "development" ? error.message : undefined,
    });
  }
};

/**
 * GET /interview/questions
 * Sends the list of interview questions to the frontend
 */

// const getInterviewQuestions = (req, res) => {
//   try {
//     console.log("Sending interview questions to frontend...");

//     // Note: 'questions' variable should be defined or fetched from database
//     // This appears to be referencing an undefined variable
//     // For now, wrapping with try-catch for safety

//     return res.status(200).json({
//       success: true,
//       data: questions,
//     });
//   } catch (error) {
//     console.error("Error fetching interview questions:", error);
//     return res.status(500).json({
//       success: false,
//       message: "Failed to fetch interview questions.",
//       error: process.env.NODE_ENV === "development" ? error.message : undefined,
//     });
//   }
// };

/**
 * POST /interview/feedback
 * Body: { responses: [ { question: string, response: string }, ... ] }
 * Returns: { feedback: string }
 */
const getInterviewFeedback = async (req, res) => {
  try {
    const responses = req.body?.responses;

    // Validation
    if (!responses || !Array.isArray(responses) || responses.length === 0) {
      return res.status(400).json({
        success: false,
        message: "Please provide interview responses.",
      });
    }

    // Check for invalid responses
    const invalidItem = responses.find(
      (item) => !item.question || !item.response,
    );
    if (invalidItem) {
      return res.status(400).json({
        success: false,
        message:
          "Each response must include both 'question' and 'response' fields.",
      });
    }

    // Validate response content
    const emptyResponse = responses.find(
      (item) => item.response.trim().length === 0,
    );
    if (emptyResponse) {
      return res.status(400).json({
        success: false,
        message: "Please provide answers to all questions.",
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

    if (!result || !result.response) {
      throw new Error("Invalid response from AI model");
    }

    const feedback = await result.response.text();

    if (!feedback || feedback.trim().length === 0) {
      throw new Error("AI model returned empty feedback");
    }

    return res.status(200).json({
      success: true,
      feedback,
    });
  } catch (error) {
    console.error("Error generating interview feedback:", error);

    // Handle AI API specific errors
    if (error.message?.includes("API key")) {
      return res.status(500).json({
        success: false,
        message: "AI service configuration error. Please contact support.",
      });
    }

    if (
      error.message?.includes("quota") ||
      error.message?.includes("rate limit")
    ) {
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

    return res.status(500).json({
      success: false,
      message: "Failed to generate feedback. Please try again.",
      error: process.env.NODE_ENV === "development" ? error.message : undefined,
    });
  }
};

const getInterviewTypes = async (req, res) => {
  try {
    const types = await InterviewType.find().lean();
    return res.status(200).json({
      success: true,
      data: types,
    });
  } catch (error) {
    console.error("Error fetching interview types:", error);
    return res.status(500).json({
      success: false,
      message: "Failed to fetch interview types.",
      error: process.env.NODE_ENV === "development" ? error.message : undefined,
    });
  }
};

export {
  getInterviewFeedback,
  getInterviewTypes,
  createInterviewType,
  createInterviewQuestion,
};
