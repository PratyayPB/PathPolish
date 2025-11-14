import mongoose from "mongoose";
import { nanoid } from "nanoid";

const adminSchema = new mongoose.Schema({
  adminId: {
    type: String,
    unique: true,
    index: true,
    default: () => nanoid(10),
  },
  email: { type: String, required: true, unique: true },
  password: { type: String, required: true },
});

export default mongoose.model("Admin", adminSchema);
