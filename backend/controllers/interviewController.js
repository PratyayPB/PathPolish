import { GoogleGenerativeAI } from "@google/generative-ai";
import dotenv from "dotenv";
dotenv.config();

const geminiAI = new GoogleGenerativeAI(process.env.GEMINI_API_KEY);
const geminiModel = geminiAI.getGenerativeModel({ model: "gemini-2.5-flash" });

// Static interview questions
const questions = [
  "Tell me about yourself.",
  "What are your strengths and weaknesses?",
  "Where do you see yourself in the next five years?",
];

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

export { getInterviewQuestions, getInterviewFeedback };

// const questions = [
//   "Tell me about yourself.",
//   "What are your strengths and weaknesses?",
//   "Where do you see yourself in the next five years?",
// ];

// const rl = readline.createInterface({
//   input: process.stdin,
//   output: process.stdout,
// });

// const responseCollection = [];

// Ask questions recursively
// async function askQuestion(index = 0) {
//   if (index >= questions.length) {
//     console.log(
//       "\nInterview complete. Sending responses to AI for feedback...\n"
//     );
//     await getFeedback();
//     rl.close();
//     return;
//   }

//   rl.question(`${questions[index]}\n> `, async (answer) => {
//     responseCollection.push({
//       question: questions[index],
//       response: answer,
//     });
//     await askQuestion(index + 1);
//   });
// }

// // Build prompt and get feedback from model
// const prompt = `You are an HR interviewer. Analyze the following candidate's interview responses and provide constructive feedback in three short sections:\n1) Strengths\n2) Areas for improvement\n3) Overall concise impression\n\nCandidate responses:\n${JSON.stringify(
//   responseCollection,
//   null,
//   2
// )}\n\nKeep the response concise and actionable.`;

// const result = await geminiModel.generateContent(prompt);
// const feedback = await result.response.text();
// return feedback;

//frontend flow

{
  /*
const res = await fetch("/interview/questions");
const data = await res.json();
const questions = data.questions;

// Step 2: Display questions and collect responses
const responses = questions.map((q) => ({
  question: q,
  response: prompt(q), // replace with form input collection
}));

// Step 3: Send responses to backend
const feedbackRes = await fetch("/interview/feedback", {
  method: "POST",
  headers: { "Content-Type": "application/json" },
  body: JSON.stringify({ responses }),
});

const feedbackData = await feedbackRes.json();
console.log("AI Feedback:", feedbackData.feedback);
  */
}
