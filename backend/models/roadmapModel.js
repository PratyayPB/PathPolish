import mongoose from "mongoose";

const resourceSchema = new mongoose.Schema({
  roadmap_id: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "Roadmap",
    required: true,
  },
  title: { type: String, required: true },
  url: { type: String, required: true },
});

const roadmapSchema = new mongoose.Schema({
  role_title: { type: String, required: true },
  duration: { type: String },
  description: { type: String },
  mermaid_code: { type: String },
  resources: [resourceSchema], // embed or remove if using separate collection
});

export default mongoose.model("Roadmap", roadmapSchema);
