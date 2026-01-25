import express from "express";
import cors from "cors";
import bodyParser from "body-parser";
import morgan from "morgan";
import careerRoutes from "./routes/careerRoute.js";
import interviewRoutes from "./routes/interviewRoutes.js";
import roadmapRoutes from "./routes/roadmapRoutes.js";
import mongoose from "mongoose";
import bcrypt from "bcrypt";
import session from "express-session";
import MongoStore from "connect-mongo";
import dotenv from "dotenv";
import User from "./models/userModel.js";
import Admin from "./models/adminModel.js";
import blogRoutes from "./routes/blogsRoutes.js";
// import roadmapRoutes from "./routes/roadmapRoutes.js";
// import blogRoutes from "./routes/blogRoutes.js";
// import faqRoutes from "./routes/faqRoutes.js";
import path from "path";
import { fileURLToPath } from "url";

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);
// import authRoutes from "./routes/authRoutes.js";
// import aiRoutes from "./routes/aiRoutes.js";

dotenv.config();

const app = express();

// Middleware

app.use(
  cors({
    origin: "http://localhost:5173", // ✅ must match React URL exactly
    credentials: true, // ✅ allow cookies from frontend
    methods: "GET,POST,PUT,DELETE",
    allowedHeaders: "Content-Type,Authorization",
  })
);

app.use(express.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(morgan("dev"));
app.set("view engine", "ejs");
app.set("controllers", path.join(__dirname, "views"));

{
  /*  User Authentication and Authorization */
}

// Sessions
app.use(
  session({
    secret: process.env.SESSION_SECRET || "secret123",
    resave: false,
    saveUninitialized: false,
    store: MongoStore.create({
      mongoUrl: "mongodb://127.0.0.1:27017/PathPolish",
    }),
    cookie: { httpOnly: true, maxAge: 86400000 },
  })
);

//USER AUTHENTICATION

// REGISTER or SIGNUP
app.post("/signup", async (req, res) => {
  const { email, password } = req.body;

  const existingUser = await User.findOne({ email });
  if (existingUser)
    return res.status(400).json({ message: "Username already exists" }); //Redirect to "/login" in frontend

  const hashed = await bcrypt.hash(password, 10);
  await User.create({ email, password: hashed });

  res.json({ success: true, message: "User registered" }); //Redirect to the cureent user page before visiting login/register in frontend
  console.log("User registered:", email);
});

// USER LOGIN
app.post("/login", async (req, res) => {
  const { email, password } = req.body;

  const user = await User.findOne({ email });
  if (!user) return res.status(400).json({ message: "User not found" }); //Redirect to "/register" in frontend

  const match = await bcrypt.compare(password, user.password);
  if (!match) return res.status(400).json({ message: "Incorrect password" });

  req.session.userId = user.userId; // store session
  res.json({ success: true, email: user.email });
  console.log("User logged in:", email);
});

// LOGOUT
app.post("/logout", (req, res) => {
  //Build a frontend logout button with confirmation msg
  req.session.destroy(() => {
    res.clearCookie("connect.sid");
    res.json({ success: true });
  });
});

//ADMIN AUTHENTICATION

// REGISTER or SIGNUP
app.post("/admin/signup", async (req, res) => {
  const { email, password } = req.body;

  const existingAdmin = await Admin.findOne({ email });
  if (existingAdmin)
    return res.status(400).json({ message: "Username already exists" }); //Redirect to "/login" in frontend

  const hashed = await bcrypt.hash(password, 10);
  await Admin.create({ email, password: hashed });

  res.json({ success: true, message: "Admin registered" }); //Redirect to the cureent user page before visiting login/register in frontend
  console.log("Admin registered:", email);
});

//Login
app.post("/admin/login", async (req, res) => {
  const { email, password } = req.body;

  const admin = await Admin.findOne({ email });
  if (!admin) return res.status(400).json({ message: "Admin not found" }); //Redirect to "/register" in frontend

  const match = await bcrypt.compare(password, admin.password);
  if (!match) return res.status(400).json({ message: "Incorrect password" });

  req.session.adminId = admin.adminId; // store session
  res.json({ success: true, email: admin.email });
  console.log("Admin logged in:", email);
});

// LOGOUT
app.post("/admin/logout", (req, res) => {
  //Build a frontend logout button with confirmation msg
  req.session.destroy(() => {
    res.clearCookie("connect.sid");
    res.json({ success: true });
  });
});

// AUTH MIDDLEWARE
function requireLogin(req, res, next) {
  //Implement it in Resume,Interview,Roadmaps and CareerGuide
  if (!req.session.userId)
    return res.status(401).json({ message: "Login required" });
  next();
}

// PROTECTED ROUTE
app.get("/dashboard", requireLogin, (req, res) => {
  res.json({ message: "Access granted", userId: req.session.userId });
});

//testing mermaid to svg conversion
app.get("/test-mermaid", (req, res) => {
  res.render("mermaidToSvg");
});

//API Routes
app.use("/api/career-guide", requireLogin, careerRoutes);
app.use("/api/interview", interviewRoutes);
app.use("/api/roadmap", requireLogin, roadmapRoutes);
app.use("/api/blogs", blogRoutes);

//LOGIN CHECK FOR ADMINS

//Base Route
app.get("/", (req, res) => {
  res.send("Hello World!");
});

app.post("/api/message", (req, res) => {
  const { name } = req.body;
  res.json({ reply: `Hello, ${name}! This is a response from the backend.` });
  console.log(req.body);
});

export default app;
