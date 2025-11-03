import express from "express";
import {
  getInterviewFeedback,
  getInterviewQuestions,
} from "../controllers/interviewController.js";

const router = express.Router();

// POST /interview/feedback  -> accepts responses array and returns AI feedback
router.get("/questions", getInterviewQuestions);
router.post("/feedback", getInterviewFeedback);

// POST /interview/start -> start interactive interview on server stdin (returns feedback once complete)

export default router;
