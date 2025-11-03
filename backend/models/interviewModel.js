import mongoose from "mongoose";

const interviewTypeSchema = new mongoose.Schema({
  type_name: { type: String, required: true, unique: true, trim: true },
  description: { type: String },
});

// export default mongoose.model("InterviewType", interviewTypeSchema);

const interviewQuestionSchema = new mongoose.Schema({
  interview_type_id: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "InterviewType",
    required: true,
  },
  question_text: { type: String, required: true },
});

// export default mongoose.model("InterviewQuestion", interviewQuestionSchema);

const tempInterviewResponseSchema = new mongoose.Schema({
  question_id: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "InterviewQuestion",
    required: true,
  },
  user_id: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "User",
    required: true,
  },
  response_text: { type: String, required: true },
  timestamp: { type: Date, default: Date.now },
});

// export default mongoose.model("TempInterviewResponse", tempInterviewResponseSchema);
