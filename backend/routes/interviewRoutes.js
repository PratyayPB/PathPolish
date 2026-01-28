import express from "express";
import {
  getInterviewFeedback,
  createInterviewType,
  createInterviewQuestion,
  getInterviewTypes,
} from "../controllers/interviewController.js";
import { InterviewType } from "../models/interviewModel.js";
import { InterviewQuestion } from "../models/interviewModel.js";
import { requireLogin } from "../middleware/authMiddleware.js";
const router = express.Router();

// POST /interview/feedback  -> accepts responses array and returns AI feedback
// router.get("/questions", getInterviewQuestions);
// function requireAdmin(req, res, next) {
//   if (!req.session || !req.session.adminId)
//     return res.status(401).json({ message: "Admin login required" });
//   next();
// }

// function requireLogin(req, res, next) {
//   if (!req.session || !req.session.userId) {
//     return res.status(401).json({ message: "User login required" });
//   }
//   next();
// }

router.post("/feedback", requireLogin, getInterviewFeedback);
router.post("/createInterviewType", createInterviewType);
router.post("/createInterviewQuestion", createInterviewQuestion);
router.get("/types", getInterviewTypes);
router.get("/questions/:typeName", async (req, res) => {
  try {
    const { typeName } = req.params;

    // Find type first
    const type = await InterviewType.findOne({ type_name: typeName });
    if (!type) {
      return res.status(404).json({ message: "Interview type not found" });
    }

    // Fetch questions for that type
    const questions = await InterviewQuestion.find({
      interview_type_id: type._id,
    }).lean();

    return res.status(200).json(questions);
  } catch (err) {
    return res.status(500).json({ message: "Error fetching questions" });
  }
});

// POST /interview/start -> start interactive interview on server stdin (returns feedback once complete)

export default router;
