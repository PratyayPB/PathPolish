import mongoose from "mongoose";

const roadmapSchema = new mongoose.Schema({
  role: { type: String, required: true, trim: true },
  duration: { type: String, required: true, trim: true },
  mermaidCode: { type: String, required: true },
});

export default mongoose.model("Roadmap", roadmapSchema);
