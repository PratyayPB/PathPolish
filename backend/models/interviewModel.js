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
  type_name: { type: String, required: true },
  question_text: { type: Array, required: true },
});

export const InterviewType = mongoose.model(
  "InterviewType",
  interviewTypeSchema
);
export const InterviewQuestion = mongoose.model(
  "InterviewQuestion",
  interviewQuestionSchema
);

//
