import dotenv from "dotenv";
import app from "./app.js";
import connectdb from "./config/db.js";

dotenv.config();

// Connect to database
connectdb();

// Export the Express app for Vercel
export default app;
