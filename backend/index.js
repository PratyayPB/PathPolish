import dotenv from "dotenv";
import app from "./app.js";
import connectDB from "./config/db.js";

if (process.env.NODE_ENV !== "production") {
  dotenv.config();
}

// Connect to database
await connectDB();

// Export the Express app for Vercel
export default app;
